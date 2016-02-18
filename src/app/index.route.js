(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'log',
        data: {
          requireLogin: false
        }
      })
      .state('accomplishments', {
        url: '/accomplishments',
        resolve: {
          accomplishments: ['AccomplishmentService', 
            function(AccomplishmentService){
              return AccomplishmentService.getAccomplishments();
            }]
        },
        templateUrl: 'app/accomplishments/accomplishments.html',
        controller: 'AccompController',
        controllerAs: 'accomp',
        data: {
          requireLogin: true
        }
      })
      .state('createAccomplishment', {
        url: '/accomplishments/create',
        templateUrl: 'app/accomplishments/create/accomplishments.create.html',
        controller: 'CreateAccompController',
        controllerAs: 'create',
        data: {
          requireLogin: true
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
