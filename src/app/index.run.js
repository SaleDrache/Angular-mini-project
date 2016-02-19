(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $http) {

  	$rootScope.token =  localStorage.token;
    $rootScope.username =  localStorage.username;
    $rootScope.id =  localStorage.id;

    $http.defaults.headers.common['X-Auth-Token'] = $rootScope.token ;

    $log.debug('runBlock end');
  }

})();
