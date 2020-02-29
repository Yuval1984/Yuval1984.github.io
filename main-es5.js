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
      decls: 168,
      vars: 0,
      consts: [[1, "row", "container-fluid", "main-picture"], ["data-toggle", "tooltip", "href", "tel:0544818383", "title", "\u05DC\u05D7\u05E5 \u05DC\u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA", 1, "container-fluid", "head-Logo", "pointer"], [1, "row", "container-fluid", "nav-bar-row"], [1, "row", "container-fluid", 2, "z-index", "1000", "opacity", "1"], ["href", "tel:+9720544818383", 1, "col", "card"], [1, "col", "contact1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#contact1", 2, "color", "white", "transition", "transform 400ms ease-out 0"], [1, "col", "tip1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#washingMachine", 2, "color", "white"], [1, "col", "about1", 2, "text-align", "right", "margin-top", "30px"], ["href", "#details", 2, "color", "white"], [1, "H", "row", "container-fluid"], [1, "col", "extra"], [1, "col-1", "image-Style", "image1", "border-Radius-Left"], [1, "col-1", "image-Style", "image2"], [1, "col-1", "image-Style", "image3"], [1, "col-1", "image-Style", "border-Radius-Right", "image4"], [1, "row", "container-fluid"], [1, "Allbrand"], ["id", "details", "dir", "rtl", 2, "color", "white", "background-color", "teal"], [1, "row", "container-fluid", 2, "text-align", "right"], [1, "col"], [1, "row", "header", 2, "padding-top", "40px", "color", "white"], [1, "header"], [1, "col-3", "image5"], [1, "row", "container", 2, "text-align", "right", "padding-bottom", "40px", "padding-top", "40px"], [1, "row", "container", "header"], ["dir", "rtl", 1, "container-fluid", 2, "text-align", "center"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "row", 2, "height", "450px", "margin-top", "50px"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "5"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "text-align", "center"], ["src", "../assets/meyabesh.jpg", "alt", "First slide", 2, "margin-bottom", "40px"], [1, "carousel-caption", "d-none", "d-md-block", 2, "color", "black"], [1, "carousel-Text"], [1, "carousel-item", 2, "text-align", "center"], ["src", "../assets/refrigirator.jpg", "alt", "second slide", 2, "margin-bottom", "70px"], ["src", "../assets/oven builtIn.jpg", "alt", "Third slide", 2, "margin-bottom", "50px"], ["src", "../assets/micro.png", "alt", "Fourth slide", 2, "margin-bottom", "60px"], ["src", "../assets/oven.gif", "alt", "Fifth slide", 2, "margin-bottom", "70px"], ["src", "../assets/washing.jpg", "alt", "Sixth slide", 2, "margin-bottom", "70px"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "washingMachine", "dir", "rtl", 2, "background-color", "gold", "margin-top", "-30px"], [1, "row", "container", 2, "text-align", "right"], [1, "row", "container", "header2", 2, "color", "blue", "padding-top", "20px"], [2, "margin-top", "5px"], [1, "row", "container", 2, "text-align", "right", "margin-bottom", "30px", "margin-top", "30px"], [1, "row", "container", "header2", 2, "color", "blue"], [1, "row", "container-fluid", 2, "text-align", "right", "padding-bottom", "50px", "border-bottom", "solid 2px black"], [1, "container-fluid", 2, "margin-top", "5px"], [1, "container-fluid"], ["id", "contact1", "dir", "rtl", 1, "Contact", "row", "container-fluid"], [2, "text-align", "right", "margin-right", "10px", "margin-top", "100px"], [1, "container-fluid", "contact-Header", 2, "text-align", "center"], [1, "container-fluid", "top", 2, "text-align", "center"], ["dir", "rtl", "placeholder", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D5\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", 1, "input-Style"], [1, "container-fluid", 2, "text-align", "center"], ["dir", "rtl", "placeholder", "\u05DE\u05E1 \u05D8\u05DC\u05E4\u05D5\u05DF", 1, "input-Style"], ["dir", "rtl", "placeholder", "\u05D0\u05D9 \u05DE\u05D9\u05D9\u05DC", 1, "input-Style"], [1, "btn", "btn-warning", "send", 2, "border-radius", "30px"], ["id", "mySidenav", 1, "sidenav"], ["href", "#details", "id", "about"], ["href", "#washingMachine", "id", "blog"], ["href", "#", "id", "projects"], ["href", "#contact1", "id", "contact"], [1, "row", "container-fluid", 2, "height", "160px", "background-color", "black"], ["href", "https://www.facebook.com/%D7%98%D7%9B%D7%A0%D7%95-%D7%92%D7%95-609578502437820/", 1, "col-1", "facebook"], ["href", "https://api.whatsapp.com/send?phone=+972544818383&text= \u05E9\u05DC\u05D5\u05DD, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05E9\u05D9\u05E8 \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D1\u05D1\u05D9\u05EA\u05D9", 1, "col-1", "whatsapp", 2, "margin-left", "10px"], ["href", "mailto:joelkr@gmail.com", 1, "col-1", "mail", 2, "margin-left", "10px"], ["href", "tel:0544818383", 1, "col-1", "phone", 2, "margin-left", "10px"], ["clas", "container-fluid", 2, "background-color", "black", "height", "100px", "text-align", "center", "padding-top", "30px"], ["href", "https://api.whatsapp.com/send?phone=+972508451651&text= \u05E9\u05DC\u05D5\u05DD, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8", 2, "color", "white"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u05D9\u05E6\u05D0\u05EA\u05D9 \u05E6\u05D3\u05D9\u05E7 \u05D1\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E9\u05DC \u05D7\u05D9\u05D9\u05DD \u05D4\u05DB\u05D8 \u05D1\u05DB\u05DC \u05D4\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD: \u05D0\u05DE\u05D9\u05E0\u05D5\u05EA, \u05DE\u05D7\u05D9\u05E8, \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA, \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u05D0\u05E0\u05D9 \u05D8\u05DB\u05E0\u05D0\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D5\u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05DE\u05D5\u05E1\u05DE\u05DA \u05DE\u05E2\u05DC 10 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1\u05EA\u05D7\u05D5\u05DD, \u05DC\u05E4\u05E0\u05D9 \u05DB\u05DF \u05E2\u05D1\u05D3\u05EA\u05D9 \u05DB 12 \u05E9\u05E0\u05D4 \u05D1\u05D4\u05D9\u05D9\u05D8\u05E7 \u05D1\u05EA\u05E4\u05E7\u05D9\u05D3\u05D9\u05DD \u05DE\u05D2\u05D5\u05D5\u05E0\u05D9\u05DD : \u05DB\u05DE\u05D4\u05E0\u05D3\u05E1 \u05DE\u05E2\u05D1\u05D3\u05D5\u05EA , \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA, \u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 , \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D5\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D8\u05DB\u05E0\u05D9\u05EA \u05D1\u05E0\u05D5\u05E1\u05E3 \u05E2\u05D1\u05D3\u05EA\u05D9 \u05DB\u05D4\u05E0\u05D3\u05E1\u05D0\u05D9 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4 \u05DB\u05D5\u05DC\u05DC \u05EA\u05D9\u05E7\u05D5\u05DF \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD, \u05D5\u05D8\u05DB\u05E0\u05D0\u05D9, \u05D1\u05D4\u05E9\u05DB\u05DC\u05EA\u05D9 \u05D0\u05E0\u05D9 \u05D1\u05D5\u05D2\u05E8 \u05E4\u05D9\u05D6\u05D9\u05E7\u05D4 \u05EA\u05D5\u05D0\u05E8 \u05E8\u05D0\u05E9\u05D5\u05DF \u05D5\u05D7\u05E9\u05DE\u05DC, \u05D5\u05D4\u05E0\u05D3\u05E1\u05D0\u05D9 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5-\u05D0\u05D5\u05E4\u05D8\u05D9\u05E7\u05D4, \u05D9\u05E9 \u05DC\u05D9 \u05D9\u05DB\u05D5\u05DC\u05EA \u05D8\u05DB\u05E0\u05D9\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4 , \u05D9\u05DB\u05D5\u05DC\u05EA \u05D7\u05E9\u05D9\u05D1\u05D4 \u05D5\u05D0\u05D9\u05EA\u05D5\u05E8 \u05EA\u05E7\u05DC\u05D5\u05EA \u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA , \u05D0\u05E0\u05D9 \u05DE\u05EA\u05D7\u05D9\u05D9\u05D1 \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D0\u05D3\u05D9\u05D1 \u05D5\u05D0\u05DE\u05D9\u05DF \u05D1\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05EA \u05D5\u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u05D0\u05D6\u05D5\u05E8\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u05DB\u05DC \u05D0\u05D6\u05D5\u05E8 \u05D4\u05E9\u05E8\u05D5\u05DF, \u05DE\u05D7\u05D3\u05E8\u05D4 \u05E2\u05D3 \u05E8\u05E2\u05E0\u05E0\u05D4, \u05DB\u05D5\u05DC\u05DC \u05D6\u05DB\u05E8\u05D5\u05DF \u05D9\u05E2\u05E7\u05D1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05DE\u05DB\u05DC \u05D4\u05E1\u05D5\u05D2\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ol", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "li", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "li", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05D9\u05D1\u05E9\u05D9 \u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05DE\u05D5\u05D1\u05E0\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05E7\u05E8\u05D5\u05D2\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05EA\u05E0\u05D5\u05E8\u05D9\u05DD \u05E2\u05D5\u05DE\u05D3\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05DB\u05D1\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u05D8\u05DB\u05E0\u05D0\u05D9 \u05DE\u05E7\u05E8\u05E8\u05D9\u05DD :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05E7\u05E8\u05E8\u05D9\u05DD \u05D5\u05D4\u05DE\u05E7\u05E4\u05D9\u05D0\u05D9\u05DD \u05DE\u05DB\u05DC \u05D4\u05D7\u05D1\u05E8\u05D5\u05EA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u05DE\u05D5\u05DE\u05D7\u05D4 \u05DC\u05D7\u05D1\u05E8\u05D5\u05EA: BEKO, BLUMBERG, LG, TADIRAN, AMCOR, AMANA, SAMSUNG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " \u05DE\u05D9\u05DC\u05D5\u05D9 \u05D2\u05D6, \u05EA\u05D9\u05E7\u05D5\u05DF \u05D3\u05DC\u05D9\u05E4\u05D5\u05EA, \u05D4\u05D7\u05DC\u05E4\u05EA \u05DE\u05D3\u05D7\u05E1\u05D9\u05DD \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8\u05D9\u05DD, \u05D4\u05D7\u05DC\u05E4\u05EA \u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD, \u05D0\u05D9\u05D9\u05E1 \u05DE\u05D9\u05D9\u05E7\u05E8\u05D9\u05DD, \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D1\u05E7\u05E8\u05D4 \u05D5\u05DB\u05DC \u05DE\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u05D8\u05DB\u05E0\u05D0\u05D9 \u05DE\u05D5\u05E6\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC \u05D1\u05D9\u05EA\u05D9\u05D9\u05DD :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u05EA\u05D9\u05E7\u05D5\u05DF \u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05D4\u05DB\u05D1\u05D9\u05E1\u05D4, \u05DE\u05D9\u05D9\u05D1\u05E9\u05D9 \u05D4\u05DB\u05D1\u05D9\u05E1\u05D4 ,\u05DE\u05D3\u05D9\u05D7\u05D9 \u05DB\u05DC\u05D9\u05DD , \u05EA\u05E0\u05D5\u05E8\u05D9 \u05D0\u05E4\u05D9\u05D4 . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u05DE\u05D5\u05DE\u05D7\u05D4 \u05D1\u05D7\u05D1\u05E8\u05D5\u05EA: SAMSUNG, BUSH, SIEMENS, WHIRLPOOL, BEKO, LG, AEG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D1\u05D5\u05D3\u05EA \u05D7\u05E9\u05DE\u05DC: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h5", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \u05E8\u05E9\u05D9\u05D5\u05DF \u05D7\u05E9\u05DE\u05DC\u05D0\u05D9: 975118");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " \u05DE\u05E2\u05DC 10 \u05E9\u05E0\u05D5\u05EA \u05E0\u05D9\u05E1\u05D5\u05DF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " \u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D4\u05D9\u05E8 \u05D0\u05DE\u05D9\u05DF \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 - \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05DE\u05D0\u05D5\u05D3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h5", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05D3\u05D9\u05D1 \u05D5\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05E0\u05D5\u05D7\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h5", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05E2\u05DC \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D5\u05D4\u05D7\u05DC\u05E4\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h5", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " \u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05DC\u05DE\u05D5\u05E1\u05D3\u05D5\u05EA \u05D5\u05DC\u05E2\u05E1\u05E7\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h4", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u05D4\u05DB\u05E0\u05E1 \u05E4\u05E8\u05D8\u05D9\u05DD \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u05E9\u05DC\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u05D8\u05D9\u05E4\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u05D2\u05DC\u05E8\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05E0\u05D1\u05E0\u05D4 \u05E2\"\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u05D9\u05D5\u05D1\u05DC \u05E7\u05D5\u05D2\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".H[_ngcontent-%COMP%]{\r\n    height: 220px;\r\n    background-color: #ffffff;\r\n    border-width: 1px;\r\n    \r\n    \r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n.temp-Text1[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.header-Style[_ngcontent-%COMP%]{\r\n    height: 400px; \r\n    width: 100%;\r\n    background-color: brown;\r\n    box-shadow: 0 2px 20px 0 rgba(50, 50, 186, 0.16);\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.Contact[_ngcontent-%COMP%]{\r\n    background-color: #7dc9ff;\r\n    width: 100%; \r\n    height: 550px; \r\n    opacity: 1;\r\n}\r\n.top[_ngcontent-%COMP%]{\r\n    z-index: 10;\r\n}\r\n.nav-bar-row[_ngcontent-%COMP%]{\r\n    margin-top: 100px; \r\n    height: 100px; \r\n    background-color: rgb(51, 122, 122);\r\n    opacity: 0.9\r\n}\r\n.input-Style[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 50px;\r\n    margin-top: 20px;\r\n    padding: 12px 20px;\r\n    margin-right: 25px;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n\r\n    box-sizing: border-box;\r\n    border-radius: 60px;\r\n}\r\n.head-Logo[_ngcontent-%COMP%]{\r\n    background-image: url('Logo-main.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-align: center;\r\n    height: 200px;\r\n    width: 600px;\r\n    margin-top: 20px;\r\n    border-radius: 15px;\r\n    box-shadow: 4px 7px 13px 1px black;\r\n}\r\n.send[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n}\r\n.mail-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 70px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('mail-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-top-right-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.hover[_ngcontent-%COMP%]{\r\n    width: 80px;\r\n    -webkit-transition-duration: 0.5s;\r\n            transition-duration: 0.5s;\r\n}\r\n.facebook-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 174px;\r\n    width: 66px;\r\n    height: 50px;\r\n    background-image: url('facebook-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n}\r\n.whatsapp-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 122px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('whatssapp-mini.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.phone-mini[_ngcontent-%COMP%]{\r\n    z-index: 100;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 226px;\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('phone-mini.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background-image: url('techno-jo-magnet.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 20px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    margin-top: 10px;\r\n    height: 200px;\r\n    margin-left: 100px; \r\n    top: -50px; \r\n    right: 10px;\r\n}\r\n.pic[_ngcontent-%COMP%]{\r\n    background-image: url('picture-jo.jpeg');\r\n    background-color: #cccccc;\r\n    border-radius: 20px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 0px;\r\n    \r\n    margin-top: -49px;\r\n    height: 400px;\r\n    margin-left: 125px;\r\n    position: absolute;\r\n    z-index: 10;\r\n    left: 30px;\r\n    top: 244px;\r\n}\r\n.main-picture[_ngcontent-%COMP%]{\r\n    background-image: url('34washing.jpg'); \r\n    background-color: #cccccc; \r\n    \r\n    background-position: center; \r\n    background-repeat: repeat; \r\n    background-size: contain; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    height: 400px;\r\n    background-attachment: fixed;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n}\r\n.align[_ngcontent-%COMP%]{\r\n    margin-left: 230px;\r\n}\r\n.image-Style[_ngcontent-%COMP%]{\r\n  background-color: bisque;\r\n  border-style: solid;\r\n  border-width: 5px;\r\n  border-color: black;\r\n  height: 125px;\r\n  margin-top: 60px;\r\n  margin-left: 2px;\r\n}\r\n.top-Style[_ngcontent-%COMP%]{\r\n    \r\n    background-image: -webkit-gradient(linear, left top, right top, from(white) , to(blue));\r\n    background-image: linear-gradient(to right, white , blue);\r\n}\r\n.border-Radius-Right[_ngcontent-%COMP%]{\r\n    border-top-right-radius: 6px;\r\n}\r\n.border-Radius-Left[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 6px;\r\n}\r\n.image1[_ngcontent-%COMP%]{\r\n    background-image: url('\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA-\u05DE\u05DC\u05D0\u05D42.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image2[_ngcontent-%COMP%]{\r\n    background-image: url('tzadik.jpg');\r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image3[_ngcontent-%COMP%]{\r\n    background-image: url('shake.png'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image4[_ngcontent-%COMP%]{\r\n    background-image: url('price.jpg'); \r\n    background-color: #cccccc; \r\n    border-radius: 60px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n}\r\n.image5[_ngcontent-%COMP%]{\r\n    background-image: url('tsadik-crop.jpg');\r\n    background-color: #cccccc;\r\n    border-radius: 30px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    padding: 0px;\r\n    box-shadow: 20px 10px 25px 5px rgba(255, 57, 57, 0.16);\r\n    height: 400px;\r\n    margin-left: 50px;\r\n    margin-top: 30px;\r\n    background-color: #c3c2c0;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n}\r\n.facebook[_ngcontent-%COMP%]{\r\n    background-image: url('facebook.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    margin-left: 550px;\r\n}\r\n.whatsapp[_ngcontent-%COMP%]{\r\n    background-image: url('whatsapp.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.instegram[_ngcontent-%COMP%]{\r\n    background-image: url('instegram.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.mail[_ngcontent-%COMP%]{\r\n    background-image: url('mail.jpg');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.phone[_ngcontent-%COMP%]{\r\n    background-image: url('phone.png');\r\n    background-color: #cccccc; \r\n    border-radius: 30px; \r\n    background-position: center; \r\n    background-repeat: no-repeat; \r\n    background-size: cover; \r\n    border: solid 1px black;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n}\r\n.miidle-Headline-Text[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n}\r\n.bottom-Text[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.m-Top[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    margin-left: 30px; \r\n    margin-top: 120px; \r\n    height: 120px; \r\n    width: 30px;\r\n}\r\n.contact-Header[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n}\r\n.carousel-Text[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n.text1[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n}\r\n.Allbrand[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100px;\r\n    background-image: url('Allbrand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand1[_ngcontent-%COMP%]{\r\n    width: 65px;\r\n    height: 50px;\r\n    background-image: url('amana-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand2[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('bloomberg-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand3[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Samsung-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand4[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('tadiran-brand.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand5[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('Whirlpool-brand1.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand6[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('beko-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.brand7[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 65px;\r\n    background-image: url('brother-brand.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.tip1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.tip1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.contact1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.contact1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n.about1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n.about1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    font-size: 30px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: -90px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    padding: 10px;\r\n    width: 120px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    border-radius: 0 5px 5px 0;\r\n  }\r\n.pointer[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n  }\r\n#mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    left: 0;\r\n  }\r\n#about[_ngcontent-%COMP%] {\r\n    top: 70px;\r\n    background-color: #4CAF50;\r\n  }\r\n#blog[_ngcontent-%COMP%] {\r\n    top: 130px;\r\n    background-color: #2196F3;\r\n  }\r\n#projects[_ngcontent-%COMP%] {\r\n    top: 190px;\r\n    background-color: #f44336;\r\n  }\r\n#contact[_ngcontent-%COMP%] {\r\n    top: 250px;\r\n    background-color: #555\r\n  }\r\n.header1[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n.text1[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n@media only screen and (max-width: 1346px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1300px) {\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 160px; \r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 480px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 80px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1200px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 100px; \r\n        width: 25px;\r\n    }\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 120px; \r\n        top: -20px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 70px;\r\n    }\r\n    .Headline-Joe[_ngcontent-%COMP%]{\r\n      font-size: 60px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 1000px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 80px; \r\n        width: 20px;\r\n    }\r\n    .image-Style[_ngcontent-%COMP%]{\r\n        border-width: 2px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 160px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%]{\r\n        -webkit-box-flex: 2;\r\n        flex: 1 0 15.333333%;\r\n        max-width: 18.333333%;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 220px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 65px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 130px;\r\n        height: 130px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 910px) {\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 15px;\r\n    }\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 80px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 40px;\r\n    }\r\n    .bottom-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n        height: 90px; \r\n        top: -5px;\r\n        margin-left: 50px;\r\n    }\r\n    .image5[_ngcontent-%COMP%]{\r\n        height: 300px;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand2[_ngcontent-%COMP%]{\r\n        height: 30px;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 63px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 130px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 850px) {\r\n      .about1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 60px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 800px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 60px; \r\n        width: 15px;\r\n    }\r\n    .carousel-Text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 130px;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 55px;\r\n    }\r\n    .Headline-Joe[_ngcontent-%COMP%]{\r\n        font-size: 55px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 750px) {\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 50px;\r\n    }\r\n    .head-Logo[_ngcontent-%COMP%]{\r\n        height: 170px;\r\n        width: 500px;\r\n    }\r\n    .header[_ngcontent-%COMP%]{\r\n        font-size: 28px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 672px) {\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .brand1[_ngcontent-%COMP%]{\r\n          display: none;\r\n      }\r\n      .brand2[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand3[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand4[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand5[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand6[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .brand7[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 45px;\r\n    }\r\n    \r\n  }\r\n@media only screen and (max-width: 700px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 60px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n    }\r\n    \r\n    .card[_ngcontent-%COMP%]{\r\n        height: 69px;\r\n        top: 6px;\r\n        margin-left: 50px;\r\n    }\r\n    .temp-Text1[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    .temp-Text[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n  }\r\n@media only screen and (max-width: 650px) {\r\n    .logo[_ngcontent-%COMP%]{\r\n        height: 50px; \r\n        width: 10px;\r\n    }\r\n    .contact-Header[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 40px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 80px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 644px) {\r\n      .m-Top[_ngcontent-%COMP%]{\r\n        margin-top: 20px;\r\n      }\r\n      .text[_ngcontent-%COMP%]{\r\n          font-size: 15px;\r\n      }\r\n    \r\n      .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 110px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%]{\r\n        width: 100px;\r\n    }\r\n    .card[_ngcontent-%COMP%]{\r\n        height: 65px;\r\n        top: 6px;\r\n        margin-left: 30px;\r\n    }\r\n    .Allbrand[_ngcontent-%COMP%]{\r\n        height: 36px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 600px) {\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n      }\r\n      .image5[_ngcontent-%COMP%]{\r\n          height: 230px;\r\n      }\r\n      .header[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n    }\r\n    .header1[_ngcontent-%COMP%]{\r\n        font-size: 30px;\r\n      }\r\n      .header2[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n      }\r\n      .text1[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n      }\r\n      .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 40px;\r\n      }\r\n      .card[_ngcontent-%COMP%]{\r\n        margin-left: 40px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 30px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 100px;\r\n    }\r\n    .head-Logo[_ngcontent-%COMP%]{\r\n        height: 150px;\r\n        width: 400px;\r\n    }\r\n    .about1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n    }\r\n    .tip1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n    }\r\n    .contact1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 20px;\r\n        cursor: pointer;\r\n    }\r\n  }\r\n@media only screen and (max-width: 570px) {\r\n    .headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 50px;\r\n    }\r\n    .miidle-Headline-Text[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n@media only screen and (max-width: 550px) {\r\n    \r\n  }\r\n@media only screen and (max-width: 500px) {\r\n\r\n    .image5[_ngcontent-%COMP%]{\r\n        height: 200px;\r\n    }\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 12px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 85px;\r\n    }\r\n    .header1[_ngcontent-%COMP%]{\r\n        font-size: 25px;\r\n      }\r\n      .header2[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      .input-Style[_ngcontent-%COMP%]{\r\n          font-size: 12px;\r\n      }\r\n      #mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        width: 110px !important;\r\n        font-size: 12px !important;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 50px;\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        height: 75px;\r\n        border-radius: 15px;\r\n    }\r\n      .card[_ngcontent-%COMP%]{\r\n        display: none;\r\n      }\r\n      .Headline-Joe[_ngcontent-%COMP%]{\r\n        font-size: 45px;\r\n      }\r\n  }\r\n@media only screen and (max-width: 474px) {\r\n    \r\n  }\r\n@media only screen and (max-width: 450px) {\r\n    \r\n  \r\n  .header[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n}\r\n.Allbrand[_ngcontent-%COMP%]{\r\n    height: 25px;\r\n}\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n  }\r\n  .send[_ngcontent-%COMP%]{\r\n      width: 150px;\r\n  }\r\n  .head-Logo[_ngcontent-%COMP%]{\r\n    height: 125px;\r\n    width: 330px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n    .col-3[_ngcontent-%COMP%] {\r\n        -webkit-box-flex: 0;\r\n                flex: 0 0 33%;\r\n        max-width: 35%;\r\n    }\r\n    .image5[_ngcontent-%COMP%]{\r\n        margin-left: 15px;\r\n    }\r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 70px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n        margin-left: 5px;\r\n    }\r\n    .whatsapp[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .instegram[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .phone[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .mail[_ngcontent-%COMP%]{\r\n        border-radius: 15px;\r\n    }\r\n    .col-1[_ngcontent-%COMP%] {\r\n        -webkit-box-flex: 2;\r\n        flex: 10 0 20.333333%;\r\n        max-width: 30.333333%;\r\n    }\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 13px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 14px;\r\n      }\r\n      #mySidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n          display: none;\r\n      }\r\n      .about1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 15px;\r\n        cursor: pointer;\r\n    }\r\n    .tip1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 15px;\r\n        cursor: pointer;\r\n    }\r\n    .contact1[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n        font-size: 15px;\r\n        cursor: pointer;\r\n    }\r\n    .header[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n    }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n.about1[_ngcontent-%COMP%]{\r\n    font-size: 11px;\r\n  }\r\n  .tip1[_ngcontent-%COMP%]{\r\n    font-size: 11px;\r\n  }\r\n  .contact1[_ngcontent-%COMP%]{\r\n    font-size: 11px;\r\n  }\r\n  .Allbrand[_ngcontent-%COMP%]{\r\n    height: 20px;\r\n}\r\n.header2[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  .facebook[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.whatsapp[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.instegram[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.mail[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.phone[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n}\r\n.send[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n}\r\n.head-Logo[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n    width: 275px;\r\n}\r\n.contact-Header[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n}\r\n@media only screen and (max-width: 310px) {\r\n    \r\n    .image1[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image2[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image3[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .image4[_ngcontent-%COMP%]{\r\n        border-radius: 110px;\r\n        height: 60px;\r\n    }\r\n    .facebook[_ngcontent-%COMP%]{\r\n        margin-left: 0px;\r\n    }\r\n    .about1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .tip1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .contact1[_ngcontent-%COMP%]{\r\n        font-size: 11px;\r\n      }\r\n      .Allbrand[_ngcontent-%COMP%]{\r\n        height: 15px;\r\n    }\r\n    .head-Logo[_ngcontent-%COMP%]{\r\n        height: 80px;\r\n        width: 220px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkM7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCOztJQUV0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQ0FBOEM7SUFDOUMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixPQUFPO0lBQ1AsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUE4QztJQUM5QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlDQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixP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O1FBQ2YsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7QUFDQTtJQUNJLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7QUFFQTtJQUNJOzs7O09BSUc7SUFDSDtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLGVBQWU7TUFDakI7TUFDQTtRQUNFLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLnRlbXAtVGV4dDF7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5oZWFkZXItU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDQwMHB4OyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAyMHB4IDAgcmdiYSg1MCwgNTAsIDE4NiwgMC4xNik7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5Db250YWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdkYzlmZjtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGhlaWdodDogNTUwcHg7IFxyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4udG9we1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLm5hdi1iYXItcm93e1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7IFxyXG4gICAgaGVpZ2h0OiAxMDBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDEyMiwgMTIyKTtcclxuICAgIG9wYWNpdHk6IDAuOVxyXG59XHJcbi5pbnB1dC1TdHlsZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxufVxyXG4uaGVhZC1Mb2dve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9Mb2dvLW1haW4ucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDdweCAxM3B4IDFweCBibGFjaztcclxufVxyXG4uc2VuZHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4ubWFpbC1taW5pe1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNzBweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9tYWlsLW1pbmkucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaG92ZXJ7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuLmZhY2Vib29rLW1pbml7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxNzRweDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9mYWNlYm9vay1taW5pLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuLndoYXRzYXBwLW1pbml7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxMjJweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy93aGF0c3NhcHAtbWluaS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnBob25lLW1pbml7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyMjZweDtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9waG9uZS1taW5pLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdGVjaG5vLWpvLW1hZ25ldC5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDsgXHJcbiAgICB0b3A6IC01MHB4OyBcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi5waWN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3BpY3R1cmUtam8uanBlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLypib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7Ki9cclxuICAgIG1hcmdpbi10b3A6IC00OXB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHRvcDogMjQ0cHg7XHJcbn1cclxuLm1haW4tcGljdHVyZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy8zNHdhc2hpbmcuanBnXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cclxuICAgIC8qYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMTBweCAyNXB4IDVweCByZ2JhKDI1NSwgNTcsIDU3LCAwLjE2KTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbn1cclxuLmFsaWdue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xyXG59XHJcbi5pbWFnZS1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDVweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcbi50b3AtU3R5bGV7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM3ZGM5ZmY7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSAsIGJsdWUpO1xyXG59XHJcbi5ib3JkZXItUmFkaXVzLVJpZ2h0e1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcclxufVxyXG4uYm9yZGVyLVJhZGl1cy1MZWZ0e1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG59XHJcbi5pbWFnZTF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMv15DXl9eo15nXldeqLdee15zXkNeUMi5wbmdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbn1cclxuLmltYWdlMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvdHphZGlrLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbn1cclxuLmltYWdlM3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9zaGFrZS5wbmdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbn1cclxuLmltYWdlNHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9wcmljZS5qcGdcIik7IC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAyMHB4IDEwcHggMjVweCA1cHggcmdiYSgyNTUsIDU3LCA1NywgMC4xNik7XHJcbn1cclxuXHJcbi5pbWFnZTV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdHNhZGlrLWNyb3AuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAxMHB4IDI1cHggNXB4IHJnYmEoMjU1LCA1NywgNTcsIDAuMTYpO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MyYzA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcbi5mYWNlYm9va3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9mYWNlYm9vay5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU1MHB4O1xyXG59XHJcbi53aGF0c2FwcHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy93aGF0c2FwcC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5pbnN0ZWdyYW17XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW5zdGVncmFtLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLm1haWx7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvbWFpbC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5waG9uZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9waG9uZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjOyAvKiBVc2VkIGlmIHRoZSBpbWFnZSBpcyB1bmF2YWlsYWJsZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5oZWFkbGluZS1UZXh0e1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbi5taWlkbGUtSGVhZGxpbmUtVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4uYm90dG9tLVRleHR7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnRleHR7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLm0tVG9we1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ubG9nb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4OyBcclxuICAgIGhlaWdodDogMTIwcHg7IFxyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLmNvbnRhY3QtSGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5jYXJvdXNlbC1UZXh0e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi50ZXh0MXtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5BbGxicmFuZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvQWxsYnJhbmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDF7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYW1hbmEtYnJhbmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDJ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYmxvb21iZXJnLWJyYW5kLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYnJhbmQze1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL1NhbXN1bmctYnJhbmQuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDR7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvdGFkaXJhbi1icmFuZC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJyYW5kNXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9XaGlybHBvb2wtYnJhbmQxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYnJhbmQ2e1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2Jla28tYnJhbmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5icmFuZDd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvYnJvdGhlci1icmFuZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnRpcDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi50aXAxIDpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRhY3Qxe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uY29udGFjdDEgOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWJvdXQxe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uYWJvdXQxIDpob3ZlcntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI215U2lkZW5hdiBhIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IC05MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICB9XHJcbiAgLnBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNteVNpZGVuYXYgYTpob3ZlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAjYWJvdXQge1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICB9XHJcbiAgXHJcbiAgI2Jsb2cge1xyXG4gICAgdG9wOiAxMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgfVxyXG4gIFxyXG4gICNwcm9qZWN0cyB7XHJcbiAgICB0b3A6IDE5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhY3Qge1xyXG4gICAgdG9wOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTVcclxuICB9XHJcbiAgLmhlYWRlcjF7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXIye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAudGV4dDF7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNDZweCkge1xyXG4gICAgLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7IFxyXG4gICAgfVxyXG4gICAgLmltYWdlMXtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlM3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlNHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0ODBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDJ7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7IFxyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICB9XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgLkhlYWRsaW5lLUpvZXtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAud2hhdHNhcHB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbnN0ZWdyYW17XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5tYWlse1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAucGhvbmV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7IFxyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlM3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlNHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC0xe1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XHJcbiAgICAgICAgZmxleDogMSAwIDE1LjMzMzMzMyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxOC4zMzMzMzMlO1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMjBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDN7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDZ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAud2hhdHNhcHB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5pbnN0ZWdyYW17XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5tYWlse1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAucGhvbmV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEwcHgpIHtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5oZWFkbGluZS1UZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIH1cclxuICAgIC5taWlkbGUtSGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYm90dG9tLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLyogLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9ICovXHJcbiAgICAuY2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7IFxyXG4gICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTV7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDZ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kMntcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQ0e1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDV7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogNjNweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLndoYXRzYXBwe1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuaW5zdGVncmFte1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbHtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLnBob25le1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgIC5hYm91dDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXAxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGFjdDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGhlaWdodDogNjBweDsgXHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uxe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQze1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5icmFuZDR7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kNXtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG4gICAgLkhlYWRsaW5lLUpvZXtcclxuICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5oZWFkLUxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcycHgpIHtcclxuICAgIC5hYm91dDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXAxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGFjdDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5icmFuZDF7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5icmFuZDJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDN7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDR7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDZ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5icmFuZDd7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5BbGxicmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuaGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAubWlpZGxlLUhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLyogLmltYWdlLVN0eWxle1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9ICovXHJcbiAgICAuY2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDY5cHg7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGVtcC1UZXh0MXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC50ZW1wLVRleHR7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGhlaWdodDogNTBweDsgXHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1IZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ0cHgpIHtcclxuICAgICAgLm0tVG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHR7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuaW1hZ2Uxe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2U0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29sLTF7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLkFsbGJyYW5ke1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hYm91dDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXAxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGFjdDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWFnZTV7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcjF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXIye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mYWNlYm9va3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgfVxyXG4gICAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAud2hhdHNhcHB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5pbnN0ZWdyYW17XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5tYWlse1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAucGhvbmV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5oZWFkLUxvZ297XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQxIDpob3ZlcntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnRpcDEgOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdDEgOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XHJcbiAgICAuaGVhZGxpbmUtVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAubWlpZGxlLUhlYWRsaW5lLVRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLyogLmxvZ297XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5pbnB1dC1TdHlsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LUhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmV4dHJhe1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubS1Ub3B7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgfSAqL1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cclxuICAgIC5pbWFnZTV7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcjF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkZXIye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXQtU3R5bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgI215U2lkZW5hdiBhe1xyXG4gICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLndoYXRzYXBwe1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmluc3RlZ3JhbXtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxuICAgIC5tYWlse1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnBob25le1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgICAuY2FyZHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5IZWFkbGluZS1Kb2V7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3NHB4KSB7XHJcbiAgICAvKiAuaW1hZ2UtU3R5bGV7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgfVxyXG4gICAgLm0tVG9we1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIC5leHRyYXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRleHQxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgfSAqL1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLyogLnRleHQxe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxuICB9ICovXHJcbiAgLyogLmFib3V0MXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLnRpcDF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0MXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9ICovXHJcbiAgLmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uQWxsYnJhbmR7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmhlYWRlcjJ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5zZW5ke1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIC5oZWFkLUxvZ297XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmNvbC0zIHtcclxuICAgICAgICAtbXMtZmxleDogMCAwIDI1JTtcclxuICAgICAgICBmbGV4OiAwIDAgMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzUlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlNXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAgIC53aGF0c2FwcHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmluc3RlZ3JhbXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnBob25le1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAubWFpbHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC0xIHtcclxuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAyO1xyXG4gICAgICAgIGZsZXg6IDEwIDAgMjAuMzMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwLjMzMzMzMyU7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAjbXlTaWRlbmF2IGF7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5hYm91dDEgOmhvdmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGlwMSA6aG92ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250YWN0MSA6aG92ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuLmFib3V0MXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLnRpcDF7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0MXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLkFsbGJyYW5ke1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5oZWFkZXIye1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2t7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLndoYXRzYXBwe1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi5pbnN0ZWdyYW17XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLm1haWx7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLnBob25le1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi5zZW5ke1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcbi5oZWFkLUxvZ297XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG59XHJcbi5jb250YWN0LUhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxMHB4KSB7XHJcbiAgICAvKiAuY29sLTEge1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDI7XHJcbiAgICAgICAgZmxleDogMTAgMCAyMC4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAuMzMzMzMzJTtcclxuICAgIH0gKi9cclxuICAgIC5pbWFnZTF7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlMntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2Uze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgIC5pbWFnZTR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmZhY2Vib29re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgfVxyXG4gICAgICAudGlwMXtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3Qxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgfVxyXG4gICAgICAuQWxsYnJhbmR7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWQtTG9nb3tcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"]
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