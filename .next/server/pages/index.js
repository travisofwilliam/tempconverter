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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/tempconverter/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = () => {\n  const {\n    0: input,\n    1: setInput\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: unit,\n    1: setUnit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: conversionUnit,\n    1: setConversionUnit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: result,\n    1: setResult\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined);\n  const {\n    0: errorMessage,\n    1: setErrorMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: unitBtn,\n    1: setUnitBtn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('btn-info');\n  const {\n    0: conversionBtn,\n    1: setConversionBtn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('btn-info');\n\n  const handleInputChange = e => {\n    setInput(e.target.value);\n  };\n\n  const handleUnitChange = e => {\n    setUnit(e.target.value);\n    setUnitBtn('btn-success');\n  };\n\n  const handleConversionUnitChange = e => {\n    setConversionUnit(e.target.value);\n    setConversionBtn('btn-success');\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (isNaN(input) || input === '') {\n      setErrorMessage('Please enter a tempterature to convert. Temperature must only contain integers.');\n    } else if (unit === '') {\n      setErrorMessage('Please select a valid unit of measurement');\n    } else if (conversionUnit === '') {\n      setErrorMessage('Please select a valid conversion unit');\n    } else {\n      if (unit === 'kelvin') {\n        if (conversionUnit === 'farenheit') {\n          var resultKF = (parseInt(input) - 273) * (9 / 5) + 35;\n          setResult(resultKF.toFixed(0));\n        } else if (conversionUnit === 'celsius') {\n          var resultKC = parseInt(input) - 273.15;\n          setResult(resultKC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'farenheit') {\n        if (conversionUnit === 'celsius') {\n          var resultFC = (parseInt(input) - 32) * 5 / 9;\n          setResult(resultFC.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultFK = (parseInt(input) - 32) * 5 / 9 + 5;\n          setResult(resultFK.toFixed(0));\n        } else if (conversionUnit === 'farenheit') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      } else if (unit === 'celsius') {\n        if (conversionUnit === 'farenheit') {\n          var resultCF = parseInt(input) * 9 / 5 + 32;\n          setResult(resultCF.toFixed(0));\n        } else if (conversionUnit === 'kelvin') {\n          var resultCK = parseInt(input) + 273.15;\n          setResult(resultCK.toFixed(2));\n        } else if (conversionUnit === 'celsius') {\n          setErrorMessage('Warning: Original temperature unit and conversion unit can not be the same!');\n        }\n      }\n    } // setInput('')\n\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/yeti/bootstrap.min.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"display-5\",\n    style: {\n      objectFit: 'scale-down'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, \"Temperature Converter\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, \"Convert:\"), __jsx(\"input\", {\n    className: \"mb-3\",\n    value: input,\n    onChange: handleInputChange,\n    type: \"text\",\n    placeholder: \"Enter Temperature\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }), __jsx(\"select\", {\n    className: `mb-3 dropdown ${unitBtn}`,\n    value: unit,\n    onChange: handleUnitChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, \"--Select Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, \"To: \"), __jsx(\"select\", {\n    className: `mb-3 dropdown ${conversionBtn}`,\n    value: conversionUnit,\n    onChange: handleConversionUnitChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, \"--Select a Unit of Measure--\"), __jsx(\"option\", {\n    value: \"farenheit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, \"Farenheit\"), __jsx(\"option\", {\n    value: \"celsius\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, \"Celsius\"), __jsx(\"option\", {\n    value: \"kelvin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, \"Kelvin\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"btn btn-primary mb-3\",\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, \"Convert Temperature\")), !isNaN(result) ? __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 28\n    }\n  }, result + '°') : errorMessage));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwidW5pdCIsInNldFVuaXQiLCJjb252ZXJzaW9uVW5pdCIsInNldENvbnZlcnNpb25Vbml0IiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidW5kZWZpbmVkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwidW5pdEJ0biIsInNldFVuaXRCdG4iLCJjb252ZXJzaW9uQnRuIiwic2V0Q29udmVyc2lvbkJ0biIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVW5pdENoYW5nZSIsImhhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInJlc3VsdEtGIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwicmVzdWx0S0MiLCJyZXN1bHRGQyIsInJlc3VsdEZLIiwicmVzdWx0Q0YiLCJyZXN1bHRDSyIsIm9iamVjdEZpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBRWxCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCRixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0osc0RBQVEsQ0FBQyxFQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTixzREFBUSxDQUFDTyxTQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDVCxzREFBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ1UsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JYLHNEQUFRLENBQUMsVUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDWSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DYixzREFBUSxDQUFDLFVBQUQsQ0FBbEQ7O0FBRUEsUUFBTWMsaUJBQWlCLEdBQUlDLENBQUQsSUFBTztBQUMvQmhCLFlBQVEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxHQUZEOztBQUlBLFFBQU1DLGdCQUFnQixHQUFJSCxDQUFELElBQU87QUFDOUJiLFdBQU8sQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNBTixjQUFVLENBQUMsYUFBRCxDQUFWO0FBQ0QsR0FIRDs7QUFLQSxRQUFNUSwwQkFBMEIsR0FBSUosQ0FBRCxJQUFPO0FBQ3hDWCxxQkFBaUIsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFDQUosb0JBQWdCLENBQUMsYUFBRCxDQUFoQjtBQUNELEdBSEQ7O0FBS0EsUUFBTU8sWUFBWSxHQUFJTCxDQUFELElBQU87QUFDMUJBLEtBQUMsQ0FBQ00sY0FBRjs7QUFFQSxRQUFJQyxLQUFLLENBQUN4QixLQUFELENBQUwsSUFBZ0JBLEtBQUssS0FBSyxFQUE5QixFQUFrQztBQUNoQ1cscUJBQWUsQ0FBQyxpRkFBRCxDQUFmO0FBQ0QsS0FGRCxNQUVPLElBQUlSLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ3RCUSxxQkFBZSxDQUFDLDJDQUFELENBQWY7QUFDRCxLQUZNLE1BRUEsSUFBSU4sY0FBYyxLQUFLLEVBQXZCLEVBQTJCO0FBQ2hDTSxxQkFBZSxDQUFDLHVDQUFELENBQWY7QUFDRCxLQUZNLE1BRUE7QUFDTCxVQUFJUixJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQixZQUFJRSxjQUFjLEtBQUssV0FBdkIsRUFBb0M7QUFDbEMsY0FBSW9CLFFBQVEsR0FBSSxDQUFDQyxRQUFRLENBQUMxQixLQUFELENBQVIsR0FBa0IsR0FBbkIsS0FBMkIsSUFBSSxDQUEvQixJQUFvQyxFQUFwRDtBQUNBUSxtQkFBUyxDQUFDaUIsUUFBUSxDQUFDRSxPQUFULENBQWlCLENBQWpCLENBQUQsQ0FBVDtBQUNELFNBSEQsTUFHTyxJQUFJdEIsY0FBYyxLQUFLLFNBQXZCLEVBQWtDO0FBQ3ZDLGNBQUl1QixRQUFRLEdBQUdGLFFBQVEsQ0FBQzFCLEtBQUQsQ0FBUixHQUFrQixNQUFqQztBQUNBUSxtQkFBUyxDQUFDb0IsUUFBUSxDQUFDRCxPQUFULENBQWlCLENBQWpCLENBQUQsQ0FBVDtBQUNELFNBSE0sTUFHQSxJQUFJdEIsY0FBYyxLQUFLLFFBQXZCLEVBQWlDO0FBQ3RDTSx5QkFBZSxDQUFDLDZFQUFELENBQWY7QUFDRDtBQUNGLE9BVkQsTUFVTyxJQUFJUixJQUFJLEtBQUssV0FBYixFQUEwQjtBQUMvQixZQUFJRSxjQUFjLEtBQUssU0FBdkIsRUFBa0M7QUFDaEMsY0FBSXdCLFFBQVEsR0FBSSxDQUFDSCxRQUFRLENBQUMxQixLQUFELENBQVIsR0FBa0IsRUFBbkIsSUFBeUIsQ0FBekIsR0FBNkIsQ0FBN0M7QUFDQVEsbUJBQVMsQ0FBQ3FCLFFBQVEsQ0FBQ0YsT0FBVCxDQUFpQixDQUFqQixDQUFELENBQVQ7QUFDRCxTQUhELE1BR08sSUFBSXRCLGNBQWMsS0FBSyxRQUF2QixFQUFpQztBQUN0QyxjQUFJeUIsUUFBUSxHQUFJLENBQUNKLFFBQVEsQ0FBQzFCLEtBQUQsQ0FBUixHQUFrQixFQUFuQixJQUF5QixDQUF6QixHQUE2QixDQUE5QixHQUFtQyxDQUFsRDtBQUNBUSxtQkFBUyxDQUFDc0IsUUFBUSxDQUFDSCxPQUFULENBQWlCLENBQWpCLENBQUQsQ0FBVDtBQUNELFNBSE0sTUFHQSxJQUFJdEIsY0FBYyxLQUFLLFdBQXZCLEVBQW9DO0FBQ3pDTSx5QkFBZSxDQUFDLDZFQUFELENBQWY7QUFDRDtBQUNGLE9BVk0sTUFVQSxJQUFJUixJQUFJLEtBQUssU0FBYixFQUF3QjtBQUM3QixZQUFJRSxjQUFjLEtBQUssV0FBdkIsRUFBb0M7QUFDbEMsY0FBSTBCLFFBQVEsR0FBS0wsUUFBUSxDQUFDMUIsS0FBRCxDQUFSLEdBQWtCLENBQWxCLEdBQXNCLENBQXZCLEdBQTRCLEVBQTVDO0FBQ0FRLG1CQUFTLENBQUN1QixRQUFRLENBQUNKLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBRCxDQUFUO0FBQ0QsU0FIRCxNQUdPLElBQUl0QixjQUFjLEtBQUssUUFBdkIsRUFBaUM7QUFDdEMsY0FBSTJCLFFBQVEsR0FBSU4sUUFBUSxDQUFDMUIsS0FBRCxDQUFSLEdBQWtCLE1BQWxDO0FBQ0FRLG1CQUFTLENBQUN3QixRQUFRLENBQUNMLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBRCxDQUFUO0FBQ0QsU0FITSxNQUdBLElBQUl0QixjQUFjLEtBQUssU0FBdkIsRUFBa0M7QUFDdkNNLHlCQUFlLENBQUMsNkVBQUQsQ0FBZjtBQUNEO0FBQ0Y7QUFDRixLQXpDeUIsQ0EwQzFCOztBQUNELEdBM0NEOztBQTZDQSxTQUNFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxpREFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFlBQVEsRUFBRVcsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBMEIsU0FBSyxFQUFFO0FBQUVXLGVBQVMsRUFBRTtBQUFiLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBRWpDLEtBRlQ7QUFHRSxZQUFRLEVBQUVnQixpQkFIWjtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsZUFBVyxFQUFDLG1CQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQVEsYUFBUyxFQUFHLGlCQUFnQkosT0FBUSxFQUE1QztBQUErQyxTQUFLLEVBQUVULElBQXREO0FBQTRELFlBQVEsRUFBRWlCLGdCQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxTQUFLLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUU7QUFBUSxTQUFLLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0U7QUFBUSxTQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsRUFJRTtBQUFRLFNBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixDQVhGLEVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixFQW1CRTtBQUFRLGFBQVMsRUFBRyxpQkFBZ0JOLGFBQWMsRUFBbEQ7QUFBcUQsU0FBSyxFQUFFVCxjQUE1RDtBQUE0RSxZQUFRLEVBQUVnQiwwQkFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixFQUVFO0FBQVEsU0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLEVBSUU7QUFBUSxTQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FuQkYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCRixFQTBCRTtBQUFRLGFBQVMsRUFBQyxzQkFBbEI7QUFBeUMsUUFBSSxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBMUJGLENBREYsRUE4QkksQ0FBQ0csS0FBSyxDQUFDakIsTUFBRCxDQUFOLEdBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsTUFBTSxHQUFHLEdBQWQsQ0FBakIsR0FBMkNHLFlBOUIvQyxDQUpGLENBREY7QUF5Q0QsQ0E5R0Q7O0FBZ0hlWCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3VuaXQsIHNldFVuaXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb252ZXJzaW9uVW5pdCwgc2V0Q29udmVyc2lvblVuaXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3VuaXRCdG4sIHNldFVuaXRCdG5dID0gdXNlU3RhdGUoJ2J0bi1pbmZvJylcbiAgY29uc3QgW2NvbnZlcnNpb25CdG4sIHNldENvbnZlcnNpb25CdG5dID0gdXNlU3RhdGUoJ2J0bi1pbmZvJylcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVVbml0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRVbml0KGUudGFyZ2V0LnZhbHVlKVxuICAgIHNldFVuaXRCdG4oJ2J0bi1zdWNjZXNzJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbnZlcnNpb25Vbml0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRDb252ZXJzaW9uVW5pdChlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRDb252ZXJzaW9uQnRuKCdidG4tc3VjY2VzcycpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKGlzTmFOKGlucHV0KSB8fCBpbnB1dCA9PT0gJycpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnUGxlYXNlIGVudGVyIGEgdGVtcHRlcmF0dXJlIHRvIGNvbnZlcnQuIFRlbXBlcmF0dXJlIG11c3Qgb25seSBjb250YWluIGludGVnZXJzLicpXG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnJykge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgdW5pdCBvZiBtZWFzdXJlbWVudCcpXG4gICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJycpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnUGxlYXNlIHNlbGVjdCBhIHZhbGlkIGNvbnZlcnNpb24gdW5pdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh1bml0ID09PSAna2VsdmluJykge1xuICAgICAgICBpZiAoY29udmVyc2lvblVuaXQgPT09ICdmYXJlbmhlaXQnKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdEtGID0gKChwYXJzZUludChpbnB1dCkgLSAyNzMpICogKDkgLyA1KSArIDM1KVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRLRi50b0ZpeGVkKDApKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0S0MgPSBwYXJzZUludChpbnB1dCkgLSAyNzMuMTVcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0S0MudG9GaXhlZCgwKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2tlbHZpbicpIHtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1dhcm5pbmc6IE9yaWdpbmFsIHRlbXBlcmF0dXJlIHVuaXQgYW5kIGNvbnZlcnNpb24gdW5pdCBjYW4gbm90IGJlIHRoZSBzYW1lIScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2ZhcmVuaGVpdCcpIHtcbiAgICAgICAgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0RkMgPSAoKHBhcnNlSW50KGlucHV0KSAtIDMyKSAqIDUgLyA5KVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRGQy50b0ZpeGVkKDApKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAna2VsdmluJykge1xuICAgICAgICAgIHZhciByZXN1bHRGSyA9ICgocGFyc2VJbnQoaW5wdXQpIC0gMzIpICogNSAvIDkpICsgNVxuICAgICAgICAgIHNldFJlc3VsdChyZXN1bHRGSy50b0ZpeGVkKDApKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnV2FybmluZzogT3JpZ2luYWwgdGVtcGVyYXR1cmUgdW5pdCBhbmQgY29udmVyc2lvbiB1bml0IGNhbiBub3QgYmUgdGhlIHNhbWUhJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh1bml0ID09PSAnY2Vsc2l1cycpIHtcbiAgICAgICAgaWYgKGNvbnZlcnNpb25Vbml0ID09PSAnZmFyZW5oZWl0Jykge1xuICAgICAgICAgIHZhciByZXN1bHRDRiA9ICgocGFyc2VJbnQoaW5wdXQpICogOSAvIDUpICsgMzIpXG4gICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdENGLnRvRml4ZWQoMCkpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udmVyc2lvblVuaXQgPT09ICdrZWx2aW4nKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdENLID0gKHBhcnNlSW50KGlucHV0KSArIDI3My4xNSlcbiAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0Q0sudG9GaXhlZCgyKSlcbiAgICAgICAgfSBlbHNlIGlmIChjb252ZXJzaW9uVW5pdCA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdXYXJuaW5nOiBPcmlnaW5hbCB0ZW1wZXJhdHVyZSB1bml0IGFuZCBjb252ZXJzaW9uIHVuaXQgY2FuIG5vdCBiZSB0aGUgc2FtZSEnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHNldElucHV0KCcnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyIG14LWF1dG8nPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L3lldGkvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNVwiIHN0eWxlPXt7IG9iamVjdEZpdDogJ3NjYWxlLWRvd24nIH19PlRlbXBlcmF0dXJlIENvbnZlcnRlcjwvaDE+XG4gICAgICAgICAgPHA+Q29udmVydDo8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgVGVtcGVyYXR1cmUnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17YG1iLTMgZHJvcGRvd24gJHt1bml0QnRufWB9IHZhbHVlPXt1bml0fSBvbkNoYW5nZT17aGFuZGxlVW5pdENoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgVW5pdCBvZiBNZWFzdXJlLS08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYXJlbmhlaXRcIj5GYXJlbmhlaXQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjZWxzaXVzXCI+Q2Vsc2l1czwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtlbHZpblwiPktlbHZpbjwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwPlRvOiA8L3A+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e2BtYi0zIGRyb3Bkb3duICR7Y29udmVyc2lvbkJ0bn1gfSB2YWx1ZT17Y29udmVyc2lvblVuaXR9IG9uQ2hhbmdlPXtoYW5kbGVDb252ZXJzaW9uVW5pdENoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+LS1TZWxlY3QgYSBVbml0IG9mIE1lYXN1cmUtLTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhcmVuaGVpdFwiPkZhcmVuaGVpdDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbHNpdXNcIj5DZWxzaXVzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2VsdmluXCI+S2VsdmluPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBtYi0zJyB0eXBlPSdzdWJtaXQnPkNvbnZlcnQgVGVtcGVyYXR1cmU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7XG4gICAgICAgICAgIWlzTmFOKHJlc3VsdCkgPyA8aDM+e3Jlc3VsdCArICfCsCd9PC9oMz4gOiBlcnJvck1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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