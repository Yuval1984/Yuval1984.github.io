function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _private_private_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./private/private.component */
    "./src/app/private/private.component.ts");
    /* harmony import */


    var _business_business_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./business/business.component */
    "./src/app/business/business.component.ts");
    /* harmony import */


    var _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./businessExtra/business-extra/business-extra.component */
    "./src/app/businessExtra/business-extra/business-extra.component.ts");
    /* harmony import */


    var _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./privateExtra/private-extra/private-extra.component */
    "./src/app/privateExtra/private-extra/private-extra.component.ts");

    var routes = [{
      path: '',
      component: _private_private_component__WEBPACK_IMPORTED_MODULE_2__["PrivateComponent"]
    }, {
      path: 'business',
      component: _business_business_component__WEBPACK_IMPORTED_MODULE_3__["BusinessComponent"]
    }, {
      path: 'privateExtra',
      component: _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_5__["PrivateExtraComponent"]
    }, {
      path: 'businessExtra',
      component: _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_4__["BusinessExtraComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        anchorScrolling: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            anchorScrolling: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [""];
    };

    var _c1 = function _c1() {
      return ["privateExtra"];
    };

    var _c2 = function _c2() {
      return ["businessExtra"];
    };

    var _c3 = function _c3() {
      return ["business"];
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.navButton = 0;
        this.title = 'alaska-systems-site';
        this.showFiller = true;
      }

      _createClass(AppComponent, [{
        key: "changeNav",
        value: function changeNav() {
          this.navButton = 1 - this.navButton;
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
      decls: 100,
      vars: 30,
      consts: [["dir", "rtl", 1, "navbar", "navbar-expand-sm", "gb-dark", "navbar-Style", 2, "width", "101%"], [1, "row", "container-fluid"], [1, "example-sidenav-content", "col-xs-1", "navButton"], ["type", "button", "mat-button", "", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "font-size", "30px"], [1, "col-2", "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "col", "moto"], [1, "text-Style-Header"], ["aria-hidden", "true", 1, "fa", "fa-thermometer-quarter", 2, "color", "blue"], [1, "col-3", "container-fluid", "mini-Style-Header"], [1, "navbar-nav", "mini-Style-Body"], [1, "nav-item"], ["href", "https://www.facebook.com/profile.php?id=100048382270443", 1, "nav-link", "facebook-Style"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square"], ["href", "tel:0533504818", 1, "nav-link", "phone-Style"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], ["href", "#", 1, "nav-link", "instegram-Style"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "https://api.whatsapp.com/send?phone=+9720533504818&text=\u05E9\u05DC\u05D5\u05DD \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF\\\u05D4\u05EA\u05E7\u05E0\u05D4 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF", 1, "nav-link", "whatsapp-Style"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp"], ["href", "mailto:alaska19000@gmail.com", 1, "nav-link", "envelope-Style"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o"], ["dir", "rtl", 1, "container-fluid", 2, "height", "400px", "position", "absolute", "padding-right", "0px !important", "z-index", "100", "position", "absolute"], ["autosize", "", 1, "example-container", 2, "background-color", "transparent", "border", "none"], ["mode", "side", 1, "example-sidenav", "menu-Style"], ["drawer", ""], [1, "main-Nav"], [1, "menu-Item-Nav"], [1, "top-Nav", 3, "routerLink", "fragment", "click"], [2, "margin-top", "10px"], ["data-toggle", "collapse", "href", "#privateNav", "role", "button", "aria-expanded", "false", "aria-controls", "privateNav", 1, "menu-Item-Nav"], [1, "menu-Item-Up"], ["id", "privateNav", 1, "collapse"], [1, "sub-Menu"], [1, "menu-Item", 2, "font-family", "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", 3, "routerLink", "fragment", "click"], ["data-toggle", "collapse", "href", "#businessNav", "role", "button", "aria-expanded", "false", "aria-controls", "businessNav", 1, "menu-Item-Nav"], ["id", "businessNav", 1, "collapse"], [1, "menu-Item-Nav", 2, "margin-top", "10px"], [1, "row", "footer-Style"], [1, "col"], [1, "container-fluid", 2, "text-align", "center"], [1, "myMoto"], [2, "text-decoration", "underline"], [1, "myMoto", 2, "color", "brown"], [1, "row", 2, "text-align", "center"], ["href", "https://www.facebook.com/yuval.kogan.5", 1, "nav-link", "facebook-Style-Bottom"], ["href", "tel:0508451651", 1, "nav-link", "phone-Style-Bottom"], ["href", "https://api.whatsapp.com/send?phone=+972508451651&text=\u05E9\u05DC\u05D5\u05DD \u05D9\u05D5\u05D1\u05DC, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8", 1, "nav-link", "whatsapp-Style-Bottom"], ["href", "mailto:yuvalkogan84@gmail.com", 1, "nav-link", "envelope-Style-Bottom"], [1, "col-1", "arrow-Style"], [3, "routerLink", "fragment"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", "arrow-Style-Font"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            _r28.toggle();

            return ctx.changeNav();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05E1\u05E7\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_64_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " \u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u05D8\u05D9\u05E4\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return _r28.close();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding-top: 0 ;\r\n    padding-bottom: 0 ;\r\n    margin-right: 0;\r\n    font-size: 1.25rem;\r\n    line-height: inherit;\r\n    white-space: nowrap;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    border-color: blue;\r\n    background-color: black;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 250px; \r\n  height: 69px;\r\n  border-left: 1px solid black;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.top-Nav[_ngcontent-%COMP%]{\r\n  font-size: 20px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.text-Style-Header[_ngcontent-%COMP%]{\r\n    \r\n    height: 69px;\r\n    margin-bottom: 0;\r\n    margin-top: 0;\r\n    padding-top: 14px;\r\n    \r\n    \r\n    text-align: center;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    height: 500px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 26px;\r\n    width: 330px;\r\n    text-align: right;\r\n    background-color: black;\r\n    color: white;\r\n    position: fixed;\r\n    margin-top: 85px;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    visibility: visible;\r\n    height: 545px;\r\n    border-bottom-left-radius: 20px;\r\n  }\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 18px; \r\n    color: white; \r\n    \r\n  }\r\n.menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(61, 43, 226);\r\n    color: white !important;\r\n    text-decoration: none;\r\n  }\r\n.sub-Menu[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 18px; \r\n    color: white; \r\n  }\r\n.sub-Menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: gold;\r\n    text-decoration: none;\r\n  }\r\n.main-Nav[_ngcontent-%COMP%]{\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 30px;\r\n  }\r\n.facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 10px; \r\n    margin-right: 5px;\r\n    margin-top: -10px;\r\n  }\r\n.phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.phone-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: deeppink; \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.instegram-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: rgb(177, 15, 101); \r\n  }\r\n.whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.whatsapp-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: red; \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.envelope-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkred; \r\n  }\r\n\r\n.facebook-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 580px; \r\n    margin-right: 5px;\r\n    margin-top: -30px;\r\n  }\r\n.phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.phone-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.whatsapp-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: red; \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.envelope-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkred; \r\n  }\r\n.mini-Style-Header[_ngcontent-%COMP%]{\r\n    margin-top: -30px;\r\n    height: 99px;\r\n    margin-bottom: -15px;\r\n    margin-left: -46px;\r\n    text-align: right;\r\n    background-color: black;\r\n  }\r\n.mini-Style-Body[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: black;\r\n    margin-top: -15px;\r\n    margin-bottom: -30px;\r\n    height: 85px;\r\n    padding-top: 10px;\r\n    margin-left: 0px;\r\n    width: 110%;\r\n  }\r\n.navButton[_ngcontent-%COMP%]{\r\n    color: white;\r\n    height: 84px;\r\n    \r\n    background-color: black;\r\n    margin-top: -16px;\r\n    margin-bottom: -16px;\r\n    z-index: 1000;\r\n  }\r\n.footer-Style[_ngcontent-%COMP%]{\r\n    height: 300px; \r\n    background-color: rgb(32, 30, 53); \r\n    text-align: center; \r\n    padding-top: 120px; \r\n    color: white; width: 100; \r\n    margin-right: 0px;\r\n  }\r\n.footer-Logo[_ngcontent-%COMP%]{\r\n      height: 100px; \r\n      background-color: rgb(32, 30, 53); \r\n      text-align: center; \r\n  }\r\n.arrow-Style-Font[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: white;\r\n  }\r\n.arrow-Style[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: white;\r\n    margin-right: 0px;\r\n  }\r\n.navbar-Style[_ngcontent-%COMP%]{\r\n    z-index: 1000;\r\n    top: 0;\r\n    position: fixed;\r\n    background-color: white;\r\n    border-bottom: 1px solid black;\r\n    right: 0;\r\n    left: 0;\r\n  }\r\n.myMoto[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n  }\r\n.menu-Style[_ngcontent-%COMP%]{\r\n    background-color: black; \r\n    color: white;\r\n    right: 0 !important;\r\n  }\r\n.menu-Item-Up[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  }\r\n.menu-Item-Nav[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n  }\r\n.menu-Item-Nav[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    text-decoration: none;\r\n    color: gold;\r\n  }\r\n@media only screen and (max-width: 1560px) {\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1500px) {\r\n  .text-Style-Header[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 28%;\r\n    max-width: 28%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -4px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n.text-Style-Header[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\r\n.mini-Style-Header[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 31% ;\r\n  max-width: 31% ;\r\n}\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 36%;\r\n    max-width: 36%;\r\n  }\r\n  .text-Style-Header[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    padding-right: 50px;\r\n }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n  .moto[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 42%;\r\n    max-width: 42%;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n}\r\n.facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n  margin-left: 410px;\r\n}\r\n.navButton[_ngcontent-%COMP%] {\r\n  margin-right: -4px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 52%;\r\n    max-width: 52%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -5px;\r\n}\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 310px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%] {\r\n    margin-right: -7px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 45%;\r\n    max-width: 45%;\r\n    \r\n  }\r\n  .mini-Style-Body[_ngcontent-%COMP%]{\r\n    height: 64px;\r\n    padding-right: 5px;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n    \r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-right: -5px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -14px;\r\n  }\r\n  \r\n  .arrow-Style[_ngcontent-%COMP%]{\r\n    margin-right: 40px !important;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 210px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media only screen and (max-width: 650px){\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-right: -5px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 125px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n    margin-right: -10px;\r\n    margin-bottom: -14px;\r\n  }\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n}\r\n.mini-Style-Header[_ngcontent-%COMP%] {\r\n  height: 83px;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%]{\r\n  margin-top: 65px;\r\n  height: 510px;\r\n  width: 250px;\r\n}\r\n.main-Nav[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n}\r\n.menu-Item-Up[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n}\r\n.menu-Item[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n}\r\n.top-Nav[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n}\r\n}\r\n@media only screen and (max-width: 610px){\r\n  .displayNone[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .navbar-Style[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    height: 85px;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 15px;\r\n    margin-right: 75px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 125px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .navbar-nav[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n            flex-direction: row !important;\r\n  }\r\n}\r\n@media only screen and (max-width: 574px) {\r\n  \r\n  .facebook-Style[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n    margin-top: -14px;\r\n}\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 40px;\r\n    margin-top: -14px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -14px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -14px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -14px;\r\n  }\r\n  .navbar-Style[_ngcontent-%COMP%] {\r\n    height: 61px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%] {\r\n    height: 65px;\r\n    margin-right: -2px;\r\n    margin-bottom: -11px;\r\n}\r\n.mini-Style-Body[_ngcontent-%COMP%] {\r\n  height: 61px;\r\n  padding-right: 5px;\r\n  padding-top: 6px;\r\n}\r\n.mini-Style-Header[_ngcontent-%COMP%] {\r\n  height: 75px;\r\n  margin-top: -69px;\r\n}\r\n.facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n  margin-left: 100px;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%]{\r\n  margin-top: 59px;\r\n}\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .arrow-Style-Font[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 120px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n}\r\n@media only screen and (max-width: 450px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n    margin-left: 15px;\r\n    margin-right: 65px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px;  \r\n    margin-left: 15px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 15px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 15px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 15px;\r\n    margin-top: -10px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 80px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 150px; \r\n    height: 50px;\r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    margin-right: 30px;\r\n  } \r\n  .example-sidenav[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n   \r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 85px;\r\n    font-size: 25px; \r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 25px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 25px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 25px; \r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    margin-right: -30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 130px; \r\n    height: 45px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    height: 78px;\r\n  }\r\n  .mini-Style-Body[_ngcontent-%COMP%] {\r\n    height: 61px;\r\n    padding-right: 5px;\r\n    padding-top: 5px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%] {\r\n    height: 69px;\r\n    margin-bottom: -12px;\r\n    margin-right: 3px;\r\n}\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n    margin-right: 25px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .menu-Style[_ngcontent-%COMP%]{\r\n    width: 370px;\r\n    border-bottom-left-radius: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  \r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    margin-left: 15px;\r\n    margin-right: 5px;\r\n    margin-top: -8px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 15px;\r\n    margin-top: -8px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -8px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -8px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -8px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YscUdBQXFHO0FBQ3ZHO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QiwyR0FBMkc7SUFDM0csa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBZTtZQUFmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLCtCQUErQjtFQUNqQztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDO0FBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLHFHQUFxRztJQUNyRyxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUVBLDJCQUEyQjtBQUUzQjtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZLEVBQUUsVUFBVTtJQUN4QixpQkFBaUI7RUFDbkI7QUFFQTtNQUNJLGFBQWE7TUFDYixpQ0FBaUM7TUFDakMsa0JBQWtCO0VBQ3RCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLE1BQU07SUFDTixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsT0FBTztFQUNUO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLHFHQUFxRztFQUN2RztBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztFQUNiO0FBQ0Y7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLG1CQUFhO1lBQWIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0FBR0E7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtBQUVBO0VBQ0U7SUFDRSxtQkFBYTtZQUFiLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxtQkFBYTtZQUFiLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFLG1CQUFhO1lBQWIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtBQUN0QjtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7QUFDdEI7QUFDQTtBQUVBLHFEQUFxRDtBQUNyRDtFQUNFO0lBQ0UsbUJBQWE7WUFBYixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7O0tBRUc7RUFDSDtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0QjtBQUNGO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBYztZQUFkLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7Ozs7S0FJRztFQUNIO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtJQUVFLG9CQUFhO0lBQWIsYUFBYTtJQUViLHlDQUE4QjtJQUE5Qix3Q0FBOEI7WUFBOUIsOEJBQThCO0VBQ2hDO0FBQ0Y7QUFFQTtFQUNFOzs7O0tBSUc7RUFDSDtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQkc7RUFDSDtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztBQUNGO0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlCRztFQUNIO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAwIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwIDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubG9nb1N0eWxle1xyXG4gIHdpZHRoOiAyNTBweDsgXHJcbiAgaGVpZ2h0OiA2OXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmRpc3BsYXlOb25le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi50b3AtTmF2e1xyXG4gIGZvbnQtc2l6ZTogMjBweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRleHQtU3R5bGUtSGVhZGVye1xyXG4gICAgLypib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrOyovXHJcbiAgICBoZWlnaHQ6IDY5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEwcHg7Ki9cclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjZweDtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGhlaWdodDogNTQ1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICAubWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsqL1xyXG4gIH1cclxuICAubWVudSA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDQzLCAyMjYpO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5zdWItTWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgfVxyXG4gIC5zdWItTWVudSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZ29sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLm1haW4tTmF2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgY29sb3I6IHJnYigxMywgMTc5LCAxMyk7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47IFxyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiBkZWVwcGluazsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxlIDpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMTc3LCAxNSwgMTAxKTsgXHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmdiKDEzLCAxNzksIDEzKTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGUgOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjsgXHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmVkOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya3JlZDsgXHJcbiAgfVxyXG5cclxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDU4MHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgY29sb3I6IHJnYigxMywgMTc5LCAxMyk7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya2dyZWVuOyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmdiKDEzLCAxNzksIDEzKTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGUtQm90dG9tIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiByZWQ7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxlLUJvdHRvbSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya3JlZDsgXHJcbiAgfVxyXG5cclxuICAubWluaS1TdHlsZS1IZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIGhlaWdodDogOTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00NnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5taW5pLVN0eWxlLUJvZHl7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gIH1cclxuXHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogODRweDtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogLTE2cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1TdHlsZXtcclxuICAgIGhlaWdodDogMzAwcHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMCwgNTMpOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXRvcDogMTIwcHg7IFxyXG4gICAgY29sb3I6IHdoaXRlOyB3aWR0aDogMTAwOyBcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1Mb2dve1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMCwgNTMpOyBcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9XHJcbiAgLmFycm93LVN0eWxlLUZvbnR7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYXJyb3ctU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm5hdmJhci1TdHlsZXtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLm15TW90b3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgLm1lbnUtU3R5bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWVudS1JdGVtLVVwe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5tZW51LUl0ZW0tTmF2e1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubWVudS1JdGVtLU5hdiA6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogZ29sZDtcclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KSB7XHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gIC50ZXh0LVN0eWxlLUhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICB9XHJcbiAgLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gICAgZmxleDogMCAwIDI4JTtcclxuICAgIG1heC13aWR0aDogMjglO1xyXG4gIH1cclxuICAubmF2QnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbi50ZXh0LVN0eWxlLUhlYWRlcntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gIGZsZXg6IDAgMCAzMSUgO1xyXG4gIG1heC13aWR0aDogMzElIDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCAzNiU7XHJcbiAgICBtYXgtd2lkdGg6IDM2JTtcclxuICB9XHJcbiAgLnRleHQtU3R5bGUtSGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW90b3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCA0MiU7XHJcbiAgICBtYXgtd2lkdGg6IDQyJTtcclxuICB9XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG59XHJcbi5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MTBweDtcclxufVxyXG4ubmF2QnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IC00cHg7XHJcbn1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gICAgZmxleDogMCAwIDUyJTtcclxuICAgIG1heC13aWR0aDogNTIlO1xyXG4gIH1cclxuICAubmF2QnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG59XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzEwcHg7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xyXG59XHJcbn0gXHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCA0NSU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgIC8qaGVpZ2h0OiA5NHB4OyovXHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUJvZHl7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5sb2dvU3R5bGV7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIC8qaGVpZ2h0OiA2M3B4OyovXHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogLTE0cHg7XHJcbiAgfVxyXG4gIC8qIC5mb290ZXItU3R5bGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuICB9ICovXHJcbiAgLmFycm93LVN0eWxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpe1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE0cHg7XHJcbiAgfVxyXG4ubG9nb1N0eWxle1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4ubWluaS1TdHlsZS1IZWFkZXIge1xyXG4gIGhlaWdodDogODNweDtcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2e1xyXG4gIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgaGVpZ2h0OiA1MTBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuLm1haW4tTmF2e1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubWVudS1JdGVtLVVwe1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ubWVudS1JdGVte1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4udG9wLU5hdntcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpe1xyXG4gIC5kaXNwbGF5Tm9uZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXZiYXItU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAvKiAubmF2QnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE3cHg7XHJcbiAgfSAqL1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmluc3RlZ3JhbS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzRweCkge1xyXG4gIC8qIC5taW5pLVN0eWxlLUhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfSAqL1xyXG4gIC5mYWNlYm9vay1TdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICB9XHJcbiAgLm5hdmJhci1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b24ge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTExcHg7XHJcbn1cclxuLm1pbmktU3R5bGUtQm9keSB7XHJcbiAgaGVpZ2h0OiA2MXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcbi5taW5pLVN0eWxlLUhlYWRlciB7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIG1hcmdpbi10b3A6IC02OXB4O1xyXG59XHJcbi5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2e1xyXG4gIG1hcmdpbi10b3A6IDU5cHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5hcnJvdy1TdHlsZS1Gb250e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAzM3B4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogMzNweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDMzcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAzM3B4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMzcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMzcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzM3B4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzNweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIH1cclxuICAubmF2QnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIHdpZHRoOiAxNTBweDsgXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9IFxyXG4gIC5leGFtcGxlLXNpZGVuYXZ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLyogLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9ICovIFxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7IFxyXG4gIH1cclxuICAucGhvbmUtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAyNXB4OyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDsgXHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDI1cHg7IFxyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIHdpZHRoOiAxMzBweDsgXHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGhlaWdodDogNzhweDtcclxuICB9XHJcbiAgLm1pbmktU3R5bGUtQm9keSB7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICAubmF2QnV0dG9uIHtcclxuICAgIGhlaWdodDogNjlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5teU1vdG97XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZS1Cb3R0b217XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxlLUJvdHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXHJcbiAgfVxyXG4gIC5tZW51LVN0eWxle1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC8qIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9ICovXHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDsgXHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b217XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4OyBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufSJdfQ== */"]
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _private_private_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./private/private.component */
    "./src/app/private/private.component.ts");
    /* harmony import */


    var _business_business_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./business/business.component */
    "./src/app/business/business.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./businessExtra/business-extra/business-extra.component */
    "./src/app/businessExtra/business-extra/business-extra.component.ts");
    /* harmony import */


    var _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./privateExtra/private-extra/private-extra.component */
    "./src/app/privateExtra/private-extra/private-extra.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _private_private_component__WEBPACK_IMPORTED_MODULE_4__["PrivateComponent"], _business_business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"], _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_11__["BusinessExtraComponent"], _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_12__["PrivateExtraComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _private_private_component__WEBPACK_IMPORTED_MODULE_4__["PrivateComponent"], _business_business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"], _businessExtra_business_extra_business_extra_component__WEBPACK_IMPORTED_MODULE_11__["BusinessExtraComponent"], _privateExtra_private_extra_private_extra_component__WEBPACK_IMPORTED_MODULE_12__["PrivateExtraComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/business/business.component.ts":
  /*!************************************************!*\
    !*** ./src/app/business/business.component.ts ***!
    \************************************************/

  /*! exports provided: BusinessComponent */

  /***/
  function srcAppBusinessBusinessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessComponent", function () {
      return BusinessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function BusinessComponent_h5_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h6_389_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h6_397_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h6_406_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h6_418_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h5_426_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_a_427_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "is-valid": a0,
        "is-invalid": a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "whiteColor": a0,
        "redColor": a1
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "btn btn-success": a0
      };
    };

    var BusinessComponent =
    /*#__PURE__*/
    function () {
      function BusinessComponent() {
        _classCallCheck(this, BusinessComponent);

        this.showFiller = false;
        this.events = [];
        this.phoneNumber = "";
        this.reason = "";
        this.sendMAil = 0;
        this.clean = 0;
      }

      _createClass(BusinessComponent, [{
        key: "sendMeMail",
        value: function sendMeMail() {
          this.sendMAil = 1;
        }
      }, {
        key: "expendClean",
        value: function expendClean() {
          this.clean = 1 - this.clean;
          return '#clean';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BusinessComponent;
    }();

    BusinessComponent.ɵfac = function BusinessComponent_Factory(t) {
      return new (t || BusinessComponent)();
    };

    BusinessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BusinessComponent,
      selectors: [["app-business"]],
      decls: 445,
      vars: 49,
      consts: [[1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], ["id", "about", 1, "aboutS", 2, "width", "100%"], ["src", "../../assets/about4.jpg", 1, "about-Style"], [1, "showAbout"], [1, "container-fluid", "top-Text"], [1, "about-Text"], [1, "about-Sub-Text"], ["dir", "rtl"], ["id", "businessGallery", 2, "margin-bottom", "50px", "text-align", "center"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-briefcase", 2, "color", "brown"], ["id", "gallery", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "row", "carousel", "slide", "carousel-Style"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], ["data-target", "#gallery", "data-slide-to", "4"], ["data-target", "#gallery", "data-slide-to", "5"], ["data-target", "#gallery", "data-slide-to", "6"], ["data-target", "#gallery", "data-slide-to", "7"], ["data-target", "#gallery", "data-slide-to", "8"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/gallery/Business/work1.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], [1, "carousel-item"], ["src", "../../assets/gallery/Business/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work3.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work4.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work5.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work6.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work7.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work8.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Business/work9.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], ["id", "cards", 1, "cards-Static"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "grandient"], [1, "card-title", 2, "text-align", "center"], ["data-toggle", "collapse", "href", "#clean", "role", "button", "aria-expanded", "false", "aria-controls", "clean", 2, "text-decoration", "none"], ["style", "color: white; margin-left: 10px;", 4, "ngIf"], ["id", "clean", 1, "collapse"], [1, "card-body"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#tzah", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [2, "color", "white", "margin-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], ["id", "tzah", 1, "collapse"], [1, "card", "card-Style"], ["src", "../../assets/gallery/Nahshon12.png", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#nahshon", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "nahshon", 1, "collapse"], [1, "card-group", "margin-top-10", 2, "margin-top", "30px"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#package", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "package", 1, "collapse"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#split", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "split", 1, "collapse"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#smoke", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "smoke", 1, "collapse"], [1, "card-group", 2, "margin-bottom", "100px", "margin-top", "30px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#vrf", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "vrf", 1, "collapse"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#water", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "water", 1, "collapse"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#center", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "center", 1, "collapse"], ["id", "movingCards", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "card-Carousel"], ["data-target", "#movingCards", "data-slide-to", "0", 1, "active"], ["data-target", "#movingCards", "data-slide-to", "1"], ["data-target", "#movingCards", "data-slide-to", "2"], ["data-target", "#movingCards", "data-slide-to", "3"], ["data-target", "#movingCards", "data-slide-to", "4"], ["data-target", "#movingCards", "data-slide-to", "5"], ["data-target", "#movingCards", "data-slide-to", "6"], ["data-target", "#movingCards", "data-slide-to", "7"], ["data-target", "#movingCards", "data-slide-to", "8"], [1, "carousel-inner", "movingCards-Inner"], [1, "card"], [1, "card-body", "grandient"], ["href", "#movingCards", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#movingCards", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "tips", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [2, "text-align", "center", "color", "white", "margin-top", "20px"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", 2, "color", "white"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"], ["class", "btn btn-secondary", "style", "float: right; box-shadow: 0px -4px 5px 1px black; cursor: no-drop;", "type", "submit", 4, "ngIf"], [2, "color", "white"], [1, "container-fluid"], ["src", "../../assets/gallery/LogoBrand.png", "alt", "...", 1, "logoBrand"], ["src", "../../assets/gallery/LogoBrand2.png", "alt", "...", 1, "logoBrand2"], [1, "logo-Text"], [1, "logo-Sub-Text"], ["type", "submit", 1, "btn", "btn-secondary", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", "cursor", "no-drop"]],
      template: function BusinessComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, BusinessComponent_h5_85_Template, 3, 0, "h5", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Water source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "ol", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "li", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "li", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "li", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "li", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "li", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "li", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Water source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "a", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "ol", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "li", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "li", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "li", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "li", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "img", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "a", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "a", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "i", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "img", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "h3", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "i", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "b", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "input", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_387_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](389, BusinessComponent_h6_389_Template, 2, 0, "h6", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "b", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "input", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_395_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](397, BusinessComponent_h6_397_Template, 2, 0, "h6", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "b", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "input", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_404_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](406, BusinessComponent_h6_406_Template, 2, 0, "h6", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "input", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_410_listener($event) {
            return ctx.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "b", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "input", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_416_listener($event) {
            return ctx.cellNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](418, BusinessComponent_h6_418_Template, 2, 0, "h6", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "textarea", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_textarea_ngModelChange_423_listener($event) {
            return ctx.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "a", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](426, BusinessComponent_h5_426_Template, 2, 0, "h5", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](427, BusinessComponent_a_427_Template, 3, 0, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, " \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA : 053-3504818 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, " \u05E0\u05D9\u05D9\u05D7 : 077-9180254 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, " 053-4322804 : \u05D0\u05D1\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, " 053-3505931 : \u05D0\u05D1\u05D9\u05D1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, " alaska19000@gmail.com : \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "img", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "img", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "h6", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DC\u05E8\u05D1\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05D4\u05E0\"\u05DC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "h6", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "( \u05D9\u05E9 \u05DC\u05D4\u05D3\u05D2\u05D9\u05E9 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05E6\u05D2\u05D9\u05DD \u05D7\u05D1\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E6\u05D5\u05E8\u05D4 \u05E9\u05D4\u05D9\u05D0 )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clean == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c1, ctx.lastName, !ctx.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c1, ctx.firstName, !ctx.firstName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c1, ctx.city, !ctx.city));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](41, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c1, ctx.cellNumber, !ctx.cellNumber));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName || !ctx.lastName || !ctx.city || !ctx.cellNumber);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n  background-size: contain; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  height: 750px !important; \r\n  width: 100% !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n.about-Text[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\r\n.about-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  text-align: right;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  display: none;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: none;\r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-size: 16px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: 800px; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.aboutS1[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-right: -20px;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n.cards-Static[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-Carousel[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-bottom: 5px;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  padding-left: 20px; \r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  padding-right: 31px;\r\n  padding-left: 31px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important;  \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%]{\r\n  height: 550px !important;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n   height: 700px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n.about-Style[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n }\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 580px;\r\n   }\r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 500px;\r\n}\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 520px;\r\n   }\r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 550px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 900px;\r\n  \r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 750px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .about-Style[_ngcontent-%COMP%] {\r\n    margin-top: -29px;\r\n  }\r\n  .cards-Static[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n   .card-Carousel[_ngcontent-%COMP%]{\r\n    display: block;\r\n    \r\n  } \r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  height: 700px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  display: none;\r\n }\r\n .logoBrand2[_ngcontent-%COMP%]{\r\n   display: block;\r\n }\r\n}\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 480px;\r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 430px;\r\n   }\r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  \r\n  padding-right: 45px;\r\n  padding-left: 45px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 400px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}\r\n\r\n\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MvYnVzaW5lc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7Ozs7OztHQU1HO0FBQ0g7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNENBQXVEO0FBQ3pEO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtHQUNkLFlBQVk7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUdBQXFHO0FBQ3ZHO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFHQUFxRztBQUN2RztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7Ozs7O0dBS0c7QUFDSDtFQUNFLHVGQUFnRTtFQUFoRSxnRUFBZ0U7RUFDaEUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0Q0FBd0Q7QUFDMUQ7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7O0FBRUE7QUFHQTtFQUNFO0dBQ0MsYUFBYTtFQUNkO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7O0FBRUE7RUFDRSxhQUFhO0NBQ2Q7Q0FDQTtFQUNDLGFBQWE7QUFDZjtBQUNBO0FBRUEsbURBQW1EO0FBQ25EO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7R0FDQTtJQUNDLGFBQWE7R0FDZDtHQUNBO0lBQ0MsYUFBYTtFQUNmO0VBQ0E7SUFDRSx3QkFBd0I7QUFDNUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0FBRUE7RUFDRTtJQUNFLGFBQWE7R0FDZDtHQUNBO0lBQ0Msd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFFRjtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2I7MkJBQ3lCO0FBQzNCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZDt3QkFDc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTs7O0dBR0c7QUFDSDs7O0dBR0c7QUFDSDs7O0dBR0c7QUFDSDtBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7RUFDZjtHQUNDO0lBQ0MsY0FBYztJQUNkOzBCQUNzQjtFQUN4QjtFQUNBO0lBQ0UsYUFBYTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7Q0FDZDtDQUNBO0dBQ0UsY0FBYztDQUNoQjtBQUNEO0FBRUEsb0VBQW9FO0FBQ3BFO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0dBQ2xCO0dBQ0E7S0FDRSxjQUFjO0dBQ2hCO0dBQ0E7SUFDQyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFFQTtFQUNFO0lBQ0UsYUFBYTtHQUNkO0dBQ0E7S0FDRSxlQUFlO0dBQ2pCO0dBQ0E7SUFDQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtLQUNkLFlBQVk7RUFDZjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7R0FFRztBQUNIOztJQUVJO0FBQ0o7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0FBRUE7RUFDRTtJQUNFLGFBQWE7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEOzs7OztHQUtHO0FBQ0g7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0FBQ0E7O09BRU87QUFDUDs7Ozs7R0FLRztBQUNIO0FBRUE7RUFDRTtNQUNJLGFBQWE7TUFDYixnQkFBZ0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7TUFDSSxZQUFZO01BQ1osZ0JBQWdCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzcy9idXNpbmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4ucGljLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogNzUwcHggIWltcG9ydGFudDsgXHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmFib3V0LVRleHR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmFib3V0LVN1Yi1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udG9wLVRleHR7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3dBYm91dHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIC50aXAtU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IFxyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59ICovXHJcbi5sb2dvQnJhbmR7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubG9nb0JyYW5kMntcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvZ28tVGV4dHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmlubmVyLVRpcHtcclxudGV4dC1hbGlnbjogY2VudGVyOyBcclxudGV4dC1hbGlnbjogY2VudGVyOyBcclxuaGVpZ2h0OiA3MDBweDsgXHJcbnBhZGRpbmctdG9wOiAxMiU7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4udGlwLVN0eWxle1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcDMuanBnKTtcclxufVxyXG4uYWJvdXQtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4OyBcclxuICBoZWlnaHQ6IDgwMHB4OyBcclxuICAvKiAvL2JhY2tncm91bmQtY29sb3I6ICMyYzVhYzM7ICAqL1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4ucGljMXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwMHB4OyAgXHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcbi5hYm91dFMxe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmltZyA6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZHMtU3RhdGlje1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jYXJkLUNhcm91c2Vse1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbnB1dCA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuLmZvcm0tU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDMlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50aXAtSW1hZ2V7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLndoaXRlQ29sb3J7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZWRDb2xvcntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5leHBlcnQtTW90by1Cb2R5e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgcGFkZGluZy1yaWdodDogMjBweDsgXHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyBcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmNhcm91c2VsLVN0eWxle1xyXG4gIG1hcmdpbi10b3AgOi0yNHB4OyBcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5jaGVjay1DaXJjbGUtTW90b3tcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4udGV4dC1SaWdodHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWJvdXQtSGVhZGVye1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICBwYWRkaW5nLXJpZ2h0OiAyNSU7XHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmFib3V0LUJvZHl7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1JTsgXHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7IFxyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5sb2dvU3R5bGV7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmRpc3BsYXlOb25le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogLmJvZHlUZXh0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib2R5VGV4dCA6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG59ICovXHJcbi5ncmFuZGllbnR7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJmMzQ1MyAwJSwgIzRjNTU4YiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmltZzJ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvL2JhY2tncm91bmQtdGlwMy5qcGcpO1xyXG59XHJcbi5waWMtQUN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLkhlYWRlci1Gb3JtLVN0eWxle1xyXG4gIGhlaWdodDogNjUwcHg7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjliYWM7IFxyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMxcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMXB4O1xyXG59XHJcbi5jYXJkLVN0eWxle1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7ICBcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLm1hcmdpbi1Ub3AtMTB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLm1vdmluZ0NhcmRzLUlubmVye1xyXG4gIGhlaWdodDogNTUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTYwcHgpIHtcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgaGVpZ2h0OiA3MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgLmlubmVyLVRpcHtcclxuICAgIGhlaWdodDogNTU1cHg7IFxyXG4gIH1cclxuICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICB9XHJcbiAgLmNhcmQtYm9keXtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuLmFib3V0LVN0eWxle1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiB9XHJcbiAuaW5uZXItVGlwe1xyXG4gIGhlaWdodDogNTUwcHg7IFxyXG59XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNTgwcHg7XHJcbiAgIH1cclxuICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgIH1cclxuICAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgfVxyXG4gIC5waWMtU3R5bGUge1xyXG4gICAgaGVpZ2h0OiA0NzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG59IFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbiAgIH1cclxuICAgLmlubmVyLVRpcHtcclxuICAgIGhlaWdodDogMzcwcHggIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICB9XHJcblxyXG59XHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbi5waWMtQUN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29sLW1kLTh7XHJcbiAgZmxleDogMCAwIDEwMC4wNjY2NjclO1xyXG4gIG1heC13aWR0aDogMTAwLjA2NjY2NyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLkhlYWRlci1Gb3JtLVN0eWxle1xyXG4gIGhlaWdodDogOTAwcHg7XHJcbiAgLyogbWFyZ2luLXJpZ2h0OiAtMjJweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmlubmVyLVRpcHtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi50aXAtSW1hZ2Uge1xyXG4gIGhlaWdodDogMTU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiA3NTBweDtcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8qIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDsgKi9cclxufVxyXG4ubG9nby1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubG9nby1TdWItVGV4dHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLyogLmNhcm91c2VsLVN0eWxlIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuLyogLmNhcmRzLVN0YXRpYyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufSAqL1xyXG4vKiAudGlwLVN0eWxlIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5hYm91dC1TdHlsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjlweDtcclxuICB9XHJcbiAgLmNhcmRzLVN0YXRpY3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICAuY2FyZC1DYXJvdXNlbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTIycHg7ICovXHJcbiAgfSBcclxuICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4ubW92aW5nQ2FyZHMtSW5uZXIge1xyXG4gIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcbi5sb2dvQnJhbmR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5sb2dvQnJhbmQye1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIzcHg7XHJcbiAgIH1cclxuICAgLmRpc3BsYXlOb25le1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbiAgIC5sb2dvU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnRpcC1JbWFnZXtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NHB4KXtcclxuLmNhcmQtU3R5bGV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLm1hcmdpbi1Ub3AtMTB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA0MzBweDtcclxuICAgfVxyXG4gICAuZXhwZXJ0LU1vdG8tQm9keXtcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIH1cclxuICAgLmV4cGVydC1Nb3RvLUhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgLmNoZWNrLUNpcmNsZS1Nb3Rve1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaW5uZXItVGlwe1xyXG4gIGhlaWdodDogMzE1cHggIWltcG9ydGFudDsgXHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3AtVGV4dHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc2hvd0Fib3V0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi8qIC5jYXJke1xyXG4gIGhlaWdodDogMHB4O1xyXG59ICovXHJcbi8qIC5tb3ZpbmdDYXJkcyB7XHJcbiAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG4gfSAqL1xyXG4uY2FyZC1ib2R5e1xyXG4gIC8qIGhlaWdodDogNDAwcHg7ICovXHJcbiAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG59XHJcbi5hYm91dC1TdHlsZXtcclxuICBtYXJnaW4tdG9wOiAtMjdweDtcclxuIH1cclxuLyogLmNhcm91c2VsIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59XHJcbi5jYXJvdXNlbC1TdHlsZXtcclxubWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufSAqL1xyXG4ucGljLVN0eWxlIHtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuaGVpZ2h0OiAxNzBweDtcclxucGFkZGluZy10b3A6IDc0cHg7XHJcbnBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4vKiAuYWJvdXRTe1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gICAgICovXHJcbi8qIC5tb3ZpbmdDYXJkcy1Jbm5lciB7XHJcbiAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbn0gKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-business',
          templateUrl: './business.component.html',
          styleUrls: ['./business.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/businessExtra/business-extra/business-extra.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/businessExtra/business-extra/business-extra.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BusinessExtraComponent */

  /***/
  function srcAppBusinessExtraBusinessExtraBusinessExtraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusinessExtraComponent", function () {
      return BusinessExtraComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function BusinessExtraComponent_h5_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessExtraComponent_h6_386_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessExtraComponent_h6_394_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessExtraComponent_h6_403_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessExtraComponent_h6_415_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessExtraComponent_h5_423_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessExtraComponent_a_424_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "is-valid": a0,
        "is-invalid": a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "whiteColor": a0,
        "redColor": a1
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "btn btn-success": a0
      };
    };

    var BusinessExtraComponent =
    /*#__PURE__*/
    function () {
      function BusinessExtraComponent() {
        _classCallCheck(this, BusinessExtraComponent);

        this.showFiller = false;
        this.events = [];
        this.phoneNumber = "";
        this.reason = "";
        this.sendMAil = 0;
        this.clean = 0;
      }

      _createClass(BusinessExtraComponent, [{
        key: "sendMeMail",
        value: function sendMeMail() {
          this.sendMAil = 1;
        }
      }, {
        key: "expendClean",
        value: function expendClean() {
          this.clean = 1 - this.clean;
          return '#clean';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BusinessExtraComponent;
    }();

    BusinessExtraComponent.ɵfac = function BusinessExtraComponent_Factory(t) {
      return new (t || BusinessExtraComponent)();
    };

    BusinessExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BusinessExtraComponent,
      selectors: [["app-business-extra"]],
      decls: 442,
      vars: 49,
      consts: [["id", "about", 1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "aboutS", 2, "width", "100%"], ["src", "../../../assets/gallery/aboutBusiness1.jpg", 1, "about-Style"], [1, "showAbout"], [1, "container-fluid", "top-Text"], [1, "about-Text"], [1, "about-Sub-Text"], ["dir", "rtl"], ["id", "privateGallery", 2, "margin-bottom", "50px", "text-align", "center"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-briefcase", 2, "color", "brown"], ["id", "gallery", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "row", "carousel", "slide", "carousel-Style"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], ["data-target", "#gallery", "data-slide-to", "4"], ["data-target", "#gallery", "data-slide-to", "5"], ["data-target", "#gallery", "data-slide-to", "6"], ["data-target", "#gallery", "data-slide-to", "7"], ["data-target", "#gallery", "data-slide-to", "8"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/gallery/Business/work1.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], [1, "carousel-item"], ["src", "../../../assets/gallery/Business/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work3.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work4.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work5.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work6.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work7.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work8.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../../assets/gallery/Business/work9.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], ["id", "cards", 1, "cards-Static"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px"], [1, "img"], ["src", "../../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "grandient"], [1, "card-title", 2, "text-align", "center"], ["data-toggle", "collapse", "href", "#clean", "role", "button", "aria-expanded", "false", "aria-controls", "clean", 2, "text-decoration", "none"], ["style", "color: white; margin-left: 10px;", 4, "ngIf"], ["id", "clean", 1, "collapse"], [1, "card-body"], [1, "card-text", "text-Right"], ["src", "../../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#tzah", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [2, "color", "white", "margin-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], ["id", "tzah", 1, "collapse"], [1, "card", "card-Style"], ["src", "../../../assets/gallery/Nahshon12.png", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#nahshon", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "nahshon", 1, "collapse"], [1, "card-group", "margin-top-10", 2, "margin-top", "30px"], ["src", "../../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#package", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "package", 1, "collapse"], ["src", "../../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#split", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "split", 1, "collapse"], ["src", "../../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#smoke", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "smoke", 1, "collapse"], [1, "card-group", 2, "margin-bottom", "100px", "margin-top", "30px"], ["src", "../../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#vrf", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "vrf", 1, "collapse"], ["src", "../../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#water", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "water", 1, "collapse"], ["src", "../../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#center", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "center", 1, "collapse"], ["id", "movingCards", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "card-Carousel"], ["data-target", "#movingCards", "data-slide-to", "0", 1, "active"], ["data-target", "#movingCards", "data-slide-to", "1"], ["data-target", "#movingCards", "data-slide-to", "2"], ["data-target", "#movingCards", "data-slide-to", "3"], ["data-target", "#movingCards", "data-slide-to", "4"], ["data-target", "#movingCards", "data-slide-to", "5"], ["data-target", "#movingCards", "data-slide-to", "6"], ["data-target", "#movingCards", "data-slide-to", "7"], ["data-target", "#movingCards", "data-slide-to", "8"], [1, "carousel-inner", "movingCards-Inner"], [1, "card"], [1, "card-body", "grandient"], ["href", "#movingCards", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#movingCards", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "tips", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [2, "text-align", "center", "color", "white", "margin-top", "20px"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", 2, "color", "white"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"], ["class", "btn btn-secondary", "style", "float: right; box-shadow: 0px -4px 5px 1px black; cursor: no-drop;", "type", "submit", 4, "ngIf"], [2, "color", "white"], [1, "container-fluid"], ["src", "../../assets/gallery/LogoBrand.png", "alt", "...", 1, "logoBrand"], ["src", "../../assets/gallery/LogoBrand2.png", "alt", "...", 1, "logoBrand2"], [1, "logo-Text"], [1, "logo-Sub-Text"], ["type", "submit", 1, "btn", "btn-secondary", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", "cursor", "no-drop"]],
      template: function BusinessExtraComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, BusinessExtraComponent_h5_82_Template, 3, 0, "h5", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Water source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h5", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "ol", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "li", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "li", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "li", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "li", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "li", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "li", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "li", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "li", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Water source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "h5", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "a", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "ol", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "li", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "li", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "li", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "li", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "li", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "img", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "img", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "a", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "a", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "i", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "img", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "h3", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "i", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "b", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "input", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_384_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](386, BusinessExtraComponent_h6_386_Template, 2, 0, "h6", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "b", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "input", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_392_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](394, BusinessExtraComponent_h6_394_Template, 2, 0, "h6", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "b", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "input", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_401_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](403, BusinessExtraComponent_h6_403_Template, 2, 0, "h6", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "input", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_407_listener($event) {
            return ctx.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "b", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "input", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_input_ngModelChange_413_listener($event) {
            return ctx.cellNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](415, BusinessExtraComponent_h6_415_Template, 2, 0, "h6", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "h5", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "textarea", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessExtraComponent_Template_textarea_ngModelChange_420_listener($event) {
            return ctx.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "a", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](423, BusinessExtraComponent_h5_423_Template, 2, 0, "h5", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](424, BusinessExtraComponent_a_424_Template, 3, 0, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, " \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA : 053-3504818 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, " \u05E0\u05D9\u05D9\u05D7 : 077-9180254 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, " 053-4322804 : \u05D0\u05D1\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, " 053-3505931 : \u05D0\u05D1\u05D9\u05D1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "h6", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, " alaska19000@gmail.com : \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "img", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "img", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "h6", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DC\u05E8\u05D1\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05D4\u05E0\"\u05DC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "h6", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "( \u05D9\u05E9 \u05DC\u05D4\u05D3\u05D2\u05D9\u05E9 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05E6\u05D2\u05D9\u05DD \u05D7\u05D1\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E6\u05D5\u05E8\u05D4 \u05E9\u05D4\u05D9\u05D0 )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clean == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c1, ctx.lastName, !ctx.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c1, ctx.firstName, !ctx.firstName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c1, ctx.city, !ctx.city));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](41, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c1, ctx.cellNumber, !ctx.cellNumber));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName || !ctx.lastName || !ctx.city || !ctx.cellNumber);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n  background-size: contain; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  height: 750px !important; \r\n  width: 100% !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n.about-Text[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\r\n.about-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  text-align: right;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  display: none;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: none;\r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-size: 16px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: 800px; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n.cards-Static[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-Carousel[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-bottom: 5px;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  padding-left: 20px; \r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  padding-right: 31px;\r\n  padding-left: 31px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important;  \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%]{\r\n  height: 550px !important;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n   height: 700px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n.about-Style[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n }\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 580px;\r\n   }\r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 500px;\r\n}\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 520px;\r\n   }\r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 550px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 900px;\r\n  \r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 750px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .about-Style[_ngcontent-%COMP%] {\r\n    margin-top: -29px;\r\n  }\r\n  .cards-Static[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n   .card-Carousel[_ngcontent-%COMP%]{\r\n    display: block;\r\n    \r\n  }\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  height: 700px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  display: none;\r\n }\r\n .logoBrand2[_ngcontent-%COMP%]{\r\n   display: block;\r\n }\r\n}\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 480px;\r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 430px;\r\n   }\r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  \r\n  padding-right: 45px;\r\n  padding-left: 45px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 400px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}\r\n\r\n\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3NFeHRyYS9idXNpbmVzcy1leHRyYS9idXNpbmVzcy1leHRyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7O0dBTUc7QUFDSDtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0Q0FBMEQ7QUFDNUQ7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0dBQ2QsWUFBWTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxR0FBcUc7QUFDdkc7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUdBQXFHO0FBQ3ZHO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7R0FLRztBQUNIO0VBQ0UsdUZBQWdFO0VBQWhFLGdFQUFnRTtFQUNoRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRDQUEwRDtBQUM1RDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTs7QUFFQTtBQUdBO0VBQ0U7R0FDQyxhQUFhO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTs7QUFFQTtFQUNFLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsYUFBYTtBQUNmO0FBQ0E7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFLGFBQWE7R0FDZDtHQUNBO0lBQ0MsYUFBYTtHQUNkO0dBQ0E7SUFDQyxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHdCQUF3QjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7QUFFQTtFQUNFO0lBQ0UsYUFBYTtHQUNkO0dBQ0E7SUFDQyx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVGO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYjsyQkFDeUI7QUFDM0I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkO3dCQUNzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOzs7R0FHRztBQUNIOzs7R0FHRztBQUNIOzs7R0FHRztBQUNIO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0dBQ0M7SUFDQyxjQUFjO0lBQ2Q7MEJBQ3NCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0FBQ2pCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtDQUNkO0NBQ0E7R0FDRSxjQUFjO0NBQ2hCO0FBQ0Q7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7R0FDbEI7R0FDQTtLQUNFLGNBQWM7R0FDaEI7R0FDQTtJQUNDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtBQUVBO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7R0FDQTtLQUNFLGVBQWU7R0FDakI7R0FDQTtJQUNDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0tBQ2QsWUFBWTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBOztHQUVHO0FBQ0g7O0lBRUk7QUFDSjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFFQTtFQUNFO0lBQ0UsYUFBYTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7Ozs7O0dBS0c7QUFDSDtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTs7T0FFTztBQUNQOzs7OztHQUtHO0FBQ0g7QUFFQTtFQUNFO01BQ0ksYUFBYTtNQUNiLGdCQUFnQjtFQUNwQjtBQUNGO0FBRUE7RUFDRTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzRXh0cmEvYnVzaW5lc3MtZXh0cmEvYnVzaW5lc3MtZXh0cmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBpYy1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDc1MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5hYm91dC1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hYm91dC1TdWItVGV4dHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRvcC1UZXh0e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaG93QWJvdXR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiAudGlwLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyBcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSAqL1xyXG4ubG9nb0JyYW5ke1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ29CcmFuZDJ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dvLVRleHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbmhlaWdodDogNzAwcHg7IFxyXG5wYWRkaW5nLXRvcDogMTIlO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnRpcC1TdHlsZXtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC10aXAzLmpwZyk7XHJcbn1cclxuLmFib3V0LVN0eWxle1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNzBweDsgXHJcbiAgaGVpZ2h0OiA4MDBweDsgXHJcbiAgLyogLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMmM1YWMzOyAgKi9cclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbn1cclxuLnBpYzF7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMDBweDsgIFxyXG59XHJcbi5hYm91dFN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmltZyA6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZHMtU3RhdGlje1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jYXJkLUNhcm91c2Vse1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbnB1dCA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuLmZvcm0tU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDMlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50aXAtSW1hZ2V7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLndoaXRlQ29sb3J7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZWRDb2xvcntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5leHBlcnQtTW90by1Cb2R5e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgcGFkZGluZy1yaWdodDogMjBweDsgXHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyBcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmNhcm91c2VsLVN0eWxle1xyXG4gIG1hcmdpbi10b3AgOi0yNHB4OyBcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5jaGVjay1DaXJjbGUtTW90b3tcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4udGV4dC1SaWdodHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYWJvdXQtSGVhZGVye1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICBwYWRkaW5nLXJpZ2h0OiAyNSU7XHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmFib3V0LUJvZHl7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1JTsgXHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7IFxyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5sb2dvU3R5bGV7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmRpc3BsYXlOb25le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogLmJvZHlUZXh0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ib2R5VGV4dCA6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG59ICovXHJcbi5ncmFuZGllbnR7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJmMzQ1MyAwJSwgIzRjNTU4YiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmltZzJ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC10aXAzLmpwZyk7XHJcbn1cclxuLnBpYy1BQ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uSGVhZGVyLUZvcm0tU3R5bGV7XHJcbiAgaGVpZ2h0OiA2NTBweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyOWJhYzsgXHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlOyBcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzFweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMxcHg7XHJcbn1cclxuLmNhcmQtU3R5bGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDsgIFxyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4ubWFyZ2luLVRvcC0xMHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4ubW92aW5nQ2FyZHMtSW5uZXJ7XHJcbiAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NjBweCkge1xyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICBoZWlnaHQ6IDcwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAuaW5uZXItVGlwe1xyXG4gICAgaGVpZ2h0OiA1NTVweDsgXHJcbiAgfVxyXG4gIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4uYWJvdXQtU3R5bGV7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuIH1cclxuIC5pbm5lci1UaXB7XHJcbiAgaGVpZ2h0OiA1NTBweDsgXHJcbn1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA1ODBweDtcclxuICAgfVxyXG4gICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgfVxyXG4gICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICB9XHJcbiAgLnBpYy1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbn0gXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgfVxyXG4gICAuaW5uZXItVGlwe1xyXG4gICAgaGVpZ2h0OiAzNzBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLWJvZHl7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuLnBpYy1BQ3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb2wtbWQtOHtcclxuICBmbGV4OiAwIDAgMTAwLjA2NjY2NyU7XHJcbiAgbWF4LXdpZHRoOiAxMDAuMDY2NjY3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uSGVhZGVyLUZvcm0tU3R5bGV7XHJcbiAgaGVpZ2h0OiA5MDBweDtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IC0yMnB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgKi9cclxufVxyXG4uaW5uZXItVGlwe1xyXG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDsgXHJcbn1cclxuLnRpcC1JbWFnZSB7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBoZWlnaHQ6IDc1MHB4O1xyXG59XHJcbi5hYm91dFN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4OyAqL1xyXG59XHJcbi5sb2dvLVRleHR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5sb2dvLVN1Yi1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4vKiAuY2Fyb3VzZWwtU3R5bGUge1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufSAqL1xyXG4vKiAuY2FyZHMtU3RhdGljIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICovXHJcbi8qIC50aXAtU3R5bGUge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgLmFib3V0LVN0eWxlIHtcclxuICAgIG1hcmdpbi10b3A6IC0yOXB4O1xyXG4gIH1cclxuICAuY2FyZHMtU3RhdGlje1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgIC5jYXJkLUNhcm91c2Vse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjJweDsgKi9cclxuICB9XHJcbiAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuLm1vdmluZ0NhcmRzLUlubmVyIHtcclxuICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG4ubG9nb0JyYW5ke1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiAubG9nb0JyYW5kMntcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yM3B4O1xyXG4gICB9XHJcbiAgIC5kaXNwbGF5Tm9uZXtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG4gICAubG9nb1N0eWxle1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi50aXAtSW1hZ2V7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzRweCl7XHJcbi5jYXJkLVN0eWxle1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5tYXJnaW4tVG9wLTEwe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNDMwcHg7XHJcbiAgIH1cclxuICAgLmV4cGVydC1Nb3RvLUJvZHl7XHJcbiAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICB9XHJcbiAgIC5leHBlcnQtTW90by1IZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5jaGVjay1DaXJjbGUtTW90b3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3AtVGV4dHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uc2hvd0Fib3V0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbiAgaGVpZ2h0OiAzMTVweCAhaW1wb3J0YW50OyBcclxufVxyXG4vKiAuY2FyZHtcclxuICBoZWlnaHQ6IDBweDtcclxufSAqL1xyXG4vKiAubW92aW5nQ2FyZHMge1xyXG4gIGhlaWdodDogNTUwcHggIWltcG9ydGFudDtcclxuIH0gKi9cclxuLmNhcmQtYm9keXtcclxuICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxufVxyXG4uYWJvdXQtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbiB9XHJcbi8qIC5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufVxyXG4uY2Fyb3VzZWwtU3R5bGV7XHJcbm1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxuLnBpYy1TdHlsZSB7XHJcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvU3R5bGV7XHJcbmhlaWdodDogMTcwcHg7XHJcbnBhZGRpbmctdG9wOiA3NHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLyogLmFib3V0U3tcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICAgICAqL1xyXG4vKiAubW92aW5nQ2FyZHMtSW5uZXIge1xyXG4gIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG59ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpe1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessExtraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-business-extra',
          templateUrl: './business-extra.component.html',
          styleUrls: ['./business-extra.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/private/private.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/private/private.component.ts ***!
    \**********************************************/

  /*! exports provided: PrivateComponent */

  /***/
  function srcAppPrivatePrivateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivateComponent", function () {
      return PrivateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PrivateComponent_h5_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h6_374_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h6_382_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h6_391_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h6_403_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h5_411_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_a_412_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "is-valid": a0,
        "is-invalid": a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "whiteColor": a0,
        "redColor": a1
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "btn btn-success": a0
      };
    };

    var PrivateComponent =
    /*#__PURE__*/
    function () {
      function PrivateComponent() {
        _classCallCheck(this, PrivateComponent);

        this.showFiller = false;
        this.events = [];
        this.phoneNumber = "";
        this.reason = "";
        this.sendMAil = 0;
        this.clean = 0;
      }

      _createClass(PrivateComponent, [{
        key: "sendMeMail",
        value: function sendMeMail() {
          this.sendMAil = 1;
        }
      }, {
        key: "expendClean",
        value: function expendClean() {
          this.clean = 1 - this.clean;
          return '#clean';
        }
      }, {
        key: "submit",
        value: function submit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivateComponent;
    }();

    PrivateComponent.ɵfac = function PrivateComponent_Factory(t) {
      return new (t || PrivateComponent)();
    };

    PrivateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivateComponent,
      selectors: [["app-private"]],
      decls: 430,
      vars: 49,
      consts: [["id", "about", 1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "aboutS", 2, "width", "100%"], ["src", "../../assets/about4.jpg", 1, "about-Style"], [1, "showAbout"], [1, "container-fluid", "top-Text"], [1, "about-Text"], [1, "about-Sub-Text"], ["dir", "rtl"], ["id", "privateGallery", 2, "margin-bottom", "50px", "text-align", "center"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-briefcase", 2, "color", "brown"], ["id", "gallery", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "carousel-Style", 2, "width", "100%"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/gallery/Private/work1.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], [1, "carousel-item"], ["src", "../../assets/gallery/Private/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Private/work4a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Private/work5.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], ["id", "cards", 1, "cards-Static"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "grandient"], [1, "card-title", 2, "text-align", "center"], ["data-toggle", "collapse", "href", "#clean", "role", "button", "aria-expanded", "false", "aria-controls", "clean", 2, "text-decoration", "none"], ["style", "color: white; margin-left: 10px;", 4, "ngIf"], ["id", "clean", 1, "collapse"], [1, "card-body"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#tzah", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [2, "color", "white", "margin-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], ["id", "tzah", 1, "collapse"], [1, "card", "card-Style"], ["src", "../../assets/gallery/Nahshon12.png", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#nahshon", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "nahshon", 1, "collapse"], [1, "card-group", "margin-top-10", 2, "margin-top", "30px"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#package", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "package", 1, "collapse"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#split", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "split", 1, "collapse"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#smoke", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "smoke", 1, "collapse"], [1, "card-group", 2, "margin-bottom", "100px", "margin-top", "30px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#vrf", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "vrf", 1, "collapse"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#water", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "water", 1, "collapse"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#center", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "center", 1, "collapse"], ["id", "movingCards", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "card-Carousel"], ["data-target", "#movingCards", "data-slide-to", "0", 1, "active"], ["data-target", "#movingCards", "data-slide-to", "1"], ["data-target", "#movingCards", "data-slide-to", "2"], ["data-target", "#movingCards", "data-slide-to", "3"], ["data-target", "#movingCards", "data-slide-to", "4"], ["data-target", "#movingCards", "data-slide-to", "5"], ["data-target", "#movingCards", "data-slide-to", "6"], ["data-target", "#movingCards", "data-slide-to", "7"], ["data-target", "#movingCards", "data-slide-to", "8"], [1, "carousel-inner", "movingCards-Inner"], [1, "card"], [1, "card-body", "grandient"], ["href", "#movingCards", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#movingCards", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "tips", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [2, "text-align", "center", "color", "white", "margin-top", "20px"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", 2, "color", "white"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"], ["class", "btn btn-secondary", "style", "float: right; box-shadow: 0px -4px 5px 1px black; cursor: no-drop;", "type", "submit", 4, "ngIf"], [2, "color", "white"], [1, "container-fluid"], ["src", "../../assets/gallery/LogoBrand.png", "alt", "...", 1, "logoBrand"], ["src", "../../assets/gallery/LogoBrand2.png", "alt", "...", 1, "logoBrand2"], [1, "logo-Text"], [1, "logo-Sub-Text"], ["type", "submit", 1, "btn", "btn-secondary", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", "cursor", "no-drop"]],
      template: function PrivateComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, PrivateComponent_h5_70_Template, 3, 0, "h5", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Water source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "ol", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "li", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "li", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "li", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "li", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "li", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "li", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "li", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "li", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Water source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "ol", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "li", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "li", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "li", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "li", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "img", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "img", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "h3", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "b", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_372_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](374, PrivateComponent_h6_374_Template, 2, 0, "h6", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "b", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "input", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_380_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](382, PrivateComponent_h6_382_Template, 2, 0, "h6", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "b", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_389_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](391, PrivateComponent_h6_391_Template, 2, 0, "h6", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "input", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_395_listener($event) {
            return ctx.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "b", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "input", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_401_listener($event) {
            return ctx.cellNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](403, PrivateComponent_h6_403_Template, 2, 0, "h6", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "textarea", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_textarea_ngModelChange_408_listener($event) {
            return ctx.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "a", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](411, PrivateComponent_h5_411_Template, 2, 0, "h5", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](412, PrivateComponent_a_412_Template, 3, 0, "a", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, " \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA : 053-3504818 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, " \u05E0\u05D9\u05D9\u05D7 : 077-9180254 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, " 053-4322804 : \u05D0\u05D1\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, " 053-3505931 : \u05D0\u05D1\u05D9\u05D1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, " alaska19000@gmail.com : \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "img", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "h6", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DC\u05E8\u05D1\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05D4\u05E0\"\u05DC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "h6", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "( \u05D9\u05E9 \u05DC\u05D4\u05D3\u05D2\u05D9\u05E9 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05E6\u05D2\u05D9\u05DD \u05D7\u05D1\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E6\u05D5\u05E8\u05D4 \u05E9\u05D4\u05D9\u05D0 )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clean == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c1, ctx.lastName, !ctx.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c1, ctx.firstName, !ctx.firstName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c1, ctx.city, !ctx.city));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](41, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c1, ctx.cellNumber, !ctx.cellNumber));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName || !ctx.lastName || !ctx.city || !ctx.cellNumber);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n  background-size: contain; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  height: 750px !important; \r\n  width: 100% !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: 800px; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.aboutS1[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-right: -20px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: none;\r\n}\r\n.about-Text[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\r\n.about-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  text-align: right;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  display: none;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-size: 16px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  \r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n.cards-Static[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-Carousel[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-bottom: 5px;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  padding-left: 20px; \r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: -19px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  \r\n  background-color: #007bff;\r\n  color: white;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  padding-right: 31px;\r\n  padding-left: 31px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important;  \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%]{\r\n  height: 550px !important;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n   height: 700px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n.about-Style[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n }\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 580px;\r\n   }\r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 500px;\r\n}\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 520px;\r\n   }\r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 550px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 900px;\r\n  \r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 750px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n\r\n\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .about-Style[_ngcontent-%COMP%] {\r\n    margin-top: -29px;\r\n  }\r\n  .cards-Static[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .card-Carousel[_ngcontent-%COMP%]{\r\n    display: block;\r\n    \r\n  } \r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  height: 700px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n display: none;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 480px;\r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 430px;\r\n   }\r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  \r\n  padding-right: 45px;\r\n  padding-left: 45px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 400px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}\r\n\r\n\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9wcml2YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7Ozs7O0dBTUc7QUFDSDtBQUNBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRDQUF1RDtBQUN6RDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7R0FDZCxZQUFZO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFHQUFxRztBQUN2RztBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxR0FBcUc7QUFDdkc7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBOzs7OztHQUtHO0FBQ0g7RUFDRSxzRUFBc0U7RUFDdEUseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNENBQXVEO0FBQ3pEO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBOztBQUVBO0FBR0E7RUFDRTtHQUNDLGFBQWE7RUFDZDtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBOztBQUVBO0VBQ0UsYUFBYTtDQUNkO0NBQ0E7RUFDQyxhQUFhO0FBQ2Y7QUFDQTtBQUVBLG1EQUFtRDtBQUNuRDtFQUNFO0lBQ0UsYUFBYTtHQUNkO0dBQ0E7SUFDQyxhQUFhO0dBQ2Q7R0FDQTtJQUNDLGFBQWE7RUFDZjtFQUNBO0lBQ0Usd0JBQXdCO0FBQzVCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtBQUVBO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7R0FDQTtJQUNDLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0FBRUY7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiOzJCQUN5QjtBQUMzQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2Q7d0JBQ3NCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7R0FHRztBQUNIOzs7R0FHRztBQUNIOzs7R0FHRztBQUNIO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0lBQ2Q7MEJBQ3NCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0FBQ2pCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7R0FDbEI7R0FDQTtLQUNFLGNBQWM7R0FDaEI7R0FDQTtJQUNDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtBQUVBO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7R0FDQTtLQUNFLGVBQWU7R0FDakI7R0FDQTtJQUNDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0tBQ2QsWUFBWTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTs7R0FFRztBQUNIO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7Ozs7O0dBS0c7QUFDSDs7R0FFRztBQUNIOztJQUVJO0FBQ0o7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0FBRUE7RUFDRTtJQUNFLGFBQWE7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEOzs7OztHQUtHO0FBQ0g7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0FBQ0E7O09BRU87QUFDUDs7Ozs7R0FLRztBQUNIO0FBRUE7RUFDRTtNQUNJLGFBQWE7TUFDYixnQkFBZ0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7TUFDSSxZQUFZO01BQ1osZ0JBQWdCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcml2YXRlL3ByaXZhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBpYy1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDc1MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi8qIC50aXAtU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IFxyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59ICovXHJcbi5pbm5lci1UaXB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbmhlaWdodDogNzAwcHg7IFxyXG5wYWRkaW5nLXRvcDogMTIlO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnRpcC1TdHlsZXtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZC10aXAzLmpwZyk7XHJcbn1cclxuLmFib3V0LVN0eWxle1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNzBweDsgXHJcbiAgaGVpZ2h0OiA4MDBweDsgXHJcbiAgLyogLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMmM1YWMzOyAgKi9cclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbn1cclxuLnBpYzF7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMDBweDsgIFxyXG59XHJcbi5hYm91dFN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxufVxyXG4uYWJvdXRTMXtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbn1cclxuLmxvZ29CcmFuZHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5sb2dvQnJhbmQye1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYWJvdXQtVGV4dHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uYWJvdXQtU3ViLVRleHR7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50b3AtVGV4dHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvd0Fib3V0e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvZ28tVGV4dHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmxvZ28tU3ViLVRleHR7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cclxufVxyXG5cclxuLmltZyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmltZyA6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZHMtU3RhdGlje1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jYXJkLUNhcm91c2Vse1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbnB1dCA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuLmZvcm0tU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDMlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50aXAtSW1hZ2V7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLndoaXRlQ29sb3J7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZWRDb2xvcntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5leHBlcnQtTW90by1Cb2R5e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgcGFkZGluZy1yaWdodDogMjBweDsgXHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyBcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmNhcm91c2VsLVN0eWxle1xyXG4gIG1hcmdpbi10b3AgOi0yNHB4OyBcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gIG1hcmdpbi1yaWdodDogLTE5cHg7XHJcbn1cclxuLmNoZWNrLUNpcmNsZS1Nb3Rve1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi50ZXh0LVJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5hYm91dC1IZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDI1JTtcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uYWJvdXQtQm9keXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgcGFkZGluZy1yaWdodDogNDUlOyBcclxuICBtYXJnaW4tdG9wOiAxNTBweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uZGlzcGxheU5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiAuYm9keVRleHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJvZHlUZXh0IDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbn0gKi9cclxuLmdyYW5kaWVudHtcclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmYzNDUzIDAlLCAjNGM1NThiIDEwMCUpOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pbWcye1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtdGlwMy5qcGcpO1xyXG59XHJcbi5waWMtQUN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLkhlYWRlci1Gb3JtLVN0eWxle1xyXG4gIGhlaWdodDogNjUwcHg7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjliYWM7IFxyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMxcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMXB4O1xyXG59XHJcbi5jYXJkLVN0eWxle1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7ICBcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLm1hcmdpbi1Ub3AtMTB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLm1vdmluZ0NhcmRzLUlubmVye1xyXG4gIGhlaWdodDogNTUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTYwcHgpIHtcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgaGVpZ2h0OiA3MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgLmlubmVyLVRpcHtcclxuICAgIGhlaWdodDogNTU1cHg7IFxyXG4gIH1cclxuICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICB9XHJcbiAgLmNhcmQtYm9keXtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuLmFib3V0LVN0eWxle1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiB9XHJcbiAuaW5uZXItVGlwe1xyXG4gIGhlaWdodDogNTUwcHg7IFxyXG59XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNTgwcHg7XHJcbiAgIH1cclxuICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgIH1cclxuICAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgfVxyXG4gIC5waWMtU3R5bGUge1xyXG4gICAgaGVpZ2h0OiA0NzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG59IFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbiAgIH1cclxuICAgLmlubmVyLVRpcHtcclxuICAgIGhlaWdodDogMzcwcHggIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICB9XHJcblxyXG59XHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbi5waWMtQUN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29sLW1kLTh7XHJcbiAgZmxleDogMCAwIDEwMC4wNjY2NjclO1xyXG4gIG1heC13aWR0aDogMTAwLjA2NjY2NyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLkhlYWRlci1Gb3JtLVN0eWxle1xyXG4gIGhlaWdodDogOTAwcHg7XHJcbiAgLyogbWFyZ2luLXJpZ2h0OiAtMjJweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLmlubmVyLVRpcHtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi50aXAtSW1hZ2Uge1xyXG4gIGhlaWdodDogMTU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiA3NTBweDtcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8qIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDsgKi9cclxufVxyXG4ubG9nby1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubG9nby1TdWItVGV4dHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi8qIC5jYXJvdXNlbC1TdHlsZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59ICovXHJcbi8qIC5jYXJkcy1TdGF0aWMge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxuLyogLnRpcC1TdHlsZSB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAuYWJvdXQtU3R5bGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTI5cHg7XHJcbiAgfVxyXG4gIC5jYXJkcy1TdGF0aWN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2FyZC1DYXJvdXNlbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTIycHg7ICovXHJcbiAgfSBcclxuICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4ubW92aW5nQ2FyZHMtSW5uZXIge1xyXG4gIGhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcbi5sb2dvQnJhbmR7XHJcbiBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dvQnJhbmQye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yM3B4O1xyXG4gICB9XHJcbiAgIC5kaXNwbGF5Tm9uZXtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgfVxyXG4gICAubG9nb1N0eWxle1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi50aXAtSW1hZ2V7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzRweCl7XHJcbi5jYXJkLVN0eWxle1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5tYXJnaW4tVG9wLTEwe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNDMwcHg7XHJcbiAgIH1cclxuICAgLmV4cGVydC1Nb3RvLUJvZHl7XHJcbiAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICB9XHJcbiAgIC5leHBlcnQtTW90by1IZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5jaGVjay1DaXJjbGUtTW90b3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmlubmVyLVRpcHtcclxuICBoZWlnaHQ6IDMxNXB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi8qIC5hYm91dFMxe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59ICovXHJcbi5hYm91dFN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9wLVRleHR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNob3dBYm91dHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4vKiAubG9nby1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcbi5sb2dvLVN1Yi1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogN3B4O1xyXG59ICovXHJcbi8qIC5jYXJke1xyXG4gIGhlaWdodDogMHB4O1xyXG59ICovXHJcbi8qIC5tb3ZpbmdDYXJkcyB7XHJcbiAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xyXG4gfSAqL1xyXG4uY2FyZC1ib2R5e1xyXG4gIC8qIGhlaWdodDogNDAwcHg7ICovXHJcbiAgcGFkZGluZy1yaWdodDogNDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG59XHJcbi5hYm91dC1TdHlsZXtcclxuICBtYXJnaW4tdG9wOiAtMjdweDtcclxuIH1cclxuLyogLmNhcm91c2VsIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59XHJcbi5jYXJvdXNlbC1TdHlsZXtcclxubWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufSAqL1xyXG4ucGljLVN0eWxlIHtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuaGVpZ2h0OiAxNzBweDtcclxucGFkZGluZy10b3A6IDc0cHg7XHJcbnBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4vKiAuYWJvdXRTe1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gICAgICovXHJcbi8qIC5tb3ZpbmdDYXJkcy1Jbm5lciB7XHJcbiAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbn0gKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-private',
          templateUrl: './private.component.html',
          styleUrls: ['./private.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/privateExtra/private-extra/private-extra.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/privateExtra/private-extra/private-extra.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PrivateExtraComponent */

  /***/
  function srcAppPrivateExtraPrivateExtraPrivateExtraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivateExtraComponent", function () {
      return PrivateExtraComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PrivateExtraComponent_h5_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateExtraComponent_h6_383_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateExtraComponent_h6_391_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateExtraComponent_h6_400_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateExtraComponent_h6_412_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateExtraComponent_h5_420_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateExtraComponent_a_421_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "is-valid": a0,
        "is-invalid": a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "whiteColor": a0,
        "redColor": a1
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "btn btn-success": a0
      };
    };

    var PrivateExtraComponent =
    /*#__PURE__*/
    function () {
      function PrivateExtraComponent() {
        _classCallCheck(this, PrivateExtraComponent);

        this.showFiller = false;
        this.events = [];
        this.phoneNumber = "";
        this.reason = "";
        this.sendMAil = 0;
        this.clean = 0;
      }

      _createClass(PrivateExtraComponent, [{
        key: "sendMeMail",
        value: function sendMeMail() {
          this.sendMAil = 1;
        }
      }, {
        key: "expendClean",
        value: function expendClean() {
          this.clean = 1 - this.clean;
          return '#clean';
        }
      }, {
        key: "submit",
        value: function submit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivateExtraComponent;
    }();

    PrivateExtraComponent.ɵfac = function PrivateExtraComponent_Factory(t) {
      return new (t || PrivateExtraComponent)();
    };

    PrivateExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivateExtraComponent,
      selectors: [["app-private-extra"]],
      decls: 439,
      vars: 49,
      consts: [["id", "about", 1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "aboutS", 2, "width", "100%"], ["src", "../../../assets/gallery/aboutPrivate1.jpg", 1, "about-Style"], [1, "showAbout"], [1, "container-fluid", "top-Text"], [1, "about-Text"], [1, "about-Sub-Text"], ["dir", "rtl"], ["id", "privateGallery", 2, "margin-bottom", "50px", "text-align", "center"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-briefcase", 2, "color", "brown"], ["id", "gallery", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "carousel-Style", 2, "width", "100%"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/gallery/Private/work1.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], [1, "carousel-item"], ["src", "../../assets/gallery/Private/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Private/work4a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/gallery/Private/work5.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], ["id", "cards", 1, "cards-Static"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "grandient"], [1, "card-title", 2, "text-align", "center"], ["data-toggle", "collapse", "href", "#clean", "role", "button", "aria-expanded", "false", "aria-controls", "clean", 2, "text-decoration", "none"], ["style", "color: white; margin-left: 10px;", 4, "ngIf"], ["id", "clean", 1, "collapse"], [1, "card-body"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#tzah", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], [2, "color", "white", "margin-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], ["id", "tzah", 1, "collapse"], [1, "card", "card-Style"], ["src", "../../assets/gallery/Nahshon12.png", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#nahshon", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "nahshon", 1, "collapse"], [1, "card-group", "margin-top-10", 2, "margin-top", "30px"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#package", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "package", 1, "collapse"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#split", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "split", 1, "collapse"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#smoke", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "smoke", 1, "collapse"], [1, "card-group", 2, "margin-bottom", "100px", "margin-top", "30px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#vrf", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "vrf", 1, "collapse"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#water", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "water", 1, "collapse"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["data-toggle", "collapse", "href", "#center", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 2, "text-decoration", "none"], ["id", "center", 1, "collapse"], ["id", "movingCards", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "card-Carousel"], ["data-target", "#movingCards", "data-slide-to", "0", 1, "active"], ["data-target", "#movingCards", "data-slide-to", "1"], ["data-target", "#movingCards", "data-slide-to", "2"], ["data-target", "#movingCards", "data-slide-to", "3"], ["data-target", "#movingCards", "data-slide-to", "4"], ["data-target", "#movingCards", "data-slide-to", "5"], ["data-target", "#movingCards", "data-slide-to", "6"], ["data-target", "#movingCards", "data-slide-to", "7"], ["data-target", "#movingCards", "data-slide-to", "8"], [1, "carousel-inner", "movingCards-Inner"], [1, "card"], [1, "card-body", "grandient"], ["href", "#movingCards", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#movingCards", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "tips", "data-ride", "carousel", "data-interval", "6000", "data-touch", "true", 1, "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [2, "text-align", "center", "color", "white", "margin-top", "20px"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o", 2, "color", "white"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"], ["class", "btn btn-secondary", "style", "float: right; box-shadow: 0px -4px 5px 1px black; cursor: no-drop;", "type", "submit", 4, "ngIf"], [2, "color", "white"], [1, "container-fluid"], ["src", "../../assets/gallery/LogoBrand.png", "alt", "...", 1, "logoBrand"], ["src", "../../assets/gallery/LogoBrand2.png", "alt", "...", 1, "logoBrand2"], [1, "logo-Text"], [1, "logo-Sub-Text"], ["type", "submit", 1, "btn", "btn-secondary", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", "cursor", "no-drop"]],
      template: function PrivateExtraComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, PrivateExtraComponent_h5_79_Template, 3, 0, "h5", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Water source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " \u05DC\u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "ol", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "li", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "li", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "li", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "li", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "li", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "li", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "li", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "li", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "li", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Water source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "h5", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "ol", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "li", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "li", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "li", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "li", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "img", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "img", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "img", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "h3", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "i", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "b", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_381_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](383, PrivateExtraComponent_h6_383_Template, 2, 0, "h6", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "b", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "input", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_389_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](391, PrivateExtraComponent_h6_391_Template, 2, 0, "h6", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "b", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_398_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](400, PrivateExtraComponent_h6_400_Template, 2, 0, "h6", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "input", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_404_listener($event) {
            return ctx.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "b", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "input", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_input_ngModelChange_410_listener($event) {
            return ctx.cellNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](412, PrivateExtraComponent_h6_412_Template, 2, 0, "h6", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "h5", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "textarea", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateExtraComponent_Template_textarea_ngModelChange_417_listener($event) {
            return ctx.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "a", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](420, PrivateExtraComponent_h5_420_Template, 2, 0, "h5", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](421, PrivateExtraComponent_a_421_Template, 3, 0, "a", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, " \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA : 053-3504818 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, " \u05E0\u05D9\u05D9\u05D7 : 077-9180254 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " 053-4322804 : \u05D0\u05D1\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, " 053-3505931 : \u05D0\u05D1\u05D9\u05D1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "h6", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, " alaska19000@gmail.com : \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "img", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "h6", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, " \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD \u05E0\u05D5\u05EA\u05E0\u05EA \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05DC\u05E8\u05D1\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05D4\u05E0\"\u05DC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "h6", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "( \u05D9\u05E9 \u05DC\u05D4\u05D3\u05D2\u05D9\u05E9 \u05DB\u05D9 \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05E6\u05D2\u05D9\u05DD \u05D7\u05D1\u05E8\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E6\u05D5\u05E8\u05D4 \u05E9\u05D4\u05D9\u05D0 )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clean == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx.lastName, !ctx.lastName))("ngModel", ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c1, ctx.lastName, !ctx.lastName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c0, ctx.firstName, !ctx.firstName))("ngModel", ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](32, _c1, ctx.firstName, !ctx.firstName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](35, _c0, ctx.city, !ctx.city))("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c1, ctx.city, !ctx.city));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](41, _c0, ctx.cellNumber, !ctx.cellNumber))("ngModel", ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](44, _c1, ctx.cellNumber, !ctx.cellNumber));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n    &body=\n    \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n     %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstName || !ctx.lastName || !ctx.city || !ctx.cellNumber);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n  background-size: contain; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  height: 750px !important; \r\n  width: 100% !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n.about-Text[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  padding-right: 20px;\r\n}\r\n.about-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  text-align: right;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  display: none;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n.logoBrand2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100%;\r\n  height: auto;\r\n  display: none;\r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  font-size: 16px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: 800px; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n.cards-Static[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.card-Carousel[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-bottom: 5px;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  padding-left: 20px; \r\n  margin-top: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: -19px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 650px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  padding-right: 31px;\r\n  padding-left: 31px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important;  \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%]{\r\n  height: 550px !important;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n   height: 700px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n.about-Style[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n }\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 580px;\r\n   }\r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 500px;\r\n}\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 520px;\r\n   }\r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n  .card-body[_ngcontent-%COMP%]{\r\n    height: 550px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 900px;\r\n  \r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n  height: 750px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  \r\n}\r\n.logo-Text[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n.logo-Sub-Text[_ngcontent-%COMP%]{\r\n  font-size: 11px;\r\n}\r\n\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .about-Style[_ngcontent-%COMP%] {\r\n    margin-top: -29px;\r\n  }\r\n  .cards-Static[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .card-Carousel[_ngcontent-%COMP%]{\r\n    display: block;\r\n    \r\n  }\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.movingCards-Inner[_ngcontent-%COMP%] {\r\n  height: 700px !important;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  height: 700px;\r\n}\r\n.logoBrand[_ngcontent-%COMP%]{\r\n  display: none;\r\n }\r\n .logoBrand2[_ngcontent-%COMP%]{\r\n   display: block;\r\n }\r\n}\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 480px;\r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 430px;\r\n   }\r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.showAbout[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.top-Text[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n\r\n\r\n\r\n.card-body[_ngcontent-%COMP%]{\r\n  \r\n  padding-right: 45px;\r\n  padding-left: 45px;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 400px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}  \r\n\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZUV4dHJhL3ByaXZhdGUtZXh0cmEvcHJpdmF0ZS1leHRyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7O0dBTUc7QUFDSDtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0Q0FBMEQ7QUFDNUQ7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0dBQ2QsWUFBWTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxR0FBcUc7QUFDdkc7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUdBQXFHO0FBQ3ZHO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7R0FLRztBQUNIO0VBQ0UsdUZBQWdFO0VBQWhFLGdFQUFnRTtFQUNoRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRDQUEwRDtBQUM1RDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTs7QUFFQTtBQUdBO0VBQ0U7R0FDQyxhQUFhO0VBQ2Q7QUFDRjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTs7QUFFQTtFQUNFLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsYUFBYTtBQUNmO0FBQ0E7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFLGFBQWE7R0FDZDtHQUNBO0lBQ0MsYUFBYTtHQUNkO0dBQ0E7SUFDQyxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHdCQUF3QjtBQUM1QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7QUFFQTtFQUNFO0lBQ0UsYUFBYTtHQUNkO0dBQ0E7SUFDQyx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVGO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYjsyQkFDeUI7QUFDM0I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkO3dCQUNzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBOzs7Ozs7Ozs7OztHQVdHO0FBQ0g7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7SUFDZDswQkFDc0I7RUFDeEI7RUFDQTtJQUNFLGFBQWE7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0NBQ2Q7Q0FDQTtHQUNFLGNBQWM7Q0FDaEI7QUFDRDtBQUVBLG9FQUFvRTtBQUNwRTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjtHQUNBO0tBQ0UsY0FBYztHQUNoQjtHQUNBO0lBQ0MsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0FBRUE7RUFDRTtJQUNFLGFBQWE7R0FDZDtHQUNBO0tBQ0UsZUFBZTtHQUNqQjtHQUNBO0lBQ0Msa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7S0FDZCxZQUFZO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7OztHQUdHO0FBQ0g7O0dBRUc7QUFDSDs7SUFFSTtBQUNKO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtBQUVBO0VBQ0U7SUFDRSxhQUFhO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDs7Ozs7R0FLRztBQUNIO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQjtBQUNBOzs7OztHQUtHO0FBQ0g7QUFFQTtFQUNFO01BQ0ksYUFBYTtNQUNiLGdCQUFnQjtFQUNwQjtBQUNGO0FBRUE7RUFDRTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGVFeHRyYS9wcml2YXRlLWV4dHJhL3ByaXZhdGUtZXh0cmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBpYy1TdHlsZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDc1MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5hYm91dC1UZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hYm91dC1TdWItVGV4dHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRvcC1UZXh0e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaG93QWJvdXR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiAudGlwLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyBcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSAqL1xyXG4ubG9nb0JyYW5ke1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ29CcmFuZDJ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dvLVRleHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbnRleHQtYWxpZ246IGNlbnRlcjsgXHJcbmhlaWdodDogNzAwcHg7IFxyXG5wYWRkaW5nLXRvcDogMTIlO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnRpcC1TdHlsZXtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC10aXAzLmpwZyk7XHJcbn1cclxuLmFib3V0LVN0eWxle1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNzBweDsgXHJcbiAgaGVpZ2h0OiA4MDBweDsgXHJcbiAgLyogLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMmM1YWMzOyAgKi9cclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbn1cclxuLnBpYzF7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMDBweDsgIFxyXG59XHJcbi5hYm91dFN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmltZyA6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZHMtU3RhdGlje1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jYXJkLUNhcm91c2Vse1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pbnB1dCA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuLmZvcm0tU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDMlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50aXAtSW1hZ2V7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLndoaXRlQ29sb3J7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZWRDb2xvcntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5leHBlcnQtTW90by1Cb2R5e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgcGFkZGluZy1yaWdodDogMjBweDsgXHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyBcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmNhcm91c2VsLVN0eWxle1xyXG4gIG1hcmdpbi10b3AgOi0yNHB4OyBcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gIG1hcmdpbi1yaWdodDogLTE5cHg7XHJcbn1cclxuLmNoZWNrLUNpcmNsZS1Nb3Rve1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi50ZXh0LVJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5hYm91dC1IZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAzM3B4O1xyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDI1JTtcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uYWJvdXQtQm9keXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgcGFkZGluZy1yaWdodDogNDUlOyBcclxuICBtYXJnaW4tdG9wOiAxNTBweDsgXHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uZGlzcGxheU5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKiAuYm9keVRleHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJvZHlUZXh0IDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbn0gKi9cclxuLmdyYW5kaWVudHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmYzNDUzIDAlLCAjNGM1NThiIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaW1nMntcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcDMuanBnKTtcclxufVxyXG4ucGljLUFDe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5IZWFkZXItRm9ybS1TdHlsZXtcclxuICBoZWlnaHQ6IDY1MHB4OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5YmFjOyBcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzFweDtcclxufVxyXG4uY2FyZC1TdHlsZXtcclxuICBtYXJnaW4tbGVmdDogMzBweCAhaW1wb3J0YW50OyAgXHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5tYXJnaW4tVG9wLTEwe1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5tb3ZpbmdDYXJkcy1Jbm5lcntcclxuICBoZWlnaHQ6IDU1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KSB7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgIGhlaWdodDogNzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5pbm5lci1UaXB7XHJcbiAgICBoZWlnaHQ6IDU1NXB4OyBcclxuICB9XHJcbiAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgfVxyXG4gIC5jYXJkLWJvZHl7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbi5hYm91dC1TdHlsZXtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gfVxyXG4gLmlubmVyLVRpcHtcclxuICBoZWlnaHQ6IDU1MHB4OyBcclxufVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDU4MHB4O1xyXG4gICB9XHJcbiAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICB9XHJcbiAgIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gIH1cclxuICAucGljLVN0eWxlIHtcclxuICAgIGhlaWdodDogNDcwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICB9XHJcbiAgIC5pbm5lci1UaXB7XHJcbiAgICBoZWlnaHQ6IDM3MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcbiAgLmNhcmQtYm9keXtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4ucGljLUFDe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNvbC1tZC04e1xyXG4gIGZsZXg6IDAgMCAxMDAuMDY2NjY3JTtcclxuICBtYXgtd2lkdGg6IDEwMC4wNjY2NjclO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5IZWFkZXItRm9ybS1TdHlsZXtcclxuICBoZWlnaHQ6IDkwMHB4O1xyXG4gIC8qIG1hcmdpbi1yaWdodDogLTIycHggIWltcG9ydGFudDtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50OyAqL1xyXG59XHJcbi5pbm5lci1UaXB7XHJcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50OyBcclxufVxyXG4udGlwLUltYWdlIHtcclxuICBoZWlnaHQ6IDE1NXB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGhlaWdodDogNzUwcHg7XHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7ICovXHJcbn1cclxuLmxvZ28tVGV4dHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmxvZ28tU3ViLVRleHR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi8qIC5jYXJvdXNlbC1TdHlsZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkcy1TdGF0aWMge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn1cclxuLnRpcC1TdHlsZSB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAuYWJvdXQtU3R5bGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTI5cHg7XHJcbiAgfVxyXG4gIC5jYXJkcy1TdGF0aWN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2FyZC1DYXJvdXNlbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTIycHg7ICovXHJcbiAgfVxyXG4gIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5tb3ZpbmdDYXJkcy1Jbm5lciB7XHJcbiAgaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJke1xyXG4gIGhlaWdodDogNzAwcHg7XHJcbn1cclxuLmxvZ29CcmFuZHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4gLmxvZ29CcmFuZDJ7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcclxuICAgfVxyXG4gICAuZGlzcGxheU5vbmV7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxuICAgLmxvZ29TdHlsZXtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4udGlwLUltYWdle1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc0cHgpe1xyXG4uY2FyZC1TdHlsZXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4ubWFyZ2luLVRvcC0xMHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICB9XHJcbiAgIC5leHBlcnQtTW90by1Cb2R5e1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgfVxyXG4gICAuZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuY2hlY2stQ2lyY2xlLU1vdG97XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICAudGlwLUltYWdlIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5zaG93QWJvdXR7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi50b3AtVGV4dHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaW5uZXItVGlwe1xyXG4gIGhlaWdodDogMzE1cHggIWltcG9ydGFudDsgXHJcbn1cclxuLyogLmFib3V0U3tcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn0gKi9cclxuLyogLmNhcmR7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbn0gKi9cclxuLyogLm1vdmluZ0NhcmRzIHtcclxuICBoZWlnaHQ6IDU1MHB4ICFpbXBvcnRhbnQ7XHJcbiB9ICovXHJcbi5jYXJkLWJvZHl7XHJcbiAgLyogaGVpZ2h0OiA0MDBweDsgKi9cclxuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDVweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbn1cclxuLmFib3V0LVN0eWxle1xyXG4gIG1hcmdpbi10b3A6IC0yN3B4O1xyXG4gfVxyXG4vKiAuY2Fyb3VzZWwge1xyXG4gIG1hcmdpbi1yaWdodDogLTIycHg7XHJcbn1cclxuLmNhcm91c2VsLVN0eWxle1xyXG5tYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59ICovXHJcbi5waWMtU3R5bGUge1xyXG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubG9nb1N0eWxle1xyXG5oZWlnaHQ6IDE3MHB4O1xyXG5wYWRkaW5nLXRvcDogNzRweDtcclxucGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59ICBcclxuLyogLm1vdmluZ0NhcmRzLUlubmVyIHtcclxuICBoZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmR7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxufSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcclxuICAudGlwLUltYWdlIHtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAudGlwLUltYWdlIHtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateExtraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-private-extra',
          templateUrl: './private-extra.component.html',
          styleUrls: ['./private-extra.component.css']
        }]
      }], function () {
        return [];
      }, null);
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
    /*! C:\Users\ykogan\alaska_systems\alaska-systems-site\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map