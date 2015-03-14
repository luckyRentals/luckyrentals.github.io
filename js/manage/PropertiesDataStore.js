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
			  "mainImage": "IMG_0033_2.jpg",
			  "images": [
			  	{
			  		"image": "IMG_0016_2.jpg",
			  		"mainImage": false,
			  		"title": "Front Room",
			  		"caption": "Front Room view from front door"
			  	},
			  	{
			  		"image": "IMG_0017_2.jpg",
			  		"mainImage": false,
			  		"title": "Front Room",
			  		"caption": "View from the front room into the living room"
			  	},
			  	{
			  		"image": "FrontToLivingRoom.jpg",
			  		"mainImage": false,
			  		"title": "Living Room",
			  		"caption": "Another angle from the living room"
			  	},
			  	{
			  		"image": "IMG_0019_2.jpg",
			  		"mainImage": false,
			  		"title": "Living Room",
			  		"caption": "View into the kitchen from the living room"
			  	},
			  	{
			  		"image": "IMG_0027_2.jpg",
			  		"mainImage": false,
			  		"title": "Kitchen",
			  		"caption": "New Cabinets and countertop"
			  	},
			  	{
			  		"image": "IMG_0031_2.jpg",
			  		"mainImage": false,
			  		"title": "Kitchen",
			  		"caption": "New Appliances"
			  	},
			  	{
			  		"image": "IMG_0033_2.jpg",
			  		"mainImage": true,
			  		"title": "Kitchen",
			  		"caption": "Spacious kitchen area"
			  	},
			  	{
			  		"image": "IMG_0023_2.jpg",
			  		"mainImage": false,
			  		"title": "Kitchen",
			  		"caption": "Plenty of counterspace"
			  	},
			  	{
			  		"image": "IMG_0029_2.jpg",
			  		"mainImage": false,
			  		"title": "Kitchen",
			  		"caption": "Washer and dryer hook-up"
			  	},
			  	{
			  		"image": "IMG_0025_2.jpg",
			  		"mainImage": false,
			  		"title": "Mudroom",
			  		"caption": "Mudroom from the kitchen"
			  	},
			  	{
			  		"image": "IMG_0001_2.jpg",
			  		"mainImage": false,
			  		"title": "Bedroom 1",
			  		"caption": "Bedroom at the top of the stairs"
			  	},
			  	{
			  		"image": "Bedroom1.jpg",
			  		"mainImage": false,
			  		"title": "Bedroom 1",
			  		"caption": "New double pane windows throughout"
			  	},
			  	{
			  		"image": "IMG_0004_2.jpg",
			  		"mainImage": false,
			  		"title": "Middle Bedroom",
			  		"caption": "Bedroom located in between the master and back bedroom"
			  	},
			  	{
			  		"image": "Bedroom2_2.jpg",
			  		"mainImage": false,
			  		"title": "Middle Bedroom",
			  		"caption": "Another view of the middle bedroom"
			  	},
			  	{
			  		"image": "IMG_0008_2.jpg",
			  		"mainImage": false,
			  		"title": "Master Bedroom",
			  		"caption": "Lots of natural light"
			  	},
			  	{
			  		"image": "Bedroom3.jpg",
			  		"mainImage": false,
			  		"title": "Master Bedroom",
			  		"caption": "The front bedroom is the most spacious"
			  	},
			  	{
			  		"image": "Bedroom3_2.jpg",
			  		"mainImage": false,
			  		"title": "Master Bedroom",
			  		"caption": "Another view of the front bedroom"
			  	},
			  	{
			  		"image": "IMG_0011_2.jpg",
			  		"mainImage": false,
			  		"title": "Bathroom",
			  		"caption": "Full size bathroom"
			  	},
			  	{
			  		"image": "IMG_0012_2.jpg",
			  		"mainImage": false,
			  		"title": "Bathroom",
			  		"caption": "Shower with tub"
			  	},
			  	{
			  		"image": "IMG_0014_2.jpg",
			  		"mainImage": false,
			  		"title": "Upstairs Hallway",
			  		"caption": "Looking down the hallway towards the front bedroom"
			  	},
			  	{
			  		"image": "IMG_0010_2.jpg",
			  		"mainImage": false,
			  		"title": "Upstairs Hallway",
			  		"caption": "Opposite side of the hallway"
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