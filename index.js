/**
 *
 */
var rgaaAngularBootstrap = angular
	.module('rgaaAngularBootstrap', ['ui.bootstrap'])
	.factory('getUID', require('./src/factories/getUID'))
	.directive('uniqueId',  [
		'getUID',
		require('./src/directives/uniqueId')
	])
	.directive('uibTabset', [
		'getUID',
		'$timeout',
		require('./src/directives/tabset')
	])
	.directive('uibProgressbar', [
		'getUID',
		'$timeout',
		require('./src/directives/progressbar')
	])
	.directive('uibTooltipPopup', [
		'getUID',
		require('./src/directives/tooltipPopup')]
	)
	.controller('GroupController', [
		'$scope',
		'$attrs',
		'uibAccordionConfig',
		require('./src/controllers/GroupController')
	])
	.directive('group', [
		'$timeout',
		require('./src/directives/group')
	])
	.directive('groupItem', [
		'$timeout',
		require('./src/directives/groupItem')
	])
	.directive('keyboardRotate', [
		'$document',
		'$timeout',
		require('./src/directives/keyboardRotate')
	])
	.directive('uibBtnRadio', require('./src/directives/btnRadio'))
	.directive('uibBtnCheckbox', require('./src/directives/btnCheckbox'))
	.directive('uibRating', require('./src/directives/slider'))

var dayModule = angular
	.module('uib/template/datepicker/day.html')
	.run([
		'$templateCache',
		require('./src/templates/datepicker/day')
	]);

var tabsetModule = angular
	.module('uib/template/tabs/tabset.html')
	.run([
		'$templateCache',
		require('./src/templates/tabset/tabset')
	]);

var tabModule = angular
	.module('uib/template/tabs/tab.html')
	.run([
		'$templateCache',
		require('./src/templates/tabset/tab')
	]);

var accordionModule = angular
	.module('uib/template/accordion/accordion.html')
	.run([
		'$templateCache',
		require('./src/templates/accordion/accordion')
	]);

var groupModule = angular
	.module('uib/template/accordion/accordion-group.html')
	.run([
		'$templateCache',
		require('./src/templates/accordion/group')
	]);

var sliderModule = angular
	.module('uib/template/rating/rating.html')
	.run([
		'$templateCache',
		require('./src/templates/slider/slider')
	]);

var progressbarModule = angular
	.module('uib/template/progressbar/progressbar.html')
	.run([
		'$templateCache',
		require('./src/templates/progressbar/progressbar')
	]);


/**
 *
 */
module.exports = rgaaAngularBootstrap;
