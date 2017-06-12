/**
 * The group-item directive indicates a block of html that
 * will expand and collapse in an accordion
 */
module.exports = function($timeout) {
  return {
    require:'^group',
    restrict:'EA',
    priority: 10000,
    scope: true,
    link: function(scope, element, attrs, groupCtrl) {
      scope.isFocused = scope.$parent.isOpen ? true : false;
      groupCtrl.addGroup(scope, element);

      function KeyTrap (evt) {
        var keyCode = evt.keyCode;
        //Right key and up key
        if (keyCode === 39 || keyCode === 40) {
          groupCtrl.nextFocusable(1);
          scope.$apply();
        }
        //Left key and down key
        if (keyCode === 37 || keyCode === 38) {
          groupCtrl.nextFocusable(-1);
          scope.$apply();
        }
      }

      element.on('keydown',KeyTrap);
      element.on('click', function() {
        groupCtrl.elemFocus(scope);
        scope.$apply();
      });

    }
  };
};
