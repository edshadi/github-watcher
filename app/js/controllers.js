'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WatchlistsController', ['$scope', function($scope) {
    $scope.watchlists = [
      {name: "my list"}
    ]
  }])
  .controller('CreateWatchlistController', ['$scope', function($scope) {

  }])
;
