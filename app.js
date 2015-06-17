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
        this.success = new angular2_1.EventEmitter();
        this.username = 'misko';
        this.password = '';
    }
    Login.prototype.login = function () {
        if (this.password == '123') {
            this.success.next(this.username);
        }
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login',
            events: ['success']
        }),
        angular2_1.View({
            templateUrl: 'login.html',
            directives: [angular2_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [])
    ], Login);
    return Login;
})();
var Shell = (function () {
    function Shell() {
    }
    Shell = __decorate([
        angular2_1.Component({
            selector: 'shell',
            properties: ['user']
        }),
        angular2_1.View({
            templateUrl: 'shell.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Shell);
    return Shell;
})();
var AngularUApp = (function () {
    function AngularUApp() {
        this.username = null;
    }
    AngularUApp = __decorate([
        angular2_1.Component({
            selector: 'angular-u-app'
        }),
        angular2_1.View({
            templateUrl: 'app.html',
            directives: [Login, Shell, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularUApp);
    return AngularUApp;
})();
angular2_1.bootstrap(AngularUApp);
//# sourceMappingURL=app.js.map