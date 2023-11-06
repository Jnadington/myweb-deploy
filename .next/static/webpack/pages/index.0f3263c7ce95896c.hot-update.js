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

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Projects() {\n    const projects = [\n        {\n            title: \"Algo Trading Execution\",\n            description: \"https://github.com/Jnadington/Algo-Trading-Project/tree/main\",\n            image: \"https://i.postimg.cc/0Q7sYKFm/test-algo.png\"\n        },\n        {\n            title: \"AWS RoboAdvisor\",\n            description: \"This is a CUI built on the AWS platform that helps users make investment decisions based on their risk tolerance and investment horizon.\",\n            image: \"\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#89F819]/50\",\n                children: projects.map((project, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                                initial: {\n                                    y: -300,\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 1.2\n                                },\n                                whileInView: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                src: project.image,\n                                alt: project.title\n                            }, void 0, false, {\n                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-10 px-0 md:px-10 max-w-6xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-4xl font-semibold text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"underline decoration-[#89F819]/50\",\n                                                children: [\n                                                    \"Case Study \",\n                                                    i + 1,\n                                                    \" of \",\n                                                    projects.length,\n                                                    \":\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, this),\n                                            project.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, project.title, true, {\n                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#89F819]/10 left-0 h-[500px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ2Q7QUFFekIsU0FBU0UsV0FBVztJQUNoQixNQUFNQyxXQUFXO1FBQ2I7WUFDSUMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87UUFDWDtRQUNBO1lBQ0lGLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxPQUFPO1FBQ1g7S0FFSDtJQUVELHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW1FOzs7Ozs7MEJBSWpGLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVkwsU0FBU08sR0FBRyxDQUFDLENBQUNDLFNBQVNDLGtCQUNwQiw4REFBQ0w7d0JBRUdDLFdBQVU7OzBDQUVWLDhEQUFDUixxREFBVTtnQ0FDUGMsU0FBUztvQ0FDTEMsR0FBRyxDQUFDO29DQUNKQyxTQUFTO2dDQUNiO2dDQUNBQyxZQUFZO29DQUFFQyxVQUFVO2dDQUFJO2dDQUM1QkMsYUFBYTtvQ0FBRUgsU0FBUztvQ0FBR0QsR0FBRztnQ0FBRTtnQ0FDaENLLFVBQVU7b0NBQUVDLE1BQU0sSUFBSTtnQ0FBQztnQ0FDdkJDLEtBQUtYLFFBQVFMLEtBQUs7Z0NBQ2xCaUIsS0FBS1osUUFBUVAsS0FBSzs7Ozs7OzBDQUV0Qiw4REFBQ0c7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDZ0I7d0NBQUdoQixXQUFVOzswREFDViw4REFBQ2lCO2dEQUFLakIsV0FBVTs7b0RBQW9DO29EQUNwQ0ksSUFBSTtvREFBRTtvREFBS1QsU0FBU3VCLE1BQU07b0RBQUM7Ozs7Ozs7NENBRXpDZixRQUFRUCxLQUFLOzs7Ozs7O2tEQUVuQiw4REFBQ3VCO2tEQUFHaEIsUUFBUU4sV0FBVzs7Ozs7Ozs7Ozs7Ozt1QkFyQnRCTSxRQUFRUCxLQUFLOzs7Ozs7Ozs7OzBCQTJCOUIsOERBQUNHO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHM0I7S0F0RFNOO0FBd0RULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4P2YzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJBbGdvIFRyYWRpbmcgRXhlY3V0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJodHRwczovL2dpdGh1Yi5jb20vSm5hZGluZ3Rvbi9BbGdvLVRyYWRpbmctUHJvamVjdC90cmVlL21haW5cIixcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjLzBRN3NZS0ZtL3Rlc3QtYWxnby5wbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQVdTIFJvYm9BZHZpc29yXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgQ1VJIGJ1aWx0IG9uIHRoZSBBV1MgcGxhdGZvcm0gdGhhdCBoZWxwcyB1c2VycyBtYWtlIGludmVzdG1lbnQgZGVjaXNpb25zIGJhc2VkIG9uIHRoZWlyIHJpc2sgdG9sZXJhbmNlIGFuZCBpbnZlc3RtZW50IGhvcml6b24uXCIsIFxuICAgICAgICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIG1vcmUgcHJvamVjdHMgaGVyZVxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlIGZsZXggb3ZlcmZsb3ctaGlkZGVuIHRleHQtbGVmdCBtZDpmbGV4LXJvdyBtYXgtdy1mdWxsIGp1c3RpZnktZXZlbmx5IG14LWF1dG8gaXRlbXMtY2VudGVyIHotMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yNCB1cHBlcmNhc2UgdHJhY2tpbmctWzIwcHhdIHRleHQtZ3JheS01MDAgdGV4dC0yeGxcIj4gXG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGZsZXggb3ZlcmZsb3cteC1zY3JvbGwgb3ZlcmZsb3cteS1oaWRkZW4gc25hcC14IHNuYXAtbWFuZGF0b3J5IHotMjAgc2Nyb2xsYmFyIHNjcm9sbGJhci10cmFjay1ncmF5LTQwMC8yMCBzY3JvbGxiYXItdGh1bWItWyM4OUY4MTldLzUwXCI+XG4gICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LnRpdGxlfSAvLyBBZGRpbmcga2V5IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctc2NyZWVuIGZsZXgtc2hyaW5rLTAgc25hcC1jZW50ZXIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMjAgbWQ6cC00NCBoLXNjcmVlblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAtMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS4yIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMCBweC0wIG1kOnB4LTEwIG1heC13LTZ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZSBkZWNvcmF0aW9uLVsjODlGODE5XS81MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZSBTdHVkeSB7aSArIDF9IG9mIHtwcm9qZWN0cy5sZW5ndGh9OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGFic29sdXRlIHRvcC1bMzAlXSBiZy1bIzg5RjgxOV0vMTAgbGVmdC0wIGgtWzUwMHB4XSAtc2tldy15LTEyXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzXG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJQcm9qZWN0cyIsInByb2plY3RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJwcm9qZWN0IiwiaSIsImltZyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwic3JjIiwiYWx0IiwiaDQiLCJzcGFuIiwibGVuZ3RoIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});