(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.properties=t.end=void 0;var r=i(n(270)),o=i(n(96));function i(e){return e&&e.__esModule?e:{default:e}}t.end=r.default,t.properties=o.default,t.default={end:r.default,properties:o.default}},269:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(292),{page:e.exports.default}})},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(96)),o=i(n(72));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){var o,i={target:e,currentTarget:e};function a(e){e.target===e.currentTarget&&(clearTimeout(o),e.target.removeEventListener(r.default.end,a),t.call(this))}r.default.end?null==n&&(n=c(e)||0):n=0,r.default.end?(e.addEventListener(r.default.end,a,!1),o=setTimeout(function(){return a(i)},1.5*(n||100))):setTimeout(a.bind(null,i),0)}function c(e){var t=(0,o.default)(e,r.default.duration),n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}a._parseDuration=c,t.default=a,e.exports=t.default},292:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(10),a=n(3),c=n(4),u=n(6),l=n(8),s=n(7),p=n.n(s),f=n(1),d=n.n(f),m=n(27),h=n.n(m),b=n(2),v={componentClass:h.a},y=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,r=Object(c.a)(e,["componentClass","className"]),i=Object(b.e)(r),u=i[0],l=i[1],s=Object(b.c)(u);return o.a.createElement(t,Object(a.a)({},l,{className:p()(n,s)}))},t}(o.a.Component);y.propTypes=v,y.defaultProps={componentClass:"div"};var O=Object(b.a)("carousel-caption",y),x=n(44),j=n.n(x),E=n(140),g=n.n(E),w={direction:d.a.oneOf(["prev","next"]),onAnimateOutEnd:d.a.func,active:d.a.bool,animateIn:d.a.bool,animateOut:d.a.bool,index:d.a.number},I=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).handleAnimateOutEnd=r.handleAnimateOutEnd.bind(Object(l.a)(Object(l.a)(r))),r.state={direction:null},r.isUnmounted=!1,r}Object(u.a)(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){this.props.active!==e.active&&this.setState({direction:null})},n.componentDidUpdate=function(e){var t=this,n=this.props.active,r=e.active;!n&&r&&g.a.end(j.a.findDOMNode(this),this.handleAnimateOutEnd),n!==r&&setTimeout(function(){return t.startAnimation()},20)},n.componentWillUnmount=function(){this.isUnmounted=!0},n.handleAnimateOutEnd=function(){this.isUnmounted||this.props.onAnimateOutEnd&&this.props.onAnimateOutEnd(this.props.index)},n.startAnimation=function(){this.isUnmounted||this.setState({direction:"prev"===this.props.direction?"right":"left"})},n.render=function(){var e=this.props,t=e.direction,n=e.active,r=e.animateIn,i=e.animateOut,u=e.className,l=Object(c.a)(e,["direction","active","animateIn","animateOut","className"]);delete l.onAnimateOutEnd,delete l.index;var s={item:!0,active:n&&!r||i};return t&&n&&r&&(s[t]=!0),this.state.direction&&(r||i)&&(s[this.state.direction]=!0),o.a.createElement("div",Object(a.a)({},l,{className:p()(u,s)}))},t}(o.a.Component);I.propTypes=w,I.defaultProps={active:!1,animateIn:!1,animateOut:!1};var _=I,S={glyph:d.a.string.isRequired},P=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.glyph,r=t.className,i=Object(c.a)(t,["glyph","className"]),u=Object(b.e)(i),l=u[0],s=u[1],f=Object(a.a)({},Object(b.c)(l),((e={})[Object(b.d)(l,n)]=!0,e));return o.a.createElement("span",Object(a.a)({},s,{className:p()(r,f)}))},t}(o.a.Component);P.propTypes=S;var N=Object(b.a)("glyphicon",P),A=n(55),T=n(21),k={slide:d.a.bool,indicators:d.a.bool,interval:d.a.number,controls:d.a.bool,pauseOnHover:d.a.bool,wrap:d.a.bool,onSelect:d.a.func,onSlideEnd:d.a.func,activeIndex:d.a.number,defaultActiveIndex:d.a.number,direction:d.a.oneOf(["prev","next"]),prevIcon:d.a.node,prevLabel:d.a.string,nextIcon:d.a.node,nextLabel:d.a.string},C={slide:!0,interval:5e3,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,prevIcon:o.a.createElement(N,{glyph:"chevron-left"}),prevLabel:"Previous",nextIcon:o.a.createElement(N,{glyph:"chevron-right"}),nextLabel:"Next"},M=function(e){function t(t,n){var r;(r=e.call(this,t,n)||this).handleMouseOver=r.handleMouseOver.bind(Object(l.a)(Object(l.a)(r))),r.handleMouseOut=r.handleMouseOut.bind(Object(l.a)(Object(l.a)(r))),r.handlePrev=r.handlePrev.bind(Object(l.a)(Object(l.a)(r))),r.handleNext=r.handleNext.bind(Object(l.a)(Object(l.a)(r))),r.handleItemAnimateOutEnd=r.handleItemAnimateOutEnd.bind(Object(l.a)(Object(l.a)(r)));var o=t.defaultActiveIndex;return r.state={activeIndex:null!=o?o:0,previousActiveIndex:null,direction:null},r.isUnmounted=!1,r}Object(u.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.waitForNext()},n.componentWillReceiveProps=function(e){var t=this.getActiveIndex();null!=e.activeIndex&&e.activeIndex!==t&&(clearTimeout(this.timeout),this.setState({previousActiveIndex:t,direction:null!=e.direction?e.direction:this.getDirection(t,e.activeIndex)})),null==e.activeIndex&&this.state.activeIndex>=e.children.length&&this.setState({activeIndex:0,previousActiveIndex:null,direction:null})},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.getActiveIndex=function(){var e=this.props.activeIndex;return null!=e?e:this.state.activeIndex},n.getDirection=function(e,t){return e===t?null:e>t?"prev":"next"},n.handleItemAnimateOutEnd=function(){var e=this;this.setState({previousActiveIndex:null,direction:null},function(){e.waitForNext(),e.props.onSlideEnd&&e.props.onSlideEnd()})},n.handleMouseOut=function(){this.isPaused&&this.play()},n.handleMouseOver=function(){this.props.pauseOnHover&&this.pause()},n.handleNext=function(e){var t=this.getActiveIndex()+1;if(t>T.a.count(this.props.children)-1){if(!this.props.wrap)return;t=0}this.select(t,e,"next")},n.handlePrev=function(e){var t=this.getActiveIndex()-1;if(t<0){if(!this.props.wrap)return;t=T.a.count(this.props.children)-1}this.select(t,e,"prev")},n.pause=function(){this.isPaused=!0,clearTimeout(this.timeout)},n.play=function(){this.isPaused=!1,this.waitForNext()},n.select=function(e,t,n){if(clearTimeout(this.timeout),!this.isUnmounted){var r=this.props.slide?this.getActiveIndex():null;n=n||this.getDirection(r,e);var o=this.props.onSelect;if(o&&(o.length>1?(t?(t.persist(),t.direction=n):t={direction:n},o(e,t)):o(e)),null==this.props.activeIndex&&e!==r){if(null!=this.state.previousActiveIndex)return;this.setState({activeIndex:e,previousActiveIndex:r,direction:n})}}},n.waitForNext=function(){var e=this.props,t=e.slide,n=e.interval,r=e.activeIndex;!this.isPaused&&t&&n&&null==r&&(this.timeout=setTimeout(this.handleNext,n))},n.renderControls=function(e){var t=e.wrap,n=e.children,r=e.activeIndex,i=e.prevIcon,a=e.nextIcon,c=e.bsProps,u=e.prevLabel,l=e.nextLabel,s=Object(b.d)(c,"control"),f=T.a.count(n);return[(t||0!==r)&&o.a.createElement(A.a,{key:"prev",className:p()(s,"left"),onClick:this.handlePrev},i,u&&o.a.createElement("span",{className:"sr-only"},u)),(t||r!==f-1)&&o.a.createElement(A.a,{key:"next",className:p()(s,"right"),onClick:this.handleNext},a,l&&o.a.createElement("span",{className:"sr-only"},l))]},n.renderIndicators=function(e,t,n){var r=this,i=[];return T.a.forEach(e,function(e,n){i.push(o.a.createElement("li",{key:n,className:n===t?"active":null,onClick:function(e){return r.select(n,e)}})," ")}),o.a.createElement("ol",{className:Object(b.d)(n,"indicators")},i)},n.render=function(){var e=this,t=this.props,n=t.slide,i=t.indicators,u=t.controls,l=t.wrap,s=t.prevIcon,f=t.prevLabel,d=t.nextIcon,m=t.nextLabel,h=t.className,v=t.children,y=Object(c.a)(t,["slide","indicators","controls","wrap","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),O=this.state,x=O.previousActiveIndex,j=O.direction,E=Object(b.f)(y,["interval","pauseOnHover","onSelect","onSlideEnd","activeIndex","defaultActiveIndex","direction"]),g=E[0],w=E[1],I=this.getActiveIndex(),_=Object(a.a)({},Object(b.c)(g),{slide:n});return o.a.createElement("div",Object(a.a)({},w,{className:p()(h,_),onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),i&&this.renderIndicators(v,I,g),o.a.createElement("div",{className:Object(b.d)(g,"inner")},T.a.map(v,function(t,o){var i=o===I,a=n&&o===x;return Object(r.cloneElement)(t,{active:i,index:o,animateOut:a,animateIn:i&&null!=x&&n,direction:j,onAnimateOutEnd:a?e.handleItemAnimateOutEnd:null})})),u&&this.renderControls({wrap:l,children:v,activeIndex:I,prevIcon:s,prevLabel:f,nextIcon:d,nextLabel:m,bsProps:g}))},t}(o.a.Component);M.propTypes=k,M.defaultProps=C,M.Caption=O,M.Item=_;var L=Object(b.a)("carousel",M);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){return o.a.createElement("div",{className:"hero-overlay"},o.a.createElement("h1",null,e.h1),o.a.createElement("h2",null,e.h2))},W=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,H(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"parseData",value:function(e){var t=e.extraHead,n=e.img;return t.map(function(e,t){return o.a.createElement(L.Item,{key:"jumbotron-".concat(t)},Object(i.b)(o.a.createElement("img",{alt:"profile",src:n[t][2]}),n[t],"jumbo".concat(t)),o.a.createElement(F,{h1:e.h1,h2:e.h2}))})}},{key:"render",value:function(){var e=this.props.data;return o.a.createElement("div",{id:"hero_main_container"},o.a.createElement(L,{pauseOnHover:!1,controls:!1},this.parseData(e)))}}])&&U(n.prototype,r),a&&U(n,a),t}(),G=n(26),J=n.n(G);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,K(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.data.sections.bodySections.slideA,t=e.cardA,n=e.cardB,r=e.cardC,i=this.props.data.dir;return o.a.createElement("div",{className:"slideA",dir:i},o.a.createElement(Y,{img:t.img,header:t.header,text:t.text,link:"solutions"}),o.a.createElement(Y,{img:n.img,header:n.header,invert:!0,text:n.text,link:"decorated"}),o.a.createElement(Y,{img:r.img,header:r.header,text:r.text,link:"optimized"}))}}])&&z(n.prototype,i),a&&z(n,a),t}(),Y=function(e){return o.a.createElement(J.a,{href:e.link},o.a.createElement("div",{className:"slide-item","data-invert":e.invert},o.a.createElement("img",{src:e.img,alt:"promo"}),o.a.createElement("header",null,e.header),o.a.createElement("p",null,e.text)))};function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ee(this,te(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.data.sections.bodySections.slideB,t=this.props.data.dir;return o.a.createElement("div",{className:"slideB",dir:t},o.a.createElement("header",null,e.header," "),Object(i.b)(o.a.createElement("img",{src:e.img.x3,alt:"promo"}),[e.img.x3,e.img.x2,e.img.x1],"yadaim"),o.a.createElement("div",{className:"slideB-text-cont"},Object(i.c)(e.textBlocks)))}}])&&$(n.prototype,a),c&&$(n,c),t}();function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var le=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ae(this,ce(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("div",{className:"Section"},o.a.createElement(V,{data:this.props.data}),o.a.createElement(re,{data:this.props.data}))}}])&&ie(n.prototype,i),a&&ie(n,a),t}();function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var he=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),fe(this,de(t).call(this,e))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.text;return o.a.createElement("div",{className:"body-cont",dir:e.dir},o.a.createElement(W,{data:e.hero}),o.a.createElement(le,{data:e}))}}])&&pe(n.prototype,i),a&&pe(n,a),t}(),be=n(15);t.default=function(){return o.a.createElement(be.a,null,o.a.createElement(he,null))}}},[[269,1,0]]]);