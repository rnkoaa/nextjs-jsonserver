"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/posts.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getPosts = async ()=>{\n    const postRes = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n    const result = await postRes.json();\n    // const s = postRes.json() as Post[]\n    // return postRes.json() as Post[]\n    // return postRes as Post[]\n    return s;\n};\nfunction Posts() {\n    const posts = getPosts();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: posts.map((p)=>{\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: p.title\n            }, p.id, false, {\n                fileName: \"/workspaces/nextjs-jsonserver/pages/posts.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this);\n        })\n    }, void 0, false);\n}\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFPQSxNQUFNQSxXQUFXLFVBQVk7SUFDNUIsTUFBTUMsVUFBVSxNQUFNQyxNQUFNO0lBRTVCLE1BQU1DLFNBQVUsTUFBTUYsUUFBUUcsSUFBSTtJQUNsQyxxQ0FBcUM7SUFFckMsa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUUzQixPQUFPQztBQUNSO0FBRWUsU0FBU0MsUUFBUTtJQUUvQixNQUFNQyxRQUFRUDtJQUVkLHFCQUNDO2tCQUVDTyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsSUFBTTswQkFDaEIsOERBQUNDOzBCQUFnQkQsRUFBRUUsS0FBSztlQUFkRixFQUFFRyxFQUFFOzs7OztRQUNmOztBQU9ILENBQUM7S0FoQnVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy50c3g/MmE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmludGVyZmFjZSBQb3N0IHtcblx0dXNlcklkOiBudW1iZXIsXG5cdGlkOiBudW1iZXIsXG5cdHRpdGxlOiBzdHJpbmcsXG5cdGJvZHk6IHN0cmluZ1xufVxuXG5jb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcG9zdFJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpXG5cdFxuXHRjb25zdCByZXN1bHQgPSAoYXdhaXQgcG9zdFJlcy5qc29uKCkpIGFzIFBvc3RbXTtcblx0Ly8gY29uc3QgcyA9IHBvc3RSZXMuanNvbigpIGFzIFBvc3RbXVxuXG5cdC8vIHJldHVybiBwb3N0UmVzLmpzb24oKSBhcyBQb3N0W11cblx0Ly8gcmV0dXJuIHBvc3RSZXMgYXMgUG9zdFtdXG5cdFxuXHRyZXR1cm4gc1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cygpIHtcblxuXHRjb25zdCBwb3N0cyA9IGdldFBvc3RzKClcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0e1xuXHRcdFx0cG9zdHMubWFwKChwKSA9PiB7XG5cdFx0XHRcdDxkaXYga2V5PXtwLmlkfT57cC50aXRsZX08L2Rpdj5cblx0XHRcdH0pXG5cdFx0fVxuXHRcdFxuXHRcdDwvPlxuXG5cdClcblx0XG59Il0sIm5hbWVzIjpbImdldFBvc3RzIiwicG9zdFJlcyIsImZldGNoIiwicmVzdWx0IiwianNvbiIsInMiLCJQb3N0cyIsInBvc3RzIiwibWFwIiwicCIsImRpdiIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts.tsx\n"));

/***/ })

});