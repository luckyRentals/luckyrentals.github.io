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
			  "securityDeposit": 750,
			  "petsAllowed": false,
			  "geocode": {
			    "lat": 40.053565,
			    "lng": -82.422778
			  },
			  "sq_ft": 1200,
			  "bathrooms": 1,
			  "bedroom": 3,
			  "description": "Welcome to 10 Bowers Avenue.  This 3 bedroom, 1 bath unit has been recently updated and is conveniently located in Newark, Ohio.  The kitchen has been completely remodeled and has newer appliances.  Easy access to State Route 16, 79 and 13 add to the benefits of this unit.  The monthly rent is $750 as well as a security deposit of $750; water and trash are included in the rent.  Rent is due on the 1st of the month and must be set up on an ACH auto draft process to be considered.  Credit check required and no pets allowed.",
			  "mainImage": "10BowersAveStreetView.jpg",
			  "images": [
			  	{
			  		"image": "10BowersAveStreetView.jpg",
			  		"mainImage": true,
			  		"title": "Street View",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "10BowersAveFrontRoom.jpg",
			  		"mainImage": false,
			  		"title": "Front Room",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "10BowersAveFamilyRoom.jpg",
			  		"mainImage": false,
			  		"title": "Front Family Room",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "10BowersAveKitchen.jpg",
			  		"mainImage": false,
			  		"title": "Kitchen",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "10BowersAveBedroom1.jpg",
			  		"mainImage": false,
			  		"title": "Bedroom 1",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "10BowersAveBedroom2.jpg",
			  		"mainImage": false,
			  		"title": "Bedroom 2",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "10BowersAveBedroom3.jpg",
			  		"mainImage": false,
			  		"title": "Bedroom 3",
			  		"caption": "Some descriptive item"
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
			  "securityDeposit": 750,
			  "petsAllowed": false,
			  "geocode": {
			    "lat": 40.053620,
			    "lng": -82.422778
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
			  		"title": "Front View",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "12BowersAveFrontRoom.jpg",
			  		"mainImage": false,
			  		"title": "Front View",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "12BowersAveFamilyRoom.jpg",
			  		"mainImage": false,
			  		"title": "Front View",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "12BowersAveKitchen.jpg",
			  		"mainImage": false,
			  		"title": "Front View",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "12BowersAveBedroom1.jpg",
			  		"mainImage": false,
			  		"title": "Front View",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "12BowersAveBedroom2.jpg",
			  		"mainImage": false,
			  		"title": "Front View",
			  		"caption": "Some descriptive item"
			  	},
			  	{
			  		"image": "12BowersAveBedroom3.jpg",
			  		"mainImage": false,
			  		"title": "Front View",
			  		"caption": "Some descriptive item"
			  	}
			  ],
			  "isAvailable": false,
			  "cozyListing": ""
			}
		]
	};
}