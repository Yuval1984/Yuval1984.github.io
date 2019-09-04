(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mainweather></app-mainweather>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Weather';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mainweather_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainweather/weather/weather.component */ "./src/app/mainweather/weather/weather.component.ts");
/* harmony import */ var _mainweather_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainweather/favorites/favorites.component */ "./src/app/mainweather/favorites/favorites.component.ts");
/* harmony import */ var _mainweather_weather_router_weather_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainweather/weather-router/weather-router.module */ "./src/app/mainweather/weather-router/weather-router.module.ts");
/* harmony import */ var _mainweather_mainweather_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainweather/mainweather.component */ "./src/app/mainweather/mainweather.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainweather_weather_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainweather/weather-service.service */ "./src/app/mainweather/weather-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _mainweather_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"],
                _mainweather_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__["FavoritesComponent"],
                _mainweather_mainweather_component__WEBPACK_IMPORTED_MODULE_8__["MainweatherComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _mainweather_weather_router_weather_router_module__WEBPACK_IMPORTED_MODULE_7__["WeatherRouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(_mainweather_weather_router_weather_router_module__WEBPACK_IMPORTED_MODULE_7__["appRoutes"])
            ],
            providers: [_mainweather_weather_service_service__WEBPACK_IMPORTED_MODULE_10__["WeatherServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mainweather/favorites/favorites.component.css":
/*!***************************************************************!*\
  !*** ./src/app/mainweather/favorites/favorites.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#block{\r\n    border-style: solid;\r\n    margin: 30px;\r\n    text-align: center;\r\n    transition: 1s all;\r\n}\r\n#myDiv{\r\n    -webkit-transform: rotateX(180deg);\r\n            transform: rotateX(180deg);\r\n}\r\n.close{\r\n    background-color: transparent;\r\n}\r\n.c{\r\n    float: center;\r\n}\r\n#block:hover {\r\n    -webkit-transform: rotate(360deg);      \r\n    transform: rotate(360deg);\r\n}\r\n.colorchange{\r\n    background-color: black;\r\n    color: white;\r\n}\r\n.card{\r\n    width: 10rem;\r\n    \r\n}\r\n.card-img-top{\r\n    background-color: grey;\r\n    color: white;\r\n}\r\n.x{\r\n    float: right;\r\n}\r\n@media only screen and (max-width: 987px) {\r\n    #block{\r\n        border-style: solid;\r\n        margin: 25px;\r\n        text-align: center;\r\n        transition: 1s all;\r\n        font-size: 15px;\r\n    }\r\n    .fa{\r\n        font-size: 20px;\r\n    }\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    #block{\r\n        border-style: solid;\r\n        margin: 20px;\r\n        text-align: center;\r\n        transition: 1s all;\r\n        font-size: 12px;\r\n    }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    #block{\r\n        border-style: solid;\r\n        margin: 15px;\r\n        text-align: center;\r\n        transition: 1s all;\r\n        font-size: 9px;\r\n    }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mainweather/favorites/favorites.component.html":
/*!****************************************************************!*\
  !*** ./src/app/mainweather/favorites/favorites.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{data.Backgroundcolor==1?'colorchange':''}}\">\n<div class=\"row\" >\n  <div *ngFor=\"let mycities of AllCities1\" class=\"col-2 ml-10\" (click)=\"data.Cityname=mycities.name\" [routerLink]=\"['/']\" id=\"block\">\n    <div class=\"container\">\n            <button class=\"close x\" (click)=\"delete(mycities.id)\">\n                <i class=\"fa fa-remove\" style=\"font-size:30px;color:red;\"></i>\n            </button>\n    </div>\n    <div>\n        <div><p>{{mycities.name}}</p></div>\n    </div>\n    <div>\n      {{mycities.Value}}\n    </div>\n    <div>\n      {{mycities.WeatherText}}\n    </div>\n    <div>\n     <img src={{logo(mycities.logo)}}>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainweather/favorites/favorites.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mainweather/favorites/favorites.component.ts ***!
  \**************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather-service.service */ "./src/app/mainweather/weather-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(data) {
        this.data = data;
        this.AllCities1 = [];
        this.current_weather = {
            id: 0,
            name: '',
            Value: 0,
            WeatherText: '',
            logo: 0
        };
        this.AllCities1 = this.data.GetAllcities();
    }
    FavoritesComponent.prototype.delete = function (num) {
        for (var i = 0; i < this.AllCities1.length; i++)
            if (this.AllCities1[i].id == num) {
                this.AllCities1.splice(i, 1);
                break;
            }
    };
    FavoritesComponent.prototype.logo = function (value) {
        return "assets/" + value + ".png";
    };
    FavoritesComponent.prototype.ngOnInit = function () {
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/mainweather/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/mainweather/favorites/favorites.component.css")]
        }),
        __metadata("design:paramtypes", [_weather_service_service__WEBPACK_IMPORTED_MODULE_1__["WeatherServiceService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/mainweather/mainweather.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mainweather/mainweather.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbartitle{\r\n    font-size: 15px;\r\n    color: white;\r\n    transition: 1s all;\r\n}\r\n.btn-outline-success{\r\n    font-size: 20px;\r\n    padding: .200rem .35rem;\r\n}\r\n.btn-outline-primary{\r\n    font-size: 20px;\r\n    padding: .200rem .35rem;\r\n}\r\n.btn-group-toggle{\r\n    margin-right: 2px;\r\n    float: right;\r\n}\r\n.input-group{\r\n    width: 50%;\r\n    margin-top: 2%;\r\n    margin-left: 30%;\r\n}\r\n.img{\r\n    height: 45px;\r\n    width: 45px;\r\n    margin-left: 10%;\r\n}\r\n.fav{\r\n    text-align: right;\r\n    float: right;\r\n}\r\n.favbut{\r\n    width: 180px;\r\n    height: 40px;\r\n    text-align: center;\r\n    padding: 1px;\r\n}\r\n.main{\r\n    margin-top: 10%;\r\n}\r\n.weatherpic{\r\n    margin: auto;\r\n    width: 200px;\r\n}\r\n.bottom{\r\n    margin-top: 100px;\r\n}\r\n.block{\r\n    border-style: solid;\r\n    margin: 30px;\r\n    text-align: center;\r\n}\r\n/* The switch - the box around the slider */\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n/* The slider */\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n.awitch{\r\n      float: right;\r\n  }\r\n.S{\r\n      color: white;\r\n      font-size: 15px;\r\n  }\r\n.S1{\r\n    color: white;\r\n    font-size: 15px;\r\n    float: left;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    .S{\r\n        color: white;\r\n        font-size: 10px;\r\n    }\r\n    .navbartitle{\r\n        font-size: 10px;\r\n        color: white;\r\n    }\r\n    .btn-outline-success{\r\n        font-size: 15px;\r\n        padding: .150rem .35rem;\r\n    }\r\n    .btn-outline-primary{\r\n        font-size: 15px;\r\n        padding: .150rem .35rem;\r\n    }\r\n    .img{\r\n        height: 30px;\r\n        width: 30px;\r\n    }\r\n    .switch {\r\n        position: relative;\r\n        display: inline-block;\r\n        width: 50px;\r\n        height: 24px;\r\n      }\r\n      .slider:before {\r\n        position: absolute;\r\n        content: \"\";\r\n        height: 16px;\r\n        width: 16px;\r\n        left: 4px;\r\n        bottom: 4px;\r\n        background-color: white;\r\n        transition: .4s;\r\n      }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .S{\r\n        color: white;\r\n        font-size: 6px;\r\n    }\r\n    .navbartitle{\r\n        font-size: 8px;\r\n        color: white;\r\n    }\r\n    .btn-outline-success{\r\n        font-size: 12px;\r\n        padding: .120rem .35rem;\r\n    }\r\n    .btn-outline-primary{\r\n        font-size: 12px;\r\n        padding: .120rem .35rem;\r\n    }\r\n    .img{\r\n        height: 15px;\r\n        width: 15px;\r\n    }\r\n    .switch {\r\n        position: relative;\r\n        display: inline-block;\r\n        width: 40px;\r\n        height: 14px;\r\n      }\r\n      .slider:before {\r\n        position: absolute;\r\n        content: \"\";\r\n        height: 9px;\r\n        width: 9px;\r\n        left: 4px;\r\n        bottom: 2px;\r\n        background-color: white;\r\n        transition: .4s;\r\n      }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n    .btn-outline-success{\r\n        font-size: 8px;\r\n        padding: .100rem .35rem;\r\n    }\r\n    .btn-outline-primary{\r\n        font-size: 8px;\r\n        padding: .100rem .35rem;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/mainweather/mainweather.component.html":
/*!********************************************************!*\
  !*** ./src/app/mainweather/mainweather.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"container-fluid navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"col-5\">\n      <h6 class=\"navbartitle\">Herolo Weather Task</h6>\n      <img src='assets/herolo.jpg' class=\"img\">\n    </div>\n\n    <div><p class=\"S\">Click for Dark/Light Theme</p>\n    <div class=\"col\">\n        <label class=\"checkbox-inline\" style=\"margin-left: 30%;\">\n            <label class=\"switch\">\n                <input type=\"checkbox\" class=\"aa\" (click)=\"data.changeBackgroundcolor()\">\n                <span class=\"slider round\"></span>\n            </label>\n          </label>\n    </div>\n    </div>\n    \n    <div class=\"col switch\">\n        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n          \n            <label class=\"btn btn-outline-success Home\" [routerLink]=\"['/']\">\n              Home\n            </label>\n\n            <label class=\"btn btn-outline-primary Home\" [routerLink]=\"['/Favorites']\">\n              Favorites\n            </label>\n          </div>\n    </div>\n  </nav>\n</div>\n\n<div class=\"tabcontent\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/mainweather/mainweather.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mainweather/mainweather.component.ts ***!
  \******************************************************/
/*! exports provided: MainweatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainweatherComponent", function() { return MainweatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-service.service */ "./src/app/mainweather/weather-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainweatherComponent = /** @class */ (function () {
    function MainweatherComponent(data) {
        this.data = data;
    }
    MainweatherComponent.prototype.ngOnInit = function () {
    };
    MainweatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainweather',
            template: __webpack_require__(/*! ./mainweather.component.html */ "./src/app/mainweather/mainweather.component.html"),
            styles: [__webpack_require__(/*! ./mainweather.component.css */ "./src/app/mainweather/mainweather.component.css")]
        }),
        __metadata("design:paramtypes", [_weather_service_service__WEBPACK_IMPORTED_MODULE_1__["WeatherServiceService"]])
    ], MainweatherComponent);
    return MainweatherComponent;
}());



/***/ }),

/***/ "./src/app/mainweather/weather-router/weather-router.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mainweather/weather-router/weather-router.module.ts ***!
  \*********************************************************************/
/*! exports provided: appRoutes, WeatherRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherRouterModule", function() { return WeatherRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather/weather.component */ "./src/app/mainweather/weather/weather.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favorites/favorites.component */ "./src/app/mainweather/favorites/favorites.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: _weather_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"] },
    { path: 'Favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"] }
];
var WeatherRouterModule = /** @class */ (function () {
    function WeatherRouterModule() {
    }
    WeatherRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            declarations: []
        })
    ], WeatherRouterModule);
    return WeatherRouterModule;
}());



/***/ }),

/***/ "./src/app/mainweather/weather-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/mainweather/weather-service.service.ts ***!
  \********************************************************/
/*! exports provided: WeatherServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherServiceService", function() { return WeatherServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherServiceService = /** @class */ (function () {
    function WeatherServiceService() {
        this.sentname = '';
        this.myname = '';
        this.Flag = 0;
        this.id = 0;
        this.AllCities = [];
        this.Cities = {
            id: 0,
            name: '',
            Value: 0,
            WeatherText: '',
            logo: 0
        };
        this.Backgroundcolor = 0;
    }
    WeatherServiceService.prototype.changeBackgroundcolor = function () {
        this.Backgroundcolor = 1 - this.Backgroundcolor;
    };
    WeatherServiceService.prototype.UpdateAllcities = function (value, weathertext, logo, name) {
        var k = 0;
        this.Flag = 0;
        this.CheckDuplicates(name);
        if (this.Flag == 0) {
            this.AllCities[this.id++] = {
                id: this.id,
                Value: value,
                WeatherText: weathertext,
                logo: logo,
                name: name
            };
        }
    };
    WeatherServiceService.prototype.CheckDuplicates = function (name) {
        var _this = this;
        this.sentname = name;
        this.AllCities.forEach(function (element) {
            if (element.name == name) {
                _this.Flag = 1;
                return false;
            }
        });
        return true;
    };
    WeatherServiceService.prototype.GetAllcities = function () {
        return this.AllCities;
    };
    WeatherServiceService.prototype.Delete = function (num) {
        this.AllCities.splice(num, 1);
    };
    WeatherServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WeatherServiceService);
    return WeatherServiceService;
}());



/***/ }),

/***/ "./src/app/mainweather/weather/weather.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mainweather/weather/weather.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbartitle{\r\n    color:white;\r\n}\r\n.btn-group-toggle{\r\n    margin-right: 2px;\r\n    float: right;\r\n}\r\n.input-group{\r\n    width: 50%;\r\n    margin-top: 2%;\r\n    margin-left: 30%;\r\n}\r\n.fav{\r\n    text-align: right;\r\n    float: right;\r\n}\r\n.favbut{\r\n    width: 180px;\r\n    height: 40px;\r\n    text-align: center;\r\n    padding: 1px;\r\n}\r\n.main{\r\n    margin-top: 10%;\r\n}\r\n.weathertext{\r\n    margin: auto;\r\n    width: 300px;\r\n    margin-top: 50px;\r\n}\r\n.bottom{\r\n    margin-top: 100px;\r\n}\r\n.block{\r\n    border-style: solid;\r\n    margin: 30px;\r\n    text-align: center;\r\n}\r\n.wt{\r\n    text-align: center;\r\n}\r\n.form-control-borderless {\r\n    border: none;\r\n}\r\n.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {\r\n    border: none;\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n.er{\r\n    color: red;\r\n}\r\n.img{\r\n    width: 20px;\r\n    height: 20px;;\r\n}\r\n.colorchange{\r\n    background-color: black;\r\n}\r\n.colorchange1{\r\n    background-color: grey;\r\n}\r\n.colorchange2{\r\n    background-color: dimgray;\r\n}\r\n@media only screen and (max-width: 987px) {\r\n    .n{\r\n        font-size: 13px;\r\n    }\r\n    .w{\r\n        font-size: 13px;\r\n    }\r\n}\r\n@media only screen and (max-width: 768px) {\r\n    .w{\r\n        font-size: 10px;\r\n    }\r\n    .fa-spin{\r\n        size: 20px;\r\n    }\r\n    .se{\r\n        font-size: 20px;\r\n        padding: .300rem .32rem;\r\n    }\r\n    .sebox{\r\n        font-size: 20px;\r\n        padding: .8rem 0.8rem;\r\n    }\r\n    .fas{\r\n        vertical-align: -20%\r\n    }\r\n    .favbut{\r\n        width: 160px;\r\n        height: 35px;\r\n        text-align: center;\r\n        padding: 1px;\r\n        font-size: 20px;\r\n    }\r\n    .wt{\r\n        font-size: 35px;\r\n        text-align: center;\r\n        -webkit-text-emphasis: 2px;\r\n                text-emphasis: 2px;\r\n    }\r\n    .er{\r\n        text-align: center;\r\n        font-size: 13px;\r\n        background-color: red;\r\n    }\r\n    .n{\r\n        font-size: 10px;\r\n    }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .w{\r\n        font-size: 8px;\r\n    }\r\n    .n{\r\n        font-size: 8px;\r\n    }\r\n    .se{\r\n        font-size: 12px;\r\n        padding: .275rem .25rem;\r\n    }\r\n    .sebox{\r\n        font-size: 12px;\r\n        padding: .5rem 0.5rem;\r\n    }\r\n    .fas{\r\n        vertical-align: -15%\r\n    }\r\n    .favbut{\r\n        width: 120px;\r\n        height: 30px;\r\n        text-align: center;\r\n        padding: 1px;\r\n        font-size: 15px;\r\n    }\r\n    .wt{\r\n        font-size: 25px;\r\n        text-align: center;\r\n        -webkit-text-emphasis: 2px;\r\n                text-emphasis: 2px;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/mainweather/weather/weather.component.html":
/*!************************************************************!*\
  !*** ./src/app/mainweather/weather/weather.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"{{data.Backgroundcolor==1?'colorchange':''}}\">\n<div class=\"container\">\n    <br/>\n\t<div class=\"row justify-content-center\">\n                        <div class=\"col-12 col-md-10 col-lg-8\">\n                            <form class=\"card card-sm {{data.Backgroundcolor==1?'colorchange1':''}}\">\n                                <div class=\"card-body row no-gutters align-items-center cardy\">\n                                    <div class=\"col-auto f\">\n                                        <i class=\"fas fa-search\" style=\"font-size:30px;color:indigo\"></i>\n                                    </div>\n                                    <!--end of col-->\n                                    <div class=\"col\">\n                                        <input class=\"form-control form-control-lg form-control-borderless sebox\" type=\"search\"\n                                        required  \n                                        [(ngModel)]=\"city\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Search A City\">\n                                      \n                                      </div>\n                                    <!--end of col-->\n                                    <div class=\"col-auto\">\n                                        <button class=\"btn btn-lg btn-success se\" type=\"submit\" (click)=\"changecity(city)\">Search</button>\n                                    </div>\n                                    <!--end of col-->\n                                </div>\n                            </form>\n                            <div\n                                          [hidden]=\"city!=''\">\n                                          <p class=\"er\">Please Type A City</p>\n                            </div>\n                            <div\n                                          [hidden]=\"checkexpression(city)\">\n                                          <p class=\"er\">Only English letters allowed</p>\n                            </div>\n                          </div>\n                        <!--end of col-->\n                    </div>\n</div>\n<div class=\"container main {{data.Backgroundcolor==1?'colorchange2':''}}\">\n  <form class=\"card card-sm {{data.Backgroundcolor==1?'colorchange2':''}}\" *ngIf=\"current_weather\">\n    <div class=\"card-body {{data.Backgroundcolor==1?'colorchange2':''}}\">\n      <div>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"row\">\n                  <div class=\"col\">\n                      <img src={{logo(current_weather.WeatherIcon)}} height=\"72\" width=\"auto\">\n                  </div>\n                  <div class=\"col\">\n                        <div>\n                            <p class=\"n font-weight-bold\">{{current_weather.LocalizedName}}</p>\n                        </div>\n                        <div>        \n                            <p class=\"n font-weight-bold\">{{current_weather.Temperature.Metric.Value}} {{current_weather.Temperature.Metric.Unit}}</p>\n                        </div>\n                  </div>\n              </div>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"row fav\">\n                <div class=\"col-2\" *ngIf=\"click==1\">\n                    <i class=\"fas fa-sync fa-spin\" style=\"font-size:30px;color:black\"></i>\n                </div>\n                <div class=\"col-2\">\n                    <i class=\"fas fa-heart\" style=\"font-size:30px;color:red\"></i>\n                </div>\n                <div class=\"col-2\">\n                    <button type=\"button\" class=\"btn btn-success favbut\" (click)=\"SendData()\">Add/Remove</button>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"weathertext\">\n        <h1 class=\"wt\">{{current_weather.WeatherText}}</h1>\n      </div>\n      <div class=\"container bottom\" *ngIf=\"AllWeather2.DailyForecasts\">\n        <div class=\"row\">\n          <div class=\"col block\">\n            <p class=\"w\">Sunday</p>\n            <div>\n                <img src={{logo(AllWeather2.DailyForecasts[0].Day.Icon)}}>\n            </div>\n            <div>\n              <p class=\"w\">{{AllWeather2.DailyForecasts[0].Temperature.Maximum.Value}}</p>\n            </div>\n          </div>\n          <div class=\"col block\">\n            <p class=\"w\">Monday</p>\n            <div>\n                <img src={{logo(AllWeather2.DailyForecasts[1].Day.Icon)}}>\n            </div>\n            <div class=\"w\">\n              {{AllWeather2.DailyForecasts[1].Temperature.Maximum.Value}}\n            </div>\n          </div>\n          <div class=\"col block\">\n            <p class=\"w\">Tuesday</p>\n            <div>\n                <img src={{logo(AllWeather2.DailyForecasts[2].Day.Icon)}}>\n            </div>\n            <div class=\"w\">\n              {{AllWeather2.DailyForecasts[2].Temperature.Maximum.Value}}\n            </div>\n          </div>\n          <div class=\"col block\">\n            <p class=\"w\">Wednsday</p>\n            <div>\n                <img src={{logo(AllWeather2.DailyForecasts[3].Day.Icon)}}>\n            </div>\n            <div class=\"w\">\n              {{AllWeather2.DailyForecasts[3].Temperature.Maximum.Value}}\n            </div>\n          </div>\n          <div class=\"col block\">\n            <p class=\"w\">Thursday</p>\n            <div>\n                <img src='{{logo(AllWeather2.DailyForecasts[4].Day.Icon)}}'>\n            </div>\n            <div class=\"w\">\n              {{AllWeather2.DailyForecasts[4].Temperature.Maximum.Value}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/mainweather/weather/weather.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mainweather/weather/weather.component.ts ***!
  \**********************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _weather_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-service.service */ "./src/app/mainweather/weather-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(http, data) {
        this.http = http;
        this.data = data;
        this.i = 0;
        this.myerror = false;
        this.errormessage = '';
        this.expression = true;
        this.click = 0;
        this.number = "215854";
        this.city = "Search A City";
        this.mycity = "tel aviv";
        this.Key = '1';
        this.apikey = "23jANkQtcDxqjGF370sQjvAQsGdCBaDs";
        this.Error = {
            error: {
                Code: 0,
                Message: ''
            }
        };
        this.AllWeather2 = {};
        this.AllWeather1 = [];
        this.current_weather = {
            WeatherText: '',
            Value: 0,
            name: '',
            Key: '',
            LocalizedName: '',
            WeatherIcon: 0,
            AdministrativeArea: {
                ID: '',
                LocalizedName: ''
            },
            Temperature: {
                Imperial: {
                    Unit: '',
                    UnitType: 0,
                    Value: 0
                },
                Metric: {
                    Unit: '',
                    UnitType: 0,
                    Value: 0
                }
            },
            DailyForecasts: {
                Day: {
                    Icon: '',
                    IconPhrase: '',
                },
                Night: {
                    Icon: '',
                    IconPhrase: '',
                },
                Temperature: {
                    Maximum: {
                        Unit: '',
                        Value: 0
                    },
                    Minimum: {
                        Unit: '',
                        Value: 0
                    }
                }
            }
        };
    }
    WeatherComponent.prototype.changecity = function (city) {
        var _this = this;
        this.expression = true;
        if (this.checkexpression(city) != false) {
            this.mycity = city.toLowerCase();
            this.AllWeather1 = [];
            this.GetAutoCompleteSearchData(this.mycity, function () {
                _this.GetOneWeatherData(_this.current_weather.Key, function () {
                    _this.GetWeeklyWeatherData(_this.current_weather.Key, function () {
                    });
                });
            });
        }
        this.expression = false;
    };
    WeatherComponent.prototype.changecity1 = function (city) {
        var _this = this;
        this.expression = true;
        if (this.checkexpression(city) != false) {
            this.mycity = city.toLowerCase();
            this.AllWeather1 = [];
            this.GetAutoCompleteSearchData(this.mycity, function () {
                _this.GetOneWeatherData2(_this.current_weather.Key, function () {
                    _this.GetWeeklyWeatherData(_this.current_weather.Key, function () {
                    });
                });
            });
        }
        this.expression = false;
    };
    WeatherComponent.prototype.checkexpression = function (data) {
        return /^[a-zA-Z^\s]*$/.test(data);
    };
    WeatherComponent.prototype.updateNumber = function (mynumber) {
        this.number = mynumber;
    };
    WeatherComponent.prototype.update = function (data) {
        this.current_weather = data;
    };
    WeatherComponent.prototype.Getinfo = function () {
        var _this = this;
        this.GetOneWeatherData(this.number, function () {
            _this.GetWeeklyWeatherData(_this.number, function () {
            });
        });
    };
    WeatherComponent.prototype.GetWeeklyWeatherData = function (num, next) {
        var _this = this;
        this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + num + '?apikey=' + this.apikey + '&metric=true').subscribe(function (result) {
            _this.AllWeather2 = result;
            next();
        });
    };
    WeatherComponent.prototype.GetWeeklyWeatherData1 = function (num) {
        var _this = this;
        this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + num + '?apikey=' + this.apikey + '&metric=true').subscribe(function (result) {
            _this.AllWeather2 = result;
        }, function (error) { alert("City key Error or Bad Request"); });
    };
    WeatherComponent.prototype.GetOneWeatherData = function (num, next) {
        var _this = this;
        this.http.get('http://dataservice.accuweather.com/currentconditions/v1/' + num + '?apikey=' + this.apikey + '').subscribe(function (result) {
            _this.AllWeather1.push(result);
            _this.current_weather.Temperature = _this.AllWeather1[1][0].Temperature;
            _this.current_weather.WeatherIcon = _this.AllWeather1[1][0].WeatherIcon;
            _this.current_weather.WeatherText = _this.AllWeather1[1][0].WeatherText;
            next();
        }, function (error) { alert("City key Error or Bad Request"); });
    };
    WeatherComponent.prototype.GetOneWeatherData2 = function (num, next) {
        var _this = this;
        //let i = 0;
        this.http.get('http://dataservice.accuweather.com/currentconditions/v1/' + num + '?apikey=' + this.apikey + '').subscribe(function (result) {
            _this.AllWeather1.push(result);
            _this.current_weather.Temperature.Metric.Value = _this.AllWeather1[2][0].Temperature.Metric.Value;
            _this.current_weather.WeatherIcon = _this.AllWeather1[3][0].WeatherIcon;
            _this.current_weather.WeatherText = _this.AllWeather1[2][0].WeatherText;
            next();
        }, function (error) { alert("City key Error or Bad Request"); });
    };
    WeatherComponent.prototype.GetOneWeatherData1 = function (num) {
        var _this = this;
        //let i = 0;
        this.http.get('http://dataservice.accuweather.com/currentconditions/v1/' + num + '?apikey=' + this.apikey + '').subscribe(function (result) {
            _this.AllWeather1.push(result);
            _this.current_weather.Temperature = _this.AllWeather1[1][0].Temperature;
            _this.current_weather.WeatherIcon = _this.AllWeather1[1][0].WeatherIcon;
            _this.current_weather.WeatherText = _this.AllWeather1[1][0].WeatherText;
        }, function (error) { alert("City key Error or Bad Request"); });
    };
    WeatherComponent.prototype.GetAutoCompleteSearchData = function (city, next) {
        var _this = this;
        this.http.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + this.apikey + '&q=' + city).subscribe(function (result) {
            _this.AllWeather1.push(result);
            _this.current_weather.Key = _this.AllWeather1[0][0].Key;
            _this.current_weather.AdministrativeArea = _this.AllWeather1[0][0].AdministrativeArea;
            _this.current_weather.LocalizedName = _this.AllWeather1[0][0].LocalizedName;
            next();
        }, function (error) { alert("City name Error or Bad Request"); });
    };
    WeatherComponent.prototype.GetAutoCompleteSearchData1 = function (city) {
        var _this = this;
        this.http.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + this.apikey + '&q=' + city).subscribe(function (result) {
            _this.AllWeather1.push(result);
            _this.current_weather.Key = _this.AllWeather1[0][0].Key;
            _this.current_weather.AdministrativeArea = _this.AllWeather1[0][0].AdministrativeArea;
            _this.current_weather.LocalizedName = _this.AllWeather1[0][0].LocalizedName;
        }, function (error) { alert("City key Error or Bad Request"); });
    };
    WeatherComponent.prototype.ConvertFileNumbertoString = function (filename) {
        return (/[^.]/.exec(filename));
    };
    WeatherComponent.prototype.logo = function (value) {
        return "assets/" + value + ".png";
    };
    WeatherComponent.prototype.clicked = function () {
        this.click = 1;
    };
    WeatherComponent.prototype.unclicked = function () {
        this.click = 0;
    };
    WeatherComponent.prototype.SendData = function () {
        var _this = this;
        this.clicked();
        setTimeout(function () {
            _this.unclicked();
        }, 500);
        this.data.UpdateAllcities(this.AllWeather1[1][0].Temperature.Metric.Value, this.AllWeather1[1][0].WeatherText, this.AllWeather1[1][0].WeatherIcon, this.AllWeather1[0][0].LocalizedName);
        console.log("Flag= " + this.data.Flag);
        console.log("myname= " + this.data.myname);
        console.log("sentname= " + this.data.sentname);
    };
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.Cityname != null) {
            this.changecity1(this.data.Cityname);
        }
        this.GetAutoCompleteSearchData(this.mycity, function () {
            _this.GetOneWeatherData(_this.number, function () {
                _this.GetWeeklyWeatherData(_this.number, function () {
                });
            });
        });
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/mainweather/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/mainweather/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _weather_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherServiceService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Weather\Weather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map