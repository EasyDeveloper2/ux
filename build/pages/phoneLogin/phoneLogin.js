(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/phoneLogin/phoneLogin.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/phoneLogin/phoneLogin.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/phoneLogin/phoneLogin.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2pzb24tbG9hZGVyLmpzIS4uL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzLmFzYXIvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlci9zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4uL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzLmFzYXIvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlci9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vc3JjL3BhZ2VzL3Bob25lTG9naW4vcGhvbmVMb2dpbi51eD91eFR5cGU9cGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9waG9uZUxvZ2luL3Bob25lTG9naW4udXg/NzA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHt9Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/phoneLogin/phoneLogin.ux?uxType=page\n");

/***/ }),

/***/ "../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/phoneLogin/phoneLogin.ux?uxType=page&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/phoneLogin/phoneLogin.ux?uxType=page& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"type\": \"div\",\n  \"attr\": {},\n  \"children\": [\n    {\n      \"type\": \"text\",\n      \"attr\": {\n        \"value\": \"手机登录\"\n      }\n    }\n  ]\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2pzb24tbG9hZGVyLmpzIS4uL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzLmFzYXIvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlci90ZW1wbGF0ZS1sb2FkZXIuanMhLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9zcmMvcGFnZXMvcGhvbmVMb2dpbi9waG9uZUxvZ2luLnV4P3V4VHlwZT1wYWdlJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9waG9uZUxvZ2luL3Bob25lTG9naW4udXg/ZTlhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIuaJi+acuueZu+W9lVwiXG4gICAgICB9XG4gICAgfVxuICBdXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/phoneLogin/phoneLogin.ux?uxType=page&\n");

/***/ }),

/***/ "../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=e:\\quickApp\\yun-shop_ux&cacheDirectory&plugins[]=e:\\quickApp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\babel-plugin-jsx.js&comments=false!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/phoneLogin/phoneLogin.ux?uxType=page":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=e:/quickApp/yun-shop_ux&cacheDirectory&plugins[]=e:/quickApp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/phoneLogin/phoneLogin.ux?uxType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _default = {};\nexports[\"default\"] = _default;\nvar moduleOwn = exports[\"default\"] || module.exports;\nvar accessors = ['public', 'protected', 'private'];\n\nif (moduleOwn.data && accessors.some(function (acc) {\n  return moduleOwn[acc];\n})) {\n  throw new Error('页面VM对象中的属性data不可与\"' + accessors.join(',') + '\"同时存在，请使用private替换data名称');\n} else if (!moduleOwn.data) {\n  moduleOwn.data = {};\n  moduleOwn._descriptor = {};\n  accessors.forEach(function (acc) {\n    var accType = _typeof(moduleOwn[acc]);\n\n    if (accType === 'object') {\n      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);\n\n      for (var name in moduleOwn[acc]) {\n        moduleOwn._descriptor[name] = {\n          access: acc\n        };\n      }\n    } else if (accType === 'function') {\n      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');\n    }\n  });\n}}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9ZTpcXHF1aWNrQXBwXFx5dW4tc2hvcF91eCZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109ZTpcXHF1aWNrQXBwXFxyZXNvdXJjZXNcXGFwcFxcZXh0ZW5zaW9uc1xcaGFwLWRlYnVnZ2VyXFxub2RlX21vZHVsZXMuYXNhclxcQGhhcC10b29sa2l0XFxkc2wteHZtXFxsaWJcXGxvYWRlclxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSEuLi9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy5hc2FyL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvYWNjZXNzLWxvYWRlci5qcyEuLi9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy5hc2FyL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9zcmMvcGFnZXMvcGhvbmVMb2dpbi9waG9uZUxvZ2luLnV4P3V4VHlwZT1wYWdlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3l1bi1zaG9wX3V4L3NyYy9wYWdlcy9waG9uZUxvZ2luL3Bob25lTG9naW4udXg/NmM3YyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx0ZXh0PuaJi+acuueZu+W9lTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=e:\\quickApp\\yun-shop_ux&cacheDirectory&plugins[]=e:\\quickApp\\resources\\app\\extensions\\hap-debugger\\node_modules.asar\\@hap-toolkit\\dsl-xvm\\lib\\loader\\babel-plugin-jsx.js&comments=false!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/phoneLogin/phoneLogin.ux?uxType=page\n");

/***/ }),

/***/ "./src/pages/phoneLogin/phoneLogin.ux?uxType=page":
/*!********************************************************!*\
  !*** ./src/pages/phoneLogin/phoneLogin.ux?uxType=page ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $app_template$ = __webpack_require__(/*! ../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./phoneLogin.ux?uxType=page& */ \"../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/phoneLogin/phoneLogin.ux?uxType=page&\")\nvar $app_style$ = __webpack_require__(/*! ../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./phoneLogin.ux?uxType=page */ \"../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/phoneLogin/phoneLogin.ux?uxType=page\")\nvar $app_script$ = __webpack_require__(/*! ../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=e:/quickApp/yun-shop_ux&cacheDirectory&plugins[]=e:/quickApp/resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../../../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./phoneLogin.ux?uxType=page */ \"../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=e:\\\\quickApp\\\\yun-shop_ux&cacheDirectory&plugins[]=e:\\\\quickApp\\\\resources\\\\app\\\\extensions\\\\hap-debugger\\\\node_modules.asar\\\\@hap-toolkit\\\\dsl-xvm\\\\lib\\\\loader\\\\babel-plugin-jsx.js&comments=false!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/phoneLogin/phoneLogin.ux?uxType=page\")\n\n$app_define$('@app-component/phoneLogin', [], function($app_require$, $app_exports$, $app_module$){\n     $app_script$($app_module$, $app_exports$, $app_require$)\n     if ($app_exports$.__esModule && $app_exports$.default) {\n            $app_module$.exports = $app_exports$.default\n        }\n     $app_module$.exports.template = $app_template$\n     $app_module$.exports.style = $app_style$\n})\n\n$app_bootstrap$('@app-component/phoneLogin',{ packagerVersion: '0.6.5'})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGhvbmVMb2dpbi9waG9uZUxvZ2luLnV4P3V4VHlwZT1wYWdlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Bob25lTG9naW4vcGhvbmVMb2dpbi51eD8xYmJiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2pzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzLmFzYXIvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlci90ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9waG9uZUxvZ2luLnV4P3V4VHlwZT1wYWdlJlwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy5hc2FyL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3N0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9waG9uZUxvZ2luLnV4P3V4VHlwZT1wYWdlXCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy5hc2FyL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy5hc2FyL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP2N3ZD1lOlxcXFxxdWlja0FwcFxcXFx5dW4tc2hvcF91eCZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109ZTpcXFxccXVpY2tBcHBcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGhhcC1kZWJ1Z2dlclxcXFxub2RlX21vZHVsZXMuYXNhclxcXFxAaGFwLXRvb2xraXRcXFxcZHNsLXh2bVxcXFxsaWJcXFxcbG9hZGVyXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2FjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vcGhvbmVMb2dpbi51eD91eFR5cGU9cGFnZVwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3Bob25lTG9naW4nLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L3Bob25lTG9naW4nLHsgcGFja2FnZXJWZXJzaW9uOiAnMC42LjUnfSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/phoneLogin/phoneLogin.ux?uxType=page\n");

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();