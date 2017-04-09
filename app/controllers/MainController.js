/*
*	MainController
*/

function MainController($scope, $location, apiService) {

	// Autoconnect and token test
	if($location.path().indexOf("/login") == 0) {
		// Get token
		if(!angular.isUndefined(apiService.getTokenFromCookies())) {
			$location.url("/feed");
		}
	} else {
		if(angular.isUndefined(apiService.getTokenFromCookies())) {
			$location.url("/login");
		}
	}
}