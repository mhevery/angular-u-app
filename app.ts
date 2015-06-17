import {Component, View, bootstrap, formDirectives, EventEmitter, NgIf} from "angular2/angular2";

@Component({ 
  selector: 'login',
  events: ['success']
})
@View({ 
  templateUrl: 'login.html',
  directives: [formDirectives]
})
class Login {
  success = new EventEmitter();
  username: string = 'misko';
  password: string = '';
  
  login() {
    if (this.password == '123') {
      this.success.next(this.username);
    }
  }
}

@Component({
  selector: 'shell',
  properties: ['user']
})
@View({
  templateUrl: 'shell.html'
})
class Shell {
  user:string;  
}

@Component({ 
  selector: 'angular-u-app' 
})
@View({ 
  templateUrl: 'app.html', 
  directives: [Login, Shell, NgIf] 
})
class AngularUApp {
  username = null;
  constructor() {
  }  
}


bootstrap(AngularUApp);
