'use strict';

angular
  .module('app', [
    'ui.router',
    'app.angucomplete',
    'app.search',
    'app.services',
    'app.results'
  ])
  .config(_config);

_config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function _config($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);

  // set up routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/search/search.html',
      controller: 'Search'
    })
    .state('result', {
      url: '/results',
      templateUrl: 'app/results/results.html',
      controller: 'Results'
    });

  // Redirect back to home page for other routes
  $urlRouterProvider.otherwise('/');
}
