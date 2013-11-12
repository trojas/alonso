'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('EventListCtrl', ['$scope', 'SennaEvents', function($scope, SennaEvents) {
    $scope.data = {};
    
    SennaEvents.query(function(response) {
      $scope.data.events = response;
    });
  }]);