'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('WatchlistsController', ['$scope', '$http', function($scope, $http) {
  $http.get('/watchlists')
  .success(function(data, status, headers, config) {
    $scope.watchlists = data;
  })
  .error(function(data, status, headers, config) {
  })
}])
.controller('CreateWatchlistController', ['$scope', '$http', function($scope, $http) {
  $scope.save = function(watchlist) {
    $http.post('/watchlists', watchlist)
    .success(function(data, status, headers, config) {
      console.log(data);
    })
    .error(function(data, status, headers, config) {
      console.log(data);
    });
  }
}])
;
