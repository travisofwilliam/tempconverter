webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      unit = _useState2[0],\n      setUnit = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      conversionUnit = _useState3[0],\n      setConversionUnit = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined),\n      result = _useState4[0],\n      setResult = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      errorMessage = _useState5[0],\n      setErrorMessage = _useState5[1];\n\n  var handleInputChange = function handleInputChange(e) {\n    setInput(e.target.value);\n  };\n\n  var handleUnitChange = function handleUnitChange(e) {\n    setUnit(e.target.value);\n  };\n\n  var handleConversionUnitChange = function handleConversionUnitChange(e) {\n    setConversionUnit(e.target.value);\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault(); // console.log(input, unit, conversionUnit)\n\n    if (isNaN(input)) {\n      setErrorMessage('Please enter only numbers');\n    } else if (input === '') {\n      'Please enter a tempterature to convert';\n    } else if (unit === '') {\n      setErrorMessage('Please select a valid unit of measurement');\n    } else if (conversionUnit === '') {\n      setErrorMessage('Please select a valid conversion unit');\n    } else {\n      if (unit === 'kelvin') {\n        if (conversionUnit === 'farenheit') {\n          var resultKF = (input - 273) * (9 / 5) + 35;\n          setResult(resultKF.toFixed(0));\n        } else if (conversionUnit === 'celsius') {\n          var resultKC = input - 273.15;\n          setResult(resultKC.toFixed(0));\n        }\n      } else if (unit === 'farenheit') {\n        if (conversionUnit === 'celsius') {\n          var resultFC = (input - 32) * 5 / 9;\n          setResult(resultFC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultFK = (input - 32) * 5 / 9 + 5;\n          setResult(resultFK.toFixed(0));\n        }\n      } else if (unit === 'celsius') {\n        if (conversionUnit === 'farenheit') {\n          var resultCF = input * 9 / 5 + 32;\n          setResult(resultCF.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultCK = input + 273.15;\n          setResult(resultCK.toFixed(0));\n        }\n      }\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/yeti/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"display-5\",\n    style: {\n      objectFit: 'scale-down'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, \"Temperature Converter\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: unit,\n    onChange: handleUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"mb-3\",\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) ? __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 28\n    }\n  }, result + '°') : errorMessage));\n};\n\n_s(Index, \"mVgKS7wsBpxOdc3CaXTLcusVEE4=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVuaXQiLCJzZXRVbml0IiwiY29udmVyc2lvblVuaXQiLCJzZXRDb252ZXJzaW9uVW5pdCIsInVuZGVmaW5lZCIsInJlc3VsdCIsInNldFJlc3VsdCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVW5pdENoYW5nZSIsImhhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInJlc3VsdEtGIiwidG9GaXhlZCIsInJlc3VsdEtDIiwicmVzdWx0RkMiLCJyZXN1bHRGSyIsInJlc3VsdENGIiwicmVzdWx0Q0siLCJvYmplY3RGaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRVhDLEtBRlc7QUFBQSxNQUVKQyxRQUZJOztBQUFBLG1CQUdNRixzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR1hHLElBSFc7QUFBQSxNQUdMQyxPQUhLOztBQUFBLG1CQUkwQkosc0RBQVEsQ0FBQyxFQUFELENBSmxDO0FBQUEsTUFJWEssY0FKVztBQUFBLE1BSUtDLGlCQUpMOztBQUFBLG1CQUtVTixzREFBUSxDQUFDTyxTQUFELENBTGxCO0FBQUEsTUFLWEMsTUFMVztBQUFBLE1BS0hDLFNBTEc7O0FBQUEsbUJBTXNCVCxzREFBUSxDQUFDLEVBQUQsQ0FOOUI7QUFBQSxNQU1YVSxZQU5XO0FBQUEsTUFNR0MsZUFOSDs7QUFRbEIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFv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LCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3VuaXQsIHNldFVuaXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb252ZXJzaW9uVW5pdCwgc2V0Q29udmVyc2lvblVuaXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVVbml0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRVbml0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnZlcnNpb25Vbml0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAvLyBjb25zb2xlLmxvZyhpbnB1dCwgdW5pdCwgY29udmVyc2lvblVuaXQpXG4gICAgaWYgKGlzTmFOKGlucHV0KSkge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2UgZW50ZXIgb25seSBudW1iZXJzJylcbiAgICB9IGVsc2UgaWYgKGlucHV0ID09PSAnJykge1xuICAgICAgJ1BsZWFzZSBlbnRlciBhIHRlbXB0ZXJhdHVyZSB0byBjb252ZXJ0J1xuICAgIH1cbiAgICBlbHNlIGlmICh1bml0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgdW5pdCBvZiBtZWFzdXJlbWVudCcpXG4gICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJycpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnUGxlYXNlIHNlbGVjdCBhIHZhbGlkIGNvbnZlcnNpb24gdW5pdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh1bml0ID09PSAna2VsdmluJykge1xuICAgICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdEtGID0gKChpbnB1dCAtIDI3MykgKiAoOSAvIDUpICsgMzUpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEtGLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgICAgIHZhciByZXN1bHRLQyA9IGlucHV0IC0gMjczLjE1XG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEtDLnRvRml4ZWQoMCkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0RkMgPSAoKGlucHV0IC0gMzIpICogNSAvIDkpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZDLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdEZLID0gKChpbnB1dCAtIDMyKSAqIDUgLyA5KSArIDVcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0RksudG9GaXhlZCgwKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh1bml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgICAgIHZhciByZXN1bHRDRiA9ICgoaW5wdXQgKiA5IC8gNSkgKyAzMilcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0Q0YudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0Q0sgPSBpbnB1dCArIDI3My4xNVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRDSy50b0ZpeGVkKDApKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyIG14LWF1dG8nPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L3lldGkvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNVwiIHN0eWxlPXt7IG9iamVjdEZpdDogJ3NjYWxlLWRvd24nIH19PlRlbXBlcmF0dXJlIENvbnZlcnRlcjwvaDE+XG4gICAgICAgICAgPHA+Q29udmVydDo8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgVGVtcGVyYXR1cmUnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nbWItMycgdmFsdWU9e3VuaXR9IG9uQ2hhbmdlPXtoYW5kbGVVbml0Q2hhbmdlfT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLVNlbGVjdCBVbml0IG9mIE1lYXN1cmUtLTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhcmVuaGVpdFwiPkZhcmVuaGVpdDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbHNpdXNcIj5DZWxzaXVzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2VsdmluXCI+S2VsdmluPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHA+VG86IDwvcD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nbWItMycgdmFsdWU9e2NvbnZlcnNpb25Vbml0fSBvbkNoYW5nZT17aGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IGEgVW5pdCBvZiBNZWFzdXJlLS08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYXJlbmhlaXRcIj5GYXJlbmhlaXQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxzaXVzXCI+Q2Vsc2l1czwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtlbHZpblwiPktlbHZpbjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtYi0zJyB0eXBlPSdzdWJtaXQnPkNvbnZlcnQgVGVtcGVyYXR1cmU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7XG4gICAgICAgICAgIWlzTmFOKHJlc3VsdCkgPyA8aDM+e3Jlc3VsdCArICfCsCd9PC9oMz4gOiBlcnJvck1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})