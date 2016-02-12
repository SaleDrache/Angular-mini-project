(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .controller('CreateAccompController', CreateAccompController);

  /** @ngInject */
  function CreateAccompController($http, $state, $rootScope, AppService) {
    var vm = this;

    vm.accomplishments = $rootScope.accomplishments;
    vm.newAccomplishment = newAccomplishment;

    function newAccomplishment (accomp) {

      var accomplishment = angular.copy(accomp);
      var unixtime = Date.parse(accomplishment.date);

      accomplishment.user_id = $rootScope.id;
      accomplishment.date = unixtime;

      AppService.postNewAccomplishment(accomplishment)
        .then(function(result){
          /*var createdAccomp = result.data;
          createdAccomp.user = {
            id: $rootScope.id,
            username: $rootScope.username
          };
          vm.accomplishments.push(createdAccomp);*/
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
