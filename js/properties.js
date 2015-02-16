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
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false,
			allow_resize: true, 
			allow_expand: false, 
			default_width: 750,
			default_height: 500,
			counter_separator_label: ' of ', /* The separator for the gallery counter 1 "of" 2 */
			horizontal_padding: 16,
			theme: 'pp_default', 
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: false,
			markup: '<div class="pp_pic_holder large-8 medium-8 small-10"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details detail_container"> \
											<p class="pp_description"></p> \
											<p class="currentTextHolder page_marker">0/0</p> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="hide-for-small"  style="z-index:20000"> \
							<ul class="button-group round even-3"> \
							  <li><div class="button" id="gallery_prev">Prev</div></li> \
							  <li><div class="button" id="gallery_close">Close</div></li> \
							  <li><div class="button" id="gallery_next">Next</div></li> \
							</ul> \
						</div> \
						<div class="show-for-small" style="z-index:20000"> \
							  <div class="button small-12" id="gallery_prev">Prev</div> \
							  <div class="button small-12" id="gallery_close">Close</div> \
							  <div class="button small-12" id="gallery_next">Next</div> \
						</div> \
						<script> \
							$("#gallery_prev").on("click", function(){ \
								$.prettyPhoto.changePage("previous"); \
							}); \
							$("#gallery_close").on("click", function(){ \
								$.prettyPhoto.close(); \
							}); \
							$("#gallery_next").on("click", function(){ \
								$.prettyPhoto.changePage("next"); \
							}); \
						</script> \
					</div> \
					<div class="pp_overlay"></div>'
		});
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
	var gallery = generateGallery(property.key(), property.images());
	propertyImg.on("click", function() {
  		//$("#" + property.key()).foundation('reveal','open');

		$.prettyPhoto.open(gallery.images, gallery.titles, gallery.descriptions);
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
	petsLabel.text("Pets Allowed");
	leftSection.append(petsLabel);
	var petsAllowed = $("<p/>");
	petsAllowed.text(property.petsAreAllowed() ? "Yes" : "No");
	leftSection.append(petsAllowed);
	var viewImagesButton = $("<a/>", {"class": "button large-10 medium-12 small-12", "data-reveal-id": property.key()});
	viewImagesButton.text("View More Images");
	viewImagesButton.on("click", function() {
		$.prettyPhoto.open(gallery.images, gallery.titles, gallery.descriptions);
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

function generateGallery (key, images) {
	var p_images = [];
	var p_titles = [];
	var p_descriptions = [];

	$.each(images, function(index, image){
		p_images.push("img/properties/" + key + "/" + image.image);
		p_titles.push(image.title);
		p_descriptions.push(image.caption);
	});

	return {
		images: p_images,
		titles: p_titles,
		descriptions: p_descriptions
	}
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
	var imageElement = $("<div/>");
	baseEl.append(imageElement);
	baseEl.append(close);
	$.each(images, function(index, image){
		var imgContainer = $("<div/>");
		var imageImg = $("<img/>", {"src": "img/properties/" + key + "/" + image.image, "class": "middle"});
		var description = $("<h4/>", {"style": "text-align:center"});
		description.text(image.caption);
		imgContainer.append(imageImg);
		imgContainer.append(description);
		imageElement.append(imgContainer);
	});
	// $(imageElement).slick({
	//   swipeToSlide: true,
	//   arrows: false
	// });
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