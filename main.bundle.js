webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\r\n  <img src=\"./assets/img/jonathan.png\" alt=\"\">\r\n</div>\r\n\r\n<div class=\"contact\">\r\n  <p>{{email.toUpperCase()}}</p>\r\n  <p>{{phone}}</p>\r\n  <a target=\"_blank\" href=\"https://www.linkedin.com/in/jonathan-armen-stein\">LINKEDIN</a> |\r\n  <a target=\"_blank\" href=\"https://github.com/JStein92\">GITHUB</a>\r\n</div>\r\n\r\n<hr>\r\n\r\n<div class=\"summary\">\r\n  <p>\r\n  Seattle native, born and raised in Redmond. I have always had a passion for programming. As a teenager, I was making complex mods for video games. In high school and college, I was developing windows applications and programming my own games. Now, I'm a front end web developer who wants to help your company make their next app.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"skills\">\r\n  <h1>Languages</h1>\r\n  <ul>\r\n    <li>Angular2/4</li>\r\n    <li>JavaScript</li>\r\n    <li>HTML/CSS/SASS</li>\r\n    <li>SQL</li>\r\n    <li>C#</li>\r\n  </ul>\r\n\r\n  <h1>Software proficiency</h1>\r\n  <ul>\r\n    <li>Photoshop</li>\r\n    <li>Github/Git Version Control</li>\r\n    <li>Visual Studio</li>\r\n    <li>Maya</li>\r\n    <li>Unity 3D</li>\r\n  </ul>\r\n\r\n  <h1>Other experience:</h1>\r\n  <ul>\r\n    <li>Paid tutor in Maya for 6 different clients with a 5 star rating</li>\r\n    <li>Usability and playtesting, writing formal heuristic reports</li>\r\n    <li>Zarya Main in Overwatch, 3300-High SR</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 80%;\n  margin: 30px auto; }\n\n.image {\n  text-align: center; }\n\n.contact {\n  text-align: center; }\n  .contact a {\n    text-decoration: none; }\n\n.summary, .skills {\n  color: #545454; }\n\n.summary {\n  text-align: left;\n  letter-spacing: 1px;\n  margin: 40px 30px; }\n\n.skills {\n  font-weight: 100;\n  text-align: left;\n  letter-spacing: 1px; }\n  .skills h1 {\n    font-size: 1em; }\n  .skills li {\n    margin-top: 2px; }\n\nhr {\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.email = "JonathanStein@Live.com";
        this.phone = "425-214-6105";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"nav\">\r\n    <h1 class=\"title\">{{title.toUpperCase()}}</h1>\r\n    <div class=\"header-nav\">\r\n      <span [ngClass]=\"currentRoute('/home')\">\r\n        <a [routerLink]=\"['home']\">Web Developement</a>\r\n      </span>\r\n      <span [ngClass]=\"currentRoute('/about')\">\r\n        <a [routerLink]=\"['about']\">About</a>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\n  display: inline-block;\n  margin: 20px; }\n\n.title {\n  text-align: center;\n  margin-top: 0px;\n  margin-left: 8vw;\n  font-size: 3.5em;\n  margin-bottom: 5px;\n  float: left;\n  letter-spacing: 5px;\n  color: #333; }\n\n.header-nav {\n  float: right;\n  margin-top: 20px;\n  margin-right: 20px;\n  margin-left: 6vw;\n  text-align: center;\n  letter-spacing: 2px; }\n  .header-nav a {\n    display: inline-block;\n    margin-left: 30px;\n    font-size: 1.3em;\n    text-decoration: none;\n    color: grey; }\n    .header-nav a:hover {\n      color: black; }\n\n.container {\n  margin: 40px;\n  letter-spacing: 3px; }\n\n@media (max-width: 1100px) {\n  .container {\n    margin: 5px;\n    text-align: center; }\n  .nav {\n    display: inline-block;\n    margin-top: 0px;\n    margin-bottom: 10px;\n    margin: 10px; }\n  .title {\n    float: none;\n    margin-left: 0px;\n    text-align: center;\n    margin-top: 0px;\n    font-size: 6vw;\n    margin-bottom: 5px; }\n  .header-nav {\n    margin-top: 5px;\n    margin-right: 0px;\n    margin-left: 0px;\n    float: none; }\n    .header-nav a {\n      display: inline-block;\n      margin-right: 2vw;\n      margin-left: 0px;\n      font-size: 2vw; } }\n\n.active a {\n  color: #234463;\n  font-weight: 600; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = "Jonathan Stein's Studio";
        router.events.subscribe(function (url) {
            return _this.route = router.url;
        });
    }
    AppComponent.prototype.currentRoute = function (val) {
        if (val == this.route || (val == "/home" && this.route == "/")) {
            return "active";
        }
        else {
            return "inactive";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <h2>{{header.toUpperCase()}}</h2>\r\n</div>\r\n<hr>\r\n\r\n<div class=\"projects-wrapper\">\r\n  <div *ngFor=\"let projectSet of projects; let i = index\" [attr.data-index]=\"i\">\r\n    <h3 class=\"sub-header\">{{projectSet[0].title}}</h3>\r\n    <div *ngFor=\"let project of projectSet\" class=\"projects\">\r\n      <div *ngIf=\"project.name\">\r\n        <div class=\"image\">\r\n          <a target=\"_blank\" href=\"{{project.link}}\">\r\n            <img src=\"{{project.image}}\" alt=\"\">\r\n            <div class=\"label\">\r\n              <span>\r\n                <h1>\r\n                  {{project.name}}\r\n                </h1>\r\n                <br>\r\n                {{project.description}}\r\n              </span>\r\n            </div>\r\n            <div *ngIf=\"project.github\" class=\"github-link\">\r\n              <a target=\"_blank\" href=\"{{project.github}}\">Github</a>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr *ngIf=\"i < projects.length-1\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header h2 {\n  font-weight: 100;\n  text-align: center;\n  font-size: 1.5em;\n  margin-bottom: 30px;\n  color: #474747; }\n\n.projects-wrapper {\n  text-align: center;\n  margin: 40px; }\n  .projects-wrapper hr {\n    margin: 40px; }\n  .projects-wrapper .sub-header {\n    margin-top: 40px;\n    margin-bottom: 15px;\n    color: #474747; }\n  .projects-wrapper .projects {\n    text-align: center;\n    display: inline-block; }\n    .projects-wrapper .projects .image {\n      margin: 20px 20px 0px 0px;\n      width: 100%;\n      position: relative; }\n      .projects-wrapper .projects .image img {\n        width: 35vw;\n        box-shadow: 0px 0px 10px grey; }\n    .projects-wrapper .projects .label {\n      transition: all 0.2s;\n      letter-spacing: 1px;\n      font-weight: 100;\n      text-align: left;\n      position: absolute;\n      top: 30%;\n      left: 10px;\n      width: 70%;\n      background: rgba(0, 0, 0, 0.8);\n      color: white; }\n      .projects-wrapper .projects .label h1 {\n        padding: 0px;\n        margin: 0px; }\n      .projects-wrapper .projects .label span {\n        display: inline-block;\n        font-size: .7em;\n        padding: 10px;\n        margin: 3%; }\n    .projects-wrapper .projects .github-link {\n      position: absolute;\n      bottom: 5px;\n      right: 10px;\n      width: 100px;\n      background: rgba(255, 255, 255, 0.95);\n      border-radius: 5px 0 0 0;\n      color: black; }\n      .projects-wrapper .projects .github-link a {\n        color: black;\n        text-decoration: none; }\n        .projects-wrapper .projects .github-link a:hover {\n          text-decoration: underline; }\n      .projects-wrapper .projects .github-link:hover {\n        background: white; }\n    .projects-wrapper .projects:hover .label {\n      width: 80%;\n      background: rgba(0, 0, 0, 0.92); }\n\n@media (max-width: 1100px) {\n  .header h2 {\n    font-size: 3vw; }\n  .projects-wrapper {\n    text-align: center;\n    margin: 0px; }\n    .projects-wrapper .sub-header {\n      font-size: 2.3vw;\n      margin: 30px 0px 0px 0px; }\n    .projects-wrapper hr {\n      margin: 20px 0px 20px; }\n    .projects-wrapper .projects {\n      text-align: center;\n      display: inline-block; }\n      .projects-wrapper .projects .image {\n        width: 100%;\n        position: relative; }\n        .projects-wrapper .projects .image img {\n          width: 100%; }\n        .projects-wrapper .projects .image .label {\n          font-weight: 100;\n          text-align: left;\n          position: absolute;\n          top: 30%;\n          left: 0;\n          width: 70%;\n          color: white; }\n          .projects-wrapper .projects .image .label h1 {\n            padding: 0px;\n            margin: 0px;\n            font-size: 3vw; }\n          .projects-wrapper .projects .image .label span {\n            display: inline-block;\n            font-size: 2vw;\n            padding: 10px;\n            margin: 3%; }\n        .projects-wrapper .projects .image .github-link {\n          right: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_projects__ = __webpack_require__("../../../../../src/app/web-projects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(webProjects) {
        this.webProjects = webProjects;
        this.projects = this.webProjects.projects;
        this.header = "Web developer and programming enthusiast";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__web_projects__["a" /* WebProjects */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__web_projects__["a" /* WebProjects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__web_projects__["a" /* WebProjects */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/web-projects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebProjects; });
var WebProjects = (function () {
    function WebProjects() {
        this.angularProjects = [
            { title: "AngularJS & Angular2/4" },
            {
                name: "OTR Reviews Page",
                description: "AngularJS page designed and built for Off The Record to dynamically list customer reviews",
                link: "https://Offtherecord.com/reviews",
                image: "./assets/img/Reviews.png"
            },
            {
                name: "Overwatch Site",
                description: "Angular 2 app that fetches data from an Overwatch API to display player stats",
                link: "https://jstein92.github.io/overwatch-stats/",
                image: "./assets/img/Overwatch.png",
                github: "https://github.com/JStein92/overwatch-site"
            },
            {
                name: "OTR Login Modal",
                description: "Login/Signup modal with Facebook integration for Off The Record",
                link: "https://Offtherecord.com",
                image: "./assets/img/Login.png"
            },
            {
                name: "Pokemon Adventure",
                description: "A group project made during my programming bootcamp - catch, battle, and level up Pokemon, all generated through PokeAPI",
                link: "https://jstein92.github.io/pokemon-adventure/",
                image: "./assets/img/Pokemon.png",
                github: "https://github.com/JStein92/pokemon-adventure"
            }
        ];
        this.netProjects = [
            { title: "C# & .NET" },
            {
                name: "Online Shop",
                description: "SQL integrated Amazon style online shopping app",
                link: "https://github.com/JStein92/OnlineShop",
                image: "./assets/img/OnlineShop.png",
                github: "https://github.com/JStein92/OnlineShop"
            },
            {
                name: "Band tracker",
                description: "SQL integrated band/venue tracker",
                link: "https://github.com/JStein92/BandTracker",
                image: "./assets/img/BandTracker.png",
                github: "https://github.com/JStein92/BandTracker"
            }
        ];
        this.projects = [this.angularProjects, this.netProjects];
    }
    return WebProjects;
}());

//# sourceMappingURL=web-projects.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map