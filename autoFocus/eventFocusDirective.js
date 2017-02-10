// TODO: autofocus, spent longer than I should have on this. Voodoo coded from stackoverflow, review to ensure understanding
(function(){
  'use strict'

  let app = angular.module('csvBar')
  app.directive('eventFocus', function(focus) {
    return function(scope, elem, attr) {
      elem.on(attr.eventFocus, function() {
        focus(attr.eventFocusId);
      });

      // Removes bound events in the element itself
      // when the scope is destroyed
      scope.$on('$destroy', function() {
        elem.off(attr.eventFocus);
      });
    };
  });
})()
