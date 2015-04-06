// PhotoHelper.js 
// This is used for photo assitance
var PhotoHelper = function() {
	var that = this;

	this.retrieveWelcomePhotos = function(options) {
        var _defaults = {
            onSuccess: function(data) {},
            onFailure: function() {}
        }
        $.extend(_defaults,options);
		//return new WelcomeDataStore().welcomePropertyImages();

        $.ajax({
            type: "GET",
            url: "data/welcomeImages.json",
            dataType: "json",
            beforeSend: function () {
                // Need to add a working spinner
            }, success: function (data) {
                _defaults.onSuccess(data);
            }, complete: function () {
                // Need to remove a working spinner
            }, error: function(xhr,status,error) {
                console.log("Error: " + error);
                _defaults.onFailure();
            }
        });
	}
}