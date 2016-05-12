/**
 *
 */
module.exports = function($templateCache) {
  $templateCache.put(
    'template/accordion/accordion-group.html',
    '<div unique-id="accordion" class="panel panel-default">\n' +
    '  <div role="tab" class="panel-heading">\n' +
    '    <h4 id="{{uniqueId}}" class="panel-title">\n' +
    '      <a group-item aria-selected="{{isOpen}}" tabindex="{{isFocused ? \'0\' : \'-1\'}}" aria-expanded="{{isOpen}}" href class="accordion-toggle" key-space="toggleOpen()" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n' +
    '    </h4>\n' +
    '  </div>\n' +
    '  <div role="tabpanel" aria-labelledby="{{uniqueId}}" aria-hidden="{{!isOpen}}" class="panel-collapse" collapse="!isOpen">\n' +
    '   <div class="panel-body" ng-transclude></div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
};
