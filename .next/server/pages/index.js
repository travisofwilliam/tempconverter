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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = () => {\n  const {\n    0: input,\n    1: setInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: unit,\n    1: setUnit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: conversionUnit,\n    1: setConversionUnit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: result,\n    1: setResult\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined);\n\n  const handleInputChange = e => {\n    setInput(e.target.value);\n  };\n\n  const handleUnitChange = e => {\n    setUnit(e.target.value);\n  };\n\n  const handleConversionUnitChange = e => {\n    setConversionUnit(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault(); // console.log(input, unit, conversionUnit)\n\n    if (unit === 'kelvin') {\n      if (conversionUnit === 'farenheit') {\n        var resultKF = (input - 273) * (9 / 5) + 35;\n        setResult(resultKF.toFixed(0));\n      } else if (conversionUnit === 'celsius') {\n        var resultKC = input - 273.15;\n        setResult(resultKC.toFixed(0));\n      }\n    } else if (unit === 'farenheit') {\n      if (conversionUnit === 'celsius') {\n        var resultFC = (input - 32) * 5 / 9;\n        setResult(resultFC.toFixed(0));\n      } else if (conversionUnit === 'kelvin') {\n        var resultFK = (input - 32) * 5 / 9 + 5;\n        setResult(resultFK.toFixed(0));\n      }\n    } else if (unit === 'celsius') {\n      if (conversionUnit === 'farenheit') {\n        var resultCF = input * 9 / 5 + 32;\n        setResult(resultCF.toFixed(0));\n      } else if (conversionUnit === 'kelvin') {\n        var resultCK = input + 273.15;\n        setResult(resultCK.toFixed(0));\n      }\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/yeti/bootstrap.min.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"display-5\",\n    style: {\n      objectFit: 'scale-down'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"Temperature Converter\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: unit,\n    onChange: handleUnitChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"mb-3\",\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) ? __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 28\n    }\n  }, result + '°') : ''));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwidW5pdCIsInNldFVuaXQiLCJjb252ZXJzaW9uVW5pdCIsInNldENvbnZlcnNpb25Vbml0IiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidW5kZWZpbmVkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVVbml0Q2hhbmdlIiwiaGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdEtGIiwidG9GaXhlZCIsInJlc3VsdEtDIiwicmVzdWx0RkMiLCJyZXN1bHRGSyIsInJlc3VsdENGIiwicmVzdWx0Q0siLCJvYmplY3RGaXQiLCJpc05hTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBRWxCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCRixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0osc0RBQVEsQ0FBQyxFQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDTyxTQUFELENBQXBDOztBQUVBLFFBQU1DLGlCQUFpQixHQUFJQyxDQUFELElBQU87QUFDL0JWLFlBQVEsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsZ0JBQWdCLEdBQUlILENBQUQsSUFBTztBQUM5QlAsV0FBTyxD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SyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLEVBSUU7QUFBUSxTQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FuQkYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixFQTBCRTtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUF5QixRQUFJLEVBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkExQkYsQ0FERixFQThCSSxDQUFDVyxLQUFLLENBQUNuQixNQUFELENBQU4sR0FBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxNQUFNLEdBQUcsR0FBZCxDQUFqQixHQUEyQyxFQTlCL0MsQ0FKRixDQURGO0FBMENELENBM0ZEOztBQTZGZVIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3VuaXQsIHNldFVuaXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb252ZXJzaW9uVW5pdCwgc2V0Q29udmVyc2lvblVuaXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVW5pdENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VW5pdChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRDb252ZXJzaW9uVW5pdChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gY29uc29sZS5sb2coaW5wdXQsIHVuaXQsIGNvbnZlcnNpb25Vbml0KVxuICAgIGlmICh1bml0ID09PSAna2VsdmluJykge1xuICAgICAgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgICB2YXIgcmVzdWx0S0YgPSAoKGlucHV0IC0gMjczKSAqICg5IC8gNSkgKyAzNSlcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEtGLnRvRml4ZWQoMCkpXG4gICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgdmFyIHJlc3VsdEtDID0gaW5wdXQgLSAyNzMuMTVcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEtDLnRvRml4ZWQoMCkpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgdmFyIHJlc3VsdEZDID0gKChpbnB1dCAtIDMyKSAqIDUgLyA5KVxuICAgICAgICBzZXRSZXN1bHQocmVzdWx0RkMudG9GaXhlZCgwKSlcbiAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgIHZhciByZXN1bHRGSyA9ICgoaW5wdXQgLSAzMikgKiA1IC8gOSkgKyA1XG4gICAgICAgIHNldFJlc3VsdChyZXN1bHRGSy50b0ZpeGVkKDApKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgIHZhciByZXN1bHRDRiA9ICgoaW5wdXQgKiA5IC8gNSkgKyAzMilcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdENGLnRvRml4ZWQoMCkpXG4gICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAna2VsdmluJykge1xuICAgICAgICB2YXIgcmVzdWx0Q0sgPSBpbnB1dCArIDI3My4xNVxuICAgICAgICBzZXRSZXN1bHQocmVzdWx0Q0sudG9GaXhlZCgwKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgbXgtYXV0byc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQveWV0aS9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS01XCIgc3R5bGU9e3sgb2JqZWN0Rml0OiAnc2NhbGUtZG93bicgfX0+VGVtcGVyYXR1cmUgQ29udmVydGVyPC9oMT5cbiAgICAgICAgICA8cD5Db252ZXJ0OjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbWItMydcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBUZW1wZXJhdHVyZSdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdtYi0zJyB2YWx1ZT17dW5pdH0gb25DaGFuZ2U9e2hhbmRsZVVuaXRDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IFVuaXQgb2YgTWVhc3VyZS0tPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFyZW5oZWl0XCI+RmFyZW5oZWl0PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2Vsc2l1c1wiPkNlbHNpdXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZWx2aW5cIj5LZWx2aW48L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cD5UbzogPC9wPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdtYi0zJyB2YWx1ZT17Y29udmVyc2lvblVuaXR9IG9uQ2hhbmdlPXtoYW5kbGVDb252ZXJzaW9uVW5pdENoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgYSBVbml0IG9mIE1lYXN1cmUtLTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhcmVuaGVpdFwiPkZhcmVuaGVpdDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbHNpdXNcIj5DZWxzaXVzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2VsdmluXCI+S2VsdmluPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J21iLTMnIHR5cGU9J3N1Ym1pdCc+Q29udmVydCBUZW1wZXJhdHVyZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIHtcbiAgICAgICAgICAhaXNOYU4ocmVzdWx0KSA/IDxoMz57cmVzdWx0ICsgJ8KwJ308L2gzPiA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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