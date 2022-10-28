"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/posts.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Posts)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getPosts = async ()=>{\n    const postRes = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n    const result = await postRes.json();\n    // const s = postRes.json() as Post[]\n    // return postRes.json() as Post[]\n    // return postRes as Post[]\n    return result;\n};\nasync function Posts() {\n    const posts = await getPosts();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: posts.map((p)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: p.title\n            }, p.id, false, {\n                fileName: \"/workspaces/nextjs-jsonserver/pages/posts.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this);\n        })\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFPQSxNQUFNQSxXQUFXLFVBQVk7SUFDNUIsTUFBTUMsVUFBVSxNQUFNQyxNQUFNO0lBRTVCLE1BQU1DLFNBQVUsTUFBTUYsUUFBUUcsSUFBSTtJQUNsQyxxQ0FBcUM7SUFFckMsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUUzQixPQUFPRDtBQUNSO0FBRWUsZUFBZUUsUUFBUTtJQUVyQyxNQUFNQyxRQUFRLE1BQU1OO0lBRXBCLHFCQUNDO2tCQUVDTSxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsSUFBTTswQkFDaEIsOERBQUNDOzBCQUFnQkQsRUFBRUUsS0FBSztlQUFkRixFQUFFRyxFQUFFOzs7OztRQUNmOztBQU9ILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc29uLXNlcnZlci8uL3BhZ2VzL3Bvc3RzLnRzeD8yYTk4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIFBvc3Qge1xuXHR1c2VySWQ6IG51bWJlcixcblx0aWQ6IG51bWJlcixcblx0dGl0bGU6IHN0cmluZyxcblx0Ym9keTogc3RyaW5nXG59XG5cbmNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBwb3N0UmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIilcblx0XG5cdGNvbnN0IHJlc3VsdCA9IChhd2FpdCBwb3N0UmVzLmpzb24oKSkgYXMgUG9zdFtdO1xuXHQvLyBjb25zdCBzID0gcG9zdFJlcy5qc29uKCkgYXMgUG9zdFtdXG5cblx0Ly8gcmV0dXJuIHBvc3RSZXMuanNvbigpIGFzIFBvc3RbXVxuXHQvLyByZXR1cm4gcG9zdFJlcyBhcyBQb3N0W11cblx0XG5cdHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUG9zdHMoKSB7XG5cblx0Y29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdHtcblx0XHRcdHBvc3RzLm1hcCgocCkgPT4ge1xuXHRcdFx0XHQ8ZGl2IGtleT17cC5pZH0+e3AudGl0bGV9PC9kaXY+XG5cdFx0XHR9KVxuXHRcdH1cblx0XHRcblx0XHQ8Lz5cblxuXHQpXG5cdFxufSJdLCJuYW1lcyI6WyJnZXRQb3N0cyIsInBvc3RSZXMiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJQb3N0cyIsInBvc3RzIiwibWFwIiwicCIsImRpdiIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts.tsx"));
module.exports = __webpack_exports__;

})();