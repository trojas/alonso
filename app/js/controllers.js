'use strict';

/* Controllers */

var eventApp = angular.module('myApp', []);

eventApp.controller('EventListCtrl', function EventListCtrl($scope, $http) {
  $http.get('events/events.json').success(function(data) {
    $scope.events = data;
  });
});