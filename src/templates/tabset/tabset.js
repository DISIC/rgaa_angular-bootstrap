/**
 *
 */
module.exports = function($templateCache) {
  $templateCache.put(
    'uib/template/tabs/tabset.html',
    '<div>\n' +
		'<ul role="tablist" keyboard-rotate="{recursion: 1, autoClick: 0}" class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n' +
		'<div class="tab-content">\n' +
			'<div role="tabpanel" class="tab-pane"\n' +
			'ng-repeat="tab in tabset.tabs"\n' +
			'tabindex="0"\n' +
			'ng-class="{active: tabset.active === tab.index}"\n' +
			'uib-tab-content-transclude="tab">\n' +
			'</div>\n' +
		'</div>\n' +
	'</div>\n' +
    '');
};
