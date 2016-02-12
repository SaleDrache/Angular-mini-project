(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .service('AppService', AppService);

    /** @ngInject */
    function AppService($http, $rootScope, config) { 
    	var vm = this;
    	vm.getUserData = getUserData;
    	vm.getAccomplishments = getAccomplishments;
    	vm.updateReward = updateReward;
    	vm.postNewAccomplishment = postNewAccomplishment;

    	function getUserData(data) {
      	  return $http.post(config.api.concat('/login'), data);
    	}

    	function getAccomplishments() {
	      var req = {
	        method: 'GET',
	        url: 'http://139.162.215.32/ng-test/public/index.php/api/accomplishments',
	        headers: {
	          'X-Auth-Token': $rootScope.token
	        }
	      }

	      return $http(req);
	    }

	    function updateReward(id, reward) {
	      var req = {
	        method: 'PUT',
	        url: 'http://139.162.215.32/ng-test/public/index.php/api/accomplishments/'+ id +'/reward?type='+ reward,
	        headers: {
	          'X-Auth-Token': $rootScope.token
	        }
	      }
	      
	      return $http(req);	 
	    }

	    function postNewAccomplishment(data) {
		    var req = {
	        method: 'POST',
	        url: 'http://139.162.215.32/ng-test/public/index.php/api/accomplishments',
	        headers: {
	          'X-Auth-Token': $rootScope.token
	        },
	        data: data
	      }

	      return $http(req);
	  	}
    }
    

})();
