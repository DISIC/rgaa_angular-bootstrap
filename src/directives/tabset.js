/**
 *
 */
module.exports = function(getUID, $timeout){
  return {
    link: function($scope, iElm) {

      function render() {

        var tablist = iElm[0].firstElementChild;
        var tabs = angular.element(tablist).children();

        var tabContent = iElm[0].lastElementChild;
        var tabpanels = angular.element(tabContent).children();

        angular.forEach(angular.element(tabs), function(value, key){

          var tab = angular.element(value);
          var panel = angular.element(tabpanels[key]);

          var idtab = getUID('tab-');
          tab.attr('id', idtab);
          panel.attr('aria-labelledby', idtab);

          var idpanel = getUID('panel-');
          panel.attr('id', idpanel);
          tab.attr('aria-controls', idpanel);

        });
      }

      $timeout(render, 0);
    }
  };
};
