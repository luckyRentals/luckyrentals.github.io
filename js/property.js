// property.js
var lat;
var lng;
var marker;
$(function() {
	
	var homesHelper = new HomesHelper();
	var key = getParameterByName("pk");
	var property = homesHelper.retreivePropertyByKey(key);
	if(! property) {
		//Fixme need to redirect to an 404 error screen
	}

	if(!property.isFeatured()) {
		$("#property_title span.label").hide();
	}
	$("#property_title").text(property.streetName());
	$("#property_main_image").append($("<img/>",{"src": "img/properties/" + property.key() + "/" + property.mainImage()}));
	if(property.isAvailable() && property.cozyListing().length > 0) {
		$("#property_apply_btn").on("click", function() {
			window.location.href=property.cozyListing();
		});	
	}
	$("#property_rent").text("$" + property.monthlyCost());
	$("#property_deposit").text("$" + property.deposit());
	$("#property_pets_allowed").text(property.petsAreAllowed() ? "Yes" : "No");
	$("#property_sq_foot").text(property.squareFootage());
	$("#property_bedrooms").text(property.bedrooms());
	$("#property_bathrooms").text(property.bathrooms());
	$("#property_description").text(property.description());
	setFullAddress("property_full_address", property);
	generatePropertyPhotos(property);
	// Have to make foundation rebind to the DOM
	$(document).foundation('clearing', 'reflow');

	lat = property.geocode().lat;
	lng = property.geocode().lng;

	google.maps.event.addDomListener(window, 'load', initializeMap);

});

function initializeMap() {
    var mapCanvas = document.getElementById('property-map');
    var propertyGeocode = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      	center: propertyGeocode,
      	zoom: 18,
      	mapTypeId: google.maps.MapTypeId.HYBRID,
    	disableDefaultUI: true
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    marker = new google.maps.Marker({
	  position: propertyGeocode,
	  map: map,
	  icon: "img/Lucky13Marker.png",
	  animation: google.maps.Animation.DROP
	});
	google.maps.event.addListener(marker, 'click', toggleBounce);
	google.maps.event.addListener(map,'center_changed',function() {
  			window.setTimeout(function() {
    		map.panTo(marker.getPosition());
  		},3000);
	});
}

function toggleBounce() {
	if (marker.getAnimation() != null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

function setFullAddress(elementId, property) {
	$("#" + elementId).html(property.streetName() + "<br/>" + property.city() + ", " + property.state() + " " + property.zip());
}

function generatePropertyPhotos(property) {
	var baseEl = $("#property_images");
	$.each(property.images(), function(index, image){
		baseEl.append(
			$("<li/>", {"class": "th"}).append(
				$("<a/>", {"href": "img/properties/" + property.key() + "/" + image.image})).append(
				$("<img/>", {"src": "img/properties/" + property.key() + "/" + image.image, "data-caption": image.caption})));
	});
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}