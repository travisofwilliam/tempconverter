module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = () => {\n  const {\n    0: input,\n    1: setInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: unit,\n    1: setUnit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: conversionUnit,\n    1: setConversionUnit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: result,\n    1: setResult\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined);\n\n  const handleInputChange = e => {\n    setInput(e.target.value);\n  };\n\n  const handleUnitChange = e => {\n    setUnit(e.target.value);\n  };\n\n  const handleConversionUnitChange = e => {\n    setConversionUnit(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault(); // console.log(input, unit, conversionUnit)\n\n    if (unit === 'kelvin') {\n      if (conversionUnit === 'farenheit') {\n        var resultKF = (input - 273) * (9 / 5) + 35;\n        setResult(resultKF.toFixed(0));\n      } else if (conversionUnit === 'celsius') {\n        var resultKC = input - 273.15;\n        setResult(resultKC.toFixed(0));\n      }\n    } else if (unit === 'farenheit') {\n      if (conversionUnit === 'celsius') {\n        var resultFC = (input - 32) * 5 / 9;\n        setResult(resultFC.toFixed(0));\n      } else if (conversionUnit === 'kelvin') {\n        var resultFK = (input - 32) * 5 / 9 + 5;\n        setResult(resultFK.toFixed(0));\n      }\n    } else if (unit === 'celsius') {\n      if (conversionUnit === 'farenheit') {\n        var resultCF = input * 9 / 5 + 32;\n        setResult(resultCF.toFixed(0));\n      } else if (conversionUnit === 'kelvin') {\n        var resultCK = input + 273.15;\n        setResult(resultCK.toFixed(0));\n      }\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/yeti/bootstrap.min.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    className: \"display-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, \"Temperature Converter\"), __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: unit,\n    onChange: handleUnitChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"mb-3\",\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) ? __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 28\n    }\n  }, result + '°') : ''));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwidW5pdCIsInNldFVuaXQiLCJjb252ZXJzaW9uVW5pdCIsInNldENvbnZlcnNpb25Vbml0IiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidW5kZWZpbmVkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVVbml0Q2hhbmdlIiwiaGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdEtGIiwidG9GaXhlZCIsInJlc3VsdEtDIiwicmVzdWx0RkMiLCJyZXN1bHRGSyIsInJlc3VsdENGIiwicmVzdWx0Q0siLCJpc05hTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBRWxCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCRixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0osc0RBQVEsQ0FBQyxFQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDTyxTQUFELENBQXBDOztBQUVBLFFBQU1DLGlCQUFpQixHQUFJQyxDQUFELElBQU87QUFDL0JWLFlBQVEsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsZ0JBQWdCLEdBQUlILENBQUQsSUFBTztBQUM5QlAsV0FBTyxDQUFDTyxDQUFDLENB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SUU7QUFBUSxTQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FsQkYsRUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRixFQXlCRTtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUF5QixRQUFJLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF6QkYsQ0FGRixFQThCSSxDQUFDVSxLQUFLLENBQUNsQixNQUFELENBQU4sR0FBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxNQUFNLEdBQUcsR0FBZCxDQUFqQixHQUEyQyxFQTlCL0MsQ0F4Q0YsQ0FERjtBQThFRCxDQS9IRDs7QUFpSWVSLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt1bml0LCBzZXRVbml0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY29udmVyc2lvblVuaXQsIHNldENvbnZlcnNpb25Vbml0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVuaXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFVuaXQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDb252ZXJzaW9uVW5pdENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Q29udmVyc2lvblVuaXQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0LCB1bml0LCBjb252ZXJzaW9uVW5pdClcbiAgICBpZiAodW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgdmFyIHJlc3VsdEtGID0gKChpbnB1dCAtIDI3MykgKiAoOSAvIDUpICsgMzUpXG4gICAgICAgIHNldFJlc3VsdChyZXN1bHRLRi50b0ZpeGVkKDApKVxuICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgIHZhciByZXN1bHRLQyA9IGlucHV0IC0gMjczLjE1XG4gICAgICAgIHNldFJlc3VsdChyZXN1bHRLQy50b0ZpeGVkKDApKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgIHZhciByZXN1bHRGQyA9ICgoaW5wdXQgLSAzMikgKiA1IC8gOSlcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZDLnRvRml4ZWQoMCkpXG4gICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAna2VsdmluJykge1xuICAgICAgICB2YXIgcmVzdWx0RksgPSAoKGlucHV0IC0gMzIpICogNSAvIDkpICsgNVxuICAgICAgICBzZXRSZXN1bHQocmVzdWx0RksudG9GaXhlZCgwKSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdjZWxzaXVzJykge1xuICAgICAgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgICB2YXIgcmVzdWx0Q0YgPSAoKGlucHV0ICogOSAvIDUpICsgMzIpXG4gICAgICAgIHNldFJlc3VsdChyZXN1bHRDRi50b0ZpeGVkKDApKVxuICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgICAgdmFyIHJlc3VsdENLID0gaW5wdXQgKyAyNzMuMTVcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdENLLnRvRml4ZWQoMCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyIG14LWF1dG8nPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L3lldGkvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkIG10LTNcIiBzdHlsZT17eyB3aWR0aDogJzE4cmVtJyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRlbXBlcmF0dXJlIENvbnZlcnRlcjwvaDQ+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICBDb252ZXJ0OiB7Jyd9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgVGVtcGVyYXR1cmUnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dW5pdH0gb25DaGFuZ2U9e2hhbmRsZVVuaXRDaGFuZ2V9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgVW5pdCBvZiBNZWFzdXJlLS08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhcmVuaGVpdFwiPkZhcmVuaGVpdDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2Vsc2l1c1wiPkNlbHNpdXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtlbHZpblwiPktlbHZpbjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxwPlRvOiA8L3A+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nbWItMycgdmFsdWU9e2NvbnZlcnNpb25Vbml0fSBvbkNoYW5nZT17aGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2V9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgYSBVbml0IG9mIE1lYXN1cmUtLTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFyZW5oZWl0XCI+RmFyZW5oZWl0PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxzaXVzXCI+Q2Vsc2l1czwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2VsdmluXCI+S2VsdmluPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J21iLTMnIHR5cGU9J3N1Ym1pdCc+Q29udmVydCBUZW1wZXJhdHVyZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhaXNOYU4ocmVzdWx0KSA/IHJlc3VsdCArICfCsCcgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5UZW1wZXJhdHVyZSBDb252ZXJ0ZXI8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8cD5Db252ZXJ0OjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbWItMydcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBUZW1wZXJhdHVyZSdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdtYi0zJyB2YWx1ZT17dW5pdH0gb25DaGFuZ2U9e2hhbmRsZVVuaXRDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IFVuaXQgb2YgTWVhc3VyZS0tPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFyZW5oZWl0XCI+RmFyZW5oZWl0PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2Vsc2l1c1wiPkNlbHNpdXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZWx2aW5cIj5LZWx2aW48L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cD5UbzogPC9wPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdtYi0zJyB2YWx1ZT17Y29udmVyc2lvblVuaXR9IG9uQ2hhbmdlPXtoYW5kbGVDb252ZXJzaW9uVW5pdENoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgYSBVbml0IG9mIE1lYXN1cmUtLTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhcmVuaGVpdFwiPkZhcmVuaGVpdDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbHNpdXNcIj5DZWxzaXVzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2VsdmluXCI+S2VsdmluPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J21iLTMnIHR5cGU9J3N1Ym1pdCc+Q29udmVydCBUZW1wZXJhdHVyZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIHtcbiAgICAgICAgICAhaXNOYU4ocmVzdWx0KSA/IDxoMz57cmVzdWx0ICsgJ8KwJ308L2gzPiA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });