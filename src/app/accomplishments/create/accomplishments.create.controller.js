(function() {
  'use strict';

  angular
    .module('angularMiniProject.accomplishments.create')
    .controller('CreateAccompController', CreateAccompController);

  /** @ngInject */
  function CreateAccompController($http, $state, $rootScope, AccomplishmentService) {
    var vm = this;

    vm.accomplishments = $rootScope.accomplishments;
    vm.newAccomplishment = newAccomplishment;

    function newAccomplishment (accomp) {

      var accomplishment = angular.copy(accomp);
      var unixtime = Date.parse(accomplishment.date);

      accomplishment.user_id = $rootScope.id;
      accomplishment.date = unixtime;

      AccomplishmentService.postNewAccomplishment(accomplishment)
        .then(function(){
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
