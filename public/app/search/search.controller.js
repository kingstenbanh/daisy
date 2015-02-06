'use strict';

angular
  .module('app.search', [])
  .controller('Search', _Search);

_Search.$inject = ['$scope', 'search', '$state'];

function _Search($scope, search, $state) {
  search.getSource(function(artists) {
    $scope.artists = artists;
  });

  $scope.test = function() {
    $state.go('result');
  }
}
