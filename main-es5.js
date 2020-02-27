function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'NewSite';
        this.mailhover = 0;
        this.picture = 0;
      }

      _createClass(AppComponent, [{
        key: "changeMail",
        value: function changeMail() {
          this.mailhover = 1;
        }
      }, {
        key: "unChangeMail",
        value: function unChangeMail() {
          this.mailhover = 0;
        }
      }, {
        key: "showPicture",
        value: function showPicture() {
          this.picture = 1;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 230,
      vars: 0,
      consts: [[1, "row", "container-fluid", "main-picture"], [1, "row", "container-fluid", "nav-bar-row"], [1, "row", "container-fluid", 2, "z-index", "1000", "opacity", "1"], [1, "col", "card"], [1, "col", "contact1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#contact1", 2, "color", "white", "transition", "transform 400ms ease-out 0"], [1, "col", "tip1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#washingMachine", 2, "color", "white"], [1, "col", "about1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#details", 2, "color", "white"], [1, "H", "row", "container-fluid"], [1, "col", "extra"], [1, "col-1", "image-Style", "image1", "border-Radius-Left"], [1, "col-1", "image-Style", "image2"], [1, "col-1", "image-Style", "image3"], [1, "col-1", "image-Style", "border-Radius-Right", "image4"], [1, "row", "container-fluid"], [1, "col", "brand1"], [1, "col", "brand2"], [1, "col", "brand3"], [1, "col", "brand4"], [1, "col", "brand5"], [1, "col", "brand6"], [1, "col", "brand7"], ["id", "details", "dir", "rtl", 2, "color", "white", "background-color", "teal"], [1, "row", "container-fluid", 2, "text-align", "right"], [1, "col"], [1, "row", "header", 2, "margin-bottom", "30px", "color", "white"], [1, "text"], [1, "col-3", "image5"], [1, "row", "container", 2, "text-align", "right", "margin-bottom", "30px", "margin-top", "30px"], [1, "row", "container", "header"], ["dir", "rtl", 1, "container-fluid", 2, "text-align", "center"], [1, "header"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "row", 2, "height", "450px", "margin-top", "50px"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "5"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "text-align", "center"], ["src", "../assets/meyabesh.jpg", "alt", "First slide", 2, "margin-bottom", "40px"], [1, "carousel-caption", "d-none", "d-md-block", 2, "color", "black"], [1, "carousel-Text"], [1, "carousel-item", 2, "text-align", "center"], ["src", "../assets/refrigirator.jpg", "alt", "second slide", 2, "margin-bottom", "70px"], ["src", "../assets/oven builtIn.jpg", "alt", "Third slide", 2, "margin-bottom", "50px"], ["src", "../assets/micro.png", "alt", "Fourth slide", 2, "margin-bottom", "60px"], ["src", "../assets/oven.gif", "alt", "Fifth slide", 2, "margin-bottom", "70px"], ["src", "../assets/washing.jpg", "alt", "Sixth slide", 2, "margin-bottom", "70px"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "washingMachine", "dir", "rtl", 2, "background-color", "gold", "margin-top", "-30px"], [1, "row", "container", 2, "text-align", "right"], [1, "row", "header1", 2, "margin-bottom", "30px", "color", "blue"], [1, "row", "container", "header2"], [1, "text1"], [1, "row", "container", 2, "text-align", "right", "margin-bottom", "30px"], ["id", "refrigirator", "dir", "rtl", 2, "background-color", "gold", "margin-top", "-30px"], ["id", "ovens", "dir", "rtl", 2, "background-color", "gold", "margin-top", "-30px"], ["id", "contact1", "dir", "rtl", 1, "Contact", "row", "container-fluid", 2, "margin-top", "-30px"], [2, "text-align", "right", "margin-right", "30px", "margin-top", "100px"], [1, "contact-Header"], [1, "row", "container-fluid", "top"], ["dir", "rtl", "placeholder", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D5\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", 1, "input-Style"], ["dir", "rtl", "placeholder", "\u05DE\u05E1 \u05D8\u05DC\u05E4\u05D5\u05DF", 1, "input-Style"], ["dir", "rtl", "placeholder", "\u05D0\u05D9 \u05DE\u05D9\u05D9\u05DC", 1, "input-Style"], [2, "float", "right", "margin-right", "41px"], [1, "btn", "btn-warning", "send", 2, "border-radius", "30px"], ["id", "mySidenav", 1, "sidenav"], ["href", "#details", "id", "about"], ["href", "#washingMachine", "id", "blog"], ["href", "#", "id", "projects"], ["href", "#contact1", "id", "contact"], [1, "row", "container-fluid", 2, "height", "160px", "background-color", "black"], ["href", "https://www.facebook.com/%D7%98%D7%9B%D7%A0%D7%95-%D7%92%D7%95-609578502437820/", 1, "col-1", "facebook"], ["href", "https://api.whatsapp.com/send?phone=+972544818383&text= \u05E9\u05DC\u05D5\u05DD, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D1\u05D1\u05D9\u05EA\u05D9", 1, "col-1", "whatsapp", 2, "margin-left", "10px"], [1, "col-1", "instegram", 2, "margin-left", "10px"], ["clas", "container-fluid", 2, "background-color", "black", "height", "100px", "text-align", "center", "padding-top", "30px"], ["href", "https://api.whatsapp.com/send?phone=+972508451651&text= \u05E9\u05DC\u05D5\u05DD, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8", 2, "color", "white"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05D8\u05D9\u05E4\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u05D9\u05E6\u05D0\u05EA\u05D9 \u05E6\u05D3\u05D9\u05E7 \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05DC \u05D7\u05D9\u05D9\u05DD \u05D4\u05DB\u05D8 \u05D1\u05DB\u05DC \u05D4\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD: \u05D0\u05DE\u05D9\u05E0\u05D5\u05EA, \u05DE\u05D7\u05D9\u05E8, \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA, \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u05D4\u05E0\u05D3\u05E1\u05D0\u05D9 \u05D5\u05D8\u05DB\u05E0\u05D0\u05D9 \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD, \u05D7\u05E9\u05DE\u05DC\u05D0\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D5\u05E1\u05DE\u05DA \u05DC\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05D1\u05D9\u05EA\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D5\u05DE\u05E7\u05E4\u05D9\u05D0\u05D9\u05DD \u05DE\u05DB\u05DC \u05D4\u05E1\u05D5\u05D2\u05D9\u05DD \u05D5\u05D4\u05D7\u05D1\u05E8\u05D5\u05EA: \u05D3\u05D9\u05E1\u05E4\u05E8\u05D5\u05E1\u05D8, \u05E0\u05D5\u05E4\u05E8\u05D5\u05E1\u05D8, \u05D4\u05D9\u05D1\u05E8\u05D9\u05D3\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u05E9\u05DC\u05D9\u05D8\u05D4 \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D1\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u05DE\u05D5\u05DE\u05D7\u05D4 \u05D1\u05D7\u05D1\u05E8\u05D5\u05EA :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Samsung, Amana, Whirlpool, Beko, Amcor, Tadiran, Blumberg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u05DE\u05D9\u05DC\u05D5\u05D9 \u05D2\u05D6 \u05DC\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u05D4\u05D7\u05DC\u05E4\u05EA \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD, \u05D0\u05D9\u05D9\u05E1 \u05DE\u05D9\u05D9\u05E7\u05E8\u05D9\u05DD, \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D1\u05E7\u05E8\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u05D0\u05D6\u05D5\u05E8\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u05DB\u05DC \u05D0\u05D6\u05D5\u05E8 \u05D4\u05E9\u05E8\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u05DE\u05E2\u05DC 10 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05E0\u05D5\u05D7\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05E2\u05DC \u05DB\u05DC \u05D4\u05D7\u05DC\u05E4\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05DE\u05DB\u05DC \u05D4\u05E1\u05D5\u05D2\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ol", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "li", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05D9\u05D1\u05E9\u05D9 \u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D1\u05E0\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05E7\u05E8\u05D5\u05D2\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h5", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h5", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h1", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05D4\u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u05D0\u05D9\u05DA \u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05DC \u05D4\u05DE\u05DB\u05D5\u05E0\u05D4 ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " \u05DC\u05E4\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05E4\u05E9\u05D5\u05EA \u05E9\u05D9\u05E9 \u05D1\u05DE\u05E9\u05E4\u05D7\u05D4. \u05DC\u05D1\u05D9\u05EA \u05E2\u05DD 3 \u05D0\u05D5 4 \u05E0\u05E4\u05E9\u05D5\u05EA \u05EA\u05EA\u05D0\u05D9\u05DD \u05DE\u05DB\u05D5\u05E0\u05D4 \u05D1\u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05DC 5 \u05D0\u05D5 6 \u05E7\u05D9\u05DC\u05D5, \u05D0\u05D1\u05DC \u05E7\u05D7\u05D5 \u05D8\u05D9\u05E4: \u05E2\u05D3\u05D9\u05E3 \u05DC\u05E7\u05E0\u05D5\u05EA \u05DE\u05DB\u05D5\u05E0\u05D4 \u05E2\u05DD \u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E7\u05E6\u05EA \u05D9\u05D5\u05EA\u05E8 \u05D2\u05D3\u05D5\u05DC\u05D4, \u05E0\u05D2\u05D9\u05D3 7 \u05E7\u05D9\u05DC\u05D5. \u05DB\u05DA \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DB\u05D1\u05E1 \u05DB\u05DE\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D1\u05E4\u05E2\u05DD \u05D0\u05D7\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05D7\u05DC\u05E7 \u05D0\u05EA \u05D4\u05DB\u05D1\u05D9\u05E1\u05D5\u05EA, \u05D5\u05DC\u05D7\u05E1\u05D5\u05DA \u05D6\u05DE\u05DF, \u05DE\u05D9\u05DD \u05D5\u05D7\u05E9\u05DE\u05DC. \u05D0\u05DD \u05D0\u05EA\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 \u05D2\u05D3\u05D5\u05DC\u05D4, \u05E7\u05D7\u05D5 \u05DE\u05DB\u05D5\u05E0\u05D4 \u05D1\u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05DC 8 \u05E7\u05D9\u05DC\u05D5 \u05D5\u05DE\u05E2\u05DC\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u05E1\u05D7\u05D9\u05D8\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05D0\u05D5 \u05D0\u05D8\u05D9\u05EA?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u05D1\u05D7\u05E8\u05D5 \u05DE\u05DB\u05D5\u05E0\u05EA \u05DB\u05D1\u05D9\u05E1\u05D4 \u05E2\u05DD \u05DB\u05DE\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D5\u05D9\u05D5\u05EA \u05E1\u05D7\u05D9\u05D8\u05D4, \u05DB\u05E9\u05D4\u05DE\u05E7\u05D9\u05E1\u05DE\u05DC\u05D9\u05EA \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05E4\u05D7\u05D5\u05EA 800 \u05E1\u05DC\"\u05D3, \u05DB\u05DC\u05D5\u05DE\u05E8 \u05E1\u05D9\u05D1\u05D5\u05D1\u05D9\u05DD \u05DC\u05D3\u05E7\u05D4. \u05DB\u05DB\u05DC \u05E9\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D4\u05E1\u05D9\u05D1\u05D5\u05D1 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8, \u05D4\u05E1\u05D7\u05D9\u05D8\u05D4 \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D5\u05DE\u05D4\u05D9\u05E8\u05D4 \u05D9\u05D5\u05EA\u05E8. \u05D1\u05DB\u05D1\u05D9\u05E1\u05D4 \u05E2\u05D3\u05D9\u05E0\u05D4 \u05EA\u05E8\u05E6\u05D5 \u05DC\u05DB\u05D1\u05E1 \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05E0\u05DE\u05D5\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05D0 \u05DC\u05D4\u05E8\u05D5\u05E1 \u05D0\u05EA \u05D4\u05D1\u05D2\u05D3\u05D9\u05DD, \u05D0\u05D1\u05DC \u05D1\u05E9\u05D1\u05D9\u05DC \u05DE\u05D2\u05D1\u05D5\u05EA \u05D5\u05D2'\u05D9\u05E0\u05E1\u05D9\u05DD \u05D7\u05E9\u05D5\u05D1 \u05E9\u05EA\u05D4\u05D9\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u2013 \u05D6\u05D4 \u05D9\u05D7\u05E1\u05D5\u05DA \u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF \u05D4\u05D9\u05D9\u05D1\u05D5\u05E9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u05E4\u05D9\u05E7\u05D5\u05D3 \u05DE\u05DB\u05E0\u05D9 \u05D0\u05D5 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u05D9\u05E9 \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05E4\u05D9\u05E7\u05D5\u05D3 \u05DE\u05DB\u05E0\u05D9 \u05D5\u05D9\u05E9 \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05E4\u05D9\u05E7\u05D5\u05D3 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9. \u05DE\u05D4 \u05D4\u05D4\u05D1\u05D3\u05DC? \u05E4\u05D9\u05E7\u05D5\u05D3 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E0\u05D5\u05D7 \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D5\u05D9\u05D5\u05EA\u05E8 \u05DE\u05E9\u05D5\u05DB\u05DC\u05DC, \u05D0\u05D1\u05DC \u05DB\u05E9\u05D4\u05D5\u05D0 \u05DE\u05EA\u05E7\u05DC\u05E7\u05DC \u2013 \u05E2\u05DC\u05D5\u05EA \u05D4\u05EA\u05D9\u05E7\u05D5\u05DF \u05D9\u05E7\u05E8\u05D4 \u05DE\u05D0\u05D5\u05D3. \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05E4\u05D9\u05E7\u05D5\u05D3 \u05DE\u05DB\u05E0\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA \u05D5\u05E4\u05D7\u05D5\u05EA \u05E0\u05D5\u05D7\u05D5\u05EA \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D0\u05D1\u05DC \u05D4\u05DF \u05D4\u05E8\u05D1\u05D4 \u05E4\u05D7\u05D5\u05EA \u05E8\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05EA\u05E7\u05DC\u05D5\u05EA, \u05D5\u05D2\u05DD \u05D4\u05E8\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D6\u05D5\u05DC \u05DC\u05EA\u05E7\u05DF \u05D0\u05D5\u05EA\u05DF. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h1", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\u05E0\u05E7\u05D5 \u05D0\u05EA \u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05DE\u05E0\u05D5\u05E2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u05EA\u05E4\u05E7\u05D9\u05D3\u05D5 \u05E9\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05D5\u05D0 \u05DC\u05E9\u05D0\u05D5\u05D1 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05E8\u05E8 \u05D0\u05EA \u05D4\u05DE\u05E0\u05D5\u05E2. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05E4\u05EA\u05D7 \u05D4\u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05E1\u05EA\u05D5\u05DD, \u05D4\u05DE\u05E0\u05D5\u05E2 \u05D9\u05EA\u05D7\u05DE\u05DD \u05D5\u05D1\u05E9\u05DC\u05D1 \u05DE\u05E1\u05D5\u05D9\u05DD \u05D0\u05E3 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05E4\u05E1\u05D9\u05E7 \u05DC\u05E2\u05D1\u05D5\u05D3. \u05D0\u05EA \u05E0\u05D9\u05E7\u05D9\u05D5\u05DF \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D1\u05E6\u05E2 \u05D1\u05E2\u05E6\u05DE\u05DB\u05DD. \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05E4\u05EA\u05D7 \u05D4\u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05E0\u05DE\u05E6\u05D0 \u05D1\u05D7\u05DC\u05E7\u05D5 \u05D4\u05D0\u05D7\u05D5\u05E8\u05D9 \u05D4\u05EA\u05D7\u05EA\u05D5\u05DF \u05E9\u05DC \u05D4\u05DE\u05E7\u05E8\u05E8, \u05E0\u05E7\u05D5 \u05D0\u05D5\u05EA\u05D5 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D1\u05E8\u05E9\u05EA \u05D0\u05D5 \u05E9\u05D5\u05D0\u05D1 \u05D0\u05D1\u05E7 \u05D5\u05D5\u05D3\u05D0\u05D5 \u05E9\u05DE\u05E2\u05D1\u05E8 \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E4\u05EA\u05D5\u05D7. \u05DE\u05D5\u05DE\u05DC\u05E5 \u05DB\u05DE\u05D5\u05D1\u05DF \u05DC\u05E0\u05EA\u05E7 \u05D0\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8 \u05DE\u05D4\u05D7\u05E9\u05DE\u05DC \u05D8\u05E8\u05DD \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E4\u05E2\u05D5\u05DC\u05D4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u05D0\u05DC \u05EA\u05E6\u05DE\u05D9\u05D3\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8 \u05DC\u05E7\u05D9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u05E9\u05EA\u05D3\u05DC\u05D5 \u05E9\u05DC\u05D0 \u05DC\u05D4\u05E6\u05DE\u05D9\u05D3 \u05D0\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8 \u05DC\u05D2\u05DE\u05E8\u05D9 \u05DC\u05E7\u05D9\u05E8 \u05D0\u05D5 \u05DC\u05DB\u05DC \u05D2\u05D5\u05E3 \u05D0\u05D7\u05E8. \u05D4\u05DE\u05E7\u05E8\u05E8 \u05D4\u05D5\u05D0 \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D7\u05E9\u05DE\u05DC\u05D9 \u05E9\u05E4\u05D5\u05DC\u05D8 \u05D7\u05D5\u05DD, \u05D0\u05DD \u05EA\u05E6\u05DE\u05D9\u05D3\u05D5 \u05D0\u05D5\u05EA\u05D5 \u05DC\u05E7\u05D9\u05E8, \u05DC\u05D7\u05D5\u05DD \u05DC\u05D0 \u05D9\u05D4\u05D9\u05D4 \u05DC\u05D0\u05DF \u05DC\u05D1\u05E8\u05D5\u05D7 \u05D5\u05D4\u05DE\u05E7\u05E8\u05E8 \u05D9\u05EA\u05D7\u05DE\u05DD \u05D9\u05EA\u05E8 \u05E2\u05DC \u05D4\u05DE\u05D9\u05D3\u05D4. \u05D4\u05E8\u05D7\u05D9\u05E7\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8 \u05DB- 20 \u05E1\u05E0\u05D8\u05D9\u05DE\u05D8\u05E8\u05D9\u05DD \u05DE\u05D4\u05E7\u05D9\u05E8 \u05D5\u05DB\u05DA \u05EA\u05DE\u05E0\u05E2\u05D5 \u05D0\u05EA \u05D4\u05D1\u05E2\u05D9\u05D4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u05D5\u05D3\u05D0\u05D5 \u05E9\u05D4\u05DE\u05E7\u05E8\u05E8 \u05D0\u05D8\u05D5\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u05D5\u05D3\u05D0\u05D5 \u05E9\u05D4\u05D3\u05DC\u05EA \u05E1\u05D2\u05D5\u05E8\u05D4 \u05D4\u05D9\u05D8\u05D1, \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05D4\u05E7\u05D5\u05E8 \u05DC\u05D0 \u05D9\u05D1\u05E8\u05D7 \u05D4\u05D7\u05D5\u05E6\u05D4. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05D3\u05DC\u05EA \u05DE\u05E1\u05E8\u05D1\u05EA \u05DC\u05D4\u05D9\u05E1\u05D2\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D4\u05E8\u05DE\u05D8\u05D9, \u05D0\u05D5 \u05E9\u05D4\u05D9\u05D0 \u05E0\u05E4\u05EA\u05D7\u05EA \u05D1\u05E7\u05DC\u05D5\u05EA \u05D9\u05EA\u05E8\u05D4, \u05D1\u05D3\u05E7\u05D5 \u05D0\u05EA \u05D2\u05D5\u05DE\u05D9\u05D5\u05EA \u05D4\u05D0\u05D8\u05DD \u05E9\u05E2\u05DC \u05D2\u05D1\u05D9 \u05D3\u05DC\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8. \u05D1\u05D3\u05E7\u05D5 \u05D0\u05DD \u05D4\u05D2\u05D5\u05DE\u05D9 \u05D9\u05E9\u05E8 \u05D0\u05D5 \u05E2\u05E7\u05D5\u05DD, \u05D0\u05DD \u05D4\u05D5\u05D0 \u05D9\u05D1\u05E9 \u05D0\u05D5 \u05D1\u05DC\u05D5\u05D9. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05DB\u05DF, \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D4\u05D7\u05DC\u05D9\u05E3 \u05D0\u05EA \u05D4\u05D2\u05D5\u05DE\u05D9\u05D5\u05EA \u05D1\u05DE\u05D4\u05E8\u05D4. \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D1\u05E6\u05E2 \u05D6\u05D0\u05EA \u05D1\u05E2\u05E6\u05DE\u05DB\u05DD, \u05D0\u05DA \u05D0\u05EA\u05DD \u05DE\u05E8\u05D2\u05D9\u05E9\u05D9\u05DD \u05E9\u05D6\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1 \u05DE\u05D9\u05D3\u05D9, \u05D4\u05D6\u05DE\u05D9\u05E0\u05D5 \u05D1\u05E2\u05DC \u05DE\u05E7\u05E6\u05D5\u05E2 \u05DC\u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h1", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05EA\u05E0\u05D5\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " \u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05DC\u05E0\u05D9\u05E7\u05D5\u05D9 \u05E2\u05E6\u05DE\u05D9 \u05E9\u05DC \u05D4\u05EA\u05E0\u05D5\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u05D1\u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05D9\u05DD \u05D5\u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05E7\u05D9\u05D9\u05DE\u05EA \u05D4\u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \u05E9\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05DC\u05E0\u05D9\u05E7\u05D5\u05D9 \u05E2\u05E6\u05DE\u05D9, \u05D6\u05D4\u05D5 \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF \u05D4\u05D0\u05D9\u05D3\u05D9\u05D0\u05DC\u05D9. \u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05D6\u05D5 \u05DC\u05DE\u05E2\u05E9\u05D4 \u05DE\u05E2\u05DC\u05D4 \u05D0\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D1\u05EA\u05E0\u05D5\u05E8 \u05DC\u05DE\u05E2\u05DC 500 \u05DE\u05E2\u05DC\u05D5\u05EA, \u05D5\u05D1\u05E1\u05D5\u05E3 \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05E0\u05D9\u05E7\u05D5\u05D9 \u05DB\u05DC \u05D4\u05E9\u05D5\u05DE\u05E0\u05D9\u05DD \u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05DC\u05E4\u05D9\u05D7 \u05D5\u05DB\u05DC \u05E9\u05E6\u05E8\u05D9\u05DA \u05D4\u05D5\u05D0 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DE\u05D8\u05DC\u05D9\u05EA \u05D5\u05DC\u05E0\u05D2\u05D1 \u05D0\u05EA \u05D4\u05E4\u05D9\u05D7. \u05D6\u05D4 \u05DE\u05D5\u05E0\u05E2 \u05D4\u05E6\u05D8\u05D1\u05E8\u05D5\u05EA \u05E9\u05DC \u05DC\u05DB\u05DC\u05D5\u05DA \u05D1\u05D3\u05E4\u05E0\u05D5\u05EA, \u05D5\u05DE\u05D5\u05E0\u05E2 \u05E6\u05D5\u05E8\u05DA \u05D1\u05D7\u05D5\u05DE\u05E8\u05D9 \u05E0\u05D9\u05E7\u05D5\u05D9 \u05D7\u05D6\u05E7\u05D9\u05DD \u05D5\u05D1\u05E9\u05E4\u05E9\u05D5\u05E3 \u05D4\u05E4\u05D5\u05D2\u05E2 \u05D1\u05E6\u05D9\u05E4\u05D5\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\u05D4\u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05D0\u05E8\u05EA \u05D4\u05EA\u05E0\u05D5\u05E8 \u05D3\u05D5\u05DC\u05E7 \u05E2\u05DC \u05D7\u05D5\u05DD \u05D2\u05D1\u05D5\u05D4 \u05DC\u05DE\u05E9\u05DA \u05E9\u05E2\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\u05EA\u05E0\u05D5\u05E8 \u05D0\u05E4\u05D9\u05D9\u05D4 \u05D1\u05D9\u05EA\u05D9 \u05DC\u05D0 \u05D0\u05DE\u05D5\u05E8 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E8\u05E6\u05D9\u05E4\u05D4 \u05E2\u05DC \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9\u05EA\", \u05D0\u05D5\u05DE\u05E8 \u05DC\u05D5\u05D9. \"\u05DC\u05DB\u05DF, \u05E2\u05D3\u05D9\u05E3 \u05DC\u05D0 \u05DC\u05D4\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D3\u05D5\u05DC\u05E7 \u05E2\u05DC \u05D7\u05D5\u05DD \u05D2\u05D1\u05D5\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DB\u05DE\u05D4 \u05E9\u05E2\u05D5\u05EA \u05D1\u05E8\u05E6\u05D9\u05E4\u05D5\u05EA, \u05D0\u05DC\u05D0 \u05DC\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D5 \u05DC\u05D4\u05EA\u05E7\u05E8\u05E8 \u05D1\u05D9\u05DF \u05DC\u05D1\u05D9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\u05E2\u05E7\u05D1\u05D5 \u05D0\u05D7\u05E8 \u05D4\u05EA\u05E7\u05E2. \u05D0\u05DD \u05D4\u05D5\u05D0 \u05D7\u05E8\u05D5\u05DA \u05D3\u05D0\u05D2\u05D5 \u05DC\u05D4\u05D7\u05DC\u05D9\u05E4\u05D5 \u05D1\u05D4\u05E7\u05D3\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h5", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u05D7\u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05E9\u05E7\u05E2 \u05D5\u05D4\u05EA\u05E7\u05E2 \u05E9\u05DC \u05EA\u05E0\u05D5\u05E8 \u05D4\u05D0\u05E4\u05D9\u05D9\u05D4 \u05D5\u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05DD \u05DC\u05D0 \u05E0\u05DE\u05E1\u05D5\", \u05D0\u05D5\u05DE\u05E8 \u05DC\u05D5\u05D9. \"\u05D1\u05E8\u05D2\u05E2 \u05E9\u05D4\u05EA\u05E7\u05E2 \u05DB\u05D1\u05E8 \u05D7\u05E8\u05D5\u05DA, \u05D7\u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05D8\u05E4\u05DC \u05D1\u05DB\u05DA \u05D5\u05DC\u05D4\u05D7\u05DC\u05D9\u05E3 \u05D0\u05D5\u05EA\u05D5. \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05E2\u05DC\u05D5\u05EA \u05DE\u05D0\u05D5\u05D3 \u05E0\u05DE\u05D5\u05DB\u05D4 \u05E9\u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05DE\u05E0\u05D5\u05E2 \u05E0\u05D6\u05E7 \u05E8\u05E6\u05D9\u05E0\u05D9 \u05DC\u05EA\u05E0\u05D5\u05E8, \u05D5\u05D7\u05DE\u05D5\u05E8 \u05DE\u05DB\u05DA \u05DC\u05D1\u05D9\u05EA \u05E2\u05E6\u05DE\u05D5, \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC \u05E4\u05E8\u05D9\u05E6\u05EA \u05E9\u05E8\u05D9\u05E4\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h4", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u05D4\u05DB\u05E0\u05E1 \u05E4\u05E8\u05D8\u05D9\u05DD \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\u05E9\u05DC\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\u05D8\u05D9\u05E4\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\u05D2\u05DC\u05E8\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05E0\u05D1\u05E0\u05D4 \u05E2\"\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "\u05D9\u05D5\u05D1\u05DC \u05E7\u05D5\u05D2\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".H[_ngcontent-%COMP%]{\r\n    height: 220px;\r\n    background-color: #ffffff;\r\n    border-width: 1px;\r\n    \r\n    \r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n.header-Style[_ngcontent-%COMP%]{\r\n    height: 400px; \r\n    width: 100%;\r\n    background-color: brown;\r\n    box-shadow: 0 2px 20px 0 rgba(50, 50, 186, 0.16);\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.Contact[_ngcontent-%COMP%]{\r\n    background-color: #7dc9ff;\r\n    width: 100%; \r\n    height: 550px; \r\n    opacity: 1;\r\n}\r\n.top[_ngcontent-%COMP%]{\r\n    z-index: 10;\r\n}\r\n.nav-bar-row[_ngcontent-%COMP%]{\r\n    margin-top: 100px; \r\n    height: 100px; \r\n    background-color: rgb(51, 122, 122);\r\n    opacity: 0.9\r\n}\r\n.input-Style[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 50px;\r\n    margin-top: 20px;\r\n    padding: 12px 20px;\r\n    margin-right: 25px;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n\r\n    box-sizing: border-box;\r\n    border-radius: 60px;\r\n}\r\n.send[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n}\r\n.mail-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 70px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('mail-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-top-right-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.hover[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    -webkit-transition-duration: 0.5s;\r\n            transition-duration: 0.5s;\r\n}\r\n.facebook-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 174px;\r\n    width: 66px;\r\n    height: 50px;\r\n    background-image: url('facebook-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n}\r\n.whatsapp-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 122px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('whatssapp-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.phone-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 226px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('phone-mini.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background-image: url('techno-jo-magnet.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 20px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    margin-top: 10px;\r\n    height: 200px;\r\n    margin-left: 100px; \r\n    top: -50px; \r\n    right: 10px;\r\n}\r\n.pic[_ngcontent-%COMP%]{\r\n    background-image: url('picture-jo.jpeg');\r\n    background-color: #cccccc;\r\n    border-radius: 20px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 0px;\r\n    \r\n    margin-top: -49px;\r\n    height: 400px;\r\n    margin-left: 125px;\r\n    position: absolute;\r\n    z-index: 10;\r\n    left: 30px;\r\n    top: 244px;\r\n}\r\n.main-picture[_ngcontent-%COMP%]{\r\n    background-image: url('34washing.jpg'); \r\n    background-color: #cccccc; \r\n    \r\n    background-position: center; \r\n    background-repeat: repeat; \r\n    background-size: contain; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    height: 400px;\r\n    background-attachment: fixed;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n}\r\n.align[_ngcontent-%COMP%]{\r\n    margin-left: 230px;\r\n}\r\n.image-Style[_ngcontent-%COMP%]{\r\n  background-color: bisque;\r\n  border-style: solid;\r\n  border-width: 5px;\r\n  border-color: black;\r\n  height: 125px;\r\n  margin-top: -30px;\r\n  margin-left: 2px;\r\n}\r\n.top-Style[_ngcontent-%COMP%]{\r\n    \r\n    background-image: -webkit-gradient(linear, left top, right top, from(white) , to(blue));\r\n    background-image: linear-gradient(to right, white , blue);\r\n}\r\n.border-Radius-Right[_ngcontent-%COMP%]{\r\n    border-top-right-radius: 6px;\r\n}\r\n.border-Radius-Left[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 6px;\r\n}\r\n.image1[_ngcontent-%COMP%]{\r\n    background-image: url('\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA-\u05DE\u05DC\u05D0\u05D42.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image2[_ngcontent-%COMP%]{\r\n    background-image: url('tzadik.jpg');\r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image3[_ngcontent-%COMP%]{\r\n    background-image: url('shake.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image4[_ngcontent-%COMP%]{\r\n    background-image: url('price.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image5[_ngcontent-%COMP%]{\r\n    background-image: url('tsadik-crop.jpg');\r\n    background-color: #cccccc;\r\n    border-radius: 30px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    height: 400px;\r\n    margin-left: 50px;\r\n    margin-top: 30px;\r\n    background-color: #c3c2c0;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n}\r\n.facebook[_ngcontent-%COMP%]{\r\n    background-image: url('facebook.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 550px;\r\n}\r\n.whatsapp[_ngcontent-%COMP%]{\r\n    background-image: url('whatsapp.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.instegram[_ngcontent-%COMP%]{\r\n    background-image: url('instegram.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n}\r\n.miidle-Headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n}\r\n.bottom-Text[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.m-Top[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    margin-left: 30px; \r\n    margin-top: 120px; \r\n    height: 120px; \r\n    width: 30px;\r\n}\r\n.contact-Header[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.carousel-Text[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n.text1[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n}\r\n.brand1[_ngcontent-%COMP%]{\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('amana-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand2[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('bloomberg-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand3[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Samsung-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand4[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('tadiran-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand5[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Whirlpool-brand1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand6[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('beko-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand7[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('brother-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.tip1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.tip1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.contact1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.contact1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.about1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.about1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: -90px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    padding: 10px;\r\n    width: 120px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    border-radius: 0 5px 5px 0;\r\n  }\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    left: 0;\r\n  }\r\n#about[_ngcontent-%COMP%] {\r\n    top: 70px;\r\n    background-color: #4CAF50;\r\n  }\r\n#blog[_ngcontent-%COMP%] {\r\n    top: 130px;\r\n    background-color: #2196F3;\r\n  }\r\n#projects[_ngcontent-%COMP%] {\r\n    top: 190px;\r\n    background-color: #f44336;\r\n  }\r\n#contact[_ngcontent-%COMP%] {\r\n    top: 250px;\r\n    background-color: #555\r\n  }\r\n.header1[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n.text1[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n@media only screen and (max-width: 1346px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1300px) {\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 160px; \r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 480px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1200px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 100px; \r\n        width: 25px;\r\n    }\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 120px; \r\n        top: -20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1000px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 80px; \r\n        width: 20px;\r\n    }\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        border-width: 2px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%]{\r\n        -webkit-box-flex: 2;\r\n        flex: 1 0 15.333333%;\r\n        max-width: 18.333333%;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 220px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 910px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 80px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 40px;\r\n    }\r\n    .bottom-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n        height: 90px; \r\n        top: -5px;\r\n        margin-left: 50px;\r\n    }\r\n    .image5[_ngcontent-%COMP%]{\r\n        height: 300px;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 30px;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 850px) {\r\n      .about1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 800px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 60px; \r\n        width: 15px;\r\n    }\r\n    .carousel-Text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 672px) {\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .brand1[_ngcontent-%COMP%]{\r\n          display: none;\r\n      }\r\n      .brand2[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand7[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n  }\r\n@media only screen and (max-width: 700px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 60px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n        height: 69px;\r\n        top: 6px;\r\n        margin-left: 50px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 650px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 50px; \r\n        width: 10px;\r\n    }\r\n    .contact-Header[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 644px) {\r\n      .m-Top[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n      }\r\n      .text[_ngcontent-%COMP%]{\r\n          font-size: 15px;\r\n      }\r\n    \r\n      .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%]{\r\n        width: 100px;\r\n    }\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 65px;\r\n        top: 6px;\r\n        margin-left: 30px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 600px) {\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .image5[_ngcontent-%COMP%]{\r\n          height: 230px;\r\n      }\r\n      .header[_ngcontent-%COMP%]{\r\n        font-size: 28px;\r\n    }\r\n    .header1[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n      }\r\n      .header2[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n      }\r\n      .text1[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n      }\r\n      .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 140px;\r\n      }\r\n      .card[_ngcontent-%COMP%]{\r\n        margin-left: 40px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 570px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 50px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 550px) {\r\n    \r\n  }\r\n@media only screen and (max-width: 500px) {\r\n\r\n    .image5[_ngcontent-%COMP%]{\r\n        height: 200px;\r\n    }\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .header1[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n      }\r\n      .header2[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .input-Style[_ngcontent-%COMP%]{\r\n          font-size: 12px;\r\n      }\r\n      #mySidenav[_ngcontent-%COMP%] {\r\n        width: 110px !important;\r\n        font-size: 12px !important;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 90px;\r\n        height: 90px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 90px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 90px;\r\n    }\r\n      .card[_ngcontent-%COMP%]{\r\n        display: none;\r\n      }\r\n      .send[_ngcontent-%COMP%]{\r\n        width: 325px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 474px) {\r\n    \r\n  }\r\n@media only screen and (max-width: 450px) {\r\n    \r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n    .col-3[_ngcontent-%COMP%] {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 33%;\r\n        max-width: 35%;\r\n    }\r\n    .image5[_ngcontent-%COMP%]{\r\n        margin-left: 15px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n        margin-left: 5px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%] {\r\n        -webkit-box-flex: 2;\r\n        flex: 10 0 20.333333%;\r\n        max-width: 30.333333%;\r\n    }\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n      }\r\n      .send[_ngcontent-%COMP%]{\r\n        width: 245px;\r\n      }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n.about1[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .tip1[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact1[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n}\r\n@media only screen and (max-width: 310px) {\r\n    \r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 0px;\r\n    }\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkM7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCOztJQUV0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBOEM7SUFDOUMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBa0Q7SUFDbEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7O0FBRTFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FB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QUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO01BQ2pCO01BQ0E7UUFDRSxlQUFlO01BQ2pCO01BQ0E7UUFDRSxlQUFlO01BQ2pCOztBQUVOIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmhlYWRlci1TdHlsZXtcclxuICAgIGhlaWdodDogNDAwcHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKDUwLCA1MCwgMTg2LCAwLjE2KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLkNvbnRhY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2RjOWZmO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiA1NTBweDsgXHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi50b3B7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4ubmF2LWJhci1yb3d7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDsgXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTIyLCAxMjIpO1xyXG4gICAgb3BhY2l0eTogMC45XHJcbn1cclxuLmlucHV0LVN0eWxle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG59XHJcbi5zZW5ke1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5tYWlsLW1pbml7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL21haWwtbWluaS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ob3ZlcntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG4uZmFjZWJvb2stbWluaXtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE3NHB4O1xyXG4gICAgd2lkdGg6IDY2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ZhY2Vib29rLW1pbmkucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG4ud2hhdHNhcHAtbWluaXtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEyMnB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3doYXRzc2FwcC1taW5pLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ucGhvbmUtbWluaXtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIyNnB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3Bob25lLW1pbmkuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy90ZWNobm8tam8tbWFnbmV0LmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4OyBcclxuICAgIHRvcDogLTUwcHg7IFxyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnBpY3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvcGljdHVyZS1qby5qcGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvKmJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTsqL1xyXG4gICAgbWFyZ2luLXRvcDogLTQ5cHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAyNDRweDtcclxufVxyXG4ubWFpbi1waWN0dXJle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzLzM0d2FzaGluZy5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgLypib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxufVxyXG4uYWxpZ257XHJcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbn1cclxuLmltYWdlLVN0eWxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcbi50b3AtU3R5bGV7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM3ZGM5ZmY7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSAsIGJsdWUpO1xyXG59XHJcbi5ib3JkZXItUmFkaXVzLVJpZ2h0e1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxufVxyXG4uYm9yZGVyLVJhZGl1cy1MZWZ0e1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG59XHJcbi5pbWFnZTF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMv15DXl9eo15nXldeqLdee15zXkNeUMi5wbmdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbn1cclxuLmltYWdlMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvdHphZGlrLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbn1cclxuLmltYWdlM3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9zaGFrZS5wbmdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbn1cclxuLmltYWdlNHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9wcmljZS5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbn1cclxuXHJcbi5pbWFnZTV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdHNhZGlrLWNyb3AuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MyYzA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcbi5mYWNlYm9va3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9mYWNlYm9vay5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1MHB4O1xyXG59XHJcbi53aGF0c2FwcHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy93aGF0c2FwcC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5pbnN0ZWdyYW17XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW5zdGVncmFtLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmhlYWRsaW5lLVRleHR7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuLm1paWRsZS1IZWFkbGluZS1UZXh0e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5ib3R0b20tVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ubS1Ub3B7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7IFxyXG4gICAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4uY29udGFjdC1IZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmNhcm91c2VsLVRleHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnRleHQxe1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmJyYW5kMXtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9hbWFuYS1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kMntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9ibG9vbWJlcmctYnJhbmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDN7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvU2Ftc3VuZy1icmFuZC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kNHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90YWRpcmFuLWJyYW5kLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYnJhbmQ1e1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL1doaXJscG9vbC1icmFuZDEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDZ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYmVrby1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kN3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9icm90aGVyLWJyYW5kLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4udGlwMXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnRpcDEgOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFjdDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5jb250YWN0MSA6aG92ZXJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hYm91dDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5hYm91dDEgOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbXlTaWRlbmF2IGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTkwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gIH1cclxuICBcclxuICAjbXlTaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgI2Fib3V0IHtcclxuICAgIHRvcDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgfVxyXG4gIFxyXG4gICNibG9nIHtcclxuICAgIHRvcDogMTMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICAjcHJvamVjdHMge1xyXG4gICAgdG9wOiAxOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWN0IHtcclxuICAgIHRvcDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1XHJcbiAgfVxyXG4gIC5oZWFkZXIxe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAuaGVhZGVyMntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLnRleHQxe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzQ2cHgpIHtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4OyBcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDgwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQye1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7IFxyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4OyBcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1TdHlsZXtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5jb2wtMXtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAyO1xyXG4gICAgICAgIGZsZXg6IDEgMCAxNS4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTguMzMzMzMzJTtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQye1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDN7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNntcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubWlpZGxlLUhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC8qIC5pbWFnZS1TdHlsZXtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfSAqL1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4OyBcclxuICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U1e1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ2e1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDJ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ1e1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgLmFib3V0MXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpcDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWN0MXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyBcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDN7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ1e1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcycHgpIHtcclxuICAgIC5hYm91dDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXAxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGFjdDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5icmFuZDF7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5icmFuZDJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDN7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDR7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDZ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDd7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5oZWFkbGluZS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuICAgIC5taWlkbGUtSGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAvKiAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH0gKi9cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGhlaWdodDogNjlweDtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGhlaWdodDogNTBweDsgXHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1IZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDRweCkge1xyXG4gICAgICAubS1Ub3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIC5jb2wtMXtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgICAuaW1hZ2U1e1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXIxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyMntcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XHJcbiAgICAuaGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubWlpZGxlLUhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLyogLmxvZ297XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pbnB1dC1TdHlsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LUhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmV4dHJhe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubS1Ub3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgfSAqL1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cclxuICAgIC5pbWFnZTV7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcjF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXIye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXQtU3R5bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgI215U2lkZW5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgLndoYXRzYXBwe1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIC5pbnN0ZWdyYW17XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgICAuY2FyZHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZW5ke1xyXG4gICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzRweCkge1xyXG4gICAgLyogLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIH1cclxuICAgIC5tLVRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZXh0cmF7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50ZXh0MXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIH0gKi9cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC8qIC50ZXh0MXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgfSAqL1xyXG4gIC8qIC5hYm91dDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC50aXAxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfSAqL1xyXG4gIC5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmNvbC0zIHtcclxuICAgICAgICAtbXMtZmxleDogMCAwIDI1JTtcclxuICAgICAgICBmbGV4OiAwIDAgMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzUlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlNXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAgIC53aGF0c2FwcHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmluc3RlZ3JhbXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC0xIHtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAyO1xyXG4gICAgICAgIGZsZXg6IDEwIDAgMjAuMzMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwLjMzMzMzMyU7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAuc2VuZHtcclxuICAgICAgICB3aWR0aDogMjQ1cHg7XHJcbiAgICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbi5hYm91dDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC50aXAxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxMHB4KSB7XHJcbiAgICAvKiAuY29sLTEge1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XHJcbiAgICAgICAgZmxleDogMTAgMCAyMC4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAuMzMzMzMzJTtcclxuICAgIH0gKi9cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgfVxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ykogan\NewSite\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map