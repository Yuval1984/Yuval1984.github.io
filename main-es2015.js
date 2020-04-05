(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private/private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business/business.component */ "./src/app/business/business.component.ts");
/* harmony import */ var _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./businessExtra/business-extra/business-extra.component */ "./src/app/businessExtra/business-extra/business-extra.component.ts");
/* harmony import */ var _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privateExtra/private-extra/private-extra.component */ "./src/app/privateExtra/private-extra/private-extra.component.ts");








const routes = [
    { path: '', component: _private_private_component__WEBPACK_IMPORTED_MODULE_2__["PrivateComponent"] },
    { path: 'business', component: _business_business_component__WEBPACK_IMPORTED_MODULE_3__["BusinessComponent"] },
    { path: 'privateExtra', component: _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_5__["PrivateExtraComponent"] },
    { path: 'businessExtra', component: _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_4__["BusinessExtraComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                anchorScrolling: 'enabled',
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        anchorScrolling: 'enabled',
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return [""]; };
const _c1 = function () { return ["privateExtra"]; };
const _c2 = function () { return ["businessExtra"]; };
const _c3 = function () { return ["business"]; };
class AppComponent {
    constructor() {
        this.navButton = 0;
        this.title = 'alaska-systems-site';
        this.showFiller = true;
    }
    changeNav() {
        this.navButton = 1 - this.navButton;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 100, vars: 30, consts: [["dir", "rtl", 1, "navbar", "navbar-expand-sm", "gb-dark", "navbar-Style", 2, "width", "101%"], [1, "row", "container-fluid"], [1, "example-sidenav-content", "col-xs-1", "navButton"], ["type", "button", "mat-button", "", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "font-size", "30px"], [1, "col-2", "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "col", "moto"], [1, "text-Style-Header"], ["aria-hidden", "true", 1, "fa", "fa-thermometer-quarter", 2, "color", "blue"], [1, "col-3", "container-fluid", "mini-Style-Header"], [1, "navbar-nav", "mini-Style-Body"], [1, "nav-item"], ["href", "https://www.facebook.com/profile.php?id=100048382270443", 1, "nav-link", "facebook-Style"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square"], ["href", "tel:0533504818", 1, "nav-link", "phone-Style"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], ["href", "#", 1, "nav-link", "instegram-Style"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "https://api.whatsapp.com/send?phone=+9720533504818&text=\u05E9\u05DC\u05D5\u05DD \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF\\\u05D4\u05EA\u05E7\u05E0\u05D4 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF", 1, "nav-link", "whatsapp-Style"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp"], ["href", "mailto:alaska19000@gmail.com", 1, "nav-link", "envelope-Style"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o"], ["dir", "rtl", 1, "container-fluid", 2, "height", "400px", "position", "absolute", "padding-right", "0px !important", "z-index", "100", "position", "absolute"], ["autosize", "", 1, "example-container", 2, "background-color", "transparent", "border", "none"], ["mode", "side", 1, "example-sidenav", "menu-Style"], ["drawer", ""], [1, "main-Nav"], [1, "menu-Item-Nav"], [1, "top-Nav", 3, "routerLink", "fragment", "click"], [2, "margin-top", "10px"], ["data-toggle", "collapse", "href", "#privateNav", "role", "button", "aria-expanded", "false", "aria-controls", "privateNav", 1, "menu-Item-Nav"], [1, "menu-Item-Up"], ["id", "privateNav", 1, "collapse"], [1, "sub-Menu"], [1, "menu-Item", 2, "font-family", "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", 3, "routerLink", "fragment", "click"], ["data-toggle", "collapse", "href", "#businessNav", "role", "button", "aria-expanded", "false", "aria-controls", "businessNav", 1, "menu-Item-Nav"], ["id", "businessNav", 1, "collapse"], [1, "menu-Item-Nav", 2, "margin-top", "10px"], [1, "row", "footer-Style"], [1, "col"], [1, "container-fluid", 2, "text-align", "center"], [1, "myMoto"], [2, "text-decoration", "underline"], [1, "myMoto", 2, "color", "brown"], [1, "row", 2, "text-align", "center"], ["href", "https://www.facebook.com/yuval.kogan.5", 1, "nav-link", "facebook-Style-Bottom"], ["href", "tel:0508451651", 1, "nav-link", "phone-Style-Bottom"], ["href", "https://api.whatsapp.com/send?phone=+972508451651&text=\u05E9\u05DC\u05D5\u05DD \u05D9\u05D5\u05D1\u05DC, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8", 1, "nav-link", "whatsapp-Style-Bottom"], ["href", "mailto:yuvalkogan84@gmail.com", 1, "nav-link", "envelope-Style-Bottom"], [1, "col-1", "arrow-Style"], [3, "routerLink", "fragment"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", "arrow-Style-Font"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); _r84.toggle(); return ctx.changeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u05D0\u05DC\u05E1\u05E7\u05D4 \u05E1\u05D9\u05E1\u05D8\u05DE\u05E1 - \u05DB\u05DC \u05D4\u05DE\u05E2\u05DC\u05D5\u05EA \u05D1\u05E9\u05D1\u05D9\u05DC\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-drawer-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-drawer", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E8\u05D0\u05E9\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05E1\u05E7\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05E1\u05E7\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " \u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u05D8\u05D9\u05E4\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); return _r84.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05E0\u05D1\u05E0\u05D4 \u05E2\"\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u05D9\u05D5\u05D1\u05DC \u05E7\u05D5\u05D2\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h6", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 - 0508451651");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("fragment", "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1))("fragment", "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0))("fragment", "privateGallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0))("fragment", "proffesional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2))("fragment", "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3))("fragment", "businessGallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c3))("fragment", "proffesional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0))("fragment", "tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0))("fragment", "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0))("fragment", "about");
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding-top: 0 ;\r\n    padding-bottom: 0 ;\r\n    margin-right: 0;\r\n    font-size: 1.25rem;\r\n    line-height: inherit;\r\n    white-space: nowrap;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    border-color: blue;\r\n    background-color: black;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 250px; \r\n  height: 69px;\r\n  border-left: 1px solid black;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.top-Nav[_ngcontent-%COMP%]{\r\n  font-size: 20px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.text-Style-Header[_ngcontent-%COMP%]{\r\n    \r\n    height: 69px;\r\n    margin-bottom: 0;\r\n    margin-top: 0;\r\n    padding-top: 14px;\r\n    \r\n    \r\n    text-align: center;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    height: 500px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 26px;\r\n    width: 330px;\r\n    text-align: right;\r\n    background-color: black;\r\n    color: white;\r\n    position: fixed;\r\n    margin-top: 85px;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    visibility: visible;\r\n    height: 545px;\r\n    border-bottom-left-radius: 20px;\r\n  }\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 18px; \r\n    color: white; \r\n    \r\n  }\r\n.menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(61, 43, 226);\r\n    color: white !important;\r\n    text-decoration: none;\r\n  }\r\n.sub-Menu[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 18px; \r\n    color: white; \r\n  }\r\n.sub-Menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: gold;\r\n    text-decoration: none;\r\n  }\r\n.main-Nav[_ngcontent-%COMP%]{\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 30px;\r\n  }\r\n.facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 10px; \r\n    margin-right: 5px;\r\n    margin-top: -10px;\r\n  }\r\n.phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.phone-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: deeppink; \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.instegram-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: rgb(177, 15, 101); \r\n  }\r\n.whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.whatsapp-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: red; \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.envelope-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkred; \r\n  }\r\n\r\n.facebook-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 580px; \r\n    margin-right: 5px;\r\n    margin-top: -30px;\r\n  }\r\n.phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.phone-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.whatsapp-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: red; \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.envelope-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkred; \r\n  }\r\n.mini-Style-Header[_ngcontent-%COMP%]{\r\n    margin-top: -30px;\r\n    height: 99px;\r\n    margin-bottom: -15px;\r\n    margin-left: -46px;\r\n    text-align: right;\r\n    background-color: black;\r\n  }\r\n.mini-Style-Body[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: black;\r\n    margin-top: -15px;\r\n    margin-bottom: -30px;\r\n    height: 85px;\r\n    padding-top: 10px;\r\n    margin-left: 0px;\r\n    width: 110%;\r\n  }\r\n.navButton[_ngcontent-%COMP%]{\r\n    color: white;\r\n    height: 84px;\r\n    \r\n    background-color: black;\r\n    margin-top: -16px;\r\n    margin-bottom: -16px;\r\n    z-index: 1000;\r\n  }\r\n.footer-Style[_ngcontent-%COMP%]{\r\n    height: 300px; \r\n    background-color: rgb(32, 30, 53); \r\n    text-align: center; \r\n    padding-top: 120px; \r\n    color: white; width: 100; \r\n    margin-right: 0px;\r\n  }\r\n.footer-Logo[_ngcontent-%COMP%]{\r\n      height: 100px; \r\n      background-color: rgb(32, 30, 53); \r\n      text-align: center; \r\n  }\r\n.arrow-Style-Font[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: white;\r\n  }\r\n.arrow-Style[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: white;\r\n    margin-right: 0px;\r\n  }\r\n.navbar-Style[_ngcontent-%COMP%]{\r\n    z-index: 1000;\r\n    top: 0;\r\n    position: fixed;\r\n    background-color: white;\r\n    border-bottom: 1px solid black;\r\n    right: 0;\r\n    left: 0;\r\n  }\r\n.myMoto[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n  }\r\n.menu-Style[_ngcontent-%COMP%]{\r\n    background-color: black; \r\n    color: white;\r\n    right: 0 !important;\r\n  }\r\n.menu-Item-Up[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  }\r\n.menu-Item-Nav[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n  }\r\n.menu-Item-Nav[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    text-decoration: none;\r\n    color: gold;\r\n  }\r\n@media only screen and (max-width: 1560px) {\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1500px) {\r\n  .text-Style-Header[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 28%;\r\n    max-width: 28%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -4px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n.text-Style-Header[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\r\n.mini-Style-Header[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 31% ;\r\n  max-width: 31% ;\r\n}\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 36%;\r\n    max-width: 36%;\r\n  }\r\n  .text-Style-Header[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    padding-right: 50px;\r\n }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n  .moto[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 42%;\r\n    max-width: 42%;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n}\r\n.facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n  margin-left: 410px;\r\n}\r\n.navButton[_ngcontent-%COMP%] {\r\n  margin-right: -4px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 52%;\r\n    max-width: 52%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -5px;\r\n}\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 310px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%] {\r\n    margin-right: -7px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 45%;\r\n    max-width: 45%;\r\n    \r\n  }\r\n  .mini-Style-Body[_ngcontent-%COMP%]{\r\n    height: 64px;\r\n    padding-right: 5px;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n    \r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-right: -5px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -14px;\r\n  }\r\n  \r\n  .arrow-Style[_ngcontent-%COMP%]{\r\n    margin-right: 40px !important;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 210px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media only screen and (max-width: 650px){\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-right: -5px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 125px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n    margin-right: -10px;\r\n    margin-bottom: -14px;\r\n  }\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n}\r\n.mini-Style-Header[_ngcontent-%COMP%] {\r\n  height: 83px;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%]{\r\n  margin-top: 65px;\r\n  height: 510px;\r\n  width: 250px;\r\n}\r\n.main-Nav[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n}\r\n.menu-Item-Up[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n}\r\n.menu-Item[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n}\r\n.top-Nav[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n}\r\n}\r\n@media only screen and (max-width: 610px){\r\n  .displayNone[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .navbar-Style[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    height: 85px;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 15px;\r\n    margin-right: 75px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 125px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .navbar-nav[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n            flex-direction: row !important;\r\n  }\r\n}\r\n@media only screen and (max-width: 574px) {\r\n  \r\n  .facebook-Style[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n    margin-top: -14px;\r\n}\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 40px;\r\n    margin-top: -14px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -14px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -14px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -14px;\r\n  }\r\n  .navbar-Style[_ngcontent-%COMP%] {\r\n    height: 61px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%] {\r\n    height: 65px;\r\n    margin-right: -2px;\r\n    margin-bottom: -11px;\r\n}\r\n.mini-Style-Body[_ngcontent-%COMP%] {\r\n  height: 61px;\r\n  padding-right: 5px;\r\n  padding-top: 6px;\r\n}\r\n.mini-Style-Header[_ngcontent-%COMP%] {\r\n  height: 75px;\r\n  margin-top: -69px;\r\n}\r\n.facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n  margin-left: 100px;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%]{\r\n  margin-top: 59px;\r\n}\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .arrow-Style-Font[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 120px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n}\r\n@media only screen and (max-width: 450px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n    margin-left: 15px;\r\n    margin-right: 65px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px;  \r\n    margin-left: 15px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 15px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 15px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 15px;\r\n    margin-top: -10px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 80px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 150px; \r\n    height: 50px;\r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    margin-right: 30px;\r\n  } \r\n  .example-sidenav[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n   \r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 85px;\r\n    font-size: 25px; \r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 25px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 25px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 25px; \r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    margin-right: -30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 130px; \r\n    height: 45px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    height: 78px;\r\n  }\r\n  .mini-Style-Body[_ngcontent-%COMP%] {\r\n    height: 61px;\r\n    padding-right: 5px;\r\n    padding-top: 5px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%] {\r\n    height: 69px;\r\n    margin-bottom: -12px;\r\n    margin-right: 3px;\r\n}\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n    margin-right: 25px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .menu-Style[_ngcontent-%COMP%]{\r\n    width: 370px;\r\n    border-bottom-left-radius: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  \r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    margin-left: 15px;\r\n    margin-right: 5px;\r\n    margin-top: -8px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 15px;\r\n    margin-top: -8px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -8px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -8px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -8px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUdBQXFHO0FBQ3ZHO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QiwyR0FBMkc7SUFDM0csa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBZTtZQUFmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLCtCQUErQjtFQUNqQztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDO0FBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLHFHQUFxRztJQUNyRyxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUVBLDJCQUEyQjtBQUUzQjtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUUsVUFBVTtJQUN4QixpQkFBaUI7RUFDbkI7QUFFQTtNQUNJLGFBQWE7TUFDYixpQ0FBaUM7TUFDakMsa0JBQWtCO0VBQ3RCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLE1BQU07SUFDTixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsT0FBTztFQUNUO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLHFHQUFxRztFQUN2RztBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztFQUNiO0FBQ0Y7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLG1CQUFhO1lBQWIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0FBR0E7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtBQUVBO0VBQ0U7SUFDRSxtQkFBYTtZQUFiLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxtQkFBYTtZQUFiLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFLG1CQUFhO1lBQWIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtBQUN0QjtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7QUFDdEI7QUFDQTtBQUVBLHFEQUFxRDtBQUNyRDtFQUNFO0lBQ0UsbUJBQWE7WUFBYixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7O0tBRUc7RUFDSDtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0QjtBQUNGO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBYztZQUFkLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7Ozs7S0FJRztFQUNIO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtJQUVFLG9CQUFhO0lBQWIsYUFBYTtJQUViLHlDQUE4QjtJQUE5Qix3Q0FBOEI7WUFBOUIsOEJBQThCO0VBQ2hDO0FBQ0Y7QUFFQTtFQUNFOzs7O0tBSUc7RUFDSDtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQkc7RUFDSDtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztBQUNGO0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlCRztFQUNIO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAwIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwIDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubG9nb1N0eWxle1xyXG4gIHdpZHRoOiAyNTBweDsgXHJcbiAgaGVpZ2h0OiA2OXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmRpc3BsYXlOb25le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi50b3AtTmF2e1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRleHQtU3R5bGUtSGVhZGVye1xyXG4gICAgLypib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrOyovXHJcbiAgICBoZWlnaHQ6IDY5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEwcHg7Ki9cclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjZweDtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGhlaWdodDogNTQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICAubWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsqL1xyXG4gIH1cclxuICAubWVudSA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDQzLCAyMjYpO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5zdWItTWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgfVxyXG4gIC5zdWItTWVudSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZ29sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLm1haW4tTmF2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgY29sb3I6IHJnYigxMywgMTc5LCAxMyk7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47IFxyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiBkZWVwcGluazsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxlIDpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNSwgMTAxKTsgXHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmdiKDEzLCAxNzksIDEzKTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGUgOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjsgXHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmVkOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya3JlZDsgXHJcbiAgfVxyXG5cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDU4MHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgY29sb3I6IHJnYigxMywgMTc5LCAxMyk7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya2dyZWVuOyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmdiKDEzLCAxNzksIDEzKTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGUtQm90dG9tIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiByZWQ7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxlLUJvdHRvbSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya3JlZDsgXHJcbiAgfVxyXG5cclxuICAubWluaS1TdHlsZS1IZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIGhlaWdodDogOTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5taW5pLVN0eWxlLUJvZHl7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gIH1cclxuXHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogODRweDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogLTE2cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1TdHlsZXtcclxuICAgIGhlaWdodDogMzAwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMCwgNTMpOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXRvcDogMTIwcHg7IFxyXG4gICAgY29sb3I6IHdoaXRlOyB3aWR0aDogMTAwOyBcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1Mb2dve1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMCwgNTMpOyBcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9XHJcbiAgLmFycm93LVN0eWxlLUZvbnR7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYXJyb3ctU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm5hdmJhci1TdHlsZXtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLm15TW90b3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgLm1lbnUtU3R5bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWVudS1JdGVtLVVwe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5tZW51LUl0ZW0tTmF2e1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubWVudS1JdGVtLU5hdiA6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogZ29sZDtcclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KSB7XHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gIC50ZXh0LVN0eWxlLUhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICB9XHJcbiAgLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gICAgZmxleDogMCAwIDI4JTtcclxuICAgIG1heC13aWR0aDogMjglO1xyXG4gIH1cclxuICAubmF2QnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbi50ZXh0LVN0eWxlLUhlYWRlcntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gIGZsZXg6IDAgMCAzMSUgO1xyXG4gIG1heC13aWR0aDogMzElIDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCAzNiU7XHJcbiAgICBtYXgtd2lkdGg6IDM2JTtcclxuICB9XHJcbiAgLnRleHQtU3R5bGUtSGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW90b3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCA0MiU7XHJcbiAgICBtYXgtd2lkdGg6IDQyJTtcclxuICB9XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG59XHJcbi5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MTBweDtcclxufVxyXG4ubmF2QnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IC00cHg7XHJcbn1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gICAgZmxleDogMCAwIDUyJTtcclxuICAgIG1heC13aWR0aDogNTIlO1xyXG4gIH1cclxuICAubmF2QnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG59XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzEwcHg7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xyXG59XHJcbn0gXHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCA0NSU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgIC8qaGVpZ2h0OiA5NHB4OyovXHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUJvZHl7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5sb2dvU3R5bGV7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIC8qaGVpZ2h0OiA2M3B4OyovXHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogLTE0cHg7XHJcbiAgfVxyXG4gIC8qIC5mb290ZXItU3R5bGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuICB9ICovXHJcbiAgLmFycm93LVN0eWxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpe1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE0cHg7XHJcbiAgfVxyXG4ubG9nb1N0eWxle1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4ubWluaS1TdHlsZS1IZWFkZXIge1xyXG4gIGhlaWdodDogODNweDtcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2e1xyXG4gIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgaGVpZ2h0OiA1MTBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuLm1haW4tTmF2e1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubWVudS1JdGVtLVVwe1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ubWVudS1JdGVte1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4udG9wLU5hdntcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpe1xyXG4gIC5kaXNwbGF5Tm9uZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXZiYXItU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAvKiAubmF2QnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE3cHg7XHJcbiAgfSAqL1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmluc3RlZ3JhbS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzRweCkge1xyXG4gIC8qIC5taW5pLVN0eWxlLUhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfSAqL1xyXG4gIC5mYWNlYm9vay1TdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICB9XHJcbiAgLm5hdmJhci1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b24ge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTExcHg7XHJcbn1cclxuLm1pbmktU3R5bGUtQm9keSB7XHJcbiAgaGVpZ2h0OiA2MXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcbi5taW5pLVN0eWxlLUhlYWRlciB7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIG1hcmdpbi10b3A6IC02OXB4O1xyXG59XHJcbi5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2e1xyXG4gIG1hcmdpbi10b3A6IDU5cHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5hcnJvdy1TdHlsZS1Gb250e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAzM3B4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogMzNweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDMzcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAzM3B4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMzcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMzcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzM3B4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzNweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIH1cclxuICAubmF2QnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIHdpZHRoOiAxNTBweDsgXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9IFxyXG4gIC5leGFtcGxlLXNpZGVuYXZ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLyogLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9ICovIFxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7IFxyXG4gIH1cclxuICAucGhvbmUtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAyNXB4OyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDsgXHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDI1cHg7IFxyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIHdpZHRoOiAxMzBweDsgXHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGhlaWdodDogNzhweDtcclxuICB9XHJcbiAgLm1pbmktU3R5bGUtQm9keSB7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICAubmF2QnV0dG9uIHtcclxuICAgIGhlaWdodDogNjlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5teU1vdG97XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZS1Cb3R0b217XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxlLUJvdHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXHJcbiAgfVxyXG4gIC5tZW51LVN0eWxle1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC8qIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9ICovXHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDsgXHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b217XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4OyBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./private/private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business/business.component */ "./src/app/business/business.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./businessExtra/business-extra/business-extra.component */ "./src/app/businessExtra/business-extra/business-extra.component.ts");
/* harmony import */ var _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privateExtra/private-extra/private-extra.component */ "./src/app/privateExtra/private-extra/private-extra.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _private_private_component__WEBPACK_IMPORTED_MODULE_4__["PrivateComponent"],
        _business_business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"],
        _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_11__["BusinessExtraComponent"],
        _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_12__["PrivateExtraComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _private_private_component__WEBPACK_IMPORTED_MODULE_4__["PrivateComponent"],
                    _business_business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"],
                    _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_11__["BusinessExtraComponent"],
                    _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_12__["PrivateExtraComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/business/business.component.ts":
/*!************************************************!*\
  !*** ./src/app/business/business.component.ts ***!
  \************************************************/
/*! exports provided: BusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessComponent", function() { return BusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function BusinessComponent_div_74_h5_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.sendCardData(ctx_r30.image1, ctx_r30.title1, ctx_r30.body1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BusinessComponent_div_74_h5_11_Template, 3, 0, "h5", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.sendCardData(ctx_r32.image2, ctx_r32.title2, ctx_r32.body2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.sendCardData(ctx_r33.image3, ctx_r33.title3, ctx_r33.body3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.sendCardData(ctx_r34.image4, ctx_r34.title4, ctx_r34.body4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.sendCardData(ctx_r35.image5, ctx_r35.title5, ctx_r35.body5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.sendCardData(ctx_r36.image6, ctx_r36.title6, ctx_r36.body6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.sendCardData(ctx_r37.image7, ctx_r37.title7, ctx_r37.body7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.sendCardData(ctx_r38.image8, ctx_r38.title8, ctx_r38.body8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_74_Template_div_click_106_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.sendCardData(ctx_r39.image9, ctx_r39.title9, ctx_r39.body9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.clean == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.image9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.title9);
} }
function BusinessComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessComponent_div_75_Template_h4_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.changeCardFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05D7\u05D6\u05E8\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r22.cardImageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.cardTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r22.cardBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BusinessComponent_h6_232_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessComponent_h6_240_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessComponent_h6_249_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessComponent_h6_261_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessComponent_h5_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessComponent_a_270_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
const _c1 = function (a0, a1) { return { "whiteColor": a0, "redColor": a1 }; };
const _c2 = function (a0) { return { "btn btn-success": a0 }; };
class BusinessComponent {
    constructor() {
        this.showFiller = false;
        this.events = [];
        this.phoneNumber = "";
        this.reason = "";
        this.sendMAil = 0;
        this.clean = 0;
        this.cardFlag = 0;
        this.cardImageLink = "";
        this.cardTitle = "";
        this.cardBody = "";
        this.title1 = "אוויר נקי";
        this.body1 = " מזגן או מערכת מיזוג אוויר הם בית גידול אהוב מאוד על חיידקים , עובש , בקטריות ופטריות האחראים על תחלואות שונות שלעיתים אין אנו מייחסים אותן למזגן<br/> אסטמה, שיעול כרוני, נזלת כרונית, כאבי ראש, גירוי וגירוד בעיניים ותופעות נוספות עלולות להיות תוצאה של נשימת אוויר ממוזג ומזוהם באופן קבוע<br/>חיטוי מגש הניקוז של המזגן: חלק ניכר מהריחות הרעים במערכת המיזוג מגיע ממגש הניקוז<br/>אזור רטוב זה הנו בית גידול מועדף על חיידקים, בקטריות, פטריות ועובש <br/>מגש הניקוז הנו אזור רטוב במיוחד מאחר ומיים הנוטפים מסוללת המזגן ניקווים בו וזורמים ממנו אל צינור הניקוז<br/> משום כך – כל תכשיר נשטף ממנו במוקדם או במאוחר";
        this.image1 = "../../assets/gallery/clean.jpg";
        this.title2 = "יחידות אוויר צח";
        this.body2 = "החלפת חום יעילה המתבצעת בין האוויר הנפלט מן החלל לבין האוויר הצח המסופק לחלל<br/>מערכת אוורור חשובה וחיונית הכוללת שני מפוחים עוצמתיים (אחד ליניקת אויר מהחלל ושני לאספקת אויר צח לחלל)<br/>מחליף חום בעל הפרדה מלאה בין האוויר הנפלט לאויר המסופק ומסנן חלקיקים אשר מונע את כניסתם לחלל המאוורר<br/>בהתאם לתנאי פנים וחוץ, המערכת תבחר אוטומטית בין מצב החלפת חום או מצב איוורור ישיר";
        this.image2 = "../../assets/gallery/cleanAir.jpg";
        this.title3 = "מפוחי נחשון";
        this.body3 = " יחידה פנימית (מאייד) במערכת מיזוג המבוססת על מים (צ'ילר)<br/>היחידה מורכבת מסוללה, דרכה זורמים מים חמים / קרים ומפוח, אשר מעביר אוויר דרך הסוללה ובכך מבצע את פעולת המיזוג<br/> היחידה יכולה לבוא במספר תצורות וגדלים (גלוי / נסתר, עילי / רצפתי / מיני מרכזי)";
        this.image3 = "../../assets/gallery/Nahshon12.png";
        this.title4 = "יחידות פק'ג";
        this.body4 = " פקג' הינו הכינוי המקובל בתחום ליחידת מיזוג אחודה בהתפשטות ישירה <br/> יחידת “פקג'” כוללת את כל רכיבי מערכת המיזוג בתוך מסגרת אחת, בה נמצא מעגל קירור מושלם (מדחס, מעבה מאייד) ומערכת טיפול באוויר מושלמת (מסננים/ מפוחים)<br/>Package היות וכל הרכיבים “ארוזים” ביחידה אחת התקבע ליחידות אלו השם <br/> ניתן לסווג את יחידת הפקג’ ליעד כללי של אספקת מיזוג אוויר (קירור או חימום) או בהתאם לייעוד ספציפי יותר של טיפול באוויר חוזר או טיפול אוויר צח";
        this.image4 = "../../assets/gallery/package2.jpg";
        this.title5 = "מזגנים מפוצלים";
        this.body5 = " מזגן בו הרכיבים מפוצלים לשני מארזים: מארז אחד לצד הקר, ומארז אחד לצד החם<br> בצד הקר מצויים כפתורי ההפעלה, מקרן הקירור ומאוורר ובצד החם מצויים המדחס, מקרן החימום והמאוורר הנוסף<br/> בין שני המארזים יש צינור כפול המוביל את הגז הקר ומחזיר את החם, כבל חשמלי וכן צינור לניקוז המים שנוצרים מההתעבות בחלק הקר<br/>מזגן זה יכול להיות בעל עוצמה רבה, כאשר גורם הרעש העיקרי נמצא מחוץ למבנה<br/> מזגנים מסוג זה מסוגלים למזג את האוויר גם בשטחים גדולים מאוד כמו קניונים ובנייני משרדים";
        this.image5 = "../../assets/gallery/seperated2.jpg";
        this.title6 = "מפוחי עשן";
        this.body6 = " מפוחי עשן לוקחים על עצמם את המשימה החיונית כל כך של פינוי עשן וחום, כלומר, הוצאה שלהם מחוץ למבנה<br/> מפוחים תעשייתיים אלה יפעלו בכל פעם שהם יזהו נוכחות של עשן בחלל בו הם מוצבים – באמצעות גלאי העשן המהווים חלק מהמערכת הכוללת <br/> ובכך ימנעו מהשריפה להתפשט ולהתפתח למימדי ענק<br/>המפוחים חיוניים בכל סוג של מבנה ציבורי כאשר בלא מעט מקרים יש חובה להתקין מערכת הכוללת אותם כתנאי לאישור הקמת המבנה או לקבלת רישיון עסק<br/> אחת הדוגמאות המובהקות לכך היא חניונים, כאשר לא תוכלו למצוא כיום חניון בישראל שאינו מצויד במפוחי עשן תעשייתיים";
        this.image6 = "../../assets/gallery/ashan2.jpg";
        this.title7 = "VRF";
        this.body7 = "(נפח קירור משתנה - VRF = Variant Refrigerant Flow)<br/>החיבור הוא באמצעות צינורות דקים אשר מייתרים את הצורך להנמיך תקרות או להתקין תעלות קירור<br/>המערכת רגישה לשינויים ומגיבה באופן רציף, כך שנוצרת רמת טמפרטורה אחידה ויציבה<br/>המדחס עצמו עובד בטכנולוגית 'אינוורטר', שזה אומר מדחס בתפוקות משתנות";
        this.image7 = "../../assets/gallery/VRF.jpg";
        this.title8 = "Water source";
        this.body8 = " מתקן קירור מים - מגדל הקירור, קולט את החום מהמים ומשחרר אותו אל מחוץ למערכת באמצעות חילופי אנרגיה<br/> אוויר מאולץ זורם דרך חומר מילוי - וכאשר הוא פוגש רסיסי מים, המים מתאיידים ואנרגית האיוד נלקחת מהאנרגיה של מי הקירור<br/> בפועל התהליך גורם להורדת הטמפרטורה של מי הקירור<br/> מכאן נובע שיעילותו של מגדל הקירור משתנה בהתאם לתנאי החוץ של האוויר והסביבה";
        this.image8 = "../../assets/gallery/waterSource.gif";
        this.title9 = "מזגנים מרכזיים";
        this.body9 = "    ייחודו של מזגן מיני מרכזי הוא בכך שזו מערכת עם מנוע (מעבה) אחד בלבד אשר מזרימה אוויר לכל הבית דרך צנרת ייעודית<br/>במקום לפזר מזגנים רבים מחוץ לקירות הבית, יש רק יחידה אחת<br>במידה והמערכת מצוידת בטכנולוגיית אינוורטר, היא מסוגלת להתאים את התפוקה לעומס החום בכל חדר, ובכך חוסכת חשמל";
        this.image9 = "../../assets/gallery/center.jpg";
    }
    sendMeMail() {
        this.sendMAil = 1;
    }
    sendCardData(imageLink, Title, Body) {
        this.cardTitle = Title;
        this.cardBody = Body;
        this.cardImageLink = imageLink;
        this.cardFlag = 1;
    }
    changeCardFlag() {
        this.cardFlag = 1 - this.cardFlag;
    }
    expendClean() {
        this.clean = 1 - this.clean;
        return '#clean';
    }
    ngOnInit() {
    }
}
BusinessComponent.ɵfac = function BusinessComponent_Factory(t) { return new (t || BusinessComponent)(); };
BusinessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusinessComponent, selectors: [["app-business"]], decls: 288, vars: 50, consts: [[1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], ["id", "about", 1, "aboutS", 2, "width", "100%"], ["src", "../../assets/gallery/AboutNew1.jpg", 1, "about-Style"], [1, "showAbout"], [1, "container-fluid", "top-Text"], [1, "about-Text"], [1, "about-Sub-Text"], ["dir", "rtl"], ["id", "businessGallery", 2, "margin-bottom", "50px", "text-align", "center"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-briefcase", 2, "color", "brown"], ["id", "gallery", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "row", "carousel", "slide", "carousel-Style"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], ["data-target", "#gallery", "data-slide-to", "4"], ["data-target", "#gallery", "data-slide-to", "5"], ["data-target", "#gallery", "data-slide-to", "6"], ["data-target", "#gallery", "data-slide-to", "7"], ["data-target", "#gallery", "data-slide-to", "8"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/gallery/Business/work1.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], [1, "carousel-item"], ["src", "../../assets/gallery/Business/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work3.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work4.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work5.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work6.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work7.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work8.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work9.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], ["class", "cards-Static", "id", "cards", 4, "ngIf"], ["class", "card", "style", "border-bottom: 5px solid white;", 4, "ngIf"], ["id", "movingCards", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "card-Carousel"], ["data-target", "#movingCards", "data-slide-to", "0", 1, "active"], ["data-target", "#movingCards", "data-slide-to", "1"], ["data-target", "#movingCards", "data-slide-to", "2"], ["data-target", "#movingCards", "data-slide-to", "3"], ["data-target", "#movingCards", "data-slide-to", "4"], ["data-target", "#movingCards", "data-slide-to", "5"], ["data-target", "#movingCards", "data-slide-to", "6"], ["data-target", "#movingCards", "data-slide-to", "7"], ["data-target", "#movingCards", "data-slide-to", "8"], [1, "carousel-inner", "movingCards-Inner"], [1, "card"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-body", "grandient"], [1, "card-title", 2, "text-align", "center"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/Nahshon12.png", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["href", "#movingCards", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#movingCards", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "tips", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [2, "text-align", "center", "color", "white", "margin-top", "20px"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", 2, "color", "white"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"], ["class", "btn btn-secondary", "style", "float: right; box-shadow: 0px -4px 5px 1px black; cursor: no-drop;", "type", "submit", 4, "ngIf"], [2, "color", "white"], [1, "container-fluid"], ["src", "../../assets/gallery/LogoBrand.png", "alt", "...", 1, "logoBrand"], ["src", "../../assets/gallery/LogoBrand2.png", "alt", "...", 1, "logoBrand2"], [1, "logo-Text"], [1, "logo-Sub-Text"], ["id", "cards", 1, "cards-Static"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px", 3, "click"], ["alt", "...", 1, "card-img-top", 2, "height", "250px", 3, "src"], [1, "grandient", 2, "height", "116px"], ["data-toggle", "collapse", "href", "#clean", "role", "button", "aria-expanded", "false", "aria-controls", "clean", 2, "text-decoration", "none"], ["style", "color: white; margin-left: 10px;", 4, "ngIf"], [1, "grandient"], ["data-toggle", "collapse", "href", "#tzah", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [2, "color", "white", "margin-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], [1, "card", "card-Style", 3, "click"], ["data-toggle", "collapse", "href", "#nahshon", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-group", "margin-top-10", 2, "margin-top", "30px"], ["data-toggle", "collapse", "href", "#package", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#split", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#smoke", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-group", 2, "margin-bottom", "100px", "margin-top", "30px"], ["data-toggle", "collapse", "href", "#vrf", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#water", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#center", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card", 2, "border-bottom", "5px solid white"], ["alt", "...", 1, "card-img-top", 2, "height", "700px", 3, "src"], [2, "text-align", "center"], [1, "card-body", 2, "text-align", "right", "font-size", "20px", "height", "450px", 3, "innerHTML"], [2, "text-align", "center", "cursor", "pointer"], [2, "margin-bottom", "20px", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", "cursor", "no-drop"]], template: function BusinessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 - \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u05D7\u05D1\u05E8\u05EA\u05E0\u05D5 \u05DE\u05D1\u05E1\u05E1\u05EA \u05D0\u05EA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E6\u05D5\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D1\u05E2\u05DC \u05D9\u05D3\u05E2 \u05E8\u05D1 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05D0\u05E8\u05E5. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u05DB\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05DE\u05E0\u05D5\u05D4\u05DC \u05E2\"\u05D9 \u05DE\u05E2\u05E8\u05DA \u05DE\u05D5\u05D1\u05D9\u05DC \u05E9\u05DC \u05D9\u05D5\u05E2\u05E5 \u05DE\u05D9\u05D6\u05D5\u05D2, \u05DE\u05E0\u05D4\u05DC \u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8\u05D9\u05DD \u05D5\u05DE\u05EA\u05E7\u05D9\u05E0\u05D9\u05DD \u05DE\u05E0\u05D5\u05E1\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D6\u05D5\u05DB\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D4\u05D9\u05E8 \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D4\u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u05D0\u05E0\u05D5 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D9\u05DD \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05D5\u05EA \u05E2\u05DC \u05D4\u05EA\u05D9\u05D9\u05E2\u05DC\u05D5\u05EA \u05D0\u05E0\u05E8\u05D2\u05D8\u05D9\u05EA \u05D5\u05D7\u05D9\u05E1\u05DB\u05D5\u05DF \u05D1\u05D7\u05E9\u05DE\u05DC \u05EA\u05D5\u05DA \u05DE\u05EA\u05DF \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E9\u05DE\u05D9\u05E8\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05D9\u05D5\u05E6\u05D0\u05EA \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05EA\u05DB\u05D5\u05E4\u05D5\u05EA \u05DC\u05D4\u05E9\u05EA\u05DC\u05DE\u05D5\u05D9\u05D5\u05EA \u05D1\u05DB\u05DC \u05D4\u05E0\u05D5\u05D2\u05E2 \u05DC\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D7\u05D3\u05E9\u05D5\u05EA \u05D1\u05EA\u05D7\u05D5\u05DD \u05D5\u05DE\u05E1\u05E4\u05E7\u05EA \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D8\u05D5\u05D1 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DC\u05DB\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, BusinessComponent_div_74_Template, 119, 19, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, BusinessComponent_div_75_Template, 12, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "VRF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Water source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "li", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "li", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h3", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "b", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_230_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](232, BusinessComponent_h6_232_Template, 2, 0, "h6", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "b", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_238_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](240, BusinessComponent_h6_240_Template, 2, 0, "h6", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "b", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_247_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, BusinessComponent_h6_249_Template, 2, 0, "h6", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_253_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "b", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_259_listener($event) { return ctx.cellNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](261, BusinessComponent_h6_261_Template, 2, 0, "h6", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "textarea", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_textarea_ngModelChange_266_listener($event) { return ctx.reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, BusinessComponent_h5_269_Template, 2, 0, "h5", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](270, BusinessComponent_a_270_Template, 3, 0, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA : 053-3504818 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " \u05DE\u05E9\u05E8\u05D3 : 077-9180254 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " 053-4322804 : \u05D0\u05D1\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " 053-3505931 : \u05D0\u05D1\u05D9\u05D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " alaska19000@gmail.com : \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "h6", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DC\u05E8\u05D1\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05D4\u05E0\"\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "h6", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "( \u05D9\u05E9 \u05DC\u05D4\u05D3\u05D2\u05D9\u05E9 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05E6\u05D2\u05D9\u05DD \u05D7\u05D1\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E6\u05D5\u05E8\u05D4 \u05E9\u05D4\u05D9\u05D0 )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFlag == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFlag == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c1, ctx.lastName, !ctx.lastName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c1, ctx.firstName, !ctx.firstName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](36, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](39, _c1, ctx.city, !ctx.city));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](42, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](45, _c1, ctx.cellNumber, !ctx.cellNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName || !ctx.lastName || !ctx.city || !ctx.cellNumber);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n  background-size: contain; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  height: 750px !important; \r\n  width: 100% !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n.about-Text[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\r\n.about-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  text-align: right;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  display: none;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: none;\r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-size: 16px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: auto; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.aboutS1[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-right: -20px;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n.cards-Static[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-Carousel[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-bottom: 5px;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  padding-left: 20px; \r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  padding-right: 31px;\r\n  padding-left: 31px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important;  \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%]{\r\n  height: 550px !important;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  \r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  \r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 500px;\r\n}\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  \r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 550px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 900px;\r\n  \r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 750px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .about-Style[_ngcontent-%COMP%] {\r\n    margin-top: -29px;\r\n  }\r\n  .cards-Static[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n   .card-Carousel[_ngcontent-%COMP%]{\r\n    display: block;\r\n    \r\n  } \r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  height: 700px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  display: none;\r\n }\r\n .logoBrand2[_ngcontent-%COMP%]{\r\n   display: block;\r\n }\r\n}\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    \r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  \r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  \r\n  padding-right: 45px;\r\n  padding-left: 45px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 400px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}\r\n\r\n\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MvYnVzaW5lc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7Ozs7OztHQU1HO0FBQ0g7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNENBQXVEO0FBQ3pEO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtHQUNkLFlBQVk7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUdBQXFHO0FBQ3ZHO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFHQUFxRztBQUN2RztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7Ozs7O0dBS0c7QUFDSDtFQUNFLHVGQUFnRTtFQUFoRSxnRUFBZ0U7RUFDaEUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0Q0FBd0Q7QUFDMUQ7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7O0FBRUE7QUFHQTtFQUNFOztLQUVHO0FBQ0w7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7O0FBRUE7O0lBRUk7Q0FDSDtFQUNDLGFBQWE7QUFDZjtBQUNBO0FBRUEsbURBQW1EO0FBQ25EO0VBQ0U7O01BRUk7R0FDSDtJQUNDLGFBQWE7R0FDZDtHQUNBO0lBQ0MsYUFBYTtFQUNmO0VBQ0E7SUFDRSx3QkFBd0I7QUFDNUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0FBRUE7RUFDRTs7TUFFSTtHQUNIO0lBQ0Msd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFFRjtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2I7MkJBQ3lCO0FBQzNCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZDt3QkFDc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7O0dBR0c7QUFDSDs7O0dBR0c7QUFDSDs7O0dBR0c7QUFDSDtBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7RUFDZjtHQUNDO0lBQ0MsY0FBYztJQUNkOzBCQUNzQjtFQUN4QjtFQUNBO0lBQ0UsYUFBYTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7Q0FDZDtDQUNBO0dBQ0UsY0FBYztDQUNoQjtBQUNEO0FBRUEsb0VBQW9FO0FBQ3BFO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0dBQ2xCO0dBQ0E7S0FDRSxjQUFjO0dBQ2hCO0dBQ0E7SUFDQyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFFQTtFQUNFOztNQUVJO0dBQ0g7S0FDRSxlQUFlO0dBQ2pCO0dBQ0E7SUFDQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtLQUNkLFlBQVk7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7R0FFRztBQUNIOztJQUVJO0FBQ0o7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0FBRUE7RUFDRTtJQUNFLGFBQWE7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEOzs7OztHQUtHO0FBQ0g7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0FBQ0E7O09BRU87QUFDUDs7Ozs7R0FLRztBQUNIO0FBRUE7RUFDRTtNQUNJLGFBQWE7TUFDYixnQkFBZ0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7TUFDSSxZQUFZO01BQ1osZ0JBQWdCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzcy9idXNpbmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4ucGljLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogNzUwcHggIWltcG9ydGFudDsgXHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmFib3V0LVRleHR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmFib3V0LVN1Yi1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udG9wLVRleHR7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3dBYm91dHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIC50aXAtU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IFxyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59ICovXHJcbi5sb2dvQnJhbmR7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubG9nb0JyYW5kMntcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvZ28tVGV4dHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmlubmVyLVRpcHtcclxudGV4dC1hbGlnbjogY2VudGVyOyBcclxudGV4dC1hbGlnbjogY2VudGVyOyBcclxuaGVpZ2h0OiA3MDBweDsgXHJcbnBhZGRpbmctdG9wOiAxMiU7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4udGlwLVN0eWxle1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcDMuanBnKTtcclxufVxyXG4uYWJvdXQtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4OyBcclxuICBoZWlnaHQ6IGF1dG87IFxyXG4gIC8qIC8vYmFja2dyb3VuZC1jb2xvcjogIzJjNWFjMzsgICovXHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5waWMxe1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzAwcHg7ICBcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbn1cclxuLmFib3V0UzF7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaW1nIDpob3ZlcntcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkcy1TdGF0aWN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNhcmQtQ2Fyb3VzZWx7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0IDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG4uZm9ybS1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMyUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRpcC1JbWFnZXtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ud2hpdGVDb2xvcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJlZENvbG9ye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmV4cGVydC1Nb3RvLUJvZHl7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5leHBlcnQtTW90by1IZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyBcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IFxyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4uY2Fyb3VzZWwtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcCA6LTI0cHg7IFxyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNoZWNrLUNpcmNsZS1Nb3Rve1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi50ZXh0LVJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5hYm91dC1IZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDI1JTtcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uYWJvdXQtQm9keXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgcGFkZGluZy1yaWdodDogNDUlOyBcclxuICBtYXJnaW4tdG9wOiAxNTBweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uZGlzcGxheU5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiAuYm9keVRleHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJvZHlUZXh0IDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbn0gKi9cclxuLmdyYW5kaWVudHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmYzNDUzIDAlLCAjNGM1NThiIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaW1nMntcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy8vYmFja2dyb3VuZC10aXAzLmpwZyk7XHJcbn1cclxuLnBpYy1BQ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uSGVhZGVyLUZvcm0tU3R5bGV7XHJcbiAgaGVpZ2h0OiA2NTBweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyOWJhYzsgXHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlOyBcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzFweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMxcHg7XHJcbn1cclxuLmNhcmQtU3R5bGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDsgIFxyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4ubWFyZ2luLVRvcC0xMHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubW92aW5nQ2FyZHMtSW5uZXJ7XHJcbiAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NjBweCkge1xyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgLyogLmFib3V0LVN0eWxle1xyXG4gICBoZWlnaHQ6IDcwMHB4O1xyXG4gIH0gKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAuaW5uZXItVGlwe1xyXG4gICAgaGVpZ2h0OiA1NTVweDsgXHJcbiAgfVxyXG4gIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4vKiAuYWJvdXQtU3R5bGV7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuIH0gKi9cclxuIC5pbm5lci1UaXB7XHJcbiAgaGVpZ2h0OiA1NTBweDsgXHJcbn1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLyogLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA1ODBweDtcclxuICAgfSAqL1xyXG4gICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgfVxyXG4gICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICB9XHJcbiAgLnBpYy1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbn0gXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgLyogLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgfSAqL1xyXG4gICAuaW5uZXItVGlwe1xyXG4gICAgaGVpZ2h0OiAzNzBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLWJvZHl7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuLnBpYy1BQ3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb2wtbWQtOHtcclxuICBmbGV4OiAwIDAgMTAwLjA2NjY2NyU7XHJcbiAgbWF4LXdpZHRoOiAxMDAuMDY2NjY3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uSGVhZGVyLUZvcm0tU3R5bGV7XHJcbiAgaGVpZ2h0OiA5MDBweDtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IC0yMnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgKi9cclxufVxyXG4uaW5uZXItVGlwe1xyXG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDsgXHJcbn1cclxuLnRpcC1JbWFnZSB7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBoZWlnaHQ6IDc1MHB4O1xyXG59XHJcbi5hYm91dFN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4OyAqL1xyXG59XHJcbi5sb2dvLVRleHR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5sb2dvLVN1Yi1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4vKiAuY2Fyb3VzZWwtU3R5bGUge1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufSAqL1xyXG4vKiAuY2FyZHMtU3RhdGljIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICovXHJcbi8qIC50aXAtU3R5bGUge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgLmFib3V0LVN0eWxlIHtcclxuICAgIG1hcmdpbi10b3A6IC0yOXB4O1xyXG4gIH1cclxuICAuY2FyZHMtU3RhdGlje1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgIC5jYXJkLUNhcm91c2Vse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjJweDsgKi9cclxuICB9IFxyXG4gIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5tb3ZpbmdDYXJkcy1Jbm5lciB7XHJcbiAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbn1cclxuLmxvZ29CcmFuZHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4gLmxvZ29CcmFuZDJ7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIC8qIGhlaWdodDogNDgwcHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcclxuICAgfVxyXG4gICAuZGlzcGxheU5vbmV7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxuICAgLmxvZ29TdHlsZXtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4udGlwLUltYWdle1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc0cHgpe1xyXG4uY2FyZC1TdHlsZXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4ubWFyZ2luLVRvcC0xMHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAvKiAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICB9ICovXHJcbiAgIC5leHBlcnQtTW90by1Cb2R5e1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgfVxyXG4gICAuZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuY2hlY2stQ2lyY2xlLU1vdG97XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICAudGlwLUltYWdlIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbiAgaGVpZ2h0OiAzMTVweCAhaW1wb3J0YW50OyBcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcC1UZXh0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zaG93QWJvdXR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyogLmNhcmR7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbn0gKi9cclxuLyogLm1vdmluZ0NhcmRzIHtcclxuICBoZWlnaHQ6IDU1MHB4ICFpbXBvcnRhbnQ7XHJcbiB9ICovXHJcbi5jYXJkLWJvZHl7XHJcbiAgLyogaGVpZ2h0OiA0MDBweDsgKi9cclxuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDVweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbn1cclxuLmFib3V0LVN0eWxle1xyXG4gIG1hcmdpbi10b3A6IC0yN3B4O1xyXG4gfVxyXG4vKiAuY2Fyb3VzZWwge1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn1cclxuLmNhcm91c2VsLVN0eWxle1xyXG5tYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICovXHJcbi5waWMtU3R5bGUge1xyXG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubG9nb1N0eWxle1xyXG5oZWlnaHQ6IDE3MHB4O1xyXG5wYWRkaW5nLXRvcDogNzRweDtcclxucGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi8qIC5hYm91dFN7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufSAgICAgKi9cclxuLyogLm1vdmluZ0NhcmRzLUlubmVyIHtcclxuICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxufSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcclxuICAudGlwLUltYWdlIHtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAudGlwLUltYWdlIHtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-business',
                templateUrl: './business.component.html',
                styleUrls: ['./business.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/businessExtra/business-extra/business-extra.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/businessExtra/business-extra/business-extra.component.ts ***!
  \**************************************************************************/
/*! exports provided: BusinessExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessExtraComponent", function() { return BusinessExtraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function BusinessExtraComponent_div_71_h5_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessExtraComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.sendCardData(ctx_r51.image1, ctx_r51.title1, ctx_r51.body1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BusinessExtraComponent_div_71_h5_11_Template, 3, 0, "h5", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.sendCardData(ctx_r53.image2, ctx_r53.title2, ctx_r53.body2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.sendCardData(ctx_r54.image3, ctx_r54.title3, ctx_r54.body3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.sendCardData(ctx_r55.image4, ctx_r55.title4, ctx_r55.body4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.sendCardData(ctx_r56.image5, ctx_r56.title5, ctx_r56.body5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.sendCardData(ctx_r57.image6, ctx_r57.title6, ctx_r57.body6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.sendCardData(ctx_r58.image7, ctx_r58.title7, ctx_r58.body7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.sendCardData(ctx_r59.image8, ctx_r59.title8, ctx_r59.body8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_71_Template_div_click_106_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.sendCardData(ctx_r60.image9, ctx_r60.title9, ctx_r60.body9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h5", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.clean == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r42.image9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.title9);
} }
function BusinessExtraComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessExtraComponent_div_72_Template_h4_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.changeCardFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05D7\u05D6\u05E8\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r43.cardImageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r43.cardTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r43.cardBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function BusinessExtraComponent_h6_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessExtraComponent_h6_237_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessExtraComponent_h6_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessExtraComponent_h6_258_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessExtraComponent_h5_266_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BusinessExtraComponent_a_267_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
const _c1 = function (a0, a1) { return { "whiteColor": a0, "redColor": a1 }; };
const _c2 = function (a0) { return { "btn btn-success": a0 }; };
class BusinessExtraComponent {
    constructor() {
        this.showFiller = false;
        this.events = [];
        this.phoneNumber = "";
        this.reason = "";
        this.sendMAil = 0;
        this.clean = 0;
        this.cardFlag = 0;
        this.cardImageLink = "";
        this.cardTitle = "";
        this.cardBody = "";
        this.title1 = "אוויר נקי";
        this.body1 = " מזגן או מערכת מיזוג אוויר הם בית גידול אהוב מאוד על חיידקים , עובש , בקטריות ופטריות האחראים על תחלואות שונות שלעיתים אין אנו מייחסים אותן למזגן<br/> אסטמה, שיעול כרוני, נזלת כרונית, כאבי ראש, גירוי וגירוד בעיניים ותופעות נוספות עלולות להיות תוצאה של נשימת אוויר ממוזג ומזוהם באופן קבוע<br/>חיטוי מגש הניקוז של המזגן: חלק ניכר מהריחות הרעים במערכת המיזוג מגיע ממגש הניקוז<br/>אזור רטוב זה הנו בית גידול מועדף על חיידקים, בקטריות, פטריות ועובש <br/>מגש הניקוז הנו אזור רטוב במיוחד מאחר ומיים הנוטפים מסוללת המזגן ניקווים בו וזורמים ממנו אל צינור הניקוז<br/> משום כך – כל תכשיר נשטף ממנו במוקדם או במאוחר";
        this.image1 = "../../assets/gallery/clean.jpg";
        this.title2 = "יחידות אוויר צח";
        this.body2 = "החלפת חום יעילה המתבצעת בין האוויר הנפלט מן החלל לבין האוויר הצח המסופק לחלל<br/>מערכת אוורור חשובה וחיונית הכוללת שני מפוחים עוצמתיים (אחד ליניקת אויר מהחלל ושני לאספקת אויר צח לחלל)<br/>מחליף חום בעל הפרדה מלאה בין האוויר הנפלט לאויר המסופק ומסנן חלקיקים אשר מונע את כניסתם לחלל המאוורר<br/>בהתאם לתנאי פנים וחוץ, המערכת תבחר אוטומטית בין מצב החלפת חום או מצב איוורור ישיר";
        this.image2 = "../../assets/gallery/cleanAir.jpg";
        this.title3 = "מפוחי נחשון";
        this.body3 = " יחידה פנימית (מאייד) במערכת מיזוג המבוססת על מים (צ'ילר)<br/>היחידה מורכבת מסוללה, דרכה זורמים מים חמים / קרים ומפוח, אשר מעביר אוויר דרך הסוללה ובכך מבצע את פעולת המיזוג<br/> היחידה יכולה לבוא במספר תצורות וגדלים (גלוי / נסתר, עילי / רצפתי / מיני מרכזי)";
        this.image3 = "../../assets/gallery/Nahshon12.png";
        this.title4 = "יחידות פק'ג";
        this.body4 = " פקג' הינו הכינוי המקובל בתחום ליחידת מיזוג אחודה בהתפשטות ישירה <br/> יחידת “פקג'” כוללת את כל רכיבי מערכת המיזוג בתוך מסגרת אחת, בה נמצא מעגל קירור מושלם (מדחס, מעבה מאייד) ומערכת טיפול באוויר מושלמת (מסננים/ מפוחים)<br/>Package היות וכל הרכיבים “ארוזים” ביחידה אחת התקבע ליחידות אלו השם <br/> ניתן לסווג את יחידת הפקג’ ליעד כללי של אספקת מיזוג אוויר (קירור או חימום) או בהתאם לייעוד ספציפי יותר של טיפול באוויר חוזר או טיפול אוויר צח";
        this.image4 = "../../assets/gallery/package2.jpg";
        this.title5 = "מזגנים מפוצלים";
        this.body5 = " מזגן בו הרכיבים מפוצלים לשני מארזים: מארז אחד לצד הקר, ומארז אחד לצד החם<br> בצד הקר מצויים כפתורי ההפעלה, מקרן הקירור ומאוורר ובצד החם מצויים המדחס, מקרן החימום והמאוורר הנוסף<br/> בין שני המארזים יש צינור כפול המוביל את הגז הקר ומחזיר את החם, כבל חשמלי וכן צינור לניקוז המים שנוצרים מההתעבות בחלק הקר<br/>מזגן זה יכול להיות בעל עוצמה רבה, כאשר גורם הרעש העיקרי נמצא מחוץ למבנה<br/> מזגנים מסוג זה מסוגלים למזג את האוויר גם בשטחים גדולים מאוד כמו קניונים ובנייני משרדים";
        this.image5 = "../../assets/gallery/seperated2.jpg";
        this.title6 = "מפוחי עשן";
        this.body6 = " מפוחי עשן לוקחים על עצמם את המשימה החיונית כל כך של פינוי עשן וחום, כלומר, הוצאה שלהם מחוץ למבנה<br/> מפוחים תעשייתיים אלה יפעלו בכל פעם שהם יזהו נוכחות של עשן בחלל בו הם מוצבים – באמצעות גלאי העשן המהווים חלק מהמערכת הכוללת <br/> ובכך ימנעו מהשריפה להתפשט ולהתפתח למימדי ענק<br/>המפוחים חיוניים בכל סוג של מבנה ציבורי כאשר בלא מעט מקרים יש חובה להתקין מערכת הכוללת אותם כתנאי לאישור הקמת המבנה או לקבלת רישיון עסק<br/> אחת הדוגמאות המובהקות לכך היא חניונים, כאשר לא תוכלו למצוא כיום חניון בישראל שאינו מצויד במפוחי עשן תעשייתיים";
        this.image6 = "../../assets/gallery/ashan2.jpg";
        this.title7 = "VRF";
        this.body7 = "(נפח קירור משתנה - VRF = Variant Refrigerant Flow)<br/>החיבור הוא באמצעות צינורות דקים אשר מייתרים את הצורך להנמיך תקרות או להתקין תעלות קירור<br/>המערכת רגישה לשינויים ומגיבה באופן רציף, כך שנוצרת רמת טמפרטורה אחידה ויציבה<br/>המדחס עצמו עובד בטכנולוגית 'אינוורטר', שזה אומר מדחס בתפוקות משתנות";
        this.image7 = "../../assets/gallery/VRF.jpg";
        this.title8 = "Water source";
        this.body8 = " מתקן קירור מים - מגדל הקירור, קולט את החום מהמים ומשחרר אותו אל מחוץ למערכת באמצעות חילופי אנרגיה<br/> אוויר מאולץ זורם דרך חומר מילוי - וכאשר הוא פוגש רסיסי מים, המים מתאיידים ואנרגית האיוד נלקחת מהאנרגיה של מי הקירור<br/> בפועל התהליך גורם להורדת הטמפרטורה של מי הקירור<br/> מכאן נובע שיעילותו של מגדל הקירור משתנה בהתאם לתנאי החוץ של האוויר והסביבה";
        this.image8 = "../../assets/gallery/waterSource.gif";
        this.title9 = "מזגנים מרכזיים";
        this.body9 = "    ייחודו של מזגן מיני מרכזי הוא בכך שזו מערכת עם מנוע (מעבה) אחד בלבד אשר מזרימה אוויר לכל הבית דרך צנרת ייעודית<br/>במקום לפזר מזגנים רבים מחוץ לקירות הבית, יש רק יחידה אחת<br>במידה והמערכת מצוידת בטכנולוגיית אינוורטר, היא מסוגלת להתאים את התפוקה לעומס החום בכל חדר, ובכך חוסכת חשמל";
        this.image9 = "../../assets/gallery/center.jpg";
    }
    sendMeMail() {
        this.sendMAil = 1;
    }
    sendCardData(imageLink, Title, Body) {
        this.cardTitle = Title;
        this.cardBody = Body;
        this.cardImageLink = imageLink;
        this.cardFlag = 1;
    }
    changeCardFlag() {
        this.cardFlag = 1 - this.cardFlag;
    }
    expendClean() {
        this.clean = 1 - this.clean;
        return '#clean';
    }
    ngOnInit() {
    }
}
BusinessExtraComponent.ɵfac = function BusinessExtraComponent_Factory(t) { return new (t || BusinessExtraComponent)(); };
BusinessExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusinessExtraComponent, selectors: [["app-business-extra"]], decls: 285, vars: 50, consts: [["id", "about", 1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "aboutS", 2, "width", "100%"], ["src", "../../../assets/gallery/AboutBusinessNew.jpg", 1, "about-Style"], [1, "showAbout"], [1, "container-fluid", "top-Text"], [1, "about-Text"], [1, "about-Sub-Text"], ["dir", "rtl"], ["id", "privateGallery", 2, "margin-bottom", "50px", "text-align", "center"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-briefcase", 2, "color", "brown"], ["id", "gallery", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "row", "carousel", "slide", "carousel-Style"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], ["data-target", "#gallery", "data-slide-to", "4"], ["data-target", "#gallery", "data-slide-to", "5"], ["data-target", "#gallery", "data-slide-to", "6"], ["data-target", "#gallery", "data-slide-to", "7"], ["data-target", "#gallery", "data-slide-to", "8"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/gallery/Business/work1.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], [1, "carousel-item"], ["src", "../../../assets/gallery/Business/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work3.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work4.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work5.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work6.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work7.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work8.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work9.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], ["class", "cards-Static", "id", "cards", 4, "ngIf"], ["class", "card", "style", "border-bottom: 5px solid white;", 4, "ngIf"], ["id", "movingCards", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "card-Carousel"], ["data-target", "#movingCards", "data-slide-to", "0", 1, "active"], ["data-target", "#movingCards", "data-slide-to", "1"], ["data-target", "#movingCards", "data-slide-to", "2"], ["data-target", "#movingCards", "data-slide-to", "3"], ["data-target", "#movingCards", "data-slide-to", "4"], ["data-target", "#movingCards", "data-slide-to", "5"], ["data-target", "#movingCards", "data-slide-to", "6"], ["data-target", "#movingCards", "data-slide-to", "7"], ["data-target", "#movingCards", "data-slide-to", "8"], [1, "carousel-inner", "movingCards-Inner"], [1, "card"], [1, "img"], ["src", "../../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-body", "grandient"], [1, "card-title", 2, "text-align", "center"], [1, "card-text", "text-Right"], ["src", "../../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../../assets/gallery/Nahshon12.png", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["href", "#movingCards", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#movingCards", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "tips", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [2, "text-align", "center", "color", "white", "margin-top", "20px"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", 2, "color", "white"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"], ["class", "btn btn-secondary", "style", "float: right; box-shadow: 0px -4px 5px 1px black; cursor: no-drop;", "type", "submit", 4, "ngIf"], [2, "color", "white"], [1, "container-fluid"], ["src", "../../assets/gallery/LogoBrand.png", "alt", "...", 1, "logoBrand"], ["src", "../../assets/gallery/LogoBrand2.png", "alt", "...", 1, "logoBrand2"], [1, "logo-Text"], [1, "logo-Sub-Text"], ["id", "cards", 1, "cards-Static"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px", 3, "click"], ["alt", "...", 1, "card-img-top", 2, "height", "250px", 3, "src"], [1, "grandient", 2, "height", "116px"], ["data-toggle", "collapse", "href", "#clean", "role", "button", "aria-expanded", "false", "aria-controls", "clean", 2, "text-decoration", "none"], ["style", "color: white; margin-left: 10px;", 4, "ngIf"], [1, "grandient"], ["data-toggle", "collapse", "href", "#tzah", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [2, "color", "white", "margin-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], [1, "card", "card-Style", 3, "click"], ["data-toggle", "collapse", "href", "#nahshon", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-group", "margin-top-10", 2, "margin-top", "30px"], ["data-toggle", "collapse", "href", "#package", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#split", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#smoke", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-group", 2, "margin-bottom", "100px", "margin-top", "30px"], ["data-toggle", "collapse", "href", "#vrf", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#water", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#center", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card", 2, "border-bottom", "5px solid white"], ["alt", "...", 1, "card-img-top", 2, "height", "700px", 3, "src"], [2, "text-align", "center"], [1, "card-body", 2, "text-align", "right", "font-size", "20px", "height", "450px", 3, "innerHTML"], [2, "text-align", "center", "cursor", "pointer"], [2, "margin-bottom", "20px", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", "cursor", "no-drop"]], template: function BusinessExtraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05E1\u05E7\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05E1\u05E4\u05E7\u05EA \u05DE\u05D2\u05D5\u05D5\u05DF \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9, \u05DB\u05D2\u05D5\u05DF : \u05DE\u05D1\u05E0\u05D9 \u05E6\u05D9\u05D1\u05D5\u05E8, \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD, \u05D1\u05EA\u05D9 \u05D7\u05D5\u05DC\u05D9\u05DD, \u05D5\u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05EA\u05D9\u05E7\u05D5\u05DF \u05DB\u05DC \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05D9\u05E0\u05D4\u05DF : \u05E4\u05E7\u05D0\u05D2', \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA Water Source, VRF, \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E0\u05D7\u05E9\u05D5\u05DF, \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7, \u05D5\u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D7\u05D3\u05E8\u05D9\u05DD \u05E0\u05E7\u05D9\u05D9\u05DD, \u05D4\u05D7\u05DC\u05E4\u05EA \u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D3\u05D7\u05E1\u05D9\u05DD, \u05D4\u05DE\u05E0\u05D5\u05E2\u05D9\u05DD, \u05D5\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05D1\u05E7\u05E8\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05D9\u05E1\u05E7\u05D9 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05D1\u05D7\u05D5\u05D3\u05E9\u05D9 \u05D4\u05E7\u05D9\u05E5 \u05E2\u05D3 \u05D4\u05E9\u05E2\u05D5\u05EA \u05D4\u05DE\u05D0\u05D5\u05D7\u05E8\u05D5\u05EA \u05E9\u05DC \u05D4\u05D9\u05D5\u05DD, \u05DC\u05E8\u05D1\u05D5\u05EA \u05D9\u05DE\u05D9 \u05E9\u05D9\u05E9\u05D9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, BusinessExtraComponent_div_71_Template, 119, 19, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, BusinessExtraComponent_div_72_Template, 12, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "li", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "VRF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Water source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h5", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "li", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "li", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h3", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "b", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_227_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](229, BusinessExtraComponent_h6_229_Template, 2, 0, "h6", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "b", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_235_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](237, BusinessExtraComponent_h6_237_Template, 2, 0, "h6", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "b", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_244_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, BusinessExtraComponent_h6_246_Template, 2, 0, "h6", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_250_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "b", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_256_listener($event) { return ctx.cellNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](258, BusinessExtraComponent_h6_258_Template, 2, 0, "h6", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "textarea", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_textarea_ngModelChange_263_listener($event) { return ctx.reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](266, BusinessExtraComponent_h5_266_Template, 2, 0, "h5", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](267, BusinessExtraComponent_a_267_Template, 3, 0, "a", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA : 053-3504818 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " \u05DE\u05E9\u05E8\u05D3 : 077-9180254 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " 053-4322804 : \u05D0\u05D1\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " 053-3505931 : \u05D0\u05D1\u05D9\u05D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "h6", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " alaska19000@gmail.com : \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h6", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DC\u05E8\u05D1\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05D4\u05E0\"\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h6", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "( \u05D9\u05E9 \u05DC\u05D4\u05D3\u05D2\u05D9\u05E9 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05E6\u05D2\u05D9\u05DD \u05D7\u05D1\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E6\u05D5\u05E8\u05D4 \u05E9\u05D4\u05D9\u05D0 )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFlag == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFlag == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c1, ctx.lastName, !ctx.lastName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c1, ctx.firstName, !ctx.firstName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](36, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](39, _c1, ctx.city, !ctx.city));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](42, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](45, _c1, ctx.cellNumber, !ctx.cellNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName || !ctx.lastName || !ctx.city || !ctx.cellNumber);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n  background-size: contain; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  height: 750px !important; \r\n  width: 100% !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n.about-Text[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\r\n.about-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  text-align: right;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  display: none;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: none;\r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-size: 16px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: auto; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n.cards-Static[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-Carousel[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-bottom: 5px;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  padding-left: 20px; \r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  padding-right: 31px;\r\n  padding-left: 31px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important;  \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%]{\r\n  height: 550px !important;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  \r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  \r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 500px;\r\n}\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  \r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 550px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 900px;\r\n  \r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 750px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .about-Style[_ngcontent-%COMP%] {\r\n    margin-top: -29px;\r\n  }\r\n  .cards-Static[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n   .card-Carousel[_ngcontent-%COMP%]{\r\n    display: block;\r\n    \r\n  }\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  height: 700px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  display: none;\r\n }\r\n .logoBrand2[_ngcontent-%COMP%]{\r\n   display: block;\r\n }\r\n}\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    \r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  \r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  \r\n  padding-right: 45px;\r\n  padding-left: 45px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 400px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}\r\n\r\n\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3NFeHRyYS9idXNpbmVzcy1leHRyYS9idXNpbmVzcy1leHRyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7O0dBTUc7QUFDSDtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0Q0FBMEQ7QUFDNUQ7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0dBQ2QsWUFBWTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxR0FBcUc7QUFDdkc7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUdBQXFHO0FBQ3ZHO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7R0FLRztBQUNIO0VBQ0UsdUZBQWdFO0VBQWhFLGdFQUFnRTtFQUNoRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRDQUEwRDtBQUM1RDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTs7QUFFQTtBQUdBO0VBQ0U7O0tBRUc7QUFDTDtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTs7QUFFQTs7SUFFSTtDQUNIO0VBQ0MsYUFBYTtBQUNmO0FBQ0E7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTs7TUFFSTtHQUNIO0lBQ0MsYUFBYTtHQUNkO0dBQ0E7SUFDQyxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHdCQUF3QjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7QUFFQTtFQUNFOztNQUVJO0dBQ0g7SUFDQyx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVGO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYjsyQkFDeUI7QUFDM0I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkO3dCQUNzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOzs7R0FHRztBQUNIOzs7R0FHRztBQUNIOzs7R0FHRztBQUNIO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0dBQ0M7SUFDQyxjQUFjO0lBQ2Q7MEJBQ3NCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0FBQ2pCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtDQUNkO0NBQ0E7R0FDRSxjQUFjO0NBQ2hCO0FBQ0Q7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixpQkFBaUI7R0FDbEI7R0FDQTtLQUNFLGNBQWM7R0FDaEI7R0FDQTtJQUNDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtBQUVBO0VBQ0U7O01BRUk7R0FDSDtLQUNFLGVBQWU7R0FDakI7R0FDQTtJQUNDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0tBQ2QsWUFBWTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBOztHQUVHO0FBQ0g7O0lBRUk7QUFDSjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFFQTtFQUNFO0lBQ0UsYUFBYTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7Ozs7O0dBS0c7QUFDSDtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTs7T0FFTztBQUNQOzs7OztHQUtHO0FBQ0g7QUFFQTtFQUNFO01BQ0ksYUFBYTtNQUNiLGdCQUFnQjtFQUNwQjtBQUNGO0FBRUE7RUFDRTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzRXh0cmEvYnVzaW5lc3MtZXh0cmEvYnVzaW5lc3MtZXh0cmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBpYy1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDc1MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5hYm91dC1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hYm91dC1TdWItVGV4dHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRvcC1UZXh0e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaG93QWJvdXR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiAudGlwLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyBcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSAqL1xyXG4ubG9nb0JyYW5ke1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ29CcmFuZDJ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dvLVRleHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbmhlaWdodDogNzAwcHg7IFxyXG5wYWRkaW5nLXRvcDogMTIlO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnRpcC1TdHlsZXtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC10aXAzLmpwZyk7XHJcbn1cclxuLmFib3V0LVN0eWxle1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNzBweDsgXHJcbiAgaGVpZ2h0OiBhdXRvOyBcclxuICAvKiAvL2JhY2tncm91bmQtY29sb3I6ICMyYzVhYzM7ICAqL1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4ucGljMXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwMHB4OyAgXHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaW1nIDpob3ZlcntcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkcy1TdGF0aWN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNhcmQtQ2Fyb3VzZWx7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0IDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG4uZm9ybS1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMyUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRpcC1JbWFnZXtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ud2hpdGVDb2xvcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJlZENvbG9ye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmV4cGVydC1Nb3RvLUJvZHl7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5leHBlcnQtTW90by1IZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyBcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IFxyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4uY2Fyb3VzZWwtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcCA6LTI0cHg7IFxyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNoZWNrLUNpcmNsZS1Nb3Rve1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi50ZXh0LVJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5hYm91dC1IZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDI1JTtcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uYWJvdXQtQm9keXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgcGFkZGluZy1yaWdodDogNDUlOyBcclxuICBtYXJnaW4tdG9wOiAxNTBweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uZGlzcGxheU5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiAuYm9keVRleHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJvZHlUZXh0IDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbn0gKi9cclxuLmdyYW5kaWVudHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmYzNDUzIDAlLCAjNGM1NThiIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaW1nMntcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcDMuanBnKTtcclxufVxyXG4ucGljLUFDe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5IZWFkZXItRm9ybS1TdHlsZXtcclxuICBoZWlnaHQ6IDY1MHB4OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5YmFjOyBcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzFweDtcclxufVxyXG4uY2FyZC1TdHlsZXtcclxuICBtYXJnaW4tbGVmdDogMzBweCAhaW1wb3J0YW50OyAgXHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5tYXJnaW4tVG9wLTEwe1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5tb3ZpbmdDYXJkcy1Jbm5lcntcclxuICBoZWlnaHQ6IDU1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KSB7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAvKiAuYWJvdXQtU3R5bGV7XHJcbiAgIGhlaWdodDogNzAwcHg7XHJcbiAgfSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5pbm5lci1UaXB7XHJcbiAgICBoZWlnaHQ6IDU1NXB4OyBcclxuICB9XHJcbiAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLWJvZHl7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbi8qIC5hYm91dC1TdHlsZXtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gfSAqL1xyXG4gLmlubmVyLVRpcHtcclxuICBoZWlnaHQ6IDU1MHB4OyBcclxufVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAvKiAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDU4MHB4O1xyXG4gICB9ICovXHJcbiAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICB9XHJcbiAgIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gIH1cclxuICAucGljLVN0eWxlIHtcclxuICAgIGhlaWdodDogNDcwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAvKiAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICB9ICovXHJcbiAgIC5pbm5lci1UaXB7XHJcbiAgICBoZWlnaHQ6IDM3MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcbiAgLmNhcmQtYm9keXtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4ucGljLUFDe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNvbC1tZC04e1xyXG4gIGZsZXg6IDAgMCAxMDAuMDY2NjY3JTtcclxuICBtYXgtd2lkdGg6IDEwMC4wNjY2NjclO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5IZWFkZXItRm9ybS1TdHlsZXtcclxuICBoZWlnaHQ6IDkwMHB4O1xyXG4gIC8qIG1hcmdpbi1yaWdodDogLTIycHggIWltcG9ydGFudDtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50OyAqL1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50OyBcclxufVxyXG4udGlwLUltYWdlIHtcclxuICBoZWlnaHQ6IDE1NXB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogNzUwcHg7XHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7ICovXHJcbn1cclxuLmxvZ28tVGV4dHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmxvZ28tU3ViLVRleHR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi8qIC5jYXJvdXNlbC1TdHlsZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIC5jYXJkcy1TdGF0aWMge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxuLyogLnRpcC1TdHlsZSB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAuYWJvdXQtU3R5bGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTI5cHg7XHJcbiAgfVxyXG4gIC5jYXJkcy1TdGF0aWN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAgLmNhcmQtQ2Fyb3VzZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8qIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMnB4OyAqL1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4ubW92aW5nQ2FyZHMtSW5uZXIge1xyXG4gIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcbi5sb2dvQnJhbmR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5sb2dvQnJhbmQye1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgICAvKiBoZWlnaHQ6IDQ4MHB4OyAqL1xyXG4gICAgbWFyZ2luLXRvcDogLTIzcHg7XHJcbiAgIH1cclxuICAgLmRpc3BsYXlOb25le1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbiAgIC5sb2dvU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnRpcC1JbWFnZXtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NHB4KXtcclxuLmNhcmQtU3R5bGV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLm1hcmdpbi1Ub3AtMTB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgLyogLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA0MzBweDtcclxuICAgfSAqL1xyXG4gICAuZXhwZXJ0LU1vdG8tQm9keXtcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIH1cclxuICAgLmV4cGVydC1Nb3RvLUhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgLmNoZWNrLUNpcmNsZS1Nb3Rve1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcC1UZXh0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zaG93QWJvdXR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmlubmVyLVRpcHtcclxuICBoZWlnaHQ6IDMxNXB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi8qIC5jYXJke1xyXG4gIGhlaWdodDogMHB4O1xyXG59ICovXHJcbi8qIC5tb3ZpbmdDYXJkcyB7XHJcbiAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG4gfSAqL1xyXG4uY2FyZC1ib2R5e1xyXG4gIC8qIGhlaWdodDogNDAwcHg7ICovXHJcbiAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG59XHJcbi5hYm91dC1TdHlsZXtcclxuICBtYXJnaW4tdG9wOiAtMjdweDtcclxuIH1cclxuLyogLmNhcm91c2VsIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59XHJcbi5jYXJvdXNlbC1TdHlsZXtcclxubWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufSAqL1xyXG4ucGljLVN0eWxlIHtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuaGVpZ2h0OiAxNzBweDtcclxucGFkZGluZy10b3A6IDc0cHg7XHJcbnBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4vKiAuYWJvdXRTe1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gICAgICovXHJcbi8qIC5tb3ZpbmdDYXJkcy1Jbm5lciB7XHJcbiAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbn0gKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessExtraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-business-extra',
                templateUrl: './business-extra.component.html',
                styleUrls: ['./business-extra.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/private/private.component.ts":
/*!**********************************************!*\
  !*** ./src/app/private/private.component.ts ***!
  \**********************************************/
/*! exports provided: PrivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateComponent", function() { return PrivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function PrivateComponent_div_59_h5_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sendCardData(ctx_r9.image1, ctx_r9.title1, ctx_r9.body1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PrivateComponent_div_59_h5_10_Template, 3, 0, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.sendCardData(ctx_r11.image2, ctx_r11.title2, ctx_r11.body2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.sendCardData(ctx_r12.image3, ctx_r12.title3, ctx_r12.body3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.sendCardData(ctx_r13.image4, ctx_r13.title4, ctx_r13.body4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.sendCardData(ctx_r14.image5, ctx_r14.title5, ctx_r14.body5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.sendCardData(ctx_r15.image6, ctx_r15.title6, ctx_r15.body6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.sendCardData(ctx_r16.image7, ctx_r16.title7, ctx_r16.body7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.sendCardData(ctx_r17.image8, ctx_r17.title8, ctx_r17.body8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_59_Template_div_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.sendCardData(ctx_r18.image9, ctx_r18.title9, ctx_r18.body9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.clean == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.image9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title9);
} }
function PrivateComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateComponent_div_60_Template_h4_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.changeCardFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05D7\u05D6\u05E8\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.cardImageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cardTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.cardBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PrivateComponent_h6_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_h6_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_h6_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_h6_246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_h5_254_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_a_255_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
const _c1 = function (a0, a1) { return { "whiteColor": a0, "redColor": a1 }; };
const _c2 = function (a0) { return { "btn btn-success": a0 }; };
class PrivateComponent {
    constructor() {
        this.showFiller = false;
        this.events = [];
        this.phoneNumber = "";
        this.reason = "";
        this.sendMAil = 0;
        this.clean = 0;
        this.cardFlag = 0;
        this.cardImageLink = "";
        this.cardTitle = "";
        this.cardBody = "";
        this.title1 = "אוויר נקי";
        this.body1 = " מזגן או מערכת מיזוג אוויר הם בית גידול אהוב מאוד על חיידקים , עובש , בקטריות ופטריות האחראים על תחלואות שונות שלעיתים אין אנו מייחסים אותן למזגן<br/> אסטמה, שיעול כרוני, נזלת כרונית, כאבי ראש, גירוי וגירוד בעיניים ותופעות נוספות עלולות להיות תוצאה של נשימת אוויר ממוזג ומזוהם באופן קבוע<br/>חיטוי מגש הניקוז של המזגן: חלק ניכר מהריחות הרעים במערכת המיזוג מגיע ממגש הניקוז<br/>אזור רטוב זה הנו בית גידול מועדף על חיידקים, בקטריות, פטריות ועובש <br/>מגש הניקוז הנו אזור רטוב במיוחד מאחר ומיים הנוטפים מסוללת המזגן ניקווים בו וזורמים ממנו אל צינור הניקוז<br/> משום כך – כל תכשיר נשטף ממנו במוקדם או במאוחר";
        this.image1 = "../../assets/gallery/clean.jpg";
        this.title2 = "יחידות אוויר צח";
        this.body2 = "החלפת חום יעילה המתבצעת בין האוויר הנפלט מן החלל לבין האוויר הצח המסופק לחלל<br/>מערכת אוורור חשובה וחיונית הכוללת שני מפוחים עוצמתיים (אחד ליניקת אויר מהחלל ושני לאספקת אויר צח לחלל)<br/>מחליף חום בעל הפרדה מלאה בין האוויר הנפלט לאויר המסופק ומסנן חלקיקים אשר מונע את כניסתם לחלל המאוורר<br/>בהתאם לתנאי פנים וחוץ, המערכת תבחר אוטומטית בין מצב החלפת חום או מצב איוורור ישיר";
        this.image2 = "../../assets/gallery/cleanAir.jpg";
        this.title3 = "מפוחי נחשון";
        this.body3 = " יחידה פנימית (מאייד) במערכת מיזוג המבוססת על מים (צ'ילר)<br/>היחידה מורכבת מסוללה, דרכה זורמים מים חמים / קרים ומפוח, אשר מעביר אוויר דרך הסוללה ובכך מבצע את פעולת המיזוג<br/> היחידה יכולה לבוא במספר תצורות וגדלים (גלוי / נסתר, עילי / רצפתי / מיני מרכזי)";
        this.image3 = "../../assets/gallery/Nahshon12.png";
        this.title4 = "יחידות פק'ג";
        this.body4 = " פקג' הינו הכינוי המקובל בתחום ליחידת מיזוג אחודה בהתפשטות ישירה <br/> יחידת “פקג'” כוללת את כל רכיבי מערכת המיזוג בתוך מסגרת אחת, בה נמצא מעגל קירור מושלם (מדחס, מעבה מאייד) ומערכת טיפול באוויר מושלמת (מסננים/ מפוחים)<br/>Package היות וכל הרכיבים “ארוזים” ביחידה אחת התקבע ליחידות אלו השם <br/> ניתן לסווג את יחידת הפקג’ ליעד כללי של אספקת מיזוג אוויר (קירור או חימום) או בהתאם לייעוד ספציפי יותר של טיפול באוויר חוזר או טיפול אוויר צח";
        this.image4 = "../../assets/gallery/package2.jpg";
        this.title5 = "מזגנים מפוצלים";
        this.body5 = " מזגן בו הרכיבים מפוצלים לשני מארזים: מארז אחד לצד הקר, ומארז אחד לצד החם<br> בצד הקר מצויים כפתורי ההפעלה, מקרן הקירור ומאוורר ובצד החם מצויים המדחס, מקרן החימום והמאוורר הנוסף<br/> בין שני המארזים יש צינור כפול המוביל את הגז הקר ומחזיר את החם, כבל חשמלי וכן צינור לניקוז המים שנוצרים מההתעבות בחלק הקר<br/>מזגן זה יכול להיות בעל עוצמה רבה, כאשר גורם הרעש העיקרי נמצא מחוץ למבנה<br/> מזגנים מסוג זה מסוגלים למזג את האוויר גם בשטחים גדולים מאוד כמו קניונים ובנייני משרדים";
        this.image5 = "../../assets/gallery/seperated2.jpg";
        this.title6 = "מפוחי עשן";
        this.body6 = " מפוחי עשן לוקחים על עצמם את המשימה החיונית כל כך של פינוי עשן וחום, כלומר, הוצאה שלהם מחוץ למבנה<br/> מפוחים תעשייתיים אלה יפעלו בכל פעם שהם יזהו נוכחות של עשן בחלל בו הם מוצבים – באמצעות גלאי העשן המהווים חלק מהמערכת הכוללת <br/> ובכך ימנעו מהשריפה להתפשט ולהתפתח למימדי ענק<br/>המפוחים חיוניים בכל סוג של מבנה ציבורי כאשר בלא מעט מקרים יש חובה להתקין מערכת הכוללת אותם כתנאי לאישור הקמת המבנה או לקבלת רישיון עסק<br/> אחת הדוגמאות המובהקות לכך היא חניונים, כאשר לא תוכלו למצוא כיום חניון בישראל שאינו מצויד במפוחי עשן תעשייתיים";
        this.image6 = "../../assets/gallery/ashan2.jpg";
        this.title7 = "VRF";
        this.body7 = "(נפח קירור משתנה - VRF = Variant Refrigerant Flow)<br/>החיבור הוא באמצעות צינורות דקים אשר מייתרים את הצורך להנמיך תקרות או להתקין תעלות קירור<br/>המערכת רגישה לשינויים ומגיבה באופן רציף, כך שנוצרת רמת טמפרטורה אחידה ויציבה<br/>המדחס עצמו עובד בטכנולוגית 'אינוורטר', שזה אומר מדחס בתפוקות משתנות";
        this.image7 = "../../assets/gallery/VRF.jpg";
        this.title8 = "Water source";
        this.body8 = " מתקן קירור מים - מגדל הקירור, קולט את החום מהמים ומשחרר אותו אל מחוץ למערכת באמצעות חילופי אנרגיה<br/> אוויר מאולץ זורם דרך חומר מילוי - וכאשר הוא פוגש רסיסי מים, המים מתאיידים ואנרגית האיוד נלקחת מהאנרגיה של מי הקירור<br/> בפועל התהליך גורם להורדת הטמפרטורה של מי הקירור<br/> מכאן נובע שיעילותו של מגדל הקירור משתנה בהתאם לתנאי החוץ של האוויר והסביבה";
        this.image8 = "../../assets/gallery/waterSource.gif";
        this.title9 = "מזגנים מרכזיים";
        this.body9 = "    ייחודו של מזגן מיני מרכזי הוא בכך שזו מערכת עם מנוע (מעבה) אחד בלבד אשר מזרימה אוויר לכל הבית דרך צנרת ייעודית<br/>במקום לפזר מזגנים רבים מחוץ לקירות הבית, יש רק יחידה אחת<br>במידה והמערכת מצוידת בטכנולוגיית אינוורטר, היא מסוגלת להתאים את התפוקה לעומס החום בכל חדר, ובכך חוסכת חשמל";
        this.image9 = "../../assets/gallery/center.jpg";
    }
    sendMeMail() {
        this.sendMAil = 1;
    }
    sendCardData(imageLink, Title, Body) {
        this.cardTitle = Title;
        this.cardBody = Body;
        this.cardImageLink = imageLink;
        this.cardFlag = 1;
    }
    changeCardFlag() {
        this.cardFlag = 1 - this.cardFlag;
    }
    expendClean() {
        this.clean = 1 - this.clean;
        return '#clean';
    }
    submit() {
    }
    ngOnInit() {
    }
}
PrivateComponent.ɵfac = function PrivateComponent_Factory(t) { return new (t || PrivateComponent)(); };
PrivateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivateComponent, selectors: [["app-private"]], decls: 273, vars: 50, consts: [["id", "about", 1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "aboutS", 2, "width", "100%"], ["src", "../../assets/gallery/AboutNew1.jpg", 1, "about-Style"], [1, "showAbout"], [1, "container-fluid", "top-Text"], [1, "about-Text"], [1, "about-Sub-Text"], ["dir", "rtl"], ["id", "privateGallery", 2, "margin-bottom", "50px", "text-align", "center"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-briefcase", 2, "color", "brown"], ["id", "gallery", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "carousel-Style", 2, "width", "100%"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/gallery/Private/work1.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], [1, "carousel-item"], ["src", "../../assets/gallery/Private/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Private/work4a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Private/work5.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], ["class", "cards-Static", "id", "cards", 4, "ngIf"], ["class", "card big", "style", "border-bottom: 5px solid white; height: 650px; padding-left: 20%; margin-bottom: 10px;", 4, "ngIf"], ["id", "movingCards", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "card-Carousel"], ["data-target", "#movingCards", "data-slide-to", "0", 1, "active"], ["data-target", "#movingCards", "data-slide-to", "1"], ["data-target", "#movingCards", "data-slide-to", "2"], ["data-target", "#movingCards", "data-slide-to", "3"], ["data-target", "#movingCards", "data-slide-to", "4"], ["data-target", "#movingCards", "data-slide-to", "5"], ["data-target", "#movingCards", "data-slide-to", "6"], ["data-target", "#movingCards", "data-slide-to", "7"], ["data-target", "#movingCards", "data-slide-to", "8"], [1, "carousel-inner", "movingCards-Inner"], [1, "card"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img", 2, "height", "250px"], [1, "card-body", "grandient-moving"], [1, "card-title", 2, "text-align", "center"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img", 2, "height", "250px"], ["src", "../../assets/gallery/Nahshon12.png", "alt", "...", 1, "card-img", 2, "height", "250px"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img", 2, "height", "250px"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img", 2, "height", "250px"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img", 2, "height", "250px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img", 2, "height", "250px"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img", 2, "height", "250px"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img", 2, "height", "250px"], ["href", "#movingCards", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#movingCards", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "tips", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [2, "text-align", "center", "color", "white", "margin-top", "20px", "font-size", "18px"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", 2, "color", "white"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right", "font-size", "12px"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], ["style", "font-size: 12px;", 4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"], ["style", "font-size: 15px;", 4, "ngIf"], ["class", "btn btn-secondary", "style", "float: right; box-shadow: 0px -4px 5px 1px black; cursor: no-drop;", "type", "submit", 4, "ngIf"], [2, "color", "white"], [1, "container-fluid"], ["src", "../../assets/gallery/LogoBrand.png", "alt", "...", 1, "logoBrand"], ["src", "../../assets/gallery/LogoBrand2.png", "alt", "...", 1, "logoBrand2"], [1, "logo-Text"], [1, "logo-Sub-Text"], ["id", "cards", 1, "cards-Static"], [1, "card-group", 2, "margin-top", "10px"], [1, "card", "margin-left-85", 3, "click"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "grandient", 2, "height", "116px"], ["data-toggle", "collapse", "href", "#clean", "role", "button", "aria-expanded", "false", "aria-controls", "clean", 2, "text-decoration", "none"], ["style", "color: white; margin-left: 10px; margin-top: -12px;", "class", "card-title", 4, "ngIf"], [1, "card", 3, "click"], [1, "grandient"], ["data-toggle", "collapse", "href", "#tzah", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-title", 2, "color", "white", "margin-left", "10px", "margin-top", "-12px"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], [1, "card", "card-Style", 3, "click"], ["data-toggle", "collapse", "href", "#nahshon", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-group", "margin-Top"], ["data-toggle", "collapse", "href", "#package", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#split", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#smoke", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-group", "margin-Top", 2, "margin-bottom", "100px"], ["data-toggle", "collapse", "href", "#vrf", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#water", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#center", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card", "big", 2, "border-bottom", "5px solid white", "height", "650px", "padding-left", "20%", "margin-bottom", "10px"], ["alt", "...", 2, "height", "350px", "width", "70%", 3, "src"], [1, "grandient-new"], [2, "text-align", "center", "font-size", "15px"], [1, "card-body", 2, "text-align", "right", "font-size", "15px", "height", "190px", "margin-top", "-15px", 3, "innerHTML"], [2, "text-align", "center", "cursor", "pointer", "margin-top", "10px"], [2, "margin-bottom", "20px", "font-size", "15px", 3, "click"], [2, "font-size", "12px"], [2, "font-size", "15px"], ["type", "submit", 1, "btn", "btn-secondary", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", "cursor", "no-drop"]], template: function PrivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 - \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u05D7\u05D1\u05E8\u05EA\u05E0\u05D5 \u05DE\u05D1\u05E1\u05E1\u05EA \u05D0\u05EA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E6\u05D5\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D1\u05E2\u05DC \u05D9\u05D3\u05E2 \u05E8\u05D1 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05D0\u05E8\u05E5. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u05DB\u05DC \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05DE\u05E0\u05D5\u05D4\u05DC \u05E2\"\u05D9 \u05DE\u05E2\u05E8\u05DA \u05DE\u05D5\u05D1\u05D9\u05DC \u05E9\u05DC \u05D9\u05D5\u05E2\u05E5 \u05DE\u05D9\u05D6\u05D5\u05D2, \u05DE\u05E0\u05D4\u05DC \u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8\u05D9\u05DD \u05D5\u05DE\u05EA\u05E7\u05D9\u05E0\u05D9\u05DD \u05DE\u05E0\u05D5\u05E1\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D6\u05D5\u05DB\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D4\u05D9\u05E8 \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D4\u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u05D0\u05E0\u05D5 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D9\u05DD \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05D5\u05EA \u05E2\u05DC \u05D4\u05EA\u05D9\u05D9\u05E2\u05DC\u05D5\u05EA \u05D0\u05E0\u05E8\u05D2\u05D8\u05D9\u05EA \u05D5\u05D7\u05D9\u05E1\u05DB\u05D5\u05DF \u05D1\u05D7\u05E9\u05DE\u05DC \u05EA\u05D5\u05DA \u05DE\u05EA\u05DF \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E9\u05DE\u05D9\u05E8\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05D9\u05D5\u05E6\u05D0\u05EA \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05EA\u05DB\u05D5\u05E4\u05D5\u05EA \u05DC\u05D4\u05E9\u05EA\u05DC\u05DE\u05D5\u05D9\u05D5\u05EA \u05D1\u05DB\u05DC \u05D4\u05E0\u05D5\u05D2\u05E2 \u05DC\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D7\u05D3\u05E9\u05D5\u05EA \u05D1\u05EA\u05D7\u05D5\u05DD \u05D5\u05DE\u05E1\u05E4\u05E7\u05EA \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D8\u05D5\u05D1 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DC\u05DB\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PrivateComponent_div_59_Template, 101, 19, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, PrivateComponent_div_60_Template, 12, 3, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "VRF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Water source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "li", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "li", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h3", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "input", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_215_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](217, PrivateComponent_h6_217_Template, 2, 0, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_223_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](225, PrivateComponent_h6_225_Template, 2, 0, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_232_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](234, PrivateComponent_h6_234_Template, 2, 0, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_238_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_244_listener($event) { return ctx.cellNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, PrivateComponent_h6_246_Template, 2, 0, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "textarea", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_textarea_ngModelChange_251_listener($event) { return ctx.reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](254, PrivateComponent_h5_254_Template, 2, 0, "h5", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](255, PrivateComponent_a_255_Template, 3, 0, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "h6", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA : 053-3504818 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h6", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " \u05DE\u05E9\u05E8\u05D3 : 077-9180254 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h6", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " 053-4322804 : \u05D0\u05D1\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h6", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " 053-3505931 : \u05D0\u05D1\u05D9\u05D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h6", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " alaska19000@gmail.com : \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h6", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DC\u05E8\u05D1\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05D4\u05E0\"\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h6", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "( \u05D9\u05E9 \u05DC\u05D4\u05D3\u05D2\u05D9\u05E9 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05E6\u05D2\u05D9\u05DD \u05D7\u05D1\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E6\u05D5\u05E8\u05D4 \u05E9\u05D4\u05D9\u05D0 )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFlag == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFlag == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c1, ctx.lastName, !ctx.lastName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c1, ctx.firstName, !ctx.firstName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](36, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](39, _c1, ctx.city, !ctx.city));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](42, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](45, _c1, ctx.cellNumber, !ctx.cellNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName || !ctx.lastName || !ctx.city || !ctx.cellNumber);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    height: 580px !important;\r\n    width: 95% !important;\r\n    margin-left: 3%;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n.margin-left-85[_ngcontent-%COMP%]{\r\n  margin-left: 85px;\r\n}\r\n.big[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-img-top[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n  width: 80%;\r\n}\r\n.card-img[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n  width: 100%;\r\n}\r\n.margin-Top[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n}\r\n.card-title[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: auto; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.aboutS1[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-right: -20px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: none;\r\n}\r\n.about-Text[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\r\n.about-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  text-align: right;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  display: none;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-size: 16px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  \r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n.cards-Static[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-Carousel[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-bottom: 5px;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  padding-left: 20px; \r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: -19px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n  height: 50px !important;\r\n  width: 80%;\r\n}\r\n.grandient-moving[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n  height: 50px !important;\r\n  width: 100%;\r\n}\r\n.grandient-new[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n  height: 270px !important;\r\n  width: 70%;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.Header-Form-Style-New[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-image: url('HVAC.jpg');\r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  padding-right: 31px;\r\n  padding-left: 31px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important;  \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%]{\r\n  height: 550px !important;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  \r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  \r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  \r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n  \r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 830px;\r\n  background-color: black;\r\n  background-image: url('Hvac1.png');\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  \r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  width: 100% !important;\r\n  margin-left: 0%;\r\n}\r\n\r\n\r\n\r\n\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .about-Style[_ngcontent-%COMP%] {\r\n    margin-top: -29px;\r\n  }\r\n  .cards-Static[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .card-Carousel[_ngcontent-%COMP%]{\r\n    display: block;\r\n    \r\n  } \r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.big[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  height: 700px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n display: none;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    \r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  \r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  \r\n  padding-right: 45px;\r\n  padding-left: 45px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 400px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}\r\n\r\n\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9wcml2YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7Ozs7OztHQU1HO0FBQ0Q7SUFDRSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBOzs7Ozs7R0FNRztBQUNIO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNENBQXVEO0FBQ3pEO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtHQUNkLFlBQVk7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUdBQXFHO0FBQ3ZHO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFHQUFxRztBQUN2RztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7Ozs7O0dBS0c7QUFDSDtFQUNFLHVGQUFnRTtFQUFoRSxnRUFBZ0U7RUFDaEUsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHVGQUFnRTtFQUFoRSxnRUFBZ0U7RUFDaEUsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQTtFQUNFLHVGQUFnRTtFQUFoRSxnRUFBZ0U7RUFDaEUsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRDQUF1RDtBQUN6RDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUNBQW9EO0VBQ3BELDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBOztBQUVBO0FBR0E7RUFDRTs7S0FFRztBQUNMO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBOztBQUVBOztJQUVJO0NBQ0g7RUFDQyxhQUFhO0FBQ2Y7QUFDQTtBQUVBLG1EQUFtRDtBQUNuRDtFQUNFOztNQUVJO0dBQ0g7SUFDQyxhQUFhO0dBQ2Q7R0FDQTtJQUNDLGFBQWE7RUFDZjtFQUNBO0lBQ0Usd0JBQXdCO0FBQzVCO0FBQ0E7O0dBRUc7QUFDSDtBQUVBO0VBQ0U7O01BRUk7R0FDSDtJQUNDLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7O0tBRUc7O0FBRUw7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQ0FBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0I7MkJBQ3lCO0FBQzNCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLGNBQWM7RUFDZDt3QkFDc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBOzs7R0FHRztBQUNIOzs7R0FHRztBQUNIOzs7R0FHRztBQUNIO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0lBQ2Q7MEJBQ3NCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtBQUVBLG9FQUFvRTtBQUNwRTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtHQUNsQjtHQUNBO0tBQ0UsY0FBYztHQUNoQjtHQUNBO0lBQ0MsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0FBRUE7RUFDRTs7TUFFSTtHQUNIO0tBQ0UsZUFBZTtHQUNqQjtHQUNBO0lBQ0Msa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7S0FDZCxZQUFZO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBOztHQUVHO0FBQ0g7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7Ozs7R0FLRztBQUNIOztHQUVHO0FBQ0g7O0lBRUk7QUFDSjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFFQTtFQUNFO0lBQ0UsYUFBYTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7Ozs7O0dBS0c7QUFDSDtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTs7T0FFTztBQUNQOzs7OztHQUtHO0FBQ0g7QUFFQTtFQUNFO01BQ0ksYUFBYTtNQUNiLGdCQUFnQjtFQUNwQjtBQUNGO0FBRUE7RUFDRTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvcHJpdmF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4vKiAucGljLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogNzUwcHggIWltcG9ydGFudDsgXHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSAqL1xyXG4gIC5waWMtU3R5bGUge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTgwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4uY2FyZHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTg1e1xyXG4gIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG59XHJcbi5iaWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNhcmQtaW1nLXRvcHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLmNhcmQtaW1ne1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hcmdpbi1Ub3B7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLyogLnRpcC1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgXHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLmlubmVyLVRpcHtcclxudGV4dC1hbGlnbjogY2VudGVyOyBcclxudGV4dC1hbGlnbjogY2VudGVyOyBcclxuaGVpZ2h0OiA3MDBweDsgXHJcbnBhZGRpbmctdG9wOiAxMiU7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4udGlwLVN0eWxle1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcDMuanBnKTtcclxufVxyXG4uYWJvdXQtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4OyBcclxuICBoZWlnaHQ6IGF1dG87IFxyXG4gIC8qIC8vYmFja2dyb3VuZC1jb2xvcjogIzJjNWFjMzsgICovXHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5waWMxe1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzAwcHg7ICBcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbn1cclxuLmFib3V0UzF7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcbi5sb2dvQnJhbmR7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubG9nb0JyYW5kMntcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFib3V0LVRleHR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmFib3V0LVN1Yi1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udG9wLVRleHR7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3dBYm91dHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dvLVRleHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5sb2dvLVN1Yi1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5pbWcgOmhvdmVye1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcmRzLVN0YXRpY3tcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY2FyZC1DYXJvdXNlbHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuaW5wdXQgOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcbi5mb3JtLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAzJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4udGlwLUltYWdle1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi53aGl0ZUNvbG9ye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucmVkQ29sb3J7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uZXhwZXJ0LU1vdG8tQm9keXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmV4cGVydC1Nb3RvLUhlYWRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7IFxyXG4gIHBhZGRpbmctbGVmdDogMjBweDsgXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5jYXJvdXNlbC1TdHlsZXtcclxuICBtYXJnaW4tdG9wIDotMjRweDsgXHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlOyBcclxuICBtYXJnaW4tcmlnaHQ6IC0xOXB4O1xyXG59XHJcbi5jaGVjay1DaXJjbGUtTW90b3tcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4udGV4dC1SaWdodHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWJvdXQtSGVhZGVye1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICBwYWRkaW5nLXJpZ2h0OiAyNSU7XHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmFib3V0LUJvZHl7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1JTsgXHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7IFxyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5sb2dvU3R5bGV7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmRpc3BsYXlOb25le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogLmJvZHlUZXh0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib2R5VGV4dCA6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG59ICovXHJcbi5ncmFuZGllbnR7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJmMzQ1MyAwJSwgIzRjNTU4YiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4uZ3JhbmRpZW50LW1vdmluZ3tcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmYzNDUzIDAlLCAjNGM1NThiIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZ3JhbmRpZW50LW5ld3tcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmYzNDUzIDAlLCAjNGM1NThiIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG4uaW1nMntcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcDMuanBnKTtcclxufVxyXG4ucGljLUFDe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5IZWFkZXItRm9ybS1TdHlsZXtcclxuICBoZWlnaHQ6IDY1MHB4OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5YmFjOyBcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5IZWFkZXItRm9ybS1TdHlsZS1OZXd7XHJcbiAgaGVpZ2h0OiA2NTBweDsgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9nYWxsZXJ5L0hWQUMuanBnKTtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzFweDtcclxufVxyXG4uY2FyZC1TdHlsZXtcclxuICBtYXJnaW4tbGVmdDogMzBweCAhaW1wb3J0YW50OyAgXHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5tYXJnaW4tVG9wLTEwe1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5tb3ZpbmdDYXJkcy1Jbm5lcntcclxuICBoZWlnaHQ6IDU1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KSB7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAvKiAuYWJvdXQtU3R5bGV7XHJcbiAgIGhlaWdodDogNzAwcHg7XHJcbiAgfSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5pbm5lci1UaXB7XHJcbiAgICBoZWlnaHQ6IDU1NXB4OyBcclxuICB9XHJcbiAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLWJvZHl7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbi8qIC5hYm91dC1TdHlsZXtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gfSAqL1xyXG4gLmlubmVyLVRpcHtcclxuICBoZWlnaHQ6IDU1MHB4OyBcclxufVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAvKiAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDU4MHB4O1xyXG4gICB9ICovXHJcbiAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICB9XHJcbiAgIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gIH1cclxuICAucGljLVN0eWxlIHtcclxuICAgIGhlaWdodDogNDcwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiAuY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn0gKi9cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAvKiAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICB9ICovXHJcbiAgIC5pbm5lci1UaXB7XHJcbiAgICBoZWlnaHQ6IDM3MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcbiAgLyogLmNhcmQtYm9keXtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgfSAqL1xyXG5cclxufVxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4ucGljLUFDe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNvbC1tZC04e1xyXG4gIGZsZXg6IDAgMCAxMDAuMDY2NjY3JTtcclxuICBtYXgtd2lkdGg6IDEwMC4wNjY2NjclO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5IZWFkZXItRm9ybS1TdHlsZXtcclxuICBoZWlnaHQ6IDgzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZ2FsbGVyeS9IdmFjMS5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IC0yMnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgKi9cclxufVxyXG4uaW5uZXItVGlwe1xyXG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDsgXHJcbn1cclxuLnRpcC1JbWFnZSB7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLyogLmNhcmQtYm9keXtcclxuICBoZWlnaHQ6IDc1MHB4O1xyXG59ICovXHJcbi5hYm91dFN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4OyAqL1xyXG59XHJcbi5sb2dvLVRleHR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5sb2dvLVN1Yi1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4ucGljLVN0eWxlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbn1cclxuXHJcbi8qIC5jYXJvdXNlbC1TdHlsZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIC5jYXJkcy1TdGF0aWMge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxuLyogLnRpcC1TdHlsZSB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAuYWJvdXQtU3R5bGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTI5cHg7XHJcbiAgfVxyXG4gIC5jYXJkcy1TdGF0aWN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2FyZC1DYXJvdXNlbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTIycHg7ICovXHJcbiAgfSBcclxuICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4uYmlne1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1vdmluZ0NhcmRzLUlubmVyIHtcclxuICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG4ubG9nb0JyYW5ke1xyXG4gZGlzcGxheTogbm9uZTtcclxufVxyXG4ubG9nb0JyYW5kMntcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIC8qIGhlaWdodDogNDgwcHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcclxuICAgfVxyXG4gICAuZGlzcGxheU5vbmV7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxuICAgLmxvZ29TdHlsZXtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4udGlwLUltYWdle1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc0cHgpe1xyXG4uY2FyZC1TdHlsZXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4ubWFyZ2luLVRvcC0xMHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAvKiAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICB9ICovXHJcbiAgIC5leHBlcnQtTW90by1Cb2R5e1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgfVxyXG4gICAuZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuY2hlY2stQ2lyY2xlLU1vdG97XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICAudGlwLUltYWdlIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbiAgaGVpZ2h0OiAzMTVweCAhaW1wb3J0YW50OyBcclxufVxyXG4vKiAuYWJvdXRTMXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufSAqL1xyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcC1UZXh0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zaG93QWJvdXR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyogLmxvZ28tVGV4dHtcclxuICBmb250LXNpemU6IDhweDtcclxufVxyXG4ubG9nby1TdWItVGV4dHtcclxuICBmb250LXNpemU6IDdweDtcclxufSAqL1xyXG4vKiAuY2FyZHtcclxuICBoZWlnaHQ6IDBweDtcclxufSAqL1xyXG4vKiAubW92aW5nQ2FyZHMge1xyXG4gIGhlaWdodDogNTUwcHggIWltcG9ydGFudDtcclxuIH0gKi9cclxuLmNhcmQtYm9keXtcclxuICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxufVxyXG4uYWJvdXQtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbiB9XHJcbi8qIC5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufVxyXG4uY2Fyb3VzZWwtU3R5bGV7XHJcbm1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxuLnBpYy1TdHlsZSB7XHJcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvU3R5bGV7XHJcbmhlaWdodDogMTcwcHg7XHJcbnBhZGRpbmctdG9wOiA3NHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLyogLmFib3V0U3tcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICAgICAqL1xyXG4vKiAubW92aW5nQ2FyZHMtSW5uZXIge1xyXG4gIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG59ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpe1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-private',
                templateUrl: './private.component.html',
                styleUrls: ['./private.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/privateExtra/private-extra/private-extra.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/privateExtra/private-extra/private-extra.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrivateExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateExtraComponent", function() { return PrivateExtraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function PrivateExtraComponent_div_68_h5_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateExtraComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.sendCardData(ctx_r72.image1, ctx_r72.title1, ctx_r72.body1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PrivateExtraComponent_div_68_h5_11_Template, 3, 0, "h5", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.sendCardData(ctx_r74.image2, ctx_r74.title2, ctx_r74.body2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.sendCardData(ctx_r75.image3, ctx_r75.title3, ctx_r75.body3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.sendCardData(ctx_r76.image4, ctx_r76.title4, ctx_r76.body4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.sendCardData(ctx_r77.image5, ctx_r77.title5, ctx_r77.body5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.sendCardData(ctx_r78.image6, ctx_r78.title6, ctx_r78.body6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.sendCardData(ctx_r79.image7, ctx_r79.title7, ctx_r79.body7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.sendCardData(ctx_r80.image8, ctx_r80.title8, ctx_r80.body8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_68_Template_div_click_106_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.sendCardData(ctx_r81.image9, ctx_r81.title9, ctx_r81.body9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h5", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.clean == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.image9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.title9);
} }
function PrivateExtraComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivateExtraComponent_div_69_Template_h4_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.changeCardFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05D7\u05D6\u05E8\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r64.cardImageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r64.cardTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r64.cardBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PrivateExtraComponent_h6_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateExtraComponent_h6_234_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateExtraComponent_h6_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateExtraComponent_h6_255_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateExtraComponent_h5_263_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateExtraComponent_a_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
const _c1 = function (a0, a1) { return { "whiteColor": a0, "redColor": a1 }; };
const _c2 = function (a0) { return { "btn btn-success": a0 }; };
class PrivateExtraComponent {
    constructor() {
        this.showFiller = false;
        this.events = [];
        this.phoneNumber = "";
        this.reason = "";
        this.sendMAil = 0;
        this.clean = 0;
        this.cardFlag = 0;
        this.cardImageLink = "";
        this.cardTitle = "";
        this.cardBody = "";
        this.title1 = "אוויר נקי";
        this.body1 = " מזגן או מערכת מיזוג אוויר הם בית גידול אהוב מאוד על חיידקים , עובש , בקטריות ופטריות האחראים על תחלואות שונות שלעיתים אין אנו מייחסים אותן למזגן<br/> אסטמה, שיעול כרוני, נזלת כרונית, כאבי ראש, גירוי וגירוד בעיניים ותופעות נוספות עלולות להיות תוצאה של נשימת אוויר ממוזג ומזוהם באופן קבוע<br/>חיטוי מגש הניקוז של המזגן: חלק ניכר מהריחות הרעים במערכת המיזוג מגיע ממגש הניקוז<br/>אזור רטוב זה הנו בית גידול מועדף על חיידקים, בקטריות, פטריות ועובש <br/>מגש הניקוז הנו אזור רטוב במיוחד מאחר ומיים הנוטפים מסוללת המזגן ניקווים בו וזורמים ממנו אל צינור הניקוז<br/> משום כך – כל תכשיר נשטף ממנו במוקדם או במאוחר";
        this.image1 = "../../assets/gallery/clean.jpg";
        this.title2 = "יחידות אוויר צח";
        this.body2 = "החלפת חום יעילה המתבצעת בין האוויר הנפלט מן החלל לבין האוויר הצח המסופק לחלל<br/>מערכת אוורור חשובה וחיונית הכוללת שני מפוחים עוצמתיים (אחד ליניקת אויר מהחלל ושני לאספקת אויר צח לחלל)<br/>מחליף חום בעל הפרדה מלאה בין האוויר הנפלט לאויר המסופק ומסנן חלקיקים אשר מונע את כניסתם לחלל המאוורר<br/>בהתאם לתנאי פנים וחוץ, המערכת תבחר אוטומטית בין מצב החלפת חום או מצב איוורור ישיר";
        this.image2 = "../../assets/gallery/cleanAir.jpg";
        this.title3 = "מפוחי נחשון";
        this.body3 = " יחידה פנימית (מאייד) במערכת מיזוג המבוססת על מים (צ'ילר)<br/>היחידה מורכבת מסוללה, דרכה זורמים מים חמים / קרים ומפוח, אשר מעביר אוויר דרך הסוללה ובכך מבצע את פעולת המיזוג<br/> היחידה יכולה לבוא במספר תצורות וגדלים (גלוי / נסתר, עילי / רצפתי / מיני מרכזי)";
        this.image3 = "../../assets/gallery/Nahshon12.png";
        this.title4 = "יחידות פק'ג";
        this.body4 = " פקג' הינו הכינוי המקובל בתחום ליחידת מיזוג אחודה בהתפשטות ישירה <br/> יחידת “פקג'” כוללת את כל רכיבי מערכת המיזוג בתוך מסגרת אחת, בה נמצא מעגל קירור מושלם (מדחס, מעבה מאייד) ומערכת טיפול באוויר מושלמת (מסננים/ מפוחים)<br/>Package היות וכל הרכיבים “ארוזים” ביחידה אחת התקבע ליחידות אלו השם <br/> ניתן לסווג את יחידת הפקג’ ליעד כללי של אספקת מיזוג אוויר (קירור או חימום) או בהתאם לייעוד ספציפי יותר של טיפול באוויר חוזר או טיפול אוויר צח";
        this.image4 = "../../assets/gallery/package2.jpg";
        this.title5 = "מזגנים מפוצלים";
        this.body5 = " מזגן בו הרכיבים מפוצלים לשני מארזים: מארז אחד לצד הקר, ומארז אחד לצד החם<br> בצד הקר מצויים כפתורי ההפעלה, מקרן הקירור ומאוורר ובצד החם מצויים המדחס, מקרן החימום והמאוורר הנוסף<br/> בין שני המארזים יש צינור כפול המוביל את הגז הקר ומחזיר את החם, כבל חשמלי וכן צינור לניקוז המים שנוצרים מההתעבות בחלק הקר<br/>מזגן זה יכול להיות בעל עוצמה רבה, כאשר גורם הרעש העיקרי נמצא מחוץ למבנה<br/> מזגנים מסוג זה מסוגלים למזג את האוויר גם בשטחים גדולים מאוד כמו קניונים ובנייני משרדים";
        this.image5 = "../../assets/gallery/seperated2.jpg";
        this.title6 = "מפוחי עשן";
        this.body6 = " מפוחי עשן לוקחים על עצמם את המשימה החיונית כל כך של פינוי עשן וחום, כלומר, הוצאה שלהם מחוץ למבנה<br/> מפוחים תעשייתיים אלה יפעלו בכל פעם שהם יזהו נוכחות של עשן בחלל בו הם מוצבים – באמצעות גלאי העשן המהווים חלק מהמערכת הכוללת <br/> ובכך ימנעו מהשריפה להתפשט ולהתפתח למימדי ענק<br/>המפוחים חיוניים בכל סוג של מבנה ציבורי כאשר בלא מעט מקרים יש חובה להתקין מערכת הכוללת אותם כתנאי לאישור הקמת המבנה או לקבלת רישיון עסק<br/> אחת הדוגמאות המובהקות לכך היא חניונים, כאשר לא תוכלו למצוא כיום חניון בישראל שאינו מצויד במפוחי עשן תעשייתיים";
        this.image6 = "../../assets/gallery/ashan2.jpg";
        this.title7 = "VRF";
        this.body7 = "(נפח קירור משתנה - VRF = Variant Refrigerant Flow)<br/>החיבור הוא באמצעות צינורות דקים אשר מייתרים את הצורך להנמיך תקרות או להתקין תעלות קירור<br/>המערכת רגישה לשינויים ומגיבה באופן רציף, כך שנוצרת רמת טמפרטורה אחידה ויציבה<br/>המדחס עצמו עובד בטכנולוגית 'אינוורטר', שזה אומר מדחס בתפוקות משתנות";
        this.image7 = "../../assets/gallery/VRF.jpg";
        this.title8 = "Water source";
        this.body8 = " מתקן קירור מים - מגדל הקירור, קולט את החום מהמים ומשחרר אותו אל מחוץ למערכת באמצעות חילופי אנרגיה<br/> אוויר מאולץ זורם דרך חומר מילוי - וכאשר הוא פוגש רסיסי מים, המים מתאיידים ואנרגית האיוד נלקחת מהאנרגיה של מי הקירור<br/> בפועל התהליך גורם להורדת הטמפרטורה של מי הקירור<br/> מכאן נובע שיעילותו של מגדל הקירור משתנה בהתאם לתנאי החוץ של האוויר והסביבה";
        this.image8 = "../../assets/gallery/waterSource.gif";
        this.title9 = "מזגנים מרכזיים";
        this.body9 = "    ייחודו של מזגן מיני מרכזי הוא בכך שזו מערכת עם מנוע (מעבה) אחד בלבד אשר מזרימה אוויר לכל הבית דרך צנרת ייעודית<br/>במקום לפזר מזגנים רבים מחוץ לקירות הבית, יש רק יחידה אחת<br>במידה והמערכת מצוידת בטכנולוגיית אינוורטר, היא מסוגלת להתאים את התפוקה לעומס החום בכל חדר, ובכך חוסכת חשמל";
        this.image9 = "../../assets/gallery/center.jpg";
    }
    sendMeMail() {
        this.sendMAil = 1;
    }
    sendCardData(imageLink, Title, Body) {
        this.cardTitle = Title;
        this.cardBody = Body;
        this.cardImageLink = imageLink;
        this.cardFlag = 1;
    }
    changeCardFlag() {
        this.cardFlag = 1 - this.cardFlag;
    }
    expendClean() {
        this.clean = 1 - this.clean;
        return '#clean';
    }
    submit() {
    }
    ngOnInit() {
    }
}
PrivateExtraComponent.ɵfac = function PrivateExtraComponent_Factory(t) { return new (t || PrivateExtraComponent)(); };
PrivateExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivateExtraComponent, selectors: [["app-private-extra"]], decls: 282, vars: 50, consts: [["id", "about", 1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "aboutS", 2, "width", "100%"], ["src", "../../../assets/gallery/AboutPrivateNew.jpg", 1, "about-Style"], [1, "showAbout"], [1, "container-fluid", "top-Text"], [1, "about-Text"], [1, "about-Sub-Text"], ["dir", "rtl"], ["id", "privateGallery", 2, "margin-bottom", "50px", "text-align", "center"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-briefcase", 2, "color", "brown"], ["id", "gallery", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "carousel-Style", 2, "width", "100%"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/gallery/Private/work1.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], [1, "carousel-item"], ["src", "../../assets/gallery/Private/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Private/work4a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Private/work5.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], ["class", "cards-Static", "id", "cards", 4, "ngIf"], ["class", "card", "style", "border-bottom: 5px solid white;", 4, "ngIf"], ["id", "movingCards", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "card-Carousel"], ["data-target", "#movingCards", "data-slide-to", "0", 1, "active"], ["data-target", "#movingCards", "data-slide-to", "1"], ["data-target", "#movingCards", "data-slide-to", "2"], ["data-target", "#movingCards", "data-slide-to", "3"], ["data-target", "#movingCards", "data-slide-to", "4"], ["data-target", "#movingCards", "data-slide-to", "5"], ["data-target", "#movingCards", "data-slide-to", "6"], ["data-target", "#movingCards", "data-slide-to", "7"], ["data-target", "#movingCards", "data-slide-to", "8"], [1, "carousel-inner", "movingCards-Inner"], [1, "card"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-body", "grandient"], [1, "card-title", 2, "text-align", "center"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/Nahshon12.png", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["href", "#movingCards", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#movingCards", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "tips", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [2, "text-align", "center", "color", "white", "margin-top", "20px"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", 2, "color", "white"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"], ["class", "btn btn-secondary", "style", "float: right; box-shadow: 0px -4px 5px 1px black; cursor: no-drop;", "type", "submit", 4, "ngIf"], [2, "color", "white"], [1, "container-fluid"], ["src", "../../assets/gallery/LogoBrand.png", "alt", "...", 1, "logoBrand"], ["src", "../../assets/gallery/LogoBrand2.png", "alt", "...", 1, "logoBrand2"], [1, "logo-Text"], [1, "logo-Sub-Text"], ["id", "cards", 1, "cards-Static"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px", 3, "click"], ["alt", "...", 1, "card-img-top", 2, "height", "250px", 3, "src"], [1, "grandient", 2, "height", "116px"], ["data-toggle", "collapse", "href", "#clean", "role", "button", "aria-expanded", "false", "aria-controls", "clean", 2, "text-decoration", "none"], ["style", "color: white; margin-left: 10px;", 4, "ngIf"], [1, "grandient"], ["data-toggle", "collapse", "href", "#tzah", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [2, "color", "white", "margin-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], [1, "card", "card-Style", 3, "click"], ["data-toggle", "collapse", "href", "#nahshon", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-group", "margin-top-10", 2, "margin-top", "30px"], ["data-toggle", "collapse", "href", "#package", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#split", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#smoke", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card-group", 2, "margin-bottom", "100px", "margin-top", "30px"], ["data-toggle", "collapse", "href", "#vrf", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#water", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["data-toggle", "collapse", "href", "#center", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [1, "card", 2, "border-bottom", "5px solid white"], ["alt", "...", 1, "card-img-top", 2, "height", "700px", 3, "src"], [2, "text-align", "center"], [1, "card-body", 2, "text-align", "right", "font-size", "20px", "height", "450px", 3, "innerHTML"], [2, "text-align", "center", "cursor", "pointer"], [2, "margin-bottom", "20px", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", "cursor", "no-drop"]], template: function PrivateExtraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u05D7\u05D1\u05E8\u05EA\u05E0\u05D5 \u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D0\u05D7\u05D6\u05E7\u05D4 \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D1\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u05D0\u05E0\u05D5 \u05E0\u05D5\u05EA\u05E0\u05D9\u05DD \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05E9\u05E8 \u05E7\u05D9\u05D9\u05DE\u05D5\u05EA \u05D1\u05E9\u05D5\u05E7 \u05E2\"\u05D9 \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05E9\u05E8 \u05E4\u05E8\u05D5\u05E1\u05D4 \u05D1\u05DB\u05DC \u05D0\u05D9\u05D6\u05D5\u05E8 \u05D4\u05E6\u05E4\u05D5\u05DF, \u05D4\u05E9\u05E8\u05D5\u05DF, \u05D5\u05D4\u05DE\u05E8\u05DB\u05D6, \u05D5\u05DE\u05E1\u05E4\u05E7\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA \u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05DE\u05D4\u05D9\u05E8 \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D4\u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05D3 24 \u05E9\u05E2\u05D5\u05EA \u05DE\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05EA\u05E7\u05DC\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u05D0\u05E0\u05D5 \u05DE\u05EA\u05DE\u05D7\u05D9\u05DD \u05D1\u05EA\u05DB\u05E0\u05D5\u05DF \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 \u05D5\u05D4\u05E2\u05E1\u05E7\u05D9, \u05DB\u05DC \u05D6\u05D0\u05EA \u05D1\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D9\u05D5\u05E2\u05E5 \u05DE\u05D9\u05D6\u05D5\u05D2, \u05D0\u05E9\u05E8 \u05DE\u05DC\u05D5\u05D5\u05D4 \u05D0\u05EA \u05D4\u05DC\u05E7\u05D5\u05D7 \u05DE\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D5\u05E2\u05D3 \u05DC\u05E1\u05D5\u05E4\u05D5. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u05D9\u05D5\u05E2\u05E5 \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05E1\u05E4\u05E7 \u05DB\u05DC \u05DE\u05E2\u05E0\u05D4 \u05D0\u05E4\u05E9\u05E8\u05D9 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D1\u05D5\u05E7\u05E9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u05D7\u05D1\u05E8\u05EA\u05E0\u05D5 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D4 \u05E7\u05D9\u05D3\u05DE\u05D4 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05D9\u05E8\u05D5\u05E7 \u05D5\u05DE\u05E1\u05E4\u05E7\u05EA \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05E9\u05DC \u05D4\u05EA\u05D9\u05D9\u05E2\u05DC\u05D5\u05EA \u05D0\u05E0\u05E8\u05D2\u05D8\u05D9\u05EA \u05D5\u05D7\u05E1\u05DB\u05D5\u05DF \u05D1\u05D7\u05E9\u05DE\u05DC, \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E8\u05D0\u05D9\u05D4 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05E6\u05E8\u05DB\u05D9\u05DD \u05D4\u05E0\u05D3\u05E8\u05E9\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u05D0\u05E0\u05D5 \u05DE\u05EA\u05DE\u05D7\u05D9\u05DD \u05D1\u05D4\u05EA\u05E7\u05E0\u05EA \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05DC\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 \u05D5\u05D4\u05E2\u05E1\u05E7\u05D9, \u05DC\u05E8\u05D1\u05D5\u05EA : \u05E4\u05E7\u05D0'\u05D2, \u05E4\u05D0\u05E0\u05E7\u05D5\u05DC\u05D9\u05DD, \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7, \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF, \u05D7\u05D3\u05E8\u05D9\u05DD \u05E0\u05E7\u05D9\u05D9\u05DD, \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA VRF \u05D5 DX . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u05D7\u05D1\u05E8\u05EA\u05E0\u05D5 \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05E2\"\u05D9 \u05E6\u05D5\u05D5\u05EA \u05DE\u05EA\u05E7\u05D9\u05E0\u05D9\u05DD \u05DE\u05D9\u05D5\u05DE\u05DF \u05D1\u05E2\u05DC \u05E2\u05E9\u05E8\u05D5\u05EA \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u05D9\u05EA\u05E8 \u05D4\u05D4\u05EA\u05E0\u05D4\u05DC\u05D5\u05EA \u05DE\u05D1\u05D5\u05E6\u05E2\u05EA \u05E2\"\u05D9 \u05DE\u05E0\u05D4\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8\u05D9\u05DD \u05D4\u05E0\u05DE\u05E6\u05D0 \u05D1\u05D0\u05EA\u05E8, \u05D0\u05E9\u05E8 \u05DE\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05DC\u05E7\u05D5\u05D7 \u05DE\u05E8\u05D5\u05E6\u05D4 \u05DE\u05DB\u05DC \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, PrivateExtraComponent_div_68_Template, 119, 19, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, PrivateExtraComponent_div_69_Template, 12, 3, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "VRF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Water source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "ol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "li", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "li", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h3", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "input", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_224_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](226, PrivateExtraComponent_h6_226_Template, 2, 0, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_232_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](234, PrivateExtraComponent_h6_234_Template, 2, 0, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_241_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](243, PrivateExtraComponent_h6_243_Template, 2, 0, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_247_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "b", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_253_listener($event) { return ctx.cellNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](255, PrivateExtraComponent_h6_255_Template, 2, 0, "h6", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "textarea", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_textarea_ngModelChange_260_listener($event) { return ctx.reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](263, PrivateExtraComponent_h5_263_Template, 2, 0, "h5", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](264, PrivateExtraComponent_a_264_Template, 3, 0, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "h6", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA : 053-3504818 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h6", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " \u05DE\u05E9\u05E8\u05D3 : 077-9180254 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h6", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " 053-4322804 : \u05D0\u05D1\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h6", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " 053-3505931 : \u05D0\u05D1\u05D9\u05D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h6", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " alaska19000@gmail.com : \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h6", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DC\u05E8\u05D1\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05D4\u05E0\"\u05DC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h6", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "( \u05D9\u05E9 \u05DC\u05D4\u05D3\u05D2\u05D9\u05E9 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05E6\u05D2\u05D9\u05DD \u05D7\u05D1\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E6\u05D5\u05E8\u05D4 \u05E9\u05D4\u05D9\u05D0 )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFlag == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardFlag == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c1, ctx.lastName, !ctx.lastName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c1, ctx.firstName, !ctx.firstName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](36, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](39, _c1, ctx.city, !ctx.city));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](42, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](45, _c1, ctx.cellNumber, !ctx.cellNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName || !ctx.lastName || !ctx.city || !ctx.cellNumber);
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n  background-size: contain; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  height: 750px !important; \r\n  width: 100% !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n.about-Text[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\r\n.about-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  text-align: right;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  display: none;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: none;\r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-size: 16px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: auto; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n.cards-Static[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-Carousel[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-bottom: 5px;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  padding-left: 20px; \r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: -19px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  padding-right: 31px;\r\n  padding-left: 31px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important;  \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%]{\r\n  height: 550px !important;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  \r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  \r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 500px;\r\n}\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  \r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 550px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 900px;\r\n  \r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 750px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .about-Style[_ngcontent-%COMP%] {\r\n    margin-top: -29px;\r\n  }\r\n  .cards-Static[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .card-Carousel[_ngcontent-%COMP%]{\r\n    display: block;\r\n    \r\n  }\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  height: 700px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  display: none;\r\n }\r\n .logoBrand2[_ngcontent-%COMP%]{\r\n   display: block;\r\n }\r\n}\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    \r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  \r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  \r\n  padding-right: 45px;\r\n  padding-left: 45px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 400px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}  \r\n\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZUV4dHJhL3ByaXZhdGUtZXh0cmEvcHJpdmF0ZS1leHRyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7O0dBTUc7QUFDSDtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0Q0FBMEQ7QUFDNUQ7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0dBQ2QsWUFBWTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxR0FBcUc7QUFDdkc7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUdBQXFHO0FBQ3ZHO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7R0FLRztBQUNIO0VBQ0UsdUZBQWdFO0VBQWhFLGdFQUFnRTtFQUNoRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRDQUEwRDtBQUM1RDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTs7QUFFQTtBQUdBO0VBQ0U7O0tBRUc7QUFDTDtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTs7QUFFQTs7SUFFSTtDQUNIO0VBQ0MsYUFBYTtBQUNmO0FBQ0E7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTs7TUFFSTtHQUNIO0lBQ0MsYUFBYTtHQUNkO0dBQ0E7SUFDQyxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHdCQUF3QjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7QUFFQTtFQUNFOztNQUVJO0dBQ0g7SUFDQyx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVGO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYjsyQkFDeUI7QUFDM0I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkO3dCQUNzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOzs7Ozs7Ozs7OztHQVdHO0FBQ0g7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7SUFDZDswQkFDc0I7RUFDeEI7RUFDQTtJQUNFLGFBQWE7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0NBQ2Q7Q0FDQTtHQUNFLGNBQWM7Q0FDaEI7QUFDRDtBQUVBLG9FQUFvRTtBQUNwRTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtHQUNsQjtHQUNBO0tBQ0UsY0FBYztHQUNoQjtHQUNBO0lBQ0MsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0FBRUE7RUFDRTs7TUFFSTtHQUNIO0tBQ0UsZUFBZTtHQUNqQjtHQUNBO0lBQ0Msa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7S0FDZCxZQUFZO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7OztHQUdHO0FBQ0g7O0dBRUc7QUFDSDs7SUFFSTtBQUNKO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtBQUVBO0VBQ0U7SUFDRSxhQUFhO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDs7Ozs7R0FLRztBQUNIO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQjtBQUNBOzs7OztHQUtHO0FBQ0g7QUFFQTtFQUNFO01BQ0ksYUFBYTtNQUNiLGdCQUFnQjtFQUNwQjtBQUNGO0FBRUE7RUFDRTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGVFeHRyYS9wcml2YXRlLWV4dHJhL3ByaXZhdGUtZXh0cmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBpYy1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDc1MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5hYm91dC1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hYm91dC1TdWItVGV4dHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRvcC1UZXh0e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaG93QWJvdXR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiAudGlwLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyBcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSAqL1xyXG4ubG9nb0JyYW5ke1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ29CcmFuZDJ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dvLVRleHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbmhlaWdodDogNzAwcHg7IFxyXG5wYWRkaW5nLXRvcDogMTIlO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnRpcC1TdHlsZXtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC10aXAzLmpwZyk7XHJcbn1cclxuLmFib3V0LVN0eWxle1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNzBweDsgXHJcbiAgaGVpZ2h0OiBhdXRvOyBcclxuICAvKiAvL2JhY2tncm91bmQtY29sb3I6ICMyYzVhYzM7ICAqL1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4ucGljMXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwMHB4OyAgXHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaW1nIDpob3ZlcntcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkcy1TdGF0aWN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNhcmQtQ2Fyb3VzZWx7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0IDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG4uZm9ybS1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMyUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRpcC1JbWFnZXtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ud2hpdGVDb2xvcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJlZENvbG9ye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmV4cGVydC1Nb3RvLUJvZHl7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5leHBlcnQtTW90by1IZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyBcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IFxyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4uY2Fyb3VzZWwtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcCA6LTI0cHg7IFxyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTlweDtcclxufVxyXG4uY2hlY2stQ2lyY2xlLU1vdG97XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLnRleHQtUmlnaHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmFib3V0LUhlYWRlcntcclxuICBmb250LXNpemU6IDMzcHg7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgcGFkZGluZy1yaWdodDogMjUlO1xyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5hYm91dC1Cb2R5e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICBwYWRkaW5nLXJpZ2h0OiA0NSU7IFxyXG4gIG1hcmdpbi10b3A6IDE1MHB4OyBcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4ubG9nb1N0eWxle1xyXG4gIHdpZHRoOiAxMDAlOyBcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5kaXNwbGF5Tm9uZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIC5ib2R5VGV4dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYm9keVRleHQgOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcclxufSAqL1xyXG4uZ3JhbmRpZW50e1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZjM0NTMgMCUsICM0YzU1OGIgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pbWcye1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtdGlwMy5qcGcpO1xyXG59XHJcbi5waWMtQUN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLkhlYWRlci1Gb3JtLVN0eWxle1xyXG4gIGhlaWdodDogNjUwcHg7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjliYWM7IFxyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMxcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMXB4O1xyXG59XHJcbi5jYXJkLVN0eWxle1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7ICBcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLm1hcmdpbi1Ub3AtMTB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLm1vdmluZ0NhcmRzLUlubmVye1xyXG4gIGhlaWdodDogNTUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTYwcHgpIHtcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gIC8qIC5hYm91dC1TdHlsZXtcclxuICAgaGVpZ2h0OiA3MDBweDtcclxuICB9ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgLmlubmVyLVRpcHtcclxuICAgIGhlaWdodDogNTU1cHg7IFxyXG4gIH1cclxuICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICB9XHJcbiAgLmNhcmQtYm9keXtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuLyogLmFib3V0LVN0eWxle1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiB9ICovXHJcbiAuaW5uZXItVGlwe1xyXG4gIGhlaWdodDogNTUwcHg7IFxyXG59XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC8qIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNTgwcHg7XHJcbiAgIH0gKi9cclxuICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgIH1cclxuICAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgfVxyXG4gIC5waWMtU3R5bGUge1xyXG4gICAgaGVpZ2h0OiA0NzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG59IFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIC8qIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbiAgIH0gKi9cclxuICAgLmlubmVyLVRpcHtcclxuICAgIGhlaWdodDogMzcwcHggIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICB9XHJcblxyXG59XHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbi5waWMtQUN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29sLW1kLTh7XHJcbiAgZmxleDogMCAwIDEwMC4wNjY2NjclO1xyXG4gIG1heC13aWR0aDogMTAwLjA2NjY2NyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLkhlYWRlci1Gb3JtLVN0eWxle1xyXG4gIGhlaWdodDogOTAwcHg7XHJcbiAgLyogbWFyZ2luLXJpZ2h0OiAtMjJweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmlubmVyLVRpcHtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi50aXAtSW1hZ2Uge1xyXG4gIGhlaWdodDogMTU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiA3NTBweDtcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8qIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDsgKi9cclxufVxyXG4ubG9nby1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubG9nby1TdWItVGV4dHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLyogLmNhcm91c2VsLVN0eWxlIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmRzLVN0YXRpYyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufVxyXG4udGlwLVN0eWxlIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5hYm91dC1TdHlsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjlweDtcclxuICB9XHJcbiAgLmNhcmRzLVN0YXRpY3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5jYXJkLUNhcm91c2Vse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjJweDsgKi9cclxuICB9XHJcbiAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuLm1vdmluZ0NhcmRzLUlubmVyIHtcclxuICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG4ubG9nb0JyYW5ke1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiAubG9nb0JyYW5kMntcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgLyogaGVpZ2h0OiA0ODBweDsgKi9cclxuICAgIG1hcmdpbi10b3A6IC0yM3B4O1xyXG4gICB9XHJcbiAgIC5kaXNwbGF5Tm9uZXtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG4gICAubG9nb1N0eWxle1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi50aXAtSW1hZ2V7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzRweCl7XHJcbi5jYXJkLVN0eWxle1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5tYXJnaW4tVG9wLTEwe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gIC8qIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNDMwcHg7XHJcbiAgIH0gKi9cclxuICAgLmV4cGVydC1Nb3RvLUJvZHl7XHJcbiAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICB9XHJcbiAgIC5leHBlcnQtTW90by1IZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5jaGVjay1DaXJjbGUtTW90b3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnNob3dBYm91dHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcC1UZXh0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbiAgaGVpZ2h0OiAzMTVweCAhaW1wb3J0YW50OyBcclxufVxyXG4vKiAuYWJvdXRTe1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufSAqL1xyXG4vKiAuY2FyZHtcclxuICBoZWlnaHQ6IDBweDtcclxufSAqL1xyXG4vKiAubW92aW5nQ2FyZHMge1xyXG4gIGhlaWdodDogNTUwcHggIWltcG9ydGFudDtcclxuIH0gKi9cclxuLmNhcmQtYm9keXtcclxuICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxufVxyXG4uYWJvdXQtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbiB9XHJcbi8qIC5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufVxyXG4uY2Fyb3VzZWwtU3R5bGV7XHJcbm1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxuLnBpYy1TdHlsZSB7XHJcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvU3R5bGV7XHJcbmhlaWdodDogMTcwcHg7XHJcbnBhZGRpbmctdG9wOiA3NHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn0gIFxyXG4vKiAubW92aW5nQ2FyZHMtSW5uZXIge1xyXG4gIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG59ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpe1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateExtraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-private-extra',
                templateUrl: './private-extra.component.html',
                styleUrls: ['./private-extra.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ykogan\alaska_systems\alaska-systems-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map