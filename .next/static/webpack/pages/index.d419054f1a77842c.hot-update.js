"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header/TopBanner.js":
/*!****************************************!*\
  !*** ./components/header/TopBanner.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"./node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopBanner = function() {\n    var updateTime = function updateTime() {\n        setTime(new Date());\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date()), time = ref[0], setTime = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setInterval(updateTime, 1000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between text-sm font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white leading-normal h-auto py-2\",\n                        children: time.toLocaleDateString([], {\n                            dateStyle: \"long\"\n                        }) + \" \" + time.toLocaleTimeString([], {\n                            timeStyle: \"medium\"\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tarasiegel/Documents/Code Projects/trashpile/components/header/TopBanner.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletMultiButton, {\n                        className: \"font-sans text-sm font-bold h-auto leading-normal py-2 px-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tarasiegel/Documents/Code Projects/trashpile/components/header/TopBanner.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tarasiegel/Documents/Code Projects/trashpile/components/header/TopBanner.js\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/tarasiegel/Documents/Code Projects/trashpile/components/header/TopBanner.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/tarasiegel/Documents/Code Projects/trashpile/components/header/TopBanner.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, _this);\n};\n_s(TopBanner, \"bMmzb/+2RBjVJI1GY9e+QN5x6B0=\");\n_c = TopBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBanner);\nvar _c;\n$RefreshReg$(_c, \"TopBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9Ub3BCYW5uZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFtRDtBQUNBO0FBQ2lCOztBQUdwRSxJQUFNSyxTQUFTLEdBQUcsV0FBTTtRQUdYQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsR0FBRztRQUNsQkMsT0FBTyxDQUFDLElBQUlDLElBQUksRUFBRSxDQUFDLENBQUM7S0FDdkI7O0lBSkQsSUFBd0JMLEdBQW9CLEdBQXBCQSwrQ0FBUSxDQUFDLElBQUlLLElBQUksRUFBRSxDQUFDLEVBTmhELElBTWUsR0FBYUwsR0FBb0IsR0FBakMsRUFOZixPQU13QixHQUFJQSxHQUFvQixHQUF4QjtJQU1wQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pRLFdBQVcsQ0FBQ0osVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2pDLENBQUMsQ0FBQztJQUVILHFCQUNJLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxVQUFVO2tCQUNyQiw0RUFBQ1osMkRBQWM7c0JBQ1gsNEVBQUNXLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7O2tDQUNuRCw4REFBQ0MsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLHVDQUF1QztrQ0FBRUgsSUFBSSxDQUFDSyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7NEJBQUVDLFNBQVMsRUFBRSxNQUFNO3lCQUFFLENBQUMsR0FBRyxHQUFHLEdBQUdOLElBQUksQ0FBQ08sa0JBQWtCLENBQUMsRUFBRSxFQUFFOzRCQUFFQyxTQUFTLEVBQUUsUUFBUTt5QkFBRSxDQUFDOzs7Ozs2QkFBSztrQ0FDMUssOERBQUNiLDhFQUFpQjt3QkFBQ1EsU0FBUyxFQUFHLDZEQUE2RDs7Ozs7NkJBQXFCOzs7Ozs7cUJBQy9HOzs7OztpQkFDTzs7Ozs7YUFDZixDQUNSO0NBQ0w7R0FyQktQLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQXVCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL1RvcEJhbm5lci5qcz8xNmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRXcmFwcGVyIH0gZnJvbSAnLi4vQ29udGVudFdyYXBwZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRNdWx0aUJ1dHRvbiB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xuXG5cbmNvbnN0IFRvcEJhbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgIHNldFRpbWUobmV3IERhdGUoKSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlVGltZSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrXCI+XG4gICAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGxlYWRpbmctbm9ybWFsIGgtYXV0byBweS0yXCI+e3RpbWUudG9Mb2NhbGVEYXRlU3RyaW5nKFtdLCB7IGRhdGVTdHlsZTogXCJsb25nXCIgfSkgKyBcIiBcIiArIHRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IHRpbWVTdHlsZTogXCJtZWRpdW1cIiB9KX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxXYWxsZXRNdWx0aUJ1dHRvbiBjbGFzc05hbWUgPSBcImZvbnQtc2FucyB0ZXh0LXNtIGZvbnQtYm9sZCBoLWF1dG8gbGVhZGluZy1ub3JtYWwgcHktMiBweC0xXCI+PC9XYWxsZXRNdWx0aUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcEJhbm5lcjsiXSwibmFtZXMiOlsiQ29udGVudFdyYXBwZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2FsbGV0TXVsdGlCdXR0b24iLCJUb3BCYW5uZXIiLCJ1cGRhdGVUaW1lIiwic2V0VGltZSIsIkRhdGUiLCJ0aW1lIiwic2V0SW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF0ZVN0eWxlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwidGltZVN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/TopBanner.js\n");

/***/ })

});