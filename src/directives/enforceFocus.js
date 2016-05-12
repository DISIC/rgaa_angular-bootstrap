/**
 *
 */
module.exports = function($document, $timeout){
  return {
    link: function($scope, iElm) {
      //Save current focus
      var modalOpener = $document[0].activeElement;
      var modal = iElm[0].querySelectorAll('.modal-dialog');

      //enforceFocus inside modal
      function enforceFocus(evt) {
        var firstElm = firstFocusable(iElm[0]);
        if ( firstElm !== evt.target && !iElm[0].contains(evt.target)) {
          firstElm.focus();
        }
      }
      $document[0].addEventListener('focus', enforceFocus, true);


      $scope.$on('$destroy',function() {
        //back to first focus
        modalOpener.focus();
        //Remove event listener
        $document[0].removeEventListener('focus', enforceFocus, true);
      });

      var tababbleSelector = 'a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
      //focus last element inside modal
      function focusLastElm(domEl) {
        var list = domEl.querySelectorAll(tababbleSelector);
        list[list.length - 1].focus();
      }
      //focus first element inside modal or modal himself
      function firstFocusable(domEl) {
        var firstElm;
        var list = domEl.querySelectorAll(tababbleSelector);
        if (list[0]) {
          firstElm = list[0];
        } else {
          modal[0].setAttribute('tabindex', 0);
          firstElm = modal[0];
        }
        return firstElm;
      }
      //focus lastElement when shitKey Tab on first element
      function shiftKeyTabTrap (evt) {
        if(firstFocusable(iElm[0]) === evt.target && evt.shiftKey && evt.keyCode === 9){
          focusLastElm(iElm[0]);
          evt.preventDefault();
        }
      }
      iElm.bind('keydown', shiftKeyTabTrap);

      $timeout(function(){
        var firstElm = firstFocusable(iElm[0]);
        firstElm.focus();
      });

    }
  };
};
