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
		$.each(tempJson, function(index, homeJson) {
			retArray.push(new Home(homeJson));
		});
		return retArray;

		// FIXME: This should be the proper way...
		// $.getJSON( "data/homes.json", function( data ) {
		//   return data;
		// });
		// return [];
	};

	var tempJson = [
		{
		  "id": 1,
		  "featured": true,
		  "address": "10 Bowers Ave.",
		  "city": "Newark",
		  "state": "OH",
		  "zip": "43055",
		  "geocode": {
		    "lat": 40.053543,
		    "lon": -82.422778
		  },
		  "sq_ft": 1200,
		  "bathrooms": 1,
		  "bedroom": 3,
		  "description": "A beautiful two story 3 bedroom apartment that has been completely remodeled.",
		  "mainImage": "10BowersAve.jpg",
		  "images": [
		    {
		      "description": "some description",
		      "imageName": "image.jpg"
		    }
		  ],
		  "isAvailable": true,
		  "cozyListing": "https://home.cozy.co/apply/11015"
		},
		{
		  "id": 2,
		  "featured": false,
		  "address": "12 Bowers Ave.",
		  "city": "Newark",
		  "state": "OH",
		  "zip": "43055",
		  "geocode": {
		    "lat": 40.053543,
		    "lon": -82.422778
		  },
		  "sq_ft": 1200,
		  "bathrooms": 1,
		  "bedroom": 3,
		  "description": "A beautiful two story 3 bedroom apartment",
		  "mainImage": "12BowersFrontImage.jpg",
		  "images": [
		    {
		      "description": "some description",
		      "imageName": "image.jpg"
		    }
		  ],
		  "isAvailable": false,
		  "cozyListing": "https://home.cozy.co/apply/11015"
		}
	];
};
// var HomesHelper = Class({

//     initialize: function() {
      
//     },

// 	retreiveFeaturedHome: function() {
// 		var homes = this.retreiveHomes();
// 		$.each(homes, function(index, home) {
// 			if (home.isFeatured()) {
// 				return home;
// 			}
// 		});
// 		return {};
// 	},

// 	retreiveHomes: function() {
// 		$.get( "../data/homes.json", function( data ) {
// 		  return data;
// 		});
// 		return [];
// 	}
// });