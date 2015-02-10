// PhotoHelper.js 
// This is used for photo assitance
var PhotoHelper = function() {
	var that = this;

	this.retreiveWelcomePhotos = function() {
		return new WelcomeDataStore().welcomePropertyImages();
	}
}