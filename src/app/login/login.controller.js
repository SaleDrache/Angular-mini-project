(function() {
  'use strict';

  angular
    .module('angularMiniProject.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($http, $state, $rootScope, UserService) {
    var vm = this;

    vm.logIn = logIn;

    function logIn() {
      var data = vm.logInfo;
      
      UserService.getUserData(data)
        .then(function(result){

          localStorage.token = result.data.api_key;
          localStorage.username = result.data.username;
          localStorage.id = result.data.id;
          $rootScope.token = result.data.token;
          $rootScope.username = result.data.username;
          $rootScope.id = result.data.id;

          verifyUserData();

          vm.logInfo = {
            username: '',
            password: ''
          };

        }, function onError() {
          // server return code < 200 || > 300

          vm.logInfo = {
            username: '',
            password: ''
          };
        });
    }

    function verifyUserData () {
      if (localStorage.token != 'undefined') {
        $state.go('accomplishments');

      } else {
        $('.error').show();
      }
    }

    

  }
})();
