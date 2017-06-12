/**
 *
 */
module.exports = function ($scope, $attrs, accordionConfig) {
  // This array keeps track of the accordion groups
  this.groups = [];
  this.groupsElem = [];


  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope, element) {
    var that = this;
    this.groups.push(groupScope);
    this.groupsElem.push(element);
    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(index, 1);
      this.groupsElem.splice(index, 1);
    }
  };

  this.initFocusable = function() {
    var that = this;
    const index = this.groups.findIndex(function(element) {
      return element.isFocused;
    });
    this.groups.indexSelected = index !== -1 ? index : 0;
    this.changeSelected();
  };

  this.nextFocusable = function(change) {
    this.groups.indexSelected = this.modulo(this.groups.indexSelected + change,this.groups.length);
    this.changeSelected();
    var focusElement = this.groupsElem[this.groups.indexSelected];
    focusElement[0].focus();
  };

  this.elemFocus = function(group) {
    var index = this.groups.indexOf(group);
    this.groups.indexSelected = index;
    this.changeSelected();
  };

  this.changeSelected = function() {
    var that = this;
    angular.forEach(this.groups, function (group, index) {
      group.isFocused = false;
      if ( index === that.groups.indexSelected ) {
        group.isFocused = true;
      }
    });
  };

  this.modulo = function(i, iMax) {
    return ((i % iMax) + iMax) % iMax;
  };

};
