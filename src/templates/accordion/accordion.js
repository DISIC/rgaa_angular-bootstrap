/**
 *
 */
module.exports = function($templateCache) {
  $templateCache.put(
    'uib/template/accordion/accordion.html',
    '<div group role="tablist" class="panel-group" ng-transclude></div>'
  );
};
