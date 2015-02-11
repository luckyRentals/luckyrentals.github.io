// PropertiesDataStore.js
// This class will hold the property json ...

var PropertiesDataStore = function() {

	this.listings = function() {
		return [
			{
			  "id": 1,
			  "key": "10BowersAve",
			  "featured": true,
			  "address": "10 Bowers Ave.",
			  "city": "Newark",
			  "state": "OH",
			  "zip": "43055",
			  "monthlyCost": 750,
			  "petsAllowed": false,
			  "geocode": {
			    "lat": 40.053543,
			    "lon": -82.422778
			  },
			  "sq_ft": 1200,
			  "bathrooms": 1,
			  "bedroom": 3,
			  "description": "A beautiful two story 3 bedroom apartment that has been completely remodeled.",
			  "mainImage": "10BowersAveStreetView.jpg",
			  "images": [
				"10BowersAveFrontRoom.jpg",
				"10BowersAveFamilyRoom.jpg",
				"10BowersAveKitchen.jpg",
				"10BowersAveBedroom1.jpg",
				"10BowersAveBedroom2.jpg",
				"10BowersAveBedroom3.jpg"
			  ],
			  "isAvailable": true,
			  "cozyListing": "https://home.cozy.co/apply/11015"
			},
			{
			  "id": 2,
			  "key": "12BowersAve",
			  "featured": false,
			  "address": "12 Bowers Ave.",
			  "city": "Newark",
			  "state": "OH",
			  "zip": "43055",
			  "monthlyCost": 750,
			  "petsAllowed": false,
			  "geocode": {
			    "lat": 40.053543,
			    "lon": -82.422778
			  },
			  "sq_ft": 1200,
			  "bathrooms": 1,
			  "bedroom": 3,
			  "description": "A beautiful two story 3 bedroom apartment",
			  "mainImage": "12BowersAveStreetView.jpg",
			  "images": [
				"12BowersAveFrontRoom.jpg",
				"12BowersAveFamilyRoom.jpg",
				"12BowersAveKitchen.jpg",
				"12BowersAveBedroom1.jpg",
				"12BowersAveBedroom2.jpg",
				"12BowersAveBedroom3.jpg"
			  ],
			  "isAvailable": false,
			  "cozyListing": ""
			}
		]
	};
}