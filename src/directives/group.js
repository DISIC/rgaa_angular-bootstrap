/**
 * The group directive simply sets up the directive controller
 */
module.exports = function () {
  return {
    restrict:'EA',
    controller:'GroupController',
    priority: 10000,
    link: function(scope, element, attrs, groupCtrl) {
      groupCtrl.initFocusable();
    }
  };
};
