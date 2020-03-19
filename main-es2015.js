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






const routes = [
    { path: '', component: _private_private_component__WEBPACK_IMPORTED_MODULE_2__["PrivateComponent"] },
    { path: 'business', component: _business_business_component__WEBPACK_IMPORTED_MODULE_3__["BusinessComponent"] }
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function AppComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 44);
} }
function AppComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 45);
} }
const _c0 = function () { return [""]; };
const _c1 = function () { return ["business"]; };
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 95, vars: 25, consts: [["dir", "rtl", 1, "navbar", "navbar-expand-sm", "gb-dark", "navbar-Style"], [1, "row", "container-fluid"], [1, "example-sidenav-content", "col-xs-1", "navButton"], ["type", "button", "mat-button", "", 3, "click"], ["class", "fa fa-bars", "style", "font-size: 30px;", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times", "style", "font-size: 30px;", "aria-hidden", "true", 4, "ngIf"], [1, "col-2", "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "col", "moto"], [1, "text-Style-Header"], [1, "col-3", "container-fluid", "mini-Style-Header"], [1, "navbar-nav", "mini-Style-Body"], [1, "nav-item"], ["href", "https://www.facebook.com/profile.php?id=100048382270443", 1, "nav-link", "facebook-Style"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square"], ["href", "tel:0533504818", 1, "nav-link", "phone-Style"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], ["href", "#", 1, "nav-link", "instegram-Style"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "https://api.whatsapp.com/send?phone=+9720533504818&text=\u05E9\u05DC\u05D5\u05DD \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF\\\u05D4\u05EA\u05E7\u05E0\u05D4 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF", 1, "nav-link", "whatsapp-Style"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp"], ["href", "mailto:alaska19000@gmail.com", 1, "nav-link", "envelope-Style"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o"], ["dir", "rtl", 1, "container-fluid", 2, "height", "400px", "position", "absolute", "padding-right", "0px !important", "z-index", "100", "position", "absolute"], ["autosize", "", 1, "example-container", 2, "background-color", "transparent", "border", "none"], ["mode", "side", 1, "example-sidenav", "menu-Style"], ["drawer", ""], [2, "font-family", "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"], [1, "menu"], [2, "font-family", "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", 3, "routerLink", "fragment"], [2, "font-family", "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", 3, "routerLink"], [3, "routerLink", "fragment"], [1, "row", "footer-Style"], [1, "col"], [1, "container-fluid", 2, "text-align", "center"], [1, "myMoto"], [1, "row", 2, "text-align", "center"], ["href", "https://www.facebook.com/yuval.kogan.5", 1, "nav-link", "facebook-Style-Bottom"], ["href", "tel:0508451651", 1, "nav-link", "phone-Style-Bottom"], ["href", "https://api.whatsapp.com/send?phone=+972508451651&text=\u05E9\u05DC\u05D5\u05DD \u05D9\u05D5\u05D1\u05DC, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8", 1, "nav-link", "whatsapp-Style-Bottom"], ["href", "mailto:yuvalkogan84@gmail.com", 1, "nav-link", "envelope-Style-Bottom"], [1, "col-1", "arrow-Style"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", "arrow-Style-Font"], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "font-size", "30px"], ["aria-hidden", "true", 1, "fa", "fa-times", 2, "font-size", "30px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32); _r7.toggle(); return ctx.changeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_i_4_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_i_5_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u05D7\u05D1\u05E8\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05D8\u05D5\u05D1\u05D4 \u05D1\u05D0\u05D6\u05D5\u05E8, \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05D7\u05E8\u05EA \u05D8\u05D5\u05D1");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E8\u05D0\u05E9\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05E1\u05E7\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05DE\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u05D8\u05D9\u05E4\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05E0\u05D1\u05E0\u05D4 \u05E2\"\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u05D9\u05D5\u05D1\u05DC \u05E7\u05D5\u05D2\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navButton == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navButton == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0))("fragment", "gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("fragment", "recommendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("fragment", "tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("fragment", "gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0))("fragment", "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0))("fragment", "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0))("fragment", "about");
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding-top: 0 ;\r\n    padding-bottom: 0 ;\r\n    margin-right: 0;\r\n    font-size: 1.25rem;\r\n    line-height: inherit;\r\n    white-space: nowrap;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    border-color: blue;\r\n    background-color: black;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 250px; \r\n  height: 69px;\r\n  border-left: 1px solid black;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.text-Style-Header[_ngcontent-%COMP%]{\r\n    \r\n    height: 69px;\r\n    margin-bottom: 0;\r\n    margin-top: 0;\r\n    padding-top: 14px;\r\n    \r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    text-align: center;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    height: 500px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 26px;\r\n    width: 330px;\r\n    text-align: right;\r\n    background-color: black;\r\n    color: white;\r\n    position: fixed;\r\n    margin-top: 85px;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    visibility: visible;\r\n    height: 440px;\r\n    border-bottom-left-radius: 20px;\r\n  }\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 20px; \r\n    color: white; \r\n    \r\n  }\r\n.menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(61, 43, 226);\r\n    color: white !important;\r\n    text-decoration: none;\r\n  }\r\n.facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 10px; \r\n    margin-right: 5px;\r\n    margin-top: -10px;\r\n  }\r\n.phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.phone-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: deeppink; \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.instegram-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: rgb(177, 15, 101); \r\n  }\r\n.whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.whatsapp-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: red; \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.envelope-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkred; \r\n  }\r\n\r\n.facebook-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 580px; \r\n    margin-right: 5px;\r\n    margin-top: -30px;\r\n  }\r\n.phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.phone-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.whatsapp-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: red; \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.envelope-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkred; \r\n  }\r\n.mini-Style-Header[_ngcontent-%COMP%]{\r\n    margin-top: -30px;\r\n    height: 99px;\r\n    margin-bottom: -15px;\r\n    margin-left: -46px;\r\n    text-align: right;\r\n    background-color: black;\r\n  }\r\n.mini-Style-Body[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: black;\r\n    margin-top: -15px;\r\n    margin-bottom: -30px;\r\n    height: 85px;\r\n    padding-top: 10px;\r\n    margin-left: 0px;\r\n    width: 110%;\r\n  }\r\n.navButton[_ngcontent-%COMP%]{\r\n    color: white;\r\n    height: 84px;\r\n    margin-right: -16px;\r\n    background-color: black;\r\n    margin-top: -16px;\r\n    margin-bottom: -16px;\r\n    z-index: 1000;\r\n  }\r\n.footer-Style[_ngcontent-%COMP%]{\r\n    height: 300px; \r\n    background-color: rgb(32, 30, 53); \r\n    text-align: center; \r\n    padding-top: 120px; \r\n    color: white; width: 100; \r\n    margin-right: 0px;\r\n  }\r\n.footer-Logo[_ngcontent-%COMP%]{\r\n      height: 100px; \r\n      background-color: rgb(32, 30, 53); \r\n      text-align: center; \r\n  }\r\n.arrow-Style-Font[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: white;\r\n  }\r\n.arrow-Style[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: white;\r\n    margin-right: 0px;\r\n  }\r\n.navbar-Style[_ngcontent-%COMP%]{\r\n    z-index: 1000;\r\n    top: 0;\r\n    position: fixed;\r\n    background-color: white;\r\n    border-bottom: 1px solid black;\r\n    right: 0;\r\n    left: 0;\r\n  }\r\n.myMoto[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n.menu-Style[_ngcontent-%COMP%]{\r\n    background-color: black; \r\n    color: white;\r\n    right: 0 !important;\r\n  }\r\n@media only screen and (max-width: 1560px) {\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1500px) {\r\n  .text-Style-Header[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 28%;\r\n    max-width: 28%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -15px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n.text-Style-Header[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\r\n.mini-Style-Header[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 31% ;\r\n  max-width: 31% ;\r\n}\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 36%;\r\n    max-width: 36%;\r\n  }\r\n  .text-Style-Header[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    padding-right: 50px;\r\n }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n  .moto[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 42%;\r\n    max-width: 42%;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n}\r\n.facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n  margin-left: 410px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 52%;\r\n    max-width: 52%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -12px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 310px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 45%;\r\n    max-width: 45%;\r\n    \r\n  }\r\n  .mini-Style-Body[_ngcontent-%COMP%]{\r\n    height: 64px;\r\n    padding-right: 5px;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n    \r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-right: -5px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -14px;\r\n  }\r\n  .footer-Style[_ngcontent-%COMP%] {\r\n    margin-right: -20px;\r\n  }\r\n  .arrow-Style[_ngcontent-%COMP%]{\r\n    margin-right: 40px !important;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 210px;\r\n  }\r\n}\r\n@media only screen and (max-width: 650px){\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-right: -5px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 125px;\r\n  }\r\n}\r\n@media only screen and (max-width: 610px){\r\n  .displayNone[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .navbar-Style[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    height: 85px;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n    margin-right: -8px;\r\n    margin-bottom: -17px;\r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 15px;\r\n    margin-right: 75px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 125px;\r\n  }\r\n  .menu-Style[_ngcontent-%COMP%]{\r\n    margin-top: 69px;\r\n  }\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n \r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 180px; \r\n    height: 55px;\r\n  }\r\n  .navbar-nav[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n            flex-direction: row !important;\r\n  }\r\n}\r\n@media only screen and (max-width: 574px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%] {\r\n    height: 72px;\r\n    margin-top: -60px;\r\n    padding-bottom: 0px;\r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 40px;\r\n    margin-right: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 40px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -17px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n}\r\n.facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n  margin-left: 100px;\r\n}\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n  .arrow-Style-Font[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n  }\r\n}\r\n@media only screen and (max-width: 450px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 15px;\r\n    margin-right: 65px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 80px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n  }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 150px; \r\n    height: 50px;\r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 40px;\r\n  }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 130px; \r\n    height: 45px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    height: 78px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%] {\r\n    height: 69px;\r\n    margin-bottom: -18px;\r\n}\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 20px;\r\n    margin-right: 10px;\r\n    margin-top: -17px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .menu-Style[_ngcontent-%COMP%]{\r\n    width: 370px;\r\n    border-bottom-left-radius: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n    margin-left: 20px;\r\n    margin-right: 5px;\r\n    margin-top: -15px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px;  \r\n    margin-left: 20px;\r\n    margin-top: -15px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px; \r\n    margin-left: 20px;\r\n    margin-top: -15px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px; \r\n    margin-left: 20px;\r\n    margin-top: -15px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px; \r\n    margin-left: 20px;\r\n    margin-top: -15px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    margin-left: 15px;\r\n    margin-right: 5px;\r\n    margin-top: -12px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 15px;\r\n    margin-top: -12px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -12px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -12px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -12px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixxR0FBcUc7SUFDckcsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBZTtZQUFmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLCtCQUErQjtFQUNqQztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDO0FBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFD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Q1osOEJBQThCO0VBQ2hDO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAwIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwIDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubG9nb1N0eWxle1xyXG4gIHdpZHRoOiAyNTBweDsgXHJcbiAgaGVpZ2h0OiA2OXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmRpc3BsYXlOb25le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGV4dC1TdHlsZS1IZWFkZXJ7XHJcbiAgICAvKmJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7Ki9cclxuICAgIGhlaWdodDogNjlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICAvKnBhZGRpbmctbGVmdDogMTBweDsqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nOiAyNnB4O1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDg1cHg7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgaGVpZ2h0OiA0NDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIC5tZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlOyovXHJcbiAgfVxyXG4gIC5tZW51IDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNDMsIDIyNik7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmdiKDEzLCAxNzksIDEzKTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGUgOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjsgXHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgY29sb3I6IGRlZXBwaW5rOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGUgOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigxNzcsIDE1LCAxMDEpOyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiByZ2IoMTMsIDE3OSwgMTMpOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya2dyZWVuOyBcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiByZWQ7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxlIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrcmVkOyBcclxuICB9XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNTgwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmdiKDEzLCAxNzksIDEzKTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGUtQm90dG9tIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47IFxyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiByZ2IoMTMsIDE3OSwgMTMpOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b20gOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjsgXHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgY29sb3I6IHJlZDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9tIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrcmVkOyBcclxuICB9XHJcblxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgaGVpZ2h0OiA5OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQ2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLm1pbmktU3R5bGUtQm9keXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgfVxyXG5cclxuICAubmF2QnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLVN0eWxle1xyXG4gICAgaGVpZ2h0OiAzMDBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMwLCA1Myk7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmctdG9wOiAxMjBweDsgXHJcbiAgICBjb2xvcjogd2hpdGU7IHdpZHRoOiAxMDA7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLUxvZ297XHJcbiAgICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMwLCA1Myk7IFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIH1cclxuICAuYXJyb3ctU3R5bGUtRm9udHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5hcnJvdy1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLVN0eWxle1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAubWVudS1TdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTYwcHgpIHtcclxuICAubmF2QnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgLnRleHQtU3R5bGUtSGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gIH1cclxuICAubWluaS1TdHlsZS1IZWFkZXJ7XHJcbiAgICBmbGV4OiAwIDAgMjglO1xyXG4gICAgbWF4LXdpZHRoOiAyOCU7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbi50ZXh0LVN0eWxlLUhlYWRlcntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gIGZsZXg6IDAgMCAzMSUgO1xyXG4gIG1heC13aWR0aDogMzElIDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCAzNiU7XHJcbiAgICBtYXgtd2lkdGg6IDM2JTtcclxuICB9XHJcbiAgLnRleHQtU3R5bGUtSGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW90b3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCA0MiU7XHJcbiAgICBtYXgtd2lkdGg6IDQyJTtcclxuICB9XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG59XHJcbi5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MTBweDtcclxufVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWluaS1TdHlsZS1IZWFkZXJ7XHJcbiAgICBmbGV4OiAwIDAgNTIlO1xyXG4gICAgbWF4LXdpZHRoOiA1MiU7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMTBweDtcclxuICB9XHJcbn0gXHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCA0NSU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgIC8qaGVpZ2h0OiA5NHB4OyovXHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUJvZHl7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5sb2dvU3R5bGV7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIC8qaGVpZ2h0OiA2M3B4OyovXHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogLTE0cHg7XHJcbiAgfVxyXG4gIC5mb290ZXItU3R5bGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxuICB9XHJcbiAgLmFycm93LVN0eWxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xyXG4gIH1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpe1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCl7XHJcbiAgLmRpc3BsYXlOb25le1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm5hdmJhci1TdHlsZXtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcbiAgLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTdweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgfVxyXG4gIC5tZW51LVN0eWxle1xyXG4gICAgbWFyZ2luLXRvcDogNjlweDtcclxuICB9XHJcbiAgLyogLmxvZ29TdHlsZXtcclxuICAgIHdpZHRoOiAxODBweDsgXHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgfSAqL1xyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gXHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIHdpZHRoOiAxODBweDsgXHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NHB4KSB7XHJcbiAgLm1pbmktU3R5bGUtSGVhZGVyIHtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubXlNb3RvIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4uZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5teU1vdG97XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC5hcnJvdy1TdHlsZS1Gb250e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5sb2dvU3R5bGV7XHJcbiAgICB3aWR0aDogMTUwcHg7IFxyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAubG9nb1N0eWxle1xyXG4gICAgd2lkdGg6IDEzMHB4OyBcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcbiAgLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gICAgaGVpZ2h0OiA3OHB4O1xyXG4gIH1cclxuICAubmF2QnV0dG9uIHtcclxuICAgIGhlaWdodDogNjlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xOHB4O1xyXG59XHJcbiAgLmZhY2Vib29rLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLm15TW90b3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGUtQm90dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZS1Cb3R0b217XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcclxuICB9XHJcbiAgLm1lbnUtU3R5bGV7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLmZhY2Vib29rLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGUtQm90dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4OyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxlLUJvdHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDsgXHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZS1Cb3R0b217XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7IFxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICB9XHJcbiAgLm15TW90b3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn0iXX0= */"] });
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
        _business_business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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


class BusinessComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BusinessComponent.ɵfac = function BusinessComponent_Factory(t) { return new (t || BusinessComponent)(); };
BusinessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusinessComponent, selectors: [["app-business"]], decls: 3, vars: 0, consts: [[1, "container-fluid", 2, "height", "400px", "background-color", "yellow"]], template: function BusinessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "business works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzL2J1c2luZXNzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-business',
                templateUrl: './business.component.html',
                styleUrls: ['./business.component.css']
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function PrivateComponent_h6_249_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_h6_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_h6_266_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_h6_278_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrivateComponent_h5_286_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");
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
    }
    sendMeMail() {
        this.sendMAil = 1;
    }
    submit() {
    }
    ngOnInit() {
    }
}
PrivateComponent.ɵfac = function PrivateComponent_Factory(t) { return new (t || PrivateComponent)(); };
PrivateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivateComponent, selectors: [["app-private"]], decls: 287, vars: 47, consts: [[1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], ["id", "about", 1, "row", "aboutS"], ["src", "../../assets/about3.jpg", 1, "about-Style"], ["id", "gallery", "data-ride", "carousel", 1, "row", "carousel", "slide", "carousel-Style"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], ["data-target", "#gallery", "data-slide-to", "4"], ["data-target", "#gallery", "data-slide-to", "5"], ["data-target", "#gallery", "data-slide-to", "6"], ["data-target", "#gallery", "data-slide-to", "7"], ["data-target", "#gallery", "data-slide-to", "8"], ["data-target", "#gallery", "data-slide-to", "9"], ["data-target", "#gallery", "data-slide-to", "10"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/work1a.jpg", "alt", "...", 1, "pic-Style"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "../../assets/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work3.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work4c.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work5a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work6a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work7a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work8a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work9.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work10.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work11.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], [1, "expert-Moto-Header"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px", "margin-top", "10px"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-body", "grandient"], [1, "card-title", 2, "text-align", "center"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card", "card-Style"], ["src", "../../assets/gallery/nahshon2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-group", "margin-top-10"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-group", 2, "margin-bottom", "100px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["id", "privateSector", 1, "container-fluid", "expert-Moto-Header", 2, "margin-bottom", "100px"], [1, "text-Right", 2, "color", "blue"], ["aria-hidden", "true", 1, "fa", "fa-home", 2, "font-size", "40px", "color", "blue"], [1, "text-Right"], ["id", "tips", "data-ride", "carousel", 1, "row", "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"]], template: function PrivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "First slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Second slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Third slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Fourth slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Fourth slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Fourth slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Fourth slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Fourth slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Fourth slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Fourth slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Fourth slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h4", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "VRF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Water Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "b", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, ": \u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D0\u05D7\u05D6\u05E7\u05D4 \u05DC\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h4", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " ,\u05D7\u05D1\u05E8\u05EA\u05E0\u05D5 \u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D0\u05D7\u05D6\u05E7\u05D4 \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D1\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " ,\u05D0\u05E0\u05D5 \u05E0\u05D5\u05EA\u05E0\u05D9\u05DD \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05E9\u05E8 \u05E7\u05D9\u05D9\u05DE\u05D5\u05EA \u05D1\u05E9\u05D5\u05E7 \u05E2\"\u05D9 \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05E9\u05E8 \u05E4\u05E8\u05D5\u05E1\u05D4 \u05D1\u05DB\u05DC \u05D0\u05D9\u05D6\u05D5\u05E8 \u05D4\u05E6\u05E4\u05D5\u05DF, \u05D4\u05E9\u05E8\u05D5\u05DF, \u05D5\u05D4\u05DE\u05E8\u05DB\u05D6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\n\u05D5\u05DE\u05E1\u05E4\u05E7\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA \u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05DE\u05D4\u05D9\u05E8 \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D4\u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05D3 24 \u05E9\u05E2\u05D5\u05EA \u05DE\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05EA\u05E7\u05DC\u05D4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "li", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "li", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "li", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "li", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "h5", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "b", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_247_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, PrivateComponent_h6_249_Template, 2, 0, "h6", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h5", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "b", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_255_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](257, PrivateComponent_h6_257_Template, 2, 0, "h6", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h5", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "b", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_264_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](266, PrivateComponent_h6_266_Template, 2, 0, "h6", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "h5", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_270_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h5", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "b", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_276_listener($event) { return ctx.cellNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](278, PrivateComponent_h6_278_Template, 2, 0, "h6", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h5", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "textarea", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_textarea_ngModelChange_283_listener($event) { return ctx.reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](286, PrivateComponent_h5_286_Template, 2, 0, "h5", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, ctx.lastName, !ctx.lastName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c1, ctx.firstName, !ctx.firstName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](36, _c1, ctx.city, !ctx.city));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](39, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](42, _c1, ctx.cellNumber, !ctx.cellNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Dir"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n    height: 50px !important;\r\n    top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n    background-size: contain; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    height: 750px !important; \r\n    width: 100% !important;\r\n}\r\n\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  text-align: center; \r\n  height: 700px; \r\n  padding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    height: 300px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n.tip-Style[_ngcontent-%COMP%]{\r\n    border-bottom: 5px solid white;\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    background-image: url('background-tip3.jpg');\r\n  }\r\n.about-Style[_ngcontent-%COMP%]{\r\n    margin-top: -8px;\r\n    margin-bottom: 25px;\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    width: 100% !important;\r\n    padding-top: 70px; \r\n    height: 800px; \r\n    \r\n    border-bottom: 5px solid white;\r\n  }\r\n.pic1[_ngcontent-%COMP%]{\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    width: 100% !important;\r\n    height: 300px;  \r\n  }\r\n.aboutS[_ngcontent-%COMP%]{\r\n    margin-right: -20px;\r\n  }\r\n.img[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n  }\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    background-color: #45a049;\r\n  }\r\n.form-Style[_ngcontent-%COMP%]{\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    width: 103% !important;\r\n    height: 100%;\r\n  }\r\n.tip-Image[_ngcontent-%COMP%]{\r\n    height: 170px;\r\n    margin-top: 0px;\r\n  }\r\n.whiteColor[_ngcontent-%COMP%]{\r\n    color: white;\r\n  }\r\n.redColor[_ngcontent-%COMP%]{\r\n    color: red;\r\n  }\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 20px; \r\n    margin-top: 50px;\r\n  }\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n    margin-top :-24px; \r\n    border-bottom: 5px solid white; \r\n    margin-right: -19px;\r\n  }\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n     color: green;\r\n  }\r\n.text-Right[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n  }\r\n.about-Header[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n    color: white; \r\n    text-align: right; \r\n    padding-right: 25%;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  }\r\n.about-Body[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color: white; \r\n    text-align: right; \r\n    padding-right: 45%; \r\n    margin-top: 150px; \r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  }\r\n.logoStyle[_ngcontent-%COMP%]{\r\n    width: 100%; \r\n    height: 200px;\r\n  }\r\n.displayNone[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n    background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n    color: white;\r\n  }\r\n.img2[_ngcontent-%COMP%]{\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    background-image: url('background-tip.jpg');\r\n  }\r\n.pic-AC[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n    height: 500px; \r\n    background-color: #529bac; \r\n    border-bottom: 5px solid white; \r\n    margin-right: 0px;\r\n  }\r\n.card-Style[_ngcontent-%COMP%]{\r\n    margin-left: 30px !important; \r\n    margin-top: 10px; \r\n    margin-right: 30px;\r\n  }\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n  }\r\n@media only screen and (max-width: 1560px) {\r\n\r\n  }\r\n@media only screen and (max-width: 1400px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n     height: 700px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1300px) {\r\n    .inner-Tip[_ngcontent-%COMP%]{\r\n      height: 555px; \r\n    }\r\n  }\r\n@media only screen and (max-width: 1200px) {\r\n\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 600px;\r\n   }\r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 500px; \r\n  }\r\n  }\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n      height: 580px;\r\n     }\r\n     .carousel-inner[_ngcontent-%COMP%] {\r\n      height: 450px !important;\r\n     }\r\n     .tip-Image[_ngcontent-%COMP%]{\r\n      height: 140px;\r\n    }\r\n    .pic-Style[_ngcontent-%COMP%] {\r\n      height: 470px !important;\r\n  }\r\n  }\r\n@media only screen and (max-width: 850px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n      height: 520px;\r\n     }\r\n     .inner-Tip[_ngcontent-%COMP%]{\r\n      height: 370px !important; \r\n    }\r\n    .tip-Image[_ngcontent-%COMP%]{\r\n      height: 120px;\r\n    }\r\n\r\n  }\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .pic-AC[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .col-md-8[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100.066667%;\r\n    max-width: 100.066667%;\r\n    padding-left: 40px;\r\n    padding-right: 20px;\r\n  }\r\n  .Header-Form-Style[_ngcontent-%COMP%]{\r\n    height: 760px;\r\n    margin-right: -18px;\r\n  }\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 280px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    margin-top: -40px;\r\n}\r\n  }\r\n@media only screen and (max-width: 700px) {\r\n    .tip-Image[_ngcontent-%COMP%] {\r\n      margin-top: -15px;\r\n  }\r\n  }\r\n\r\n@media only screen and (max-width: 610px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n      height: 480px;\r\n      margin-top: -23px;\r\n     }\r\n     .displayNone[_ngcontent-%COMP%]{\r\n       display: block;\r\n     }\r\n     .logoStyle[_ngcontent-%COMP%]{\r\n      height: 180px;\r\n      padding-top: 50px;\r\n      padding-left: 20px;\r\n  }\r\n}\r\n@media only screen and (max-width: 574px){\r\n  .card-Style[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  .margin-Top-10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n}\r\n@media only screen and (max-width: 530px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n      height: 430px;\r\n     }\r\n     .expert-Moto-Body[_ngcontent-%COMP%]{\r\n       font-size: 20px;\r\n     }\r\n     .expert-Moto-Header[_ngcontent-%COMP%]{\r\n      text-align: center; \r\n      padding-right: 0px; \r\n      margin-top: 50px;\r\n    }\r\n    .check-Circle-Moto[_ngcontent-%COMP%]{\r\n      font-size: 30px;\r\n       color: green;\r\n    }\r\n    .tip-Image[_ngcontent-%COMP%] {\r\n      margin-top: 0px;\r\n  }\r\n  }\r\n@media only screen and (max-width: 400px) {\r\n    .carousel-inner[_ngcontent-%COMP%] {\r\n      height: 420px;\r\n  }\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    margin-top: -27px;\r\n   }\r\n  .carousel[_ngcontent-%COMP%] {\r\n    margin-right: -22px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-right: -22px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  height: 85px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  height: 170px;\r\n  padding-top: 74px;\r\n  padding-left: 20px;\r\n}\r\n}\r\n@media only screen and (max-width: 350px){\r\n\r\n}\r\n@media only screen and (max-width: 300px) {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9wcml2YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCO0FBQ0E7Ozs7OztHQU1HO0FBQ0g7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0VBQ3RDO0FBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0Q0FBdUQ7RUFDekQ7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDhCQUE4QjtFQUNoQztBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLGFBQWE7SUFD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ZmlsZSI6InNyYy9hcHAvcHJpdmF0ZS9wcml2YXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtY29udHJvbC1uZXh0LCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4ucGljLVN0eWxle1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3NTBweCAhaW1wb3J0YW50OyBcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLnRpcC1TdHlsZXtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyBcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59ICovXHJcbi5pbm5lci1UaXB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIGhlaWdodDogNzAwcHg7IFxyXG4gIHBhZGRpbmctdG9wOiAxMiU7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC50aXAtU3R5bGV7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcDMuanBnKTtcclxuICB9XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4OyBcclxuICAgIGhlaWdodDogODAwcHg7IFxyXG4gICAgLyogLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMmM1YWMzOyAgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgLnBpYzF7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzAwcHg7ICBcclxuICB9XHJcbiAgLmFib3V0U3tcclxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuaW1nIDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0IDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG4gIH1cclxuICAuZm9ybS1TdHlsZXtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAzJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLndoaXRlQ29sb3J7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5yZWRDb2xvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5leHBlcnQtTW90by1Cb2R5e1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgLmNhcm91c2VsLVN0eWxle1xyXG4gICAgbWFyZ2luLXRvcCA6LTI0cHg7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlOyBcclxuICAgIG1hcmdpbi1yaWdodDogLTE5cHg7XHJcbiAgfVxyXG4gIC5jaGVjay1DaXJjbGUtTW90b3tcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIC50ZXh0LVJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5hYm91dC1IZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMjUlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5hYm91dC1Cb2R5e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1JTsgXHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDsgXHJcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC5kaXNwbGF5Tm9uZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIC5ib2R5VGV4dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYm9keVRleHQgOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG4gIH0gKi9cclxuICAuZ3JhbmRpZW50e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJmMzQ1MyAwJSwgIzRjNTU4YiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmltZzJ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcC5qcGcpO1xyXG4gIH1cclxuICAucGljLUFDe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5IZWFkZXItRm9ybS1TdHlsZXtcclxuICAgIGhlaWdodDogNTAwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOWJhYzsgXHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLVN0eWxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcbiAgLm1hcmdpbi1Ub3AtMTB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KSB7XHJcblxyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgLmFib3V0LVN0eWxle1xyXG4gICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuaW5uZXItVGlwe1xyXG4gICAgICBoZWlnaHQ6IDU1NXB4OyBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgIH1cclxuICAgLmlubmVyLVRpcHtcclxuICAgIGhlaWdodDogNTAwcHg7IFxyXG4gIH1cclxuICB9XHJcbiAgXHJcbiAgLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5hYm91dC1TdHlsZXtcclxuICAgICAgaGVpZ2h0OiA1ODBweDtcclxuICAgICB9XHJcbiAgICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgaGVpZ2h0OiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICAudGlwLUltYWdle1xyXG4gICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgLnBpYy1TdHlsZSB7XHJcbiAgICAgIGhlaWdodDogNDcwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgfSBcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgLmFib3V0LVN0eWxle1xyXG4gICAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgIH1cclxuICAgICAuaW5uZXItVGlwe1xyXG4gICAgICBoZWlnaHQ6IDM3MHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLnRpcC1JbWFnZXtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIC8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucGljLUFDe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmNvbC1tZC04e1xyXG4gICAgZmxleDogMCAwIDEwMC4wNjY2NjclO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAuMDY2NjY3JTtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5IZWFkZXItRm9ybS1TdHlsZXtcclxuICAgIGhlaWdodDogNzYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOHB4O1xyXG4gIH1cclxuICAuaW5uZXItVGlwe1xyXG4gICAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbn1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC50aXAtSW1hZ2Uge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAgIC5hYm91dC1TdHlsZXtcclxuICAgICAgaGVpZ2h0OiA0ODBweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTIzcHg7XHJcbiAgICAgfVxyXG4gICAgIC5kaXNwbGF5Tm9uZXtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIH1cclxuICAgICAubG9nb1N0eWxle1xyXG4gICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NHB4KXtcclxuICAuY2FyZC1TdHlsZXtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubWFyZ2luLVRvcC0xMHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gICAgLmFib3V0LVN0eWxle1xyXG4gICAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgIH1cclxuICAgICAuZXhwZXJ0LU1vdG8tQm9keXtcclxuICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICB9XHJcbiAgICAgLmV4cGVydC1Nb3RvLUhlYWRlcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgcGFkZGluZy1yaWdodDogMHB4OyBcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAgIC5jaGVjay1DaXJjbGUtTW90b3tcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG4gICAgLnRpcC1JbWFnZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgfVxyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIG1hcmdpbi10b3A6IC0yN3B4O1xyXG4gICB9XHJcbiAgLmNhcm91c2VsIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn1cclxuLmNhcm91c2VsLVN0eWxle1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn1cclxuLnRpcC1JbWFnZXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogODVweDtcclxuICB9XHJcbiAgLnBpYy1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA3NHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcclxuXHJcbn1cclxuICBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-private',
                templateUrl: './private.component.html',
                styleUrls: ['./private.component.css']
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