'use strict';

angular
  .module('app.results', [])
  .controller('Results', Results);

Results.$inject = ['$scope', 'search', '$state'];

function Results ($scope, search, $state) {

  $scope.answer = search.getAnswer();
  $scope.message = '';

  $scope.displayInfo = displayInfo;

  function displayInfo () {
     var infoObj = search.getInfo();
     $scope.url = infoObj.url;
     $scope.cover = infoObj.cover;
     $scope.message = 'View source';
  }
}
