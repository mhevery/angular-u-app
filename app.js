var AngularUApp = (function () {
    function AngularUApp() {
        this.name = 'World';
    }
    AngularUApp.prototype.greet = function () {
        alert('Hello ' + this.name);
    };
    return AngularUApp;
})();
ng.Component({ selector: 'angular-u-app' })(AngularUApp);
ng.View({ templateUrl: 'app.html' })(AngularUApp);
ng.bootstrap(AngularUApp);
//# sourceMappingURL=app.js.map