webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      unit = _useState2[0],\n      setUnit = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      conversionUnit = _useState3[0],\n      setConversionUnit = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      result = _useState4[0],\n      setResult = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      errorMessage = _useState5[0],\n      setErrorMessage = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('btn-info'),\n      unitBtn = _useState6[0],\n      setUnitBtn = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('btn-info'),\n      conversionBtn = _useState7[0],\n      setConversionBtn = _useState7[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setInput(e.target.value);\n  };\n\n  var handleUnitChange = function handleUnitChange(e) {\n    setUnit(e.target.value);\n    setUnitBtn('btn-success');\n  };\n\n  var handleConversionUnitChange = function handleConversionUnitChange(e) {\n    setConversionUnit(e.target.value);\n    setConversionBtn('btn-success');\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n\n    if (isNaN(input) || input === '') {\n      setErrorMessage('Please enter a tempterature to convert. Temperature must only contain integers.');\n    } else if (unit === '') {\n      setErrorMessage('Please select a valid unit of measurement');\n    } else if (conversionUnit === '') {\n      setErrorMessage('Please select a valid conversion unit');\n    } else {\n      if (unit === 'kelvin') {\n        if (conversionUnit === 'farenheit') {\n          var resultKF = (parseInt(input) - 273) * (9 / 5) + 35;\n          setResult(resultKF.toFixed(0));\n        } else if (conversionUnit === 'celsius') {\n          var resultKC = parseInt(input) - 273.15;\n          setResult(resultKC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'farenheit') {\n        if (conversionUnit === 'celsius') {\n          var resultFC = (parseInt(input) - 32) * 5 / 9;\n          setResult(resultFC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultFK = (parseInt(input) - 32) * 5 / 9 + 5;\n          setResult(resultFK.toFixed(0));\n        } else if (conversionUnit === 'farenheit') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'celsius') {\n        if (conversionUnit === 'farenheit') {\n          var resultCF = parseInt(input) * 9 / 5 + 32;\n          setResult(resultCF.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultCK = parseInt(input) + 273.15;\n          setResult(resultCK.toFixed(2));\n        } else if (conversionUnit === 'celsius') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      }\n    } // setInput('')\n\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/yeti/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"display-5\",\n    style: {\n      objectFit: 'scale-down'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, \"Temperature Converter\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"dropdown\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(\"select\", {\n    className: \"mb-3 \".concat(unitBtn),\n    value: unit,\n    onChange: handleUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 15\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 15\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 15\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 15\n    }\n  }, \"Kelvin\"))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: \"mb-3 dropdown \".concat(conversionBtn),\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary mb-3\",\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) ? __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 28\n    }\n  }, result + '°') : errorMessage));\n};\n\n_s(Index, \"f9gF9lROunCc/PKJ1uHduM8TiCk=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVuaXQiLCJzZXRVbml0IiwiY29udmVyc2lvblVuaXQiLCJzZXRDb252ZXJzaW9uVW5pdCIsInVuZGVmaW5lZCIsInJlc3VsdCIsInNldFJlc3VsdCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInVuaXRCdG4iLCJzZXRVbml0QnRuIiwiY29udmVyc2lvbkJ0biIsInNldENvbnZlcnNpb25CdG4iLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVVuaXRDaGFuZ2UiLCJoYW5kbGVDb252ZXJzaW9uVW5pdENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaXNOYU4iLCJyZXN1bHRLRiIsInBhcnNlSW50IiwidG9GaXhlZCIsInJlc3VsdEtDIiwicmVzdWx0RkMiLCJyZXN1bHRGSyIsInJlc3VsdENGIiwicmVzdWx0Q0siLCJvYmplY3RGaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRVhDLEtBRlc7QUFBQSxNQUVKQyxRQUZJOztBQUFBLG1CQUdNRixzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR1hHLElBSFc7QUFBQSxNQUdMQyxPQUhLOztBQUFBLG1CQUkwQkosc0RBQVEsQ0FBQyxFQUFELENBSmxDO0FBQUEsTUFJWEssY0FKVztBQUFBLE1BSUtDLGlCQUpMOztBQUFBLG1CQUtVTixzREFBUSxDQUFDTyxTQUFELENBTGxCO0FBQUEsTUFLWEMsTUFMVztBQUFBLE1BS0hDLFNBTEc7O0FBQUEsbUJBTXNCVCxzREFBUSxDQUFDLEVBQUQsQ0FOOUI7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SyxFQUFFVCxjQUE1RDtBQUE0RSxZQUFRLEVBQUVnQiwwQkFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixFQUVFO0FBQVEsU0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLEVBSUU7QUFBUSxTQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FyQkYsRUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixFQTRCRTtBQUFRLGFBQVMsRUFBQyxzQkFBbEI7QUFBeUMsUUFBSSxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBNUJGLENBREYsRUFnQ0ksQ0FBQ0csS0FBSyxDQUFDaEIsTUFBRCxDQUFOLEdBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsTUFBTSxHQUFHLEdBQWQsQ0FBakIsR0FBMkNFLFlBaEMvQyxDQUpGLENBREY7QUEyQ0QsQ0FoSEQ7O0dBQU1YLEs7O0tBQUFBLEs7QUFrSFNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdW5pdCwgc2V0VW5pdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbnZlcnNpb25Vbml0LCBzZXRDb252ZXJzaW9uVW5pdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdW5pdEJ0biwgc2V0VW5pdEJ0bl0gPSB1c2VTdGF0ZSgnYnRuLWluZm8nKVxuICBjb25zdCBbY29udmVyc2lvbkJ0biwgc2V0Q29udmVyc2lvbkJ0bl0gPSB1c2VTdGF0ZSgnYnRuLWluZm8nKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVuaXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFVuaXQoZS50YXJnZXQudmFsdWUpXG4gICAgc2V0VW5pdEJ0bignYnRuLXN1Y2Nlc3MnKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnZlcnNpb25Vbml0KGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldENvbnZlcnNpb25CdG4oJ2J0bi1zdWNjZXNzJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoaXNOYU4oaW5wdXQpIHx8IGlucHV0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2UgZW50ZXIgYSB0ZW1wdGVyYXR1cmUgdG8gY29udmVydC4gVGVtcGVyYXR1cmUgbXVzdCBvbmx5IGNvbnRhaW4gaW50ZWdlcnMuJylcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICcnKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgYSB2YWxpZCB1bml0IG9mIG1lYXN1cmVtZW50JylcbiAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgY29udmVyc2lvbiB1bml0JylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0S0YgPSAoKHBhcnNlSW50KGlucHV0KSAtIDI3MykgKiAoOSAvIDUpICsgMzUpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEtGLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICAgIHZhciByZXN1bHRLQyA9IHBhcnNlSW50KGlucHV0KSAtIDI3My4xNVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRLQy50b0ZpeGVkKDApKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAna2VsdmluJykge1xuICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnV2FybmluZzogT3JpZ2luYWwgdGVtcGVyYXR1cmUgdW5pdCBhbmQgY29udmVyc2lvbiB1bml0IGNhbiBub3QgYmUgdGhlIHNhbWUhJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh1bml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICAgIHZhciByZXN1bHRGQyA9ICgocGFyc2VJbnQoaW5wdXQpIC0gMzIpICogNSAvIDkpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZDLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdEZLID0gKChwYXJzZUludChpbnB1dCkgLSAzMikgKiA1IC8gOSkgKyA1XG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZLLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdXYXJuaW5nOiBPcmlnaW5hbCB0ZW1wZXJhdHVyZSB1bml0IGFuZCBjb252ZXJzaW9uIHVuaXQgY2FuIG5vdCBiZSB0aGUgc2FtZSEnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdENGID0gKChwYXJzZUludChpbnB1dCkgKiA5IC8gNSkgKyAzMilcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0Q0YudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0Q0sgPSAocGFyc2VJbnQoaW5wdXQpICsgMjczLjE1KVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRDSy50b0ZpeGVkKDIpKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1dhcm5pbmc6IE9yaWdpbmFsIHRlbXBlcmF0dXJlIHVuaXQgYW5kIGNvbnZlcnNpb24gdW5pdCBjYW4gbm90IGJlIHRoZSBzYW1lIScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0SW5wdXQoJycpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgbXgtYXV0byc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQveWV0aS9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS01XCIgc3R5bGU9e3sgb2JqZWN0Rml0OiAnc2NhbGUtZG93bicgfX0+VGVtcGVyYXR1cmUgQ29udmVydGVyPC9oMT5cbiAgICAgICAgICA8cD5Db252ZXJ0OjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbWItMydcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBUZW1wZXJhdHVyZSdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bic+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17YG1iLTMgJHt1bml0QnRufWB9IHZhbHVlPXt1bml0fSBvbkNoYW5nZT17aGFuZGxlVW5pdENoYW5nZX0+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVNlbGVjdCBVbml0IG9mIE1lYXN1cmUtLTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFyZW5oZWl0XCI+RmFyZW5oZWl0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxzaXVzXCI+Q2Vsc2l1czwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2VsdmluXCI+S2VsdmluPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cD5UbzogPC9wPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtgbWItMyBkcm9wZG93biAke2NvbnZlcnNpb25CdG59YH0gdmFsdWU9e2NvbnZlcnNpb25Vbml0fSBvbkNoYW5nZT17aGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IGEgVW5pdCBvZiBNZWFzdXJlLS08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYXJlbmhlaXRcIj5GYXJlbmhlaXQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxzaXVzXCI+Q2Vsc2l1czwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtlbHZpblwiPktlbHZpbjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnkgbWItMycgdHlwZT0nc3VibWl0Jz5Db252ZXJ0IFRlbXBlcmF0dXJlPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAge1xuICAgICAgICAgICFpc05hTihyZXN1bHQpID8gPGgzPntyZXN1bHQgKyAnwrAnfTwvaDM+IDogZXJyb3JNZXNzYWdlXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})