(function(){
  
  var manifestJson = {"package":"com.d1617658907.sdo","name":"鲲美会","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1020","icon":"/Common/logo.png","router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/login":{"component":"login"},"pages/phoneLogin":{"component":"phoneLogin"},"pages/search":{"component":"search"},"pages/me":{"component":"me"},"pages/saleOrderList":{"component":"saleOrderList"}},"widgets":{}},"features":[{"name":"service.wxaccount","params":{"appId":"wx6f87841acfeeac0d","package":"com.d1617658907.sdo","sign":"33cc4368c6a357349ed268327f9c47b6"}},{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.share"},{"name":"system.webview"},{"name":"system.notification"},{"name":"system.storage"},{"name":"system.barcode"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true,"pages":{"pages/phoneLogin":{"titleBarText":"绑定手机","menu":false},"pages/login":{"titleBarText":"登录"},"pages/search":{"titleBarText":"搜索","menu":false},"pages/me":{"titleBarText":"掌柜中心","menu":true},"pages/saleOrderList":{"titleBarText":"我的销售单","menu":true}}}}
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

/***/ "../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=e:\\quickApp\\yun-shop_ux\\src!./node_modules/babel-loader/lib/index.js?cwd=e:\\quickApp\\yun-shop_ux&cacheDirectory&comments=false!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=e:/quickApp/yun-shop_ux/src!./node_modules/babel-loader/lib?cwd=e:/quickApp/yun-shop_ux&cacheDirectory&comments=false!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _util = _interopRequireDefault(__webpack_require__(/*! ./util */ \"./src/util.js\"));\n\nvar _system = _interopRequireDefault($app_require$(\"@app-module/system.router\"));\n\nvar _system2 = _interopRequireDefault($app_require$(\"@app-module/system.prompt\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar _default = {\n  showMenu: _util[\"default\"].showMenu,\n  createShortcut: _util[\"default\"].createShortcut,\n  router: _system[\"default\"],\n  prompt: _system2[\"default\"]\n};\nexports[\"default\"] = _default;}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPWU6XFxxdWlja0FwcFxceXVuLXNob3BfdXhcXHNyYyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD1lOlxccXVpY2tBcHBcXHl1bi1zaG9wX3V4JmNhY2hlRGlyZWN0b3J5JmNvbW1lbnRzPWZhbHNlIS4uL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9oYXAtZGVidWdnZXIvbm9kZV9tb2R1bGVzLmFzYXIvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlci9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL3NyYy9hcHAudXg/dXhUeXBlPWFwcC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy95dW4tc2hvcF91eC9zcmMvYXBwLnV4P2I1OGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuLyoqXHJcbiog5bqU55So57qn5Yir55qE6YWN572u77yM5L6b5omA5pyJ6aG16Z2i5YWs55SoXHJcbiovXHJcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcclxuaW1wb3J0IHJvdXRlciBmcm9tICdAc3lzdGVtLnJvdXRlcidcclxuaW1wb3J0IHByb21wdCBmcm9tICdAc3lzdGVtLnByb21wdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzaG93TWVudTogdXRpbC5zaG93TWVudSxcclxuICBjcmVhdGVTaG9ydGN1dDogdXRpbC5jcmVhdGVTaG9ydGN1dCxcclxuICByb3V0ZXI6cm91dGVyLFxyXG4gIHByb21wdDpwcm9tcHRcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=e:\\quickApp\\yun-shop_ux\\src!./node_modules/babel-loader/lib/index.js?cwd=e:\\quickApp\\yun-shop_ux&cacheDirectory&comments=false!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $app_style$ = {};var $app_script$ = __webpack_require__(/*! ../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=e:/quickApp/yun-shop_ux/src!../node_modules/babel-loader?cwd=e:/quickApp/yun-shop_ux&cacheDirectory&comments=false!../../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ \"../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=e:\\\\quickApp\\\\yun-shop_ux\\\\src!./node_modules/babel-loader/lib/index.js?cwd=e:\\\\quickApp\\\\yun-shop_ux&cacheDirectory&comments=false!../resources/app/extensions/hap-debugger/node_modules.asar/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\")\n\n$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){\n     $app_script$($app_module$, $app_exports$, $app_require$)\n     if ($app_exports$.__esModule && $app_exports$.default) {\n            $app_module$.exports = $app_exports$.default;\n        }\n     $app_module$.exports['manifest'] = manifestJson;\n     $app_module$.exports.style = { list: [ $app_style$ ] };\n})\n\n$app_bootstrap$('@app-application/app',{ packagerVersion: '0.6.5'})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnV4P2M3ZjIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICRhcHBfc3R5bGUkID0ge307dmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2hhcC1kZWJ1Z2dlci9ub2RlX21vZHVsZXMuYXNhci9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPWU6XFxcXHF1aWNrQXBwXFxcXHl1bi1zaG9wX3V4XFxcXHNyYyEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP2N3ZD1lOlxcXFxxdWlja0FwcFxcXFx5dW4tc2hvcF91eCZjYWNoZURpcmVjdG9yeSZjb21tZW50cz1mYWxzZSEuLi8uLi9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvaGFwLWRlYnVnZ2VyL25vZGVfbW9kdWxlcy5hc2FyL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9hcHAudXg/dXhUeXBlPWFwcFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0c1snbWFuaWZlc3QnXSA9IG1hbmlmZXN0SnNvbjtcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSB7IGxpc3Q6IFsgJGFwcF9zdHlsZSQgXSB9O1xufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWFwcGxpY2F0aW9uL2FwcCcseyBwYWNrYWdlclZlcnNpb246ICcwLjYuNSd9KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n/**\r\n * 显示菜单\r\n */\nfunction showMenu() {\n  var prompt = $app_require$('@app-module/system.prompt');\n\n  var router = $app_require$('@app-module/system.router');\n\n  var appInfo = $app_require$('@app-module/system.app').getInfo();\n\n  prompt.showContextMenu({\n    itemList: ['保存桌面', '关于', '取消'],\n    success: function success(ret) {\n      switch (ret.index) {\n        case 0:\n          // 保存桌面\n          createShortcut();\n          break;\n\n        case 1:\n          // 关于\n          router.push({\n            uri: '/About',\n            params: {\n              name: appInfo.name,\n              icon: appInfo.icon\n            }\n          });\n          break;\n\n        case 2:\n          // 取消\n          break;\n\n        default:\n          prompt.showToast({\n            message: 'error'\n          });\n      }\n    }\n  });\n}\n/**\r\n * 创建桌面图标\r\n * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限\r\n */\n\n\nfunction createShortcut() {\n  var prompt = $app_require$('@app-module/system.prompt');\n\n  var shortcut = $app_require$('@app-module/system.shortcut');\n\n  shortcut.hasInstalled({\n    success: function success(ret) {\n      if (ret) {\n        prompt.showToast({\n          message: '已创建桌面图标'\n        });\n      } else {\n        shortcut.install({\n          success: function success() {\n            prompt.showToast({\n              message: '成功创建桌面图标'\n            });\n          },\n          fail: function fail(errmsg, errcode) {\n            prompt.showToast({\n              message: \"\".concat(errcode, \": \").concat(errmsg)\n            });\n          }\n        });\n      }\n    }\n  });\n}\n\nvar _default = {\n  showMenu: showMenu,\n  createShortcut: createShortcut\n};\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsLmpzP2UwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaYvuekuuiPnOWNlVxyXG4gKi9cclxuZnVuY3Rpb24gc2hvd01lbnUgKCkge1xyXG4gIGNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ0BzeXN0ZW0ucHJvbXB0JylcclxuICBjb25zdCByb3V0ZXIgPSByZXF1aXJlKCdAc3lzdGVtLnJvdXRlcicpXHJcbiAgY29uc3QgYXBwSW5mbyA9IHJlcXVpcmUoJ0BzeXN0ZW0uYXBwJykuZ2V0SW5mbygpXHJcbiAgcHJvbXB0LnNob3dDb250ZXh0TWVudSh7XHJcbiAgICBpdGVtTGlzdDogWyfkv53lrZjmoYzpnaInLCAn5YWz5LqOJywgJ+WPlua2iCddLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKHJldCkge1xyXG4gICAgICBzd2l0Y2ggKHJldC5pbmRleCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgLy8g5L+d5a2Y5qGM6Z2iXHJcbiAgICAgICAgY3JlYXRlU2hvcnRjdXQoKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICAvLyDlhbPkuo5cclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICB1cmk6ICcvQWJvdXQnLFxyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGFwcEluZm8ubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogYXBwSW5mby5pY29uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgLy8g5Y+W5raIXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdlcnJvcidcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7uuahjOmdouWbvuagh1xyXG4gKiDms6jmhI/vvJrkvb/nlKjliqDovb3lmajmtYvor5Vg5Yib5bu65qGM6Z2i5b+r5o235pa55byPYOWKn+iDveaXtu+8jOivt+WFiOWcqGDns7vnu5/orr7nva5g5Lit5omT5byAYOW6lOeUqOWKoOi9veWZqGDnmoRg5qGM6Z2i5b+r5o235pa55byPYOadg+mZkFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlU2hvcnRjdXQgKCkge1xyXG4gIGNvbnN0IHByb21wdCA9IHJlcXVpcmUoJ0BzeXN0ZW0ucHJvbXB0JylcclxuICBjb25zdCBzaG9ydGN1dCA9IHJlcXVpcmUoJ0BzeXN0ZW0uc2hvcnRjdXQnKVxyXG4gIHNob3J0Y3V0Lmhhc0luc3RhbGxlZCh7XHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmV0KSB7XHJcbiAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICBwcm9tcHQuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICflt7LliJvlu7rmoYzpnaLlm77moIcnXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG9ydGN1dC5pbnN0YWxsKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+aIkOWKn+WIm+W7uuahjOmdouWbvuaghydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZXJybXNnLCBlcnJjb2RlKSB7XHJcbiAgICAgICAgICAgIHByb21wdC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGAke2VycmNvZGV9OiAke2Vycm1zZ31gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzaG93TWVudSxcclxuICBjcmVhdGVTaG9ydGN1dFxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBbkJBO0FBdUJBO0FBMUJBO0FBNEJBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFWQTtBQVlBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util.js\n");

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