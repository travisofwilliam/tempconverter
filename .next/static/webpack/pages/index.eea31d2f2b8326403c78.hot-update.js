webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      unit = _useState2[0],\n      setUnit = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      conversionUnit = _useState3[0],\n      setConversionUnit = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      result = _useState4[0],\n      setResult = _useState4[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setInput(e.target.value);\n  };\n\n  var handleUnitChange = function handleUnitChange(e) {\n    setUnit(e.target.value);\n  };\n\n  var handleConversionUnitChange = function handleConversionUnitChange(e) {\n    setConversionUnit(e.target.value);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault(); // console.log(input, unit, conversionUnit)\n\n    if (unit === 'kelvin') {\n      if (conversionUnit === 'farenheit') {\n        var resultKF = (input - 273) * (9 / 5) + 35;\n        setResult(resultKF.toFixed(0));\n      } else if (conversionUnit === 'celsius') {\n        var resultKC = input - 273.15;\n        setResult(resultKC.toFixed(0));\n      }\n    } else if (unit === 'farenheit') {\n      if (conversionUnit === 'celsius') {\n        var resultFC = (input - 32) * 5 / 9;\n        setResult(resultFC.toFixed(0));\n      } else if (conversionUnit === 'kelvin') {\n        var resultFK = (input - 32) * 5 / 9 + 5;\n        setResult(resultFK.toFixed(0));\n      }\n    } else if (unit === 'celsius') {\n      if (conversionUnit === 'farenheit') {\n        var resultCF = input * 9 / 5 + 32;\n        setResult(resultCF.toFixed(0));\n      } else if (conversionUnit === 'kelvin') {\n        var resultCK = input + 273.15;\n        setResult(resultCK.toFixed(0));\n      }\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/yeti/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"display-4\",\n    style: {\n      objectFit: 'scale-down'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"Temperature Converter\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: unit,\n    onChange: handleUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"mb-3\",\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) ? __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 28\n    }\n  }, result + '°') : ''));\n};\n\n_s(Index, \"Hy4oJStUWUb6/MUkCnbGcWVM4bs=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVuaXQiLCJzZXRVbml0IiwiY29udmVyc2lvblVuaXQiLCJzZXRDb252ZXJzaW9uVW5pdCIsInVuZGVmaW5lZCIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVW5pdENoYW5nZSIsImhhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXN1bHRLRiIsInRvRml4ZWQiLCJyZXN1bHRLQyIsInJlc3VsdEZDIiwicmVzdWx0RksiLCJyZXN1bHRDRiIsInJlc3VsdENLIiwib2JqZWN0Rml0IiwiaXNOYU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRVhDLEtBRlc7QUFBQSxNQUVKQyxRQUZJOztBQUFBLG1CQUdNRixzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR1hHLElBSFc7QUFBQSxNQUdMQyxPQUhLOztBQUFBLG1CQUkwQkosc0RBQVEsQ0FBQyxFQUFELENBSmxDO0FBQUEsTUFJWEssY0FKVztBQUFBLE1BSUtDLGlCQUpMOztBQUFBLG1CQUtVTixzREFBUSxDQUFDTyxTQUFELENBTGxCO0FBQUEsTUFLWEMsTUFMVztBQUFBLE1BS0hDLFNBTEc7O0FBT2xCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQy9CVCxZQUFRLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGdCQUFnQixHQUFH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QUVFO0FBQVEsU0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLEVBSUU7QUFBUSxTQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FuQkYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixFQTBCRTtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUF5QixRQUFJLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkExQkYsQ0FERixFQThCSSxDQUFDVyxLQUFLLENBQUNsQixNQUFELENBQU4sR0FBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxNQUFNLEdBQUcsR0FBZCxDQUFqQixHQUEyQyxFQTlCL0MsQ0FKRixDQURGO0FBMENELENBM0ZEOztHQUFNVCxLOztLQUFBQSxLO0FBNkZTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdW5pdCwgc2V0VW5pdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbnZlcnNpb25Vbml0LCBzZXRDb252ZXJzaW9uVW5pdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVVbml0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRVbml0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnZlcnNpb25Vbml0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyBjb25zb2xlLmxvZyhpbnB1dCwgdW5pdCwgY29udmVyc2lvblVuaXQpXG4gICAgaWYgKHVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgIHZhciByZXN1bHRLRiA9ICgoaW5wdXQgLSAyNzMpICogKDkgLyA1KSArIDM1KVxuICAgICAgICBzZXRSZXN1bHQocmVzdWx0S0YudG9GaXhlZCgwKSlcbiAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICB2YXIgcmVzdWx0S0MgPSBpbnB1dCAtIDI3My4xNVxuICAgICAgICBzZXRSZXN1bHQocmVzdWx0S0MudG9GaXhlZCgwKSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICB2YXIgcmVzdWx0RkMgPSAoKGlucHV0IC0gMzIpICogNSAvIDkpXG4gICAgICAgIHNldFJlc3VsdChyZXN1bHRGQy50b0ZpeGVkKDApKVxuICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgICAgdmFyIHJlc3VsdEZLID0gKChpbnB1dCAtIDMyKSAqIDUgLyA5KSArIDVcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZLLnRvRml4ZWQoMCkpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgdmFyIHJlc3VsdENGID0gKChpbnB1dCAqIDkgLyA1KSArIDMyKVxuICAgICAgICBzZXRSZXN1bHQocmVzdWx0Q0YudG9GaXhlZCgwKSlcbiAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgIHZhciByZXN1bHRDSyA9IGlucHV0ICsgMjczLjE1XG4gICAgICAgIHNldFJlc3VsdChyZXN1bHRDSy50b0ZpeGVkKDApKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciBteC1hdXRvJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC95ZXRpL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIiBzdHlsZT17eyBvYmplY3RGaXQ6ICdzY2FsZS1kb3duJyB9fT5UZW1wZXJhdHVyZSBDb252ZXJ0ZXI8L2gxPlxuICAgICAgICAgIDxwPkNvbnZlcnQ6PC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFRlbXBlcmF0dXJlJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J21iLTMnIHZhbHVlPXt1bml0fSBvbkNoYW5nZT17aGFuZGxlVW5pdENoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgVW5pdCBvZiBNZWFzdXJlLS08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYXJlbmhlaXRcIj5GYXJlbmhlaXQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxzaXVzXCI+Q2Vsc2l1czwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtlbHZpblwiPktlbHZpbjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwPlRvOiA8L3A+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J21iLTMnIHZhbHVlPXtjb252ZXJzaW9uVW5pdH0gb25DaGFuZ2U9e2hhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlfT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVNlbGVjdCBhIFVuaXQgb2YgTWVhc3VyZS0tPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFyZW5oZWl0XCI+RmFyZW5oZWl0PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2Vsc2l1c1wiPkNlbHNpdXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZWx2aW5cIj5LZWx2aW48L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbWItMycgdHlwZT0nc3VibWl0Jz5Db252ZXJ0IFRlbXBlcmF0dXJlPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAge1xuICAgICAgICAgICFpc05hTihyZXN1bHQpID8gPGgzPntyZXN1bHQgKyAnwrAnfTwvaDM+IDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})