declare var ng: angular.NgStatic;

declare module angular {
  interface List<T> extends Array<T> {}
  interface StringMap<K, V> extends Object {}
  
  interface NgStatic {
    Component: ComponentFactory;
    View: ViewFactory;
    bootstrap(type: Function);
  }
  
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
    directives?: List<Function | any | List<any>>;
    renderer?: string;
    styles?: List<string>;
    styleUrls?: List<string>;
  }

  interface View extends Annotation, ViewArgs {

  }
  
  interface ClassFactory {
    (methods: {
      constructor: (Function | Array<Function | Annotation>);
      extends?: Function
    })
  }

  function bootstrap(Function);
}


declare module "angular2" {
  export = ng;
}
