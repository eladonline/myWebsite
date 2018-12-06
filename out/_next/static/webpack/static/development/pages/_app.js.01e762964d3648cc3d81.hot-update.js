webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/fixed/navbar/index.js":
/*!**********************************************!*\
  !*** ./src/components/fixed/navbar/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _Brand_Brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brand/Brand */ "./src/components/fixed/navbar/Brand/Brand.js");
/* harmony import */ var _Collapse_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collapse/login */ "./src/components/fixed/navbar/Collapse/login.js");
/* harmony import */ var _Collapse_loggedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Collapse/loggedIn */ "./src/components/fixed/navbar/Collapse/loggedIn.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\elad\\Desktop\\myWebsite\\src\\components\\fixed\\navbar\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var brand = '/static/icon/we_factor_logo.png';
var brand_invert = '/static/icon/we_factor_logo_invert.png';

var MainNavbar =
/*#__PURE__*/
function (_Component) {
  _inherits(MainNavbar, _Component);

  function MainNavbar() {
    _classCallCheck(this, MainNavbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainNavbar).apply(this, arguments));
  }

  _createClass(MainNavbar, [{
    key: "isLoggedIn",

    /**
     *
     * @param {number} prevProps.offset
     * @param {number} prevState.offset
     * @summary detect change in the invers prop
     */

    /**
     *
     * @param {string} user
     * @return login or loggedIn state to view
     */
    value: function isLoggedIn(user) {
      // 'Unsigned' Linked to private Layout
      return user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Collapse_loggedIn__WEBPACK_IMPORTED_MODULE_4__["default"], {
        invert: this.props.invert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Collapse_login__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
        collapseOnSelect: true,
        id: "mainNavbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Brand_Brand__WEBPACK_IMPORTED_MODULE_2__["default"], {
        image: this.props.invert ? brand_invert : brand,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), this.isLoggedIn('elad+1@committed.co.il'));
    }
  }]);

  return MainNavbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


MainNavbar.defaultProps = {
  invert: 0
};
MainNavbar.propTypes = {
  invert: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};

/***/ }),

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
var _jsxFileName = "C:\\Users\\elad\\Desktop\\myWebsite\\src\\components\\helpers\\helpers.js";

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
 * @function hudiniElement
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

/***/ }),

/***/ "./src/components/sections/footer/footer.js":
/*!**************************************************!*\
  !*** ./src/components/sections/footer/footer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\elad\\Desktop\\myWebsite\\src\\components\\sections\\footer\\footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Footer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Footer, _PureComponent);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer",
        dir: "rtl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "\u05E7\u05E6\u05EA \u05E2\u05DC\u05D9\u05E0\u05D5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/whyUs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "\u05DC\u05DE\u05D4 \u05D3\u05D5\u05D5\u05E7\u05D0 \u05D0\u05E0\u05D7\u05E0\u05D5")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, " \xA9 \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05D7\u05D1\u05E8\u05EA We factoR"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ }),

/***/ "./src/text/main.json":
/*!****************************!*\
  !*** ./src/text/main.json ***!
  \****************************/
/*! exports provided: dir, hero, sections, about, whyUs, decorated, solutions, optimized, default */
/***/ (function(module) {

module.exports = {"dir":"rtl","hero":{"extraHead":[{"h1":"ברוך הבא לאתר החדש שלך !","h2":"הלקוחות שלך מחכים"},{"h1":"האתר עומד למכירה","h2":" מבצע לזמן מוגבל רק 800 ש''ח"},{"h1":"מחיר חסר תקדים","h2":"לאתר מקצועי וברמה גבוהה"}],"img":[["static/image/caroulseSlides/first/backgrounds_1_x1.jpg","static/image/caroulseSlides/first/backgrounds_1_x2.jpg","static/image/caroulseSlides/first/backgrounds_1_x3.jpg"],["static/image/caroulseSlides/second/backgrounds_2_x1.jpg","static/image/caroulseSlides/second/backgrounds_2_x2.jpg","static/image/caroulseSlides/second/backgrounds_2_x3.jpg"],["static/image/caroulseSlides/third/backgrounds_3_x1.jpg","static/image/caroulseSlides/third/backgrounds_3_x2.jpg","static/image/caroulseSlides/third/backgrounds_3_x3.jpg"]]},"sections":{"bodySections":{"slideA":{"cardA":{"header":"הפתרונות שלנו הלקוחות שלך","img":"static/image/solutions_x1.png","text":"אתר רספונסיבי ומהיר מותאם למחשב ולפלאפון כאחד"},"cardB":{"header":"אתר מעוצב מקצועי ונעים למשתמש","img":"static/image/decorated_x1.png","text":"עיצוב נעים לעין ומותאם לנוחיות המשתמש נראה מקצועי ומושך"},"cardC":{"header":"מהיר ומקודם בגוגל","img":"static/image/fast_and_googlefriendly_x1.jpg","text":"בנוי בצורה בכי טובה לקידום במנועי החיפוש של גוגל"}},"slideB":{"header":"אז מה בעצם אנחנו מציעים ? ","img":{"x1":"static/image/weOffer_x1.png","x2":"static/image/weOffer_x2.png","x3":"static/image/weOffer.png"},"textBlocks":[{"text":"את העיצוב הנוכחי של האתר והתאמה של האתר לעסק שלך"},{"text":"אנחנו נעלה לך את השרת לאוויר"},{"text":"ניתן לך כלי לבדיקת נתוני כניסה לאתר שלך בגוגל ללא עלות נוספת"}]}}},"about":{"header":"קצת עלינו","textBlocks":[{"text":" חברת we factor מתמחים בבניית אתרים והתאמתם UX/UI."},{"text":"עוסקים בדפי נחיתה ואתרי תדמית."},{"text":"המטרות עליהן אנו מתמקדים בבניית אתר הן:"},{"text":"ביצועים:","bold":true},{"text":"מהירות התגובה של האתר מהרגע בו הלקוח נכנס לאתר ועד שמוצג לו התוכן הראשוני. כמו כן גם בשיטוט בין דפי האתר אנו מוודאים כי הדפים עולים במהירות תודות לסביבת הפיתוח החדשה בה אנו משתמשים."},{"text":"UX ממשק משתמש:","bold":true},{"text":" הרעיון העקרי שבו אנו צריכים לדבוק כאשר אנו בונים אתר הוא: keep it simple  צריך תמיד לזכור, משתמשים רוצים אתר פשוט ושירגיש טבעי בלי לחשוב יותר מדי."},{"text":"UI חווית משתמש","bold":true},{"text":"משתמש שמקבל חוויה עשירה מאתר נוטה לסמוך על מה שכתוב בו ולראותו כמקצועי.  לכן חשוב שהאתר יהיה חלק ונעים לעין וגם יתן ערך מוסף למשתמש כמו אנימציות קטנות.. "},{"text":"קידום","bold":true},{"text":"אנו דואגים לעמוד בקריטריונים שגוגל מציב על מנת להופיע כמה שיותר ראשונים בתוצאות החיפוש. "}]},"whyUs":{"header":"למה דווקא אנחנו!","textBlocks":[{"text":"הדבר שהכי מייחד אותנו משאר העוסקים במלאכה, הוא שאצלנו אתה רואה את האתר מוכן לפני שאתה בכלל קונה אותו, וחוסך זמן וכסף."},{"text":"לא צריך לחשוב יותר מדי, אנחנו כבר יודעים כיצד לגרום לדברים לעבוד ואיך ליצור אתרים שמושכים את העין, אתה רק תבחר עיצוב שמתאים לך."},{"text":"איך זה עובד? פשוט מאוד, אתה אוהב את האתר שאתה כרגע גולש בו? מצויין אז הוא שלך! דבר איתנו נתאים לך אותו, נשנה לצבעים שאתה אוהב ושיאפיינו את סגנון השירות אותו אתה נותן.  "},{"text":"לאחר מכן נעזור לך בקניית דומיין לאתר שלך, וגם נעלה לך אותו לרשת כך שאנשים יוכלו לראות אותו ואתה תוכל להתחיל להרוויח כסף."},{"text":"חשוב להבהיר שהמוצר שאנו מוכרים הוא את האתר בלבד לכן יש לקחת בחשבון שעל מנת שהאתר יעלה לאינטרנט יש צורך לקנות דומיין ואחסון אתרים בתשלום נוסף  או לחילופין להתייעץ איתנו יש לנו כמה חלופות חינמיות."}]},"decorated":{"header":" עיצוב מרשים ונוח","textBlocks":[{"text":"בעיצוב אתרים חשוב להשקיע לא רק בתוכן ובעיצוב עצמו אלא בערך מוסף, דוגמת אנימציות קצרות ועיצוב חי ואינטרקטיבי."},{"text":"אנו דואגים לא רק להביא אתר יפה לעין אלא להביא חוויה למשתמש , ככל שחווית המשתמש תהיה טובה יותר הסיכוי כי הוא יבחר לקחת שירות מהאתר גבוה יותר."},{"text":"בסופו של דבר יש המון אתרים שנותנים שירותים מסויימים אבל רק אלו שיעניינו את המשתמש ויראו אמינים יזכו בו."}]},"solutions":{"header":"פתרונות ניהול ושיווק","textBlocks":[{"text":"שיווק:","bold":true},{"text":" לאחר שרכשת את האתר צריך לאפיין אותו מכמה בחינות לצרכים שלך ושל הלקוחות שלך. לרוב השירותים יש צבע שמזוהה איתם אסוציאטיבית, לדוגמא: אתר של מאמן כושר לרוב יהיה רקע שחור וכתב לבן (נייק אדידס) או ירוק (אקולוגי בריא.. ), אתר צלילות ישלב תכלת ולבן וכו.."},{"text":"כאן נכנסת היכולת שלנו בשיווק, אנו נעזור לך לבחור את הצבעים המתאימים לאתר ולשירות שלך, לאחר מכן תצטרך תמונות, אלו יכולות להיות תמונות שאתה תביא או תמונות שנעזור לך למצוא באינטרנט רק כלל חשוב! התמונות חייבות להיות מאושרות לשימוש מסחרי חופשי"},{"text":"ניהול:","bold":true},{"text":"לאחר שהאתר יעלה לאוויר לאחר זמן תרצה בוודאי לעשות בו שינויים כמו שינוי שעות פעילות או כתובת. "},{"text":"לכן,"},{"text":"אחת לשבוע תוכל לבקש מאיתנו לבצע שינוי בפרטי האתר, אפילו להוסיף דף חדש או תוכן, אנחנו נבצע כל שינוי והוספה שתרצה בתשלום משתלם ונוח"}]},"optimized":{"header":"מהיר ומקודם במנועי חיפוש לדוגמת גוגל","textBlocks":[{"text":"בזכות הטכנולוגיה בה אנו בונים את האתר, היא מקנה לו מהירות ביצועים שמגיעה עד לציון 100 בבדיקת ביצועים לאתר ע'י גוגל."},{"text":"בנוסף על כך, בזכות המקצועיות שלנו אנו יודעים להתאים את האתר למנועי חיפוש כך שיהיה לו את הפוטנציאל הטוב ביותר להופיע בראש תוצאות החיפוש."},{"text":"טייל קצת באתר תבחן את המהירות שלו."}]}};

/***/ })

})
//# sourceMappingURL=_app.js.01e762964d3648cc3d81.hot-update.js.map