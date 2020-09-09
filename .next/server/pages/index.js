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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = () => {\n  const {\n    0: input,\n    1: setInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: unit,\n    1: setUnit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: conversionUnit,\n    1: setConversionUnit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: result,\n    1: setResult\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined);\n  const {\n    0: errorMessage,\n    1: setErrorMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleInputChange = e => {\n    setInput(e.target.value);\n  };\n\n  const handleUnitChange = e => {\n    setUnit(e.target.value);\n  };\n\n  const handleConversionUnitChange = e => {\n    setConversionUnit(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault(); // console.log(input, unit, conversionUnit)\n\n    if (isNaN(input) || input === '') {\n      setErrorMessage('Please enter a tempterature to convert. Temperature must only contain integers.');\n    } else if (unit === '') {\n      setErrorMessage('Please select a valid unit of measurement');\n    } else if (conversionUnit === '') {\n      setErrorMessage('Please select a valid conversion unit');\n    } else {\n      if (unit === 'kelvin') {\n        if (conversionUnit === 'farenheit') {\n          var resultKF = (input - 273) * (9 / 5) + 35;\n          setResult(resultKF.toFixed(0));\n        } else if (conversionUnit === 'celsius') {\n          var resultKC = input - 273.15;\n          setResult(resultKC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'farenheit') {\n        if (conversionUnit === 'celsius') {\n          var resultFC = (input - 32) * 5 / 9;\n          setResult(resultFC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultFK = (input - 32) * 5 / 9 + 5;\n          setResult(resultFK.toFixed(0));\n        } else if (conversionUnit === 'farenheit') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'celsius') {\n        if (conversionUnit === 'farenheit') {\n          var resultCF = input * 9 / 5 + 32;\n          setResult(resultCF.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultCK = input + 273.15;\n          setResult(resultCK.toFixed(0));\n        } else if (conversionUnit === 'celsius') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      }\n    }\n\n    setInput('');\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/yeti/bootstrap.min.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"display-5\",\n    style: {\n      objectFit: 'scale-down'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, \"Temperature Converter\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: unit,\n    onChange: handleUnitChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: \"mb-3\",\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"mb-3\",\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) ? __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 28\n    }\n  }, result + '°') : errorMessage));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwidW5pdCIsInNldFVuaXQiLCJjb252ZXJzaW9uVW5pdCIsInNldENvbnZlcnNpb25Vbml0IiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidW5kZWZpbmVkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVVbml0Q2hhbmdlIiwiaGFuZGxlQ29udmVyc2lvblVuaXRDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImlzTmFOIiwicmVzdWx0S0YiLCJ0b0ZpeGVkIiwicmVzdWx0S0MiLCJyZXN1bHRGQyIsInJlc3VsdEZLIiwicmVzdWx0Q0YiLCJyZXN1bHRDSyIsIm9iamVjdEZpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBRWxCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCRixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0osc0RBQVEsQ0FBQyxFQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDTyxTQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDVCxzREFBUSxDQUFDLEVBQUQsQ0FBaEQ7O0FBRUEsUUFBTVUsaUJBQWlCLEdBQUlDLENBQUQsSUFBTztBQUMv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TUFBRCxDQUFOLEdBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsTUFBTSxHQUFHLEdBQWQsQ0FBakIsR0FBMkNHLFlBOUIvQyxDQUpGLENBREY7QUEwQ0QsQ0E1R0Q7O0FBOEdlWCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdW5pdCwgc2V0VW5pdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbnZlcnNpb25Vbml0LCBzZXRDb252ZXJzaW9uVW5pdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVuaXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFVuaXQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDb252ZXJzaW9uVW5pdENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Q29udmVyc2lvblVuaXQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIC8vIGNvbnNvbGUubG9nKGlucHV0LCB1bml0LCBjb252ZXJzaW9uVW5pdClcbiAgICBpZiAoaXNOYU4oaW5wdXQpIHx8IGlucHV0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2UgZW50ZXIgYSB0ZW1wdGVyYXR1cmUgdG8gY29udmVydC4gVGVtcGVyYXR1cmUgbXVzdCBvbmx5IGNvbnRhaW4gaW50ZWdlcnMuJylcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICcnKSB7XG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgYSB2YWxpZCB1bml0IG9mIG1lYXN1cmVtZW50JylcbiAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgY29udmVyc2lvbiB1bml0JylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0S0YgPSAoKGlucHV0IC0gMjczKSAqICg5IC8gNSkgKyAzNSlcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0S0YudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdEtDID0gaW5wdXQgLSAyNzMuMTVcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0S0MudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1dhcm5pbmc6IE9yaWdpbmFsIHRlbXBlcmF0dXJlIHVuaXQgYW5kIGNvbnZlcnNpb24gdW5pdCBjYW4gbm90IGJlIHRoZSBzYW1lIScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0RkMgPSAoKGlucHV0IC0gMzIpICogNSAvIDkpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdEZDLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdEZLID0gKChpbnB1dCAtIDMyKSAqIDUgLyA5KSArIDVcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0RksudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1dhcm5pbmc6IE9yaWdpbmFsIHRlbXBlcmF0dXJlIHVuaXQgYW5kIGNvbnZlcnNpb24gdW5pdCBjYW4gbm90IGJlIHRoZSBzYW1lIScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0Q0YgPSAoKGlucHV0ICogOSAvIDUpICsgMzIpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdENGLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdENLID0gaW5wdXQgKyAyNzMuMTVcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0Q0sudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdXYXJuaW5nOiBPcmlnaW5hbCB0ZW1wZXJhdHVyZSB1bml0IGFuZCBjb252ZXJzaW9uIHVuaXQgY2FuIG5vdCBiZSB0aGUgc2FtZSEnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW5wdXQoJycpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgbXgtYXV0byc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQveWV0aS9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS01XCIgc3R5bGU9e3sgb2JqZWN0Rml0OiAnc2NhbGUtZG93bicgfX0+VGVtcGVyYXR1cmUgQ29udmVydGVyPC9oMT5cbiAgICAgICAgICA8cD5Db252ZXJ0OjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbWItMydcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBUZW1wZXJhdHVyZSdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdtYi0zJyB2YWx1ZT17dW5pdH0gb25DaGFuZ2U9e2hhbmRsZVVuaXRDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0tU2VsZWN0IFVuaXQgb2YgTWVhc3VyZS0tPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFyZW5oZWl0XCI+RmFyZW5oZWl0PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2Vsc2l1c1wiPkNlbHNpdXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrZWx2aW5cIj5LZWx2aW48L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cD5UbzogPC9wPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdtYi0zJyB2YWx1ZT17Y29udmVyc2lvblVuaXR9IG9uQ2hhbmdlPXtoYW5kbGVDb252ZXJzaW9uVW5pdENoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgYSBVbml0IG9mIE1lYXN1cmUtLTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhcmVuaGVpdFwiPkZhcmVuaGVpdDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbHNpdXNcIj5DZWxzaXVzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2VsdmluXCI+S2VsdmluPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J21iLTMnIHR5cGU9J3N1Ym1pdCc+Q29udmVydCBUZW1wZXJhdHVyZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIHtcbiAgICAgICAgICAhaXNOYU4ocmVzdWx0KSA/IDxoMz57cmVzdWx0ICsgJ8KwJ308L2gzPiA6IGVycm9yTWVzc2FnZVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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