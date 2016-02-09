(function() {
  'use strict';

  angular
    .module('angularMiniProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
