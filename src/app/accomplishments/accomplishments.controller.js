(function() {
  'use strict';

  angular
    .module('angularMiniProject.accomplishments')
    .controller('AccompController', AccompController);

  /** @ngInject */
  function AccompController($http, $state, $rootScope, AccomplishmentService, accomplishments) {
    var vm = this;
    vm.username = $rootScope.username;
    vm.id = $rootScope.id;
    vm.addBeer = addBeer;
    vm.addCoffee = addCoffee;
    vm.addAccomplishment = addAccomplishment;

    vm.accomplishments = accomplishments.data;

    localStorage.accomplishments = vm.accomplishments;
    $rootScope.accomplishments = localStorage.accomplishments;


    function addAccomplishment() {
      $state.go('createAccomplishment');
    }

    function addBeer(accomplishment) {
      updateReward(accomplishment.id, 'beer');
    }

    function addCoffee(accomplishment) {
      updateReward(accomplishment.id, 'coffee');
    }

    function updateReward(id, reward) {
      AccomplishmentService.updateReward(id, reward)
        .then(function(result){
          var accomplishmentIndex = findIndex(vm.accomplishments, id);
          reward += 's';            // when sending PUT request, we are sending beer and coffee, when receive restult keys are beers and coffees
          vm.accomplishments[accomplishmentIndex][reward] = result.data[reward];

        }, function(){

        });
    }

    function findIndex(array, id) {
      for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        if (array[i].id == id) {
          return i;
        }
      }
    }    

  }
})();
