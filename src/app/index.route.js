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
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'main'
      })
      .state('accomplishments', {
        url: '/accomplishments',
        resolve: {
          accomplishments: ['AppService', 
            function(AppService){
              return AppService.getAccomplishments();
            }]
        },
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
