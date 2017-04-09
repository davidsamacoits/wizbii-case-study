/*
*	LoginController
*/

function LoginController($scope, $location, apiService) {

	$scope.erreurconnexion = false;
	
	$scope.data = {
        grant_type:"password", 
        username: "", 
        password: "", 
        client_id: "test"
    };
    $scope.encoded = btoa("test:secret");

	$scope.sendFormlogin = function() {
		// Token request
		apiService.getTokenFromAPI($scope.data)
			.then(function(data){
				// Store token
				apiService.storeToken(data.data["access-token"]);
				// Store user info
				var userinfos = {
					usercompletename: data.data.profile.name,
					userlastname: data.data.profile.last_name,
					userfirstname: data.data.profile.first_name
				};
				apiService.storeUserInfos(userinfos);
				// Redirect feed
				$location.url("/feed");
			},
			function (error){
				// Error
		        $scope.erreurconnexion = true;
		    });
	};
	

}