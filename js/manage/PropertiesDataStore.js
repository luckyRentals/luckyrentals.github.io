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
			  	{
			  		"image": "10BowersAveStreetView.jpg",
			  		"mainImage": true,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "10BowersAveFrontRoom.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "10BowersAveFamilyRoom.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "10BowersAveKitchen.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "10BowersAveBedroom1.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "10BowersAveBedroom2.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "10BowersAveBedroom3.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	}
			  ],
			  "isAvailable": true,
			  "cozyListing": "https://home.cozy.co/apply/12365"
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
			  	{
			  		"image": "12BowersAveStreetView.jpg",
			  		"mainImage": true,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "12BowersAveFrontRoom.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "12BowersAveFamilyRoom.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "12BowersAveKitchen.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "12BowersAveBedroom1.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "12BowersAveBedroom2.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	},
			  	{
			  		"image": "12BowersAveBedroom3.jpg",
			  		"mainImage": false,
			  		"caption": "Front View"
			  	}
			  ],
			  "isAvailable": false,
			  "cozyListing": ""
			}
		]
	};
}