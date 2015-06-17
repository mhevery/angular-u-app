System.register(["angular2/angular2", "angular2/src/facade/lang", "angular2_material/src/core/constants"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      __param,
      Component,
      View,
      Attribute,
      isPresent,
      KEY_SPACE,
      NumberWrapper,
      MdCheckbox;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      Attribute = $__m.Attribute;
    }, function($__m) {
      isPresent = $__m.isPresent;
      NumberWrapper = $__m.NumberWrapper;
    }, function($__m) {
      KEY_SPACE = $__m.KEY_SPACE;
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
      __param = (this && this.__param) || function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      MdCheckbox = $__export("MdCheckbox", (($traceurRuntime.createClass)(function(tabindex) {
        this.checked = false;
        this.tabindex = isPresent(tabindex) ? NumberWrapper.parseInt(tabindex, 10) : 0;
        this._disabled = false;
      }, {
        get disabled() {
          return this._disabled;
        },
        set disabled(value) {
          this._disabled = isPresent(value) && value !== false;
        },
        onKeydown: function(event) {
          if (event.keyCode == KEY_SPACE) {
            event.preventDefault();
            this.toggle(event);
          }
        },
        toggle: function(event) {
          if (this.disabled) {
            event.stopPropagation();
            return ;
          }
          this.checked = !this.checked;
        }
      }, {})));
      $__export("MdCheckbox", MdCheckbox = __decorate([Component({
        selector: 'md-checkbox',
        properties: ['checked', 'disabled'],
        host: {
          '(keydown)': 'onKeydown($event)',
          '[tabindex]': 'tabindex',
          '[attr.role]': '"checkbox"',
          '[attr.aria-checked]': 'checked',
          '[attr.aria-disabled]': 'disabled'
        }
      }), View({
        templateUrl: 'angular2_material/src/components/checkbox/checkbox.html',
        directives: []
      }), __param(0, Attribute('tabindex')), __metadata('design:paramtypes', [String])], MdCheckbox));
    }
  };
});
//# sourceMappingURL=checkbox.js.map

//# sourceMappingURL=./checkbox.js.map