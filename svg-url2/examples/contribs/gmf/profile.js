/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"profile": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([22,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contribs/gmf/examples/profile.css":
/*!*******************************************!*\
  !*** ./contribs/gmf/examples/profile.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./contribs/gmf/examples/profile.js":
/*!******************************************!*\
  !*** ./contribs/gmf/examples/profile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js-exposed");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url.js */ "./contribs/gmf/examples/url.js");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.css */ "./contribs/gmf/examples/profile.css");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gmf_permalink_Permalink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gmf/permalink/Permalink.js */ "./contribs/gmf/src/permalink/Permalink.js");
/* harmony import */ var gmf_map_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gmf/map/component.js */ "./contribs/gmf/src/map/component.js");
/* harmony import */ var gmf_profile_module_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gmf/profile/module.js */ "./contribs/gmf/src/profile/module.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @geoblocks/proj/src/EPSG_21781.js */ "./node_modules/@geoblocks/proj/src/EPSG_21781.js");
/* harmony import */ var ol_Collection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/Collection.js */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/interaction/Draw.js */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Stroke.js */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Style.js */ "./node_modules/ol/style/Style.js");
MainController.$inject = ["$scope", "ngeoFeatureOverlayMgr"];
















var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('gmfapp', ['gettext', gmf_permalink_Permalink_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, gmf_map_component_js__WEBPACK_IMPORTED_MODULE_4__["default"].name, gmf_profile_module_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_6__["default"].name]);
module.value('gmfProfileJsonUrl', _url_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROFILE);
module.constant('defaultTheme', 'Demo');
module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');

function MainController($scope, ngeoFeatureOverlayMgr) {
  var _this = this;

  this.profileLine = null;
  this.profileLinesconfiguration = {
    'aster': {
      'color': '#0404A0'
    },
    'srtm': {
      'color': '#04A004'
    }
  };
  this.profileOptions = {
    styleDefs: 'svg {background-color: #D3E5D7};'
  };
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_13__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      projection: _geoblocks_proj_src_EPSG_21781_js__WEBPACK_IMPORTED_MODULE_7__["default"],
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [600000, 200000],
      zoom: 3
    })
  });
  var lineStyle = new ol_style_Style_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
    stroke: new ol_style_Stroke_js__WEBPACK_IMPORTED_MODULE_14__["default"]({
      color: '#ffcc33',
      width: 2
    })
  });
  var features = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
  var overlay = ngeoFeatureOverlayMgr.getFeatureOverlay();
  overlay.setFeatures(features);
  overlay.setStyle(lineStyle);
  ngeoFeatureOverlayMgr.init(this.map);
  this.drawLine = new ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
    type: 'LineString',
    features: features
  });
  this.drawLine.setActive(false);
  this.map.addInteraction(this.drawLine);

  this.toggleDrawLineActive = function () {
    if (this.drawLine.getActive()) {
      this.drawLine.setActive(false);
      this.clear_();
    } else {
      this.drawLine.setActive(true);
    }
  };

  this.clear_ = function () {
    features.clear();
    this.profileLine = null;
  };

  this.drawLine.on('drawstart', function () {
    _this.clear_();
  });
  this.drawLine.on('drawend', function (e) {
    _this.profileLine = e.feature.getGeometry();
    $scope.$digest();
  });
}

module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ 22:
/*!*****************************************************************************************************************!*\
  !*** multi ./contribs/gmf/examples/common_dependencies.js gmf/mainmodule.js ./contribs/gmf/examples/profile.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./contribs/gmf/examples/common_dependencies.js */"./contribs/gmf/examples/common_dependencies.js");
__webpack_require__(/*! gmf/mainmodule.js */"./contribs/gmf/src/mainmodule.js");
module.exports = __webpack_require__(/*! ./contribs/gmf/examples/profile.js */"./contribs/gmf/examples/profile.js");


/***/ })

/******/ });
//# sourceMappingURL=profile.js.map