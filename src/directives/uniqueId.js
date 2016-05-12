/**
 *
 */
module.exports = function(getUID){
  return {
    restrict:'A',
    link: function(scope, element, attrs) {
      var uniqueId = getUID(attrs.uniqueId+'-');
      scope.uniqueId = uniqueId;
    }
  };
};
