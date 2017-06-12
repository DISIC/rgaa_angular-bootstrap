/**
 *  recursion
 *
 */
module.exports = function($document,$timeout){
  return {
    restrict: 'A',
    scope: {
      param : '=keyboardRotate',
    },
    link: function($scope, iElm, iAttrs, controller) {
      var {recursion, autoClick} = $scope.param;

      $timeout(function(){
        function KeyTrap (evt) {
          var next;
          var keyCode = evt.keyCode;

          if (autoClick === 0 && keyCode === 32) {
            evt.target.click();
          }
          //Right key and up key
          if (keyCode === 39 || keyCode === 40) {
            next = evt.target.nextElementSibling;
            if (recursion === 1) {
              next = evt.target.parentElement.nextElementSibling;
            }
            //if last go to first
            if (!next) {
              next = iElm.children()[0];
            }
          }
          //Left key and down key
          if (keyCode === 37 || keyCode === 38) {
            next = evt.target.previousElementSibling;
            if (recursion === 1) {
              next = evt.target.parentElement.previousElementSibling;
            }
            //if first go to last
            if (!next) {
              var child = iElm.children();
              next = child[child.length-1];
            }
          }
          //go to next element if defined (previous or next)
          if (next) {
            if (recursion === 1) {
              next = next.children[0];
            }
            next.focus();

            if (autoClick === 1) {
              next.click();
            }

          }
        }
        angular.element(iElm[0]).on('keydown', KeyTrap);
      },0);
    }
  };
};
