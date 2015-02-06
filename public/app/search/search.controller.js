'use strict';

angular
  .module('app.search', [])
  .controller('Search', Search);

Search.$inject = ['$scope', 'search', '$state'];

function Search($scope, search, $state) {
  //fetching artist list
  search.getSource(function(artists) {
    $scope.artists = artists;
  });

  $scope.test = function() {
    $state.go('result');
  }
}
