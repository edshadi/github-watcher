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
  $routeProvider.when('/watchlists', {templateUrl: 'views/watchlists/index.html', controller: 'WatchlistsController'});
  $routeProvider.when('/watchlists/new', {templateUrl: 'views/watchlists/new.html', controller: 'CreateWatchlistController'});
  $routeProvider.when('/watchlists/:name', {templateUrl: 'views/watchlists/show.html', controller: 'ShowWatchlistController'});
  $routeProvider.otherwise({redirectTo: '/watchlists'});
}]);
