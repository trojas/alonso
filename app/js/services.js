// 'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', ['ngResource']);


services.factory('SennaEvents', ['$resource',
	function($resource) {
	    return $resource('http://senna-mock.herokuapp.com/events.json', {}, {
    		query: {
    			method: 'GET',
    			params: {},
    			isArray: true
    		}
  		});
}]);
