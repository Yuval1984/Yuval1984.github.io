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
      decls: 228,
      vars: 0,
      consts: [[1, "row", "container-fluid", "main-picture"], [1, "container-fluid", 2, "text-align", "center", "height", "50px"], [1, "Headline-Joe"], [1, "row", "container-fluid", "nav-bar-row"], [1, "row", "container-fluid", 2, "z-index", "1000", "opacity", "1"], ["href", "tel:+9720544818383", 1, "col", "card"], [1, "col", "contact1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#contact1", 2, "color", "white", "transition", "transform 400ms ease-out 0"], [1, "col", "tip1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#washingMachine", 2, "color", "white"], [1, "col", "about1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#details", 2, "color", "white"], [1, "H", "row", "container-fluid"], [1, "col", "extra"], [1, "col-1", "image-Style", "image1", "border-Radius-Left"], [1, "col-1", "image-Style", "image2"], [1, "col-1", "image-Style", "image3"], [1, "col-1", "image-Style", "border-Radius-Right", "image4"], [1, "row", "container-fluid"], [1, "Allbrand"], ["id", "details", "dir", "rtl", 2, "color", "white", "background-color", "teal"], [1, "row", "container-fluid", 2, "text-align", "right"], [1, "col"], [1, "row", "header", 2, "margin-bottom", "30px", "color", "white"], [1, "text"], [1, "col-3", "image5"], [1, "row", "container", 2, "text-align", "right", "margin-bottom", "30px", "margin-top", "30px"], [1, "row", "container", "header"], ["dir", "rtl", 1, "container-fluid", 2, "text-align", "center"], [1, "header"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "row", 2, "height", "450px", "margin-top", "50px"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "5"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "text-align", "center"], ["src", "../assets/meyabesh.jpg", "alt", "First slide", 2, "margin-bottom", "40px"], [1, "carousel-caption", "d-none", "d-md-block", 2, "color", "black"], [1, "carousel-Text"], [1, "carousel-item", 2, "text-align", "center"], ["src", "../assets/refrigirator.jpg", "alt", "second slide", 2, "margin-bottom", "70px"], ["src", "../assets/oven builtIn.jpg", "alt", "Third slide", 2, "margin-bottom", "50px"], ["src", "../assets/micro.png", "alt", "Fourth slide", 2, "margin-bottom", "60px"], ["src", "../assets/oven.gif", "alt", "Fifth slide", 2, "margin-bottom", "70px"], ["src", "../assets/washing.jpg", "alt", "Sixth slide", 2, "margin-bottom", "70px"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "washingMachine", "dir", "rtl", 2, "background-color", "gold", "margin-top", "-30px"], [1, "row", "container", 2, "text-align", "right"], [1, "row", "header1", 2, "margin-bottom", "30px", "color", "blue"], [1, "row", "container", "header2"], [1, "text1"], [1, "row", "container", 2, "text-align", "right", "margin-bottom", "30px"], ["id", "refrigirator", "dir", "rtl", 2, "background-color", "gold", "margin-top", "-30px"], ["id", "ovens", "dir", "rtl", 2, "background-color", "gold", "margin-top", "-30px"], ["id", "contact1", "dir", "rtl", 1, "Contact", "row", "container-fluid", 2, "margin-top", "-30px"], [2, "text-align", "right", "margin-right", "30px", "margin-top", "100px"], [1, "contact-Header"], [1, "container-fluid", "top", 2, "text-align", "center"], ["dir", "rtl", "placeholder", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D5\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", 1, "input-Style"], [1, "container-fluid", 2, "text-align", "center"], ["dir", "rtl", "placeholder", "\u05DE\u05E1 \u05D8\u05DC\u05E4\u05D5\u05DF", 1, "input-Style"], ["dir", "rtl", "placeholder", "\u05D0\u05D9 \u05DE\u05D9\u05D9\u05DC", 1, "input-Style"], [1, "btn", "btn-warning", "send", 2, "border-radius", "30px"], ["id", "mySidenav", 1, "sidenav"], ["href", "#details", "id", "about"], ["href", "#washingMachine", "id", "blog"], ["href", "#", "id", "projects"], ["href", "#contact1", "id", "contact"], [1, "row", "container-fluid", 2, "height", "160px", "background-color", "black"], ["href", "https://www.facebook.com/%D7%98%D7%9B%D7%A0%D7%95-%D7%92%D7%95-609578502437820/", 1, "col-1", "facebook"], ["href", "https://api.whatsapp.com/send?phone=+972544818383&text= \u05E9\u05DC\u05D5\u05DD, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D1\u05D1\u05D9\u05EA\u05D9", 1, "col-1", "whatsapp", 2, "margin-left", "10px"], ["href", "mailto:joelkr@gmail.com", 1, "col-1", "mail", 2, "margin-left", "10px"], ["href", "tel:+9720544818383", 1, "col-1", "phone", 2, "margin-left", "10px"], ["clas", "container-fluid", 2, "background-color", "black", "height", "100px", "text-align", "center", "padding-top", "30px"], ["href", "https://api.whatsapp.com/send?phone=+972508451651&text= \u05E9\u05DC\u05D5\u05DD, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8", 2, "color", "white"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05D8\u05DB\u05E0\u05D5 \u05D2'\u05D5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05D8\u05D9\u05E4\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05D9\u05E6\u05D0\u05EA\u05D9 \u05E6\u05D3\u05D9\u05E7 \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05DC \u05D7\u05D9\u05D9\u05DD \u05D4\u05DB\u05D8 \u05D1\u05DB\u05DC \u05D4\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD: \u05D0\u05DE\u05D9\u05E0\u05D5\u05EA, \u05DE\u05D7\u05D9\u05E8, \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA, \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u05D4\u05E0\u05D3\u05E1\u05D0\u05D9 \u05D5\u05D8\u05DB\u05E0\u05D0\u05D9 \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD, \u05D7\u05E9\u05DE\u05DC\u05D0\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D5\u05E1\u05DE\u05DA \u05DC\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05D1\u05D9\u05EA\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D5\u05DE\u05E7\u05E4\u05D9\u05D0\u05D9\u05DD \u05DE\u05DB\u05DC \u05D4\u05E1\u05D5\u05D2\u05D9\u05DD \u05D5\u05D4\u05D7\u05D1\u05E8\u05D5\u05EA: \u05D3\u05D9\u05E1\u05E4\u05E8\u05D5\u05E1\u05D8, \u05E0\u05D5\u05E4\u05E8\u05D5\u05E1\u05D8, \u05D4\u05D9\u05D1\u05E8\u05D9\u05D3\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u05E9\u05DC\u05D9\u05D8\u05D4 \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D1\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u05DE\u05D5\u05DE\u05D7\u05D4 \u05D1\u05D7\u05D1\u05E8\u05D5\u05EA :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Samsung, Amana, Whirlpool, Beko, Amcor, Tadiran, Blumberg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u05DE\u05D9\u05DC\u05D5\u05D9 \u05D2\u05D6 \u05DC\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u05D4\u05D7\u05DC\u05E4\u05EA \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD, \u05D0\u05D9\u05D9\u05E1 \u05DE\u05D9\u05D9\u05E7\u05E8\u05D9\u05DD, \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D1\u05E7\u05E8\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u05D0\u05D6\u05D5\u05E8\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u05DB\u05DC \u05D0\u05D6\u05D5\u05E8 \u05D4\u05E9\u05E8\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u05DE\u05E2\u05DC 10 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05E0\u05D5\u05D7\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05E2\u05DC \u05DB\u05DC \u05D4\u05D7\u05DC\u05E4\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05DE\u05DB\u05DC \u05D4\u05E1\u05D5\u05D2\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ol", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "li", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "li", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "li", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h5", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05D9\u05D1\u05E9\u05D9 \u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D1\u05E0\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05E7\u05E8\u05D5\u05D2\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h1", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05D4\u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "\u05D0\u05D9\u05DA \u05D1\u05D5\u05D7\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05DC \u05D4\u05DE\u05DB\u05D5\u05E0\u05D4 ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u05DC\u05E4\u05D9 \u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05E4\u05E9\u05D5\u05EA \u05E9\u05D9\u05E9 \u05D1\u05DE\u05E9\u05E4\u05D7\u05D4. \u05DC\u05D1\u05D9\u05EA \u05E2\u05DD 3 \u05D0\u05D5 4 \u05E0\u05E4\u05E9\u05D5\u05EA \u05EA\u05EA\u05D0\u05D9\u05DD \u05DE\u05DB\u05D5\u05E0\u05D4 \u05D1\u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05DC 5 \u05D0\u05D5 6 \u05E7\u05D9\u05DC\u05D5, \u05D0\u05D1\u05DC \u05E7\u05D7\u05D5 \u05D8\u05D9\u05E4: \u05E2\u05D3\u05D9\u05E3 \u05DC\u05E7\u05E0\u05D5\u05EA \u05DE\u05DB\u05D5\u05E0\u05D4 \u05E2\u05DD \u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E7\u05E6\u05EA \u05D9\u05D5\u05EA\u05E8 \u05D2\u05D3\u05D5\u05DC\u05D4, \u05E0\u05D2\u05D9\u05D3 7 \u05E7\u05D9\u05DC\u05D5. \u05DB\u05DA \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DB\u05D1\u05E1 \u05DB\u05DE\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D1\u05E4\u05E2\u05DD \u05D0\u05D7\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05D7\u05DC\u05E7 \u05D0\u05EA \u05D4\u05DB\u05D1\u05D9\u05E1\u05D5\u05EA, \u05D5\u05DC\u05D7\u05E1\u05D5\u05DA \u05D6\u05DE\u05DF, \u05DE\u05D9\u05DD \u05D5\u05D7\u05E9\u05DE\u05DC. \u05D0\u05DD \u05D0\u05EA\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 \u05D2\u05D3\u05D5\u05DC\u05D4, \u05E7\u05D7\u05D5 \u05DE\u05DB\u05D5\u05E0\u05D4 \u05D1\u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05DC 8 \u05E7\u05D9\u05DC\u05D5 \u05D5\u05DE\u05E2\u05DC\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u05E1\u05D7\u05D9\u05D8\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05D0\u05D5 \u05D0\u05D8\u05D9\u05EA?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u05D1\u05D7\u05E8\u05D5 \u05DE\u05DB\u05D5\u05E0\u05EA \u05DB\u05D1\u05D9\u05E1\u05D4 \u05E2\u05DD \u05DB\u05DE\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D5\u05D9\u05D5\u05EA \u05E1\u05D7\u05D9\u05D8\u05D4, \u05DB\u05E9\u05D4\u05DE\u05E7\u05D9\u05E1\u05DE\u05DC\u05D9\u05EA \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DC\u05E4\u05D7\u05D5\u05EA 800 \u05E1\u05DC\"\u05D3, \u05DB\u05DC\u05D5\u05DE\u05E8 \u05E1\u05D9\u05D1\u05D5\u05D1\u05D9\u05DD \u05DC\u05D3\u05E7\u05D4. \u05DB\u05DB\u05DC \u05E9\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D4\u05E1\u05D9\u05D1\u05D5\u05D1 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8, \u05D4\u05E1\u05D7\u05D9\u05D8\u05D4 \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D5\u05DE\u05D4\u05D9\u05E8\u05D4 \u05D9\u05D5\u05EA\u05E8. \u05D1\u05DB\u05D1\u05D9\u05E1\u05D4 \u05E2\u05D3\u05D9\u05E0\u05D4 \u05EA\u05E8\u05E6\u05D5 \u05DC\u05DB\u05D1\u05E1 \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05E0\u05DE\u05D5\u05DB\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05D0 \u05DC\u05D4\u05E8\u05D5\u05E1 \u05D0\u05EA \u05D4\u05D1\u05D2\u05D3\u05D9\u05DD, \u05D0\u05D1\u05DC \u05D1\u05E9\u05D1\u05D9\u05DC \u05DE\u05D2\u05D1\u05D5\u05EA \u05D5\u05D2'\u05D9\u05E0\u05E1\u05D9\u05DD \u05D7\u05E9\u05D5\u05D1 \u05E9\u05EA\u05D4\u05D9\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 \u2013 \u05D6\u05D4 \u05D9\u05D7\u05E1\u05D5\u05DA \u05DC\u05DB\u05DD \u05D1\u05D6\u05DE\u05DF \u05D4\u05D9\u05D9\u05D1\u05D5\u05E9.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u05E4\u05D9\u05E7\u05D5\u05D3 \u05DE\u05DB\u05E0\u05D9 \u05D0\u05D5 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u05D9\u05E9 \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05E4\u05D9\u05E7\u05D5\u05D3 \u05DE\u05DB\u05E0\u05D9 \u05D5\u05D9\u05E9 \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05E4\u05D9\u05E7\u05D5\u05D3 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9. \u05DE\u05D4 \u05D4\u05D4\u05D1\u05D3\u05DC? \u05E4\u05D9\u05E7\u05D5\u05D3 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E0\u05D5\u05D7 \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D5\u05D9\u05D5\u05EA\u05E8 \u05DE\u05E9\u05D5\u05DB\u05DC\u05DC, \u05D0\u05D1\u05DC \u05DB\u05E9\u05D4\u05D5\u05D0 \u05DE\u05EA\u05E7\u05DC\u05E7\u05DC \u2013 \u05E2\u05DC\u05D5\u05EA \u05D4\u05EA\u05D9\u05E7\u05D5\u05DF \u05D9\u05E7\u05E8\u05D4 \u05DE\u05D0\u05D5\u05D3. \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05E2\u05DD \u05E4\u05D9\u05E7\u05D5\u05D3 \u05DE\u05DB\u05E0\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA \u05D5\u05E4\u05D7\u05D5\u05EA \u05E0\u05D5\u05D7\u05D5\u05EA \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D0\u05D1\u05DC \u05D4\u05DF \u05D4\u05E8\u05D1\u05D4 \u05E4\u05D7\u05D5\u05EA \u05E8\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05EA\u05E7\u05DC\u05D5\u05EA, \u05D5\u05D2\u05DD \u05D4\u05E8\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D6\u05D5\u05DC \u05DC\u05EA\u05E7\u05DF \u05D0\u05D5\u05EA\u05DF. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h1", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "\u05E0\u05E7\u05D5 \u05D0\u05EA \u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05DE\u05E0\u05D5\u05E2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\u05EA\u05E4\u05E7\u05D9\u05D3\u05D5 \u05E9\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05D5\u05D0 \u05DC\u05E9\u05D0\u05D5\u05D1 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05E8\u05E8 \u05D0\u05EA \u05D4\u05DE\u05E0\u05D5\u05E2. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05E4\u05EA\u05D7 \u05D4\u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05E1\u05EA\u05D5\u05DD, \u05D4\u05DE\u05E0\u05D5\u05E2 \u05D9\u05EA\u05D7\u05DE\u05DD \u05D5\u05D1\u05E9\u05DC\u05D1 \u05DE\u05E1\u05D5\u05D9\u05DD \u05D0\u05E3 \u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05E4\u05E1\u05D9\u05E7 \u05DC\u05E2\u05D1\u05D5\u05D3. \u05D0\u05EA \u05E0\u05D9\u05E7\u05D9\u05D5\u05DF \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D1\u05E6\u05E2 \u05D1\u05E2\u05E6\u05DE\u05DB\u05DD. \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05E4\u05EA\u05D7 \u05D4\u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05E0\u05DE\u05E6\u05D0 \u05D1\u05D7\u05DC\u05E7\u05D5 \u05D4\u05D0\u05D7\u05D5\u05E8\u05D9 \u05D4\u05EA\u05D7\u05EA\u05D5\u05DF \u05E9\u05DC \u05D4\u05DE\u05E7\u05E8\u05E8, \u05E0\u05E7\u05D5 \u05D0\u05D5\u05EA\u05D5 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05D1\u05E8\u05E9\u05EA \u05D0\u05D5 \u05E9\u05D5\u05D0\u05D1 \u05D0\u05D1\u05E7 \u05D5\u05D5\u05D3\u05D0\u05D5 \u05E9\u05DE\u05E2\u05D1\u05E8 \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E4\u05EA\u05D5\u05D7. \u05DE\u05D5\u05DE\u05DC\u05E5 \u05DB\u05DE\u05D5\u05D1\u05DF \u05DC\u05E0\u05EA\u05E7 \u05D0\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8 \u05DE\u05D4\u05D7\u05E9\u05DE\u05DC \u05D8\u05E8\u05DD \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E4\u05E2\u05D5\u05DC\u05D4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u05D0\u05DC \u05EA\u05E6\u05DE\u05D9\u05D3\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8 \u05DC\u05E7\u05D9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u05E9\u05EA\u05D3\u05DC\u05D5 \u05E9\u05DC\u05D0 \u05DC\u05D4\u05E6\u05DE\u05D9\u05D3 \u05D0\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8 \u05DC\u05D2\u05DE\u05E8\u05D9 \u05DC\u05E7\u05D9\u05E8 \u05D0\u05D5 \u05DC\u05DB\u05DC \u05D2\u05D5\u05E3 \u05D0\u05D7\u05E8. \u05D4\u05DE\u05E7\u05E8\u05E8 \u05D4\u05D5\u05D0 \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D7\u05E9\u05DE\u05DC\u05D9 \u05E9\u05E4\u05D5\u05DC\u05D8 \u05D7\u05D5\u05DD, \u05D0\u05DD \u05EA\u05E6\u05DE\u05D9\u05D3\u05D5 \u05D0\u05D5\u05EA\u05D5 \u05DC\u05E7\u05D9\u05E8, \u05DC\u05D7\u05D5\u05DD \u05DC\u05D0 \u05D9\u05D4\u05D9\u05D4 \u05DC\u05D0\u05DF \u05DC\u05D1\u05E8\u05D5\u05D7 \u05D5\u05D4\u05DE\u05E7\u05E8\u05E8 \u05D9\u05EA\u05D7\u05DE\u05DD \u05D9\u05EA\u05E8 \u05E2\u05DC \u05D4\u05DE\u05D9\u05D3\u05D4. \u05D4\u05E8\u05D7\u05D9\u05E7\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8 \u05DB- 20 \u05E1\u05E0\u05D8\u05D9\u05DE\u05D8\u05E8\u05D9\u05DD \u05DE\u05D4\u05E7\u05D9\u05E8 \u05D5\u05DB\u05DA \u05EA\u05DE\u05E0\u05E2\u05D5 \u05D0\u05EA \u05D4\u05D1\u05E2\u05D9\u05D4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u05D5\u05D3\u05D0\u05D5 \u05E9\u05D4\u05DE\u05E7\u05E8\u05E8 \u05D0\u05D8\u05D5\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\u05D5\u05D3\u05D0\u05D5 \u05E9\u05D4\u05D3\u05DC\u05EA \u05E1\u05D2\u05D5\u05E8\u05D4 \u05D4\u05D9\u05D8\u05D1, \u05E2\u05DC \u05DE\u05E0\u05EA \u05E9\u05D4\u05E7\u05D5\u05E8 \u05DC\u05D0 \u05D9\u05D1\u05E8\u05D7 \u05D4\u05D7\u05D5\u05E6\u05D4. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05D3\u05DC\u05EA \u05DE\u05E1\u05E8\u05D1\u05EA \u05DC\u05D4\u05D9\u05E1\u05D2\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D4\u05E8\u05DE\u05D8\u05D9, \u05D0\u05D5 \u05E9\u05D4\u05D9\u05D0 \u05E0\u05E4\u05EA\u05D7\u05EA \u05D1\u05E7\u05DC\u05D5\u05EA \u05D9\u05EA\u05E8\u05D4, \u05D1\u05D3\u05E7\u05D5 \u05D0\u05EA \u05D2\u05D5\u05DE\u05D9\u05D5\u05EA \u05D4\u05D0\u05D8\u05DD \u05E9\u05E2\u05DC \u05D2\u05D1\u05D9 \u05D3\u05DC\u05EA \u05D4\u05DE\u05E7\u05E8\u05E8. \u05D1\u05D3\u05E7\u05D5 \u05D0\u05DD \u05D4\u05D2\u05D5\u05DE\u05D9 \u05D9\u05E9\u05E8 \u05D0\u05D5 \u05E2\u05E7\u05D5\u05DD, \u05D0\u05DD \u05D4\u05D5\u05D0 \u05D9\u05D1\u05E9 \u05D0\u05D5 \u05D1\u05DC\u05D5\u05D9. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05DB\u05DF, \u05E2\u05DC\u05D9\u05DB\u05DD \u05DC\u05D4\u05D7\u05DC\u05D9\u05E3 \u05D0\u05EA \u05D4\u05D2\u05D5\u05DE\u05D9\u05D5\u05EA \u05D1\u05DE\u05D4\u05E8\u05D4. \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D1\u05E6\u05E2 \u05D6\u05D0\u05EA \u05D1\u05E2\u05E6\u05DE\u05DB\u05DD, \u05D0\u05DA \u05D0\u05EA\u05DD \u05DE\u05E8\u05D2\u05D9\u05E9\u05D9\u05DD \u05E9\u05D6\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1 \u05DE\u05D9\u05D3\u05D9, \u05D4\u05D6\u05DE\u05D9\u05E0\u05D5 \u05D1\u05E2\u05DC \u05DE\u05E7\u05E6\u05D5\u05E2 \u05DC\u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h1", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05EA\u05E0\u05D5\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " \u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05DC\u05E0\u05D9\u05E7\u05D5\u05D9 \u05E2\u05E6\u05DE\u05D9 \u05E9\u05DC \u05D4\u05EA\u05E0\u05D5\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u05D1\u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05D9\u05DD \u05D5\u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05E7\u05D9\u05D9\u05DE\u05EA \u05D4\u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \u05E9\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05DC\u05E0\u05D9\u05E7\u05D5\u05D9 \u05E2\u05E6\u05DE\u05D9, \u05D6\u05D4\u05D5 \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF \u05D4\u05D0\u05D9\u05D3\u05D9\u05D0\u05DC\u05D9. \u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05D6\u05D5 \u05DC\u05DE\u05E2\u05E9\u05D4 \u05DE\u05E2\u05DC\u05D4 \u05D0\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D1\u05EA\u05E0\u05D5\u05E8 \u05DC\u05DE\u05E2\u05DC 500 \u05DE\u05E2\u05DC\u05D5\u05EA, \u05D5\u05D1\u05E1\u05D5\u05E3 \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05E0\u05D9\u05E7\u05D5\u05D9 \u05DB\u05DC \u05D4\u05E9\u05D5\u05DE\u05E0\u05D9\u05DD \u05D4\u05D5\u05E4\u05DB\u05D9\u05DD \u05DC\u05E4\u05D9\u05D7 \u05D5\u05DB\u05DC \u05E9\u05E6\u05E8\u05D9\u05DA \u05D4\u05D5\u05D0 \u05DC\u05D4\u05E2\u05D1\u05D9\u05E8 \u05DE\u05D8\u05DC\u05D9\u05EA \u05D5\u05DC\u05E0\u05D2\u05D1 \u05D0\u05EA \u05D4\u05E4\u05D9\u05D7. \u05D6\u05D4 \u05DE\u05D5\u05E0\u05E2 \u05D4\u05E6\u05D8\u05D1\u05E8\u05D5\u05EA \u05E9\u05DC \u05DC\u05DB\u05DC\u05D5\u05DA \u05D1\u05D3\u05E4\u05E0\u05D5\u05EA, \u05D5\u05DE\u05D5\u05E0\u05E2 \u05E6\u05D5\u05E8\u05DA \u05D1\u05D7\u05D5\u05DE\u05E8\u05D9 \u05E0\u05D9\u05E7\u05D5\u05D9 \u05D7\u05D6\u05E7\u05D9\u05DD \u05D5\u05D1\u05E9\u05E4\u05E9\u05D5\u05E3 \u05D4\u05E4\u05D5\u05D2\u05E2 \u05D1\u05E6\u05D9\u05E4\u05D5\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\u05D4\u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05D0\u05E8\u05EA \u05D4\u05EA\u05E0\u05D5\u05E8 \u05D3\u05D5\u05DC\u05E7 \u05E2\u05DC \u05D7\u05D5\u05DD \u05D2\u05D1\u05D5\u05D4 \u05DC\u05DE\u05E9\u05DA \u05E9\u05E2\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u05EA\u05E0\u05D5\u05E8 \u05D0\u05E4\u05D9\u05D9\u05D4 \u05D1\u05D9\u05EA\u05D9 \u05DC\u05D0 \u05D0\u05DE\u05D5\u05E8 \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E8\u05E6\u05D9\u05E4\u05D4 \u05E2\u05DC \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05DE\u05E7\u05E1\u05D9\u05DE\u05DC\u05D9\u05EA, \u05DC\u05DB\u05DF, \u05E2\u05D3\u05D9\u05E3 \u05DC\u05D0 \u05DC\u05D4\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D3\u05D5\u05DC\u05E7 \u05E2\u05DC \u05D7\u05D5\u05DD \u05D2\u05D1\u05D5\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DB\u05DE\u05D4 \u05E9\u05E2\u05D5\u05EA \u05D1\u05E8\u05E6\u05D9\u05E4\u05D5\u05EA, \u05D0\u05DC\u05D0 \u05DC\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D5 \u05DC\u05D4\u05EA\u05E7\u05E8\u05E8 \u05D1\u05D9\u05DF \u05DC\u05D1\u05D9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "\u05E2\u05E7\u05D1\u05D5 \u05D0\u05D7\u05E8 \u05D4\u05EA\u05E7\u05E2. \u05D0\u05DD \u05D4\u05D5\u05D0 \u05D7\u05E8\u05D5\u05DA \u05D3\u05D0\u05D2\u05D5 \u05DC\u05D4\u05D7\u05DC\u05D9\u05E4\u05D5 \u05D1\u05D4\u05E7\u05D3\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h5", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\u05D7\u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05E9\u05E7\u05E2 \u05D5\u05D4\u05EA\u05E7\u05E2 \u05E9\u05DC \u05EA\u05E0\u05D5\u05E8 \u05D4\u05D0\u05E4\u05D9\u05D9\u05D4 \u05D5\u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05DD \u05DC\u05D0 \u05E0\u05DE\u05E1\u05D5, \u05D1\u05E8\u05D2\u05E2 \u05E9\u05D4\u05EA\u05E7\u05E2 \u05DB\u05D1\u05E8 \u05D7\u05E8\u05D5\u05DA, \u05D7\u05E9\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05D8\u05E4\u05DC \u05D1\u05DB\u05DA \u05D5\u05DC\u05D4\u05D7\u05DC\u05D9\u05E3 \u05D0\u05D5\u05EA\u05D5. \u05DE\u05D3\u05D5\u05D1\u05E8 \u05D1\u05E2\u05DC\u05D5\u05EA \u05DE\u05D0\u05D5\u05D3 \u05E0\u05DE\u05D5\u05DB\u05D4 \u05E9\u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05DE\u05E0\u05D5\u05E2 \u05E0\u05D6\u05E7 \u05E8\u05E6\u05D9\u05E0\u05D9 \u05DC\u05EA\u05E0\u05D5\u05E8, \u05D5\u05D7\u05DE\u05D5\u05E8 \u05DE\u05DB\u05DA \u05DC\u05D1\u05D9\u05EA \u05E2\u05E6\u05DE\u05D5, \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC \u05E4\u05E8\u05D9\u05E6\u05EA \u05E9\u05E8\u05D9\u05E4\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h4", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u05D4\u05DB\u05E0\u05E1 \u05E4\u05E8\u05D8\u05D9\u05DD \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u05E9\u05DC\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\u05D8\u05D9\u05E4\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "\u05D2\u05DC\u05E8\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05E0\u05D1\u05E0\u05D4 \u05E2\"\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\u05D9\u05D5\u05D1\u05DC \u05E7\u05D5\u05D2\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".H[_ngcontent-%COMP%]{\r\n    height: 220px;\r\n    background-color: #ffffff;\r\n    border-width: 1px;\r\n    \r\n    \r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n.temp-Text1[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.header-Style[_ngcontent-%COMP%]{\r\n    height: 400px; \r\n    width: 100%;\r\n    background-color: brown;\r\n    box-shadow: 0 2px 20px 0 rgba(50, 50, 186, 0.16);\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.Contact[_ngcontent-%COMP%]{\r\n    background-color: #7dc9ff;\r\n    width: 100%; \r\n    height: 550px; \r\n    opacity: 1;\r\n}\r\n.top[_ngcontent-%COMP%]{\r\n    z-index: 10;\r\n}\r\n.nav-bar-row[_ngcontent-%COMP%]{\r\n    margin-top: 100px; \r\n    height: 100px; \r\n    background-color: rgb(51, 122, 122);\r\n    opacity: 0.9\r\n}\r\n.input-Style[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 50px;\r\n    margin-top: 20px;\r\n    padding: 12px 20px;\r\n    margin-right: 25px;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n\r\n    box-sizing: border-box;\r\n    border-radius: 60px;\r\n}\r\n.send[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n}\r\n.Headline-Joe[_ngcontent-%COMP%]{\r\n    font-size: 70px; \r\n    font-weight: bold;\r\n}\r\n.mail-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 70px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('mail-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-top-right-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.hover[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    -webkit-transition-duration: 0.5s;\r\n            transition-duration: 0.5s;\r\n}\r\n.facebook-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 174px;\r\n    width: 66px;\r\n    height: 50px;\r\n    background-image: url('facebook-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n}\r\n.whatsapp-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 122px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('whatssapp-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.phone-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 226px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('phone-mini.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background-image: url('techno-jo-magnet.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 20px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    margin-top: 10px;\r\n    height: 200px;\r\n    margin-left: 100px; \r\n    top: -50px; \r\n    right: 10px;\r\n}\r\n.pic[_ngcontent-%COMP%]{\r\n    background-image: url('picture-jo.jpeg');\r\n    background-color: #cccccc;\r\n    border-radius: 20px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 0px;\r\n    \r\n    margin-top: -49px;\r\n    height: 400px;\r\n    margin-left: 125px;\r\n    position: absolute;\r\n    z-index: 10;\r\n    left: 30px;\r\n    top: 244px;\r\n}\r\n.main-picture[_ngcontent-%COMP%]{\r\n    background-image: url('34washing.jpg'); \r\n    background-color: #cccccc; \r\n    \r\n    background-position: center; \r\n    background-repeat: repeat; \r\n    background-size: contain; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    height: 400px;\r\n    background-attachment: fixed;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n}\r\n.align[_ngcontent-%COMP%]{\r\n    margin-left: 230px;\r\n}\r\n.image-Style[_ngcontent-%COMP%]{\r\n  background-color: bisque;\r\n  border-style: solid;\r\n  border-width: 5px;\r\n  border-color: black;\r\n  height: 125px;\r\n  margin-top: -30px;\r\n  margin-left: 2px;\r\n}\r\n.top-Style[_ngcontent-%COMP%]{\r\n    \r\n    background-image: -webkit-gradient(linear, left top, right top, from(white) , to(blue));\r\n    background-image: linear-gradient(to right, white , blue);\r\n}\r\n.border-Radius-Right[_ngcontent-%COMP%]{\r\n    border-top-right-radius: 6px;\r\n}\r\n.border-Radius-Left[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 6px;\r\n}\r\n.image1[_ngcontent-%COMP%]{\r\n    background-image: url('\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA-\u05DE\u05DC\u05D0\u05D42.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image2[_ngcontent-%COMP%]{\r\n    background-image: url('tzadik.jpg');\r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image3[_ngcontent-%COMP%]{\r\n    background-image: url('shake.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image4[_ngcontent-%COMP%]{\r\n    background-image: url('price.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image5[_ngcontent-%COMP%]{\r\n    background-image: url('tsadik-crop.jpg');\r\n    background-color: #cccccc;\r\n    border-radius: 30px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    height: 400px;\r\n    margin-left: 50px;\r\n    margin-top: 30px;\r\n    background-color: #c3c2c0;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n}\r\n.facebook[_ngcontent-%COMP%]{\r\n    background-image: url('facebook.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 550px;\r\n}\r\n.whatsapp[_ngcontent-%COMP%]{\r\n    background-image: url('whatsapp.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.instegram[_ngcontent-%COMP%]{\r\n    background-image: url('instegram.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.mail[_ngcontent-%COMP%]{\r\n    background-image: url('mail.jpg');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.phone[_ngcontent-%COMP%]{\r\n    background-image: url('phone.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n}\r\n.miidle-Headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n}\r\n.bottom-Text[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.m-Top[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    margin-left: 30px; \r\n    margin-top: 120px; \r\n    height: 120px; \r\n    width: 30px;\r\n}\r\n.contact-Header[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.carousel-Text[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n.text1[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n}\r\n.Allbrand[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100px;\r\n    background-image: url('Allbrand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand1[_ngcontent-%COMP%]{\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('amana-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand2[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('bloomberg-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand3[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Samsung-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand4[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('tadiran-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand5[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Whirlpool-brand1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand6[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('beko-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand7[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('brother-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.tip1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.tip1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.contact1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.contact1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.about1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.about1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: -90px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    padding: 10px;\r\n    width: 120px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    border-radius: 0 5px 5px 0;\r\n  }\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    left: 0;\r\n  }\r\n#about[_ngcontent-%COMP%] {\r\n    top: 70px;\r\n    background-color: #4CAF50;\r\n  }\r\n#blog[_ngcontent-%COMP%] {\r\n    top: 130px;\r\n    background-color: #2196F3;\r\n  }\r\n#projects[_ngcontent-%COMP%] {\r\n    top: 190px;\r\n    background-color: #f44336;\r\n  }\r\n#contact[_ngcontent-%COMP%] {\r\n    top: 250px;\r\n    background-color: #555\r\n  }\r\n.header1[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n.text1[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n@media only screen and (max-width: 1346px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1300px) {\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 160px; \r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 480px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 80px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1200px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 100px; \r\n        width: 25px;\r\n    }\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 120px; \r\n        top: -20px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 70px;\r\n    }\r\n    .Headline-Joe[_ngcontent-%COMP%]{\r\n      font-size: 60px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1000px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 80px; \r\n        width: 20px;\r\n    }\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        border-width: 2px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%]{\r\n        -webkit-box-flex: 2;\r\n        flex: 1 0 15.333333%;\r\n        max-width: 18.333333%;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 220px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 65px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 130px;\r\n        height: 130px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 910px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 80px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 40px;\r\n    }\r\n    .bottom-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n        height: 90px; \r\n        top: -5px;\r\n        margin-left: 50px;\r\n    }\r\n    .image5[_ngcontent-%COMP%]{\r\n        height: 300px;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 30px;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 63px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 850px) {\r\n      .about1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 60px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 800px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 60px; \r\n        width: 15px;\r\n    }\r\n    .carousel-Text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 55px;\r\n    }\r\n    .Headline-Joe[_ngcontent-%COMP%]{\r\n        font-size: 55px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 750px) {\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 672px) {\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .brand1[_ngcontent-%COMP%]{\r\n          display: none;\r\n      }\r\n      .brand2[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand7[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 45px;\r\n    }\r\n    \r\n  }\r\n@media only screen and (max-width: 700px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 60px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n        height: 69px;\r\n        top: 6px;\r\n        margin-left: 50px;\r\n    }\r\n    .temp-Text1[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    .temp-Text[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n  }\r\n@media only screen and (max-width: 650px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 50px; \r\n        width: 10px;\r\n    }\r\n    .contact-Header[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 80px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 644px) {\r\n      .m-Top[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n      }\r\n      .text[_ngcontent-%COMP%]{\r\n          font-size: 15px;\r\n      }\r\n    \r\n      .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%]{\r\n        width: 100px;\r\n    }\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 65px;\r\n        top: 6px;\r\n        margin-left: 30px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 36px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 600px) {\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .image5[_ngcontent-%COMP%]{\r\n          height: 230px;\r\n      }\r\n      .header[_ngcontent-%COMP%]{\r\n        font-size: 28px;\r\n    }\r\n    .header1[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n      }\r\n      .header2[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n      }\r\n      .text1[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n      }\r\n      .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 40px;\r\n      }\r\n      .card[_ngcontent-%COMP%]{\r\n        margin-left: 40px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 30px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 570px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 50px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 550px) {\r\n    \r\n  }\r\n@media only screen and (max-width: 500px) {\r\n\r\n    .image5[_ngcontent-%COMP%]{\r\n        height: 200px;\r\n    }\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .header1[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n      }\r\n      .header2[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .input-Style[_ngcontent-%COMP%]{\r\n          font-size: 12px;\r\n      }\r\n      #mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        width: 110px !important;\r\n        font-size: 12px !important;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 50px;\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n      .card[_ngcontent-%COMP%]{\r\n        display: none;\r\n      }\r\n      .Headline-Joe[_ngcontent-%COMP%]{\r\n        font-size: 45px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 474px) {\r\n    \r\n  }\r\n@media only screen and (max-width: 450px) {\r\n    \r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n}\r\n.Allbrand[_ngcontent-%COMP%]{\r\n    height: 25px;\r\n}\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n  }\r\n  .send[_ngcontent-%COMP%]{\r\n      width: 150px;\r\n  }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n    .col-3[_ngcontent-%COMP%] {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 33%;\r\n        max-width: 35%;\r\n    }\r\n    .image5[_ngcontent-%COMP%]{\r\n        margin-left: 15px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n        margin-left: 5px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%] {\r\n        -webkit-box-flex: 2;\r\n        flex: 10 0 20.333333%;\r\n        max-width: 30.333333%;\r\n    }\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n      }\r\n      #mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n          display: none;\r\n      }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n.about1[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .tip1[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact1[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .Allbrand[_ngcontent-%COMP%]{\r\n    height: 20px;\r\n}\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  .facebook[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.whatsapp[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.instegram[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.mail[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.phone[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.send[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n}\r\n}\r\n@media only screen and (max-width: 310px) {\r\n    \r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 0px;\r\n    }\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 15px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkM7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCOztJQUV0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBOEM7SUFDOUMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBa0Q7SUFDbEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7O0FBRTFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBbUQ7SUFDbkQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixPQUFPO0lBQ1AsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUErQztJQUMvQywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDZDQUF1RCxFQUFFLG1CQUFtQjtJQUM1RSx5QkFBeUIsRUFBRSxxQ0FBcUM7SUFDaEUsbUJBQW1CLEVBQUUsb0NBQW9DO0lBQ3pELDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEIsRUFBRSw0QkFBNEI7SUFDMUQsc0JBQXNCLEVBQUUsOERBQThEO0lBQ3RGLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksd0NBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDBEQUEwRDtJQUMxRCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHNDQUFnRCxFQUFFLG1CQUFtQjtJQUNyRSx5QkFBeUIsRUFBRSxxQ0FBcUM7SUFDaEUsMkRBQTJEO0lBQzNELDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCx5QkFBeUIsRUFBRSw0QkFBNEI7SUFDdkQsd0JBQXdCLEVBQUUsOERBQThEO0lBQ3hGLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLDRFQUE0RTtJQUM1RSx1RkFBeUQ7SUFBekQseURBQXlEO0FBQzdEO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kseUNBQW1ELEVBQUUsbUJBQW1CO0lBQ3hFLHlCQUF5QixFQUFFLHFDQUFxQztJQUNoRSxtQkFBbUIsRUFBRSxvQ0FBb0M7SUFDekQsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELDRCQUE0QixFQUFFLDRCQUE0QjtJQUMxRCxzQkFBc0IsRUFBRSw4REFBOEQ7SUFDdEYsWUFBWTtJQUNaLHNEQUFzRDtBQUMxRDtBQUNBO0lBQ0ksbUNBQTJDO0lBQzNDLHlCQUF5QixFQUFFLHFDQUFxQztJQUNoRSxtQkFBbUIsRUFBRSxvQ0FBb0M7SUFDekQsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELDRCQUE0QixFQUFFLDRCQUE0QjtJQUMxRCxzQkFBc0IsRUFBRSw4REFBOEQ7SUFDdEYsWUFBWTtJQUNaLHNEQUFzRDtBQUMxRDtBQUNBO0lBQ0ksa0NBQTRDLEVBQUUsbUJBQW1CO0lBQ2pFLHlCQUF5QixFQUFFLHFDQUFxQztJQUNoRSxtQkFBbUIsRUFBRSxvQ0FBb0M7SUFDekQsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELDRCQUE0QixFQUFFLDRCQUE0QjtJQUMxRCxzQkFBc0IsRUFBRSw4REFBOEQ7SUFDdEYsWUFBWTtJQUNaLHNEQUFzRDtBQUMxRDtBQUNBO0lBQ0ksa0NBQTRDLEVBQUUsbUJBQW1CO0lBQ2pFLHlCQUF5QixFQUFFLHFDQUFxQztJQUNoRSxtQkFBbUIsRUFBRSxvQ0FBb0M7SUFDekQsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELDRCQUE0QixFQUFFLDRCQUE0QjtJQUMxRCxzQkFBc0IsRUFBRSw4REFBOEQ7SUFDdEYsWUFBWTtJQUNaLHNEQUFzRDtBQUMxRDtBQUVBO0lBQ0ksd0NBQWtEO0lBQ2xELHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLHNEQUFzRDtJQUN0RCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFDQUErQztJQUMvQyx5QkFBeUIsRUFBRSxxQ0FBcUM7SUFDaEUsbUJBQW1CLEVBQUUsb0NBQW9DO0lBQ3pELDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEIsRUFBRSw0QkFBNEI7SUFDMUQsc0JBQXNCLEVBQUUsOERBQThEO0lBQ3RGLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUNBQStDO0lBQy9DLHlCQUF5QixFQUFFLHFDQUFxQztJQUNoRSxtQkFBbUIsRUFBRSxvQ0FBb0M7SUFDekQsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELDRCQUE0QixFQUFFLDRCQUE0QjtJQUMxRCxzQkFBc0IsRUFBRSw4REFBOEQ7SUFDdEYsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNDQUFnRDtJQUNoRCx5QkFBeUIsRUFBRSxxQ0FBcUM7SUFDaEUsbUJBQW1CLEVBQUUsb0NBQW9DO0lBQ3pELDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEIsRUFBRSw0QkFBNEI7SUFDMUQsc0JBQXNCLEVBQUUsOERBQThEO0lBQ3RGLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQ0FBMkM7SUFDM0MseUJBQXlCLEVBQUUscUNBQXFDO0lBQ2hFLG1CQUFtQixFQUFFLG9DQUFvQztJQUN6RCwyQkFBMkIsRUFBRSxxQkFBcUI7SUFDbEQsNEJBQTRCLEVBQUUsNEJBQTRCO0lBQzFELHNCQUFzQixFQUFFLDhEQUE4RDtJQUN0Rix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0NBQTRDO0lBQzVDLHlCQUF5QixFQUFFLHFDQUFxQztJQUNoRSxtQkFBbUIsRUFBRSxvQ0FBb0M7SUFDekQsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELDRCQUE0QixFQUFFLDRCQUE0QjtJQUMxRCxzQkFBc0IsRUFBRSw4REFBOEQ7SUFDdEYsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUNBQTZDO0lBQzdDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdDQUFnRDtJQUNoRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw0Q0FBb0Q7SUFDcEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMENBQWtEO0lBQ2xELDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUFrRDtJQUNsRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw2Q0FBcUQ7SUFDckQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUNBQStDO0lBQy9DLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUFrRDtJQUNsRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxPQUFPO0VBQ1Q7QUFFQTtJQUNFLFNBQVM7SUFDVCx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFVBQVU7SUFDVix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFVBQVU7SUFDVix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFVBQVU7SUFDVjtFQUNGO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7SUFDSTtRQUNJLGVBQWU7SUFDbkI7RUFDRjtBQUVBO0lBQ0U7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7RUFDRjtBQUVBO0lBQ0U7UUFDSSxhQUFhO1FBQ2IsV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0VBQ0Y7QUFFQTtJQUNFO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGFBQWE7SUFDakI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7RUFDRjtBQUVBO0lBQ0U7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O09BRUc7SUFDSDtRQUNJLFlBQVk7UUFDWixTQUFTO1FBQ1QsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0VBQ0Y7QUFFQTtNQUNJO1FBQ0UsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsWUFBWTtJQUNoQjtFQUNGO0FBRUE7SUFDRTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGFBQWE7SUFDakI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO01BQ2pCO0VBQ0o7QUFDQTtJQUNFO1FBQ0ksWUFBWTtJQUNoQjtFQUNGO0FBRUE7SUFDRTtRQUNJLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtVQUNJLGFBQWE7TUFDakI7TUFDQTtRQUNFLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7O0VBRUY7QUFJQTtJQUNFO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztPQUVHO0lBQ0g7UUFDSSxZQUFZO1FBQ1osUUFBUTtRQUNSLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtFQUNGO0FBRUE7SUFDRTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtFQUNGO0FBSUE7TUFDSTtRQUNFLGdCQUFnQjtNQUNsQjtNQUNBO1VBQ0ksZUFBZTtNQUNuQjs7TUFFQTtRQUNFLG9CQUFvQjtRQUNwQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGFBQWE7SUFDakI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osUUFBUTtRQUNSLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtFQUNGO0FBRUE7SUFDRTtRQUNJLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtVQUNJLGFBQWE7TUFDakI7TUFDQTtRQUNFLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGlCQUFpQjtNQUNuQjtNQUNBO1FBQ0UsaUJBQWlCO01BQ25CO01BQ0E7UUFDRSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0VBQ0Y7QUFFQTtJQUNFO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGO0FBRUE7SUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bd0JHO0VBQ0w7QUFFQTs7SUFFRTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO01BQ2pCO01BQ0E7UUFDRSxlQUFlO01BQ2pCO01BQ0E7VUFDSSxlQUFlO01BQ25CO01BQ0E7UUFDRSx1QkFBdUI7UUFDdkIsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtNQUNFO1FBQ0UsYUFBYTtNQUNmO01BQ0E7UUFDRSxlQUFlO01BQ2pCO0VBQ0o7QUFFQTtJQUNFOzs7Ozs7Ozs7Ozs7T0FZRztFQUNMO0FBRUE7SUFDRTs7Ozs7Ozs7Ozs7Ozs7OztLQWdCQztFQUNIOzs7Ozs7OztLQVFHO0VBQ0g7SUFDRSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0VBQ2pCO0VBQ0E7TUFDSSxZQUFZO0VBQ2hCO0FBQ0Y7QUFFQTtJQUNJO1FBRUksbUJBQWE7Z0JBQWIsYUFBYTtRQUNiLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtVQUNJLGFBQWE7TUFDakI7QUFDTjtBQUNBO0FBQ0E7SUFDSSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7QUFFQTtJQUNJOzs7O09BSUc7SUFDSDtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLFlBQVk7SUFDaEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Ie1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4udGVtcC1UZXh0MXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhlYWRlci1TdHlsZXtcclxuICAgIGhlaWdodDogNDAwcHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKDUwLCA1MCwgMTg2LCAwLjE2KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLkNvbnRhY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2RjOWZmO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiA1NTBweDsgXHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi50b3B7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4ubmF2LWJhci1yb3d7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDsgXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTIyLCAxMjIpO1xyXG4gICAgb3BhY2l0eTogMC45XHJcbn1cclxuLmlucHV0LVN0eWxle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG59XHJcbi5zZW5ke1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5IZWFkbGluZS1Kb2V7XHJcbiAgICBmb250LXNpemU6IDcwcHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1haWwtbWluaXtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvbWFpbC1taW5pLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmhvdmVye1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcbi5mYWNlYm9vay1taW5pe1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTc0cHg7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvZmFjZWJvb2stbWluaS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcbi53aGF0c2FwcC1taW5pe1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTIycHg7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvd2hhdHNzYXBwLW1pbmkucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5waG9uZS1taW5pe1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMjI2cHg7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvcGhvbmUtbWluaS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3RlY2huby1qby1tYWduZXQuanBnXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7IFxyXG4gICAgdG9wOiAtNTBweDsgXHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG4ucGlje1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9waWN0dXJlLWpvLmpwZWcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC8qYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpOyovXHJcbiAgICBtYXJnaW4tdG9wOiAtNDlweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0b3A6IDI0NHB4O1xyXG59XHJcbi5tYWluLXBpY3R1cmV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvMzR3YXNoaW5nLmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDYwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAzM3B4O1xyXG59XHJcbi5hbGlnbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxufVxyXG4uaW1hZ2UtU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuLnRvcC1TdHlsZXtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzdkYzlmZjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlICwgYmx1ZSk7XHJcbn1cclxuLmJvcmRlci1SYWRpdXMtUmlnaHR7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG59XHJcbi5ib3JkZXItUmFkaXVzLUxlZnR7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbn1cclxuLmltYWdlMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy/XkNeX16jXmdeV16ot157XnNeQ15QyLnBuZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG4uaW1hZ2Uye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90emFkaWsuanBnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG4uaW1hZ2Uze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3NoYWtlLnBuZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG4uaW1hZ2U0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3ByaWNlLmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG5cclxuLmltYWdlNXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy90c2FkaWstY3JvcC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzJjMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmZhY2Vib29re1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ZhY2Vib29rLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTUwcHg7XHJcbn1cclxuLndoYXRzYXBwe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3doYXRzYXBwLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmluc3RlZ3JhbXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbnN0ZWdyYW0ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubWFpbHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9tYWlsLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBob25le1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3Bob25lLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmhlYWRsaW5lLVRleHR7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuLm1paWRsZS1IZWFkbGluZS1UZXh0e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5ib3R0b20tVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ubS1Ub3B7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7IFxyXG4gICAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4uY29udGFjdC1IZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmNhcm91c2VsLVRleHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnRleHQxe1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLkFsbGJyYW5ke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9BbGxicmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kMXtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9hbWFuYS1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kMntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9ibG9vbWJlcmctYnJhbmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDN7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvU2Ftc3VuZy1icmFuZC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kNHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90YWRpcmFuLWJyYW5kLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYnJhbmQ1e1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL1doaXJscG9vbC1icmFuZDEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDZ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYmVrby1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kN3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9icm90aGVyLWJyYW5kLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4udGlwMXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnRpcDEgOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFjdDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5jb250YWN0MSA6aG92ZXJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hYm91dDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5hYm91dDEgOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbXlTaWRlbmF2IGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTkwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gIH1cclxuICBcclxuICAjbXlTaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgI2Fib3V0IHtcclxuICAgIHRvcDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgfVxyXG4gIFxyXG4gICNibG9nIHtcclxuICAgIHRvcDogMTMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuICAjcHJvamVjdHMge1xyXG4gICAgdG9wOiAxOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWN0IHtcclxuICAgIHRvcDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1XHJcbiAgfVxyXG4gIC5oZWFkZXIxe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAuaGVhZGVyMntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLnRleHQxe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzQ2cHgpIHtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4OyBcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDgwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQye1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDsgXHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4OyBcclxuICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgfVxyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuICAgIC5IZWFkbGluZS1Kb2V7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLndoYXRzYXBwe1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5zdGVncmFte1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLnBob25le1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4OyBcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1TdHlsZXtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5jb2wtMXtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAyO1xyXG4gICAgICAgIGZsZXg6IDEgMCAxNS4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTguMzMzMzMzJTtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQye1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQze1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ2e1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLndoYXRzYXBwe1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5zdGVncmFte1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbHtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLnBob25le1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubWlpZGxlLUhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC8qIC5pbWFnZS1TdHlsZXtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfSAqL1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4OyBcclxuICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U1e1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ2e1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDJ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ1e1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDYzcHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC53aGF0c2FwcHtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLmluc3RlZ3JhbXtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLm1haWx7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5waG9uZXtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7IFxyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlM3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlNHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kM3tcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ0e1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDV7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgIH1cclxuICAgIC5IZWFkbGluZS1Kb2V7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MnB4KSB7XHJcbiAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuYnJhbmQxe1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYnJhbmQye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ0e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ1e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ2e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ3e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLm1paWRsZS1IZWFkbGluZS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC8qIC5pbWFnZS1TdHlsZXtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfSAqL1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiA2OXB4O1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnRlbXAtVGV4dDF7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAudGVtcC1UZXh0e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtSGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0NHB4KSB7XHJcbiAgICAgIC5tLVRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmltYWdlMXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlM3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlNHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC0xe1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgICAuaW1hZ2U1e1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXIxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyMntcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLndoYXRzYXBwe1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5zdGVncmFte1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLnBob25le1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XHJcbiAgICAuaGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubWlpZGxlLUhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLyogLmxvZ297XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pbnB1dC1TdHlsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LUhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmV4dHJhe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubS1Ub3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgfSAqL1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cclxuICAgIC5pbWFnZTV7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcjF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXIye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXQtU3R5bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgI215U2lkZW5hdiBhe1xyXG4gICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLndoYXRzYXBwe1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmluc3RlZ3JhbXtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC5tYWlse1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnBob25le1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgICAuY2FyZHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5IZWFkbGluZS1Kb2V7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3NHB4KSB7XHJcbiAgICAvKiAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgfVxyXG4gICAgLm0tVG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIC5leHRyYXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRleHQxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgfSAqL1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLyogLnRleHQxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxuICB9ICovXHJcbiAgLyogLmFib3V0MXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLnRpcDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0MXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9ICovXHJcbiAgLmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uQWxsYnJhbmR7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmhlYWRlcjJ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5zZW5ke1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuY29sLTMge1xyXG4gICAgICAgIC1tcy1mbGV4OiAwIDAgMjUlO1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U1e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlNHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgLndoYXRzYXBwe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaW5zdGVncmFte1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucGhvbmV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC5tYWlse1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuY29sLTEge1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XHJcbiAgICAgICAgZmxleDogMTAgMCAyMC4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAuMzMzMzMzJTtcclxuICAgIH1cclxuICAgIC5hYm91dDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXAxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGFjdDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgICNteVNpZGVuYXYgYXtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbi5hYm91dDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC50aXAxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5BbGxicmFuZHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG4uaGVhZGVyMntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmZhY2Vib29re1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi53aGF0c2FwcHtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4uaW5zdGVncmFte1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi5tYWlse1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi5waG9uZXtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4uc2VuZHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxMHB4KSB7XHJcbiAgICAvKiAuY29sLTEge1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XHJcbiAgICAgICAgZmxleDogMTAgMCAyMC4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAuMzMzMzMzJTtcclxuICAgIH0gKi9cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgfVxyXG4gICAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"]
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