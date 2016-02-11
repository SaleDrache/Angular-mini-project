(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
  	$rootScope.token =  localStorage.token;
    $rootScope.username =  localStorage.username;
    $rootScope.id =  localStorage.id;

    $log.debug('runBlock end');
  }

})();
