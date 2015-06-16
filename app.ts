import {Component, View, bootstrap} from "angular2/angular2";

@Component({ selector: 'angular-u-app' })
@View({ templateUrl: 'app.html' })
class AngularUApp {
  name;
  constructor() {
    this.name = 'World';
  }
  
  greet() {
    alert('Hello ' + this.name);
  }
}


bootstrap(AngularUApp);
