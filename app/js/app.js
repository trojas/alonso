'use strict';


// Declare app level module which depends on filters, and services
var alonsoApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]);

alonsoApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   	when('/events', {
   		templateUrl: 'partials/event_list.html',
   		controller: 'EventListCtrl'
   	}).
   	when('/events/:eventId', {
  		templateUrl: 'partials/event_details.html',
  		controller: 'EventDetailsCtrl'
  	}).
  	otherwise({redirectTo: '/events'});
}]);
