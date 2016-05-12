/**
 *
 */
module.exports = function() {
  return function(scope, element, attrs) {
    element.bind('keydown keypress', function(event) {
      if(event.which === 32) {
        scope.$apply(function(){
          scope.$eval(attrs.keySpace);
        });
        event.preventDefault();
      }
    });
  };
};
