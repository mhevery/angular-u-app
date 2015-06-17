/*
Step 1: ES5
- Show how to write a Angular Component in ES5
- Demonstrate value of .d.ts (Sublime, WebStorm, VS Code).
- How we expect you to write code (ES6-LIKE-DSL).

Step 2: Transpiled ES6
- Class syntax with decorators.
- ES6 Module system to manage large code base.

Step 3: TypeScript
- Use optional types for large teams.

Step 4: LoginForm
- Build simple login form using Material Design.
- Explain data-binding.
*/
/*
function Greeter() {
  this.user = 'World';
}

Greeter.prototype.greet = function() {
  alert('Hello ' + this.user + '!');
}

Greeter.annotations = [
  new ng.Component({
    selector: 'au-greeter'
  }),
  new ng.View({
    templateUrl: 'greeter.html'
  })
];

imp-ort * as ng from 'angular2/angular2';
imp-ort * as md from './angular2_material';

@ng.Component({
  selector: 'au-login',
  events: ['success']
})
@ng.View({
  templateUrl: 'login.html',
  directives: [ng.formDirectives, md.materialDirectives]
})
class Login {
  username: string = 'Misko';
  password: string;
  success = new ng.EventEmitter();
  
  login() {
    if (this.password == '123') {
      this.success.next(this.username);
    }
  }
}

@ng.Component({
  selector: 'au-greeter'
})
@ng.View({
  templateUrl: 'greeter.html',
  directives: [Login]
})
class Greeter {
  constructor() {
    this.user = 'World';
  }
  
  greet() {
    alert('Hello ' + this.user + '!');
  }
}



ng.bootstrap(Greeter);


 */
/**
imp-ort {Component, View, bootstrap, formDirectives, EventEmitter} from 'angular2/angular2';
imp-ort {materialDirectives} from './angular2_material';

@Component({
  selector: 'au-login',
  events: ['success']
})
@View({
  directives: [materialDirectives, formDirectives],
  templateUrl: 'login.html'
})
class Login {
  username:string = 'misko';
  password:string;
  
  success = new EventEmitter();
  
  login() {
    if (this.password == '123') {
      this.success.next(this.username);
    }
  }
  
}

@Component({
  selector: 'au-greeter',
  properties: ['user']
})
@View({
  templateUrl: 'greeter.html',
  directives: [Login]
})
class Greeter {
  
  constructor() {
    this.user = '';
  }
  greet() {
    alert('Hello  ' + this.user + '!');
  }
};


bootstrap(Greeter);
*/ 
//# sourceMappingURL=app.js.map