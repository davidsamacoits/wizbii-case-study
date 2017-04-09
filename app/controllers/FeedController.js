/*
*	FeedController
*/

function FeedController($scope, $location, apiService) {

	$scope.loadingfeed = true;
	$scope.errorfeed = false;
	$scope.publications = [];

	$scope.userinfos = apiService.getUserInfosFromCookies();

	// Getfeed
	apiService.getFeed()
		.then(function(data){
			console.log(data.data.feed_items.feed_items);
			$scope.loadingfeed = false;
			$scope.publications = data.data.feed_items.feed_items;
		},
		function (error){
			// Error
	        $scope.loadingfeed = false;
	        $scope.errorfeed = true;
	    });

	$scope.deconnexion = function() {
		// Destroy token
		apiService.destroyToken();
		// Redirect feed
		$location.url("/login");
	};

}