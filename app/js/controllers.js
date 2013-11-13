'use strict';

/* Controllers */

var app = angular.module('myApp.controllers', []);


app.controller('EventListCtrl', ['$scope', 'SennaEvents', function ($scope, SennaEvents) {
	$scope.events = SennaEvents.query(function (response) {
		angular.forEach(response, function (item) {
			item.id = item.url.substring(item.url.lastIndexOf('/')+1,item.url.lastIndexOf('.'));
		});
	});
}]);