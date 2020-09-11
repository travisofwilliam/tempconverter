webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      inputPersist = _useState2[0],\n      setInputPersist = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      unit = _useState3[0],\n      setUnit = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      conversionUnit = _useState4[0],\n      setConversionUnit = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      result = _useState5[0],\n      setResult = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      errorMessage = _useState6[0],\n      setErrorMessage = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('btn-info'),\n      unitBtn = _useState7[0],\n      setUnitBtn = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('btn-info'),\n      conversionBtn = _useState8[0],\n      setConversionBtn = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      clicked = _useState9[0],\n      setClicked = _useState9[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setInput(e.target.value);\n    setInputPersist(e.target.value);\n    setClicked(false);\n  };\n\n  var handleUnitChange = function handleUnitChange(e) {\n    setUnit(e.target.value);\n    setUnitBtn('btn-success');\n    setClicked(false);\n  };\n\n  var handleConversionUnitChange = function handleConversionUnitChange(e) {\n    setConversionUnit(e.target.value);\n    setConversionBtn('btn-success');\n    setClicked(false);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n\n    if (isNaN(input) || input === '') {\n      setErrorMessage('Please enter a tempterature to convert. Temperature must only contain integers.');\n    } else if (unit === '') {\n      setErrorMessage('Please select a valid unit of measurement');\n    } else if (conversionUnit === '') {\n      setErrorMessage('Please select a valid conversion unit');\n    } else {\n      if (unit === 'kelvin') {\n        if (conversionUnit === 'farenheit') {\n          var resultKF = (parseInt(input) - 273) * (9 / 5) + 35;\n          setResult(resultKF.toFixed(0));\n        } else if (conversionUnit === 'celsius') {\n          var resultKC = parseInt(input) - 273.15;\n          setResult(resultKC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'farenheit') {\n        if (conversionUnit === 'celsius') {\n          var resultFC = (parseInt(input) - 32) * 5 / 9;\n          setResult(resultFC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultFK = (parseInt(input) - 32) * 5 / 9 + 5;\n          setResult(resultFK.toFixed(2));\n        } else if (conversionUnit === 'farenheit') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'celsius') {\n        if (conversionUnit === 'farenheit') {\n          var resultCF = parseInt(input) * 9 / 5 + 32;\n          setResult(resultCF.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultCK = parseInt(input) + 273.15;\n          setResult(resultCK.toFixed(2));\n        } else if (conversionUnit === 'celsius') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      }\n    }\n\n    setInputPersist('');\n    setClicked(true);\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/pulse/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"display-5\",\n    style: {\n      objectFit: 'scale-down'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, \"Temperature Converter\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }), __jsx(\"select\", {\n    className: \"mb-3 dropdown p-2 \".concat(unitBtn),\n    style: {\n      color: 'black'\n    },\n    value: unit,\n    onChange: handleUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: \"mb-3 dropdown p-2 \".concat(conversionBtn),\n    style: {\n      color: 'black'\n    },\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary mb-3\",\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) && clicked ? __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }, conversionUnit === 'kelvin' ? result : result + '°') : errorMessage));\n};\n\n_s(Index, \"OsakpjmMqXKnPnrsG3dRZLfhNwY=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImlucHV0UGVyc2lzdCIsInNldElucHV0UGVyc2lzdCIsInVuaXQiLCJzZXRVbml0IiwiY29udmVyc2lvblVuaXQiLCJzZXRDb252ZXJzaW9uVW5pdCIsInVuZGVmaW5lZCIsInJlc3VsdCIsInNldFJlc3VsdCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVuaXRCdG4iLCJzZXRVbml0QnRuIiwiY29udmVyc2lvbkJ0biIsInNldENvbnZlcnNpb25CdG4iLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVW5pdENoYW5nZSIsImhhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInJlc3VsdEtGIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwicmVzdWx0S0MiLCJyZXN1bHRGQyIsInJlc3VsdEZLIiwicmVzdWx0Q0YiLCJyZXN1bHRDSyIsIm9iamVjdEZpdCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVYQyxLQUZXO0FBQUEsTUFFSkMsUUFGSTs7QUFBQSxtQkFHc0JGLHNEQUFRLENBQUMsRUFBRCxDQUg5QjtBQUFBLE1BR1hHLFlBSFc7QUFBQSxNQUdHQyxlQUhIOztBQUFBLG1CQUlNSixzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSVhLLElBSlc7QUFBQSxNQUlMQyxPQUpLOztBQUFBLG1CQUswQk4sc0RBQVEsQ0FBQyxFQUFELENBTGxDO0FBQUEs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QUFOLElBQWtCUSxPQUFsQixHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVgsY0FBYyxLQUFLLFFBQW5CLEdBQThCRyxNQUE5QixHQUNJQSxNQUFNLEdBQUcsR0FGZixDQURGLEdBS0lFLFlBcERSLENBSkYsQ0FERjtBQStERCxDQTNJRDs7R0FBTWIsSzs7S0FBQUEsSztBQTZJU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtpbnB1dFBlcnNpc3QsIHNldElucHV0UGVyc2lzdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3VuaXQsIHNldFVuaXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb252ZXJzaW9uVW5pdCwgc2V0Q29udmVyc2lvblVuaXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3VuaXRCdG4sIHNldFVuaXRCdG5dID0gdXNlU3RhdGUoJ2J0bi1pbmZvJylcbiAgY29uc3QgW2NvbnZlcnNpb25CdG4sIHNldENvbnZlcnNpb25CdG5dID0gdXNlU3RhdGUoJ2J0bi1pbmZvJylcbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldElucHV0UGVyc2lzdChlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRDbGlja2VkKGZhbHNlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVW5pdENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VW5pdChlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRVbml0QnRuKCdidG4tc3VjY2VzcycpXG4gICAgc2V0Q2xpY2tlZChmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRDb252ZXJzaW9uVW5pdChlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRDb252ZXJzaW9uQnRuKCdidG4tc3VjY2VzcycpXG4gICAgc2V0Q2xpY2tlZChmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoaXNOYU4oaW5wdXQpIHx8IGlucHV0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2UgZW50ZXIgYSB0ZW1wdGVyYXR1cmUgdG8gY29udmVydC4gVGVtcGVyYXR1cmUgbXVzdCBvbmx5IGNvbnRhaW4gaW50ZWdlcnMuJylcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICcnKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgYSB2YWxpZCB1bml0IG9mIG1lYXN1cmVtZW50JylcbiAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgY29udmVyc2lvbiB1bml0JylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0S0YgPSAoKHBhcnNlSW50KGlucHV0KSAtIDI3MykgKiAoOSAvIDUpICsgMzUpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEtGLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICAgIHZhciByZXN1bHRLQyA9IHBhcnNlSW50KGlucHV0KSAtIDI3My4xNVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRLQy50b0ZpeGVkKDApKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAna2VsdmluJykge1xuICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnV2FybmluZzogT3JpZ2luYWwgdGVtcGVyYXR1cmUgdW5pdCBhbmQgY29udmVyc2lvbiB1bml0IGNhbiBub3QgYmUgdGhlIHNhbWUhJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh1bml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICAgIHZhciByZXN1bHRGQyA9ICgocGFyc2VJbnQoaW5wdXQpIC0gMzIpICogNSAvIDkpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZDLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdEZLID0gKChwYXJzZUludChpbnB1dCkgLSAzMikgKiA1IC8gOSkgKyA1XG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZLLnRvRml4ZWQoMikpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdXYXJuaW5nOiBPcmlnaW5hbCB0ZW1wZXJhdHVyZSB1bml0IGFuZCBjb252ZXJzaW9uIHVuaXQgY2FuIG5vdCBiZSB0aGUgc2FtZSEnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdENGID0gKChwYXJzZUludChpbnB1dCkgKiA5IC8gNSkgKyAzMilcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0Q0YudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0Q0sgPSAocGFyc2VJbnQoaW5wdXQpICsgMjczLjE1KVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRDSy50b0ZpeGVkKDIpKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1dhcm5pbmc6IE9yaWdpbmFsIHRlbXBlcmF0dXJlIHVuaXQgYW5kIGNvbnZlcnNpb24gdW5pdCBjYW4gbm90IGJlIHRoZSBzYW1lIScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0SW5wdXRQZXJzaXN0KCcnKVxuICAgIHNldENsaWNrZWQodHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciBteC1hdXRvJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9wdWxzZS9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTVcIiBzdHlsZT17eyBvYmplY3RGaXQ6ICdzY2FsZS1kb3duJyB9fT5UZW1wZXJhdHVyZSBDb252ZXJ0ZXI8L2gxPlxuICAgICAgICAgIDxwPkNvbnZlcnQ6PC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFRlbXBlcmF0dXJlJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWItMyBkcm9wZG93biBwLTIgJHt1bml0QnRufWB9XG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fVxuICAgICAgICAgICAgdmFsdWU9e3VuaXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVW5pdENoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgVW5pdCBvZiBNZWFzdXJlLS08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYXJlbmhlaXRcIj5GYXJlbmhlaXQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxzaXVzXCI+Q2Vsc2l1czwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtlbHZpblwiPktlbHZpbjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwPlRvOiA8L3A+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWItMyBkcm9wZG93biBwLTIgJHtjb252ZXJzaW9uQnRufWB9XG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fVxuICAgICAgICAgICAgdmFsdWU9e2NvbnZlcnNpb25Vbml0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVNlbGVjdCBhIFVuaXQgb2YgTWVhc3VyZS0tPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFyZW5oZWl0XCI+RmFyZW5oZWl0PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2Vsc2l1c1wiPkNlbHNpdXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZWx2aW5cIj5LZWx2aW48L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBtYi0zJ1xuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbnZlcnQgVGVtcGVyYXR1cmVcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIHtcbiAgICAgICAgICAhaXNOYU4ocmVzdWx0KSAmJiBjbGlja2VkID9cbiAgICAgICAgICAgIDxoMz57XG4gICAgICAgICAgICAgIGNvbnZlcnNpb25Vbml0ID09PSAna2VsdmluJyA/IHJlc3VsdFxuICAgICAgICAgICAgICAgIDogcmVzdWx0ICsgJ8KwJ1xuICAgICAgICAgICAgfTwvaDM+XG4gICAgICAgICAgICA6IGVycm9yTWVzc2FnZVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})