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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Projects() {\n    const projects = [\n        {\n            title: \"Algo Trading Execution\",\n            description: \"Algo strategy execution with backtest displayed on line price chart with estimated returns. Allows user to adjust candlestick trade timeframe and TP/StopLoss for varying results. Click on the image above to view github repo: https://github.com/Jnadington/Algo-Trading-Project/tree/main\",\n            image: \"https://i.postimg.cc/br0Tg5LS/algo-trade2.png\",\n            githubUrl: \"https://github.com/Jnadington/Algo-Trading-Project/tree/main\"\n        },\n        {\n            title: \"AWS RoboAdvisor\",\n            description: \"This is a CUI built on the AWS platform that helps users make investment decisions based on their risk tolerance and investment horizon.\",\n            image: \"https://i.postimg.cc/pLMvp550/Test-Bot-Lambda2.gif\",\n            githubUrl: \"https://github.com/Jnadington/AWS-RoboAdvisor\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#89F819]/50\",\n                children: projects.map((project, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: project.githubUrl,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\" // This is important for security reasons\n                                ,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                                    initial: {\n                                        y: -300,\n                                        opacity: 0\n                                    },\n                                    transition: {\n                                        duration: 1.2\n                                    },\n                                    whileInView: {\n                                        opacity: 1,\n                                        y: 0\n                                    },\n                                    viewport: {\n                                        once: true\n                                    },\n                                    src: project.image,\n                                    alt: project.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-10 px-0 md:px-10 max-w-6xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-4xl font-semibold text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"underline decoration-[#89F819]/50\",\n                                                children: [\n                                                    \"Project \",\n                                                    i + 1,\n                                                    \" of \",\n                                                    projects.length,\n                                                    \":\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, this),\n                                            project.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, project.title, true, {\n                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#89F819]/10 left-0 h-[500px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ2Q7QUFFekIsU0FBU0UsV0FBVztJQUNoQixNQUFNQyxXQUFXO1FBQ2I7WUFDSUMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsV0FBVztRQUNmO1FBQ0E7WUFDSUgsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsV0FBVztRQUNmO0tBRUg7SUFFRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtRTs7Ozs7OzBCQUlqRiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2ROLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxrQkFDaEMsOERBQUNMO3dCQUVHQyxXQUFVOzswQ0FFViw4REFBQ0s7Z0NBQ0dDLE1BQU1ILFFBQVFMLFNBQVM7Z0NBQ3ZCUyxRQUFPO2dDQUNQQyxLQUFJLHNCQUFzQix5Q0FBeUM7OzBDQUVuRSw0RUFBQ2pCLHFEQUFVO29DQUNQbUIsU0FBUzt3Q0FDTEMsR0FBRyxDQUFDO3dDQUNKQyxTQUFTO29DQUNiO29DQUNBQyxZQUFZO3dDQUFFQyxVQUFVO29DQUFJO29DQUM1QkMsYUFBYTt3Q0FBRUgsU0FBUzt3Q0FBR0QsR0FBRztvQ0FBRTtvQ0FDaENLLFVBQVU7d0NBQUVDLE1BQU0sSUFBSTtvQ0FBQztvQ0FDdkJDLEtBQUtmLFFBQVFOLEtBQUs7b0NBQ2xCc0IsS0FBS2hCLFFBQVFSLEtBQUs7Ozs7Ozs7Ozs7OzBDQUcxQiw4REFBQ0k7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDb0I7d0NBQUdwQixXQUFVOzswREFDViw4REFBQ3FCO2dEQUFLckIsV0FBVTs7b0RBQW9DO29EQUN2Q0ksSUFBSTtvREFBRTtvREFBS1YsU0FBUzRCLE1BQU07b0RBQUM7Ozs7Ozs7NENBRXRDbkIsUUFBUVIsS0FBSzs7Ozs7OztrREFFbkIsOERBQUM0QjtrREFBR3BCLFFBQVFQLFdBQVc7Ozs7Ozs7Ozs7Ozs7dUJBM0J0Qk8sUUFBUVIsS0FBSzs7Ozs7Ozs7OzswQkFnQ2QsOERBQUNJO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHM0I7S0E3RFNQO0FBK0RULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4P2YzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJBbGdvIFRyYWRpbmcgRXhlY3V0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbGdvIHN0cmF0ZWd5IGV4ZWN1dGlvbiB3aXRoIGJhY2t0ZXN0IGRpc3BsYXllZCBvbiBsaW5lIHByaWNlIGNoYXJ0IHdpdGggZXN0aW1hdGVkIHJldHVybnMuIEFsbG93cyB1c2VyIHRvIGFkanVzdCBjYW5kbGVzdGljayB0cmFkZSB0aW1lZnJhbWUgYW5kIFRQL1N0b3BMb3NzIGZvciB2YXJ5aW5nIHJlc3VsdHMuIENsaWNrIG9uIHRoZSBpbWFnZSBhYm92ZSB0byB2aWV3IGdpdGh1YiByZXBvOiBodHRwczovL2dpdGh1Yi5jb20vSm5hZGluZ3Rvbi9BbGdvLVRyYWRpbmctUHJvamVjdC90cmVlL21haW5cIixcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjL2JyMFRnNUxTL2FsZ28tdHJhZGUyLnBuZ1wiLFxuICAgICAgICAgICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9KbmFkaW5ndG9uL0FsZ28tVHJhZGluZy1Qcm9qZWN0L3RyZWUvbWFpblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFXUyBSb2JvQWR2aXNvclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIENVSSBidWlsdCBvbiB0aGUgQVdTIHBsYXRmb3JtIHRoYXQgaGVscHMgdXNlcnMgbWFrZSBpbnZlc3RtZW50IGRlY2lzaW9ucyBiYXNlZCBvbiB0aGVpciByaXNrIHRvbGVyYW5jZSBhbmQgaW52ZXN0bWVudCBob3Jpem9uLlwiLCBcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5wb3N0aW1nLmNjL3BMTXZwNTUwL1Rlc3QtQm90LUxhbWJkYTIuZ2lmXCIsXG4gICAgICAgICAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0puYWRpbmd0b24vQVdTLVJvYm9BZHZpc29yXCJcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgbW9yZSBwcm9qZWN0cyB3aXRoIGdpdGh1YlVybCBoZXJlXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlIGZsZXggb3ZlcmZsb3ctaGlkZGVuIHRleHQtbGVmdCBtZDpmbGV4LXJvdyBtYXgtdy1mdWxsIGp1c3RpZnktZXZlbmx5IG14LWF1dG8gaXRlbXMtY2VudGVyIHotMFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yNCB1cHBlcmNhc2UgdHJhY2tpbmctWzIwcHhdIHRleHQtZ3JheS01MDAgdGV4dC0yeGxcIj4gXG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGZsZXggb3ZlcmZsb3cteC1zY3JvbGwgb3ZlcmZsb3cteS1oaWRkZW4gc25hcC14IHNuYXAtbWFuZGF0b3J5IHotMjAgc2Nyb2xsYmFyIHNjcm9sbGJhci10cmFjay1ncmF5LTQwMC8yMCBzY3JvbGxiYXItdGh1bWItWyM4OUY4MTldLzUwXCI+XG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXG4gICAgPGRpdiBcbiAgICAgICAga2V5PXtwcm9qZWN0LnRpdGxlfSAvLyBVbmlxdWUga2V5IGZvciBlYWNoIGNoaWxkXG4gICAgICAgIGNsYXNzTmFtZT1cInctc2NyZWVuIGZsZXgtc2hyaW5rLTAgc25hcC1jZW50ZXIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMjAgbWQ6cC00NCBoLXNjcmVlblwiXG4gICAgPlxuICAgICAgICA8YSBcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHViVXJsfSBcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgICAgICAgICB5OiAtMzAwLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS4yIH19XG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTAgcHgtMCBtZDpweC0xMCBtYXgtdy02eGxcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lIGRlY29yYXRpb24tWyM4OUY4MTldLzUwXCI+XG4gICAgICAgICAgICAgICAgICAgIFByb2plY3Qge2kgKyAxfSBvZiB7cHJvamVjdHMubGVuZ3RofTpcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxwPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYWJzb2x1dGUgdG9wLVszMCVdIGJnLVsjODlGODE5XS8xMCBsZWZ0LTAgaC1bNTAwcHhdIC1za2V3LXktMTJcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJSZWFjdCIsIlByb2plY3RzIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJnaXRodWJVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsInByb2plY3QiLCJpIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJpbWciLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsInNyYyIsImFsdCIsImg0Iiwic3BhbiIsImxlbmd0aCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});