// properties.js
$(function(){

	var homeHelper = new HomesHelper();
	var properties = homeHelper.retreiveHomes();

	var hasAvailableProperties = false;
	if (properties.length > 0) {
		$.each(properties, function(index, property) {
			if (property.isAvailable()) {
				$("#properties").append(generatePropertyView(property));
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
			<div class="button large-10 medium-10 small-10">View More Images</div>
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
	var propertyDiv = $("<div/>", {"class": "panel radius row property"});
	var propertyOverview = $("<div/>", {"class": "large-4 medium-4 small-12 columns"});
	propertyDiv.append(propertyOverview);
	var propertyImg = $("<img/>", {"src": "img/properties/" + property.key() + "/" + property.mainImage()});
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
	var viewImagesButton = $("<div/>", {"class": "button large-10 medium-10 small-10"});
	viewImagesButton.text("View More Images");
	viewImagesButton.on("click", function() {
		// FIXME: need to add the images here
		generatePropertiesImage(property.images());
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

function generatePropertiesImage(images) {
	
}