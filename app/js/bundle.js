/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/me.jpg":
/*!************************!*\
  !*** ./src/img/me.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/me.jpg?d1e699b9432a3cd7b12d5201b1261444";

/***/ }),

/***/ "./src/img/me2.jpg":
/*!*************************!*\
  !*** ./src/img/me2.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/me2.jpg?d1e699b9432a3cd7b12d5201b1261444";

/***/ }),

/***/ "./src/js/assets/imgs.js":
/*!*******************************!*\
  !*** ./src/js/assets/imgs.js ***!
  \*******************************/
/*! exports provided: me, me2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_me_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/me.jpg */ "./src/img/me.jpg");
/* harmony import */ var _img_me_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_me_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "me", function() { return _img_me_jpg__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _img_me2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/me2.jpg */ "./src/img/me2.jpg");
/* harmony import */ var _img_me2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_me2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "me2", function() { return _img_me2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a; });




/***/ }),

/***/ "./src/js/assets/index.js":
/*!********************************!*\
  !*** ./src/js/assets/index.js ***!
  \********************************/
/*! exports provided: imgs, styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs */ "./src/js/assets/imgs.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "imgs", function() { return _imgs__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a; });




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ */ "./src/js/assets/index.js");
/* harmony import */ var _modules___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ */ "./src/js/modules/index.js");

 // function User(name, role){
// 	this.name = name;
// 	this.role = role;
// }
// User.prototype.getName = function(){
// 	return this.name;
// }
// const user_1 = new User('Seriy', 'admin');
// let name = user_1.getName();
// for(let key in user_1){
// 	if(!user_1.hasOwnProperty(key)){
// 		continue;
// 	}
// 	console.log(key);
// }
// var salaries = {
// 	"Вася": 400,
// 	"Петя": 300,
// 	"Даша": 350
// };
// const getSalariesSum = (obj) => {
// let sum = 0;
// 	for(let name in obj){
// 		sum += obj[name];
// 	}
// 	return sum
// }
// const result = getSalariesSum(salaries);
// console.log(result);
// const showReachest = (obj) => {
// 	let reachBitch = 'нет сотрудников';
// 	let num = 0;
// 	for(let name in obj){
// 		if(obj[name] > num){
// 			num = obj[name];
// 			reachBitch = name;
// 		}
// 	}
// 	return reachBitch;
// }
// let reachest = showReachest(salaries);
// console.log(reachest);
// const map = (fn, arr) => {
// 	const resArr = [];
// 	for(let i = 0; i < arr.length; i++){
// 		resArr.push(fn(arr[i]))
// 	}
// 	return resArr
// }
// const arr = [1, 2, 3, 4];
// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, arr)); // [1, 4, 9, 16]
// console.log(map(square, [])); // []
// console.log(arr);
// const arr = [];
// for(let i = 0; i <= 20; i++){
// 	arr.push(i)
// }
// console.log(arr.sort((a,b)=>{
// 	return a < b;
// }));
// const a = {
// 	value: 2,
// 	toString: function(){
// 		return ++this.value;
// 	}
// };
// if(a == 3 && a == 4){
// 	console.log('I like JS!!!');
// }
// function smoothScrolling(queries){
// 	let sections = document.getElementsByTagName(queries);
// 	sections.forEach = [].forEach;
// 	const sectionsCollection = []
// 	sections.forEach((el) => {
// 		sectionsCollection.push(el.offsetTop);
// 	})
// 	let current = 0;
// 	const elem = document.body;
// 	if (elem.addEventListener) {
// 		if ('onwheel' in document) {
// 			elem.addEventListener("wheel", onWheel);
// 		} else if ('onmousewheel' in document) {
// 			elem.addEventListener("mousewheel", onWheel);
// 		} else {
// 			elem.addEventListener("MozMousePixelScroll", onWheel);
// 		}
// 	} else {
// 		elem.attachEvent("onmousewheel", onWheel);
// 	}
// 	function onWheel(e) {
// 		e = e || window.event;
// 		var delta = e.deltaY || e.detail || e.wheelDelta;
// 		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
// 		current = current < 0 ? 0 : current;
// 		if(delta >= 0) {
// 			current = current >= sectionsCollection.length - 1 ? current : current + 1;
// 		} else {
// 			current -= 1;
// 		}
// 		window.scrollTo({
// 			top: sectionsCollection[current],
// 			behavior: 'smooth'
// 		})
// 	}
// }
// smoothScrolling('section');
// let form = document.forms['myForm'].elements;
// console.log(form);

/***/ }),

/***/ "./src/js/modules/index.js":
/*!*********************************!*\
  !*** ./src/js/modules/index.js ***!
  \*********************************/
/*! exports provided: add, makeBigger, cubes, tails, randomFromOne, regForm, smoothScrolling, todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeBigger", function() { return makeBigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubes", function() { return cubes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tails", function() { return tails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomFromOne", function() { return randomFromOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regForm", function() { return regForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrolling", function() { return smoothScrolling; });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/modules/todo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "todo", function() { return _todo__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// import add from './add';
// import cubes from './cubes';
// import tails from './tails';
// import randomFromOne from './random-from-one';
// import regForm from './reg-form';
// import makeBigger from './make-bigger';
// import smoothScrolling from './smooth-scroll';



/***/ }),

/***/ "./src/js/modules/todo.js":
/*!********************************!*\
  !*** ./src/js/modules/todo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var todo = function todo() {
  var addForm = document.forms['addForm'];
  if (!addForm) return;

  var appendChilds = function appendChilds(parent) {
    for (var _len = arguments.length, childs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      childs[_key - 1] = arguments[_key];
    }

    childs.forEach(function (child) {
      parent.appendChild(child);
    });
  };

  var addItem = function addItem(text) {
    var todoItem = document.createElement('div');
    todoItem.classList.add('form-check', 'todo-item');
    var inputSide = document.createElement('form');
    inputSide.classList.add('input-side');
    appendChilds.apply(void 0, [inputSide].concat(_toConsumableArray(addTodoFormElements(text))));
    var buttonsSide = document.createElement('div');
    buttonsSide.classList.add('buttons-side');
    var editBtn = document.createElement('button');
    editBtn.classList.add('btn', 'btn-warning');
    editBtn.innerText = 'Edit';
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.innerText = 'Delete';
    appendChilds(buttonsSide, editBtn, deleteBtn);
    appendChilds(todoItem, inputSide, buttonsSide);
    ActiveTodos.appendChild(todoItem);
  };

  var addEditElement = function addEditElement(text) {
    var input = document.createElement('input');
    input.classList.add('input-edit');
    input.value = text;
    input.focus();
    return input;
  };

  var addTodoFormElements = function addTodoFormElements(text) {
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('form-check-input');
    var id = "customCheck".concat(Math.floor(Math.random() * 1000000));
    checkbox.id = id;
    var label = document.createElement('label');
    label.classList.add('form-check-label');
    label.setAttribute('for', id);
    label.innerText = text;
    return [checkbox, label];
  };

  var hideChildren = function hideChildren(parent) {
    var children = parent.children;

    for (var i = 0; i < children.length; i++) {
      parent.removeChild(children[i]);
      i--;
    }
  };

  addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var todotext = addForm.elements.addInput.value;
    if (!todotext) return;
    addItem(todotext);
    addForm.elements.addInput.value = '';
  });
  document.body.addEventListener('click', function (e) {
    var target = e.target; // Removing TODO item

    if (target.classList.contains('btn-danger')) {
      var thisTodoItem = target.parentElement.parentElement;
      thisTodoItem.parentElement.removeChild(thisTodoItem);
    }

    ; // Editing TODO item

    if (target.classList.contains('btn-warning')) {
      target.setAttribute('disabled', 'disabled');
      var editValue = target.parentElement.previousElementSibling.lastElementChild.innerText;
      var inputSide = target.parentElement.previousElementSibling;
      hideChildren(inputSide);
      appendChilds(inputSide, addEditElement(editValue));
      inputSide.firstElementChild.select();
      inputSide.addEventListener('submit', function (e) {
        e.preventDefault();
        var newValue = inputSide.lastElementChild.value;
        inputSide.removeChild(inputSide.lastElementChild);
        appendChilds.apply(void 0, [inputSide].concat(_toConsumableArray(addTodoFormElements(newValue))));
        target.removeAttribute('disabled');
      });
    }

    ; // Move to COMPLETE/ACTIVE section

    if (target.classList.contains('form-check-input')) {
      var todoItem = target.parentElement.parentElement;

      if (target.checked) {
        CompletedTodos.appendChild(todoItem);
        todoItem.classList.add('completed');
      } else {
        ActiveTodos.appendChild(todoItem);
        todoItem.classList.remove('completed');
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (todo());

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map