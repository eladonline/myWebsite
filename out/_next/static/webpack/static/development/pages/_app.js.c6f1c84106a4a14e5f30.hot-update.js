webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_main_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text/main.json */ "./src/text/main.json");
var _text_main_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../text/main.json */ "./src/text/main.json", 1);
/* harmony import */ var _fixed_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed/navbar */ "./src/components/fixed/navbar/index.js");
/* harmony import */ var _sections_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/footer/footer */ "./src/components/sections/footer/footer.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/helpers */ "./src/components/helpers/helpers.js");
var _jsxFileName = "C:\\Users\\elad\\Desktop\\reactNext\\src\\components\\Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Layout =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Layout, _PureComponent);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
    _this.state = {
      invert: 0
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var el = document.querySelector('#mainNavbar');

      if (window) {
        document.addEventListener('scroll', function () {
          Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hudiniElement"])(el, ['transparent', 'rgb(241, 241, 241)'], !window.scrollY);
          Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["hudiniElement"])(el, ['scale(1)', 'scale(1,9)'], !window.scrollY, 'transform');

          _this2.setState({
            invert: window.scrollY
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$query = this.props.query,
          children = _this$props$query.children,
          router = _this$props$query.router;
      var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          text: _text_main_json__WEBPACK_IMPORTED_MODULE_1__,
          router: router
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fixed_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        invert: this.state.invert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), childrenWithProps, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=_app.js.c6f1c84106a4a14e5f30.hot-update.js.map