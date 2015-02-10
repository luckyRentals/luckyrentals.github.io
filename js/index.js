// Homes.js
// This file represents the home functions

$(function() {
	var homesHelper = new HomesHelper();
	var featuredHome = homesHelper.retreiveFeaturedHome();
	var homes = homesHelper.retreiveHomes();
	var availableHomes = function() {
		var _availableHomes = [];
		$.each(homes, function(index, home) {
			if (home.isAvailable()){
				_availableHomes.push(home);
			}
		});
		return _availableHomes;
	};

	$("#numberOfHomes").text(availableHomes().length);

	if (featuredHome) {
		//$("#lucky-main").css('background-image', 'url(img/' + featuredHome.mainImage() + ')');
		generateFeaturedHomeHtml(featuredHome);	
	}

	var photoHelper = new PhotoHelper();
	var propertiesImages = photoHelper.retreiveWelcomePhotos();

	generatePropertiesCarasolHtml(propertiesImages);

});

function generateFeaturedHomeHtml(featuredHome) {
	var baseEl = $("#featured-property-section");
	var container = $("<div/>", {"class": "panel"});
	baseEl.append(container);
	var titleRow = $("<div/>", {"class": "row"});
	container.append(titleRow);
	var titleSection = $("<div/>", {"class": "medium-12 large-12 columns", "id": "title"});
	var title = $("<h3/>", {"class": ""});
	title.text("Featured Property");
	titleSection.append(title);
	titleRow.append(titleSection);
	var row = $("<div/>", {"class": "row"});
	container.append(row);
	var imageSection = $("<div/>", {"class": "medium-4 large-4 columns"});
	var image = $("<img/>", {"src": "img/properties/" + featuredHome.key() + "/" + featuredHome.mainImage()});
	imageSection.append(image);
	row.append(imageSection);
	var descriptionSection = $("<div/>", {"class": "medium-8 large-8 columns"});
	var descriptionRow = $("<div/>", {"class": "row"});
	var description = $("<div/>");
	description.text(featuredHome.description());
	descriptionSection.append(description);
	row.append(descriptionSection);
	var propertyOptionsSection = $("<div/>", {"class": "row property-options"});
	var propertyViewOptions = $("<div/>", {"class": "medium-6 large-6 columns"});
	propertyOptionsSection.append(propertyViewOptions);
	var viewPropertyButton = $("<div/>", {"class": "button large-12 medium-12 small-12"});
	$(viewPropertyButton).text("View Details");
	$(viewPropertyButton).on("click", function() {

	});
	propertyViewOptions.append(viewPropertyButton);
	if (featuredHome.cozyListing().length > 0) {
		var propertyApplyOptions = $("<div/>", {"class": "medium-6 large-6 columns"});
		propertyOptionsSection.append(propertyApplyOptions);
		var applyPropertyButton = $("<div/>", {"class": "button large-12 medium-12 small-12"});
		$(applyPropertyButton).text("Apply Now");
		$(applyPropertyButton).on("click", function() {
			window.location.href=featuredHome.cozyListing();
		});
		propertyApplyOptions.append(applyPropertyButton);
	}
	container.append(propertyOptionsSection);
}

function generatePropertiesCarasolHtml(propertyImages) {
	var baseEl = $("#property_teaser");
	$.each(propertyImages, function(index, imagePath){
		var imageImg = $("<img/>", {"src": "img/" + imagePath, "class": "middle"});
		baseEl.append(imageImg);
	});
	$(baseEl).slick({
	  infinite: true,
	  autoplay: true,
	  swipeToSlide: true,
	  arrows: false,
	  speed: 500,
	  cssEase: 'linear'
	});
}


