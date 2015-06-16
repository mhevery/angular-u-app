if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var Login = (function () {
    function Login() {
        this.username = 'misko';
        this.password = '';
    }
    Login.prototype.login = function () {
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login'
        }),
        angular2_1.View({
            templateUrl: 'login.html',
            directives: [angular2_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [])
    ], Login);
    return Login;
})();
var AngularUApp = (function () {
    function AngularUApp() {
        this.name = 'World';
    }
    AngularUApp.prototype.greet = function () {
        alert('Hello ' + this.name);
    };
    AngularUApp = __decorate([
        angular2_1.Component({
            selector: 'angular-u-app'
        }),
        angular2_1.View({
            templateUrl: 'app.html',
            directives: [Login]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularUApp);
    return AngularUApp;
})();
angular2_1.bootstrap(AngularUApp);
//# sourceMappingURL=app.js.map