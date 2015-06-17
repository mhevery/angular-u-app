System.register(["angular2/angular2", "angular2/src/facade/async"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      __param,
      Directive,
      onAllChangesDone,
      Attribute,
      Parent,
      ObservableWrapper,
      EventEmitter,
      MdInputContainer,
      MdInput;
  return {
    setters: [function($__m) {
      Directive = $__m.Directive;
      onAllChangesDone = $__m.onAllChangesDone;
      Attribute = $__m.Attribute;
      Parent = $__m.Parent;
    }, function($__m) {
      ObservableWrapper = $__m.ObservableWrapper;
      EventEmitter = $__m.EventEmitter;
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
      MdInputContainer = $__export("MdInputContainer", (($traceurRuntime.createClass)(function(id) {
        this._input = null;
        this.inputHasValue = false;
        this.inputHasFocus = false;
      }, {
        onAllChangesDone: function() {
          if (this._input == null) {
            throw 'No <input> or <textarea> found inside of <md-input-container>';
          }
        },
        registerInput: function(input) {
          var $__0 = this;
          if (this._input != null) {
            throw 'Only one text input is allowed per <md-input-container>.';
          }
          this._input = input;
          this.inputHasValue = input.value != '';
          ObservableWrapper.subscribe(input.mdChange, (function(value) {
            $__0.inputHasValue = value != '';
          }));
          ObservableWrapper.subscribe(input.mdFocusChange, (function(hasFocus) {
            $__0.inputHasFocus = hasFocus;
          }));
        }
      }, {})));
      $__export("MdInputContainer", MdInputContainer = __decorate([Directive({
        selector: 'md-input-container',
        lifecycle: [onAllChangesDone],
        host: {
          '[class.md-input-has-value]': 'inputHasValue',
          '[class.md-input-focused]': 'inputHasFocus'
        }
      }), __param(0, Attribute('id')), __metadata('design:paramtypes', [String])], MdInputContainer));
      MdInput = $__export("MdInput", (($traceurRuntime.createClass)(function(value, container, id) {
        this.yes = true;
        this.value = value == null ? '' : value;
        this.mdChange = new EventEmitter();
        this.mdFocusChange = new EventEmitter();
        container.registerInput(this);
      }, {
        updateValue: function(event) {
          this.value = event.target.value;
          ObservableWrapper.callNext(this.mdChange, this.value);
        },
        setHasFocus: function(hasFocus) {
          ObservableWrapper.callNext(this.mdFocusChange, hasFocus);
        }
      }, {})));
      $__export("MdInput", MdInput = __decorate([Directive({
        selector: 'md-input-container input',
        events: ['mdChange', 'mdFocusChange'],
        host: {
          '[class.md-input]': 'yes',
          '(input)': 'updateValue($event)',
          '(focus)': 'setHasFocus(true)',
          '(blur)': 'setHasFocus(false)'
        }
      }), __param(0, Attribute('value')), __param(1, Parent()), __param(2, Attribute('id')), __metadata('design:paramtypes', [String, MdInputContainer, String])], MdInput));
    }
  };
});
//# sourceMappingURL=input.js.map

//# sourceMappingURL=./input.js.map