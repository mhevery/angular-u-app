import {Component, View, bootstrap, formDirectives, EventEmitter, NgIf} from "angular2/angular2";
import {materialDirectives} from "angular2_material";

@Component({ 
  selector: 'login',
  events: ['success']
})
@View({ 
  templateUrl: 'login.html',
  directives: [formDirectives, materialDirectives]
})
class Login {
  success = new EventEmitter();
  username: string = '';
  password: string = '';
  
  login() {
    if (this.password == '123') {
      this.success.next(this.username);
    }
  }
}

@Component({
  selector: 'greeter',
  properties: ['user']
})
@View({
  templateUrl: 'shell.html'
})
class Greeter {
  user:string;
  
  greet() {
    alert('Hello ' + this.user + '!');
  }
}

@Component({ 
  selector: 'angular-u-app' 
})
@View({ 
  templateUrl: 'app.html', 
  directives: [Login, Greeter, NgIf] 
})
class AngularUApp {
  username = null;
  constructor() {
  }  
}


bootstrap(AngularUApp);
