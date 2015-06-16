import {Component, View, bootstrap, formDirectives} from "angular2/angular2";

@Component({
  selector: 'login'
}) 
@View({
  templateUrl: 'login.html',
  directives: [formDirectives]
})
class Login {
  username: string = 'misko';
  password: string = '';
  
  login() {
    
  }
}


@Component({ 
  selector: 'angular-u-app' 
})
@View({ 
  templateUrl: 'app.html', 
  directives: [Login] 
})
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
