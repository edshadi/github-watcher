'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('WatchlistsController', ['$scope', function($scope) {
  $scope.watchlists = [
    {name: "my list"}
  ]
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
