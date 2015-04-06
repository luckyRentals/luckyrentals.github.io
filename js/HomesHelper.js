// HomesHelper.js
// Conveinience class
var HomesHelper = function() {
    
    var that = this;

	this.retrieveFeaturedHome = function(onSuccess) {
        if (typeof(onSuccess) === "function") {
            this.retrieveHomes(function(homes) {
                var featuredHome = {};
                $.each(homes, function(index, home) {
                    if (home.isFeatured()) {
                        featuredHome = home;
                    }
                });
                onSuccess(featuredHome);
            });
        }
	};

	this.retrieveHomes = function(onSuccess) {
        if (typeof(onSuccess) === "function") {
            $.ajax({
                type: "GET",
                url: "data/homes.json",
                dataType: "json",
                beforeSend: function () {
                    // Need to add a working spinner
                }, success: function (data) {
                    var retArray = [];
                    $.each(data, function (index, homeJson) {
                        retArray.push(new Home(homeJson));
                    });
                    onSuccess(retArray);
                }, complete: function () {
                    // Need to remove a working spinner
                }, error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
        }
	};

	this.retrievePropertyByKey = function (propertyKey, onSuccess) {
		if (propertyKey === undefined) {
			return [];
		}
        if (typeof (onSuccess) === "function") {
            $.ajax({
                type: "GET",
                url: "data/homes.json",
                dataType: "json",
                beforeSend: function () {
                    // Need to add a working spinner
                }, success: function (data) {
                    var retHome = {};
                    $.each(data, function (index, property) {
                        var home = new Home(property);
                        if (home.key() == propertyKey) {
                            retHome = home;
                            return false;
                        }
                    });
                    // FIXME: Should return a canned image...
                    onSuccess(retHome);
                }, complete: function () {
                    // Need to remove a working spinner
                }, error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
        }
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

