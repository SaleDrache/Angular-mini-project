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
