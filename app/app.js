
var wizbiiapp = angular.module('WizbiiApp', ["ngResource","ngRoute","ngCookies", "ngAnimate"]);

// Controllers
wizbiiapp.controller("MainController", MainController);
wizbiiapp.controller("LoginController", LoginController);
wizbiiapp.controller("FeedController", FeedController);

// Routes
wizbiiapp.config(function ($routeProvider) {
	$routeProvider
	.when("/login", {
		title: 'Login',
		templateUrl: "./app/views/login",
		controller: 'LoginController'
	})
	.when("/feed", {
		title: 'Flux d\'actualités',
		templateUrl: "./app/views/feed",
		controller: 'FeedController'
	})
	.otherwise({
		redirectTo: "/login"
	})
});

// Run
wizbiiapp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

// Modules
wizbiiapp.factory('apiService', function($http, $resource, $http, $httpParamSerializer, $cookies) {
	return {
		getTokenFromAPI: function (data) {
			var req = {
	            method: 'POST',
	            url: "https://api.wizbii.com/v1/account/validate",
	            headers: {
					"Authorization": "Basic " + btoa("test:secret"),
	                "Content-type": "application/x-www-form-urlencoded"
	            },
	            data: $httpParamSerializer(data)
	        }
			return $http(req);
		},
		getTokenFromCookies: function() {
			return $cookies.get("wizbii_accesstoken");
		},
		storeToken: function(token) {
			// Store token
			$cookies.put("wizbii_accesstoken", token);
		},
		destroyToken: function(token) {
			// Destroy token
			$cookies.remove("wizbii_accesstoken");
		},
		getFeed: function() {
			var req = {
	            method: 'POST',
	            url: "https://api.wizbii.com/v2/dashboard/?direction=newest",
				headers: {
					"Authorization": "Bearer " + this.getTokenFromCookies()
	            },
				data: {}
			}
			return $http(req);
		},
		storeUserInfos: function(userinfos) {
			// Store user infos
			$cookies.put("wizbii_userinfos", JSON.stringify(userinfos));
		},
		getUserInfosFromCookies: function(userinfos) {
			return JSON.parse($cookies.get("wizbii_userinfos"));
		},
		destroyUserInfos: function(userinfos) {
			// Destroy user infos
			$cookies.remove("wizbii_userinfos");
		}
	}
});