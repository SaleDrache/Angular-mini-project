(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/login',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('accomplishments', {
        url: '/accomplishments',
        templateUrl: 'app/accomplishments/accomplishments.html',
        controller: 'AccompController',
        controllerAs: 'accomp'
      })
      .state('createAccomplishment', {
        url: '/accomplishments/create',
        templateUrl: 'app/accomplishments/create/create-accomplishment.html',
        controller: 'CreateAccompController',
        controllerAs: 'create'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
