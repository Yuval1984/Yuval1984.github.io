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

module.exports = "<app-list-movies></app-list-movies>"

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
        this.title = 'Cinema';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_list_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/list-movies.component */ "./src/app/movies/list-movies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { RouterModule, Routes } from '@angular/core'; 




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _movies_list_movies_component__WEBPACK_IMPORTED_MODULE_5__["ListMoviesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movies/list-movies.component.css":
/*!**************************************************!*\
  !*** ./src/app/movies/list-movies.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageClass{\r\n    width:200px;\r\n    height:300px;\r\n}\r\n.colorClass1{\r\nbackground-color: cornflowerblue;\r\n}\r\n.colorClass2{\r\n    background-color: rgba(34, 202, 34, 0.637);\r\n}\r\n.colorClass3{\r\n    background-color: rgb(58, 57, 0);\r\n    }\r\n"

/***/ }),

/***/ "./src/app/movies/list-movies.component.html":
/*!***************************************************!*\
  !*** ./src/app/movies/list-movies.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-primary\" *ngFor=\"let movie of movies\">\n    <div class=\"panel-heading\" id=\"grad1\">\n      <h3 class=\"panel-title\">{{movie.Title}}</h3>\n    </div>\n    \n    <div class=\"panel-body bg-primary\">\n      <div class=\"col-10\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\">\n            <img class=\"imageClass\" [src]=\"movie.Poster\"/>\n          </div>\n          <div class=\"col-xs-8\">\n  \n          <div class=\"row\">\n              <div class=\"col-xs-6\">\n                  <h3>Year</h3>\n              </div>\n              <div class=\"col-xs-6\">\n                  <h3>{{movie.Year}}</h3>\n              </div>\n            </div>\n  \n            <div class=\"row\">\n                <div class=\"col-xs-6\">\n                    <h3>Runtime</h3>\n                </div>\n                <div class=\"col-xs-6\">\n                    <h3>{{movie.Runtime}}</h3>\n                </div>\n              </div>\n  \n              <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                    <h3>Genre</h3>\n                  </div>\n                  <div class=\"col-xs-6\">\n                    <h3>{{movie.Genre}}</h3>\n                  </div>\n                </div>\n  \n                <div class=\"row\">\n                    <div class=\"col-xs-6\">\n                      <h3>Director</h3>\n                    </div>\n                    <div class=\"col-xs-6\">\n                      <h3>{{movie.Director}}</h3>\n                    </div>\n                  </div>\n          </div>\n  \n          </div>\n        </div>\n      </div>\n      <div class=\"panel-footer\" id=\"grad2\"> \n          <div class=\"btn-group btn-group-lg\">\n              <button class=\"btn btn-success\" ion-item *ngIf=\"this.movie==movies[movies.length-1]\" (click)=\"current_movie = myclone(movie)\" data-toggle=\"modal\" data-target=\"#myModal3\">\n                  <span class=\"glyphicon glyphicon-pencil\"></span> Add Movie \n              </button>\n              <button class=\"btn btn-warning\" (click)=\"current_movie = myclone(movie)\" data-toggle=\"modal\" data-target=\"#myModal1\">\n              <span class=\"glyphicon glyphicon-pencil\"></span> Edit Movie \n            </button>\n            <button class=\"btn btn-danger\" (click)=\"current_movie = myclone(movie)\" data-toggle=\"modal\" data-target=\"#myModal2\">\n                <span class=\"glyphicon glyphicon-remove\"></span> Delete Movie\n              </button>\n          </div>\n        </div>\n</div>\n <!--ion-item *ngIf=\"this.movie==movies[movies.length-1]\">-->\n<form #EditForm=\"ngForm\">\n  <div class=\"modal fade\" id=\"myModal1\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n      \n        <div class=\"modal-content\">\n          <div class=\"modal-header p-3 mb-2 bg-primary text-white\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Edit movie: {{current_movie.Title}}</h4>\n          </div>\n  \n          \n              <!--<div class=\"form-group\">\n                  <label for=\"Year\">Year</label>\n                  <input type=\"text\" class=\"form-control\" id=\"Year\" \n                    required\n                      [(ngModel)]=\"current_movie.Year\" name=\"Year\"\n                      #Year=\"ngModel\">\n                      <div\n                      [hidden]=\"Year.valid || Year.pristine\"\n                      class=\"alert alert-danger\">\n                      Year is required\n                    </div>\n                </div>-->\n            <!--<div class=\"form-group\">\n              <label for=\"Year\">Year</label>\n              <input type=\"text\" class=\"form-control\" id=\"Year\" \n                required \n                minlength=\"4\"\n                  [(ngModel)]=\"current_movie.Year\" name=\"Year\"\n                  #Year=\"ngModel\">\n                  <div\n                  [hidden]=\"Year.valid || Year.pristine\"\n                  class=\"alert alert-danger\">\n                  Year is required\n                  </div>\n                  <div *ngIf=\"Year.errors?.minlength\"\n                    class=\"alert alert-danger\">\n                    Year must be at least 4 digits long\n                  </div>\n            </div>-->\n          <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"Y\">Year</label>\n                <input type=\"text\" class=\"form-control\" id=\"Y\" \n                  required\n                  minlength=\"4\" maxlength=\"4\" pattern=\"^$|^([0-9]|[1][9][6-9][0-9]|[2][0][0-1][0-8])?\"\n                    [(ngModel)]=\"current_movie.Year\" name=\"Y\"\n                    #Y=\"ngModel\">\n                    <div\n                    [hidden]=\"Y.valid || Y.pristine\"\n                    class=\"alert alert-danger\">\n                    Year is required\n                  </div>\n                  <div *ngIf=\"Y.errors?.minlength\"\n                    class=\"alert alert-danger\">\n                    Year must be at least 4 digits long\n                  </div>\n              </div>\n            <div class=\"form-group\">\n                <label for=\"Runtime\">Runtime</label>\n                <input type=\"text\" class=\"form-control\" id=\"Runtime\" \n                  required\n                    [(ngModel)]=\"current_movie.Runtime\" name=\"Runtime\"\n                    #Runtime=\"ngModel\">\n                    <div\n                    [hidden]=\"Runtime.valid || Runtime.pristine\"\n                    class=\"alert alert-danger\">\n                    Runtime is required\n                  </div>\n              </div>\n            <div class=\"form-group\">\n              <label for=\"Genre\">Genre</label>\n              <input type=\"text\" class=\"form-control\" id=\"Genre\" \n                required\n                  [(ngModel)]=\"current_movie.Genre\" name=\"Genre\"\n                  #Genre=\"ngModel\">\n                  <div\n                  [hidden]=\"Genre.valid || Genre.pristine\"\n                  class=\"alert alert-danger\">\n                  Genre is required\n                 </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"Director\">Director</label>\n              <input type=\"text\" class=\"form-control\" id=\"Director\" \n                required\n                  [(ngModel)]=\"current_movie.Director\" name=\"Director\"\n                  #Director=\"ngModel\">\n                  <div\n                  [hidden]=\"Director.valid || Director.pristine\"\n                  class=\"alert alert-danger\">\n                  Director is required\n                 </div>\n            </div>\n        </div>\n          <div class=\"modal-footer\">\n            <button type=\"submit\" [disabled]=\"!EditForm.valid\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"saveEmployee(EditForm)\">\n                <span class=\"glyphicon glyphicon-ok\"></span> Save Changes \n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n\n  <form #AddForm=\"ngForm\">\n      <div class=\"modal fade\" id=\"myModal3\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n          \n            <div class=\"modal-content\">\n              <div class=\"modal-header p-3 mb-2 bg-primary text-white\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Add new Movie</h4>\n              </div>\n      \n              <div class=\"modal-body\">\n                <div class=\"form-group\">\n                  <label for=\"Title\">Title</label>\n                  <input type=\"title\" class=\"form-control\" id=\"Title\" \n                    required \n                      [(ngModel)]=\"k\" name=\"Title\"\n                      #Title=\"ngModel\">\n                      <div\n                      [hidden]=\"Title.valid || Title.pristine\"\n                      class=\"alert alert-danger\">\n                      Title is required\n                      </div>\n\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"Year\">Year</label>\n                  <input type=\"text\" class=\"form-control\" id=\"Year\"\n                    required \n                    minlength=\"4\" maxlength=\"4\" pattern=\"^$|^([0-9]|[1][9][6-9][0-9]|[2][0][0-1][0-8])?\"\n                      [(ngModel)]=\"r\" name=\"Year\"\n                      #Year=\"ngModel\">\n                      <div\n                      [hidden]=\"Year.valid || Year.pristine\"\n                      class=\"alert alert-danger\">\n                      Year is required\n                      </div>\n                      <div *ngIf=\"Year.errors?.minlength\"\n                        class=\"alert alert-danger\">\n                        Year must be at least 4 digits long\n                      </div>\n                </div>\n            </div>\n              <div class=\"modal-footer\">\n                <button type=\"submit\" [disabled]=\"!AddForm.valid\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"AddNewMovie(AddForm)\">\n                    <span class=\"glyphicon glyphicon-ok\"></span> Save Changes \n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n  \n  <form #DeleteForm=\"ngForm\">\n  <div class=\"modal fade\" id=\"myModal2\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n      \n        <div class=\"modal-content\">\n          <div class=\"modal-footer\" id=\"grad3\">\n              <h4 class=\"modal-title\">Delete Movie : {{current_movie.Title}} ?</h4>\n            <button type=\"submit\" value=\"OK\" data-dismiss=\"modal\" (click)=\"deleteMovie(DeleteForm)\" class=\"btn btn-danger\">\n                <span class=\"glyphicon glyphicon-remove\"></span> OK \n              </button>\n              <button type=\"submit\" value=\"Cancel\" class=\"btn btn-success pull-down\" data-dismiss=\"modal\">\n                  <span class=\"glyphicon glyphicon-remove\"></span> Cancel\n                </button>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </form>\n  <ng-template #template>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">First modal</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        This is a first modal\n        <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal2(templateNested)\">Open second modal</button>-->\n      </div>\n    </ng-template>"

/***/ }),

/***/ "./src/app/movies/list-movies.component.ts":
/*!*************************************************!*\
  !*** ./src/app/movies/list-movies.component.ts ***!
  \*************************************************/
/*! exports provided: ListMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMoviesComponent", function() { return ListMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { BsModalService } from 'ngx-bootstrap/modal';
var ListMoviesComponent = /** @class */ (function () {
    function ListMoviesComponent(http) {
        this.http = http;
        this.movies = [];
        this.current_movie = {
            id: this.id + 1,
            Title: '',
            Year: '',
            Runtime: '',
            Genre: '',
            Director: '',
            Poster: ''
        };
    }
    ListMoviesComponent.prototype.ngOnInit = function () {
        this.GetMovieData();
    };
    ListMoviesComponent.prototype.OnEdit = function () {
    };
    ListMoviesComponent.prototype.myclone = function (movie) {
        return Object.assign({}, movie);
    };
    ListMoviesComponent.prototype.saveEmployee = function (movieForm) {
        for (var i = 0; i < this.movies.length; i++)
            if (this.movies[i].Title == this.current_movie.Title) {
                this.movies[i] = this.myclone(this.current_movie);
                break;
            }
    };
    ListMoviesComponent.prototype.deleteMovie = function (DeleteForm) {
        for (var i = 0; i < this.movies.length; i++)
            if (this.movies[i].Title == this.current_movie.Title) {
                this.movies.splice(i, 1);
                break;
            }
    };
    ListMoviesComponent.prototype.GetMovieData = function () {
        var _this = this;
        var i = 0;
        var moviearr = [
            "The Predator&2018", "Ant-Man and the Wasp&2018", "ready player one&2018", "Justice League&2017"
        ];
        for (var i_1 = 0; i_1 < moviearr.length; i_1++) {
            this.http.get('https://www.omdbapi.com/?t=' + moviearr[i_1] + "&apikey=4c039a0f").subscribe(function (result) {
                _this.movies.push(result);
            });
        }
    };
    ListMoviesComponent.prototype.GetMovieData2 = function (T, Y) {
        var _this = this;
        this.http.get('https://www.omdbapi.com/?t=' + T + "&y=" + Y + "&apikey=4c039a0f").subscribe(function (result) {
            _this.movies.push(result);
        });
    };
    ListMoviesComponent.prototype.AddNewMovie = function (movieForm) {
        var Flag = 0;
        for (var i = 0; i < this.movies.length; i++) {
            if (this.movies[i].Title == (String)(movieForm.value.Title)) {
                Flag = 1;
                //console.log("Same Title, Flag : "+Flag);
            }
            //console.log("Not Smae Title, Flag :" +Flag,", Movie In Place ["+i+"] : "+this.movies[i].Title,"|",movieForm.value.Title)
        }
        if (Flag == 0)
            this.GetMovieData2(movieForm.value.Title, movieForm.value.Year);
    };
    ListMoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-movies',
            template: __webpack_require__(/*! ./list-movies.component.html */ "./src/app/movies/list-movies.component.html"),
            styles: [__webpack_require__(/*! ./list-movies.component.css */ "./src/app/movies/list-movies.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListMoviesComponent);
    return ListMoviesComponent;
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

module.exports = __webpack_require__(/*! C:\Cinema\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map