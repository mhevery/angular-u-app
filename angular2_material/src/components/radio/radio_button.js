System.register(["angular2/angular2", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2_material/src/components/radio/radio_dispatcher", "angular2_material/src/core/constants"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      __param,
      Component,
      View,
      onChange,
      Parent,
      Attribute,
      Optional,
      isPresent,
      StringWrapper,
      NumberWrapper,
      ObservableWrapper,
      EventEmitter,
      ListWrapper,
      MdRadioDispatcher,
      KEY_UP,
      KEY_DOWN,
      KEY_SPACE,
      _uniqueIdCounter,
      MdRadioGroup,
      MdRadioButton;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      onChange = $__m.onChange;
      Parent = $__m.Parent;
      Attribute = $__m.Attribute;
      Optional = $__m.Optional;
    }, function($__m) {
      isPresent = $__m.isPresent;
      StringWrapper = $__m.StringWrapper;
      NumberWrapper = $__m.NumberWrapper;
    }, function($__m) {
      ObservableWrapper = $__m.ObservableWrapper;
      EventEmitter = $__m.EventEmitter;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      MdRadioDispatcher = $__m.MdRadioDispatcher;
    }, function($__m) {
      KEY_UP = $__m.KEY_UP;
      KEY_DOWN = $__m.KEY_DOWN;
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
      _uniqueIdCounter = 0;
      MdRadioGroup = $__export("MdRadioGroup", (($traceurRuntime.createClass)(function(tabindex, disabled, radioDispatcher) {
        this.name_ = ("md-radio-group-" + _uniqueIdCounter++);
        this.radios_ = [];
        this.change = new EventEmitter();
        this.radioDispatcher = radioDispatcher;
        this.selectedRadioId = '';
        this.disabled_ = false;
        this.disabled = isPresent(disabled);
        this.tabindex = isPresent(tabindex) ? NumberWrapper.parseInt(tabindex, 10) : 0;
      }, {
        getName: function() {
          return this.name_;
        },
        get disabled() {
          return this.disabled_;
        },
        set disabled(value) {
          this.disabled_ = isPresent(value) && value !== false;
        },
        onChange: function(_) {
          var $__0 = this;
          this.disabled = isPresent(this.disabled) && this.disabled !== false;
          if (isPresent(this.value) && this.value != '') {
            this.radioDispatcher.notify(this.name_);
            ListWrapper.forEach(this.radios_, (function(radio) {
              if (radio.value == $__0.value) {
                radio.checked = true;
                $__0.selectedRadioId = radio.id;
                $__0.activedescendant = radio.id;
              }
            }));
          }
        },
        updateValue: function(value, id) {
          this.value = value;
          this.selectedRadioId = id;
          this.activedescendant = id;
          ObservableWrapper.callNext(this.change, null);
        },
        register: function(radio) {
          ListWrapper.push(this.radios_, radio);
        },
        onKeydown: function(event) {
          if (this.disabled) {
            return ;
          }
          switch (event.keyCode) {
            case KEY_UP:
              this.stepSelectedRadio(-1);
              event.preventDefault();
              break;
            case KEY_DOWN:
              this.stepSelectedRadio(1);
              event.preventDefault();
              break;
          }
        },
        getSelectedRadioIndex: function() {
          for (var i = 0; i < this.radios_.length; i++) {
            if (this.radios_[i].id == this.selectedRadioId) {
              return i;
            }
          }
          return -1;
        },
        stepSelectedRadio: function(step) {
          var index = this.getSelectedRadioIndex() + step;
          if (index < 0 || index >= this.radios_.length) {
            return ;
          }
          var radio = this.radios_[index];
          if (radio.disabled) {
            this.stepSelectedRadio(step + (step < 0 ? -1 : 1));
            return ;
          }
          this.radioDispatcher.notify(this.name_);
          radio.checked = true;
          ObservableWrapper.callNext(this.change, null);
          this.value = radio.value;
          this.selectedRadioId = radio.id;
          this.activedescendant = radio.id;
        }
      }, {})));
      $__export("MdRadioGroup", MdRadioGroup = __decorate([Component({
        selector: 'md-radio-group',
        lifecycle: [onChange],
        events: ['change'],
        properties: ['disabled', 'value'],
        host: {
          '(^keydown)': 'onKeydown($event)',
          '[tabindex]': 'tabindex',
          '[attr.role]': '"radiogroup"',
          '[attr.aria-disabled]': 'disabled',
          '[attr.aria-activedescendant]': 'activedescendant'
        }
      }), View({templateUrl: 'angular2_material/src/components/radio/radio_group.html'}), __param(0, Attribute('tabindex')), __param(1, Attribute('disabled')), __metadata('design:paramtypes', [String, String, MdRadioDispatcher])], MdRadioGroup));
      MdRadioButton = $__export("MdRadioButton", (($traceurRuntime.createClass)(function(radioGroup, id, tabindex, radioDispatcher) {
        var $__0 = this;
        this.radioGroup = radioGroup;
        this.radioDispatcher = radioDispatcher;
        this.value = null;
        this.role = 'radio';
        this.checked = false;
        this.id = isPresent(id) ? id : ("md-radio-" + _uniqueIdCounter++);
        radioDispatcher.listen((function(name) {
          if (name == $__0.name) {
            $__0.checked = false;
          }
        }));
        if (isPresent(radioGroup)) {
          this.name = radioGroup.getName();
          this.radioGroup.register(this);
        }
        if (!isPresent(radioGroup)) {
          this.tabindex = isPresent(tabindex) ? NumberWrapper.parseInt(tabindex, 10) : 0;
        } else {
          this.tabindex = -1;
        }
      }, {
        onChange: function(_) {
          if (isPresent(this.radioGroup)) {
            this.name = this.radioGroup.getName();
          }
        },
        isDisabled: function() {
          return this.disabled || (isPresent(this.disabled) && StringWrapper.equals(this.disabled, '')) || (isPresent(this.radioGroup) && this.radioGroup.disabled);
        },
        get disabled() {
          return this.disabled_;
        },
        set disabled(value) {
          this.disabled_ = isPresent(value) && value !== false;
        },
        select: function(event) {
          if (this.isDisabled()) {
            event.stopPropagation();
            return ;
          }
          this.radioDispatcher.notify(this.name);
          this.checked = true;
          if (isPresent(this.radioGroup)) {
            this.radioGroup.updateValue(this.value, this.id);
          }
        },
        onKeydown: function(event) {
          if (event.keyCode == KEY_SPACE) {
            event.preventDefault();
            this.select(event);
          }
        }
      }, {})));
      $__export("MdRadioButton", MdRadioButton = __decorate([Component({
        selector: 'md-radio-button',
        lifecycle: [onChange],
        properties: ['id', 'name', 'value', 'checked', 'disabled'],
        host: {
          '(keydown)': 'onKeydown($event)',
          '[id]': 'id',
          '[tabindex]': 'tabindex',
          '[attr.role]': 'role',
          '[attr.aria-checked]': 'checked',
          '[attr.aria-disabled]': 'disabled'
        }
      }), View({
        templateUrl: 'angular2_material/src/components/radio/radio_button.html',
        directives: []
      }), __param(0, Optional()), __param(0, Parent()), __param(1, Attribute('id')), __param(2, Attribute('tabindex')), __metadata('design:paramtypes', [MdRadioGroup, String, String, MdRadioDispatcher])], MdRadioButton));
    }
  };
});
//# sourceMappingURL=radio_button.js.map

//# sourceMappingURL=./radio_button.js.map