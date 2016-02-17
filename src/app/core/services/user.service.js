(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .service('UserService', UserService);

    /** @ngInject */
    function UserService($http, $rootScope, config) { 
      var vm = this;
      vm.getUserData = getUserData;

	    function getUserData(data) {
  	    return $http.post(config.api.concat('/login'), data);
	    }

	
    }
    

})();
