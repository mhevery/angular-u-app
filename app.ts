
class AngularUApp {
  name;
  constructor() {
    this.name = 'World';
  }
  
  greet() {
    alert('Hello ' + this.name);
  }
}

ng.Component({ selector: 'angular-u-app' })(AngularUApp)
ng.View({ templateUrl: 'app.html' })(AngularUApp)

ng.bootstrap(AngularUApp);
