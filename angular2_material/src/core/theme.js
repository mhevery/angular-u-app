System.register(["angular2/angular2"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      Directive,
      MdTheme;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
    }],
    execute: function() {
      __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
          case 2:
            return decorators.reduceRight(function(o, d) {
              return (d && d(o)) || o;
            }, target);
          case 3:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key)), void 0;
            }, void 0);
          case 4:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key, o)) || o;
            }, desc);
        }
      };
      __metadata = (this && this.__metadata) || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      MdTheme = $__export("MdTheme", (($traceurRuntime.createClass)(function() {
        this.color = 'sky-blue';
      }, {}, {})));
      $__export("MdTheme", MdTheme = __decorate([Directive({selector: '[md-theme]'}), __metadata('design:paramtypes', [])], MdTheme));
    }
  };
});
//# sourceMappingURL=theme.js.map

//# sourceMappingURL=./theme.js.map