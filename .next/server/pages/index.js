module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n// import './index.css';\n// import App from './App';\n// import reportWebVitals from './reportWebVitals';\n// ReactDOM.render(\n//   <React.StrictMode>\n//     <App />\n//   </React.StrictMode>,\n//   document.getElementById('root')\n// );\n// // If you want to start measuring performance in your app, pass a function\n// // to log results (for example: reportWebVitals(console.log))\n// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n// reportWebVitals();\n\n\nfunction RedirectPage({\n  ctx\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])(); // Make sure we're in the browser\n\n  if (false) {}\n}\n\nRedirectPage.getInitialProps = ctx => {\n  // We check for ctx.res to make sure we're on the server.\n  if (ctx.res) {\n    ctx.res.writeHead(302, {\n      Location: \"/users\"\n    });\n    ctx.res.end();\n  }\n\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RedirectPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJSZWRpcmVjdFBhZ2UiLCJjdHgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQStCO0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FENkIsQ0FFN0I7O0FBQ0EsYUFBbUMsRUFHbEM7QUFDRjs7QUFFREgsWUFBWSxDQUFDSSxlQUFiLEdBQWdDSCxHQUFELElBQVM7QUFDdEM7QUFDQSxNQUFJQSxHQUFHLENBQUNJLEdBQVIsRUFBYTtBQUNYSixPQUFHLENBQUNJLEdBQUosQ0FBUUMsU0FBUixDQUFrQixHQUFsQixFQUF1QjtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUF2QjtBQUNBTixPQUFHLENBQUNJLEdBQUosQ0FBUUcsR0FBUjtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBUEQ7O0FBU2VSLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gaW1wb3J0ICcuL2luZGV4LmNzcyc7XG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcbi8vIGltcG9ydCByZXBvcnRXZWJWaXRhbHMgZnJvbSAnLi9yZXBvcnRXZWJWaXRhbHMnO1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuLy8gICAgIDxBcHAgLz5cbi8vICAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuLy8gKTtcblxuLy8gLy8gSWYgeW91IHdhbnQgdG8gc3RhcnQgbWVhc3VyaW5nIHBlcmZvcm1hbmNlIGluIHlvdXIgYXBwLCBwYXNzIGEgZnVuY3Rpb25cbi8vIC8vIHRvIGxvZyByZXN1bHRzIChmb3IgZXhhbXBsZTogcmVwb3J0V2ViVml0YWxzKGNvbnNvbGUubG9nKSlcbi8vIC8vIG9yIHNlbmQgdG8gYW4gYW5hbHl0aWNzIGVuZHBvaW50LiBMZWFybiBtb3JlOiBodHRwczovL2JpdC5seS9DUkEtdml0YWxzXG4vLyByZXBvcnRXZWJWaXRhbHMoKTtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIFJlZGlyZWN0UGFnZSh7IGN0eCB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBNYWtlIHN1cmUgd2UncmUgaW4gdGhlIGJyb3dzZXJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByb3V0ZXIucHVzaChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuUmVkaXJlY3RQYWdlLmdldEluaXRpYWxQcm9wcyA9IChjdHgpID0+IHtcbiAgLy8gV2UgY2hlY2sgZm9yIGN0eC5yZXMgdG8gbWFrZSBzdXJlIHdlJ3JlIG9uIHRoZSBzZXJ2ZXIuXG4gIGlmIChjdHgucmVzKSB7XG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiBcIi91c2Vyc1wiIH0pO1xuICAgIGN0eC5yZXMuZW5kKCk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3RQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ })

/******/ });