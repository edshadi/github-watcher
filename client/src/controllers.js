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
.controller('ShowWatchlistController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/watchlists/'+$routeParams.name)
  .success(function(data, status, headers, config) {
    $scope.watchlist = data;
  })
  .error(function(data, status, headers, config) {
  })
}])
.controller("CreateRepositoryController", ['$scope', '$http', function($scope, $http) {
  $scope.addRepo = function() {
    var url = '/watchlists/' + $scope.watchlist._id + '/repos';
    $http.post(url, $scope.repo)
    .success(function(data, status, headers, config) {
      $scope.watchlist = data;
    })
    .error(function(data, status, headers, config) {
      debugger
    })
  }
}])

;
