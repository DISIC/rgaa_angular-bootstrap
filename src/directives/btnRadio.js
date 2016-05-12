/**
 *
 */
module.exports = function(){
  return {
    require: ['btnRadio', 'ngModel'],
    priority: 200, //Make sure watches are fired after any other directives that affect the ngModel value
    link: function($scope, iElm, iAttrs, controller) {
      var buttonsCtrl = controller[0], ngModelCtrl = controller[1];

      //model -> UI
      ngModelCtrl.$render = function () {
        var check = angular.equals(ngModelCtrl.$modelValue, $scope.$eval(iAttrs.btnRadio));
        iElm.attr('aria-checked', check);
        iElm.attr('tabindex', '-1');
        if (check) {
          iElm.attr('tabindex', '0');
        }
        iElm.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, $scope.$eval(iAttrs.btnRadio)));
      };

    }
  };
};
