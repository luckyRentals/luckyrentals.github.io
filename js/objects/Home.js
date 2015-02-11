// Home.js

var Home = function(home){

	var that = this;

	var _home = {
	  id: 0,
	  key: "",
	  featured: false,
	  address: "",
	  city: "",
	  state: "OH",
	  zip: "",
	  monthlyCost: 0,
	  petsAllowed: false,
	  geocode: {
	    lat: 40.053543,
	    lon: -82.422778
	  },
	  sq_ft: 0,
	  bathrooms: 0,
	  bedroom: 0,
	  description: "",
	  mainImage: "",
	  images: [],
	  isAvailable: false,
	  cozyListing: ""
	};

	$.extend(_home, home);

	this.key = function() {
		return _home.key;
	}

	this.isFeatured = function() {
		return _home.featured;
	};

	this.streetName = function() {
		return _home.address;
	}

	this.city = function() {
		return _home.city;
	}

	this.state = function() {
		return _home.state;
	}

	this.zip = function() {
		return _home.zip;
	}

	this.monthlyCost = function() {
		return _home.monthlyCost;
	}

	this.petsAreAllowed = function() {
		return _home.petsAllowed;
	}

	this.geocode = function() {
		return _home.geocode;
	}

	this.squareFootage = function() {
		return _home.sq_ft;
	}

	this.bathrooms = function() {
		return _home.bathrooms;
	}

	this.bedroom = function() {
		return _home.bedroom;
	}

	this.description = function() {
		return _home.description;
	}

	this.mainImage = function() {
		return _home.mainImage;
	}

	this.images = function() {
		return _home.images;
	}

	this.isAvailable = function() {
		return _home.isAvailable;
	}

	this.cozyListing = function() {
		return _home.cozyListing;
	}

};