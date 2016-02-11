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
      .state('accomp', {
        url: '/accomplishments',
        templateUrl: 'app/accomplishments/accomplishments.html',
        controller: 'AccompController',
        controllerAs: 'accomp'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
