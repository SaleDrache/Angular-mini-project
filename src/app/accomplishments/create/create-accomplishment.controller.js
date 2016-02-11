(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .controller('CreateAccompController', CreateAccompController);

  /** @ngInject */
  function CreateAccompController($http, $state, $rootScope) {
    var vm = this;
    vm.token = $rootScope.token;
    vm.username = $rootScope.username;
    vm.id = $rootScope.id;
    vm.accomplishments = $rootScope.accomplishments;

    vm.newAccomplishment = newAccomplishment;

    function newAccomplishment (accomp) {

      var accomplishment = angular.copy(accomp);
      var unixtime = Date.parse(accomplishment.date);

      accomplishment.user_id = vm.id;
      accomplishment.date = unixtime;

      console.log(accomplishment);
      var req = {
        method: 'POST',
        url: 'http://139.162.215.32/ng-test/public/index.php/api/accomplishments',
        headers: {
          'X-Auth-Token': vm.token
        },
        data: accomplishment
      }

      $http(req)
        .then(function(result){
          var createdAccomp = result.data;
          createdAccomp.user = {
            id: vm.id,
            username: vm.username
          };
          vm.accomplishments.push(createdAccomp);
          $state.go('accomplishments');

          vm.new = {
            description: '',
            date: ''
          };

        }, function(){

        });
      
    }
  }
})();
