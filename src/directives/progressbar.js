/**
 *
 */
module.exports = function(getUID, $timeout){
  return {
    priority: 10000,
    link: function($scope, iElm) {

      function render() {
        if (iElm[0].getAttribute('value') === "") {
          angular.element(iElm).removeAttr('aria-valuenow');
          angular.element(iElm).removeAttr('aria-valuetext');
        }
      }

      $timeout(render, 0);
    }
  };
};
