"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/deposit_trash",{

/***/ "./components/DepositTrashView.js":
/*!****************************************!*\
  !*** ./components/DepositTrashView.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { Connection } from '@metaplex/js';\n// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    if (!publicKey) {\n        console.log(\"all good\");\n    }\n    var balance = 0;\n    function getBalance() {\n        return _getBalance.apply(this, arguments);\n    }\n    function _getBalance() {\n        _getBalance = _asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!publicKey) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return connection.getBalance(publicKey, \"confirmed\");\n                    case 4:\n                        balance = _ctx.sent;\n                        _ctx.next = 7;\n                        return connection.getParsedTokenAccountsByOwner(publicKey, {\n                            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        response.value.forEach(function(accountInfo) {\n                            console.log(\"pubkey: \".concat(accountInfo.pubkey.toBase58()));\n                            console.log(\"mint: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]));\n                            console.log(\"owner: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]));\n                            console.log(\"decimals: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]));\n                            console.log(\"amount: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]));\n                            console.log(\"====================\");\n                        });\n                        balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.LAMPORTS_PER_SOL;\n                        console.log(balance);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(\"error getting balance: \", _ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _getBalance.apply(this, arguments);\n    }\n    getBalance();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white my-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(DepositTrashContainer, \"ODp5U7iB7RlLKHrHxrUTS4V9an8=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer);\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlcG9zaXRUcmFzaFZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RTtBQUNaO0FBQzVELDZDQUE2QztBQUM3QyxzRUFBc0U7QUFDbUI7QUFDcEM7QUFDSDs7QUFHbEQsU0FBU1kscUJBQXFCLEdBQUc7O0lBQzdCLElBQThCWixHQUFXLEdBQVhBLHVFQUFTLEVBQUUsRUFBakNhLE1BQU0sR0FBZ0JiLEdBQVcsQ0FBakNhLE1BQU0sRUFBRUMsU0FBUyxHQUFLZCxHQUFXLENBQXpCYyxTQUFTO0lBQ3pCLElBQU0sVUFBWSxHQUFLYiwyRUFBYSxFQUFFLENBQTlCYyxVQUFVO0lBRWxCLElBQUksQ0FBQ0QsU0FBUyxFQUFFO1FBQ1pFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsSUFBSUMsT0FBTyxHQUFHLENBQUM7YUFFQUMsVUFBVTtlQUFWQSxXQUFVOzthQUFWQSxXQUFVO1FBQVZBLFdBQVUsR0FBekIsdUxBQTRCO2dCQU9aQyxRQUFROzs7OzRCQU5oQk4sQ0FBQUEsU0FBUzs7Ozs7OytCQUVXQyxVQUFVLENBQUNJLFVBQVUsQ0FDakNMLFNBQVMsRUFDVCxXQUFXLENBQ2Q7O3dCQUhESSxPQUFPLFlBR047OytCQUNvQkgsVUFBVSxDQUFDTSw2QkFBNkIsQ0FBQ1AsU0FBUyxFQUFFOzRCQUFFUSxTQUFTLEVBQUVaLCtEQUFnQjt5QkFBRSxDQUFDOzt3QkFBckdVLFFBQVEsWUFBNkY7d0JBQ3pHQSxRQUFRLENBQUNHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLFdBQVcsRUFBSzs0QkFDaENULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVMsQ0FBZ0MsT0FBOUJRLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUUsQ0FBRSxDQUFDOzRCQUN2RFgsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBTyxDQUFxRCxPQUFuRFEsV0FBVyxDQUFDRyxPQUFPLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBRSxDQUFDLENBQUM7NEJBQzNFYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFRLENBQXNELE9BQXBEUSxXQUFXLENBQUNHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUMsQ0FBQzs0QkFDN0ViLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVcsQ0FBd0UsT0FBdEVRLFdBQVcsQ0FBQ0csT0FBTyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUUsQ0FBQyxDQUFDOzRCQUNsR2IsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBUyxDQUFzRSxPQUFwRVEsV0FBVyxDQUFDRyxPQUFPLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBRSxDQUFDLENBQUM7NEJBQzlGYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzt5QkFDcEMsQ0FBQyxDQUFDO3dCQUNUQyxPQUFPLEdBQUdBLE9BQU8sR0FBR1QsNkRBQWdCLENBQUM7d0JBQ3JDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Ozs7Ozt3QkFFckJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLHlCQUF1QixVQUFLLENBQUM7Ozs7Ozs7Ozs7O1NBR3JEO2VBdEJjRSxXQUFVOztJQXdCekJBLFVBQVUsRUFBRSxDQUFDO0lBRWIscUJBQ0ksOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFHLGdCQUFnQjtrQkFDakMsNEVBQUNwQiwyREFBYztzQkFDWCw0RUFBQ21CLEtBQUc7MEJBQUMsT0FBSzs7Ozs7b0JBQU07Ozs7O2dCQUNIOzs7OztZQUNYLENBQ1I7Q0FDTDtHQTFDUWxCLHFCQUFxQjs7UUFDSVosbUVBQVM7UUFDaEJDLHVFQUFhOzs7QUFGL0JXLEtBQUFBLHFCQUFxQjtBQTRDOUIsK0RBQWVBLHFCQUFxQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGVwb3NpdFRyYXNoVmlldy5qcz8wNzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCwgdXNlQ29ubmVjdGlvbiB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0BtZXRhcGxleC9qcyc7XG4vLyBpbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ0BtZXRhcGxleC1mb3VuZGF0aW9uL21wbC10b2tlbi1tZXRhZGF0YSc7XG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgeyBUT0tFTl9QUk9HUkFNX0lEIH0gZnJvbSBcIkBzb2xhbmEvc3BsLXRva2VuXCI7XG5pbXBvcnQgeyBDb250ZW50V3JhcHBlciB9IGZyb20gXCIuL0NvbnRlbnRXcmFwcGVyXCI7XG5cblxuZnVuY3Rpb24gRGVwb3NpdFRyYXNoQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHsgd2FsbGV0LCBwdWJsaWNLZXkgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xuXG4gICAgaWYgKCFwdWJsaWNLZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbCBnb29kJyk7XG4gICAgfVxuICAgIGxldCBiYWxhbmNlID0gMDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSB7XG4gICAgICAgIGlmIChwdWJsaWNLZXkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShcbiAgICAgICAgICAgICAgICAgICAgcHVibGljS2V5LFxuICAgICAgICAgICAgICAgICAgICAnY29uZmlybWVkJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRQYXJzZWRUb2tlbkFjY291bnRzQnlPd25lcihwdWJsaWNLZXksIHsgcHJvZ3JhbUlkOiBUT0tFTl9QUk9HUkFNX0lEIH0pO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnZhbHVlLmZvckVhY2goKGFjY291bnRJbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcHVia2V5OiAke2FjY291bnRJbmZvLnB1YmtleS50b0Jhc2U1OCgpfWApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbWludDogJHthY2NvdW50SW5mby5hY2NvdW50LmRhdGFbXCJwYXJzZWRcIl1bXCJpbmZvXCJdW1wibWludFwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvd25lcjogJHthY2NvdW50SW5mby5hY2NvdW50LmRhdGFbXCJwYXJzZWRcIl1bXCJpbmZvXCJdW1wib3duZXJcIl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGVjaW1hbHM6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiZGVjaW1hbHNcIl19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgYW1vdW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImFtb3VudFwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT1cIilcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gYmFsYW5jZSAvIExBTVBPUlRTX1BFUl9TT0w7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmFsYW5jZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGdldHRpbmcgYmFsYW5jZTogYCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCYWxhbmNlKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJiZy13aGl0ZSBteS0xNlwiPlxuICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICA8ZGl2PkhlbGxvPC9kaXY+XG4gICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlcG9zaXRUcmFzaENvbnRhaW5lcjsiXSwibmFtZXMiOlsidXNlV2FsbGV0IiwidXNlQ29ubmVjdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiY2x1c3RlckFwaVVybCIsIkNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwiVE9LRU5fUFJPR1JBTV9JRCIsIkNvbnRlbnRXcmFwcGVyIiwiRGVwb3NpdFRyYXNoQ29udGFpbmVyIiwid2FsbGV0IiwicHVibGljS2V5IiwiY29ubmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJiYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInJlc3BvbnNlIiwiZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIiLCJwcm9ncmFtSWQiLCJ2YWx1ZSIsImZvckVhY2giLCJhY2NvdW50SW5mbyIsInB1YmtleSIsInRvQmFzZTU4IiwiYWNjb3VudCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});