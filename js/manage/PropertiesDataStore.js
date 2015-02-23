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
			  "mainImage": "front_room1.jpg",
			  "images": [
			  	{
			  		"image": "front_room1.jpg",
			  		"mainImage": true,
			  		"title": "Front Room",
			  		"caption": "Front Room view from front door"
			  	},
			  	{
			  		"image": "FrontToLivingRoom.jpg",
			  		"mainImage": false,
			  		"title": "Front Room",
			  		"caption": "View from front room into the living room"
			  	},
			  	{
			  		"image": "LivingRoom.jpg",
			  		"mainImage": false,
			  		"title": "Living Room",
			  		"caption": "Spacious Living Room"
			  	},
			  	{
			  		"image": "LivingRoom2.jpg",
			  		"mainImage": false,
			  		"title": "Living Room",
			  		"caption": "Another angle from the living room"
			  	},
			  	{
			  		"image": "image_coming_soon.jpg",
			  		"mainImage": false,
			  		"title": "Kitchen",
			  		"caption": "New Cabinets and appliances"
			  	},
			  	{
			  		"image": "Bedroom1.jpg",
			  		"mainImage": false,
			  		"title": "Bedroom 1",
			  		"caption": "Bedroom at the top of the stairs"
			  	},
			  	{
			  		"image": "Bedroom2.jpg",
			  		"mainImage": false,
			  		"title": "Middle Bedroom",
			  		"caption": "Bedroom with a closet"
			  	},
			  	{
			  		"image": "Bedroom2_2.jpg",
			  		"mainImage": false,
			  		"title": "Middle Bedroom",
			  		"caption": "Another view of the middle bedroom"
			  	},
			  	{
			  		"image": "Bedroom3.jpg",
			  		"mainImage": false,
			  		"title": "Front Bedroom",
			  		"caption": "The front bedroom is the most spacious"
			  	},
			  	{
			  		"image": "Bedroom3_2.jpg",
			  		"mainImage": false,
			  		"title": "Front Bedroom",
			  		"caption": "Another view of the front bedroom"
			  	},
			  	{
			  		"image": "Bathroom.jpg",
			  		"mainImage": false,
			  		"title": "Bathroom",
			  		"caption": "Full size bathroom"
			  	},
			  	{
			  		"image": "Hallway2.jpg",
			  		"mainImage": false,
			  		"title": "Upstairs Hallway",
			  		"caption": "Looking down the hallway towards the front bedroom"
			  	},
			  	{
			  		"image": "Hallway1.jpg",
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