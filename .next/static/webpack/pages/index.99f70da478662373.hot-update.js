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

/***/ "./components/SkillMongoDB.tsx":
/*!*************************************!*\
  !*** ./components/SkillMongoDB.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction skill(param) {\n    let { directionLeft  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group relative flex cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                initial: {\n                    x: directionLeft ? -200 : 200,\n                    opacity: 0\n                },\n                transition: {\n                    duration: 1\n                },\n                whileInView: {\n                    opacity: 1,\n                    x: 0\n                },\n                src: \"https://newrelic.com/sites/default/files/styles/800w/public/2021-10/mongo_logo.jpg?itok=Z1PabBZB\",\n                className: \"rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out\"\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/SkillMongoDB.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center h-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-bold text-black opacity-100\",\n                        children: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/SkillMongoDB.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/SkillMongoDB.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/SkillMongoDB.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/SkillMongoDB.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (skill);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NraWxsTW9uZ29EQi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1QztBQUNiO0FBTTFCLFNBQVNFLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFFQyxjQUFhLEVBQVMsR0FBeEI7SUFDYixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNMLHFEQUFVO2dCQUNQTyxTQUFTO29CQUNMQyxHQUFHTCxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUc7b0JBQzdCTSxTQUFTO2dCQUNiO2dCQUNKQyxZQUFZO29CQUFFQyxVQUFVO2dCQUFFO2dCQUMxQkMsYUFBYTtvQkFBRUgsU0FBUztvQkFBR0QsR0FBRztnQkFBQztnQkFDL0JLLEtBQUk7Z0JBRUpSLFdBQVU7Ozs7OzswQkFFViw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDUzt3QkFBRVQsV0FBVTtrQ0FBNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekU7QUFFQSwrREFBZUgsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NraWxsTW9uZ29EQi50c3g/NDZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uTGVmdD86IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBza2lsbCh7IGRpcmVjdGlvbkxlZnQgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGZsZXggY3Vyc29yLXBvaW50ZXJcIj4gXG4gICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgeDogZGlyZWN0aW9uTGVmdCA/IC0yMDAgOiAyMDAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSB9fVxuICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwfX1cbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9uZXdyZWxpYy5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy9zdHlsZXMvODAwdy9wdWJsaWMvMjAyMS0xMC9tb25nb19sb2dvLmpwZz9pdG9rPVoxUGFiQlpCXCJcbiAgICAgICAgXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIG9iamVjdC1jb3ZlciB3LTI0IGgtMjQgeGw6dy0zMiB4bDpoLTMyIGZpbHRlciBncm91cC1ob3ZlcjpncmF5c2NhbGUgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOmJnLXdoaXRlIGgtMjQgdy0yNCBtZDp3LTI4IG1kOmgtMjggeGw6dy0zMiB4bDpoLTMyIHJvdW5kZWQtZnVsbCB6LTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmxhY2sgb3BhY2l0eS0xMDBcIj4xMDAlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBza2lsbCJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsInNraWxsIiwiZGlyZWN0aW9uTGVmdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsImluaXRpYWwiLCJ4Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIndoaWxlSW5WaWV3Iiwic3JjIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SkillMongoDB.tsx\n"));

/***/ })

});