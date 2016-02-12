/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('config', {
    	api: 'http://139.162.215.32/ng-test/public/index.php/api'
    });

})();
