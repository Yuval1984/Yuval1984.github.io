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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "align": a0 }; };
const _c1 = function (a0) { return { "pic": a0 }; };
const _c2 = function (a0) { return { "hover": a0 }; };
class AppComponent {
    constructor() {
        this.title = 'NewSite';
        this.mailhover = 0;
        this.picture = 0;
    }
    changeMail() {
        this.mailhover = 1;
    }
    unChangeMail() {
        this.mailhover = 0;
    }
    showPicture() {
        this.picture = 1;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 135, vars: 9, consts: [["dir", "rtl", 1, "row", "container-fluid", "header-Style", "top-Style"], [1, "row", "container-fluid", "text-center"], [1, "col-3", "card"], [1, "col-6"], [1, "headline-Text", 2, "color", "white"], [1, "col-2", "image2", 3, "mouseenter"], [1, "container-fluid", "text-center"], [1, "miidle-Headline-Text", 2, "font-weight", "bold", "margin-top", "-120px", "color", "white"], [1, "container-fluid", "text-center", 2, "margin-top", "-10px"], [1, "bottom-Text", 2, "color", "brown"], [1, "row", "container-fluid"], [1, "col", "text-center"], [1, "bottom-Text", 2, "color", "white", "margin-right", "255px", "margin-bottom", "40px", 3, "ngClass"], [1, "col-2", 3, "ngClass"], [1, "H", "row", "container-fluid"], [1, "col", "extra"], [1, "col-1", "image-Style", "image1", "border-Radius-Left"], [1, "col-1", "image-Style", "image3"], [1, "col-1", "image-Style", "border-Radius-Right", "image4"], [1, "col", "brand1"], [1, "col", "brand2"], [1, "col", "brand3"], [1, "col", "brand4"], [1, "col", "brand5"], [1, "col", "brand6"], [1, "col", "brand7"], ["dir", "rtl", 1, "row", "container-fluid", 2, "background-color", "aliceblue", "height", "300px", "margin-top", "20px"], [1, "col", "m-Top", 2, "text-align", "right"], [1, "text"], [1, "text1"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "row", 2, "height", "450px"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "5"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "text-align", "center"], ["src", "../assets/meyabesh.jpg", "alt", "First slide", 2, "margin-bottom", "40px"], [1, "carousel-caption", "d-none", "d-md-block", 2, "color", "black"], [1, "carousel-Text"], [1, "carousel-item", 2, "text-align", "center"], ["src", "../assets/refrigirator.jpg", "alt", "second slide", 2, "margin-bottom", "70px"], ["src", "../assets/oven builtIn.jpg", "alt", "Third slide", 2, "margin-bottom", "50px"], ["src", "../assets/micro.png", "alt", "Fourth slide", 2, "margin-bottom", "60px"], ["src", "../assets/oven.gif", "alt", "Fifth slide", 2, "margin-bottom", "70px"], ["src", "../assets/washing.jpg", "alt", "Sixth slide", 2, "margin-bottom", "70px"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["dir", "rtl", 1, "Contact", "row", "container-fluid", 2, "margin-top", "10px"], [1, "col"], [2, "text-align", "right", "margin-right", "30px", "margin-top", "10px"], [1, "contact-Header"], [1, "row", "container-fluid", "top"], ["dir", "rtl", "placeholder", "\u05E9\u05DD \u05DE\u05DC\u05D0", 1, "input-Style"], ["dir", "rtl", "placeholder", "\u05DE\u05E1 \u05D8\u05DC\u05E4\u05D5\u05DF", 1, "input-Style"], ["dir", "rtl", "placeholder", "\u05D0\u05D9 \u05DE\u05D9\u05D9\u05DC", 1, "input-Style"], [2, "float", "right", "margin-right", "41px"], [1, "btn", "btn-warning", 2, "width", "200px", "border-radius", "30px"], [1, "mail-mini", 3, "ngClass", "mouseenter", "mouseleave"], [1, "whatsapp-mini"], [1, "facebook-mini"], [1, "phone-mini"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05D8\u05DB\u05E0\u05D5 \u05D2'\u05D5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_div_mouseenter_6_listener($event) { return ctx.showPicture(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05D8\u05DB\u05E0\u05D0\u05D9 \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05D1\u05D9\u05EA\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05D9\u05D9\u05E2\u05D5\u05E5 \u05D7\u05D9\u05E0\u05DD - \u05D0\u05D6\u05D5\u05E8 \u05D4\u05E9\u05E8\u05D5\u05DF \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05E9\u05E2\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4: 7:30 - 22:00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u05D4\u05E0\u05D3\u05E1\u05D0\u05D9 \u05D5\u05D8\u05DB\u05E0\u05D0\u05D9 \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD, \u05D7\u05E9\u05DE\u05DC\u05D0\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D5\u05E1\u05DE\u05DA \u05DC\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05D1\u05D9\u05EA\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D5\u05DE\u05E7\u05E4\u05D9\u05D0\u05D9\u05DD \u05DE\u05DB\u05DC \u05D4\u05E1\u05D5\u05D2\u05D9\u05DD \u05D5\u05D4\u05D7\u05D1\u05E8\u05D5\u05EA: \u05D3\u05D9\u05E1\u05E4\u05E8\u05D5\u05E1\u05D8, \u05E0\u05D5\u05E4\u05E8\u05D5\u05E1\u05D8, \u05D4\u05D9\u05D1\u05E8\u05D9\u05D3\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u05E9\u05DC\u05D9\u05D8\u05D4 \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D1\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u05DE\u05D5\u05DE\u05D7\u05D4 \u05D1\u05D7\u05D1\u05E8\u05D5\u05EA : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Samsung, Amana, Whirlpool, Beko, Amcor, Tadiran, Blumberg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u05DE\u05D9\u05DC\u05D5\u05D9 \u05D2\u05D6 \u05DC\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u05D4\u05D7\u05DC\u05E4\u05EA \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD, \u05D0\u05D9\u05D9\u05E1 \u05DE\u05D9\u05D9\u05E7\u05E8\u05D9\u05DD, \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D1\u05E7\u05E8\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u05D0\u05D6\u05D5\u05E8 \u05E2\u05D1\u05D5\u05D3\u05D4 : \u05DB\u05DC \u05D0\u05D6\u05D5\u05E8 \u05D4\u05E9\u05E8\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u05DE\u05E2\u05DC 10 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05E0\u05D5\u05D7\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05E2\u05DC \u05DB\u05DC \u05D4\u05D7\u05DC\u05E4\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ol", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05D9\u05D1\u05E9\u05D9 \u05DB\u05D1\u05D9\u05E1\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D1\u05E0\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05E7\u05E8\u05D5\u05D2\u05DC\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05DB\u05D1\u05D9\u05E1\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h4", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u05D4\u05DB\u05E0\u05E1 \u05E4\u05E8\u05D8\u05D9\u05DD \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u05E9\u05DC\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_div_mouseenter_131_listener($event) { return ctx.changeMail(); })("mouseleave", function AppComponent_Template_div_mouseleave_131_listener($event) { return ctx.unChangeMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.picture == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.picture == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.mailhover == 1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".H[_ngcontent-%COMP%]{\r\n    height: 220px;\r\n    background-color: #ffffff;\r\n    border-width: 1px;\r\n    \r\n    \r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n.header-Style[_ngcontent-%COMP%]{\r\n    height: 400px; \r\n    width: 100%;\r\n    background-color: brown;\r\n    box-shadow: 0 2px 20px 0 rgba(50, 50, 186, 0.16);\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.Contact[_ngcontent-%COMP%]{\r\n    background-color: #7dc9ff;\r\n    width: 100%; \r\n    height: 350px; \r\n    opacity: 1;\r\n}\r\n.top[_ngcontent-%COMP%]{\r\n    z-index: 10;\r\n}\r\n.input-Style[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 50px;\r\n    margin-top: 20px;\r\n    padding: 12px 20px;\r\n    margin-right: 25px;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n\r\n    box-sizing: border-box;\r\n    border-radius: 60px;\r\n}\r\n.mail-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 70px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('mail-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-top-right-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.hover[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    -webkit-transition-duration: 0.5s;\r\n            transition-duration: 0.5s;\r\n}\r\n.facebook-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 174px;\r\n    width: 66px;\r\n    height: 50px;\r\n    background-image: url('facebook-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n}\r\n.whatsapp-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 122px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('whatssapp-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.phone-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 226px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('phone-mini.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background-image: url('techno-jo-magnet.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 20px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    margin-top: 10px;\r\n    height: 200px;\r\n}\r\n.pic[_ngcontent-%COMP%]{\r\n    background-image: url('picture-jo.jpeg');\r\n    background-color: #cccccc;\r\n    border-radius: 20px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 0px;\r\n    \r\n    margin-top: -49px;\r\n    height: 400px;\r\n    margin-left: 125px;\r\n    position: absolute;\r\n    z-index: 10;\r\n    left: 30px;\r\n    top: 244px;\r\n}\r\n.align[_ngcontent-%COMP%]{\r\n    margin-left: 230px;\r\n}\r\n.image-Style[_ngcontent-%COMP%]{\r\n  background-color: bisque;\r\n  border-style: solid;\r\n  border-width: 5px;\r\n  border-color: black;\r\n  height: 125px;\r\n  margin-top: -30px;\r\n  margin-left: 2px;\r\n}\r\n.top-Style[_ngcontent-%COMP%]{\r\n    \r\n    background-image: -webkit-gradient(linear, left top, right top, from(white) , to(blue));\r\n    background-image: linear-gradient(to right, white , blue);\r\n}\r\n.border-Radius-Right[_ngcontent-%COMP%]{\r\n    border-top-right-radius: 6px;\r\n}\r\n.border-Radius-Left[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 6px;\r\n}\r\n.image1[_ngcontent-%COMP%]{\r\n    background-image: url('\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA-\u05DE\u05DC\u05D0\u05D42.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image2[_ngcontent-%COMP%]{\r\n    background-image: url('tzadik.jpg');\r\n    background-color: #cccccc;\r\n    border-radius: 20px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    background-color: bisque;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n    height: 125px;\r\n    margin-top: 70px;\r\n    margin-left: 2px;\r\n}\r\n.image3[_ngcontent-%COMP%]{\r\n    background-image: url('shake.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image4[_ngcontent-%COMP%]{\r\n    background-image: url('price.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.facebook[_ngcontent-%COMP%]{\r\n    background-image: url('facebook.png');\r\n    background-color: #cccccc; \r\n    border-radius: 20px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n}\r\n.whatsapp[_ngcontent-%COMP%]{\r\n    background-image: url('whatsapp.png');\r\n    background-color: #cccccc; \r\n    border-radius: 20px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n}\r\n.instegram[_ngcontent-%COMP%]{\r\n    background-image: url('instegram.png');\r\n    background-color: #cccccc; \r\n    border-radius: 20px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n}\r\n.headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n}\r\n.miidle-Headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n}\r\n.bottom-Text[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.m-Top[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    margin-left: 30px; \r\n    margin-top: 120px; \r\n    height: 120px; \r\n    width: 30px;\r\n}\r\n.contact-Header[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.carousel-Text[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n.text1[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n}\r\n.brand1[_ngcontent-%COMP%]{\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('amana-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand2[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('bloomberg-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand3[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Samsung-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand4[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('tadiran-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand5[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Whirlpool-brand1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand6[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('beko-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand7[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('brother-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n@media only screen and (max-width: 1346px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1200px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 100px; \r\n        width: 25px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1000px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 80px; \r\n        width: 20px;\r\n    }\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        height: 180px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 910px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 80px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 40px;\r\n    }\r\n    .bottom-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        height: 150px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 800px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 60px; \r\n        width: 15px;\r\n    }\r\n    .carousel-Text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 700px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 60px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n    }\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        height: 120px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 650px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 50px; \r\n        width: 10px;\r\n    }\r\n    .contact-Header[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 644px) {\r\n      .m-Top[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n      }\r\n      .text[_ngcontent-%COMP%]{\r\n          font-size: 15px;\r\n      }\r\n    \r\n    .image-Style[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 570px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 50px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 550px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .input-Style[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .contact-Header[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        height: 80px;\r\n    }\r\n    .extra[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .text[_ngcontent-%COMP%]{\r\n        margin-left: 80px;\r\n        font-size: 12px;\r\n    }\r\n    .m-Top[_ngcontent-%COMP%]{\r\n        margin-top: 5px;\r\n    }\r\n    .text1[_ngcontent-%COMP%]{\r\n        margin-top: -20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 500px) {\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        height: 60px;\r\n        border-width: 8px;\r\n    }\r\n    .extra[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .m-Top[_ngcontent-%COMP%]{\r\n        margin-top: 5px;\r\n    }\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 10px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 474px) {\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        height: 60px;\r\n        border-width: 5px;\r\n    }\r\n    .m-Top[_ngcontent-%COMP%]{\r\n        margin-top: 0px;\r\n    }\r\n    .extra[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .text1[_ngcontent-%COMP%]{\r\n        margin-top: -30px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 450px) {\r\n    .text1[_ngcontent-%COMP%]{\r\n        margin-top: -40px;\r\n    }\r\n  }\r\n.row[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n  }\r\n.column[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    flex-basis: 100%;\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCOztJQUV0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBOEM7SUFDOUMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBa0Q7SUFDbEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7O0FBRTFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBbUQ7SUFDbkQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFD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QUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGO0FBRUE7SUFDRTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtFQUNGO0FBRUE7SUFDRTtRQUNJLGlCQUFpQjtJQUNyQjtFQUNGO0FBQ0E7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztFQUNiO0FBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQU87WUFBUCxPQUFPO0VBQ1QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Ie1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uaGVhZGVyLVN0eWxle1xyXG4gICAgaGVpZ2h0OiA0MDBweDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoNTAsIDUwLCAxODYsIDAuMTYpO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uQ29udGFjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZGM5ZmY7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBoZWlnaHQ6IDM1MHB4OyBcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLnRvcHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbi5pbnB1dC1TdHlsZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxufVxyXG4ubWFpbC1taW5pe1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNzBweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9tYWlsLW1pbmkucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaG92ZXJ7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuLmZhY2Vib29rLW1pbml7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxNzRweDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9mYWNlYm9vay1taW5pLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuLndoYXRzYXBwLW1pbml7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxMjJweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy93aGF0c3NhcHAtbWluaS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnBob25lLW1pbml7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMjZweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9waG9uZS1taW5pLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdGVjaG5vLWpvLW1hZ25ldC5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4ucGlje1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9waWN0dXJlLWpvLmpwZWcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC8qYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpOyovXHJcbiAgICBtYXJnaW4tdG9wOiAtNDlweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0b3A6IDI0NHB4O1xyXG59XHJcbi5hbGlnbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxufVxyXG4uaW1hZ2UtU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuLnRvcC1TdHlsZXtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzdkYzlmZjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlICwgYmx1ZSk7XHJcbn1cclxuLmJvcmRlci1SYWRpdXMtUmlnaHR7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG59XHJcbi5ib3JkZXItUmFkaXVzLUxlZnR7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbn1cclxuLmltYWdlMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy/XkNeX16jXmdeV16ot157XnNeQ15QyLnBuZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG4uaW1hZ2Uye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90emFkaWsuanBnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcbi5pbWFnZTN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvc2hha2UucG5nXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpO1xyXG59XHJcbi5pbWFnZTR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvcHJpY2UuanBnXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpO1xyXG59XHJcbi5mYWNlYm9va3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9mYWNlYm9vay5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG4ud2hhdHNhcHB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvd2hhdHNhcHAucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn1cclxuLmluc3RlZ3JhbXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbnN0ZWdyYW0ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn1cclxuLmhlYWRsaW5lLVRleHR7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuLm1paWRsZS1IZWFkbGluZS1UZXh0e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5ib3R0b20tVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ubS1Ub3B7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7IFxyXG4gICAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4uY29udGFjdC1IZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmNhcm91c2VsLVRleHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnRleHQxe1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmJyYW5kMXtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9hbWFuYS1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kMntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9ibG9vbWJlcmctYnJhbmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDN7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvU2Ftc3VuZy1icmFuZC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kNHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90YWRpcmFuLWJyYW5kLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYnJhbmQ1e1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL1doaXJscG9vbC1icmFuZDEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDZ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYmVrby1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kN3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9icm90aGVyLWJyYW5kLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNDZweCkge1xyXG4gICAgLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGhlaWdodDogODBweDsgXHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEwcHgpIHtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5oZWFkbGluZS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIH1cclxuICAgIC5taWlkbGUtSGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYm90dG9tLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGhlaWdodDogNjBweDsgXHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuaGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAubWlpZGxlLUhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtSGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ0cHgpIHtcclxuICAgICAgLm0tVG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHR7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XHJcbiAgICAuaGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubWlpZGxlLUhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pbnB1dC1TdHlsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LUhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmV4dHJhe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubS1Ub3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDhweDtcclxuICAgIH1cclxuICAgIC5leHRyYXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm0tVG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc0cHgpIHtcclxuICAgIC5pbWFnZS1TdHlsZXtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICAubS1Ub3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmV4dHJhe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGV4dDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAudGV4dDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH0iXX0= */"] });
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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

module.exports = __webpack_require__(/*! C:\Users\ykogan\NewSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map