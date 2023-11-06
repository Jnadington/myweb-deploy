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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Projects() {\n    const projects = [\n        {\n            title: \"Algo Trading Execution\",\n            description: \"Algo strategy execution with backtest displayed on line price chart with estimated returns. Allows user to adjust candlestick trade timeframe and TP/StopLoss for varying results.\",\n            image: \"https://i.postimg.cc/br0Tg5LS/algo-trade2.png\",\n            githubUrl: \"https://github.com/Jnadington/Algo-Trading-Project/tree/main\"\n        },\n        {\n            title: \"AWS RoboAdvisor\",\n            description: \"This is a CUI built on the AWS platform that helps users make investment decisions based on their risk tolerance and investment horizon.\",\n            image: \"https://i.postimg.cc/pLMvp550/Test-Bot-Lambda2.gif\",\n            githubUrl: \"https://github.com/Jnadington/AWS-RoboAdvisor\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#89F819]/50\",\n                children: projects.map((project, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: project.githubUrl,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\" // This is important for security reasons\n                                ,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                                    initial: {\n                                        y: -300,\n                                        opacity: 0\n                                    },\n                                    transition: {\n                                        duration: 1.2\n                                    },\n                                    whileInView: {\n                                        opacity: 1,\n                                        y: 0\n                                    },\n                                    viewport: {\n                                        once: true\n                                    },\n                                    src: project.image,\n                                    alt: project.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-10 px-0 md:px-10 max-w-6xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-4xl font-semibold text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"underline decoration-[#89F819]/50\",\n                                                children: [\n                                                    \"Case Study \",\n                                                    i + 1,\n                                                    \" of \",\n                                                    projects.length,\n                                                    \":\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, this),\n                                            project.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, project.title, true, {\n                        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#89F819]/10 left-0 h-[500px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/masonhoi/Desktop/myweb_deploy/components/Projects.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQ2Q7QUFFekIsU0FBU0UsV0FBVztJQUNoQixNQUFNQyxXQUFXO1FBQ2I7WUFDSUMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsV0FBVztRQUNmO1FBQ0E7WUFDSUgsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsV0FBVztRQUNmO0tBRUg7SUFFRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtRTs7Ozs7OzBCQUlqRiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2ROLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxrQkFDaEMsOERBQUNMO3dCQUVHQyxXQUFVOzswQ0FFViw4REFBQ0s7Z0NBQ0dDLE1BQU1ILFFBQVFMLFNBQVM7Z0NBQ3ZCUyxRQUFPO2dDQUNQQyxLQUFJLHNCQUFzQix5Q0FBeUM7OzBDQUVuRSw0RUFBQ2pCLHFEQUFVO29DQUNQbUIsU0FBUzt3Q0FDTEMsR0FBRyxDQUFDO3dDQUNKQyxTQUFTO29DQUNiO29DQUNBQyxZQUFZO3dDQUFFQyxVQUFVO29DQUFJO29DQUM1QkMsYUFBYTt3Q0FBRUgsU0FBUzt3Q0FBR0QsR0FBRztvQ0FBRTtvQ0FDaENLLFVBQVU7d0NBQUVDLE1BQU0sSUFBSTtvQ0FBQztvQ0FDdkJDLEtBQUtmLFFBQVFOLEtBQUs7b0NBQ2xCc0IsS0FBS2hCLFFBQVFSLEtBQUs7Ozs7Ozs7Ozs7OzBDQUcxQiw4REFBQ0k7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDb0I7d0NBQUdwQixXQUFVOzswREFDViw4REFBQ3FCO2dEQUFLckIsV0FBVTs7b0RBQW9DO29EQUNwQ0ksSUFBSTtvREFBRTtvREFBS1YsU0FBUzRCLE1BQU07b0RBQUM7Ozs7Ozs7NENBRXpDbkIsUUFBUVIsS0FBSzs7Ozs7OztrREFFbkIsOERBQUM0QjtrREFBR3BCLFFBQVFQLFdBQVc7Ozs7Ozs7Ozs7Ozs7dUJBM0J0Qk8sUUFBUVIsS0FBSzs7Ozs7Ozs7OzswQkFnQ2QsOERBQUNJO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHM0I7S0E3RFNQO0FBK0RULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4P2YzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJBbGdvIFRyYWRpbmcgRXhlY3V0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbGdvIHN0cmF0ZWd5IGV4ZWN1dGlvbiB3aXRoIGJhY2t0ZXN0IGRpc3BsYXllZCBvbiBsaW5lIHByaWNlIGNoYXJ0IHdpdGggZXN0aW1hdGVkIHJldHVybnMuIEFsbG93cyB1c2VyIHRvIGFkanVzdCBjYW5kbGVzdGljayB0cmFkZSB0aW1lZnJhbWUgYW5kIFRQL1N0b3BMb3NzIGZvciB2YXJ5aW5nIHJlc3VsdHMuXCIsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2kucG9zdGltZy5jYy9icjBUZzVMUy9hbGdvLXRyYWRlMi5wbmdcIixcbiAgICAgICAgICAgIGdpdGh1YlVybDogXCJodHRwczovL2dpdGh1Yi5jb20vSm5hZGluZ3Rvbi9BbGdvLVRyYWRpbmctUHJvamVjdC90cmVlL21haW5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogXCJBV1MgUm9ib0Fkdmlzb3JcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBDVUkgYnVpbHQgb24gdGhlIEFXUyBwbGF0Zm9ybSB0aGF0IGhlbHBzIHVzZXJzIG1ha2UgaW52ZXN0bWVudCBkZWNpc2lvbnMgYmFzZWQgb24gdGhlaXIgcmlzayB0b2xlcmFuY2UgYW5kIGludmVzdG1lbnQgaG9yaXpvbi5cIiwgXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2kucG9zdGltZy5jYy9wTE12cDU1MC9UZXN0LUJvdC1MYW1iZGEyLmdpZlwiLFxuICAgICAgICAgICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9KbmFkaW5ndG9uL0FXUy1Sb2JvQWR2aXNvclwiXG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIG1vcmUgcHJvamVjdHMgd2l0aCBnaXRodWJVcmwgaGVyZVxuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiByZWxhdGl2ZSBmbGV4IG92ZXJmbG93LWhpZGRlbiB0ZXh0LWxlZnQgbWQ6ZmxleC1yb3cgbWF4LXctZnVsbCBqdXN0aWZ5LWV2ZW5seSBteC1hdXRvIGl0ZW1zLWNlbnRlciB6LTBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjQgdXBwZXJjYXNlIHRyYWNraW5nLVsyMHB4XSB0ZXh0LWdyYXktNTAwIHRleHQtMnhsXCI+IFxuICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBmbGV4IG92ZXJmbG93LXgtc2Nyb2xsIG92ZXJmbG93LXktaGlkZGVuIHNuYXAteCBzbmFwLW1hbmRhdG9yeSB6LTIwIHNjcm9sbGJhciBzY3JvbGxiYXItdHJhY2stZ3JheS00MDAvMjAgc2Nyb2xsYmFyLXRodW1iLVsjODlGODE5XS81MFwiPlxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4gKFxuICAgIDxkaXYgXG4gICAgICAgIGtleT17cHJvamVjdC50aXRsZX0gLy8gVW5pcXVlIGtleSBmb3IgZWFjaCBjaGlsZFxuICAgICAgICBjbGFzc05hbWU9XCJ3LXNjcmVlbiBmbGV4LXNocmluay0wIHNuYXAtY2VudGVyIGZsZXggZmxleC1jb2wgc3BhY2UteS01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIwIG1kOnAtNDQgaC1zY3JlZW5cIlxuICAgID5cbiAgICAgICAgPGEgXG4gICAgICAgICAgICBocmVmPXtwcm9qZWN0LmdpdGh1YlVybH0gXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3Igc2VjdXJpdHkgcmVhc29uc1xuICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICAgICAgICAgICAgeTogLTMwMCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuMiB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEwIHB4LTAgbWQ6cHgtMTAgbWF4LXctNnhsXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZSBkZWNvcmF0aW9uLVsjODlGODE5XS81MFwiPlxuICAgICAgICAgICAgICAgICAgICBDYXNlIFN0dWR5IHtpICsgMX0gb2Yge3Byb2plY3RzLmxlbmd0aH06XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8cD57cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGFic29sdXRlIHRvcC1bMzAlXSBiZy1bIzg5RjgxOV0vMTAgbGVmdC0wIGgtWzUwMHB4XSAtc2tldy15LTEyXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzXG4iXSwibmFtZXMiOlsibW90aW9uIiwiUmVhY3QiLCJQcm9qZWN0cyIsInByb2plY3RzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiZ2l0aHViVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJwcm9qZWN0IiwiaSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaW1nIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJzcmMiLCJhbHQiLCJoNCIsInNwYW4iLCJsZW5ndGgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});