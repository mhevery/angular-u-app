System.register(["angular2/angular2", "angular2/src/facade/lang", "angular2/src/facade/math"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      __param,
      Component,
      onChange,
      View,
      Attribute,
      isPresent,
      isBlank,
      Math,
      MdProgressLinear,
      Mode;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      onChange = $__m.onChange;
      View = $__m.View;
      Attribute = $__m.Attribute;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      Math = $__m.Math;
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
      MdProgressLinear = $__export("MdProgressLinear", (($traceurRuntime.createClass)(function(mode) {
        this.primaryBarTransform = '';
        this.secondaryBarTransform = '';
        this.mode = isPresent(mode) ? mode : Mode.DETERMINATE;
      }, {
        get value() {
          return this.value_;
        },
        set value(v) {
          if (isPresent(v)) {
            this.value_ = MdProgressLinear.clamp(v);
          }
        },
        onChange: function(_) {
          if (this.mode == Mode['QUERY'] || this.mode == Mode['INDETERMINATE'] || isBlank(this.value)) {
            return ;
          }
          this.primaryBarTransform = this.transformForValue(this.value);
          if (this.mode == Mode['BUFFER']) {
            this.secondaryBarTransform = this.transformForValue(this.bufferValue);
          }
        },
        transformForValue: function(value) {
          var scale = value / 100;
          var translateX = (value - 100) / 2;
          return ("translateX(" + translateX + "%) scale(" + scale + ", 1)");
        }
      }, {clamp: function(v) {
          return Math.max(0, Math.min(100, v));
        }})));
      $__export("MdProgressLinear", MdProgressLinear = __decorate([Component({
        selector: 'md-progress-linear',
        lifecycle: [onChange],
        properties: ['value', 'bufferValue'],
        host: {
          '[attr.role]': '"progressbar"',
          '[attr.aria-valuemin]': '"0"',
          '[attr.aria-valuemax]': '"100"',
          '[attr.aria-valuenow]': 'value'
        }
      }), View({
        templateUrl: 'angular2_material/src/components/progress-linear/progress_linear.html',
        directives: []
      }), __param(0, Attribute('md-mode')), __metadata('design:paramtypes', [String])], MdProgressLinear));
      Mode = {
        'DETERMINATE': 'determinate',
        'INDETERMINATE': 'indeterminate',
        'BUFFER': 'buffer',
        'QUERY': 'query'
      };
    }
  };
});
//# sourceMappingURL=progress_linear.js.map

//# sourceMappingURL=./progress_linear.js.map