webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/helpers/helpers.js":
/*!*******************************************!*\
  !*** ./src/components/helpers/helpers.js ***!
  \*******************************************/
/*! exports provided: picture, hudiniElement, nodeToArray, renderBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "picture", function() { return picture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hudiniElement", function() { return hudiniElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeToArray", function() { return nodeToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderBlocks", function() { return renderBlocks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\elad\\Desktop\\reactNext\\src\\components\\helpers\\helpers.js";

var picture = function picture(component, aSet, uniqkey) {
  var aMedia = ['(min-width: 1600px)', '(min-width: 768px)', '(min-width: 0px)'];
  var sources = aMedia.map(function (query, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
      key: "".concat(uniqkey, "-").concat(i),
      srcSet: aSet[i],
      media: query,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, sources, component);
};
/**
 * @function hudiniNavbar
 * @argument {object} el the element
 * @argument {array} value two value to switch between 
 * @argument {bool} bool indicate when to switch
 * @argument {string} sStyle the style
 * @summary change element background if page scrolled
 */

var hudiniElement = function hudiniElement(el, value, bool) {
  var sStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'background';
  bool ? el.style[sStyle] = value[0] : el.style[sStyle] = value[1];
};
var nodeToArray = function nodeToArray(node) {
  var nodesArray = [].slice.call(node);
  return nodesArray;
};
var renderBlocks = function renderBlocks(aBlock) {
  return aBlock.map(function (block) {
    return block.bold ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bold",
      key: block.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, block.text) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: block.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, block.text);
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.cddd83c781739d97cb60.hot-update.js.map