System.register(["angular2/angular2", "angular2/di", "angular2/src/facade/async", "angular2/src/facade/lang", "angular2/src/dom/dom_adapter", "angular2_material/src/core/constants"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      __param,
      Component,
      Directive,
      View,
      Parent,
      ElementRef,
      DynamicComponentLoader,
      DomRenderer,
      bind,
      Injectable,
      forwardRef,
      PromiseWrapper,
      isPresent,
      DOM,
      KEY_ESC,
      MdDialog,
      MdDialogRef,
      MdDialogConfig,
      MdDialogContainer,
      MdDialogContent,
      MdBackdrop;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Directive = $__m.Directive;
      View = $__m.View;
      Parent = $__m.Parent;
      ElementRef = $__m.ElementRef;
      DynamicComponentLoader = $__m.DynamicComponentLoader;
      DomRenderer = $__m.DomRenderer;
    }, function($__m) {
      bind = $__m.bind;
      Injectable = $__m.Injectable;
      forwardRef = $__m.forwardRef;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      KEY_ESC = $__m.KEY_ESC;
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
      MdDialog = $__export("MdDialog", (($traceurRuntime.createClass)(function(loader, domRenderer) {
        this.componentLoader = loader;
        this.domRenderer = domRenderer;
      }, {
        open: function(type, elementRef, parentInjector) {
          var options = arguments[3] !== (void 0) ? arguments[3] : null;
          var $__0 = this;
          var config = isPresent(options) ? options : new MdDialogConfig();
          var dialogRef = new MdDialogRef();
          var dialogRefBinding = bind(MdDialogRef).toValue(dialogRef);
          var contentInjector = parentInjector.resolveAndCreateChild([dialogRefBinding]);
          var backdropRefPromise = this._openBackdrop(elementRef, contentInjector);
          return this.componentLoader.loadIntoNewLocation(MdDialogContainer, elementRef).then((function(containerRef) {
            var dialogElement = $__0.domRenderer.getRootNodes(containerRef.hostView.render)[0];
            DOM.appendChild(DOM.query('body'), dialogElement);
            DOM.addClass(dialogElement, 'md-dialog');
            DOM.setAttribute(dialogElement, 'tabindex', '0');
            if (isPresent(config.width)) {
              DOM.setStyle(dialogElement, 'width', config.width);
            }
            if (isPresent(config.height)) {
              DOM.setStyle(dialogElement, 'height', config.height);
            }
            dialogRef.containerRef = containerRef;
            return $__0.componentLoader.loadNextToExistingLocation(type, containerRef.instance.contentRef, contentInjector).then((function(contentRef) {
              dialogRef.contentRef = contentRef;
              containerRef.instance.dialogRef = dialogRef;
              backdropRefPromise.then((function(backdropRef) {
                dialogRef.whenClosed.then((function(_) {
                  backdropRef.dispose();
                }));
              }));
              return dialogRef;
            }));
          }));
        },
        _openBackdrop: function(elementRef, injector) {
          var $__0 = this;
          return this.componentLoader.loadIntoNewLocation(MdBackdrop, elementRef, injector).then((function(componentRef) {
            var backdropElement = $__0.domRenderer.getRootNodes(componentRef.hostView.render)[0];
            DOM.addClass(backdropElement, 'md-backdrop');
            DOM.appendChild(DOM.query('body'), backdropElement);
            return componentRef;
          }));
        },
        alert: function(message, okMessage) {
          throw "Not implemented";
        },
        confirm: function(message, okMessage, cancelMessage) {
          throw "Not implemented";
        }
      }, {})));
      $__export("MdDialog", MdDialog = __decorate([Injectable(), __metadata('design:paramtypes', [DynamicComponentLoader, DomRenderer])], MdDialog));
      MdDialogRef = $__export("MdDialogRef", (function() {
        var MdDialogRef = function MdDialogRef() {
          this._contentRef = null;
          this.containerRef = null;
          this.isClosed = false;
          this.contentRefDeferred = PromiseWrapper.completer();
          this.whenClosedDeferred = PromiseWrapper.completer();
        };
        return ($traceurRuntime.createClass)(MdDialogRef, {
          set contentRef(value) {
            this._contentRef = value;
            this.contentRefDeferred.resolve(value);
          },
          get instance() {
            if (isPresent(this._contentRef)) {
              return this._contentRef.instance;
            }
            throw "Cannot access dialog component instance *from* that component's constructor.";
          },
          get whenClosed() {
            return this.whenClosedDeferred.promise;
          },
          close: function() {
            var result = arguments[0] !== (void 0) ? arguments[0] : null;
            var $__0 = this;
            this.contentRefDeferred.promise.then((function(_) {
              if (!$__0.isClosed) {
                $__0.isClosed = true;
                $__0.containerRef.dispose();
                $__0.whenClosedDeferred.resolve(result);
              }
            }));
          }
        }, {});
      }()));
      MdDialogConfig = $__export("MdDialogConfig", (function() {
        var MdDialogConfig = function MdDialogConfig() {
          this.width = null;
          this.height = null;
        };
        return ($traceurRuntime.createClass)(MdDialogConfig, {}, {});
      }()));
      MdDialogContainer = (($traceurRuntime.createClass)(function() {
        this.contentRef = null;
        this.dialogRef = null;
      }, {
        wrapFocus: function() {},
        documentKeypress: function(event) {
          if (event.keyCode == KEY_ESC) {
            this.dialogRef.close();
          }
        }
      }, {}));
      MdDialogContainer = __decorate([Component({
        selector: 'md-dialog-container',
        host: {'(body:^keydown)': 'documentKeypress($event)'}
      }), View({
        templateUrl: 'angular2_material/src/components/dialog/dialog.html',
        directives: [forwardRef((function() {
          return MdDialogContent;
        }))]
      }), __metadata('design:paramtypes', [])], MdDialogContainer);
      MdDialogContent = (($traceurRuntime.createClass)(function(dialogContainer, elementRef) {
        dialogContainer.contentRef = elementRef;
      }, {}, {}));
      MdDialogContent = __decorate([Directive({selector: 'md-dialog-content'}), __param(0, Parent()), __metadata('design:paramtypes', [MdDialogContainer, ElementRef])], MdDialogContent);
      MdBackdrop = (($traceurRuntime.createClass)(function(dialogRef) {
        this.dialogRef = dialogRef;
      }, {onClick: function() {
          this.dialogRef.close();
        }}, {}));
      MdBackdrop = __decorate([Component({
        selector: 'md-backdrop',
        host: {'(click)': 'onClick()'}
      }), View({template: ''}), __metadata('design:paramtypes', [MdDialogRef])], MdBackdrop);
    }
  };
});
//# sourceMappingURL=dialog.js.map

//# sourceMappingURL=./dialog.js.map