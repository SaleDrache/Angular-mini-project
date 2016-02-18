(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .run(runAuthentication);

  /** @ngInject */

  function runAuthentication($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof $rootScope.username === 'undefined') {
        event.preventDefault();
        $state.go('login');
      }

      if (toState.name === 'login' && typeof $rootScope.username !== 'undefined') {
        event.preventDefault();
        $state.go('accomplishments');
      }

    });

  }
  

})();
