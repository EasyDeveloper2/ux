(function(){
  
  var manifestJson = {"package":"com.d1617658907.sdo","name":"鲲美会","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1020","icon":"/Common/logo.png","features":[{"name":"service.wxaccount","params":{"appId":"wx6f87841acfeeac0d","package":"com.d1617658907.sdo","sign":"33cc4368c6a357349ed268327f9c47b6"}},{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.share"},{"name":"system.webview"},{"name":"system.notification"},{"name":"system.storage"},{"name":"system.barcode"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"pages/login","pages":{"pages/index":{"component":"index"},"pages/login":{"component":"login"},"pages/phoneLogin":{"component":"phoneLogin"}},"widgets":{}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true,"pages":{"Demo":{"titleBarText":"示例页","menu":false},"DemoDetail":{"titleBarText":"详情页"},"About":{"menu":false}}}}
  var createAppHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux/src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux&cacheDirectory&comments=false!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux/src!./node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux&cacheDirectory&comments=false!/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _util = _interopRequireDefault(__webpack_require__(/*! ./util */ \"./src/util.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  showMenu: _util[\"default\"].showMenu,\n  createShortcut: _util[\"default\"].createShortcut\n};\nexports[\"default\"] = _default;}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPS9Vc2Vycy9hZG1pbi9EZXNrdG9wL+mysumpsC/kupHlupcveXVuLXNob3BfdXgvc3JjIS4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4wLjZAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9L1VzZXJzL2FkbWluL0Rlc2t0b3Av6bKy6amwL+S6keW6ly95dW4tc2hvcF91eCZjYWNoZURpcmVjdG9yeSZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMv5b+r5bqU55So5byA5Y+R5bel5YW3LmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy5hc2FyL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVXNlcnMvYWRtaW4vRGVza3RvcC/psrLpqbAv5LqR5bqXL3l1bi1zaG9wX3V4L3NyYy9hcHAudXg/M2QzZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuLyoqXG4qIOW6lOeUqOe6p+WIq+eahOmFjee9ru+8jOS+m+aJgOaciemhtemdouWFrOeUqFxuKi9cbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93TWVudTogdXRpbC5zaG93TWVudSxcbiAgY3JlYXRlU2hvcnRjdXQ6IHV0aWwuY3JlYXRlU2hvcnRjdXRcbn1cbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux/src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux&cacheDirectory&comments=false!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $app_style$ = {};var $app_script$ = __webpack_require__(/*! ../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux/src!../node_modules/babel-loader?cwd=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux&cacheDirectory&comments=false!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ \"../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux/src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=/Users/admin/Desktop/鲲驰/云店/yun-shop_ux&cacheDirectory&comments=false!../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\")\n\n$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){\n     $app_script$($app_module$, $app_exports$, $app_require$)\n     if ($app_exports$.__esModule && $app_exports$.default) {\n            $app_module$.exports = $app_exports$.default;\n        }\n     $app_module$.exports['manifest'] = manifestJson;\n     $app_module$.exports.style = { list: [ $app_style$ ] };\n})\n\n$app_bootstrap$('@app-application/app',{ packagerVersion: '0.6.5'})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnV4PzA2NWQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICRhcHBfc3R5bGUkID0ge307dmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPS9Vc2Vycy9hZG1pbi9EZXNrdG9wL+mysumpsC/kupHlupcveXVuLXNob3BfdXgvc3JjIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/Y3dkPS9Vc2Vycy9hZG1pbi9EZXNrdG9wL+mysumpsC/kupHlupcveXVuLXNob3BfdXgmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL+W/q+W6lOeUqOW8gOWPkeW3peWFty5hcHAvQ29udGVudHMvUmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vYXBwLnV4P3V4VHlwZT1hcHBcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWFwcGxpY2F0aW9uL2FwcCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHNbJ21hbmlmZXN0J10gPSBtYW5pZmVzdEpzb247XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0geyBsaXN0OiBbICRhcHBfc3R5bGUkIF0gfTtcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLHsgcGFja2FnZXJWZXJzaW9uOiAnMC42LjUnfSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n/**\n * 显示菜单\n */\nfunction showMenu() {\n  var prompt = $app_require$('@app-module/system.prompt');\n\n  var router = $app_require$('@app-module/system.router');\n\n  var appInfo = $app_require$('@app-module/system.app').getInfo();\n\n  prompt.showContextMenu({\n    itemList: ['保存桌面', '关于', '取消'],\n    success: function success(ret) {\n      switch (ret.index) {\n        case 0:\n          // 保存桌面\n          createShortcut();\n          break;\n\n        case 1:\n          // 关于\n          router.push({\n            uri: '/About',\n            params: {\n              name: appInfo.name,\n              icon: appInfo.icon\n            }\n          });\n          break;\n\n        case 2:\n          // 取消\n          break;\n\n        default:\n          prompt.showToast({\n            message: 'error'\n          });\n      }\n    }\n  });\n}\n/**\n * 创建桌面图标\n * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限\n */\n\n\nfunction createShortcut() {\n  var prompt = $app_require$('@app-module/system.prompt');\n\n  var shortcut = $app_require$('@app-module/system.shortcut');\n\n  shortcut.hasInstalled({\n    success: function success(ret) {\n      if (ret) {\n        prompt.showToast({\n          message: '已创建桌面图标'\n        });\n      } else {\n        shortcut.install({\n          success: function success() {\n            prompt.showToast({\n              message: '成功创建桌面图标'\n            });\n          },\n          fail: function fail(errmsg, errcode) {\n            prompt.showToast({\n              message: \"\".concat(errcode, \": \").concat(errmsg)\n            });\n          }\n        });\n      }\n    }\n  });\n}\n\nvar _default = {\n  showMenu: showMenu,\n  createShortcut: createShortcut\n};\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsLmpzP2UwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmmL7npLroj5zljZVcbiAqL1xuZnVuY3Rpb24gc2hvd01lbnUgKCkge1xuICBjb25zdCBwcm9tcHQgPSByZXF1aXJlKCdAc3lzdGVtLnByb21wdCcpXG4gIGNvbnN0IHJvdXRlciA9IHJlcXVpcmUoJ0BzeXN0ZW0ucm91dGVyJylcbiAgY29uc3QgYXBwSW5mbyA9IHJlcXVpcmUoJ0BzeXN0ZW0uYXBwJykuZ2V0SW5mbygpXG4gIHByb21wdC5zaG93Q29udGV4dE1lbnUoe1xuICAgIGl0ZW1MaXN0OiBbJ+S/neWtmOahjOmdoicsICflhbPkuo4nLCAn5Y+W5raIJ10sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJldCkge1xuICAgICAgc3dpdGNoIChyZXQuaW5kZXgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgLy8g5L+d5a2Y5qGM6Z2iXG4gICAgICAgIGNyZWF0ZVNob3J0Y3V0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8g5YWz5LqOXG4gICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICB1cmk6ICcvQWJvdXQnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbmFtZTogYXBwSW5mby5uYW1lLFxuICAgICAgICAgICAgaWNvbjogYXBwSW5mby5pY29uXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAyOlxuICAgICAgICAvLyDlj5bmtohcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvcidcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICog5Yib5bu65qGM6Z2i5Zu+5qCHXG4gKiDms6jmhI/vvJrkvb/nlKjliqDovb3lmajmtYvor5Vg5Yib5bu65qGM6Z2i5b+r5o235pa55byPYOWKn+iDveaXtu+8jOivt+WFiOWcqGDns7vnu5/orr7nva5g5Lit5omT5byAYOW6lOeUqOWKoOi9veWZqGDnmoRg5qGM6Z2i5b+r5o235pa55byPYOadg+mZkFxuICovXG5mdW5jdGlvbiBjcmVhdGVTaG9ydGN1dCAoKSB7XG4gIGNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ0BzeXN0ZW0ucHJvbXB0JylcbiAgY29uc3Qgc2hvcnRjdXQgPSByZXF1aXJlKCdAc3lzdGVtLnNob3J0Y3V0JylcbiAgc2hvcnRjdXQuaGFzSW5zdGFsbGVkKHtcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmV0KSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICflt7LliJvlu7rmoYzpnaLlm77moIcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG9ydGN1dC5pbnN0YWxsKHtcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+aIkOWKn+WIm+W7uuahjOmdouWbvuaghydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogYCR7ZXJyY29kZX06ICR7ZXJybXNnfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaG93TWVudSxcbiAgY3JlYXRlU2hvcnRjdXRcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBbkJBO0FBdUJBO0FBMUJBO0FBNEJBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFWQTtBQVlBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = manifestJson;
  }
})();