/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api-module.js":
/*!***************************!*\
  !*** ./src/api-module.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst apiKey = 'e2e40ef3cc9f5b49c78dc930972c2548';\r\nconst getWeatherData = async (city) => {\r\n  const response = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`,\r\n    { mode: 'cors' },\r\n  );\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);\r\n\n\n//# sourceURL=webpack://weather_app/./src/api-module.js?");

/***/ }),

/***/ "./src/app-module.js":
/*!***************************!*\
  !*** ./src/app-module.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-module */ \"./src/api-module.js\");\n/* harmony import */ var _display_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-module */ \"./src/display-module.js\");\n\r\n\r\n\r\nconst App = (() => {\r\n  const form = document.querySelector('form');\r\n  const weatherStatus = document.querySelector('.weatherStatus');\r\n  const city = document.querySelector('.city');\r\n  const temp = document.querySelector('.degrees');\r\n  const feelsLike = document.querySelector('.thermicSensation');\r\n  const wind = document.querySelector('.wind');\r\n  const humidity = document.querySelector('.humidity');\r\n  const errorMsg = document.querySelector('.errorMsg');\r\n  let weatherData;\r\n\r\n  form.addEventListener('submit', async (e) => {\r\n    try {\r\n      e.preventDefault();\r\n      weatherData = await (0,_api_module__WEBPACK_IMPORTED_MODULE_0__.default)(form.search.value, errorMsg);\r\n      (0,_display_module__WEBPACK_IMPORTED_MODULE_1__.default)(\r\n        weatherStatus,\r\n        weatherData.weather[0].description,\r\n        city,\r\n        weatherData.name,\r\n        weatherData.sys.country,\r\n        temp,\r\n        weatherData.main.temp.toFixed(0),\r\n        feelsLike,\r\n        weatherData.main.feels_like.toFixed(0),\r\n        wind,\r\n        weatherData.wind.speed,\r\n        humidity,\r\n        weatherData.main.humidity,\r\n      );\r\n    } catch (error) {\r\n      errorMsg.classList.add('visible');\r\n      setTimeout(() => {\r\n        errorMsg.classList.remove('visible');\r\n        errorMsg.classList.add('hidden');\r\n      }, 1500);\r\n      throw new Error(error);\r\n    }\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://weather_app/./src/app-module.js?");

/***/ }),

/***/ "./src/display-module.js":
/*!*******************************!*\
  !*** ./src/display-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst displayData = (\r\n  statusElement,\r\n  status,\r\n  cityElement,\r\n  city,\r\n  country,\r\n  tempElement,\r\n  temp,\r\n  feelsLikeElement,\r\n  feelsLike,\r\n  windElement,\r\n  wind,\r\n  humidityElement,\r\n  humidity,\r\n) => {\r\n  statusElement.textContent = status;\r\n  cityElement.textContent = `${city}, ${country}`;\r\n  tempElement.textContent = temp;\r\n  feelsLikeElement.textContent = `Sensación térmica: ${feelsLike}`;\r\n  windElement.textContent = `Viento: ${wind}`;\r\n  humidityElement.textContent = `Humedad: ${humidity}`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);\r\n\n\n//# sourceURL=webpack://weather_app/./src/display-module.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app-module.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;