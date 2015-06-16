var AngularUApp = ng.
  Component({ selector: 'angular-u-app' }).
  View({ templateUrl: 'app.html' }).
  Class({
    constructor: function() {
      this.name = 'World';
    },
    greet: function() {
      alert('Hello ' + this.name);
    }
  });

ng.bootstrap(AngularUApp);
