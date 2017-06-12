/**
 *
 */
module.exports = function(getUID){
  return {
    link: function($scope, iElm) {
      // Add role tooltip
      iElm.attr('role', 'tooltip');
      // Add a Unique ID
      var idtooltip = getUID('tooltip-');
      iElm.attr('id', idtooltip);
      // Add aria-describedby on previousElementSibling
      var originElement = angular.element(iElm[0].previousElementSibling);
      originElement.attr('aria-describedby', idtooltip);

      // remove aria-describedby on destroy
      $scope.$on('$destroy',function() {
        originElement.removeAttr('aria-describedby');
      });

    }
  };
};
