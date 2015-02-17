// HomesHelper.js
// Conveinience class
var HomesHelper = function() {
    
    var that = this;

	this.retreiveFeaturedHome = function() {
		var homes = this.retreiveHomes();
		var featuredHome = {};
		$.each(homes, function(index, home) {
			if (home.isFeatured()) {
				featuredHome = home;
			}
		});
		return featuredHome;
	};

	this.retreiveHomes = function() {
		var retArray = [];
		var homes = new PropertiesDataStore();
		$.each(homes.listings(), function(index, homeJson) {
			retArray.push(new Home(homeJson));
		});
		return retArray;

		// FIXME: This should be the proper way...
		// $.getJSON( "data/homes.json", function( data ) {
		//   return data;
		// });
		// return [];
	};

	this.retreivePropertyByKey = function(propertyKey) {
		if (propertyKey === undefined) {
			return [];
		}
		var homes = new PropertiesDataStore();
		var retHome = {}; 
		$.each(homes.listings(), function(index, property) {
			var home = new Home(property);
			if (home.key() == propertyKey) {
				retHome = home;
				return false;
			}
		});
		return retHome; // FIXME: Should return a canned image...
	}

	this.retreivePropertyById = function(propertyId) {
		if (propertyId === undefined) {
			return [];
		}
		var homes = new PropertiesDataStore();
		$.each(homes.listings(), function(index, property) {
			var home = new Home(property);
			if (home.Id == propertyId) {
				return home;
			}
		});
		return []; // FIXME: Should return a canned image...
	}
};

