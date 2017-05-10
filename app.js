//Module
var kristal = angular.module('kristal', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

//Routes
kristal.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
        templateUrl: "views/main.html",
        controller: "mainController"
    });
    // use the HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });



}]);

kristal.controller('mainController', ['$scope', '$log', '$http', function($scope, $log, $http) {


    $scope.getLocation = function(val) {
        return $http.get('https://staging.investo2o.com/assetmanager-ws/api/v1/assets/getassets', {
            params: {
                query: val,
                assetType: "STK"
            },
            headers: {
                "Access-Token": "eWEyOS5HbHNwQkRCVUJPX2d0UUNGUVR4Z1NKRTgzUkdCWHB2V1NCbWwtckNHWW5iS05NSjJLY0J5YU5CeU5QWFhTU3R5N1phdTctd250aW15dk5ZUFcySEt3ckpxNUdCNFhwQzYyNGVQcnlKSWlYa21Fa0xvQ0hIZ1kxZVRjaU0wJVVTRVIlMzc5",
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "<origin> | *",
                "User-ID": "379",
                "User-IP": "0.0.0.0",
                "Agent": "agent",
            }
        }).then(function successCallback(response) {
            console.log("GREAT");
        }, function errorCallback(response) {
            console.log(response)
        });
    };

}]);
