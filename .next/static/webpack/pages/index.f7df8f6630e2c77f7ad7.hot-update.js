webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      unit = _useState2[0],\n      setUnit = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      conversionUnit = _useState3[0],\n      setConversionUnit = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      result = _useState4[0],\n      setResult = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      errorMessage = _useState5[0],\n      setErrorMessage = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('btn-info'),\n      unitBtn = _useState6[0],\n      setUnitBtn = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('btn-info'),\n      conversionBtn = _useState7[0],\n      setConversionBtn = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      clicked = _useState8[0],\n      setClicked = _useState8[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setInput(e.target.value);\n  };\n\n  var handleUnitChange = function handleUnitChange(e) {\n    setUnit(e.target.value);\n    setUnitBtn('btn-success');\n  };\n\n  var handleConversionUnitChange = function handleConversionUnitChange(e) {\n    setConversionUnit(e.target.value);\n    setConversionBtn('btn-success');\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n\n    if (isNaN(input) || input === '') {\n      setErrorMessage('Please enter a tempterature to convert. Temperature must only contain integers.');\n    } else if (unit === '') {\n      setErrorMessage('Please select a valid unit of measurement');\n    } else if (conversionUnit === '') {\n      setErrorMessage('Please select a valid conversion unit');\n    } else {\n      if (unit === 'kelvin') {\n        if (conversionUnit === 'farenheit') {\n          var resultKF = (parseInt(input) - 273) * (9 / 5) + 35;\n          setResult(resultKF.toFixed(0));\n        } else if (conversionUnit === 'celsius') {\n          var resultKC = parseInt(input) - 273.15;\n          setResult(resultKC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'farenheit') {\n        if (conversionUnit === 'celsius') {\n          var resultFC = (parseInt(input) - 32) * 5 / 9;\n          setResult(resultFC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultFK = (parseInt(input) - 32) * 5 / 9 + 5;\n          setResult(resultFK.toFixed(2));\n        } else if (conversionUnit === 'farenheit') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'celsius') {\n        if (conversionUnit === 'farenheit') {\n          var resultCF = parseInt(input) * 9 / 5 + 32;\n          setResult(resultCF.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultCK = parseInt(input) + 273.15;\n          setResult(resultCK.toFixed(2));\n        } else if (conversionUnit === 'celsius') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      }\n    }\n\n    setInput('');\n    setClicked(true);\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/pulse/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"display-5\",\n    style: {\n      objectFit: 'scale-down'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, \"Temperature Converter\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }), __jsx(\"select\", {\n    className: \"mb-3 dropdown p-2 \".concat(unitBtn),\n    style: {\n      color: 'black'\n    },\n    value: unit,\n    onChange: handleUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: \"mb-3 dropdown p-2 \".concat(conversionBtn),\n    style: {\n      color: 'black'\n    },\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary mb-3\",\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) && clicked ? __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  }, conversionUnit === 'kelvin' ? result : result + '°') : errorMessage));\n};\n\n_s(Index, \"P+A5JcNb1XQulqAtgvvFkravCec=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVuaXQiLCJzZXRVbml0IiwiY29udmVyc2lvblVuaXQiLCJzZXRDb252ZXJzaW9uVW5pdCIsInVuZGVmaW5lZCIsInJlc3VsdCIsInNldFJlc3VsdCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVuaXRCdG4iLCJzZXRVbml0QnRuIiwiY29udmVyc2lvbkJ0biIsInNldENvbnZlcnNpb25CdG4iLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVW5pdENoYW5nZSIsImhhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInJlc3VsdEtGIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwicmVzdWx0S0MiLCJyZXN1bHRGQyIsInJlc3VsdEZLIiwicmVzdWx0Q0YiLCJyZXN1bHRDSyIsIm9iamVjdEZpdCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVYQyxLQUZXO0FBQUEsTUFFSkMsUUFGSTs7QUFBQSxtQkFHTUYsc0RBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUdYRyxJQUhXO0FBQUEsTUFHTEMsT0FISzs7QUFBQSxtQkFJMEJKLHNEQUFRLENBQUMsRUFBRCxDQUpsQztBQUFBLE1BSVhLLGNBSlc7QUFBQSxNQUlLQyxpQkFKTDs7QUFBQSxtQkFLVU4sc0RBQVEsQ0FBQ08sU0FBRCxDQUxsQjtBQUFBLE1BS1hDLE1BTFc7QUFBQSxNQUtIQyxTQUxHOztBQUFB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cG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt1bml0LCBzZXRVbml0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY29udmVyc2lvblVuaXQsIHNldENvbnZlcnNpb25Vbml0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt1bml0QnRuLCBzZXRVbml0QnRuXSA9IHVzZVN0YXRlKCdidG4taW5mbycpXG4gIGNvbnN0IFtjb252ZXJzaW9uQnRuLCBzZXRDb252ZXJzaW9uQnRuXSA9IHVzZVN0YXRlKCdidG4taW5mbycpXG4gIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVuaXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFVuaXQoZS50YXJnZXQudmFsdWUpXG4gICAgc2V0VW5pdEJ0bignYnRuLXN1Y2Nlc3MnKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnZlcnNpb25Vbml0KGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldENvbnZlcnNpb25CdG4oJ2J0bi1zdWNjZXNzJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoaXNOYU4oaW5wdXQpIHx8IGlucHV0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2UgZW50ZXIgYSB0ZW1wdGVyYXR1cmUgdG8gY29udmVydC4gVGVtcGVyYXR1cmUgbXVzdCBvbmx5IGNvbnRhaW4gaW50ZWdlcnMuJylcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICcnKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgYSB2YWxpZCB1bml0IG9mIG1lYXN1cmVtZW50JylcbiAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgY29udmVyc2lvbiB1bml0JylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0S0YgPSAoKHBhcnNlSW50KGlucHV0KSAtIDI3MykgKiAoOSAvIDUpICsgMzUpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEtGLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICAgIHZhciByZXN1bHRLQyA9IHBhcnNlSW50KGlucHV0KSAtIDI3My4xNVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRLQy50b0ZpeGVkKDApKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAna2VsdmluJykge1xuICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnV2FybmluZzogT3JpZ2luYWwgdGVtcGVyYXR1cmUgdW5pdCBhbmQgY29udmVyc2lvbiB1bml0IGNhbiBub3QgYmUgdGhlIHNhbWUhJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh1bml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICAgIHZhciByZXN1bHRGQyA9ICgocGFyc2VJbnQoaW5wdXQpIC0gMzIpICogNSAvIDkpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZDLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdEZLID0gKChwYXJzZUludChpbnB1dCkgLSAzMikgKiA1IC8gOSkgKyA1XG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZLLnRvRml4ZWQoMikpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdXYXJuaW5nOiBPcmlnaW5hbCB0ZW1wZXJhdHVyZSB1bml0IGFuZCBjb252ZXJzaW9uIHVuaXQgY2FuIG5vdCBiZSB0aGUgc2FtZSEnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdENGID0gKChwYXJzZUludChpbnB1dCkgKiA5IC8gNSkgKyAzMilcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0Q0YudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0Q0sgPSAocGFyc2VJbnQoaW5wdXQpICsgMjczLjE1KVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRDSy50b0ZpeGVkKDIpKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1dhcm5pbmc6IE9yaWdpbmFsIHRlbXBlcmF0dXJlIHVuaXQgYW5kIGNvbnZlcnNpb24gdW5pdCBjYW4gbm90IGJlIHRoZSBzYW1lIScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXQoJycpXG4gICAgc2V0Q2xpY2tlZCh0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyIG14LWF1dG8nPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L3B1bHNlL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNVwiIHN0eWxlPXt7IG9iamVjdEZpdDogJ3NjYWxlLWRvd24nIH19PlRlbXBlcmF0dXJlIENvbnZlcnRlcjwvaDE+XG4gICAgICAgICAgPHA+Q29udmVydDo8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgVGVtcGVyYXR1cmUnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BtYi0zIGRyb3Bkb3duIHAtMiAke3VuaXRCdG59YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19XG4gICAgICAgICAgICB2YWx1ZT17dW5pdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVbml0Q2hhbmdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVNlbGVjdCBVbml0IG9mIE1lYXN1cmUtLTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhcmVuaGVpdFwiPkZhcmVuaGVpdDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbHNpdXNcIj5DZWxzaXVzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2VsdmluXCI+S2VsdmluPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHA+VG86IDwvcD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BtYi0zIGRyb3Bkb3duIHAtMiAke2NvbnZlcnNpb25CdG59YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19XG4gICAgICAgICAgICB2YWx1ZT17Y29udmVyc2lvblVuaXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IGEgVW5pdCBvZiBNZWFzdXJlLS08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYXJlbmhlaXRcIj5GYXJlbmhlaXQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxzaXVzXCI+Q2Vsc2l1czwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtlbHZpblwiPktlbHZpbjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IG1iLTMnXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29udmVydCBUZW1wZXJhdHVyZVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAge1xuICAgICAgICAgICFpc05hTihyZXN1bHQpICYmIGNsaWNrZWQgP1xuICAgICAgICAgICAgPGgzPntcbiAgICAgICAgICAgICAgY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nID8gcmVzdWx0XG4gICAgICAgICAgICAgICAgOiByZXN1bHQgKyAnwrAnXG4gICAgICAgICAgICB9PC9oMz5cbiAgICAgICAgICAgIDogZXJyb3JNZXNzYWdlXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})