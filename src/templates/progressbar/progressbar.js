/**
 *
 */
module.exports = function($templateCache) {
  $templateCache.put(
    'uib/template/progressbar/progressbar.html',
	  '<div class=\"progress\" tabindex=\"0\" aria-labelledby=\"{{::title}}\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\">\n' +
	  '	<div  class=\"progress-bar\" ng-class=\"type && \'progress-bar-\' + type\"  ng-style=\"{width: (percent < 100 ? percent : 100) + \'%\'}\" ng-transclude></div>\n' +
		'</div>\n' +
		'');
};
