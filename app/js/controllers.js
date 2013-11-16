'use strict';

/* Controllers */

var app = angular.module('myApp.controllers', ['google-maps']);


app.controller('EventListCtrl', ['$scope', 'SennaEvents', function ($scope, SennaEvents) {
	$scope.events = SennaEvents.list.query(function (response) {
		angular.forEach(response, function (item) {
			item.id = item.url.substring(item.url.lastIndexOf('/')+1,item.url.lastIndexOf('.'));
		});
	});
}]);

app.controller('EventDetailsCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
	var event = {
	'name': $routeParams.eventId,
    'address':'asdfsa',
    'start_date': 'asdfsa', 
    'city': 'hi',
    'state': 'ca',
    'description': 'asdf'
    }
    
    $http.get('http://senna-mock.herokuapp.com/events/'+$routeParams.eventId+'.json').success(function(data) {
    	$scope.event = data;
    });
    //$scope.event = event;
    
    $scope.center = {
    	latitude: 32.7150, // initial map center latitude
		longitude: -117.1625 // initial map center longitude
    }
    $scope.markers = []; // an array of markers,
	$scope.zoom = 8; // the zoom level
	$scope.fit = true;
}]);
