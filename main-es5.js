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
      decls: 199,
      vars: 0,
      consts: [[1, "row", "container-fluid", "main-picture"], ["data-toggle", "tooltip", "href", "tel:0544818383", "title", "\u05DC\u05D7\u05E5 \u05DC\u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA", 1, "container-fluid", "head-Logo", "pointer"], [1, "row", "container-fluid", "nav-bar-row"], [1, "row", "container-fluid", 2, "z-index", "1000", "opacity", "1"], ["href", "tel:+9720544818383", 1, "col", "card"], [1, "col", "contact1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#contact1", 2, "color", "white", "transition", "transform 400ms ease-out 0"], [1, "col", "tip1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#washingMachine", 2, "color", "white"], [1, "col", "about1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#details", 2, "color", "white"], [1, "H", "row", "container-fluid"], [1, "col", "extra"], [1, "col-1", "image-Style", "image1", "border-Radius-Left"], [1, "col-1", "image-Style", "image2"], [1, "col-1", "image-Style", "image3"], [1, "col-1", "image-Style", "border-Radius-Right", "image4"], [1, "row", "container-fluid", 2, "border-bottom", "solid 2px black"], [1, "Allbrand"], ["id", "washingMachine", "dir", "rtl", 2, "background-color", "gold", "margin-top", "-33px"], [1, "row", "container", 2, "text-align", "right"], [1, "row", "container", "header", 2, "color", "blue", "padding-top", "20px"], [2, "margin-top", "5px"], [1, "row", "container", 2, "text-align", "right", "margin-bottom", "30px", "margin-top", "30px"], [1, "row", "container", "header", 2, "color", "blue"], [1, "row", "container-fluid", 2, "text-align", "right", "padding-bottom", "50px"], [1, "container-fluid", 2, "margin-top", "5px"], [1, "row", "container-fluid", 2, "text-align", "right", "padding-bottom", "50px", "border-bottom", "solid 2px black"], [1, "container-fluid", "experience", 2, "color", "blue"], [1, "container-fluid", "experience"], ["id", "details", "dir", "rtl", 2, "color", "white", "background-color", "teal"], [1, "row", "container-fluid", 2, "text-align", "right"], [1, "image5", "container-fluid", 2, "text-align", "center"], [1, "container-fluid"], [1, "row", "header", 2, "padding-top", "40px", "color", "white"], [1, "header"], [1, "row", "container-fluid", 2, "text-align", "right", "padding-bottom", "40px", "padding-top", "40px"], [1, "container-fluid", "header"], ["dir", "rtl", 1, "container-fluid", 2, "text-align", "center"], ["id", "gallery", 1, "header"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "row", 2, "height", "450px", "margin-top", "50px"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "5"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "text-align", "center"], ["src", "../assets/meyabesh.jpg", "alt", "First slide", 2, "margin-bottom", "40px"], [1, "carousel-caption", "d-none", "d-md-block", 2, "color", "black"], [1, "carousel-Text"], [1, "carousel-item", 2, "text-align", "center"], ["src", "../assets/refrigirator.jpg", "alt", "second slide", 2, "margin-bottom", "70px"], ["src", "../assets/oven builtIn.jpg", "alt", "Third slide", 2, "margin-bottom", "50px"], ["src", "../assets/micro.png", "alt", "Fourth slide", 2, "margin-bottom", "60px"], ["src", "../assets/oven.gif", "alt", "Fifth slide", 2, "margin-bottom", "70px"], ["src", "../assets/washing.jpg", "alt", "Sixth slide", 2, "margin-bottom", "70px"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact1", "dir", "rtl", 1, "Contact", "row", "container-fluid"], [1, "col"], [2, "text-align", "right", "margin-right", "10px", "margin-top", "100px"], [1, "container-fluid", "contact-Header", 2, "text-align", "center"], [1, "top", 2, "text-align", "center"], ["dir", "rtl", "placeholder", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D5\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", 1, "input-Style"], [2, "text-align", "center"], ["dir", "rtl", "placeholder", "\u05DE\u05E1 \u05D8\u05DC\u05E4\u05D5\u05DF", 1, "input-Style"], ["dir", "rtl", "placeholder", "\u05D0\u05D9 \u05DE\u05D9\u05D9\u05DC", 1, "input-Style"], [1, "btn", "btn-warning", 2, "border-radius", "30px", "width", "30%"], ["id", "mySidenav", 1, "sidenav"], ["href", "#details", "id", "about"], ["href", "#washingMachine", "id", "blog"], ["href", "#gallery", "id", "projects"], ["href", "#contact1", "id", "contact"], [1, "row", "container-fluid", 2, "height", "160px", "background-color", "black"], ["href", "https://www.facebook.com/%D7%98%D7%9B%D7%A0%D7%95-%D7%92%D7%95-609578502437820/", 1, "col-1", "facebook"], ["href", "https://api.whatsapp.com/send?phone=+972544818383&text= \u05E9\u05DC\u05D5\u05DD, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D1\u05D1\u05D9\u05EA\u05D9", 1, "col-1", "whatsapp", 2, "margin-left", "10px"], ["href", "mailto:joelkr@gmail.com", 1, "col-1", "mail", 2, "margin-left", "10px"], ["href", "tel:0544818383", 1, "col-1", "phone", 2, "margin-left", "10px"], ["clas", "container-fluid", 2, "background-color", "black", "height", "100px", "text-align", "center", "padding-top", "30px"], ["href", "https://api.whatsapp.com/send?phone=+972508451651&text= \u05E9\u05DC\u05D5\u05DD, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8", 2, "color", "white"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05D9\u05D3\u05E2 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u05D8\u05DB\u05E0\u05D0\u05D9 \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u05EA\u05D9\u05E7\u05D5\u05DF \u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D5\u05D4\u05DE\u05E7\u05E4\u05D9\u05D0\u05D9\u05DD \u05DE\u05DB\u05DC \u05D4\u05D7\u05D1\u05E8\u05D5\u05EA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u05DE\u05D5\u05DE\u05D7\u05D4 \u05DC\u05D7\u05D1\u05E8\u05D5\u05EA: BEKO, BLUMBERG, LG, TADIRAN, AMCOR, AMANA, SAMSUNG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u05DE\u05D9\u05DC\u05D5\u05D9 \u05D2\u05D6, \u05EA\u05D9\u05E7\u05D5\u05DF \u05D3\u05DC\u05D9\u05E4\u05D5\u05EA, \u05D4\u05D7\u05DC\u05E4\u05EA \u05DE\u05D3\u05D7\u05E1\u05D9\u05DD \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8\u05D9\u05DD, \u05D4\u05D7\u05DC\u05E4\u05EA \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD, \u05D0\u05D9\u05D9\u05E1 \u05DE\u05D9\u05D9\u05E7\u05E8\u05D9\u05DD, \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D1\u05E7\u05E8\u05D4 \u05D5\u05DB\u05DC \u05DE\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u05D8\u05DB\u05E0\u05D0\u05D9 \u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05D1\u05D9\u05EA\u05D9\u05D9\u05DD :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u05EA\u05D9\u05E7\u05D5\u05DF \u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05D4\u05DB\u05D1\u05D9\u05E1\u05D4, \u05DE\u05D9\u05D9\u05D1\u05E9\u05D9 \u05D4\u05DB\u05D1\u05D9\u05E1\u05D4 ,\u05DE\u05D3\u05D9\u05D7\u05D9 \u05DB\u05DC\u05D9\u05DD , \u05EA\u05E0\u05D5\u05E8\u05D9 \u05D0\u05E4\u05D9\u05D4 . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u05DE\u05D5\u05DE\u05D7\u05D4 \u05DC\u05D7\u05D1\u05E8\u05D5\u05EA: SAMSUNG, BOSCH, SIEMENS, WHIRLPOOL, BEKO, LG, AEG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D7\u05E9\u05DE\u05DC: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u05E8\u05E9\u05D9\u05D5\u05DF \u05D7\u05E9\u05DE\u05DC\u05D0\u05D9: 975118");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u05DE\u05E2\u05DC 10 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D4\u05D9\u05E8 \u05D0\u05DE\u05D9\u05DF \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 - \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05DE\u05D0\u05D5\u05D3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05D3\u05D9\u05D1 \u05D5\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05E0\u05D5\u05D7\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05E2\u05DC \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D5\u05D4\u05D7\u05DC\u05E4\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05DC\u05DE\u05D5\u05E1\u05D3\u05D5\u05EA \u05D5\u05DC\u05E2\u05E1\u05E7\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \u05E9\u05DE\u05D9 \u05D2'\u05D5\u05D0\u05DC, \u05D9\u05E6\u05D0\u05EA\u05D9 \u05E6\u05D3\u05D9\u05E7 \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05DC \u05D7\u05D9\u05D9\u05DD \u05D4\u05DB\u05D8 \u05D1\u05DB\u05DC \u05D4\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD: \u05D0\u05DE\u05D9\u05E0\u05D5\u05EA, \u05DE\u05D7\u05D9\u05E8, \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u05D8\u05DB\u05E0\u05D0\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC, \u05DE\u05D5\u05E1\u05DE\u05DA \u05DE\u05E2\u05DC 10 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05EA\u05D7\u05D5\u05DD, \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DF \u05E2\u05D1\u05D3\u05EA\u05D9 \u05DB 12 \u05E9\u05E0\u05D4 \u05D1\u05D4\u05D9\u05D9\u05D8\u05E7 \u05D1\u05EA\u05E4\u05E7\u05D9\u05D3\u05D9\u05DD \u05DE\u05D2\u05D5\u05D5\u05E0\u05D9\u05DD: \u05DB\u05DE\u05D4\u05E0\u05D3\u05E1 \u05DE\u05E2\u05D1\u05D3\u05D5\u05EA, \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA, \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4, \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D5\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D8\u05DB\u05E0\u05D9\u05EA. \u05D1\u05E0\u05D5\u05E1\u05E3 \u05E2\u05D1\u05D3\u05EA\u05D9 \u05DB\u05D4\u05E0\u05D3\u05E1\u05D0\u05D9 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4 \u05DB\u05D5\u05DC\u05DC \u05EA\u05D9\u05E7\u05D5\u05DF \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD, \u05D5\u05D8\u05DB\u05E0\u05D0\u05D9, \u05D1\u05D4\u05E9\u05DB\u05DC\u05EA\u05D9 \u05D0\u05E0\u05D9 \u05D1\u05D5\u05D2\u05E8 \u05E4\u05D9\u05D6\u05D9\u05E7\u05D4 \u05EA\u05D5\u05D0\u05E8 \u05E8\u05D0\u05E9\u05D5\u05DF \u05D5\u05D7\u05E9\u05DE\u05DC, \u05D5\u05D4\u05E0\u05D3\u05E1\u05D0\u05D9 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5-\u05D0\u05D5\u05E4\u05D8\u05D9\u05E7\u05D4, \u05D0\u05E0\u05D9 \u05D1\u05E2\u05DC \u05D9\u05DB\u05D5\u05DC\u05EA \u05D8\u05DB\u05E0\u05D9\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4, \u05D9\u05DB\u05D5\u05DC\u05EA \u05D7\u05E9\u05D9\u05D1\u05D4 \u05D5\u05D0\u05D9\u05EA\u05D5\u05E8 \u05EA\u05E7\u05DC\u05D5\u05EA \u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA, \u05D0\u05E0\u05D9 \u05DE\u05EA\u05D7\u05D9\u05D9\u05D1 \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D0\u05D3\u05D9\u05D1 \u05D5\u05D0\u05DE\u05D9\u05DF \u05D1\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05EA \u05D5\u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u05D0\u05D6\u05D5\u05E8\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " \u05DB\u05DC \u05D0\u05D6\u05D5\u05E8 \u05D4\u05E9\u05E8\u05D5\u05DF \u05D5\u05E2\u05D3 \u05D6\u05DB\u05E8\u05D5\u05DF \u05D9\u05E2\u05E7\u05D1 \u05D1\u05E6\u05E4\u05D5\u05DF \u05DB\u05D5\u05DC\u05DC \u05D7\u05E8\u05D9\u05E9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05DE\u05DB\u05DC \u05D4\u05E1\u05D5\u05D2\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ol", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "li", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "li", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "li", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "li", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05D9\u05D1\u05E9\u05D9 \u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h5", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D1\u05E0\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h5", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05E7\u05E8\u05D5\u05D2\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h5", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h5", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h4", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u05D4\u05DB\u05E0\u05E1 \u05E4\u05E8\u05D8\u05D9\u05DD \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u05E9\u05DC\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u05D2\u05DC\u05E8\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05E0\u05D1\u05E0\u05D4 \u05E2\"\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\u05D9\u05D5\u05D1\u05DC \u05E7\u05D5\u05D2\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".H[_ngcontent-%COMP%]{\r\n    height: 220px;\r\n    background-color: #ffffff;\r\n    border-width: 1px;\r\n    \r\n    \r\n}\r\n.experience[_ngcontent-%COMP%]{\r\n    color: blue;\r\n    font-size: 30px;\r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n.temp-Text1[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.header-Style[_ngcontent-%COMP%]{\r\n    height: 400px; \r\n    width: 100%;\r\n    background-color: brown;\r\n    box-shadow: 0 2px 20px 0 rgba(50, 50, 186, 0.16);\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.Contact[_ngcontent-%COMP%]{\r\n    background-color: #7dc9ff;\r\n    width: 100%; \r\n    height: 550px; \r\n    opacity: 1;\r\n}\r\n.top[_ngcontent-%COMP%]{\r\n    z-index: 10;\r\n}\r\n.nav-bar-row[_ngcontent-%COMP%]{\r\n    margin-top: 100px; \r\n    height: 100px; \r\n    background-color: rgb(51, 122, 122);\r\n    opacity: 0.9\r\n}\r\n.input-Style[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 50px;\r\n    margin-top: 20px;\r\n    padding: 12px 20px;\r\n    margin-right: 25px;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n\r\n    box-sizing: border-box;\r\n    border-radius: 60px;\r\n}\r\n.head-Logo[_ngcontent-%COMP%]{\r\n    background-image: url('Logo-main.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-align: center;\r\n    height: 200px;\r\n    width: 600px;\r\n    margin-top: 20px;\r\n    border-radius: 15px;\r\n    box-shadow: 4px 7px 13px 1px black;\r\n}\r\n.send[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n}\r\n.mail-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 70px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('mail-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-top-right-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.hover[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    -webkit-transition-duration: 0.5s;\r\n            transition-duration: 0.5s;\r\n}\r\n.facebook-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 174px;\r\n    width: 66px;\r\n    height: 50px;\r\n    background-image: url('facebook-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n}\r\n.whatsapp-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 122px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('whatssapp-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.phone-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 226px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('phone-mini.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background-image: url('techno-jo-magnet.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 20px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    margin-top: 10px;\r\n    height: 200px;\r\n    margin-left: 100px; \r\n    top: -50px; \r\n    right: 10px;\r\n}\r\n.pic[_ngcontent-%COMP%]{\r\n    background-image: url('picture-jo.jpeg');\r\n    background-color: #cccccc;\r\n    border-radius: 20px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 0px;\r\n    \r\n    margin-top: -49px;\r\n    height: 400px;\r\n    margin-left: 125px;\r\n    position: absolute;\r\n    z-index: 10;\r\n    left: 30px;\r\n    top: 244px;\r\n}\r\n.main-picture[_ngcontent-%COMP%]{\r\n    background-image: url('34washing.jpg'); \r\n    background-color: #cccccc; \r\n    \r\n    background-position: center; \r\n    background-repeat: repeat; \r\n    background-size: contain; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    height: 400px;\r\n    background-attachment: fixed;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n}\r\n.align[_ngcontent-%COMP%]{\r\n    margin-left: 230px;\r\n}\r\n.image-Style[_ngcontent-%COMP%]{\r\n  background-color: bisque;\r\n  border-style: solid;\r\n  border-width: 5px;\r\n  border-color: black;\r\n  height: 125px;\r\n  margin-top: 60px;\r\n  margin-left: 2px;\r\n}\r\n.top-Style[_ngcontent-%COMP%]{\r\n    \r\n    background-image: -webkit-gradient(linear, left top, right top, from(white) , to(blue));\r\n    background-image: linear-gradient(to right, white , blue);\r\n}\r\n.border-Radius-Right[_ngcontent-%COMP%]{\r\n    border-top-right-radius: 6px;\r\n}\r\n.border-Radius-Left[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 6px;\r\n}\r\n.image1[_ngcontent-%COMP%]{\r\n    background-image: url('\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA-\u05DE\u05DC\u05D0\u05D42.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image2[_ngcontent-%COMP%]{\r\n    background-image: url('tzadik.jpg');\r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image3[_ngcontent-%COMP%]{\r\n    background-image: url('shake.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image4[_ngcontent-%COMP%]{\r\n    background-image: url('price.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image5[_ngcontent-%COMP%]{\r\n    background-image: url('tsadik-crop.jpg');\r\n    background-color: #cccccc;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    text-align: center;\r\n    height: 200px;\r\n    width: 400px;\r\n    margin-top: 20px;\r\n    border-radius: 15px;\r\n    box-shadow: 4px 7px 13px 1px black;\r\n}\r\n.facebook[_ngcontent-%COMP%]{\r\n    background-image: url('facebook.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 550px;\r\n}\r\n.whatsapp[_ngcontent-%COMP%]{\r\n    background-image: url('whatsapp.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.instegram[_ngcontent-%COMP%]{\r\n    background-image: url('instegram.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.mail[_ngcontent-%COMP%]{\r\n    background-image: url('mail.jpg');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.phone[_ngcontent-%COMP%]{\r\n    background-image: url('phone.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n}\r\n.miidle-Headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n}\r\n.bottom-Text[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.m-Top[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    margin-left: 30px; \r\n    margin-top: 120px; \r\n    height: 120px; \r\n    width: 30px;\r\n}\r\n.contact-Header[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.carousel-Text[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n.text1[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n}\r\n.Allbrand[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100px;\r\n    background-image: url('Allbrand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand1[_ngcontent-%COMP%]{\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('amana-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand2[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('bloomberg-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand3[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Samsung-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand4[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('tadiran-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand5[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Whirlpool-brand1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand6[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('beko-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand7[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('brother-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.tip1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.tip1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.contact1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.contact1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.about1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.about1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: -90px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    padding: 10px;\r\n    width: 120px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    border-radius: 0 5px 5px 0;\r\n  }\r\n.pointer[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n  }\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    left: 0;\r\n  }\r\n#about[_ngcontent-%COMP%] {\r\n    top: 70px;\r\n    background-color: #4CAF50;\r\n  }\r\n#blog[_ngcontent-%COMP%] {\r\n    top: 130px;\r\n    background-color: #2196F3;\r\n  }\r\n#projects[_ngcontent-%COMP%] {\r\n    top: 190px;\r\n    background-color: #f44336;\r\n  }\r\n#contact[_ngcontent-%COMP%] {\r\n    top: 250px;\r\n    background-color: #555\r\n  }\r\n.header1[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n.text1[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n@media only screen and (max-width: 1346px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1300px) {\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 160px; \r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 480px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 80px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1200px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 100px; \r\n        width: 25px;\r\n    }\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 120px; \r\n        top: -20px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 70px;\r\n    }\r\n    .Headline-Joe[_ngcontent-%COMP%]{\r\n      font-size: 60px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1000px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 80px; \r\n        width: 20px;\r\n    }\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        border-width: 2px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%]{\r\n        -webkit-box-flex: 2;\r\n        flex: 1 0 15.333333%;\r\n        max-width: 18.333333%;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 220px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 65px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 130px;\r\n        height: 130px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 910px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 80px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 40px;\r\n    }\r\n    .bottom-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n        height: 90px; \r\n        top: -5px;\r\n        margin-left: 50px;\r\n    }\r\n    .image5[_ngcontent-%COMP%]{\r\n        height: 300px;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 30px;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 63px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 850px) {\r\n      .about1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 60px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 800px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 60px; \r\n        width: 15px;\r\n    }\r\n    .carousel-Text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 55px;\r\n    }\r\n    .Headline-Joe[_ngcontent-%COMP%]{\r\n        font-size: 55px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 750px) {\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .head-Logo[_ngcontent-%COMP%]{\r\n        height: 170px;\r\n        width: 500px;\r\n    }\r\n    .header[_ngcontent-%COMP%]{\r\n        font-size: 28px;\r\n    }\r\n    .experience[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 672px) {\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .brand1[_ngcontent-%COMP%]{\r\n          display: none;\r\n      }\r\n      .brand2[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand7[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 45px;\r\n    }\r\n    \r\n  }\r\n@media only screen and (max-width: 700px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 60px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n        height: 69px;\r\n        top: 6px;\r\n        margin-left: 50px;\r\n    }\r\n    .temp-Text1[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    .temp-Text[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n  }\r\n@media only screen and (max-width: 650px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 50px; \r\n        width: 10px;\r\n    }\r\n    .contact-Header[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 80px;\r\n    }\r\n    .experience[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 644px) {\r\n      .m-Top[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n      }\r\n      .text[_ngcontent-%COMP%]{\r\n          font-size: 15px;\r\n      }\r\n    \r\n      .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%]{\r\n        width: 100px;\r\n    }\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 65px;\r\n        top: 6px;\r\n        margin-left: 30px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 36px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 600px) {\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .image5[_ngcontent-%COMP%]{\r\n          height: 230px;\r\n      }\r\n      .header[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n    }\r\n    .header1[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n      }\r\n      .header2[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n      }\r\n      .text1[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n      }\r\n      .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 40px;\r\n      }\r\n      .card[_ngcontent-%COMP%]{\r\n        margin-left: 40px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 30px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .head-Logo[_ngcontent-%COMP%]{\r\n        height: 150px;\r\n        width: 400px;\r\n    }\r\n    .about1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n    }\r\n    .tip1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n    }\r\n    .contact1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n    }\r\n  }\r\n@media only screen and (max-width: 570px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 50px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 550px) {\r\n    \r\n  }\r\n@media only screen and (max-width: 500px) {\r\n\r\n    .image5[_ngcontent-%COMP%]{\r\n        height: 200px;\r\n        width: 300px;\r\n    }\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .header1[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n      }\r\n      .header2[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .input-Style[_ngcontent-%COMP%]{\r\n          font-size: 12px;\r\n      }\r\n      #mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        width: 110px !important;\r\n        font-size: 12px !important;\r\n    }\r\n    #blog[_ngcontent-%COMP%] {\r\n        top: 115px;\r\n      }\r\n      \r\n      #projects[_ngcontent-%COMP%] {\r\n        top: 160px;\r\n      }\r\n      \r\n      #contact[_ngcontent-%COMP%] {\r\n        top: 205px;\r\n      }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 50px;\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n      .card[_ngcontent-%COMP%]{\r\n        display: none;\r\n      }\r\n      .Headline-Joe[_ngcontent-%COMP%]{\r\n        font-size: 45px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 474px) {\r\n    \r\n  }\r\n@media only screen and (max-width: 450px) {\r\n    \r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n}\r\n.Allbrand[_ngcontent-%COMP%]{\r\n    height: 25px;\r\n}\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n  }\r\n  .send[_ngcontent-%COMP%]{\r\n      width: 150px;\r\n  }\r\n  .head-Logo[_ngcontent-%COMP%]{\r\n    height: 125px;\r\n    width: 330px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n    .col-3[_ngcontent-%COMP%] {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 33%;\r\n        max-width: 35%;\r\n    }\r\n    .image5[_ngcontent-%COMP%]{\r\n        margin-left: 15px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n        margin-left: 5px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%] {\r\n        -webkit-box-flex: 2;\r\n        flex: 10 0 20.333333%;\r\n        max-width: 30.333333%;\r\n    }\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n      }\r\n      #mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n          display: none;\r\n      }\r\n      .about1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 15px;\r\n        cursor: pointer;\r\n    }\r\n    .tip1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 15px;\r\n        cursor: pointer;\r\n    }\r\n    .contact1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 15px;\r\n        cursor: pointer;\r\n    }\r\n    .header[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 20px;\r\n    }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n.about1[_ngcontent-%COMP%]{\r\n    font-size: 11px;\r\n  }\r\n  .tip1[_ngcontent-%COMP%]{\r\n    font-size: 11px;\r\n  }\r\n  .contact1[_ngcontent-%COMP%]{\r\n    font-size: 11px;\r\n  }\r\n  .Allbrand[_ngcontent-%COMP%]{\r\n    height: 20px;\r\n}\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  .facebook[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.whatsapp[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.instegram[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.mail[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.phone[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.send[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n}\r\n.head-Logo[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n    width: 275px;\r\n}\r\n.contact-Header[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n.image5[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n}\r\n}\r\n@media only screen and (max-width: 310px) {\r\n    \r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 0px;\r\n    }\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 15px;\r\n    }\r\n    .head-Logo[_ngcontent-%COMP%]{\r\n        height: 80px;\r\n        width: 220px;\r\n    }\r\n    .contact-Header[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0RBQWdEO0lBQ2hELDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DO0FBQ0o7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNCQUFzQjs7SUFFdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0NBQThDO0lBQzlDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBOEM7SUFDOUMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQ0FBeUI7WUFBekIseUJB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O1VBQ0ksYUFBYTtNQUNqQjtNQUNBO1FBQ0UsZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7QUFDQTtJQUNJLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7QUFFQTtJQUNJOzs7O09BSUc7SUFDSDtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5leHBlcmllbmNle1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnJvd3tcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4udGVtcC1UZXh0MXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhlYWRlci1TdHlsZXtcclxuICAgIGhlaWdodDogNDAwcHg7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKDUwLCA1MCwgMTg2LCAwLjE2KTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLkNvbnRhY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2RjOWZmO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiA1NTBweDsgXHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi50b3B7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4ubmF2LWJhci1yb3d7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDsgXHJcbiAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTIyLCAxMjIpO1xyXG4gICAgb3BhY2l0eTogMC45XHJcbn1cclxuLmlucHV0LVN0eWxle1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG59XHJcbi5oZWFkLUxvZ297XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL0xvZ28tbWFpbi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggN3B4IDEzcHggMXB4IGJsYWNrO1xyXG59XHJcbi5zZW5ke1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5tYWlsLW1pbml7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL21haWwtbWluaS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ob3ZlcntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG4uZmFjZWJvb2stbWluaXtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE3NHB4O1xyXG4gICAgd2lkdGg6IDY2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ZhY2Vib29rLW1pbmkucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG4ud2hhdHNhcHAtbWluaXtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEyMnB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3doYXRzc2FwcC1taW5pLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ucGhvbmUtbWluaXtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIyNnB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3Bob25lLW1pbmkuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy90ZWNobm8tam8tbWFnbmV0LmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4OyBcclxuICAgIHRvcDogLTUwcHg7IFxyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnBpY3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvcGljdHVyZS1qby5qcGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvKmJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTsqL1xyXG4gICAgbWFyZ2luLXRvcDogLTQ5cHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAyNDRweDtcclxufVxyXG4ubWFpbi1waWN0dXJle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzLzM0d2FzaGluZy5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgLypib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxufVxyXG4uYWxpZ257XHJcbiAgICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbn1cclxuLmltYWdlLVN0eWxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuLnRvcC1TdHlsZXtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzdkYzlmZjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlICwgYmx1ZSk7XHJcbn1cclxuLmJvcmRlci1SYWRpdXMtUmlnaHR7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG59XHJcbi5ib3JkZXItUmFkaXVzLUxlZnR7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbn1cclxuLmltYWdlMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy/XkNeX16jXmdeV16ot157XnNeQ15QyLnBuZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG4uaW1hZ2Uye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90emFkaWsuanBnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG4uaW1hZ2Uze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3NoYWtlLnBuZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG4uaW1hZ2U0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3ByaWNlLmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxufVxyXG5cclxuLmltYWdlNXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy90c2FkaWstY3JvcC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA3cHggMTNweCAxcHggYmxhY2s7XHJcbn1cclxuLmZhY2Vib29re1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ZhY2Vib29rLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTUwcHg7XHJcbn1cclxuLndoYXRzYXBwe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3doYXRzYXBwLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmluc3RlZ3JhbXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbnN0ZWdyYW0ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubWFpbHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9tYWlsLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBob25le1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3Bob25lLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmhlYWRsaW5lLVRleHR7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuLm1paWRsZS1IZWFkbGluZS1UZXh0e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5ib3R0b20tVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4ubS1Ub3B7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7IFxyXG4gICAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4uY29udGFjdC1IZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmNhcm91c2VsLVRleHR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnRleHQxe1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLkFsbGJyYW5ke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9BbGxicmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kMXtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9hbWFuYS1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kMntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9ibG9vbWJlcmctYnJhbmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDN7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvU2Ftc3VuZy1icmFuZC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kNHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90YWRpcmFuLWJyYW5kLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYnJhbmQ1e1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL1doaXJscG9vbC1icmFuZDEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDZ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYmVrby1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kN3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9icm90aGVyLWJyYW5kLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4udGlwMXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnRpcDEgOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFjdDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5jb250YWN0MSA6aG92ZXJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hYm91dDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5hYm91dDEgOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbXlTaWRlbmF2IGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTkwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gIH1cclxuICAucG9pbnRlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI215U2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNhYm91dCB7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIH1cclxuICBcclxuICAjYmxvZyB7XHJcbiAgICB0b3A6IDEzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgI3Byb2plY3RzIHtcclxuICAgIHRvcDogMTkwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gIH1cclxuICBcclxuICAjY29udGFjdCB7XHJcbiAgICB0b3A6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NVxyXG4gIH1cclxuICAuaGVhZGVyMXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbiAgLmhlYWRlcjJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC50ZXh0MXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM0NnB4KSB7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDsgXHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uxe1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uye1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U0e1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ4MHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kMntcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDsgXHJcbiAgICAgICAgdG9wOiAtMjBweDtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuSGVhZGxpbmUtSm9le1xyXG4gICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC53aGF0c2FwcHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmluc3RlZ3JhbXtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1haWx7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5waG9uZXtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGhlaWdodDogODBweDsgXHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uxe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgICAuY29sLTF7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMjtcclxuICAgICAgICBmbGV4OiAxIDAgMTUuMzMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE4LjMzMzMzMyU7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kMntcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kM3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNntcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC53aGF0c2FwcHtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLmluc3RlZ3JhbXtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLm1haWx7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5waG9uZXtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MTBweCkge1xyXG4gICAgLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLm1paWRsZS1IZWFkbGluZS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxuICAgIC5ib3R0b20tVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAvKiAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIH0gKi9cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGhlaWdodDogOTBweDsgXHJcbiAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlNXtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNntcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQye1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDR7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNXtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAud2hhdHNhcHB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5pbnN0ZWdyYW17XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5tYWlse1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAucGhvbmV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgLmFib3V0MXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpcDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWN0MXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyBcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDN7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ1e1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB9XHJcbiAgICAuSGVhZGxpbmUtSm9le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWQtTG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgLmV4cGVyaWVuY2V7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzJweCkge1xyXG4gICAgLmFib3V0MXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpcDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWN0MXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJyYW5kMXtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJyYW5kMntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJyYW5kM3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJyYW5kN3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5oZWFkbGluZS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuICAgIC5taWlkbGUtSGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAvKiAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH0gKi9cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGhlaWdodDogNjlweDtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIH1cclxuICAgIC50ZW1wLVRleHQxe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnRlbXAtVGV4dHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4OyBcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LUhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmV4cGVyaWVuY2V7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDRweCkge1xyXG4gICAgICAubS1Ub3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTN7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH1cclxuICAgIC5jb2wtMXtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmFib3V0MXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpcDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWN0MXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltYWdlNXtcclxuICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyMXtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWRlcjJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0MXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC53aGF0c2FwcHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmluc3RlZ3JhbXtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1haWx7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5waG9uZXtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWQtTG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIC5hYm91dDEgOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGlwMSA6aG92ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250YWN0MSA6aG92ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICAgIC5oZWFkbGluZS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuICAgIC5taWlkbGUtSGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAvKiAubG9nb3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LVN0eWxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtSGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1TdHlsZXtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAuZXh0cmF7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5tLVRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dDF7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICB9ICovXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcblxyXG4gICAgLmltYWdlNXtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcjF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXIye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXQtU3R5bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgI215U2lkZW5hdiBhe1xyXG4gICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI2Jsb2cge1xyXG4gICAgICAgIHRvcDogMTE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICNwcm9qZWN0cyB7XHJcbiAgICAgICAgdG9wOiAxNjBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI2NvbnRhY3Qge1xyXG4gICAgICAgIHRvcDogMjA1cHg7XHJcbiAgICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC53aGF0c2FwcHtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC5pbnN0ZWdyYW17XHJcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAubWFpbHtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC5waG9uZXtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgICAgLmNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuSGVhZGxpbmUtSm9le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzRweCkge1xyXG4gICAgLyogLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIH1cclxuICAgIC5tLVRvcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZXh0cmF7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50ZXh0MXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIH0gKi9cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC8qIC50ZXh0MXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgfSAqL1xyXG4gIC8qIC5hYm91dDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC50aXAxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfSAqL1xyXG4gIC5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLkFsbGJyYW5ke1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5oZWFkZXIye1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuc2VuZHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICAuaGVhZC1Mb2dve1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIHdpZHRoOiAzMzBweDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5jb2wtMyB7XHJcbiAgICAgICAgLW1zLWZsZXg6IDAgMCAyNSU7XHJcbiAgICAgICAgZmxleDogMCAwIDMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDM1JTtcclxuICAgIH1cclxuICAgIC5pbWFnZTV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uxe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlM3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAud2hhdHNhcHB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC5pbnN0ZWdyYW17XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC5waG9uZXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1haWx7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC5jb2wtMSB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMjtcclxuICAgICAgICBmbGV4OiAxMCAwIDIwLjMzMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMC4zMzMzMzMlO1xyXG4gICAgfVxyXG4gICAgLmFib3V0MXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpcDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWN0MXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgI215U2lkZW5hdiBhe1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYWJvdXQxIDpob3ZlcntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnRpcDEgOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdDEgOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4uYWJvdXQxe1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICAudGlwMXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLmNvbnRhY3Qxe1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICAuQWxsYnJhbmR7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmhlYWRlcjJ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9va3tcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4ud2hhdHNhcHB7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLmluc3RlZ3JhbXtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4ubWFpbHtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4ucGhvbmV7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLnNlbmR7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuLmhlYWQtTG9nb3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMjc1cHg7XHJcbn1cclxuLmNvbnRhY3QtSGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pbWFnZTV7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMTBweCkge1xyXG4gICAgLyogLmNvbC0xIHtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAyO1xyXG4gICAgICAgIGZsZXg6IDEwIDAgMjAuMzMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwLjMzMzMzMyU7XHJcbiAgICB9ICovXHJcbiAgICAuaW1hZ2Uxe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlM3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmFib3V0MXtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRpcDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWN0MXtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIH1cclxuICAgICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5oZWFkLUxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LUhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG59Il19 */"]
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