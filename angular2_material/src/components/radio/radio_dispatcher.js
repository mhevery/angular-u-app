System.register(["angular2/src/facade/collection"], function($__export) {
  "use strict";
  var ListWrapper,
      MdRadioDispatcher;
  return {
    setters: [function($__m) {
      ListWrapper = $__m.ListWrapper;
    }],
    execute: function() {
      MdRadioDispatcher = $__export("MdRadioDispatcher", (function() {
        var MdRadioDispatcher = function MdRadioDispatcher() {
          this.listeners_ = [];
        };
        return ($traceurRuntime.createClass)(MdRadioDispatcher, {
          notify: function(name) {
            ListWrapper.forEach(this.listeners_, (function(f) {
              return f(name);
            }));
          },
          listen: function(listener) {
            ListWrapper.push(this.listeners_, listener);
          }
        }, {});
      }()));
    }
  };
});
//# sourceMappingURL=radio_dispatcher.js.map

//# sourceMappingURL=./radio_dispatcher.js.map