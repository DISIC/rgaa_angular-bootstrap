/**
 *
 */
module.exports = function($templateCache) {
  $templateCache.put(
    'template/accordion/accordion.html',
    '<div group role="tablist" class="panel-group" ng-transclude></div>'
  );
};
