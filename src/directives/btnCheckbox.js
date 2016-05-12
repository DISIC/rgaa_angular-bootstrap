/**
 *
 */
module.exports = function(){
  return {
    require: ['btnCheckbox', 'ngModel'],
    priority: 200, //Make sure watches are fired after any other directives that affect the ngModel value
    link: function($scope, iElm, iAttrs, controller) {
      var buttonsCtrl = controller[0], ngModelCtrl = controller[1];

      function getTrueValue() {
        return getCheckboxValue(iAttrs.btnCheckboxTrue, true);
      }

      function getCheckboxValue(attributeValue, defaultValue) {
        var val = $scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function () {
        var check = angular.equals(ngModelCtrl.$modelValue, getTrueValue());
        iElm.attr('aria-checked', check);
        iElm.toggleClass(buttonsCtrl.activeClass, check);
      };

    }
  };
};
