//Module
var kristal = angular.module('kristal', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngStorage']);

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


kristal.controller('mainController', ['$scope', '$log', '$http', '$sessionStorage', '$localStorage', function($scope, $log, $http, $sessionStorage, $localStorage) {

    $scope.i;

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

            $scope.details = response.data;
            return response.data;

        }, function errorCallback(response) {
            console.log(response)
        });
    };


    $scope.assetdetail = function(val) {
        $http.get('https://staging.investo2o.com/assetmanager-ws/api/v3/getassetdetails', {
            params: {
                asset: JSON.parse($scope.fundName.id),
                type: "STK",
                isCustom: false
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
            console.log(response);
            $localStorage.message = response.data;
            $scope.x = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        angular.element('.table-div').addClass('op');
    }

    $scope.compare = function(value) {
        $scope.save = $localStorage.message;
        console.log($scope.save);
    }

}]);




/* 
return response.data.results.map(function(item){
        return item.formatted_address;
      });


*/
