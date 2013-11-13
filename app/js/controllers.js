'use strict';

/* Controllers */

var app = angular.module('myApp.controllers', []);


app.controller('EventListCtrl', ['$scope', 'SennaEvents', function ($scope, SennaEvents) {
	$scope.events = SennaEvents.query();
}]);