'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
  .factory('SennaEvents', function($resource) {
    return $resource('http://senna-mock.herokuapp.com/events.json', {})
  })
  .value('version', '0.1');
