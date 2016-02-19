(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .service('AccomplishmentService', AccomplishmentService);

    /** @ngInject */
    function AccomplishmentService($http, $rootScope, config) { 
      var vm = this;
      vm.getAccomplishments = getAccomplishments;
      vm.updateReward = updateReward;
      vm.postNewAccomplishment = postNewAccomplishment;

	    function getAccomplishments() {
        var req = {
          method: 'GET',
          url: config.api.concat('/accomplishments'),
          /*headers: {
            'X-Auth-Token' : $rootScope.token
          }*/
        }

        return $http(req);
      }

      function updateReward(id, reward) {
        var req = {
          method: 'PUT',
          url: config.api + '/accomplishments/'+ id +'/reward?type='+ reward,
        }
      
        return $http(req);	 
      }

      function postNewAccomplishment(data) {
	    var req = {
          method: 'POST',
          url: config.api.concat('/accomplishments'),
          data: data
        }

        return $http(req);
  	  }
    }
    

})();
