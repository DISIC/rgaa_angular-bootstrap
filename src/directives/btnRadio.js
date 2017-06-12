/**
 *
 */
module.exports = function(){
  return {
    require: ['uibBtnRadio', 'ngModel'],
    priority: 200, //Make sure watches are fired after any other directives that affect the ngModel value
    link: function($scope, iElm, iAttrs, controller) {
      var buttonsCtrl = controller[0], ngModelCtrl = controller[1];

      //model -> UI
      ngModelCtrl.$render = function () {
        var check = angular.equals(ngModelCtrl.$modelValue, $scope.$eval(iAttrs.uibBtnRadio));

        iElm.attr('aria-checked', check);
        if (ngModelCtrl.$modelValue !== '') {
          iElm.attr('tabindex', '-1');
        }
        if (check) {
          iElm.attr('tabindex', '0');
        }
        iElm.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, $scope.$eval(iAttrs.uibBtnRadio)));
      };

    }
  };
};
