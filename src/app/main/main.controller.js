(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;

    vm.signIn = signIn;

    function signIn() {
      var data = vm.logInfo;
      
      getUserData(data)
        .then(function(result){
          vm.logInfo = {
            username: '',
            password: ''
          };

          localStorage.token = result.data.api_key;

        }, function onError() {
          // server return code < 200 || > 300

          vm.logInfo = {
            username: '',
            password: ''
          };
        });

    }

    function getUserData(data) {
      return $http.post('http://139.162.215.32/ng-test/public/index.php/api/login', data);
    }

  }
})();
