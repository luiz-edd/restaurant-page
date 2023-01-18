/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fontes/Roboto/Roboto-Medium.ttf */ "./fontes/Roboto/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  /* url(\"../fontes/Roboto/Roboto-Light.ttf\") format(\"ttf\"),\n    url(\"../fontes/Roboto/Roboto-Bold.ttf\") format(\"ttf\"),\n    url(\"../fontes/Roboto/Roboto-Regular.ttf\") format(\"ttf\"),\n    url(\"../fontes/Roboto/Roboto-Thin.ttf\") format(\"ttf\"), */\n  /* url(\"./my-font.woff\") format(\"woff\"); */\n}\n* {\n  margin: 0;\n  list-style: none;\n  box-sizing: border-box;\n  font-family: \"Roboto\", Fallback, sans-serif;\n  /* border: 1px solid black; */\n}\n\n#content {\n}\n\n.header {\n  display: grid;\n  background-color: rgb(238, 93, 45);\n  color: white;\n  padding: 15px 10px;\n  justify-content: space-evenly;\n  font-size: 1.5rem;\n  grid-template-columns: 100px auto;\n}\n.container {\n  height: auto;\n  background-color: #fce8dc;\n  display: flex;\n  justify-content: center;\n}\n.footer {\n  display: flex;\n  gap: 20px;\n  background-color: #372c1d;\n  color: white;\n  justify-content: space-around;\n  font-size: 1.2rem;\n  padding: 5px;\n}\n.header div {\n  padding: 10px;\n  border-radius: 4px;\n  /* outline: 1px solid #371d29; */\n  /* box-shadow: 5px 10px 18px #a51515; */\n  background-color: #372c1d;\n}\n.header div:hover {\n  background-color: rgb(206, 65, 17);\n  box-shadow: 5px 10px 18px #a51515;\n  cursor: pointer;\n}\nnav {\n  display: flex;\n  gap: 35px;\n  justify-content: space-between;\n  align-items: center;\n}\n.header img {\n  border-radius: 100%;\n  width: 100%;\n  cursor: pointer;\n}\n/* home */\nimg {\n  width: auto;\n}\n\n.home {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: clamp(300px, 50%, 700px);\n  padding: 50px 0;\n  gap: 20px;\n}\n/* Menu */\n.menu {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  width: 90%;\n  max-width: 1500px;\n  /* justify-content: center; */\n  /* align-items: flex-start; */\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.item-box {\n  display: grid;\n  grid-template-columns: 200px auto 65px;\n  grid-template-rows: 30px auto;\n  column-gap: 20px;\n  outline: 1px 0 1px;\n}\n.item-box img {\n  grid-column: 1 / 2;\n  grid-row: 1 / -1;\n  width: 100%;\n}\n.item-title {\n  display: flex;\n  align-self: flex-start;\n  grid-column: 2 / 4;\n  grid-row: 1 / 2;\n}\n.item-description {\n  display: flex;\n  align-self: flex-start;\n  grid-column: 2 / 4;\n  grid-row: 2 / -1;\n}\n.item-price {\n  display: flex;\n  align-self: center;\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n}\n/* contact  */\n.contact {\n  display: flex;\n  padding: 30px;\n  gap: 30px;\n  flex-direction: column;\n}\n.maps {\n  width: 500px;\n  height: 450px;\n  border: 0;\n}\n\n.footer a {\n  padding: 5px;\n  color: white;\n  text-decoration: none;\n}\n.footer a:hover {\n  background-color: white;\n  text-decoration: none;\n  color: #372c1d;\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,0DAA4D;EAC5D;;;4DAG0D;EAC1D,0CAA0C;AAC5C;AACA;EACE,SAAS;EACT,gBAAgB;EAChB,sBAAsB;EACtB,2CAA2C;EAC3C,6BAA6B;AAC/B;;AAEA;AACA;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,iBAAiB;EACjB,iCAAiC;AACnC;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,SAAS;EACT,yBAAyB;EACzB,YAAY;EACZ,6BAA6B;EAC7B,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,gCAAgC;EAChC,uCAAuC;EACvC,yBAAyB;AAC3B;AACA;EACE,kCAAkC;EAClC,iCAAiC;EACjC,eAAe;AACjB;AACA;EACE,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;AACjB;AACA,SAAS;AACT;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,+BAA+B;EAC/B,eAAe;EACf,SAAS;AACX;AACA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,6BAA6B;EAC7B,6BAA6B;EAC7B,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sCAAsC;EACtC,6BAA6B;EAC7B,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;AACA,aAAa;AACb;EACE,aAAa;EACb,aAAa;EACb,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;AACA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,kBAAkB;AACpB","sourcesContent":["@font-face {\n  font-family: \"Roboto\";\n  src: url(\"../fontes/Roboto/Roboto-Medium.ttf\") format(\"ttf\");\n  /* url(\"../fontes/Roboto/Roboto-Light.ttf\") format(\"ttf\"),\n    url(\"../fontes/Roboto/Roboto-Bold.ttf\") format(\"ttf\"),\n    url(\"../fontes/Roboto/Roboto-Regular.ttf\") format(\"ttf\"),\n    url(\"../fontes/Roboto/Roboto-Thin.ttf\") format(\"ttf\"), */\n  /* url(\"./my-font.woff\") format(\"woff\"); */\n}\n* {\n  margin: 0;\n  list-style: none;\n  box-sizing: border-box;\n  font-family: \"Roboto\", Fallback, sans-serif;\n  /* border: 1px solid black; */\n}\n\n#content {\n}\n\n.header {\n  display: grid;\n  background-color: rgb(238, 93, 45);\n  color: white;\n  padding: 15px 10px;\n  justify-content: space-evenly;\n  font-size: 1.5rem;\n  grid-template-columns: 100px auto;\n}\n.container {\n  height: auto;\n  background-color: #fce8dc;\n  display: flex;\n  justify-content: center;\n}\n.footer {\n  display: flex;\n  gap: 20px;\n  background-color: #372c1d;\n  color: white;\n  justify-content: space-around;\n  font-size: 1.2rem;\n  padding: 5px;\n}\n.header div {\n  padding: 10px;\n  border-radius: 4px;\n  /* outline: 1px solid #371d29; */\n  /* box-shadow: 5px 10px 18px #a51515; */\n  background-color: #372c1d;\n}\n.header div:hover {\n  background-color: rgb(206, 65, 17);\n  box-shadow: 5px 10px 18px #a51515;\n  cursor: pointer;\n}\nnav {\n  display: flex;\n  gap: 35px;\n  justify-content: space-between;\n  align-items: center;\n}\n.header img {\n  border-radius: 100%;\n  width: 100%;\n  cursor: pointer;\n}\n/* home */\nimg {\n  width: auto;\n}\n\n.home {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: clamp(300px, 50%, 700px);\n  padding: 50px 0;\n  gap: 20px;\n}\n/* Menu */\n.menu {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  width: 90%;\n  max-width: 1500px;\n  /* justify-content: center; */\n  /* align-items: flex-start; */\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.item-box {\n  display: grid;\n  grid-template-columns: 200px auto 65px;\n  grid-template-rows: 30px auto;\n  column-gap: 20px;\n  outline: 1px 0 1px;\n}\n.item-box img {\n  grid-column: 1 / 2;\n  grid-row: 1 / -1;\n  width: 100%;\n}\n.item-title {\n  display: flex;\n  align-self: flex-start;\n  grid-column: 2 / 4;\n  grid-row: 1 / 2;\n}\n.item-description {\n  display: flex;\n  align-self: flex-start;\n  grid-column: 2 / 4;\n  grid-row: 2 / -1;\n}\n.item-price {\n  display: flex;\n  align-self: center;\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n}\n/* contact  */\n.contact {\n  display: flex;\n  padding: 30px;\n  gap: 30px;\n  flex-direction: column;\n}\n.maps {\n  width: 500px;\n  height: 450px;\n  border: 0;\n}\n\n.footer a {\n  padding: 5px;\n  color: white;\n  text-decoration: none;\n}\n.footer a:hover {\n  background-color: white;\n  text-decoration: none;\n  color: #372c1d;\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addContactContent)
/* harmony export */ });
function addContactContent() {
  const container = document.querySelector(".container");
  const contactBox = document.createElement("div");
  const title = document.createElement("h3");
  const infoBox = document.createElement("div");
  const address = document.createElement("div");
  const mapBox = document.createElement("div");
  const frame = document.createElement("iframe");
  const ifoodTitle = document.createElement("h4");
  const ifoodLink = document.createElement("a");
  const ifoodBox = document.createElement("div");

  contactBox.classList.add("contact");
  infoBox.classList.add("info-box");
  address.classList.add("address");
  mapBox.classList.add("map-box");
  frame.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4539766990974!2d-46.65521154905793!3d-23.55213348461231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5835a7be9be5%3A0xd394fefded9f6df9!2sR.%20Augusta%2C%20736%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001304-001!5e0!3m2!1spt-BR!2sbr!4v1674002970177!5m2!1spt-BR!2sbr";
  frame.classList.add("maps");
  title.textContent = "Come visit us!";
  address.textContent = "Rua Augusta, 736 - Consolação";
  ifoodTitle.textContent = "Or order direct from your home.";
  ifoodLink.href =
    "https://www.ifood.com.br/delivery/sao-paulo-sp/lebanon-food-kebab-esfihas-grill-consolacao/d8a81bc8-87d9-4fe0-bf62-455e884da7b2";
  ifoodLink.textContent = "Click here to go our ifood page.";

  mapBox.append(frame);
  infoBox.append(title, address);
  ifoodBox.append(ifoodTitle, ifoodLink);
  contactBox.append(infoBox, mapBox, ifoodBox);
  container.append(contactBox);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addHomeContent)
/* harmony export */ });
/* harmony import */ var _img_mainPicture_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/mainPicture.jpeg */ "./img/mainPicture.jpeg");


function addHomeContent() {
  const container = document.querySelector(".container");
  const home = document.createElement("div");
  const title = document.createElement("div");
  const mainImg = new Image();
  mainImg.src = _img_mainPicture_jpeg__WEBPACK_IMPORTED_MODULE_0__;

  home.classList.add("home");

  title.append(document.createElement("h2"), document.createElement("p"));
  title.lastElementChild.textContent = "Best shawarma in the world!";
  title.firstChild.textContent = "Lebanon Food Augusta";

  const bottomText = createTitleAndDescription(
    "It's not just Food, It's an Experience.",
    "Lebanon food augusta it's a lebanese restaurante located in the center of Sao paulo in Augusta street. We serve some shawarma, esfiha, hummus, kibe, tabule, lebanese dessert and much more."
  );

  home.append(title, mainImg, bottomText);
  container.append(home);
}

function createTitleAndDescription(title, description) {
  const box = document.createElement("div");
  const titleItem = document.createElement("h3");
  const descriptionItem = document.createElement("div");

  titleItem.textContent = title;
  descriptionItem.textContent = description;
  box.append(titleItem, descriptionItem);

  return box;
}


/***/ }),

/***/ "./src/mainStructure.js":
/*!******************************!*\
  !*** ./src/mainStructure.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainStructure)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _img_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/logo.jpg */ "./img/logo.jpg");





function mainStructure() {
  const content = document.querySelector("#content");

  const structureElements = () => {
    const header = document.createElement("div");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("div");
    const contact = document.createElement("div");
    const menu = document.createElement("div");
    const container = document.createElement("div");
    const logoImg = new Image();

    const footer = document.createElement("div");
    const instagram = document.createElement("a");
    const address = document.createElement("a");
    const ifood = document.createElement("a");

    header.classList.add("header");
    container.classList.add("container");
    footer.classList.add("footer");

    home.textContent = "Home";
    contact.textContent = "Contact";
    menu.textContent = "Menu";
    instagram.textContent = "Instagram";
    address.textContent = "Address";
    ifood.textContent = "Ifood";
    logoImg.src = _img_logo_jpg__WEBPACK_IMPORTED_MODULE_3__;
    instagram.href = "https://www.instagram.com/lebanonfoodaugusta/";
    ifood.href =
      "https://www.ifood.com.br/delivery/sao-paulo-sp/lebanon-food-kebab-esfihas-grill-consolacao/d8a81bc8-87d9-4fe0-bf62-455e884da7b2";
    address.href = "https://goo.gl/maps/PQRAP8GMkhsWjA4C9";

    nav.append(home, menu, contact);
    header.append(logoImg, nav);
    footer.append(instagram, address, ifood);

    //add content to the page home/location/menu when click on header

    return {
      mainStructure: [header, container, footer],
      header,
      container,
      footer,
      structureElements: {
        header,
        nav,
        ul,
        home,
        contact,
        menu,
        container,
        footer,
        instagram,
        address,
        ifood,
        logoImg,
      },
    };
  };

  const addStructureToDoom = () => {
    const structure = structureElements();
    structure.mainStructure.forEach((element) => {
      content.appendChild(element);
    });
    return structure;
  };

  const resetContainer = () => {
    const container = document.querySelector(".container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  return { addStructureToDoom, resetContainer };
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMenuPage)
/* harmony export */ });
/* harmony import */ var _img_shawarma_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/shawarma.jpg */ "./img/shawarma.jpg");
/* harmony import */ var _img_homus_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/homus.jpeg */ "./img/homus.jpeg");
/* harmony import */ var _img_esfiha_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/esfiha.jpg */ "./img/esfiha.jpg");
/* harmony import */ var _img_kibe_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/kibe.jpeg */ "./img/kibe.jpeg");
/* harmony import */ var _img_tabule_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/tabule.jpg */ "./img/tabule.jpg");






function addMenuPage() {
  const container = document.querySelector(".container");
  const content = document.createElement("div");

  content.classList.add("menu");

  const shawarmaItem = createItemMenu(
    _img_shawarma_jpg__WEBPACK_IMPORTED_MODULE_0__,
    "Shawarma",
    "Arabic bread rooled in chicken, fries, lettuce, tomato and cucumber, with a specio garlic mayo",
    "R$29,90"
  );
  const homusItem = createItemMenu(
    _img_homus_jpeg__WEBPACK_IMPORTED_MODULE_1__,
    "Homus",
    "Arabic bread roo paste originating in the Middle East that is traditionally made of pureed or mashed cooked chickpeas mixed with tahini—a toasted sesame condiment—and diced garlic, lemon juice, and saltled in chicken, fries, lettuce, tomato and cucumber, with a specio garlic mayo",
    "R$39,90"
  );
  const esfihaItem = createItemMenu(
    _img_esfiha_jpg__WEBPACK_IMPORTED_MODULE_2__,
    "Esfiha",
    "Delicios esfiha with diferent flavors, like steak, cheese, calabresa, white cheese  ",
    "R$9,90"
  );
  const kibeItem = createItemMenu(
    _img_kibe_jpeg__WEBPACK_IMPORTED_MODULE_3__,
    "Kibe",
    "Beef Kibe is crispy on the outside, soft on the inside and seasoned just right. Served as a side dish or appetizer, great choice.",
    "R$11,90"
  );
  const tabuleItem = createItemMenu(
    _img_tabule_jpg__WEBPACK_IMPORTED_MODULE_4__,
    "Tabule",
    "Tabbouleh is a traditional dish of Arab cuisine, full of freshness and a few secrets: the wheat should not be soaked for too long to avoid soaking, and the parsley should go into the recipe washed and thoroughly dried.",
    "R$19,90"
  );
  content.append(shawarmaItem, homusItem, esfihaItem, kibeItem, tabuleItem);
  container.append(content);
}

function createItemMenu(
  imgContent,
  itemTitleContent,
  itemDescriptionContent,
  itemPriceContent
) {
  const itemBox = document.createElement("div");
  const img = new Image();
  const itemTitle = document.createElement("h2");
  const itemDescription = document.createElement("p");
  const itemPrice = document.createElement("div");
  const itemTextBox = document.createElement("div");

  itemBox.classList.add("item-box");
  img.classList.add("img-menu");
  itemTitle.classList.add("item-title");
  itemDescription.classList.add("item-description");
  itemPrice.classList.add("item-price");
  itemTextBox.classList.add("item-text-box");

  img.src = imgContent;
  itemTitle.textContent = itemTitleContent;
  itemDescription.textContent = itemDescriptionContent;
  itemPrice.textContent = itemPriceContent;
  // itemTextBox.append(itemTitle, itemDescription, itemPrice)
  itemBox.append(img, itemTitle, itemDescription, itemPrice);
  return itemBox;
}


/***/ }),

/***/ "./fontes/Roboto/Roboto-Medium.ttf":
/*!*****************************************!*\
  !*** ./fontes/Roboto/Roboto-Medium.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ }),

/***/ "./img/esfiha.jpg":
/*!************************!*\
  !*** ./img/esfiha.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f659edce68c763f5dc79.jpg";

/***/ }),

/***/ "./img/homus.jpeg":
/*!************************!*\
  !*** ./img/homus.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6753b46235599c4aa16f.jpeg";

/***/ }),

/***/ "./img/kibe.jpeg":
/*!***********************!*\
  !*** ./img/kibe.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "896b45472bdaa0458f97.jpeg";

/***/ }),

/***/ "./img/logo.jpg":
/*!**********************!*\
  !*** ./img/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f64aaca5eeb5da9e8fe.jpg";

/***/ }),

/***/ "./img/mainPicture.jpeg":
/*!******************************!*\
  !*** ./img/mainPicture.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e84cd43b48cc951e270d.jpeg";

/***/ }),

/***/ "./img/shawarma.jpg":
/*!**************************!*\
  !*** ./img/shawarma.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cafa74b62c1b115b3c0d.jpg";

/***/ }),

/***/ "./img/tabule.jpg":
/*!************************!*\
  !*** ./img/tabule.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26ecf6b826fed7f11169.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainStructure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainStructure.js */ "./src/mainStructure.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





addPage();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

// structure.structureElements.header.style.backgroundColor = "black";

function addPage() {
  const structure = (0,_mainStructure_js__WEBPACK_IMPORTED_MODULE_0__["default"])().addStructureToDoom();
  const home = structure.structureElements.home;
  const contact = structure.structureElements.contact;
  const menu = structure.structureElements.menu;
  const container = structure.structureElements.container;
  const logo = structure.structureElements.logoImg;
  home.addEventListener("click", () => {
    if (
      !(
        container.firstChild !== null &&
        container.firstChild.className === home.textContent.toLocaleLowerCase()
      )
    ) {
      (0,_mainStructure_js__WEBPACK_IMPORTED_MODULE_0__["default"])().resetContainer();
      (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      console.log("generated");
    }
  });
  contact.addEventListener("click", () => {
    if (
      !(
        container.firstChild !== null &&
        container.firstChild.className ===
          contact.textContent.toLocaleLowerCase()
      )
    ) {
      (0,_mainStructure_js__WEBPACK_IMPORTED_MODULE_0__["default"])().resetContainer();
      (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      console.log("generated");
    }
  });
  menu.addEventListener("click", () => {
    if (
      !(
        container.firstChild !== null &&
        container.firstChild.className === menu.textContent.toLocaleLowerCase()
      )
    ) {
      (0,_mainStructure_js__WEBPACK_IMPORTED_MODULE_0__["default"])().resetContainer();
      (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      console.log("generated");
    }
  });
  logo.addEventListener("click", () => {
    (0,_mainStructure_js__WEBPACK_IMPORTED_MODULE_0__["default"])().resetContainer();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    console.log("generated");
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7QUFDSDtBQUNBLElBQUksNkRBQWE7QUFDakIsSUFBSSxvREFBVztBQUNmO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW5TdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRlcy9Sb2JvdG8vUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgLyogdXJsKFxcXCIuLi9mb250ZXMvUm9ib3RvL1JvYm90by1MaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRlcy9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250ZXMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udGVzL1JvYm90by9Sb2JvdG8tVGhpbi50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpLCAqL1xcbiAgLyogdXJsKFxcXCIuL215LWZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpOyAqL1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBGYWxsYmFjaywgc2Fucy1zZXJpZjtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDkzLCA0NSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2U4ZGM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzJjMWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uaGVhZGVyIGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkICMzNzFkMjk7ICovXFxuICAvKiBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICNhNTE1MTU7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzcyYzFkO1xcbn1cXG4uaGVhZGVyIGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCA2NSwgMTcpO1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjYTUxNTE1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogaG9tZSAqL1xcbmltZyB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmhvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNTAlLCA3MDBweCk7XFxuICBwYWRkaW5nOiA1MHB4IDA7XFxuICBnYXA6IDIwcHg7XFxufVxcbi8qIE1lbnUgKi9cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNDBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDE1MDBweDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG4uaXRlbS1ib3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0byA2NXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IGF1dG87XFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgb3V0bGluZTogMXB4IDAgMXB4O1xcbn1cXG4uaXRlbS1ib3ggaW1nIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLml0ZW0tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZ3JpZC1yb3c6IDIgLyAtMTtcXG59XFxuLml0ZW0tcHJpY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuLyogY29udGFjdCAgKi9cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdhcDogMzBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tYXBzIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5mb290ZXIgYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMzcyYzFkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDBEQUE0RDtFQUM1RDs7OzREQUcwRDtFQUMxRCwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJDQUEyQztFQUMzQyw2QkFBNkI7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLHVDQUF1QztFQUN2Qyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udGVzL1JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICAvKiB1cmwoXFxcIi4uL2ZvbnRlcy9Sb2JvdG8vUm9ib3RvLUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udGVzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnRlcy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250ZXMvUm9ib3RvL1JvYm90by1UaGluLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIiksICovXFxuICAvKiB1cmwoXFxcIi4vbXktZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7ICovXFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIEZhbGxiYWNrLCBzYW5zLXNlcmlmO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbiNjb250ZW50IHtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgOTMsIDQ1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XFxufVxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZThkYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MmMxZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5oZWFkZXIgZGl2IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgIzM3MWQyOTsgKi9cXG4gIC8qIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggI2E1MTUxNTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzJjMWQ7XFxufVxcbi5oZWFkZXIgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDY1LCAxNyk7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICNhNTE1MTU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBob21lICovXFxuaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA1MCUsIDcwMHB4KTtcXG4gIHBhZGRpbmc6IDUwcHggMDtcXG4gIGdhcDogMjBweDtcXG59XFxuLyogTWVudSAqL1xcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0MHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogMTUwMHB4O1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcbi5pdGVtLWJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCBhdXRvIDY1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggYXV0bztcXG4gIGNvbHVtbi1nYXA6IDIwcHg7XFxuICBvdXRsaW5lOiAxcHggMCAxcHg7XFxufVxcbi5pdGVtLWJveCBpbWcge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaXRlbS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbn1cXG4uaXRlbS1wcmljZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG4vKiBjb250YWN0ICAqL1xcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1hcHMge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMzNzJjMWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDb250YWN0Q29udGVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgaW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIGNvbnN0IGlmb29kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnN0IGlmb29kTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBpZm9vZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29udGFjdEJveC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgaW5mb0JveC5jbGFzc0xpc3QuYWRkKFwiaW5mby1ib3hcIik7XG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XG4gIG1hcEJveC5jbGFzc0xpc3QuYWRkKFwibWFwLWJveFwiKTtcbiAgZnJhbWUuc3JjID1cbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM2NTcuNDUzOTc2Njk5MDk3NCEyZC00Ni42NTUyMTE1NDkwNTc5MyEzZC0yMy41NTIxMzM0ODQ2MTIzMSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4OTRjZTU4MzVhN2JlOWJlNSUzQTB4ZDM5NGZlZmRlZDlmNmRmOSEyc1IuJTIwQXVndXN0YSUyQyUyMDczNiUyMC0lMjBDb25zb2xhJUMzJUE3JUMzJUEzbyUyQyUyMFMlQzMlQTNvJTIwUGF1bG8lMjAtJTIwU1AlMkMlMjAwMTMwNC0wMDEhNWUwITNtMiExc3B0LUJSITJzYnIhNHYxNjc0MDAyOTcwMTc3ITVtMiExc3B0LUJSITJzYnJcIjtcbiAgZnJhbWUuY2xhc3NMaXN0LmFkZChcIm1hcHNcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb21lIHZpc2l0IHVzIVwiO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJSdWEgQXVndXN0YSwgNzM2IC0gQ29uc29sYcOnw6NvXCI7XG4gIGlmb29kVGl0bGUudGV4dENvbnRlbnQgPSBcIk9yIG9yZGVyIGRpcmVjdCBmcm9tIHlvdXIgaG9tZS5cIjtcbiAgaWZvb2RMaW5rLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly93d3cuaWZvb2QuY29tLmJyL2RlbGl2ZXJ5L3Nhby1wYXVsby1zcC9sZWJhbm9uLWZvb2Qta2ViYWItZXNmaWhhcy1ncmlsbC1jb25zb2xhY2FvL2Q4YTgxYmM4LTg3ZDktNGZlMC1iZjYyLTQ1NWU4ODRkYTdiMlwiO1xuICBpZm9vZExpbmsudGV4dENvbnRlbnQgPSBcIkNsaWNrIGhlcmUgdG8gZ28gb3VyIGlmb29kIHBhZ2UuXCI7XG5cbiAgbWFwQm94LmFwcGVuZChmcmFtZSk7XG4gIGluZm9Cb3guYXBwZW5kKHRpdGxlLCBhZGRyZXNzKTtcbiAgaWZvb2RCb3guYXBwZW5kKGlmb29kVGl0bGUsIGlmb29kTGluayk7XG4gIGNvbnRhY3RCb3guYXBwZW5kKGluZm9Cb3gsIG1hcEJveCwgaWZvb2RCb3gpO1xuICBjb250YWluZXIuYXBwZW5kKGNvbnRhY3RCb3gpO1xufVxuIiwiaW1wb3J0IG1haW5QaWN0dXJlIGZyb20gXCIuLi9pbWcvbWFpblBpY3R1cmUuanBlZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRIb21lQ29udGVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1haW5JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbWFpbkltZy5zcmMgPSBtYWluUGljdHVyZTtcblxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gIHRpdGxlLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIiksIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpKTtcbiAgdGl0bGUubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IFwiQmVzdCBzaGF3YXJtYSBpbiB0aGUgd29ybGQhXCI7XG4gIHRpdGxlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkxlYmFub24gRm9vZCBBdWd1c3RhXCI7XG5cbiAgY29uc3QgYm90dG9tVGV4dCA9IGNyZWF0ZVRpdGxlQW5kRGVzY3JpcHRpb24oXG4gICAgXCJJdCdzIG5vdCBqdXN0IEZvb2QsIEl0J3MgYW4gRXhwZXJpZW5jZS5cIixcbiAgICBcIkxlYmFub24gZm9vZCBhdWd1c3RhIGl0J3MgYSBsZWJhbmVzZSByZXN0YXVyYW50ZSBsb2NhdGVkIGluIHRoZSBjZW50ZXIgb2YgU2FvIHBhdWxvIGluIEF1Z3VzdGEgc3RyZWV0LiBXZSBzZXJ2ZSBzb21lIHNoYXdhcm1hLCBlc2ZpaGEsIGh1bW11cywga2liZSwgdGFidWxlLCBsZWJhbmVzZSBkZXNzZXJ0IGFuZCBtdWNoIG1vcmUuXCJcbiAgKTtcblxuICBob21lLmFwcGVuZCh0aXRsZSwgbWFpbkltZywgYm90dG9tVGV4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmQoaG9tZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlQW5kRGVzY3JpcHRpb24odGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB0aXRsZUl0ZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgZGVzY3JpcHRpb25JdGVtLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGJveC5hcHBlbmQodGl0bGVJdGVtLCBkZXNjcmlwdGlvbkl0ZW0pO1xuXG4gIHJldHVybiBib3g7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGFkZEhvbWVQYWdlIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBhZGRNZW51UGFnZSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vaW1nL2xvZ28uanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5TdHJ1Y3R1cmUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3Qgc3RydWN0dXJlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbnN0YWdyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgaWZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgaW5zdGFncmFtLnRleHRDb250ZW50ID0gXCJJbnN0YWdyYW1cIjtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJBZGRyZXNzXCI7XG4gICAgaWZvb2QudGV4dENvbnRlbnQgPSBcIklmb29kXCI7XG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xuICAgIGluc3RhZ3JhbS5ocmVmID0gXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2xlYmFub25mb29kYXVndXN0YS9cIjtcbiAgICBpZm9vZC5ocmVmID1cbiAgICAgIFwiaHR0cHM6Ly93d3cuaWZvb2QuY29tLmJyL2RlbGl2ZXJ5L3Nhby1wYXVsby1zcC9sZWJhbm9uLWZvb2Qta2ViYWItZXNmaWhhcy1ncmlsbC1jb25zb2xhY2FvL2Q4YTgxYmM4LTg3ZDktNGZlMC1iZjYyLTQ1NWU4ODRkYTdiMlwiO1xuICAgIGFkZHJlc3MuaHJlZiA9IFwiaHR0cHM6Ly9nb28uZ2wvbWFwcy9QUVJBUDhHTWtoc1dqQTRDOVwiO1xuXG4gICAgbmF2LmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbiAgICBoZWFkZXIuYXBwZW5kKGxvZ29JbWcsIG5hdik7XG4gICAgZm9vdGVyLmFwcGVuZChpbnN0YWdyYW0sIGFkZHJlc3MsIGlmb29kKTtcblxuICAgIC8vYWRkIGNvbnRlbnQgdG8gdGhlIHBhZ2UgaG9tZS9sb2NhdGlvbi9tZW51IHdoZW4gY2xpY2sgb24gaGVhZGVyXG5cbiAgICByZXR1cm4ge1xuICAgICAgbWFpblN0cnVjdHVyZTogW2hlYWRlciwgY29udGFpbmVyLCBmb290ZXJdLFxuICAgICAgaGVhZGVyLFxuICAgICAgY29udGFpbmVyLFxuICAgICAgZm9vdGVyLFxuICAgICAgc3RydWN0dXJlRWxlbWVudHM6IHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBuYXYsXG4gICAgICAgIHVsLFxuICAgICAgICBob21lLFxuICAgICAgICBjb250YWN0LFxuICAgICAgICBtZW51LFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGZvb3RlcixcbiAgICAgICAgaW5zdGFncmFtLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBpZm9vZCxcbiAgICAgICAgbG9nb0ltZyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBhZGRTdHJ1Y3R1cmVUb0Rvb20gPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RydWN0dXJlID0gc3RydWN0dXJlRWxlbWVudHMoKTtcbiAgICBzdHJ1Y3R1cmUubWFpblN0cnVjdHVyZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHJ1Y3R1cmU7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBhZGRTdHJ1Y3R1cmVUb0Rvb20sIHJlc2V0Q29udGFpbmVyIH07XG59XG4iLCJpbXBvcnQgc2hhd2FybWFJbWcgZnJvbSBcIi4uL2ltZy9zaGF3YXJtYS5qcGdcIjtcbmltcG9ydCBob211cyBmcm9tIFwiLi4vaW1nL2hvbXVzLmpwZWdcIjtcbmltcG9ydCBlc2ZpaGEgZnJvbSBcIi4uL2ltZy9lc2ZpaGEuanBnXCI7XG5pbXBvcnQga2liZSBmcm9tIFwiLi4vaW1nL2tpYmUuanBlZ1wiO1xuaW1wb3J0IHRhYnVsZSBmcm9tIFwiLi4vaW1nL3RhYnVsZS5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIGNvbnN0IHNoYXdhcm1hSXRlbSA9IGNyZWF0ZUl0ZW1NZW51KFxuICAgIHNoYXdhcm1hSW1nLFxuICAgIFwiU2hhd2FybWFcIixcbiAgICBcIkFyYWJpYyBicmVhZCByb29sZWQgaW4gY2hpY2tlbiwgZnJpZXMsIGxldHR1Y2UsIHRvbWF0byBhbmQgY3VjdW1iZXIsIHdpdGggYSBzcGVjaW8gZ2FybGljIG1heW9cIixcbiAgICBcIlIkMjksOTBcIlxuICApO1xuICBjb25zdCBob211c0l0ZW0gPSBjcmVhdGVJdGVtTWVudShcbiAgICBob211cyxcbiAgICBcIkhvbXVzXCIsXG4gICAgXCJBcmFiaWMgYnJlYWQgcm9vIHBhc3RlIG9yaWdpbmF0aW5nIGluIHRoZSBNaWRkbGUgRWFzdCB0aGF0IGlzIHRyYWRpdGlvbmFsbHkgbWFkZSBvZiBwdXJlZWQgb3IgbWFzaGVkIGNvb2tlZCBjaGlja3BlYXMgbWl4ZWQgd2l0aCB0YWhpbmnigJRhIHRvYXN0ZWQgc2VzYW1lIGNvbmRpbWVudOKAlGFuZCBkaWNlZCBnYXJsaWMsIGxlbW9uIGp1aWNlLCBhbmQgc2FsdGxlZCBpbiBjaGlja2VuLCBmcmllcywgbGV0dHVjZSwgdG9tYXRvIGFuZCBjdWN1bWJlciwgd2l0aCBhIHNwZWNpbyBnYXJsaWMgbWF5b1wiLFxuICAgIFwiUiQzOSw5MFwiXG4gICk7XG4gIGNvbnN0IGVzZmloYUl0ZW0gPSBjcmVhdGVJdGVtTWVudShcbiAgICBlc2ZpaGEsXG4gICAgXCJFc2ZpaGFcIixcbiAgICBcIkRlbGljaW9zIGVzZmloYSB3aXRoIGRpZmVyZW50IGZsYXZvcnMsIGxpa2Ugc3RlYWssIGNoZWVzZSwgY2FsYWJyZXNhLCB3aGl0ZSBjaGVlc2UgIFwiLFxuICAgIFwiUiQ5LDkwXCJcbiAgKTtcbiAgY29uc3Qga2liZUl0ZW0gPSBjcmVhdGVJdGVtTWVudShcbiAgICBraWJlLFxuICAgIFwiS2liZVwiLFxuICAgIFwiQmVlZiBLaWJlIGlzIGNyaXNweSBvbiB0aGUgb3V0c2lkZSwgc29mdCBvbiB0aGUgaW5zaWRlIGFuZCBzZWFzb25lZCBqdXN0IHJpZ2h0LiBTZXJ2ZWQgYXMgYSBzaWRlIGRpc2ggb3IgYXBwZXRpemVyLCBncmVhdCBjaG9pY2UuXCIsXG4gICAgXCJSJDExLDkwXCJcbiAgKTtcbiAgY29uc3QgdGFidWxlSXRlbSA9IGNyZWF0ZUl0ZW1NZW51KFxuICAgIHRhYnVsZSxcbiAgICBcIlRhYnVsZVwiLFxuICAgIFwiVGFiYm91bGVoIGlzIGEgdHJhZGl0aW9uYWwgZGlzaCBvZiBBcmFiIGN1aXNpbmUsIGZ1bGwgb2YgZnJlc2huZXNzIGFuZCBhIGZldyBzZWNyZXRzOiB0aGUgd2hlYXQgc2hvdWxkIG5vdCBiZSBzb2FrZWQgZm9yIHRvbyBsb25nIHRvIGF2b2lkIHNvYWtpbmcsIGFuZCB0aGUgcGFyc2xleSBzaG91bGQgZ28gaW50byB0aGUgcmVjaXBlIHdhc2hlZCBhbmQgdGhvcm91Z2hseSBkcmllZC5cIixcbiAgICBcIlIkMTksOTBcIlxuICApO1xuICBjb250ZW50LmFwcGVuZChzaGF3YXJtYUl0ZW0sIGhvbXVzSXRlbSwgZXNmaWhhSXRlbSwga2liZUl0ZW0sIHRhYnVsZUl0ZW0pO1xuICBjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtTWVudShcbiAgaW1nQ29udGVudCxcbiAgaXRlbVRpdGxlQ29udGVudCxcbiAgaXRlbURlc2NyaXB0aW9uQ29udGVudCxcbiAgaXRlbVByaWNlQ29udGVudFxuKSB7XG4gIGNvbnN0IGl0ZW1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaXRlbVRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZChcIml0ZW0tYm94XCIpO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy1tZW51XCIpO1xuICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZChcIml0ZW0tdGl0bGVcIik7XG4gIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXByaWNlXCIpO1xuICBpdGVtVGV4dEJveC5jbGFzc0xpc3QuYWRkKFwiaXRlbS10ZXh0LWJveFwiKTtcblxuICBpbWcuc3JjID0gaW1nQ29udGVudDtcbiAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbVRpdGxlQ29udGVudDtcbiAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbURlc2NyaXB0aW9uQ29udGVudDtcbiAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbVByaWNlQ29udGVudDtcbiAgLy8gaXRlbVRleHRCb3guYXBwZW5kKGl0ZW1UaXRsZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtUHJpY2UpXG4gIGl0ZW1Cb3guYXBwZW5kKGltZywgaXRlbVRpdGxlLCBpdGVtRGVzY3JpcHRpb24sIGl0ZW1QcmljZSk7XG4gIHJldHVybiBpdGVtQm94O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBtYWluU3RydWN0dXJlIGZyb20gXCIuL21haW5TdHJ1Y3R1cmUuanNcIjtcbmltcG9ydCBhZGRIb21lUGFnZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgYWRkTWVudVBhZ2UgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGFkZENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuYWRkUGFnZSgpO1xuYWRkSG9tZVBhZ2UoKTtcblxuLy8gc3RydWN0dXJlLnN0cnVjdHVyZUVsZW1lbnRzLmhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cbmZ1bmN0aW9uIGFkZFBhZ2UoKSB7XG4gIGNvbnN0IHN0cnVjdHVyZSA9IG1haW5TdHJ1Y3R1cmUoKS5hZGRTdHJ1Y3R1cmVUb0Rvb20oKTtcbiAgY29uc3QgaG9tZSA9IHN0cnVjdHVyZS5zdHJ1Y3R1cmVFbGVtZW50cy5ob21lO1xuICBjb25zdCBjb250YWN0ID0gc3RydWN0dXJlLnN0cnVjdHVyZUVsZW1lbnRzLmNvbnRhY3Q7XG4gIGNvbnN0IG1lbnUgPSBzdHJ1Y3R1cmUuc3RydWN0dXJlRWxlbWVudHMubWVudTtcbiAgY29uc3QgY29udGFpbmVyID0gc3RydWN0dXJlLnN0cnVjdHVyZUVsZW1lbnRzLmNvbnRhaW5lcjtcbiAgY29uc3QgbG9nbyA9IHN0cnVjdHVyZS5zdHJ1Y3R1cmVFbGVtZW50cy5sb2dvSW1nO1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgIShcbiAgICAgICAgY29udGFpbmVyLmZpcnN0Q2hpbGQgIT09IG51bGwgJiZcbiAgICAgICAgY29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NOYW1lID09PSBob21lLnRleHRDb250ZW50LnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIG1haW5TdHJ1Y3R1cmUoKS5yZXNldENvbnRhaW5lcigpO1xuICAgICAgYWRkSG9tZVBhZ2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGVkXCIpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICBjb250YWluZXIuZmlyc3RDaGlsZCAhPT0gbnVsbCAmJlxuICAgICAgICBjb250YWluZXIuZmlyc3RDaGlsZC5jbGFzc05hbWUgPT09XG4gICAgICAgICAgY29udGFjdC50ZXh0Q29udGVudC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBtYWluU3RydWN0dXJlKCkucmVzZXRDb250YWluZXIoKTtcbiAgICAgIGFkZENvbnRhY3RQYWdlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImdlbmVyYXRlZFwiKTtcbiAgICB9XG4gIH0pO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgIShcbiAgICAgICAgY29udGFpbmVyLmZpcnN0Q2hpbGQgIT09IG51bGwgJiZcbiAgICAgICAgY29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NOYW1lID09PSBtZW51LnRleHRDb250ZW50LnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIG1haW5TdHJ1Y3R1cmUoKS5yZXNldENvbnRhaW5lcigpO1xuICAgICAgYWRkTWVudVBhZ2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGVkXCIpO1xuICAgIH1cbiAgfSk7XG4gIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYWluU3RydWN0dXJlKCkucmVzZXRDb250YWluZXIoKTtcbiAgICBhZGRIb21lUGFnZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGVkXCIpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==