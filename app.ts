import * as ng from "angular2/angular2";

@ng.Component({ selector: 'angular-u-app' })
@ng.View({ templateUrl: 'app.html' })
class AngularUApp {
  name;
  constructor() {
    this.name = 'World';
  }
  
  greet() {
    alert('Hello ' + this.name);
  }
}


ng.bootstrap(AngularUApp);
