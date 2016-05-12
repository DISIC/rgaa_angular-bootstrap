/**
 *
 */
module.exports = function(getUID){
  return {
    link: function($scope, iElm) {
      //Add role tooltip
      iElm.attr('role', 'tooltip');
      //Add a Unique ID
      var idtooltip = getUID('tooltip-');
      iElm.attr('id', idtooltip);
      var originElement = angular.element(iElm[0].previousElementSibling);
      originElement.attr('aria-describedby', idtooltip);

      //Remove tooltip on keyup ESC
      function dismissTooltip (e) {
        if(e.keyCode === 27){
          iElm.remove();
        }
      }
      originElement.bind('keyup', dismissTooltip);

      $scope.$on('$destroy',function() {
        originElement.removeAttr('aria-describedby');
        originElement.unbind('keyup', dismissTooltip);
      });

    }
  };
};
