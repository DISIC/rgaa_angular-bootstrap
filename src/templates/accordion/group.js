/**
 *
 */
module.exports = function($templateCache) {
  $templateCache.put(
    'uib/template/accordion/accordion-group.html',
    '<div class=\"panel-heading\">\n' +
    '  <h4 class=\"panel-title\">\n' +
    '    <a group-item role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{!!isOpen}}\" ng-keypress=\"toggleOpen($event)\" isOpen={{isOpen}} tabindex="{{isFocused ? \'0\' : \'-1\'}}" data-toggle=\"collapse\" href aria-expanded=\"{{!!isOpen}}\" aria-controls=\"{{::panelId}}\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\"><span uib-accordion-header ng-class=\"{\'text-muted\': isDisabled}\">{{heading}}</span></a>\n' +
    '  </h4>\n' +
    '</div>\n' +
    '<div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n' +
    '  <div class=\"panel-body\" ng-transclude></div>\n' +
    '</div>\n' +
    '');
};
