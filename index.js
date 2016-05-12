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
	.directive('enforceFocus', [
		'$document',
		'$timeout',
		require('./src/directives/enforceFocus')
	])
	.directive('tabpanel', [
		'getUID',
		'$timeout',
		require('./src/directives/tabpanel')
	])
	.directive('tooltipPopup', [
		'getUID',
		require('./src/directives/tooltipPopup')]
	)
	.controller('GroupController', [
		'$scope',
		'$attrs',
		'accordionConfig',
		require('./src/controllers/GroupController')
	])
	.directive('group', require('./src/directives/group'))
	.directive('groupItem', [
		'$timeout',
		require('./src/directives/groupItem')
	])
	.directive('keySpace', require('./src/directives/keySpace'))
	.directive('keyboardRotate', [
		'$document',
		'$timeout',
		require('./src/directives/keyboardRotate')
	])
	.directive('btnRadio', require('./src/directives/btnRadio'))
	.directive('btnCheckbox', require('./src/directives/btnCheckbox'))
	.directive('datepickerPopupWrap', [
		'$document',
		'$timeout',
		require('./src/directives/datepickerPopupWrap')
	]);



var dayModule = angular
	.module('template/datepicker/day.html')
	.run([
		'$templateCache',
		require('./src/templates/datepicker/day')
	]);



var accordionModule = angular
	.module('template/accordion/accordion.html')
	.run([
		'$templateCache',
		require('./src/templates/accordion/accordion')
	]);



var groupModule = angular
	.module('template/accordion/accordion.html')
	.run([
		'$templateCache',
		require('./src/templates/accordion/group')
	]);



var windowModule = angular
	.module('template/modal/window.html')
	.run([
		'$templateCache',
		require('./src/templates/modal/window')
	]);



/**
 *
 */
module.exports = rgaaAngularBootstrap;
