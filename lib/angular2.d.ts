
declare module ng {
  class StringMap<K, V> {}
 
  function bootstrap(type: Function);
  var Component: ComponentFactory;
  var View: ViewFactory;
  var formDirectives: Array<Function>
 
  interface Annotation {}
  
  interface ComponentFactory {
    new (args: ComponentArgs): Component;
    (args: ComponentArgs): ComponentDecorator
  }
  
  interface Decorator {
    Class: ClassFactory;
    annotations: Array<Annotation>;
  }
  
  interface ComponentDecorator extends Decorator {
    <T extends Function>(type: T): T; 
    View: ViewFactory;
  }
  
  interface ComponentArgs {
    selector?: string;
    properties?: Array<string>;
    events?: Array<string>;
    host?: StringMap<string, string>;
    lifecycle?: Array<LifecycleEvent>;
    hostInjector?: Array<any>;
    exportAs?: string;
    compileChildren?: boolean;
  }
  
  interface LifecycleEvent {}

  interface Component extends Annotation, ComponentArgs {

  }

  interface ViewFactory {
    new (args: ViewArgs): View;
    (args: ViewArgs): ViewDecorator
  }
  
  interface ViewDecorator extends Decorator {
    <T extends Function>(type: T): T; 
  }
  
  interface ViewArgs {
    templateUrl?: string;
    template?: string;
    directives?: Array<Function | any | Array<any>>;
    renderer?: string;
    styles?: Array<string>;
    styleUrls?: Array<string>;
  }

  interface View extends Annotation, ViewArgs {

  }
  
  interface ClassFactory {
    (methods: {
      constructor: (Function | Array<Function | Annotation>);
      extends?: Function
    })
  }
  
  class Observable {
    observer(generator: any): Object;
  }
  
  class EventEmitter extends Observable {
    next(value):any;
    throw(error):any;
    return(value?):any;
  }
}


declare module "angular2/angular2" {
  export = ng;
}
