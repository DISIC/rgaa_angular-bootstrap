/**
 *
 */
module.exports = function($document, $timeout){
  return {
    link: function($scope, iElm, iAttrs, controller) {

      var elemOpener;
      $scope.$watch('isOpen', function(value) {
        if (value) {
          elemOpener = $document[0].activeElement;
        }
      });

      function backToElemOpener (evt) {
        if (evt.which === 27) {
          $timeout(function() {
            elemOpener.focus();
          });
        }
      }
      //Add event listener
      iElm.bind('keydown', backToElemOpener);


      $scope.$on('$destroy',function() {
        //Remove event listener
        iElm.unbind('keydown', backToElemOpener);
      });
    }
  };
};
