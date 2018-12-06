webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/sections/hero/HeroCarousle.js":
/*!******************************************************!*\
  !*** ./src/components/sections/hero/HeroCarousle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroCarousle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers */ "./src/components/helpers/helpers.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "C:\\Users\\elad\\Desktop\\myWebsite\\src\\components\\sections\\hero\\HeroCarousle.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // const background_1_x1 = 'static/image/background_1_x1.jpg';
// const background_1_x2 = 'static/image/background_1_x2.jpg';
// const background_1_x3 = 'static/image/background_1_x3.jpg';
// const background_2 = 'static/image/backgrounds_2_x3.jpg';
// const background_2x1 = 'static/image/backgrounds_2_x1.jpg';
// const background_2x2 = 'static/image/backgrounds_2_x2.jpg';
// const background_3_x3 = 'static/image/backgrounds_3_x3.jpg';
// const background_3_x1 = 'static/image/backgrounds_3_x1.jpg';
// const background_3_x2 = 'static/image/backgrounds_3_x2.jpg';

var Overlay = function Overlay(p) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, p.h1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, p.h2));
};

var HeroCarousle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(HeroCarousle, _React$PureComponent);

  function HeroCarousle() {
    _classCallCheck(this, HeroCarousle);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeroCarousle).apply(this, arguments));
  }

  _createClass(HeroCarousle, [{
    key: "parseData",
    value: function parseData(data) {
      var extraHead = data.extraHead,
          img = data.img;
      return extraHead.map(function (headers, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          key: "jumbotron-".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["picture"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          alt: "profile",
          src: img[i][2],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), img[i], "jumbo".concat(i)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overlay, {
          h1: headers.h1,
          h2: headers.h2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "hero_main_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
        pauseOnHover: false,
        controls: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.parseData(data)));
    }
  }]);

  return HeroCarousle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.d73c2f83f46fdd991be8.hot-update.js.map