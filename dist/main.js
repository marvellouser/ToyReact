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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToyReact.js":
/*!*********************!*\
  !*** ./ToyReact.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction createTextElement(text) {\n  return {\n    type: 'TEXT_ELEMENT',\n    props: {\n      nodeValue: text,\n      children: []\n    }\n  };\n}\n\nfunction createElement(type, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  return {\n    type: type,\n    props: _objectSpread(_objectSpread({}, props), {}, {\n      children: children.map(function (child) {\n        return _typeof(child) === 'object' ? child : createTextElement(child);\n      })\n    })\n  };\n}\n\nfunction createDom(fiber) {\n  var dom = fiber.type == 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type); // const isProperty = key => key !== 'children';\n  // Object.keys(fiber.props).filter(isProperty).forEach(key => {\n  //   dom[key] = fiber.props[key];\n  // })\n  // fiber.props.children.forEach(child => {\n  //   render(child, dom);\n  // })\n\n  updateDom(dom, {}, fiber.props);\n  return dom;\n}\n\nvar isEvent = function isEvent(key) {\n  return key.startsWith(\"on\");\n};\n\nvar isProperty = function isProperty(key) {\n  return key !== \"children\" && !isEvent(key);\n};\n\nvar isNew = function isNew(prev, next) {\n  return function (key) {\n    return prev[key] !== next[key];\n  };\n};\n\nvar isGone = function isGone(prev, next) {\n  return function (key) {\n    return !(key in next);\n  };\n};\n\nfunction updateDom(dom, prevProps, nextProps) {\n  //Remove old or changed event listeners\n  Object.keys(prevProps).filter(isEvent).filter(function (key) {\n    return !(key in nextProps) || isNew(prevProps, nextProps)(key);\n  }).forEach(function (name) {\n    var eventType = name.toLowerCase().substring(2);\n    dom.removeEventListener(eventType, prevProps[name]);\n  }); // Remove old properties\n\n  Object.keys(prevProps).filter(isProperty).filter(isGone(prevProps, nextProps)).forEach(function (name) {\n    dom[name] = \"\";\n  }); // Set new or changed properties\n\n  Object.keys(nextProps).filter(isProperty).filter(isNew(prevProps, nextProps)).forEach(function (name) {\n    dom[name] = nextProps[name];\n  }); // Add event listeners\n\n  Object.keys(nextProps).filter(isEvent).filter(isNew(prevProps, nextProps)).forEach(function (name) {\n    var eventType = name.toLowerCase().substring(2);\n    dom.addEventListener(eventType, nextProps[name]);\n  });\n}\n\nfunction commitRoot() {\n  deletions.forEach(commitWork);\n  commitWork(wipRoot.child);\n  currentRoot = wipRoot;\n  wipRoot = null;\n}\n\n;\n\nfunction commitWork(fiber) {\n  if (!fiber) {\n    return;\n  }\n\n  var domParent = fiber.parent.dom;\n\n  if (fiber.effectTag === \"PLACEMENT\" && fiber.dom != null) {\n    domParent.appendChild(fiber.dom);\n  } else if (fiber.effectTag === \"UPDATE\" && fiber.dom != null) {\n    updateDom(fiber.dom, fiber.alternate.props, fiber.props);\n  } else if (fiber.effectTag === \"DELETION\") {\n    domParent.removeChild(fiber.dom);\n  }\n\n  commitWork(fiber.child);\n  commitWork(fiber.sibling);\n}\n\nfunction render(element, container) {\n  wipRoot = {\n    dom: container,\n    props: {\n      children: [element]\n    },\n    alternate: currentRoot\n  };\n  deletions = [];\n  nextUnitOfWork = wipRoot;\n}\n\nvar nextUnitOfWork = null;\nvar wipRoot = null;\nvar currentRoot = null;\nvar deletions = null;\n\nfunction workLoop(deadline) {\n  var shouldYield = false;\n\n  while (nextUnitOfWork && !shouldYield) {\n    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);\n    shouldYield = deadline.timeRemaining() < 1;\n  }\n\n  if (!nextUnitOfWork && wipRoot) {\n    console.log(wipRoot, 'wipRootwipRoot');\n    commitRoot();\n  }\n\n  requestIdleCallback(workLoop);\n}\n\nrequestIdleCallback(workLoop);\n\nfunction performUnitOfWork(fiber) {\n  if (!fiber.dom) {\n    fiber.dom = createDom(fiber);\n  }\n\n  var elements = fiber.props.children;\n  reconcileChildren(fiber, elements);\n\n  if (fiber.child) {\n    return fiber.child;\n  }\n\n  var nextFiber = fiber;\n\n  while (nextFiber) {\n    if (nextFiber.sibling) {\n      return nextFiber.sibling;\n    }\n\n    nextFiber = nextFiber.parent;\n  }\n}\n\nfunction reconcileChildren(wipFiber, elements) {\n  var index = 0;\n  var oldFiber = wipFiber.alternate && wipFiber.alternate.child;\n  var prevSibling = null;\n\n  while (index < elements.length || oldFiber != null) {\n    var element = elements[index];\n    var newFiber = null;\n    var sameType = oldFiber && element && element.type == oldFiber.type;\n\n    if (sameType) {\n      newFiber = {\n        type: oldFiber.type,\n        props: element.props,\n        dom: oldFiber.dom,\n        parent: wipFiber,\n        alternate: oldFiber,\n        effectTag: \"UPDATE\"\n      };\n    }\n\n    if (element && !sameType) {\n      newFiber = {\n        type: element.type,\n        props: element.props,\n        dom: null,\n        parent: wipFiber,\n        alternate: null,\n        effectTag: \"PLACEMENT\"\n      };\n    }\n\n    if (oldFiber && !sameType) {\n      oldFiber.effectTag = \"DELETION\";\n      deletions.push(oldFiber);\n    }\n\n    if (oldFiber) {\n      oldFiber = oldFiber.sibling;\n    }\n\n    if (index === 0) {\n      wipFiber.child = newFiber;\n    } else if (element) {\n      prevSibling.sibling = newFiber;\n    }\n\n    prevSibling = newFiber;\n    index++;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  createElement: createElement,\n  render: render\n});\n\n//# sourceURL=webpack:///./ToyReact.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact */ \"./ToyReact.js\");\n // const container = document.getElementById('root');\n// const a = <div>111<span>222</span></div>\n// console.log(a, '.......')\n// ToyReact.render(a, container);\n\nvar container = document.getElementById(\"root\");\n\nvar updateValue = function updateValue(e) {\n  rerender(e.target.value);\n};\n\nvar rerender = function rerender(value) {\n  var element = _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    onInput: updateValue,\n    value: value\n  }), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Hello \", value)); // const element = <div a=\"11\">111</div>\n\n  _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render(element, container);\n};\n\nrerender(\"World\");\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });