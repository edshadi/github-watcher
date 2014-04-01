'use strict';


// Declare app level module which depends on filters, and services
angular.module('githubWatcher', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/watchlists', {templateUrl: 'partials/watchlists/index.html', controller: 'WatchlistsController'});
  $routeProvider.when('/watchlists/new', {templateUrl: 'partials/watchlists/new.html', controller: 'CreateWatchlistController'});
  $routeProvider.otherwise({redirectTo: '/watchlists'});
}]);
