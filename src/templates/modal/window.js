/**
 *
 */
module.exports = function($templateCache) {
  $templateCache.put(
    "template/modal/window.html",
    "<div><div enforce-focus class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" >\n" +
    "    <div class=\"modal-dialog\" aria-labelledby=\"titre-modal\" role=\"dialog\" ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
    "</div><div tabindex=\"0\"></div></div>"
  );
};
