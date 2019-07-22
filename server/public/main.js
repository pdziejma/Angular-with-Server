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

/***/ "./node_modules/raw-loader/index.js!./src/app/animals/animals.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/animals/animals.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select class = 'select'\n    (change) = 'onChange( animalDropdown.value )'\n    #animalDropdown>\n    <option class = 'option'\n        *ngFor = 'let a of animals; let i = index'\n        [class.selected] = 'isSelected( a )'\n        [value] = 'i'>\n        {{ a.name }}\n    </option>\n</select>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Welcome to the {{ title }}!\n</h1>\n\n<div class = 'app-root'>\n  <!--Displays animal description and changes on dropdown-->\n  <p> {{ animalDescription }} </p>\n  <!--Fills dropdown with server data-->\n  <animals\n    [animals] = 'animals'\n    (onAnimalSelected) = 'animalSelected($event)'>\n  </animals>\n  <!--Adding animal form-->\n  <form [formGroup] = \"addform\">\n    <h3> Add an Animal: </h3>\n    <!--Name Input for form-->\n    <mat-form-field class = 'field'>\n      <input name = 'name' #newName formControlName = \"name\"\n        matInput placeholder = \"Type a Name\" required>\n        <mat-error *ngIf = \"addform.invalid\">{{ getErrorMessage( addform, 'name' ) }}</mat-error>\n    </mat-form-field>\n    <br>\n\n    <!--Color Input for form-->\n    <div class = 'field'>\n      <select name = 'color' #newColor formControlName = \"color\">\n        <option\n          [value] = '' selected disabled hidden> Choose a color </option>\n        <option\n          *ngFor = 'let c of colorOptions;'\n          [value] = 'c'> {{ c }}\n        </option>\n      </select>\n    </div>\n    <br>\n\n    <!--Size Input for form-->\n    <div class = 'field'>\n      <select name = 'size' #newSize formControlName = \"size\">\n        <option\n          [value] = '' selected disabled hidden> Choose a size </option>\n        <option\n          *ngFor = 'let s of sizeOptions;'\n          [value] = 's'> {{ s }}\n        </option>\n      </select>\n    </div>\n\n    <!--Date Input for form-->\n    <mat-form-field>\n      <input matInput [matDatepicker] = 'newDob' placeholder = 'Choose a birth date' formControlName = \"date\" required>\n      <mat-error *ngIf = \"addform.invalid\">{{ getErrorMessage( addform, 'date' ) }}</mat-error>\n      <mat-datepicker-toggle matSuffix [for] = 'newDob'></mat-datepicker-toggle>\n      <mat-datepicker #newDob></mat-datepicker>\n    </mat-form-field>\n    <br>\n    \n    <!--Submit button for form and reset values-->\n    <div>\n      <button class = 'button' type = 'button' (click) =\n        \"add(newName.value, newColor.value, newSize.value, newDob._validSelected);\">\n        Add\n      </button>\n    </div>\n  </form>\n\n  <!--Displaying table for animal database-->\n  <h3 class='ui header'> Animal Database: </h3>\n  <table>\n    <!--Headers-->\n    <th> Name </th>\n    <th> Color </th>\n    <th> Size </th>\n    <th> Date of Birth </th>\n\n    <!--Data-->\n    <tr *ngFor = 'let a of animals; let i = index'>\n      <td>{{ a.name }}</td>\n      <td>{{ a.color }}</td>\n      <td>{{ a.size }}</td>\n      <td>{{ dateFormatter(a.dob) }}</td>\n      <!--Delete button-->\n      <td>\n        <button class = 'button' type = 'button' (click) = \"delete(a);\">\n          Delete\n        </button>\n      </td>\n\n      <!--Update button-->\n      <td>\n        <!--For showing and hiding update form-->\n        <div *ngIf = \"a.expanded\">\n\n          <!--Form to update animal-->\n          <form [formGroup] = \"form\">\n\n          <!--Name-->\n          <mat-form-field class = 'field'>\n            <input name = 'upName' #upName formControlName = \"name\"\n              matInput placeholder = \"Type a Name\" required>\n              <mat-error *ngIf = \"addform.invalid\">{{ getErrorMessage( form, 'name' ) }}</mat-error>\n          </mat-form-field>\n          <br>\n\n          <!--Color-->\n          <div class = 'field'>\n            <select name = 'upColor' #upColor formControlName = \"color\">\n              <option\n                *ngFor = 'let c of colorOptions;'\n                [value] = 'c'> {{ c }}\n              </option>\n            </select>\n          </div>\n          <br>\n\n          <!--Size-->\n          <div class = 'field'>\n            <select name = 'upSize' #upSize formControlName = \"size\">\n              <option\n                *ngFor = 'let s of sizeOptions;'\n                [value] = 's'> {{ s }}\n              </option>\n            </select>\n          </div>\n\n          <!--Birthday-->\n          <mat-form-field>\n            <input matInput [matDatepicker] = 'upDob' placeholder = 'Choose a birth date' formControlName = \"date\" required>\n            <mat-error *ngIf = \"form.invalid\">{{ getErrorMessage( form, 'date' ) }}</mat-error>\n            <mat-datepicker-toggle matSuffix [for] = 'upDob'></mat-datepicker-toggle>\n            <mat-datepicker #upDob></mat-datepicker>\n          </mat-form-field>\n          <br>\n\n          <!--For showing and hiding submit/cancel buttons-->\n          <div>\n            <button class = 'btn1' type = 'button'\n              (click) = \"update(upName.value, upColor.value, upSize.value, upDob._validSelected, a)\">\n              Submit\n            </button>\n\n            <button class = 'btn2' type = 'button' (click) = \"expandCompareRow(a)\">\n              Cancel\n            </button>\n\n          </div>\n\n        </form>\n        </div>\n        \n        <!--For showing and hiding update button-->\n        <div *ngIf = \"!a.expanded\">\n          <button class = 'button' type = 'button' (click) = \"expandCompareRow(a); formDefault(a);\">\n              Update\n          </button>\n        </div>\n        \n      </td>\n    </tr>\n  </table>\n\n</div>\n<!--App messages for understanding communication with server-->\n<app-messages></app-messages>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/messages.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = 'messageService.messages.length'>\n    <h2>Messages</h2>\n        <button\n            class = 'clear'\n            (click) = 'messageService.clear()'>clear</button>\n        <div\n            *ngFor = 'let message of messageService.messages'> {{ message }}\n        </div>\n      \n</div>"

/***/ }),

/***/ "./src/app/animals/animals.component.css":
/*!***********************************************!*\
  !*** ./src/app/animals/animals.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWFscy9hbmltYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9hbmltYWxzL2FuaW1hbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/animals/animals.component.ts":
/*!**********************************************!*\
  !*** ./src/app/animals/animals.component.ts ***!
  \**********************************************/
/*! exports provided: AnimalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsComponent", function() { return AnimalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimalsComponent = class AnimalsComponent {
    constructor() {
        this.onAnimalSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    onChange(animal) {
        this.currentAnimal = animal;
        this.onAnimalSelected.emit(animal);
    }
    isSelected(animal) {
        if (!animal || !this.currentAnimal) {
            return false;
        }
        return animal.name === this.currentAnimal.name;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnimalsComponent.prototype, "animals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AnimalsComponent.prototype, "onAnimalSelected", void 0);
AnimalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'animals',
        template: __webpack_require__(/*! raw-loader!./animals.component.html */ "./node_modules/raw-loader/index.js!./src/app/animals/animals.component.html"),
        styles: [__webpack_require__(/*! ./animals.component.css */ "./src/app/animals/animals.component.css")]
    })
], AnimalsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th , td {\n  padding: 10px;\n  border-radius: 4px;\n  font-family: 'Roboto';\n}\n\nh1, h3, p {\n  font-family: 'Roboto';\n}\n\ntable tr:nth-child(odd) {\n  background-color: #f1f1f1;\n}\n\ntable tr:nth-child(even) {\n  background-color: #ffffff;\n}\n\nth {\n  background-color: #4CAF50;\n  color: white;\n}\n\nselect {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  font-family: 'Roboto';\n}\n\n.button {\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  font-family: 'Roboto';\n}\n\n.btn1 {\n  float: left;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  font-family: 'Roboto';\n}\n\n.btn2 {\n  float: right;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 4px;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  font-family: 'Roboto';\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoICwgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuaDEsIGgzLCBwIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuXG50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi5idG4xIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG5cbi5idG4yIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_animal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/animal.service */ "./src/app/services/animal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AppComponent = class AppComponent {
    constructor(animalService) {
        this.animalService = animalService;
        this.title = 'Animal Database';
        this.animalDescription = 'Select an animal to see its description.';
        //labels for color and size dropdowns
        this.defaultColor = "Choose a color";
        this.defaultSize = "Choose a size";
        //all color options for select dropdown
        this.colorOptions = ['Black', 'Blue', 'Brown', 'Gray', 'Green', 'Orange', 'Pink', 'Red', 'Violet', 'White', 'Yellow'];
        //all size options for select dropdown
        this.sizeOptions = ['Tiny', 'Small', 'Medium', 'Large', 'Huge'];
        this.addform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.defaultColor),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.defaultSize),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    ngOnInit() {
        //calls the server on init of website
        this.showAnimals();
    }
    getErrorMessage(form, field) {
        return form.get(field).hasError('required') ? 'You must enter a value' :
            '';
    }
    formDefault(animal) {
        this.form.setValue({
            name: animal.name,
            color: animal.color,
            size: animal.size,
            date: new Date(animal.dob)
        });
    }
    //gets the animals from the server
    showAnimals() {
        this.animalService.getAnimals()
            .subscribe((data) => {
            this.animals = data;
        });
    }
    //formats date into a readable format and converts to a string
    dateFormatter(dob) {
        const format = 'MM/dd/yyyy';
        const locale = 'en-US';
        if (dob) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(dob, format, locale);
        }
        else {
            return 'undefined';
        }
    }
    //shows description of animal selected by index
    animalSelected(index) {
        //check if all fields are defined
        if (!this.animals[index].name ||
            !this.animals[index].color ||
            !this.animals[index].size ||
            !this.animals[index].dob) {
            this.animalDescription = 'One or more of the criteria is undefined.';
        }
        else {
            //setting up the date format for date of birth to be displayed
            let formattedDate = this.dateFormatter(this.animals[index].dob);
            //writing out the description for the animal that is at index
            this.animalDescription = `The ${this.animals[index].name.toLocaleLowerCase()}
        is a ${this.animals[index].color.toLocaleLowerCase()} colored,
        ${this.animals[index].size.toLocaleLowerCase()} sized animal
        and was born on ${formattedDate}.`;
        }
    }
    //calls add from service and subscribes
    add(name, color, size, dob) {
        //check if all fields are filled out
        if (!name || !color || color == this.defaultColor || size == this.defaultSize || !size || !dob) {
            //error messages
            alert('All fields are required. Please finish filling out the form.');
            this.addform.get('name').markAsTouched();
            this.addform.get('date').markAsTouched();
        }
        else {
            //add animal to server7
            this.animalService
                .addAnimal({ name, color, size, dob })
                .subscribe(animal => {
                this.animals.push(animal);
            });
            this.addform.reset({
                color: this.defaultColor,
                size: this.defaultSize
            });
        }
    }
    //calls delete from service and subscribes
    delete(animal) {
        this.animalService
            .deleteAnimal(animal._id)
            .subscribe();
        this.animals.splice(this.animals.indexOf(animal), 1);
    }
    expandCompareRow(fields) {
        fields.expanded = !fields.expanded;
    }
    //calls update from service and subscribes
    update(name, color, size, dob, animal) {
        let _id = animal._id;
        //check if all fields are filled out
        if (!name || !color || color == this.defaultColor || size == this.defaultSize || !size || !dob) {
            alert('All fields are required. Please finish filling out the form or hit cancel.');
        }
        else {
            this.expandCompareRow(animal);
            this.animalService
                .updateAnimal({ _id, name, color, size, dob }, animal._id)
                .subscribe();
            this.animals.splice(this.animals.indexOf(animal), 1, { _id, name, color, size, dob });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_animal_service__WEBPACK_IMPORTED_MODULE_2__["AnimalService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _animals_animals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animals/animals.component */ "./src/app/animals/animals.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _animals_animals_component__WEBPACK_IMPORTED_MODULE_6__["AnimalsComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"]
        ],
        imports: [
            _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");




let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"]],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() { }
};
MessagesComponent.ctorParameters = () => [
    { type: _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html"),
        styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/services/animal.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/animal.service.ts ***!
  \********************************************/
/*! exports provided: AnimalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalService", function() { return AnimalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AnimalService = class AnimalService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.animalUrl = 'http://localhost:3000/animals';
    }
    log(message) {
        this.messageService.add(`AnimalService: ${message}`);
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    //getting json data of all animals from the server using get
    getAnimals() {
        this.log(`calling getAnimals.`);
        return this.http.get(this.animalUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log('fetched animals')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAnimals', [])));
    }
    //getting json data of specific animal by id from the server using get
    getAnimal(id) {
        const url = `${this.animalUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.log(`fetched animal id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`getAnimal id=${id}`)));
    }
    //add animal to the server using post
    addAnimal(animal) {
        return this.http.post(this.animalUrl, animal, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((newAnimal) => this.log(`added animal w/ name=${newAnimal.name}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addAnimal')));
    }
    //delete the animal from the server using delete
    deleteAnimal(id) {
        const url = `${this.animalUrl}/${id}`;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteAnimal')));
    }
    //update the animal on the server, returns the updated animal upon success
    updateAnimal(animal, id) {
        const url = `${this.animalUrl}/${id}`;
        return this.http.put(url, animal, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateAnimal', animal)));
    }
};
AnimalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
AnimalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AnimalService);



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/peterdziejma/angular-animal-final/angular-animal-database/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map