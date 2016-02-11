(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .controller('AccompController', AccompController);

  /** @ngInject */
  function AccompController($http, $rootScope) {
    var vm = this;
    vm.token = $rootScope.token;
    vm.username = $rootScope.username;
    vm.id = $rootScope.id;
    vm.addBeer = addBeer;
    vm.addCoffee = addCoffee;

    getAccomplishments();


    function addBeer(accomplishment) {
      updateReward(accomplishment.id, 'beer');
    }

    function addCoffee(accomplishment) {
      updateReward(accomplishment.id, 'coffee');
    }

    function updateReward(id, reward) {
      var req = {
        method: 'PUT',
        url: 'http://139.162.215.32/ng-test/public/index.php/api/accomplishments/'+ id +'/reward?type='+ reward,
        headers: {
          'X-Auth-Token': vm.token
        }
      }

      var accomplishmentIndex = findIndex(vm.accomplishments, id);
      
      $http(req)
        .then(function(result){
          reward += 's';
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

    function getAccomplishments() {
      var req = {
        method: 'GET',
        url: 'http://139.162.215.32/ng-test/public/index.php/api/accomplishments',
        headers: {
          'X-Auth-Token': vm.token
        }
      }

      $http(req)
        .then(function(result){
          vm.accomplishments = result.data;
        }, function(){

        });
    }
    

  }
})();
