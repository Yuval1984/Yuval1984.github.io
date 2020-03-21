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

    var routes = [{
      path: '',
      component: _private_private_component__WEBPACK_IMPORTED_MODULE_2__["PrivateComponent"]
    }, {
      path: 'business',
      component: _business_business_component__WEBPACK_IMPORTED_MODULE_3__["BusinessComponent"]
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 44);
      }
    }

    function AppComponent_i_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 45);
      }
    }

    var _c0 = function _c0() {
      return [""];
    };

    var _c1 = function _c1() {
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
      decls: 97,
      vars: 41,
      consts: [["dir", "rtl", 1, "navbar", "navbar-expand-sm", "gb-dark", "navbar-Style"], [1, "row", "container-fluid"], [1, "example-sidenav-content", "col-xs-1", "navButton"], ["type", "button", "mat-button", "", 3, "click"], ["class", "fa fa-bars", "style", "font-size: 30px;", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times", "style", "font-size: 30px;", "aria-hidden", "true", 4, "ngIf"], [1, "col-2", "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], [1, "col", "moto"], [1, "text-Style-Header"], [1, "col-3", "container-fluid", "mini-Style-Header"], [1, "navbar-nav", "mini-Style-Body"], [1, "nav-item"], ["href", "https://www.facebook.com/profile.php?id=100048382270443", 1, "nav-link", "facebook-Style"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square"], ["href", "tel:0533504818", 1, "nav-link", "phone-Style"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], ["href", "#", 1, "nav-link", "instegram-Style"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "https://api.whatsapp.com/send?phone=+9720533504818&text=\u05E9\u05DC\u05D5\u05DD \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF\\\u05D4\u05EA\u05E7\u05E0\u05D4 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF", 1, "nav-link", "whatsapp-Style"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp"], ["href", "mailto:alaska19000@gmail.com", 1, "nav-link", "envelope-Style"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o"], ["dir", "rtl", 1, "container-fluid", 2, "height", "400px", "position", "absolute", "padding-right", "0px !important", "z-index", "100", "position", "absolute"], ["autosize", "", 1, "example-container", 2, "background-color", "transparent", "border", "none"], ["mode", "side", 1, "example-sidenav", "menu-Style"], ["drawer", ""], [2, "font-family", "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"], [1, "menu"], [2, "font-family", "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", 3, "routerLink", "fragment"], [1, "sub-Menu"], [3, "routerLink", "fragment"], [1, "row", "footer-Style"], [1, "col"], [1, "container-fluid", 2, "text-align", "center"], [1, "myMoto"], [1, "row", 2, "text-align", "center"], ["href", "https://www.facebook.com/yuval.kogan.5", 1, "nav-link", "facebook-Style-Bottom"], ["href", "tel:0508451651", 1, "nav-link", "phone-Style-Bottom"], ["href", "https://api.whatsapp.com/send?phone=+972508451651&text=\u05E9\u05DC\u05D5\u05DD \u05D9\u05D5\u05D1\u05DC, \u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05EA\u05E8", 1, "nav-link", "whatsapp-Style-Bottom"], ["href", "mailto:yuvalkogan84@gmail.com", 1, "nav-link", "envelope-Style-Bottom"], [1, "col-1", "arrow-Style"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", "arrow-Style-Font"], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "font-size", "30px"], ["aria-hidden", "true", 1, "fa", "fa-times", 2, "font-size", "30px"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            _r12.toggle();

            return ctx.changeNav();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E8\u05D0\u05E9\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u05D8\u05D9\u05E4\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u05D4\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05E1\u05E7\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u05D8\u05D9\u05E4\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05E0\u05D1\u05E0\u05D4 \u05E2\"\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u05D9\u05D5\u05D1\u05DC \u05E7\u05D5\u05D2\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navButton == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navButton == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0))("fragment", "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0))("fragment", "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0))("fragment", "gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0))("fragment", "proffesional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0))("fragment", "tips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0))("fragment", "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c1))("fragment", "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c1))("fragment", "about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c1))("fragment", "gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1))("fragment", "proffesional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c1))("fragment", "tips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c1))("fragment", "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0))("fragment", "about");
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding-top: 0 ;\r\n    padding-bottom: 0 ;\r\n    margin-right: 0;\r\n    font-size: 1.25rem;\r\n    line-height: inherit;\r\n    white-space: nowrap;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    border-color: blue;\r\n    background-color: black;\r\n}\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 250px; \r\n  height: 69px;\r\n  border-left: 1px solid black;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.text-Style-Header[_ngcontent-%COMP%]{\r\n    \r\n    height: 69px;\r\n    margin-bottom: 0;\r\n    margin-top: 0;\r\n    padding-top: 14px;\r\n    \r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    text-align: center;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n    width: 800px;\r\n    height: 500px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n    background-color: black;\r\n    color: white;\r\n  }\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 26px;\r\n    width: 330px;\r\n    text-align: right;\r\n    background-color: black;\r\n    color: white;\r\n    position: fixed;\r\n    margin-top: 85px;\r\n    -webkit-transform: none;\r\n            transform: none;\r\n    visibility: visible;\r\n    height: 470px;\r\n    border-bottom-left-radius: 20px;\r\n  }\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 18px; \r\n    color: white; \r\n    \r\n  }\r\n.menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(61, 43, 226);\r\n    color: white !important;\r\n    text-decoration: none;\r\n  }\r\n.sub-Menu[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n    font-size: 18px; \r\n    color: white; \r\n  }\r\n.sub-Menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: gold;\r\n    text-decoration: none;\r\n  }\r\n.facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 10px; \r\n    margin-right: 5px;\r\n    margin-top: -10px;\r\n  }\r\n.phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.phone-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: deeppink; \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.instegram-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: rgb(177, 15, 101); \r\n  }\r\n.whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.whatsapp-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: red; \r\n    margin-left: 10px;\r\n    margin-top: -10px;\r\n  }\r\n.envelope-Style[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkred; \r\n  }\r\n\r\n.facebook-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 580px; \r\n    margin-right: 5px;\r\n    margin-top: -30px;\r\n  }\r\n.phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.phone-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: rgb(13, 179, 13); \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.whatsapp-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkgreen; \r\n  }\r\n.envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    color: red; \r\n    margin-left: 10px;\r\n    margin-top: -30px;\r\n  }\r\n.envelope-Style-Bottom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    color: darkred; \r\n  }\r\n.mini-Style-Header[_ngcontent-%COMP%]{\r\n    margin-top: -30px;\r\n    height: 99px;\r\n    margin-bottom: -15px;\r\n    margin-left: -46px;\r\n    text-align: right;\r\n    background-color: black;\r\n  }\r\n.mini-Style-Body[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: black;\r\n    margin-top: -15px;\r\n    margin-bottom: -30px;\r\n    height: 85px;\r\n    padding-top: 10px;\r\n    margin-left: 0px;\r\n    width: 110%;\r\n  }\r\n.navButton[_ngcontent-%COMP%]{\r\n    color: white;\r\n    height: 84px;\r\n    margin-right: -16px;\r\n    background-color: black;\r\n    margin-top: -16px;\r\n    margin-bottom: -16px;\r\n    z-index: 1000;\r\n  }\r\n.footer-Style[_ngcontent-%COMP%]{\r\n    height: 300px; \r\n    background-color: rgb(32, 30, 53); \r\n    text-align: center; \r\n    padding-top: 120px; \r\n    color: white; width: 100; \r\n    margin-right: 0px;\r\n  }\r\n.footer-Logo[_ngcontent-%COMP%]{\r\n      height: 100px; \r\n      background-color: rgb(32, 30, 53); \r\n      text-align: center; \r\n  }\r\n.arrow-Style-Font[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: white;\r\n  }\r\n.arrow-Style[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    color: white;\r\n    margin-right: 0px;\r\n  }\r\n.navbar-Style[_ngcontent-%COMP%]{\r\n    z-index: 1000;\r\n    top: 0;\r\n    position: fixed;\r\n    background-color: white;\r\n    border-bottom: 1px solid black;\r\n    right: 0;\r\n    left: 0;\r\n  }\r\n.myMoto[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n.menu-Style[_ngcontent-%COMP%]{\r\n    background-color: black; \r\n    color: white;\r\n    right: 0 !important;\r\n  }\r\n@media only screen and (max-width: 1560px) {\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1500px) {\r\n  .text-Style-Header[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 28%;\r\n    max-width: 28%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -15px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n.text-Style-Header[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\r\n.mini-Style-Header[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 31% ;\r\n  max-width: 31% ;\r\n}\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 36%;\r\n    max-width: 36%;\r\n  }\r\n  .text-Style-Header[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    padding-right: 50px;\r\n }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n  .moto[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 42%;\r\n    max-width: 42%;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n}\r\n.facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n  margin-left: 410px;\r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 52%;\r\n    max-width: 52%;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -12px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 310px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 45%;\r\n    max-width: 45%;\r\n    \r\n  }\r\n  .mini-Style-Body[_ngcontent-%COMP%]{\r\n    height: 64px;\r\n    padding-right: 5px;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n    \r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-right: -5px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 5px;\r\n    margin-top: -10px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -14px;\r\n  }\r\n  .footer-Style[_ngcontent-%COMP%] {\r\n    margin-right: -22px;\r\n  }\r\n  .arrow-Style[_ngcontent-%COMP%]{\r\n    margin-right: 40px !important;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 210px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n  }\r\n}\r\n@media only screen and (max-width: 650px){\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-right: -5px;\r\n    margin-top: -10px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 2px;\r\n    margin-top: -10px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 125px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n    margin-right: -8px;\r\n    margin-bottom: -17px;\r\n  }\r\n  .menu-Style[_ngcontent-%COMP%]{\r\n    margin-top: 69px;\r\n  }\r\n}\r\n@media only screen and (max-width: 610px){\r\n  .displayNone[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .navbar-Style[_ngcontent-%COMP%]{\r\n    height: 70px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    height: 85px;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 15px;\r\n    margin-right: 75px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 125px;\r\n  }\r\n  \r\n  \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n \r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 180px; \r\n    height: 55px;\r\n  }\r\n  .navbar-nav[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n            flex-direction: row !important;\r\n  }\r\n}\r\n@media only screen and (max-width: 574px) {\r\n  .mini-Style-Header[_ngcontent-%COMP%] {\r\n    height: 72px;\r\n    margin-top: -60px;\r\n    padding-bottom: 0px;\r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 40px;\r\n    margin-right: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 40px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 40px;\r\n    margin-top: -17px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%]{\r\n    margin-right: -2px;\r\n  }\r\n.facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n  margin-left: 100px;\r\n}\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .arrow-Style-Font[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: 120px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    font-size: 33px; \r\n    margin-left: -10px;\r\n  }\r\n}\r\n@media only screen and (max-width: 450px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 15px;\r\n    margin-right: 65px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 15px;\r\n    margin-top: -17px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 80px;\r\n  }\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 150px; \r\n    height: 50px;\r\n  }\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;  \r\n    margin-left: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px; \r\n    margin-left: 20px;\r\n    margin-top: -17px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 85px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n    margin-right: -30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 350px) {\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 130px; \r\n    height: 45px;\r\n  }\r\n  .mini-Style-Header[_ngcontent-%COMP%]{\r\n    height: 78px;\r\n  }\r\n  .navButton[_ngcontent-%COMP%] {\r\n    height: 69px;\r\n    margin-bottom: -18px;\r\n}\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin-left: 20px;\r\n    margin-right: 10px;\r\n    margin-top: -17px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: 0px; \r\n  }\r\n  .menu-Style[_ngcontent-%COMP%]{\r\n    width: 370px;\r\n    border-bottom-left-radius: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n    margin-left: 20px;\r\n    margin-right: 5px;\r\n    margin-top: -15px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px;  \r\n    margin-left: 20px;\r\n    margin-top: -15px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px; \r\n    margin-left: 20px;\r\n    margin-top: -15px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px; \r\n    margin-left: 20px;\r\n    margin-top: -15px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 35px; \r\n    margin-left: 20px;\r\n    margin-top: -15px;\r\n  }\r\n  .facebook-Style-Bottom[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .phone-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n  .whatsapp-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n  .envelope-Style-Bottom[_ngcontent-%COMP%]{\r\n    margin-left: -10px; \r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .facebook-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    margin-left: 15px;\r\n    margin-right: 5px;\r\n    margin-top: -12px;\r\n  }\r\n  .phone-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px;  \r\n    margin-left: 15px;\r\n    margin-top: -12px;\r\n  }\r\n  .instegram-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -12px;\r\n  }\r\n  .whatsapp-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -12px;\r\n  }\r\n  .envelope-Style[_ngcontent-%COMP%]{\r\n    font-size: 30px; \r\n    margin-left: 15px;\r\n    margin-top: -12px;\r\n  }\r\n  .myMoto[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixxR0FBcUc7SUFDckcsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBZTtZQUFmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLCtCQUErQjtFQUNqQztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDO0FBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBRUEsMkJBQTJCO0FBRTNCO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7RUFDekI7QUFFQTtJQUNFLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7RUFDZjtBQUVBO0lBQ0UsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVksRUFBRSxVQUFVO0lBQ3hCLGlCQUFpQjtFQUNuQjtBQUVBO01BQ0ksYUFBYTtNQUNiLGlDQUFpQztNQUNqQyxrQkFBa0I7RUFDdEI7QUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsTUFBTTtJQUNOLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixPQUFPO0VBQ1Q7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBRUY7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLG1CQUFhO1lBQWIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBR0E7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtBQUVBO0VBQ0U7SUFDRSxtQkFBYTtZQUFiLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxtQkFBYTtZQUFiLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0FBRUEsbURBQW1EO0FBQ25EO0VBQ0U7SUFDRSxtQkFBYTtZQUFiLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0FBRUEscURBQXFEO0FBQ3JEO0VBQ0U7SUFDRSxtQkFBYTtZQUFiLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUdBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLG1CQUFjO1lBQWQsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTs7OztLQUlHO0VBQ0g7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTs7S0FFRztFQUNIOzs7S0FHRztBQUNMO0FBRUEsb0VBQW9FO0FBQ3BFOztFQUVFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBRUUsb0JBQWE7SUFBYixhQUFhO0lBRWIseUNBQThCO0lBQTlCLHdDQUE4QjtZQUE5Qiw4QkFBOEI7RUFDaEM7QUFDRjtBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMCA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmxvZ29TdHlsZXtcclxuICB3aWR0aDogMjUwcHg7IFxyXG4gIGhlaWdodDogNjlweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5kaXNwbGF5Tm9uZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRleHQtU3R5bGUtSGVhZGVye1xyXG4gICAgLypib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrOyovXHJcbiAgICBoZWlnaHQ6IDY5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgLypwYWRkaW5nLWxlZnQ6IDEwcHg7Ki9cclxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjZweDtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGhlaWdodDogNDcwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICAubWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTsqL1xyXG4gIH1cclxuICAubWVudSA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDQzLCAyMjYpO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5zdWItTWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgfVxyXG4gIC5zdWItTWVudSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZ29sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmdiKDEzLCAxNzksIDEzKTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGUgOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjsgXHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgY29sb3I6IGRlZXBwaW5rOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGUgOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigxNzcsIDE1LCAxMDEpOyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiByZ2IoMTMsIDE3OSwgMTMpOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZSA6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya2dyZWVuOyBcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiByZWQ7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxlIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrcmVkOyBcclxuICB9XHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNTgwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBjb2xvcjogcmdiKDEzLCAxNzksIDEzKTsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGUtQm90dG9tIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47IFxyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIGNvbG9yOiByZ2IoMTMsIDE3OSwgMTMpOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b20gOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjsgXHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgY29sb3I6IHJlZDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9tIDpob3ZlcntcclxuICAgIGNvbG9yOiBkYXJrcmVkOyBcclxuICB9XHJcblxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgaGVpZ2h0OiA5OXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQ2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLm1pbmktU3R5bGUtQm9keXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgfVxyXG5cclxuICAubmF2QnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLVN0eWxle1xyXG4gICAgaGVpZ2h0OiAzMDBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMwLCA1Myk7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmctdG9wOiAxMjBweDsgXHJcbiAgICBjb2xvcjogd2hpdGU7IHdpZHRoOiAxMDA7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLUxvZ297XHJcbiAgICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMwLCA1Myk7IFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIH1cclxuICAuYXJyb3ctU3R5bGUtRm9udHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5hcnJvdy1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubmF2YmFyLVN0eWxle1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAubWVudS1TdHlsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTYwcHgpIHtcclxuICAubmF2QnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgLnRleHQtU3R5bGUtSGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gIH1cclxuICAubWluaS1TdHlsZS1IZWFkZXJ7XHJcbiAgICBmbGV4OiAwIDAgMjglO1xyXG4gICAgbWF4LXdpZHRoOiAyOCU7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbi50ZXh0LVN0eWxlLUhlYWRlcntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLm1pbmktU3R5bGUtSGVhZGVye1xyXG4gIGZsZXg6IDAgMCAzMSUgO1xyXG4gIG1heC13aWR0aDogMzElIDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCAzNiU7XHJcbiAgICBtYXgtd2lkdGg6IDM2JTtcclxuICB9XHJcbiAgLnRleHQtU3R5bGUtSGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubW90b3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCA0MiU7XHJcbiAgICBtYXgtd2lkdGg6IDQyJTtcclxuICB9XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG59XHJcbi5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MTBweDtcclxufVxyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWluaS1TdHlsZS1IZWFkZXJ7XHJcbiAgICBmbGV4OiAwIDAgNTIlO1xyXG4gICAgbWF4LXdpZHRoOiA1MiU7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMTBweDtcclxuICB9XHJcbn0gXHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGZsZXg6IDAgMCA0NSU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgIC8qaGVpZ2h0OiA5NHB4OyovXHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUJvZHl7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5sb2dvU3R5bGV7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIC8qaGVpZ2h0OiA2M3B4OyovXHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLm5hdkJ1dHRvbntcclxuICAgIG1hcmdpbi1yaWdodDogLTE0cHg7XHJcbiAgfVxyXG4gIC5mb290ZXItU3R5bGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuICB9XHJcbiAgLmFycm93LVN0eWxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxMHB4O1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpe1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTI1cHg7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTdweDtcclxuICB9XHJcbiAgLm1lbnUtU3R5bGV7XHJcbiAgICBtYXJnaW4tdG9wOiA2OXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpe1xyXG4gIC5kaXNwbGF5Tm9uZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXZiYXItU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAvKiAubmF2QnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE3cHg7XHJcbiAgfSAqL1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmluc3RlZ3JhbS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gIH1cclxuICAvKiAubWVudS1TdHlsZXtcclxuICAgIG1hcmdpbi10b3A6IDY5cHg7XHJcbiAgfSAqL1xyXG4gIC8qIC5sb2dvU3R5bGV7XHJcbiAgICB3aWR0aDogMTgwcHg7IFxyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gIH0gKi9cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuIFxyXG4gIC5sb2dvU3R5bGV7XHJcbiAgICB3aWR0aDogMTgwcHg7IFxyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gIH1cclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzRweCkge1xyXG4gIC5taW5pLVN0eWxlLUhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmluc3RlZ3JhbS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5uYXZCdXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0ycHg7XHJcbiAgfVxyXG4uZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5hcnJvdy1TdHlsZS1Gb250e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAzM3B4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIGZvbnQtc2l6ZTogMzNweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b217XHJcbiAgICBmb250LXNpemU6IDMzcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgZm9udC1zaXplOiAzM3B4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5sb2dvU3R5bGV7XHJcbiAgICB3aWR0aDogMTUwcHg7IFxyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAucGhvbmUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7ICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5pbnN0ZWdyYW0tU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5lbnZlbG9wZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gIH1cclxuICAuZmFjZWJvb2stU3R5bGUtQm90dG9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gIH1cclxuICAubXlNb3Rve1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgLmxvZ29TdHlsZXtcclxuICAgIHdpZHRoOiAxMzBweDsgXHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG4gIC5taW5pLVN0eWxlLUhlYWRlcntcclxuICAgIGhlaWdodDogNzhweDtcclxuICB9XHJcbiAgLm5hdkJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDY5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMThweDtcclxufVxyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgfVxyXG4gIC5teU1vdG97XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9vay1TdHlsZS1Cb3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZS1Cb3R0b217XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4OyBcclxuICB9XHJcbiAgLndoYXRzYXBwLVN0eWxlLUJvdHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXHJcbiAgfVxyXG4gIC5tZW51LVN0eWxle1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5mYWNlYm9vay1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4OyAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAuaW5zdGVncmFtLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzNXB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICB9XHJcbiAgLmZhY2Vib29rLVN0eWxlLUJvdHRvbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcbiAgLnBob25lLVN0eWxlLUJvdHRvbXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDsgXHJcbiAgfVxyXG4gIC53aGF0c2FwcC1TdHlsZS1Cb3R0b217XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7IFxyXG4gIH1cclxuICAuZW52ZWxvcGUtU3R5bGUtQm90dG9te1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4OyBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuZmFjZWJvb2stU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgfVxyXG4gIC5waG9uZS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICB9XHJcbiAgLmluc3RlZ3JhbS1TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIH1cclxuICAud2hhdHNhcHAtU3R5bGV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICB9XHJcbiAgLmVudmVsb3BlLVN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgfVxyXG4gIC5teU1vdG97XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59Il19 */"]
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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _private_private_component__WEBPACK_IMPORTED_MODULE_4__["PrivateComponent"], _business_business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _private_private_component__WEBPACK_IMPORTED_MODULE_4__["PrivateComponent"], _business_business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"]],
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BusinessComponent_h6_259_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h6_267_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h6_276_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h6_288_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BusinessComponent_h5_296_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

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
      }

      _createClass(BusinessComponent, [{
        key: "sendMeMail",
        value: function sendMeMail() {
          this.sendMAil = 1;
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
      decls: 297,
      vars: 47,
      consts: [[1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], ["id", "about", 1, "row", "aboutS"], ["src", "../../assets/about4.jpg", 1, "about-Style"], ["id", "about", 1, "row", "aboutS1"], ["src", "../../assets/about5.jpg", 1, "about-Style"], ["id", "gallery", "data-ride", "carousel", 1, "row", "carousel", "slide", "carousel-Style"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], ["data-target", "#gallery", "data-slide-to", "4"], ["data-target", "#gallery", "data-slide-to", "5"], ["data-target", "#gallery", "data-slide-to", "6"], ["data-target", "#gallery", "data-slide-to", "7"], ["data-target", "#gallery", "data-slide-to", "8"], ["data-target", "#gallery", "data-slide-to", "9"], ["data-target", "#gallery", "data-slide-to", "10"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/work1a.jpg", "alt", "...", 1, "pic-Style"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "../../assets/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work3.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work4c.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work5a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work6a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work7a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work8a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work9.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work10.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work11.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px", "margin-top", "10px"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-body", "grandient"], [1, "card-title", 2, "text-align", "center"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card", "card-Style"], ["src", "../../assets/gallery/nahshon2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-group", "margin-top-10"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-group", 2, "margin-bottom", "100px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["id", "privateSector", 1, "container-fluid", "expert-Moto-Header", 2, "margin-bottom", "100px"], [1, "text-Right", 2, "color", "blue"], ["aria-hidden", "true", 1, "fa", "fa-industry", 2, "font-size", "40px", "color", "blue"], [1, "text-Right"], ["id", "tips", "data-ride", "carousel", 1, "row", "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Water Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h2", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "b", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ": \u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D0\u05D7\u05D6\u05E7\u05D4 \u05DC\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05E1\u05E7\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h4", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " ,\u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05E1\u05E4\u05E7\u05EA \u05DE\u05D2\u05D5\u05D5\u05DF \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " .\u05DB\u05D2\u05D5\u05DF : \u05DE\u05D1\u05E0\u05D9 \u05E6\u05D9\u05D1\u05D5\u05E8, \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD, \u05D1\u05EA\u05D9 \u05D7\u05D5\u05DC\u05D9\u05DD, \u05D5\u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " :\u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05EA\u05D9\u05E7\u05D5\u05DF \u05DB\u05DC \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05D9\u05E0\u05D4\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " ,Water Source, \u05E4\u05E7\u05D0\u05D2', VRF \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " ,\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E0\u05D7\u05E9\u05D5\u05DF, \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7, \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " .\u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D7\u05D3\u05E8\u05D9\u05DD \u05E0\u05E7\u05D9\u05D9\u05DD, \u05D4\u05D7\u05DC\u05E4\u05EA \u05DB\u05DC \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DE\u05D3\u05D7\u05E1\u05D9\u05DD, \u05D4\u05DE\u05E0\u05D5\u05E2\u05D9\u05DD, \u05D5\u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05D1\u05E7\u05E8\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " .\u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E2\u05D9\u05E1\u05E7\u05D9 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05D1\u05D7\u05D5\u05D3\u05E9\u05D9 \u05D4\u05E7\u05D9\u05E5 \u05E2\u05D3 \u05D4\u05E9\u05E2\u05D5\u05EA \u05D4\u05DE\u05D0\u05D5\u05D7\u05E8\u05D5\u05EA \u05E9\u05DC \u05D4\u05D9\u05D5\u05DD, \u05DC\u05E8\u05D1\u05D5\u05EA \u05D9\u05DE\u05D9 \u05E9\u05D9\u05E9\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "ol", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "li", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "li", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "li", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "b", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_257_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](259, BusinessComponent_h6_259_Template, 2, 0, "h6", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "b", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_265_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](267, BusinessComponent_h6_267_Template, 2, 0, "h6", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "b", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "input", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_274_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](276, BusinessComponent_h6_276_Template, 2, 0, "h6", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "input", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_280_listener($event) {
            return ctx.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "b", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_input_ngModelChange_286_listener($event) {
            return ctx.cellNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](288, BusinessComponent_h6_288_Template, 2, 0, "h6", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "textarea", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BusinessComponent_Template_textarea_ngModelChange_293_listener($event) {
            return ctx.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](296, BusinessComponent_h5_296_Template, 2, 0, "h5", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](257);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c2, ctx.firstName && ctx.lastName && ctx.cellNumber && ctx.city))("href", "mailto:alaska19000@gmail.com?Subject=\u05D1\u05E8\u05E6\u05D5\u05E0\u05D9 \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8\n      &body=\n      \u05DC\u05DB\u05D1\u05D5\u05D3 \u05D0\u05DC\u05E1\u05E7\u05D4 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05E9\u05DC\u05D5\u05DD,\n       %0D%0A\u05E9\u05DE\u05D9 : " + ctx.firstName + " " + ctx.lastName + "%0D%0A\u05D0\u05E0\u05D9 \u05D2\u05E8 \u05D1\u05E2\u05D9\u05E8  : " + ctx.city + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.phoneNumber + "%0D%0A\u05DE\u05E1\u05E4\u05E8 \u05D4\u05E0\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D4\u05D5\u05D0 : " + ctx.cellNumber + "%0D%0A\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E9\u05DC\u05D9 \u05D4\u05D9\u05D0 : " + ctx.reason, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstName && ctx.lastName && ctx.city && ctx.cellNumber);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Dir"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n    height: 50px !important;\r\n    top: 50% !important;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%]{\r\n    background-size: contain; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    height: 750px !important; \r\n    width: 100% !important;\r\n  }\r\n  \r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  text-align: center; \r\n  height: 700px; \r\n  padding-top: 12%;\r\n  }\r\n  .example-container[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    height: 300px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n  .example-sidenav-content[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  .example-sidenav[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n  .tip-Style[_ngcontent-%COMP%]{\r\n    border-bottom: 5px solid white;\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    background-image: url('background-tip3.jpg');\r\n  }\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    margin-top: -8px;\r\n    margin-bottom: 25px;\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    width: 100% !important;\r\n    padding-top: 70px; \r\n    height: 800px; \r\n    \r\n    border-bottom: 5px solid white;\r\n  }\r\n  .pic1[_ngcontent-%COMP%]{\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    width: 100% !important;\r\n    height: 300px;  \r\n  }\r\n  .aboutS[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-right: -20px;\r\n  }\r\n  .aboutS1[_ngcontent-%COMP%]{\r\n    display: none;\r\n    margin-right: -20px;\r\n  }\r\n  .img[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n  .img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n  }\r\n  input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    background-color: #45a049;\r\n  }\r\n  .form-Style[_ngcontent-%COMP%]{\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    width: 103% !important;\r\n    height: 100%;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n    margin-top: 0px;\r\n  }\r\n  .whiteColor[_ngcontent-%COMP%]{\r\n    color: white;\r\n  }\r\n  .redColor[_ngcontent-%COMP%]{\r\n    color: red;\r\n  }\r\n  .expert-Moto-Body[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n  .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 20px; \r\n    margin-top: 50px;\r\n  }\r\n  .carousel-Style[_ngcontent-%COMP%]{\r\n    margin-top :-24px; \r\n    border-bottom: 5px solid white; \r\n    margin-right: -19px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n     color: green;\r\n  }\r\n  .text-Right[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n  }\r\n  .about-Header[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n    color: white; \r\n    text-align: right; \r\n    padding-right: 25%;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  }\r\n  .about-Body[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color: white; \r\n    text-align: right; \r\n    padding-right: 45%; \r\n    margin-top: 150px; \r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n    width: 100%; \r\n    height: 200px;\r\n  }\r\n  .displayNone[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  \r\n  .grandient[_ngcontent-%COMP%]{\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n    background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n    color: white;\r\n  }\r\n  .img2[_ngcontent-%COMP%]{\r\n    background-size: cover; \r\n    background-repeat: no-repeat; \r\n    background-position: center;\r\n    background-image: url('background-tip.jpg');\r\n  }\r\n  .pic-AC[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n  .Header-Form-Style[_ngcontent-%COMP%]{\r\n    height: 500px; \r\n    background-color: #529bac; \r\n    border-bottom: 5px solid white; \r\n    margin-right: 0px;\r\n  }\r\n  .card-Style[_ngcontent-%COMP%]{\r\n    margin-left: 30px !important; \r\n    margin-top: 10px; \r\n    margin-right: 30px;\r\n  }\r\n  .margin-Top-10[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n  }\r\n  @media only screen and (max-width: 1560px) {\r\n  \r\n  }\r\n  @media only screen and (max-width: 1400px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n     height: 700px;\r\n    }\r\n  }\r\n  @media only screen and (max-width: 1300px) {\r\n    .inner-Tip[_ngcontent-%COMP%]{\r\n      height: 555px; \r\n    }\r\n    .tip-Image[_ngcontent-%COMP%]{\r\n      height: 210px;\r\n    }\r\n  }\r\n  @media only screen and (max-width: 1200px) {\r\n  \r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 600px;\r\n   }\r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 550px; \r\n  }\r\n  }\r\n  \r\n  @media only screen and (max-width: 992px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n      height: 580px;\r\n     }\r\n     .carousel-inner[_ngcontent-%COMP%] {\r\n      height: 450px !important;\r\n     }\r\n     .tip-Image[_ngcontent-%COMP%]{\r\n      height: 140px;\r\n    }\r\n    .pic-Style[_ngcontent-%COMP%] {\r\n      height: 470px !important;\r\n  }\r\n  }\r\n  @media only screen and (max-width: 850px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n      height: 520px;\r\n     }\r\n     .inner-Tip[_ngcontent-%COMP%]{\r\n      height: 370px !important; \r\n    }\r\n    .tip-Image[_ngcontent-%COMP%]{\r\n      height: 120px;\r\n    }\r\n  \r\n  }\r\n  \r\n  @media only screen and (max-width: 768px) {\r\n  .pic-AC[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .col-md-8[_ngcontent-%COMP%]{\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 100.066667%;\r\n    max-width: 100.066667%;\r\n    padding-left: 40px;\r\n    padding-right: 20px;\r\n  }\r\n  .Header-Form-Style[_ngcontent-%COMP%]{\r\n    height: 760px;\r\n    margin-right: -22px;\r\n  }\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 400px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 155px;\r\n    margin-top: 0px;\r\n  }\r\n  }\r\n  \r\n  \r\n  @media only screen and (max-width: 610px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n      height: 480px;\r\n      margin-top: -23px;\r\n     }\r\n     .displayNone[_ngcontent-%COMP%]{\r\n       display: block;\r\n     }\r\n     .logoStyle[_ngcontent-%COMP%]{\r\n      height: 180px;\r\n      padding-top: 50px;\r\n      padding-left: 20px;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n    margin-top: 30px;\r\n  }\r\n  }\r\n  @media only screen and (max-width: 574px){\r\n  .card-Style[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  .margin-Top-10[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n  }\r\n  @media only screen and (max-width: 530px) {\r\n    .about-Style[_ngcontent-%COMP%]{\r\n      height: 430px;\r\n     }\r\n     .expert-Moto-Body[_ngcontent-%COMP%]{\r\n       font-size: 20px;\r\n     }\r\n     .expert-Moto-Header[_ngcontent-%COMP%]{\r\n      text-align: center; \r\n      padding-right: 0px; \r\n      margin-top: 50px;\r\n    }\r\n    .check-Circle-Moto[_ngcontent-%COMP%]{\r\n      font-size: 30px;\r\n       color: green;\r\n    }\r\n    .tip-Image[_ngcontent-%COMP%] {\r\n      height: 120px;\r\n      margin-top: 20px;\r\n  }\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 315px !important; \r\n  }\r\n  .aboutS1[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n  .aboutS[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  }\r\n  @media only screen and (max-width: 400px) {\r\n    .carousel-inner[_ngcontent-%COMP%] {\r\n      height: 420px;\r\n  }\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    margin-top: -27px;\r\n   }\r\n  .carousel[_ngcontent-%COMP%] {\r\n    margin-right: -22px;\r\n  }\r\n  .carousel-Style[_ngcontent-%COMP%]{\r\n  margin-right: -22px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n  }\r\n  .logoStyle[_ngcontent-%COMP%]{\r\n  height: 170px;\r\n  padding-top: 74px;\r\n  padding-left: 20px;\r\n  }\r\n  .aboutS[_ngcontent-%COMP%]{\r\n    margin-right: -22px;\r\n  }\r\n  }\r\n  @media only screen and (max-width: 350px){\r\n    .tip-Image[_ngcontent-%COMP%] {\r\n        height: 100px;\r\n        margin-top: 30px;\r\n    }\r\n  }\r\n  @media only screen and (max-width: 300px) {\r\n    .tip-Image[_ngcontent-%COMP%] {\r\n        height: 90px;\r\n        margin-top: 30px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MvYnVzaW5lc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixzQkFBc0I7RUFDeEI7RUFDQTs7Ozs7O0tBTUc7RUFDSDtFQUNBLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7RUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRDQUF1RDtFQUN6RDtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxVQUFVO0VBQ1o7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxlQUFlO0tBQ2QsWUFBWTtFQUNmO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxR0FBcUc7RUFDdkc7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUdBQXFHO0VBQ3ZHO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTs7Ozs7S0FLRztFQUNIO0lBQ0UsdUZBQWdFO0lBQWhFLGdFQUFnRTtJQUNoRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJDQUFzRDtFQUN4RDtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBRUE7O0VBRUE7RUFHQTtJQUNFO0tBQ0MsYUFBYTtJQUNkO0VBQ0Y7RUFFQTtJQUNFO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7RUFDRjtFQUVBOztFQUVBO0lBQ0UsYUFBYTtHQUNkO0dBQ0E7SUFDQyxhQUFhO0VBQ2Y7RUFDQTtFQUVBLG1EQUFtRDtFQUNuRDtJQUNFO01BQ0UsYUFBYTtLQUNkO0tBQ0E7TUFDQyx3QkFBd0I7S0FDekI7S0FDQTtNQUNDLGFBQWE7SUFDZjtJQUNBO01BQ0Usd0JBQXdCO0VBQzVCO0VBQ0E7RUFFQTtJQUNFO01BQ0UsYUFBYTtLQUNkO0tBQ0E7TUFDQyx3QkFBd0I7SUFDMUI7SUFDQTtNQUNFLGFBQWE7SUFDZjs7RUFFRjtFQUNBLHFEQUFxRDtFQUNyRDtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxtQkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7RUFFQTs7OztLQUlHO0VBRUgsb0VBQW9FO0VBQ3BFO0lBQ0U7TUFDRSxhQUFhO01BQ2IsaUJBQWlCO0tBQ2xCO0tBQ0E7T0FDRSxjQUFjO0tBQ2hCO0tBQ0E7TUFDQyxhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLGtCQUFrQjtFQUN0QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtFQUNBO0VBQ0E7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7RUFFQTtJQUNFO01BQ0UsYUFBYTtLQUNkO0tBQ0E7T0FDRSxlQUFlO0tBQ2pCO0tBQ0E7TUFDQyxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZUFBZTtPQUNkLFlBQVk7SUFDZjtJQUNBO01BQ0UsYUFBYTtNQUNiLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtFQUVBO0lBQ0U7TUFDRSxhQUFhO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0VBQ0EsbUJBQW1CO0VBQ25CO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtFQUNBLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtFQUVBO0lBQ0U7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCO0VBQ0Y7RUFFQTtJQUNFO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYnVzaW5lc3MvYnVzaW5lc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250cm9sLW5leHQsIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGljLVN0eWxle1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3NTBweCAhaW1wb3J0YW50OyBcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIC50aXAtU3R5bGV7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9ICovXHJcbiAgLmlubmVyLVRpcHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgaGVpZ2h0OiA3MDBweDsgXHJcbiAgcGFkZGluZy10b3A6IDEyJTtcclxuICB9XHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIC50aXAtU3R5bGV7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLXRpcDMuanBnKTtcclxuICB9XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4OyBcclxuICAgIGhlaWdodDogODAwcHg7IFxyXG4gICAgLyogLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMmM1YWMzOyAgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgLnBpYzF7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzAwcHg7ICBcclxuICB9XHJcbiAgLmFib3V0U3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxuICB9XHJcbiAgLmFib3V0UzF7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmltZyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAuaW1nIDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbiAgfVxyXG4gIC5mb3JtLVN0eWxle1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDMlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICAud2hpdGVDb2xvcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnJlZENvbG9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgLmV4cGVydC1Nb3RvLUJvZHl7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIC5leHBlcnQtTW90by1IZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDsgXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtU3R5bGV7XHJcbiAgICBtYXJnaW4tdG9wIDotMjRweDsgXHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTlweDtcclxuICB9XHJcbiAgLmNoZWNrLUNpcmNsZS1Nb3Rve1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgLnRleHQtUmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLmFib3V0LUhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XHJcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmFib3V0LUJvZHl7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG4gICAgcGFkZGluZy1yaWdodDogNDUlOyBcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4OyBcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAubG9nb1N0eWxle1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgLmRpc3BsYXlOb25le1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLyogLmJvZHlUZXh0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5ib2R5VGV4dCA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XHJcbiAgfSAqL1xyXG4gIC5ncmFuZGllbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmYzNDUzIDAlLCAjNGM1NThiIDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuaW1nMntcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtdGlwLmpwZyk7XHJcbiAgfVxyXG4gIC5waWMtQUN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLkhlYWRlci1Gb3JtLVN0eWxle1xyXG4gICAgaGVpZ2h0OiA1MDBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI5YmFjOyBcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLmNhcmQtU3R5bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweCAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAubWFyZ2luLVRvcC0xMHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NjBweCkge1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgLmFib3V0LVN0eWxle1xyXG4gICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAuaW5uZXItVGlwe1xyXG4gICAgICBoZWlnaHQ6IDU1NXB4OyBcclxuICAgIH1cclxuICAgIC50aXAtSW1hZ2V7XHJcbiAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgXHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgfVxyXG4gICAuaW5uZXItVGlwe1xyXG4gICAgaGVpZ2h0OiA1NTBweDsgXHJcbiAgfVxyXG4gIH1cclxuICBcclxuICAvKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmFib3V0LVN0eWxle1xyXG4gICAgICBoZWlnaHQ6IDU4MHB4O1xyXG4gICAgIH1cclxuICAgICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgICBoZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgfVxyXG4gICAgIC50aXAtSW1hZ2V7XHJcbiAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICAucGljLVN0eWxlIHtcclxuICAgICAgaGVpZ2h0OiA0NzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB9IFxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgIC5hYm91dC1TdHlsZXtcclxuICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICB9XHJcbiAgICAgLmlubmVyLVRpcHtcclxuICAgICAgaGVpZ2h0OiAzNzBweCAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICAgIC50aXAtSW1hZ2V7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIC8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucGljLUFDe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmNvbC1tZC04e1xyXG4gICAgZmxleDogMCAwIDEwMC4wNjY2NjclO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAuMDY2NjY3JTtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5IZWFkZXItRm9ybS1TdHlsZXtcclxuICAgIGhlaWdodDogNzYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG4gIH1cclxuICAuaW5uZXItVGlwe1xyXG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICB9XHJcbiAgXHJcbiAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnRpcC1JbWFnZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxuICB9ICovXHJcbiAgXHJcbiAgLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xyXG4gICAgLmFib3V0LVN0eWxle1xyXG4gICAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjNweDtcclxuICAgICB9XHJcbiAgICAgLmRpc3BsYXlOb25le1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgfVxyXG4gICAgIC5sb2dvU3R5bGV7XHJcbiAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC50aXAtSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc0cHgpe1xyXG4gIC5jYXJkLVN0eWxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5tYXJnaW4tVG9wLTEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAgIC5hYm91dC1TdHlsZXtcclxuICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgICB9XHJcbiAgICAgLmV4cGVydC1Nb3RvLUJvZHl7XHJcbiAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgfVxyXG4gICAgIC5leHBlcnQtTW90by1IZWFkZXJ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDsgXHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2stQ2lyY2xlLU1vdG97XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICAgIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuaW5uZXItVGlwe1xyXG4gICAgaGVpZ2h0OiAzMTVweCAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgLmFib3V0UzF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmFib3V0U3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gIH1cclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjdweDtcclxuICAgfVxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtU3R5bGV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuICB9XHJcbiAgLnBpYy1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5sb2dvU3R5bGV7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBwYWRkaW5nLXRvcDogNzRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hYm91dFN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG4gIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgICAudGlwLUltYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAgIC50aXAtSW1hZ2Uge1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"]
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PrivateComponent_h6_251_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h6_259_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h6_268_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05E9\u05DD \u05E2\u05D9\u05E8 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h6_280_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D9\u05E9 \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivateComponent_h5_288_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u05E9\u05DC\u05D7 \u05D1\u05E7\u05E9\u05D4");

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
      }

      _createClass(PrivateComponent, [{
        key: "sendMeMail",
        value: function sendMeMail() {
          this.sendMAil = 1;
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
      decls: 289,
      vars: 47,
      consts: [[1, "displayNone"], [1, "navbar-brand"], ["src", "../assets/MainLogo.png", 1, "logoStyle"], ["id", "about", 1, "row", "aboutS"], ["src", "../../assets/about4.jpg", 1, "about-Style"], ["id", "about", 1, "row", "aboutS1"], ["src", "../../assets/about5.jpg", 1, "about-Style"], ["id", "gallery", "data-ride", "carousel", 1, "row", "carousel", "slide", "carousel-Style"], [1, "carousel-indicators"], ["data-target", "#gallery", "data-slide-to", "0", 1, "active"], ["data-target", "#gallery", "data-slide-to", "1"], ["data-target", "#gallery", "data-slide-to", "2"], ["data-target", "#gallery", "data-slide-to", "3"], ["data-target", "#gallery", "data-slide-to", "4"], ["data-target", "#gallery", "data-slide-to", "5"], ["data-target", "#gallery", "data-slide-to", "6"], ["data-target", "#gallery", "data-slide-to", "7"], ["data-target", "#gallery", "data-slide-to", "8"], ["data-target", "#gallery", "data-slide-to", "9"], ["data-target", "#gallery", "data-slide-to", "10"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/work1a.jpg", "alt", "...", 1, "pic-Style"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "../../assets/work2.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work3.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work4c.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work5a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work6a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work7a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work8a.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work9.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work10.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["src", "../../assets/work11.jpg", "alt", "...", 1, "d-block", "w-100", "pic-Style"], ["href", "#gallery", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "white", "font-size", "30px"], [1, "sr-only"], ["href", "#gallery", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "white", "font-size", "30px"], ["id", "proffesional", 1, "expert-Moto-Header"], [1, "expert-Moto-Body"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "check-Circle-Moto"], [1, "card-group", 2, "margin-top", "100px"], [1, "card", 2, "margin-left", "30px", "margin-top", "10px"], [1, "img"], ["src", "../../assets/gallery/clean.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-body", "grandient"], [1, "card-title", 2, "text-align", "center"], [1, "card-text", "text-Right"], ["src", "../../assets/gallery/cleanAir.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card", "card-Style"], ["src", "../../assets/gallery/nahshon2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-group", "margin-top-10"], ["src", "../../assets/gallery/package2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/seperated2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/ashan2.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], [1, "card-group", 2, "margin-bottom", "100px"], ["src", "../../assets/gallery/VRF.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/waterSource.gif", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["src", "../../assets/gallery/center.jpg", "alt", "...", 1, "card-img-top", 2, "height", "250px"], ["id", "privateSector", 1, "container-fluid", "expert-Moto-Header", 2, "margin-bottom", "100px"], [1, "text-Right", 2, "color", "blue"], ["aria-hidden", "true", 1, "fa", "fa-home", 2, "font-size", "40px", "color", "blue"], [1, "text-Right"], ["id", "tips", "data-ride", "carousel", 1, "row", "carousel", "slide", "tip-Style"], ["data-target", "#tips", "data-slide-to", "0", 1, "active"], ["data-target", "#tips", "data-slide-to", "1"], ["data-target", "#tips", "data-slide-to", "2"], ["data-target", "#tips", "data-slide-to", "3"], ["data-target", "#tips", "data-slide-to", "4"], [1, "carousel-inner", "inner-Tip"], ["src", "../../assets/tip11.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip22.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip33.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip44.png", "alt", "...", 1, "tip-Image"], ["src", "../../assets/tip55.png", "alt", "...", 1, "tip-Image"], ["href", "#tips", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left", 2, "color", "black", "font-size", "30px"], ["href", "#tips", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right", 2, "color", "black", "font-size", "30px"], ["id", "contact", 1, "row", "Header-Form-Style"], [1, "col-md-4", "pic-AC", 2, "background-color", "black"], ["src", "../../assets/Form-AC.jpg", 1, "form-Style"], [1, "col-md-8"], [1, "form-row", 2, "padding-top", "30px"], [1, "col-md-6", "mb-3"], [2, "color", "white", "float", "right"], [2, "color", "red"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "name", "lastname", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [2, "padding-top", "5px", "position", "absolute", 3, "ngClass"], [4, "ngIf"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "name", "firstName", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-top", "30px"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DD \u05E2\u05D9\u05E8", "name", "city", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-3", "mb-3"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF", "name", "phoneNumber", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["dir", "rtl", "type", "text", "value", "", "placeholder", "\u05D4\u05DB\u05E0\u05E1 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "name", "cellNumber", "required", "", 1, "form-control", "is-valid", 2, "box-shadow", "0 0 12px 2px black", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-md-12", "mb-3"], ["dir", "rtl", "type", "text", "value", "\u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4", "name", "reason", "required", "", 1, "form-control", 2, "box-shadow", "0 0 12px 2px black", 3, "ngModel", "ngModelChange"], ["type", "submit", 2, "float", "right", "box-shadow", "0px -4px 5px 1px black", 3, "ngClass", "href"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Fourth slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u05D4\u05D4\u05EA\u05DE\u05D7\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 - \u05D4\u05E8\u05D5\u05D5\u05D7 \u05E9\u05DC\u05DA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u05D0\u05D5\u05D5\u05D9\u05E8 \u05E0\u05E7\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " \u05DE\u05D6\u05D2\u05DF \u05D0\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05DD \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05D0\u05D4\u05D5\u05D1 \u05DE\u05D0\u05D5\u05D3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD , \u05E2\u05D5\u05D1\u05E9 , \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D0\u05D9\u05DD \u05E2\u05DC \u05EA\u05D7\u05DC\u05D5\u05D0\u05D5\u05EA \u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E0\u05D5 \u05DE\u05D9\u05D9\u05D7\u05E1\u05D9\u05DD \u05D0\u05D5\u05EA\u05DF \u05DC\u05DE\u05D6\u05D2\u05DF. \u05D0\u05E1\u05D8\u05DE\u05D4, \u05E9\u05D9\u05E2\u05D5\u05DC \u05DB\u05E8\u05D5\u05E0\u05D9, \u05E0\u05D6\u05DC\u05EA \u05DB\u05E8\u05D5\u05E0\u05D9\u05EA, \u05DB\u05D0\u05D1\u05D9 \u05E8\u05D0\u05E9, \u05D2\u05D9\u05E8\u05D5\u05D9 \u05D5\u05D2\u05D9\u05E8\u05D5\u05D3 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D5\u05EA\u05D5\u05E4\u05E2\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05D4\u05D9\u05D5\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC \u05E0\u05E9\u05D9\u05DE\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05D6\u05D2 \u05D5\u05DE\u05D6\u05D5\u05D4\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E7\u05D1\u05D5\u05E2. \u05D7\u05D9\u05D8\u05D5\u05D9 \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05E9\u05DC \u05D4\u05DE\u05D6\u05D2\u05DF: \u05D7\u05DC\u05E7 \u05E0\u05D9\u05DB\u05E8 \u05DE\u05D4\u05E8\u05D9\u05D7\u05D5\u05EA \u05D4\u05E8\u05E2\u05D9\u05DD \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D6\u05D4 \u05D4\u05E0\u05D5 \u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC \u05D7\u05D9\u05D9\u05D3\u05E7\u05D9\u05DD, \u05D1\u05E7\u05D8\u05E8\u05D9\u05D5\u05EA, \u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05D5\u05D1\u05E9. \u05DE\u05D2\u05E9 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05E0\u05D5 \u05D0\u05D6\u05D5\u05E8 \u05E8\u05D8\u05D5\u05D1 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DE\u05D0\u05D7\u05E8 \u05D5\u05DE\u05D9\u05D9\u05DD \u05D4\u05E0\u05D5\u05D8\u05E4\u05D9\u05DD \u05DE\u05E1\u05D5\u05DC\u05DC\u05EA \u05D4\u05DE\u05D6\u05D2\u05DF \u05E0\u05D9\u05E7\u05D5\u05D5\u05D9\u05DD \u05D1\u05D5 \u05D5\u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05DE\u05E0\u05D5 \u05D0\u05DC \u05E6\u05D9\u05E0\u05D5\u05E8 \u05D4\u05E0\u05D9\u05E7\u05D5\u05D6. \u05DE\u05E9\u05D5\u05DD \u05DB\u05DA \u2013 \u05DB\u05DC \u05EA\u05DB\u05E9\u05D9\u05E8 \u05E0\u05E9\u05D8\u05E3 \u05DE\u05DE\u05E0\u05D5 \u05D1\u05DE\u05D5\u05E7\u05D3\u05DD \u05D0\u05D5 \u05D1\u05DE\u05D0\u05D5\u05D7\u05E8. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D9\u05E2\u05D9\u05DC\u05D4 \u05D4\u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DE\u05DF \u05D4\u05D7\u05DC\u05DC \u05DC\u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E6\u05D7 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05DC\u05D7\u05DC\u05DC. \u05DE\u05E2\u05E8\u05DB\u05EA \u05D0\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D7\u05E9\u05D5\u05D1\u05D4 \u05D5\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05E9\u05E0\u05D9 \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05E2\u05D5\u05E6\u05DE\u05EA\u05D9\u05D9\u05DD (\u05D0\u05D7\u05D3 \u05DC\u05D9\u05E0\u05D9\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05DE\u05D4\u05D7\u05DC\u05DC \u05D5\u05E9\u05E0\u05D9 \u05DC\u05D0\u05E1\u05E4\u05E7\u05EA \u05D0\u05D5\u05D9\u05E8 \u05E6\u05D7 \u05DC\u05D7\u05DC\u05DC), \u05DE\u05D7\u05DC\u05D9\u05E3 \u05D7\u05D5\u05DD \u05D1\u05E2\u05DC \u05D4\u05E4\u05E8\u05D3\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D9\u05DF \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D4\u05E0\u05E4\u05DC\u05D8 \u05DC\u05D0\u05D5\u05D9\u05E8 \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7 \u05D5\u05DE\u05E1\u05E0\u05DF \u05D7\u05DC\u05E7\u05D9\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D5\u05E0\u05E2 \u05D0\u05EA \u05DB\u05E0\u05D9\u05E1\u05EA\u05DD \u05DC\u05D7\u05DC\u05DC \u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05E4\u05E0\u05D9\u05DD \u05D5\u05D7\u05D5\u05E5, \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05EA\u05D1\u05D7\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA \u05D1\u05D9\u05DF \u05DE\u05E6\u05D1 \u05D4\u05D7\u05DC\u05E4\u05EA \u05D7\u05D5\u05DD \u05D0\u05D5 \u05DE\u05E6\u05D1 \u05D0\u05D9\u05D5\u05D5\u05E8\u05D5\u05E8 \u05D9\u05E9\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E0\u05D7\u05E9\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u05D9\u05D7\u05D9\u05D3\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA (\u05DE\u05D0\u05D9\u05D9\u05D3) \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1\u05EA \u05E2\u05DC \u05DE\u05D9\u05DD (\u05E6'\u05D9\u05DC\u05E8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E1\u05D5\u05DC\u05DC\u05D4, \u05D3\u05E8\u05DB\u05D4 \u05D6\u05D5\u05E8\u05DE\u05D9\u05DD \u05DE\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD / \u05E7\u05E8\u05D9\u05DD \u05D5\u05DE\u05E4\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05E1\u05D5\u05DC\u05DC\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DE\u05D1\u05E6\u05E2 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2. \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05D1\u05D5\u05D0 \u05D1\u05DE\u05E1\u05E4\u05E8 \u05EA\u05E6\u05D5\u05E8\u05D5\u05EA \u05D5\u05D2\u05D3\u05DC\u05D9\u05DD (\u05D2\u05DC\u05D5\u05D9 / \u05E0\u05E1\u05EA\u05E8, \u05E2\u05D9\u05DC\u05D9 / \u05E8\u05E6\u05E4\u05EA\u05D9 / \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E4\u05E7'\u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " \u05E4\u05E7\u05D2' \u05D4\u05D9\u05E0\u05D5 \u05D4\u05DB\u05D9\u05E0\u05D5\u05D9 \u05D4\u05DE\u05E7\u05D5\u05D1\u05DC \u05D1\u05EA\u05D7\u05D5\u05DD \u05DC\u05D9\u05D7\u05D9\u05D3\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D7\u05D5\u05D3\u05D4 \u05D1\u05D4\u05EA\u05E4\u05E9\u05D8\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D4 .DX \u05D9\u05D7\u05D9\u05D3\u05EA \u201C\u05E4\u05E7\u05D2'\u201D \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05E8\u05DB\u05D9\u05D1\u05D9 \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D1\u05EA\u05D5\u05DA \u05DE\u05E1\u05D2\u05E8\u05EA \u05D0\u05D7\u05EA, \u05D1\u05D4 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05E2\u05D2\u05DC \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DD (\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E2\u05D1\u05D4 \u05DE\u05D0\u05D9\u05D9\u05D3) \u05D5\u05DE\u05E2\u05E8\u05DB\u05EA \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA (\u05DE\u05E1\u05E0\u05E0\u05D9\u05DD/ \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD). \u05D4\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u201C\u05D0\u05E8\u05D5\u05D6\u05D9\u05DD\u201D \u05D1\u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA \u05D4\u05EA\u05E7\u05D1\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D0\u05DC\u05D5 \u05D4\u05E9\u05DD .Package \u05E0\u05D9\u05EA\u05DF \u05DC\u05E1\u05D5\u05D5\u05D2 \u05D0\u05EA \u05D9\u05D7\u05D9\u05D3\u05EA \u05D4\u05E4\u05E7\u05D2\u2019 \u05DC\u05D9\u05E2\u05D3 \u05DB\u05DC\u05DC\u05D9 \u05E9\u05DC \u05D0\u05E1\u05E4\u05E7\u05EA \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 (\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D0\u05D5 \u05D7\u05D9\u05DE\u05D5\u05DD) \u05D0\u05D5 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D9\u05D9\u05E2\u05D5\u05D3 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05D8\u05D9\u05E4\u05D5\u05DC \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05D0\u05D5 \u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D5\u05D9\u05E8 \u05E6\u05D7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " \u05DE\u05D6\u05D2\u05DF \u05D1\u05D5 \u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DE\u05E4\u05D5\u05E6\u05DC\u05D9\u05DD \u05DC\u05E9\u05E0\u05D9 \u05DE\u05D0\u05E8\u05D6\u05D9\u05DD: \u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05E7\u05E8, \u05D5\u05DE\u05D0\u05E8\u05D6 \u05D0\u05D7\u05D3 \u05DC\u05E6\u05D3 \u05D4\u05D7\u05DD. \u05D1\u05E6\u05D3 \u05D4\u05E7\u05E8 \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9 \u05D4\u05D4\u05E4\u05E2\u05DC\u05D4, \u05DE\u05E7\u05E8\u05DF \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05D5\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8. \u05D5\u05D1\u05E6\u05D3 \u05D4\u05D7\u05DD \u05DE\u05E6\u05D5\u05D9\u05D9\u05DD \u05D4\u05DE\u05D3\u05D7\u05E1, \u05DE\u05E7\u05E8\u05DF \u05D4\u05D7\u05D9\u05DE\u05D5\u05DD \u05D5\u05D4\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05D4\u05E0\u05D5\u05E1\u05E3. \u05D1\u05D9\u05DF \u05E9\u05E0\u05D9 \u05D4\u05DE\u05D0\u05E8\u05D6\u05D9\u05DD \u05D9\u05E9 \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DB\u05E4\u05D5\u05DC \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC \u05D0\u05EA \u05D4\u05D2\u05D6 \u05D4\u05E7\u05E8 \u05D5\u05DE\u05D7\u05D6\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DD, \u05DB\u05D1\u05DC \u05D7\u05E9\u05DE\u05DC\u05D9 \u05D5\u05DB\u05DF \u05E6\u05D9\u05E0\u05D5\u05E8 \u05DC\u05E0\u05D9\u05E7\u05D5\u05D6 \u05D4\u05DE\u05D9\u05DD \u05E9\u05E0\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05D4\u05EA\u05E2\u05D1\u05D5\u05EA \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E7\u05E8. \u05DE\u05D6\u05D2\u05DF \u05D6\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D1\u05E2\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E8\u05D1\u05D4, \u05DB\u05D0\u05E9\u05E8 \u05D2\u05D5\u05E8\u05DD \u05D4\u05E8\u05E2\u05E9 \u05D4\u05E2\u05D9\u05E7\u05E8\u05D9 \u05E0\u05DE\u05E6\u05D0 \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E1\u05D5\u05D2 \u05D6\u05D4 \u05DE\u05E1\u05D5\u05D2\u05DC\u05D9\u05DD \u05DC\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D2\u05DD \u05D1\u05E9\u05D8\u05D7\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DB\u05DE\u05D5 \u05E7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD \u05D5\u05D1\u05E0\u05D9\u05D9\u05E0\u05D9 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " \u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05DC\u05D5\u05E7\u05D7\u05D9\u05DD \u05E2\u05DC \u05E2\u05E6\u05DE\u05DD \u05D0\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05D7\u05D9\u05D5\u05E0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05E9\u05DC \u05E4\u05D9\u05E0\u05D5\u05D9 \u05E2\u05E9\u05DF \u05D5\u05D7\u05D5\u05DD, \u05DB\u05DC\u05D5\u05DE\u05E8, \u05D4\u05D5\u05E6\u05D0\u05D4 \u05E9\u05DC\u05D4\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05D1\u05E0\u05D4. \u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD \u05D0\u05DC\u05D4 \u05D9\u05E4\u05E2\u05DC\u05D5 \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05E9\u05D4\u05DD \u05D9\u05D6\u05D4\u05D5 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05E9\u05DC \u05E2\u05E9\u05DF \u05D1\u05D7\u05DC\u05DC \u05D1\u05D5 \u05D4\u05DD \u05DE\u05D5\u05E6\u05D1\u05D9\u05DD \u2013 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D2\u05DC\u05D0\u05D9 \u05D4\u05E2\u05E9\u05DF \u05D4\u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05D7\u05DC\u05E7 \u05DE\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u2013 \u05D5\u05D1\u05DB\u05DA \u05D9\u05DE\u05E0\u05E2\u05D5 \u05DE\u05D4\u05E9\u05E8\u05D9\u05E4\u05D4 \u05DC\u05D4\u05EA\u05E4\u05E9\u05D8 \u05D5\u05DC\u05D4\u05EA\u05E4\u05EA\u05D7 \u05DC\u05DE\u05D9\u05DE\u05D3\u05D9 \u05E2\u05E0\u05E7. \u05D4\u05DE\u05E4\u05D5\u05D7\u05D9\u05DD \u05D7\u05D9\u05D5\u05E0\u05D9\u05D9\u05DD \u05D1\u05DB\u05DC \u05E1\u05D5\u05D2 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9 \u05DB\u05D0\u05E9\u05E8 \u05D1\u05DC\u05D0 \u05DE\u05E2\u05D8 \u05DE\u05E7\u05E8\u05D9\u05DD \u05D9\u05E9 \u05D7\u05D5\u05D1\u05D4 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05D5\u05EA\u05DD \u05DB\u05EA\u05E0\u05D0\u05D9 \u05DC\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D0\u05D5 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E8\u05D9\u05E9\u05D9\u05D5\u05DF \u05E2\u05E1\u05E7. \u05D0\u05D7\u05EA \u05D4\u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D4\u05E7\u05D5\u05EA \u05DC\u05DB\u05DA \u05D4\u05D9\u05D0 \u05D7\u05E0\u05D9\u05D5\u05E0\u05D9\u05DD, \u05DB\u05D0\u05E9\u05E8 \u05DC\u05D0 \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05DB\u05D9\u05D5\u05DD \u05D7\u05E0\u05D9\u05D5\u05DF \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC \u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05E6\u05D5\u05D9\u05D3 \u05D1\u05DE\u05E4\u05D5\u05D7\u05D9 \u05E2\u05E9\u05DF \u05EA\u05E2\u05E9\u05D9\u05D9\u05EA\u05D9\u05D9\u05DD. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "VRF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " (\u05E0\u05E4\u05D7 \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 - VRF = Variant Refrigerant Flow) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D5\u05D0 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D9\u05E0\u05D5\u05E8\u05D5\u05EA \u05D3\u05E7\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05D9\u05D9\u05EA\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D4\u05E0\u05DE\u05D9\u05DA \u05EA\u05E7\u05E8\u05D5\u05EA \u05D0\u05D5 \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05EA\u05E2\u05DC\u05D5\u05EA \u05E7\u05D9\u05E8\u05D5\u05E8. \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05E8\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D5\u05DE\u05D2\u05D9\u05D1\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E8\u05E6\u05D9\u05E3, \u05DB\u05DA \u05E9\u05E0\u05D5\u05E6\u05E8\u05EA \u05E8\u05DE\u05EA \u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05D0\u05D7\u05D9\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05D1\u05D4. \u05D4\u05DE\u05D3\u05D7\u05E1 \u05E2\u05E6\u05DE\u05D5 \u05E2\u05D5\u05D1\u05D3 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \"\u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8\", \u05E9\u05D6\u05D4 \u05D0\u05D5\u05DE\u05E8 \u05DE\u05D3\u05D7\u05E1 \u05D1\u05EA\u05E4\u05D5\u05E7\u05D5\u05EA \u05DE\u05E9\u05EA\u05E0\u05D5\u05EA\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Water Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " \u05DE\u05EA\u05E7\u05DF \u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05D9\u05DD - \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8, \u05E7\u05D5\u05DC\u05D8 \u05D0\u05EA \u05D4\u05D7\u05D5\u05DD \u05DE\u05D4\u05DE\u05D9\u05DD \u05D5\u05DE\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05D0\u05DC \u05DE\u05D7\u05D5\u05E5 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D7\u05D9\u05DC\u05D5\u05E4\u05D9 \u05D0\u05E0\u05E8\u05D2\u05D9\u05D4: \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05D0\u05D5\u05DC\u05E5 \u05D6\u05D5\u05E8\u05DD \u05D3\u05E8\u05DA \u05D7\u05D5\u05DE\u05E8 \u05DE\u05D9\u05DC\u05D5\u05D9 - \u05D5\u05DB\u05D0\u05E9\u05E8 \u05D4\u05D5\u05D0 \u05E4\u05D5\u05D2\u05E9 \u05E8\u05E1\u05D9\u05E1\u05D9 \u05DE\u05D9\u05DD, \u05D4\u05DE\u05D9\u05DD \u05DE\u05EA\u05D0\u05D9\u05D9\u05D3\u05D9\u05DD \u05D5\u05D0\u05E0\u05E8\u05D2\u05D9\u05EA \u05D4\u05D0\u05D9\u05D5\u05D3 \u05E0\u05DC\u05E7\u05D7\u05EA \u05DE\u05D4\u05D0\u05E0\u05E8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 , \u05D1\u05E4\u05D5\u05E2\u05DC \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05D2\u05D5\u05E8\u05DD \u05DC\u05D4\u05D5\u05E8\u05D3\u05EA \u05D4\u05D8\u05DE\u05E4\u05E8\u05D8\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D9 \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8. \u05DE\u05DB\u05D0\u05DF \u05E0\u05D5\u05D1\u05E2 \u05E9\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA\u05D5 \u05E9\u05DC \u05DE\u05D2\u05D3\u05DC \u05D4\u05E7\u05D9\u05E8\u05D5\u05E8 \u05DE\u05E9\u05EA\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D5\u05E5 \u05E9\u05DC \u05D4\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h6", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " \u05D9\u05D9\u05D7\u05D5\u05D3\u05D5 \u05E9\u05DC \u05DE\u05D6\u05D2\u05DF \u05DE\u05D9\u05E0\u05D9 \u05DE\u05E8\u05DB\u05D6\u05D9 \u05D4\u05D5\u05D0 \u05D1\u05DB\u05DA \u05E9\u05D6\u05D5 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05DD \u05DE\u05E0\u05D5\u05E2 (\u05DE\u05E2\u05D1\u05D4) \u05D0\u05D7\u05D3 \u05D1\u05DC\u05D1\u05D3 \u05D0\u05E9\u05E8 \u05DE\u05D6\u05E8\u05D9\u05DE\u05D4 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DC\u05DB\u05DC \u05D4\u05D1\u05D9\u05EA \u05D3\u05E8\u05DA \u05E6\u05E0\u05E8\u05EA \u05D9\u05D9\u05E2\u05D5\u05D3\u05D9\u05EA. \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05E4\u05D6\u05E8 \u05DE\u05D6\u05D2\u05E0\u05D9\u05DD \u05E8\u05D1\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05E7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D1\u05D9\u05EA, \u05D9\u05E9 \u05E8\u05E7 \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D0\u05D7\u05EA. \u05D1\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D4\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E6\u05D5\u05D9\u05D3\u05EA \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D9\u05EA \u05D0\u05D9\u05E0\u05D5\u05D5\u05E8\u05D8\u05E8, \u05D4\u05D9\u05D0 \u05DE\u05E1\u05D5\u05D2\u05DC\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05D0\u05EA \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05DC\u05E2\u05D5\u05DE\u05E1 \u05D4\u05D7\u05D5\u05DD \u05D1\u05DB\u05DC \u05D7\u05D3\u05E8, \u05D5\u05D1\u05DB\u05DA \u05D7\u05D5\u05E1\u05DB\u05EA \u05D7\u05E9\u05DE\u05DC . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h2", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "b", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ": \u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D0\u05D7\u05D6\u05E7\u05D4 \u05DC\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h4", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " ,\u05D7\u05D1\u05E8\u05EA\u05E0\u05D5 \u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D0\u05D7\u05D6\u05E7\u05D4 \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D1\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " ,\u05D0\u05E0\u05D5 \u05E0\u05D5\u05EA\u05E0\u05D9\u05DD \u05DE\u05E2\u05E0\u05D4 \u05DC\u05DB\u05DC \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05E9\u05E8 \u05E7\u05D9\u05D9\u05DE\u05D5\u05EA \u05D1\u05E9\u05D5\u05E7 \u05E2\"\u05D9 \u05D7\u05D8\u05D9\u05D1\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D0\u05E9\u05E8 \u05E4\u05E8\u05D5\u05E1\u05D4 \u05D1\u05DB\u05DC \u05D0\u05D9\u05D6\u05D5\u05E8 \u05D4\u05E6\u05E4\u05D5\u05DF, \u05D4\u05E9\u05E8\u05D5\u05DF, \u05D5\u05D4\u05DE\u05E8\u05DB\u05D6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\n\u05D5\u05DE\u05E1\u05E4\u05E7\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA \u05EA\u05D9\u05E7\u05D5\u05E0\u05D9\u05DD \u05DE\u05D4\u05D9\u05E8 \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D4\u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05D3 24 \u05E9\u05E2\u05D5\u05EA \u05DE\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05EA\u05E7\u05DC\u05D4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "ol", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "li", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "li", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "li", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "b", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_249_listener($event) {
            return ctx.lastName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](251, PrivateComponent_h6_251_Template, 2, 0, "h6", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "b", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_257_listener($event) {
            return ctx.firstName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](259, PrivateComponent_h6_259_Template, 2, 0, "h6", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " \u05E9\u05DD \u05D4\u05E2\u05D9\u05E8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "b", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "input", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_266_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](268, PrivateComponent_h6_268_Template, 2, 0, "h6", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "input", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_272_listener($event) {
            return ctx.phoneNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "b", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_input_ngModelChange_278_listener($event) {
            return ctx.cellNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](280, PrivateComponent_h6_280_Template, 2, 0, "h6", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h5", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " \u05E1\u05D9\u05D1\u05EA \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "textarea", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrivateComponent_Template_textarea_ngModelChange_285_listener($event) {
            return ctx.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](288, PrivateComponent_h5_288_Template, 2, 0, "h5", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](249);

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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Dir"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  height: 50px !important;\r\n  top: 50% !important;\r\n}\r\n.pic-Style[_ngcontent-%COMP%]{\r\n  background-size: contain; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  height: 750px !important; \r\n  width: 100% !important;\r\n}\r\n\r\n.inner-Tip[_ngcontent-%COMP%]{\r\ntext-align: center; \r\ntext-align: center; \r\nheight: 700px; \r\npadding-top: 12%;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n.example-sidenav-content[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n.tip-Style[_ngcontent-%COMP%]{\r\n  border-bottom: 5px solid white;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip3.jpg');\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -8px;\r\n  margin-bottom: 25px;\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  padding-top: 70px; \r\n  height: 800px; \r\n  \r\n  border-bottom: 5px solid white;\r\n}\r\n.pic1[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 100% !important;\r\n  height: 300px;  \r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: -20px;\r\n}\r\n.aboutS1[_ngcontent-%COMP%]{\r\n  display: none;\r\n  margin-right: -20px;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.img[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\ninput[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\n.form-Style[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  width: 103% !important;\r\n  height: 100%;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 250px;\r\n  margin-top: 0px;\r\n}\r\n.whiteColor[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.redColor[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n.expert-Moto-Body[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.expert-Moto-Header[_ngcontent-%COMP%]{\r\n  text-align: center; \r\n  padding-right: 20px; \r\n  margin-top: 50px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\n  margin-top :-24px; \r\n  border-bottom: 5px solid white; \r\n  margin-right: -19px;\r\n}\r\n.check-Circle-Moto[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n   color: green;\r\n}\r\n.text-Right[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n}\r\n.about-Header[_ngcontent-%COMP%]{\r\n  font-size: 33px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 25%;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.about-Body[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: white; \r\n  text-align: right; \r\n  padding-right: 45%; \r\n  margin-top: 150px; \r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\n.displayNone[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.grandient[_ngcontent-%COMP%]{\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#2f3453), to(#4c558b));\r\n  background: linear-gradient(to bottom, #2f3453 0%, #4c558b 100%);\r\n  color: white;\r\n}\r\n.img2[_ngcontent-%COMP%]{\r\n  background-size: cover; \r\n  background-repeat: no-repeat; \r\n  background-position: center;\r\n  background-image: url('background-tip.jpg');\r\n}\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 500px; \r\n  background-color: #529bac; \r\n  border-bottom: 5px solid white; \r\n  margin-right: 0px;\r\n}\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-left: 30px !important; \r\n  margin-top: 10px; \r\n  margin-right: 30px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n@media only screen and (max-width: 1560px) {\r\n\r\n}\r\n@media only screen and (max-width: 1400px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n   height: 700px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1300px) {\r\n  .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 555px; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 210px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n\r\n.about-Style[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n }\r\n .inner-Tip[_ngcontent-%COMP%]{\r\n  height: 550px; \r\n}\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 580px;\r\n   }\r\n   .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 450px !important;\r\n   }\r\n   .tip-Image[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .pic-Style[_ngcontent-%COMP%] {\r\n    height: 470px !important;\r\n}\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 520px;\r\n   }\r\n   .inner-Tip[_ngcontent-%COMP%]{\r\n    height: 370px !important; \r\n  }\r\n  .tip-Image[_ngcontent-%COMP%]{\r\n    height: 120px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n.pic-AC[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.col-md-8[_ngcontent-%COMP%]{\r\n  -webkit-box-flex: 0;\r\n          flex: 0 0 100.066667%;\r\n  max-width: 100.066667%;\r\n  padding-left: 40px;\r\n  padding-right: 20px;\r\n}\r\n.Header-Form-Style[_ngcontent-%COMP%]{\r\n  height: 760px;\r\n  margin-right: -22px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 400px !important; \r\n}\r\n.tip-Image[_ngcontent-%COMP%] {\r\n  height: 155px;\r\n  margin-top: 0px;\r\n}\r\n}\r\n\r\n\r\n@media only screen and (max-width: 610px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 480px;\r\n    margin-top: -23px;\r\n   }\r\n   .displayNone[_ngcontent-%COMP%]{\r\n     display: block;\r\n   }\r\n   .logoStyle[_ngcontent-%COMP%]{\r\n    height: 180px;\r\n    padding-top: 50px;\r\n    padding-left: 20px;\r\n}\r\n.tip-Image[_ngcontent-%COMP%]{\r\n  height: 140px;\r\n  margin-top: 30px;\r\n}\r\n}\r\n@media only screen and (max-width: 574px){\r\n.card-Style[_ngcontent-%COMP%]{\r\n  margin-right: 0px;\r\n}\r\n.margin-Top-10[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n}\r\n@media only screen and (max-width: 530px) {\r\n  .about-Style[_ngcontent-%COMP%]{\r\n    height: 430px;\r\n   }\r\n   .expert-Moto-Body[_ngcontent-%COMP%]{\r\n     font-size: 20px;\r\n   }\r\n   .expert-Moto-Header[_ngcontent-%COMP%]{\r\n    text-align: center; \r\n    padding-right: 0px; \r\n    margin-top: 50px;\r\n  }\r\n  .check-Circle-Moto[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n     color: green;\r\n  }\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n    height: 120px;\r\n    margin-top: 20px;\r\n}\r\n.inner-Tip[_ngcontent-%COMP%]{\r\n  height: 315px !important; \r\n}\r\n.aboutS1[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n}\r\n@media only screen and (max-width: 400px) {\r\n  .carousel-inner[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n.about-Style[_ngcontent-%COMP%]{\r\n  margin-top: -27px;\r\n }\r\n.carousel[_ngcontent-%COMP%] {\r\n  margin-right: -22px;\r\n}\r\n.carousel-Style[_ngcontent-%COMP%]{\r\nmargin-right: -22px;\r\n}\r\n.pic-Style[_ngcontent-%COMP%] {\r\n  height: 470px !important;\r\n}\r\n.logoStyle[_ngcontent-%COMP%]{\r\nheight: 170px;\r\npadding-top: 74px;\r\npadding-left: 20px;\r\n}\r\n.aboutS[_ngcontent-%COMP%]{\r\n  margin-right: -22px;\r\n}\r\n}\r\n@media only screen and (max-width: 350px){\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 100px;\r\n      margin-top: 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 300px) {\r\n  .tip-Image[_ngcontent-%COMP%] {\r\n      height: 90px;\r\n      margin-top: 30px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmF0ZS9wcml2YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCO0FBQ0E7Ozs7OztHQU1HO0FBQ0g7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0Q0FBdUQ7QUFDekQ7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtHQUNkLFlBQVk7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUdBQXFHO0FBQ3ZHO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFHQUFxRztBQUN2RztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7Ozs7O0dBS0c7QUFDSDtFQUNFLHVGQUFnRTtFQUFoRSxnRUFBZ0U7RUFDaEUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwyQ0FBc0Q7QUFDeEQ7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBOztBQUVBO0FBR0E7RUFDRTtHQUNDLGFBQWE7RUFDZDtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTs7QUFFQTtFQUNFLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsYUFBYTtBQUNmO0FBQ0E7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFLGFBQWE7R0FDZDtHQUNBO0lBQ0Msd0JBQXdCO0dBQ3pCO0dBQ0E7SUFDQyxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHdCQUF3QjtBQUM1QjtBQUNBO0FBRUE7RUFDRTtJQUNFLGFBQWE7R0FDZDtHQUNBO0lBQ0Msd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0FBRUY7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0FBRUE7Ozs7R0FJRztBQUVILG9FQUFvRTtBQUNwRTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjtHQUNBO0tBQ0UsY0FBYztHQUNoQjtHQUNBO0lBQ0MsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0FBRUE7RUFDRTtJQUNFLGFBQWE7R0FDZDtHQUNBO0tBQ0UsZUFBZTtHQUNqQjtHQUNBO0lBQ0Msa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7S0FDZCxZQUFZO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7QUFFQTtFQUNFO0lBQ0UsYUFBYTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7QUFFQTtFQUNFO01BQ0ksYUFBYTtNQUNiLGdCQUFnQjtFQUNwQjtBQUNGO0FBRUE7RUFDRTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhdGUvcHJpdmF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG4ucGljLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogNzUwcHggIWltcG9ydGFudDsgXHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4vKiAudGlwLVN0eWxle1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyBcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSAqL1xyXG4uaW5uZXItVGlwe1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG50ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG5oZWlnaHQ6IDcwMHB4OyBcclxucGFkZGluZy10b3A6IDEyJTtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi50aXAtU3R5bGV7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtdGlwMy5qcGcpO1xyXG59XHJcbi5hYm91dC1TdHlsZXtcclxuICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7IFxyXG4gIGhlaWdodDogODAwcHg7IFxyXG4gIC8qIC8vYmFja2dyb3VuZC1jb2xvcjogIzJjNWFjMzsgICovXHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5waWMxe1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzAwcHg7ICBcclxufVxyXG4uYWJvdXRTe1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbn1cclxuLmFib3V0UzF7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaW1nIDpob3ZlcntcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dCA6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuLmZvcm0tU3R5bGV7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDMlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50aXAtSW1hZ2V7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLndoaXRlQ29sb3J7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZWRDb2xvcntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5leHBlcnQtTW90by1Cb2R5e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZXhwZXJ0LU1vdG8tSGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgcGFkZGluZy1yaWdodDogMjBweDsgXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uY2Fyb3VzZWwtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcCA6LTI0cHg7IFxyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTlweDtcclxufVxyXG4uY2hlY2stQ2lyY2xlLU1vdG97XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLnRleHQtUmlnaHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmFib3V0LUhlYWRlcntcclxuICBmb250LXNpemU6IDMzcHg7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxuICB0ZXh0LWFsaWduOiByaWdodDsgXHJcbiAgcGFkZGluZy1yaWdodDogMjUlO1xyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5hYm91dC1Cb2R5e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogd2hpdGU7IFxyXG4gIHRleHQtYWxpZ246IHJpZ2h0OyBcclxuICBwYWRkaW5nLXJpZ2h0OiA0NSU7IFxyXG4gIG1hcmdpbi10b3A6IDE1MHB4OyBcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4ubG9nb1N0eWxle1xyXG4gIHdpZHRoOiAxMDAlOyBcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5kaXNwbGF5Tm9uZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8qIC5ib2R5VGV4dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYm9keVRleHQgOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcclxufSAqL1xyXG4uZ3JhbmRpZW50e1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZjM0NTMgMCUsICM0YzU1OGIgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pbWcye1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtdGlwLmpwZyk7XHJcbn1cclxuLnBpYy1BQ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uSGVhZGVyLUZvcm0tU3R5bGV7XHJcbiAgaGVpZ2h0OiA1MDBweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyOWJhYzsgXHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlOyBcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uY2FyZC1TdHlsZXtcclxuICBtYXJnaW4tbGVmdDogMzBweCAhaW1wb3J0YW50OyBcclxuICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLm1hcmdpbi1Ub3AtMTB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU2MHB4KSB7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgIGhlaWdodDogNzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5pbm5lci1UaXB7XHJcbiAgICBoZWlnaHQ6IDU1NXB4OyBcclxuICB9XHJcbiAgLnRpcC1JbWFnZXtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuLmFib3V0LVN0eWxle1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiB9XHJcbiAuaW5uZXItVGlwe1xyXG4gIGhlaWdodDogNTUwcHg7IFxyXG59XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5hYm91dC1TdHlsZXtcclxuICAgIGhlaWdodDogNTgwcHg7XHJcbiAgIH1cclxuICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNDUwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICB9XHJcbiAgLnBpYy1TdHlsZSB7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxufSBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICB9XHJcbiAgIC5pbm5lci1UaXB7XHJcbiAgICBoZWlnaHQ6IDM3MHB4ICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAudGlwLUltYWdle1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcblxyXG59XHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbi5waWMtQUN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29sLW1kLTh7XHJcbiAgZmxleDogMCAwIDEwMC4wNjY2NjclO1xyXG4gIG1heC13aWR0aDogMTAwLjA2NjY2NyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLkhlYWRlci1Gb3JtLVN0eWxle1xyXG4gIGhlaWdodDogNzYwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufVxyXG4uaW5uZXItVGlwe1xyXG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDsgXHJcbn1cclxuLnRpcC1JbWFnZSB7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxufVxyXG5cclxuLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxufSAqL1xyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAuYWJvdXQtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIzcHg7XHJcbiAgIH1cclxuICAgLmRpc3BsYXlOb25le1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbiAgIC5sb2dvU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnRpcC1JbWFnZXtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NHB4KXtcclxuLmNhcmQtU3R5bGV7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLm1hcmdpbi1Ub3AtMTB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgLmFib3V0LVN0eWxle1xyXG4gICAgaGVpZ2h0OiA0MzBweDtcclxuICAgfVxyXG4gICAuZXhwZXJ0LU1vdG8tQm9keXtcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIH1cclxuICAgLmV4cGVydC1Nb3RvLUhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7IFxyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgLmNoZWNrLUNpcmNsZS1Nb3Rve1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgLnRpcC1JbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaW5uZXItVGlwe1xyXG4gIGhlaWdodDogMzE1cHggIWltcG9ydGFudDsgXHJcbn1cclxuLmFib3V0UzF7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFib3V0U3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxufVxyXG4uYWJvdXQtU3R5bGV7XHJcbiAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbiB9XHJcbi5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxufVxyXG4uY2Fyb3VzZWwtU3R5bGV7XHJcbm1hcmdpbi1yaWdodDogLTIycHg7XHJcbn1cclxuLnBpYy1TdHlsZSB7XHJcbiAgaGVpZ2h0OiA0NzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvU3R5bGV7XHJcbmhlaWdodDogMTcwcHg7XHJcbnBhZGRpbmctdG9wOiA3NHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmFib3V0U3tcclxuICBtYXJnaW4tcmlnaHQ6IC0yMnB4O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpe1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIC50aXAtSW1hZ2Uge1xyXG4gICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59Il19 */"]
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