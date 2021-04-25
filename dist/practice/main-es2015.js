(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shantanu/Desktop/untitled folder 2/footballNews/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");






function AppComponent_article_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", news_r1.thumbnails.high.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((news_r1 == null ? null : news_r1.title) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((news_r1 == null ? null : news_r1.description) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 4, (news_r1 == null ? null : news_r1.published_datetime) || "-", "fullDate"));
} }
const _c0 = function (a1, a2) { return { itemsPerPage: 10, currentPage: a1, totalItems: a2 }; };
class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'practice';
        this.baseUrl = 'https://fampay-assign.herokuapp.com/api/v1/video/fetch/';
        this.footballNews = [];
        this.searchNews = '';
        this.sortAsc = 'ASC';
        this.limit = 10;
        this.total = 10;
    }
    ngOnInit() {
        this.http.get(this.baseUrl + "getAll")
            .subscribe((res) => {
            this.footballNews = res.response.result.video;
        });
    }
    pageChange($event) {
        this.p = $event;
        this.http.get(this.baseUrl + "getAll?page=" + this.p + "&limit=" + this.limit)
            .subscribe((res) => {
            this.footballNews = res.response.result.video;
        });
    }
    filterNewsCards() {
        if (this.searchNews.length >= 3) {
            this.http.get(this.baseUrl + "getAll?" + "search=" + this.searchNews)
                .subscribe((res) => {
                this.footballNews = res.response.result.video;
            });
        }
        else {
            this.http.get(this.baseUrl + "getAll?limit=15")
                .subscribe((res) => {
                this.footballNews = res.response.result.video;
            });
        }
    }
    sortNewsCards() {
        if (this.sortAsc === 'ASC') {
            const sortedActivities = lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](this.footballNews, ['published_datetime']);
            this.footballNews = sortedActivities;
            console.log('footballNews', this.footballNews);
            this.sortAsc = 'DES';
        }
        else if (this.sortAsc === 'DES') {
            const sortedActivities = lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"](this.footballNews.reverse(), ['published_datetime']);
            this.footballNews = sortedActivities;
            this.sortAsc = 'ASC';
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 8, consts: [[1, "sidebar"], ["href", "#dashboard", 1, "active"], [1, "flex"], [1, "search"], ["name", "value", "placeholder", "Search...", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup"], [1, "switch"], ["type", "checkbox", "checked", "", 3, "click"], [1, "slider", "round"], [1, "content"], [1, "cards"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "card"], ["alt", "Sample photo", 3, "src"], [1, "text"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchNews = $event; })("keyup", function AppComponent_Template_input_keyup_5_listener() { return ctx.filterNewsCards(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_input_click_8_listener() { return ctx.sortNewsCards(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_article_12_Template, 13, 7, "article", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "pagination-controls", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AppComponent_Template_pagination_controls_pageChange_14_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 2, ctx.footballNews, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx.p, ctx.total)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n    margin: 0;\n    font-family: \"Lato\", sans-serif;\n  }\n  \n  .sidebar[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    width: 200px;\n    background-color: #214770;\n    position: fixed;\n    height: 100%;\n    overflow: auto;\n  }\n  \n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: black;\n    padding: 16px;\n    text-decoration: none;\n  }\n  \n  .sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #33313d;\n    color: white;\n  }\n  \n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n    background-color: #555;\n    color: white;\n  }\n  \n  div.content[_ngcontent-%COMP%] {\n    margin-left: 200px;\n    padding: 1px 16px;\n    height: 1000px;\n  }\n  \n  @media screen and (max-width: 700px) {\n    .sidebar[_ngcontent-%COMP%] {\n      width: 100%;\n      height: auto;\n      position: relative;\n    }\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {float: left;}\n    div.content[_ngcontent-%COMP%] {margin-left: 0;}\n  }\n  \n  @media screen and (max-width: 400px) {\n    .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      text-align: center;\n      float: none;\n    }\n  }\n  \n  \n  \n  .cards[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: stretch;\n  }\n  \n  .card[_ngcontent-%COMP%] {\n    flex: 0 0 200px;\n    margin: 10px;\n    border: 1px solid #ccc;\n    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);\n  }\n  \n  .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  \n  .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding: 0 20px 20px;\n  }\n  \n  .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    background: gray;\n    border: 0;\n    color: white;\n    padding: 10px;\n    width: 100%;\n    }\n  \n  \n  \n  .search[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 950px;\n    margin: auto;\n  }\n  \n  .search-box[_ngcontent-%COMP%] {\n    border-color: darkgreen;\n    padding: 1%;\n    width: 100%;\n  }\n  \n  .flex[_ngcontent-%COMP%] {\n      display: flex;\n  }\n  \n  .switch[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  .slider[_ngcontent-%COMP%] {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n  }\n  \n  .slider[_ngcontent-%COMP%]:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n  }\n  \n  input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n    background-color: #2196F3;\n  }\n  \n  input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n    box-shadow: 0 0 1px #2196F3;\n  }\n  \n  input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n    transform: translateX(26px);\n  }\n  \n  \n  \n  .slider.round[_ngcontent-%COMP%] {\n    border-radius: 34px;\n  }\n  \n  .slider.round[_ngcontent-%COMP%]:before {\n    border-radius: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7SUFDcEI7SUFDQSxZQUFZLFdBQVcsQ0FBQztJQUN4QixhQUFhLGNBQWMsQ0FBQztFQUM5Qjs7RUFFQTtJQUNFO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7SUFDYjtFQUNGOztFQUdBLFVBQVU7O0VBRVY7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRDQUE0QztFQUM5Qzs7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYOztFQUVGLFVBQVU7O0VBRVY7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUV0QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBRXZCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFHRSwyQkFBMkI7RUFDN0I7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNDc3MDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICAuc2lkZWJhciBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgIFxuICAuc2lkZWJhciBhLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzEzZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgZGl2LmNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAxcHggMTZweDtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnNpZGViYXIgYSB7ZmxvYXQ6IGxlZnQ7fVxuICAgIGRpdi5jb250ZW50IHttYXJnaW4tbGVmdDogMDt9XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgLnNpZGViYXIgYSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gIH1cblxuXG4gIC8qIGNhcmRzICovXG5cbiAgLmNhcmRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuICAuY2FyZCB7XG4gICAgZmxleDogMCAwIDIwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDBweCAgcmdiYSgwLDAsMCwwLjMpO1xuICB9IFxuICAuY2FyZCBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuY2FyZCAudGV4dCB7XG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG4gIH1cbiAgLmNhcmQgLnRleHQgPiBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAvKiBjYXJkcyAqL1xuXG4gIC5zZWFyY2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDk1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5zZWFyY2gtYm94IHtcbiAgICBib3JkZXItY29sb3I6IGRhcmtncmVlbjtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5mbGV4IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgfVxuICBcbiAgLnN3aXRjaCBpbnB1dCB7IFxuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgfVxuICBcbiAgLnNsaWRlcjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMjZweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIH1cbiAgXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAuc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cblxuICAiXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map