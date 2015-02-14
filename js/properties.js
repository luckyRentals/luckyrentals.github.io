// properties.js
$(function(){

	var homeHelper = new HomesHelper();
	var properties = homeHelper.retreiveHomes();

	var hasAvailableProperties = false;
	if (properties.length > 0) {
		$.each(properties, function(index, property) {
			if (property.isAvailable()) {
				$("#modal_container").append(generatePropertiesImage(property.key(), property.images()));
				$("#properties").append(generatePropertyView(property));
				if(index + 1 < properties.length) {
					$("#properties").append($("<div/>",{"class": "divider"}));
				}
				hasAvailableProperties = true;
			}
		});
	} 

	if (hasAvailableProperties) {
		$("#no-property-message").hide();
	} else {
		$("#no-property-message").show();
	}
	
});

/*
	<div class="panel radius row">
		<div class="large-4 medium-4 small-12 columns">
			<img src="img/welcome/welcomeImage1.jpg" class=""></img>
			<!-- <label>Address</label> -->
			<h4>10 Bowers Ave.<br/>Newark, OH 43230</h4>
		</div>
		<div class="large-4 medium-8 columns">
			<label>Monthly</label>
			<p>$750</p>
			<label>Pets</label>
			<p>No</p>
			<div class="button large-10 medium-12 small-12">View More Images</div>
		</div> 
		<div class="large-4 medium-8 columns">
			<label>Square Footage</label>
			<p>1200</p>
			<label>Bedrooms</label>
			<p>3</p>
			<label>Bathrooms</label>
			<p>1</p>
		</div>
		<div class="button large-12 medium-12 small-12">Apply Now</div>
	</div>
*/
function generatePropertyView(property) {
	var propertyDiv = $("<div/>", {"class": "panel radius row property th"});
	var propertyOverview = $("<div/>", {"class": "large-4 medium-4 small-12 columns"});
	propertyDiv.append(propertyOverview);
	// var imagesModal = generatePropertiesImage(property.key(), property.images());
	// propertyDiv.append(imagesModal);
	var propertyImg = $("<img/>", {"src": "img/properties/" + property.key() + "/" + property.mainImage(), "data-reveal-id": property.key()});
	propertyImg.on("click", function() {
  		$("#" + property.key()).foundation('reveal','open');
	});
	propertyOverview.append(propertyImg);
	var address = $("<h4/>");
	address.html(property.streetName() + "<br/>" + property.city() + ", " + property.state() + " " + property.zip());
	propertyOverview.append(address);

	var leftSection = $("<div/>", {"class": "large-4 medium-8 columns"});
	propertyDiv.append(leftSection);
	var monthlyLabel = $("<label/>");
	monthlyLabel.text("Monthly");
	leftSection.append(monthlyLabel);
	var monthlyCost = $("<p/>");
	monthlyCost.text("$" + property.monthlyCost());
	leftSection.append(monthlyCost);
	var petsLabel = $("<label/>");
	petsLabel.text("Pets");
	leftSection.append(petsLabel);
	var petsAllowed = $("<p/>");
	petsAllowed.text(property.petsAreAllowed());
	leftSection.append(petsAllowed);
	var viewImagesButton = $("<a/>", {"class": "button large-10 medium-12 small-12", "data-reveal-id": property.key()});
	viewImagesButton.text("View More Images");
	viewImagesButton.on("click", function() {
  		$("#" + property.key()).foundation('reveal','open');
	});
	leftSection.append(viewImagesButton);

	var rightSection = $("<div/>", {"class": "large-4 medium-8 columns"});
	propertyDiv.append(rightSection);
	var sqFtLabel = $("<label/>");
	sqFtLabel.text("Square Footage");
	rightSection.append(sqFtLabel);
	var sqFt = $("<p/>");
	sqFt.text(property.squareFootage());
	rightSection.append(sqFt);
	var bedroomLabel = $("<label/>");
	bedroomLabel.text("Bedrooms");
	rightSection.append(bedroomLabel);
	var bedrooms = $("<p/>");
	bedrooms.text(property.bedroom());
	rightSection.append(bedrooms);
	var bathroomsLabel = $("<label/>");
	bathroomsLabel.text("Bathrooms");
	rightSection.append(bathroomsLabel);
	var bathrooms = $("<p/>");
	bathrooms.text(property.bathrooms());
	rightSection.append(bathrooms);

	if (property.cozyListing().length > 0) {
		var applyButton = $("<div/>", {"class": "button large-12 medium-12 small-12"});
		applyButton.text("Apply Now");
		applyButton.on("click", function() {
			window.location.href=property.cozyListing();
		});
		propertyDiv.append(applyButton);
	}

	return propertyDiv;
}

/*
<ul class="clearing-thumbs clearing-feature" data-clearing>
  <li><a href="path/to/your/img"><img src="path/to/your/img-th"></a></li>
  <li class="clearing-featured-img"><a href="path/to/your/img"><img src="path/to/your/img-th"></a></li>
  <li><a href="path/to/your/img"><img src="path/to/your/img-th"></a></li>
</ul>
*/
function generatePropertiesImage(key, images) {
	if (images.length == 0) return;
	var baseEl = $("<div/>", {"id": key,"class": "reveal-modal large", "data-reveal": ""});
	var close = $("<a/>",{"class":"close-reveal-modal"});
	close.html("&#215;");
	baseEl.append(close);
	baseEl.append($("<br/>"));
	var imageElement = $("<div/>");
	baseEl.append(imageElement);
	$.each(images, function(index, image){
		var imgContainer = $("<div/>");
		var imageImg = $("<img/>", {"src": "img/properties/" + key + "/" + image.image, "class": "middle"});
		var description = $("<h4/>", {"style": "text-align:center"});
		description.text(image.caption);
		imgContainer.append(imageImg);
		imgContainer.append(description);
		imageElement.append(imgContainer);
	});
	$(imageElement).on('init', function() {
		console.log('intialized');
	});
	$(imageElement).slick({
	  swipeToSlide: true,
	  arrows: false
	});
	return baseEl;

}
// 	var baseDiv = $("<ul/>", {"class": "clearing-thumbs clearing-feature", "data-clearing": ""});
// 	$.each(images, function(index, image) {
// 		baseDiv.append(
// 			$("<li/>", {"class": image.mainImage ? "clearing-featured-img" : "", "id": key + "_" + index}).append(
// 				$("<a/>", {"href": "img/properties/" + key + "/" + image.image, "class": "th"}).append(
// 					$("<img/>", {"data-caption": image.caption, "src": "img/properties/" + key + "/" + image.image})
// 					)
// 				)
// 			);
// 	});
// 	return baseDiv;
// }