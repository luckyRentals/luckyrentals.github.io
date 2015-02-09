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
	var image = $("<img/>", {"src": "img/" + featuredHome.mainImage()});
	imageSection.append(image);
	row.append(imageSection);
	var descriptionSection = $("<div/>", {"class": "medium-8 large-8 columns"});
	var description = $("<div/>");
	description.text(featuredHome.description());
	descriptionSection.append(description);
	row.append(descriptionSection);
}