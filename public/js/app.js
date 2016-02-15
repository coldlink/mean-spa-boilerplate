angular.module('meanSpaApp', ['ui.router', 'mgcrea.ngStrap'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('data', {
        url: '/data',
        templateUrl: 'views/data.html',
        controller: 'DataCtrl'
      });
  });
