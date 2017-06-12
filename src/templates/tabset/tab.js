/**
 *
 */
module.exports = function($templateCache) {
  $templateCache.put(
    'uib/template/tabs/tab.html',
    '<li role="tab" ng-class="{active: active, disabled: disabled}" aria-selected="{{active ? \'true\' : \'false\'}}">\n' +
		'<a tabindex="{{active ? \'0\' : \'-1\'}}" href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n' +
	'</li>\n' +
    '');
};
