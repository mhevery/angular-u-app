System.register(["angular2/angular2", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      Component,
      View,
      onChange,
      isPresent,
      MdButton,
      MdAnchor;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      onChange = $__m.onChange;
    }, function($__m) {
      isPresent = $__m.isPresent;
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
      MdButton = $__export("MdButton", (($traceurRuntime.createClass)(function() {
        ;
      }, {}, {})));
      $__export("MdButton", MdButton = __decorate([Component({selector: '[md-button]:not([href])'}), View({templateUrl: 'angular2_material/src/components/button/button.html'}), __metadata('design:paramtypes', [])], MdButton));
      MdAnchor = $__export("MdAnchor", (($traceurRuntime.createClass)(function() {
        ;
      }, {
        onClick: function(event) {
          if (isPresent(this.disabled) && this.disabled !== false) {
            event.preventDefault();
          }
        },
        onChange: function(_) {
          this.tabIndex = this.disabled ? -1 : 0;
        }
      }, {})));
      $__export("MdAnchor", MdAnchor = __decorate([Component({
        selector: '[md-button][href]',
        properties: ['disabled'],
        host: {
          '(click)': 'onClick($event)',
          '[tabIndex]': 'tabIndex'
        },
        lifecycle: [onChange]
      }), View({templateUrl: 'angular2_material/src/components/button/button.html'}), __metadata('design:paramtypes', [])], MdAnchor));
    }
  };
});
//# sourceMappingURL=button.js.map

//# sourceMappingURL=./button.js.map