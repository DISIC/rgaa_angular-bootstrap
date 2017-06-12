/**
 * The group directive simply sets up the directive controller
 */
module.exports = function ($timeout) {
  return {
    restrict:'EA',
    controller:'GroupController',
    priority: 10000,
    link: function(scope, element, attrs, groupCtrl) {
      $timeout(function() {
      	groupCtrl.initFocusable();

      	const closeOthers = element[0].parentElement.getAttribute('close-others');
      	if (closeOthers) {
      		element.attr('aria-multiselectable', 'true');
      	} else {
      		element.attr('aria-multiselectable', 'false');
      	}
      }, 0);
    }
  };
};
