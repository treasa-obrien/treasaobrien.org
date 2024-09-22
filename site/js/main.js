/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
*/!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=129)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(25))},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){"use strict";var r=n(18);Object.defineProperty(e,"__esModule",{value:!0});var i={IX2EngineActionTypes:!0,IX2EngineConstants:!0};e.IX2EngineConstants=e.IX2EngineActionTypes=void 0;var o=n(190);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(i,t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}}))});var a=n(94);Object.keys(a).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(i,t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t]}}))});var u=n(191);Object.keys(u).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(i,t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return u[t]}}))});var c=n(192);Object.keys(c).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(i,t)||Object.defineProperty(e,t,{enumerable:!0,get:function(){return c[t]}}))});var s=r(n(193));e.IX2EngineActionTypes=s;var f=r(n(194));e.IX2EngineConstants=f},function(t,e,n){"use strict";var r={},i={},o=[],a=window.Webflow||[],u=window.jQuery,c=u(window),s=u(document),f=u.isFunction,l=r._=n(133),d=r.tram=n(68)&&u.tram,p=!1,v=!1;function h(t){r.env()&&(f(t.design)&&c.on("__wf_design",t.design),f(t.preview)&&c.on("__wf_preview",t.preview)),f(t.destroy)&&c.on("__wf_destroy",t.destroy),t.ready&&f(t.ready)&&function(t){if(p)return void t.ready();if(l.contains(o,t.ready))return;o.push(t.ready)}(t)}function E(t){f(t.design)&&c.off("__wf_design",t.design),f(t.preview)&&c.off("__wf_preview",t.preview),f(t.destroy)&&c.off("__wf_destroy",t.destroy),t.ready&&f(t.ready)&&function(t){o=l.filter(o,function(e){return e!==t.ready})}(t)}d.config.hideBackface=!1,d.config.keepInherited=!0,r.define=function(t,e,n){i[t]&&E(i[t]);var r=i[t]=e(u,l,n)||{};return h(r),r},r.require=function(t){return i[t]},r.push=function(t){p?f(t)&&t():a.push(t)},r.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var g,m=navigator.userAgent.toLowerCase(),y=r.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,_=r.env.chrome=/chrome/.test(m)&&/Google/.test(navigator.vendor)&&parseInt(m.match(/chrome\/(\d+)\./)[1],10),I=r.env.ios=/(ipod|iphone|ipad)/.test(m);r.env.safari=/safari/.test(m)&&!_&&!I,y&&s.on("touchstart mousedown",function(t){g=t.target}),r.validClick=y?function(t){return t===g||u.contains(t,g)}:function(){return!0};var b,T="resize.webflow orientationchange.webflow load.webflow";function w(t,e){var n=[],r={};return r.up=l.throttle(function(t){l.each(n,function(e){e(t)})}),t&&e&&t.on(e,r.up),r.on=function(t){"function"==typeof t&&(l.contains(n,t)||n.push(t))},r.off=function(t){n=arguments.length?l.filter(n,function(e){return e!==t}):[]},r}function O(t){f(t)&&t()}function A(){b&&(b.reject(),c.off("load",b.resolve)),b=new u.Deferred,c.on("load",b.resolve)}r.resize=w(c,T),r.scroll=w(c,"scroll.webflow resize.webflow orientationchange.webflow load.webflow"),r.redraw=w(),r.location=function(t){window.location=t},r.env()&&(r.location=function(){}),r.ready=function(){p=!0,v?(v=!1,l.each(i,h)):l.each(o,O),l.each(a,O),r.resize.up()},r.load=function(t){b.then(t)},r.destroy=function(t){t=t||{},v=!0,c.triggerHandler("__wf_destroy"),null!=t.domready&&(p=t.domready),l.each(i,E),r.resize.off(),r.scroll.off(),r.redraw.off(),o=[],a=[],"pending"===b.state()&&A()},u(r.ready),A(),t.exports=window.Webflow=r},function(t,e){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i);t.exports=r?function(t){return t&&o(i,t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},function(t,e,n){var r=n(99),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e){t.exports=function(t){return"function"==typeof t}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(5),i=n(158),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},function(t,e,n){var r=n(197),i=n(251),o=n(62),a=n(2),u=n(260);t.exports=function(t){return"function"==typeof t?t:null==t?o:"object"==typeof t?a(t)?i(t[0],t[1]):r(t):u(t)}},function(t,e,n){var r=n(209),i=n(214);t.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e,n){var r=n(19);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,e,n){"use strict";var r=n(18);Object.defineProperty(e,"__esModule",{value:!0}),e.IX2VanillaUtils=e.IX2VanillaPlugins=e.IX2ElementsReducer=e.IX2EasingUtils=e.IX2Easings=e.IX2BrowserSupport=void 0;var i=r(n(47));e.IX2BrowserSupport=i;var o=r(n(116));e.IX2Easings=o;var a=r(n(118));e.IX2EasingUtils=a;var u=r(n(269));e.IX2ElementsReducer=u;var c=r(n(120));e.IX2VanillaPlugins=c;var s=r(n(271));e.IX2VanillaUtils=s},function(t,e,n){var r=n(23),i=n(210),o=n(211),a="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:a:c&&c in Object(t)?i(t):o(t)}},function(t,e,n){var r=n(98),i=n(55);t.exports=function(t){return null!=t&&i(t.length)&&!r(t)}},function(t,e){t.exports=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(7);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.clone=c,e.addLast=l,e.addFirst=d,e.removeLast=p,e.removeFirst=v,e.insert=h,e.removeAt=E,e.replaceAt=g,e.getIn=m,e.set=y,e.setIn=_,e.update=I,e.updateIn=b,e.merge=T,e.mergeDeep=w,e.mergeIn=O,e.omit=A,e.addDefaults=S;
/*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 */
var i="INVALID_ARGS";function o(t){throw new Error(t)}function a(t){var e=Object.keys(t);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e}var u={}.hasOwnProperty;function c(t){if(Array.isArray(t))return t.slice();for(var e=a(t),n={},r=0;r<e.length;r++){var i=e[r];n[i]=t[i]}return n}function s(t,e,n){var r=n;null==r&&o(i);for(var u=!1,l=arguments.length,d=Array(l>3?l-3:0),p=3;p<l;p++)d[p-3]=arguments[p];for(var v=0;v<d.length;v++){var h=d[v];if(null!=h){var E=a(h);if(E.length)for(var g=0;g<=E.length;g++){var m=E[g];if(!t||void 0===r[m]){var y=h[m];e&&f(r[m])&&f(y)&&(y=s(t,e,r[m],y)),void 0!==y&&y!==r[m]&&(u||(u=!0,r=c(r)),r[m]=y)}}}}return r}function f(t){var e=void 0===t?"undefined":r(t);return null!=t&&("object"===e||"function"===e)}function l(t,e){return Array.isArray(e)?t.concat(e):t.concat([e])}function d(t,e){return Array.isArray(e)?e.concat(t):[e].concat(t)}function p(t){return t.length?t.slice(0,t.length-1):t}function v(t){return t.length?t.slice(1):t}function h(t,e,n){return t.slice(0,e).concat(Array.isArray(n)?n:[n]).concat(t.slice(e))}function E(t,e){return e>=t.length||e<0?t:t.slice(0,e).concat(t.slice(e+1))}function g(t,e,n){if(t[e]===n)return t;for(var r=t.length,i=Array(r),o=0;o<r;o++)i[o]=t[o];return i[e]=n,i}function m(t,e){if(!Array.isArray(e)&&o(i),null!=t){for(var n=t,r=0;r<e.length;r++){var a=e[r];if(void 0===(n=null!=n?n[a]:void 0))return n}return n}}function y(t,e,n){var r=null==t?"number"==typeof e?[]:{}:t;if(r[e]===n)return r;var i=c(r);return i[e]=n,i}function _(t,e,n){return e.length?function t(e,n,r,i){var o=void 0,a=n[i];o=i===n.length-1?r:t(f(e)&&f(e[a])?e[a]:"number"==typeof n[i+1]?[]:{},n,r,i+1);return y(e,a,o)}(t,e,n,0):n}function I(t,e,n){return y(t,e,n(null==t?void 0:t[e]))}function b(t,e,n){return _(t,e,n(m(t,e)))}function T(t,e,n,r,i,o){for(var a=arguments.length,u=Array(a>6?a-6:0),c=6;c<a;c++)u[c-6]=arguments[c];return u.length?s.call.apply(s,[null,!1,!1,t,e,n,r,i,o].concat(u)):s(!1,!1,t,e,n,r,i,o)}function w(t,e,n,r,i,o){for(var a=arguments.length,u=Array(a>6?a-6:0),c=6;c<a;c++)u[c-6]=arguments[c];return u.length?s.call.apply(s,[null,!1,!0,t,e,n,r,i,o].concat(u)):s(!1,!0,t,e,n,r,i,o)}function O(t,e,n,r,i,o,a){var u=m(t,e);null==u&&(u={});for(var c=arguments.length,f=Array(c>7?c-7:0),l=7;l<c;l++)f[l-7]=arguments[l];return _(t,e,f.length?s.call.apply(s,[null,!1,!1,u,n,r,i,o,a].concat(f)):s(!1,!1,u,n,r,i,o,a))}function A(t,e){for(var n=Array.isArray(e)?e:[e],r=!1,i=0;i<n.length;i++)if(u.call(t,n[i])){r=!0;break}if(!r)return t;for(var o={},c=a(t),s=0;s<c.length;s++){var f=c[s];n.indexOf(f)>=0||(o[f]=t[f])}return o}function S(t,e,n,r,i,o){for(var a=arguments.length,u=Array(a>6?a-6:0),c=6;c<a;c++)u[c-6]=arguments[c];return u.length?s.call.apply(s,[null,!0,!1,t,e,n,r,i,o].concat(u)):s(!0,!1,t,e,n,r,i,o)}var x={clone:c,addLast:l,addFirst:d,removeLast:p,removeFirst:v,insert:h,removeAt:E,replaceAt:g,getIn:m,set:y,setIn:_,update:I,updateIn:b,merge:T,mergeDeep:w,mergeIn:O,omit:A,addDefaults:S};e.default=x},function(t,e,n){var r=n(6).Symbol;t.exports=r},function(t,e,n){var r=n(38),i=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(147),i=n(72);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(0),i=n(7);t.exports=function(t,e){return arguments.length<2?(n=r[t],i(n)?n:void 0):r[t]&&r[t][e];var n}},function(t,e,n){var r=n(0),i=n(14),o=n(80),a=n(29),u=n(73),c=r.TypeError,s=Object.defineProperty;e.f=i?s:function(t,e,n){if(a(t),e=u(e),a(n),o)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),i=n(20),o=r.String,a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not an object")}},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},function(t,e,n){var r=n(199),i=n(200),o=n(201),a=n(202),u=n(203);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(48);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(11)(Object,"create");t.exports=r},function(t,e,n){var r=n(223);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){var r=n(106),i=n(56),o=n(17);t.exports=function(t){return o(t)?r(t):i(t)}},function(t,e,n){var r=n(241),i=n(12),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return i(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,e,n){var r=n(2),i=n(61),o=n(252),a=n(255);t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:o(a(t))}},function(t,e,n){var r=n(16),i=n(12),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||i(t)&&r(t)==o}},function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},function(t,e,n){var r=n(0),i=n(41),o=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o},function(t,e,n){var r=n(0),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(14),i=n(28),o=n(71);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";n.r(e),n.d(e,"ActionTypes",function(){return o}),n.d(e,"default",function(){return a});var r=n(88),i=n(185),o={INIT:"@@redux/INIT"};function a(t,e,n){var u;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t,s=e,f=[],l=f,d=!1;function p(){l===f&&(l=f.slice())}function v(){return s}function h(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return p(),l.push(t),function(){if(e){e=!1,p();var n=l.indexOf(t);l.splice(n,1)}}}function E(t){if(!Object(r.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=c(s,t)}finally{d=!1}for(var e=f=l,n=0;n<e.length;n++)e[n]();return t}return E({type:o.INIT}),(u={dispatch:E,subscribe:h,getState:v,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");c=t,E({type:o.INIT})}})[i.default]=function(){var t,e=h;return(t={subscribe:function(t){if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(v())}return n(),{unsubscribe:e(n)}}})[i.default]=function(){return this},t},u}},function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],i=e.slice(0,-1);return function(){return i.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}n.r(e),n.d(e,"default",function(){return r})},function(t,e,n){"use strict";var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.TRANSFORM_STYLE_PREFIXED=e.TRANSFORM_PREFIXED=e.FLEX_PREFIXED=e.ELEMENT_MATCHES=e.withBrowser=e.IS_BROWSER_ENV=void 0;var i=r(n(95)),o="undefined"!=typeof window;e.IS_BROWSER_ENV=o;var a=function(t,e){return o?t():e};e.withBrowser=a;var u=a(function(){return(0,i.default)(["matches","matchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector","webkitMatchesSelector"],function(t){return t in Element.prototype})});e.ELEMENT_MATCHES=u;var c=a(function(){var t=document.createElement("i"),e=["flex","-webkit-flex","-ms-flexbox","-moz-box","-webkit-box"];try{for(var n=e.length,r=0;r<n;r++){var i=e[r];if(t.style.display=i,t.style.display===i)return i}return""}catch(t){return""}},"flex");e.FLEX_PREFIXED=c;var s=a(function(){var t=document.createElement("i");if(null==t.style.transform)for(var e=["Webkit","Moz","ms"],n=e.length,r=0;r<n;r++){var i=e[r]+"Transform";if(void 0!==t.style[i])return i}return"transform"},"transform");e.TRANSFORM_PREFIXED=s;var f=s.split("transform")[0],l=f?f+"TransformStyle":"transformStyle";e.TRANSFORM_STYLE_PREFIXED=l},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(11)(n(6),"Map");t.exports=r},function(t,e,n){var r=n(215),i=n(222),o=n(224),a=n(225),u=n(226);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}},function(t,e,n){(function(t){var r=n(6),i=n(242),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===o?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||i;t.exports=c}).call(this,n(107)(t))},function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var i=typeof t;return!!(e=null==e?n:e)&&("number"==i||"symbol"!=i&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(243),i=n(244),o=n(245),a=o&&o.isTypedArray,u=a?i(a):r;t.exports=u},function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},function(t,e,n){var r=n(57),i=n(246),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=[];for(var n in Object(t))o.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(247),i=n(49),o=n(248),a=n(249),u=n(109),c=n(16),s=n(100),f=s(r),l=s(i),d=s(o),p=s(a),v=s(u),h=c;(r&&"[object DataView]"!=h(new r(new ArrayBuffer(1)))||i&&"[object Map]"!=h(new i)||o&&"[object Promise]"!=h(o.resolve())||a&&"[object Set]"!=h(new a)||u&&"[object WeakMap]"!=h(new u))&&(h=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case f:return"[object DataView]";case l:return"[object Map]";case d:return"[object Promise]";case p:return"[object Set]";case v:return"[object WeakMap]"}return e}),t.exports=h},function(t,e,n){var r=n(60);t.exports=function(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i}},function(t,e,n){var r=n(37),i=n(24);t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[i(e[n++])];return n&&n==o?t:void 0}},function(t,e,n){var r=n(2),i=n(38),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||a.test(t)||!o.test(t)||null!=e&&t in Object(e)}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(264),i=n(8),o=n(38),a=NaN,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||s.test(t)?f(t.slice(2),n?2:8):u.test(t)?a:+t}},function(t,e,n){"use strict";var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.mediaQueriesDefined=e.viewportWidthChanged=e.actionListPlaybackChanged=e.elementStateChanged=e.instanceRemoved=e.instanceStarted=e.instanceAdded=e.parameterChanged=e.animationFrameChanged=e.eventStateChanged=e.testFrameRendered=e.eventListenerAdded=e.clearRequested=e.stopRequested=e.playbackRequested=e.previewRequested=e.sessionStopped=e.sessionStarted=e.sessionInitialized=e.rawDataImported=void 0;var i=r(n(30)),o=n(3),a=n(15),u=o.IX2EngineActionTypes,c=u.IX2_RAW_DATA_IMPORTED,s=u.IX2_SESSION_INITIALIZED,f=u.IX2_SESSION_STARTED,l=u.IX2_SESSION_STOPPED,d=u.IX2_PREVIEW_REQUESTED,p=u.IX2_PLAYBACK_REQUESTED,v=u.IX2_STOP_REQUESTED,h=u.IX2_CLEAR_REQUESTED,E=u.IX2_EVENT_LISTENER_ADDED,g=u.IX2_TEST_FRAME_RENDERED,m=u.IX2_EVENT_STATE_CHANGED,y=u.IX2_ANIMATION_FRAME_CHANGED,_=u.IX2_PARAMETER_CHANGED,I=u.IX2_INSTANCE_ADDED,b=u.IX2_INSTANCE_STARTED,T=u.IX2_INSTANCE_REMOVED,w=u.IX2_ELEMENT_STATE_CHANGED,O=u.IX2_ACTION_LIST_PLAYBACK_CHANGED,A=u.IX2_VIEWPORT_WIDTH_CHANGED,S=u.IX2_MEDIA_QUERIES_DEFINED,x=a.IX2VanillaUtils.reifyState;e.rawDataImported=function(t){return{type:c,payload:(0,i.default)({},x(t))}};e.sessionInitialized=function(t){var e=t.hasBoundaryNodes,n=t.reducedMotion;return{type:s,payload:{hasBoundaryNodes:e,reducedMotion:n}}};e.sessionStarted=function(){return{type:f}};e.sessionStopped=function(){return{type:l}};e.previewRequested=function(t){var e=t.rawData,n=t.defer;return{type:d,payload:{defer:n,rawData:e}}};e.playbackRequested=function(t){var e=t.actionTypeId,n=void 0===e?o.ActionTypeConsts.GENERAL_START_ACTION:e,r=t.actionListId,i=t.actionItemId,a=t.eventId,u=t.allowEvents,c=t.immediate,s=t.testManual,f=t.verbose,l=t.rawData;return{type:p,payload:{actionTypeId:n,actionListId:r,actionItemId:i,testManual:s,eventId:a,allowEvents:u,immediate:c,verbose:f,rawData:l}}};e.stopRequested=function(t){return{type:v,payload:{actionListId:t}}};e.clearRequested=function(){return{type:h}};e.eventListenerAdded=function(t,e){return{type:E,payload:{target:t,listenerParams:e}}};e.testFrameRendered=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:g,payload:{step:t}}};e.eventStateChanged=function(t,e){return{type:m,payload:{stateKey:t,newState:e}}};e.animationFrameChanged=function(t,e){return{type:y,payload:{now:t,parameters:e}}};e.parameterChanged=function(t,e){return{type:_,payload:{key:t,value:e}}};e.instanceAdded=function(t){return{type:I,payload:(0,i.default)({},t)}};e.instanceStarted=function(t,e){return{type:b,payload:{instanceId:t,time:e}}};e.instanceRemoved=function(t){return{type:T,payload:{instanceId:t}}};e.elementStateChanged=function(t,e,n,r){return{type:w,payload:{elementId:t,actionTypeId:e,current:n,actionItem:r}}};e.actionListPlaybackChanged=function(t){var e=t.actionListId,n=t.isPlaying;return{type:O,payload:{actionListId:e,isPlaying:n}}};e.viewportWidthChanged=function(t){var e=t.width,n=t.mediaQueries;return{type:A,payload:{width:e,mediaQueries:n}}};e.mediaQueriesDefined=function(){return{type:S}}},function(t,e,n){var r=n(126),i=n(66);function o(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}o.prototype=r(i.prototype),o.prototype.constructor=o,t.exports=o},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(126),i=n(66),o=4294967295;function a(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=o,this.__views__=[]}a.prototype=r(i.prototype),a.prototype.constructor=a,t.exports=a},function(t,e,n){"use strict";var r=n(1)(n(13));window.tram=function(t){function e(t,e){return(new F.Bare).init(t,e)}function n(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function i(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function o(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function a(){}function u(t,e,n){s("Units do not match ["+t+"]: "+e+", "+n)}function c(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var r=n;return $.test(t)||!Z.test(t)?r=parseInt(t,10):Z.test(t)&&(r=1e3*parseFloat(t)),0>r&&(r=0),r==r?r:n}function s(t){H.debug&&window&&window.console.warn(t)}var f=function(t,e,n){function i(t){return"object"==(0,r.default)(t)}function o(t){return"function"==typeof t}function a(){}return function r(u,c){function s(){var t=new f;return o(t.init)&&t.init.apply(t,arguments),t}function f(){}c===n&&(c=u,u=Object),s.Bare=f;var l,d=a[t]=u[t],p=f[t]=s[t]=new a;return p.constructor=s,s.mixin=function(e){return f[t]=s[t]=r(s,e)[t],s},s.open=function(t){if(l={},o(t)?l=t.call(s,p,d,s,u):i(t)&&(l=t),i(l))for(var n in l)e.call(l,n)&&(p[n]=l[n]);return o(p.init)||(p.init=u),s},s.open(c)}}("prototype",{}.hasOwnProperty),l={ease:["ease",function(t,e,n,r){var i=(t/=r)*t,o=i*t;return e+n*(-2.75*o*i+11*i*i+-15.5*o+8*i+.25*t)}],"ease-in":["ease-in",function(t,e,n,r){var i=(t/=r)*t,o=i*t;return e+n*(-1*o*i+3*i*i+-3*o+2*i)}],"ease-out":["ease-out",function(t,e,n,r){var i=(t/=r)*t,o=i*t;return e+n*(.3*o*i+-1.6*i*i+2.2*o+-1.8*i+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,r){var i=(t/=r)*t,o=i*t;return e+n*(2*o*i+-5*i*i+2*o+2*i)}],linear:["linear",function(t,e,n,r){return n*t/r+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,r){return n*(t/=r)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,r){return-n*(t/=r)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,r){return n*(t/=r)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,r){return n*(t/=r)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,r){return n*(t/=r)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,r){return 0===t?e:n*Math.pow(2,10*(t/r-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,r){return t===r?e+n:n*(1-Math.pow(2,-10*t/r))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,r){return 0===t?e:t===r?e+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,r,i){return void 0===i&&(i=1.70158),n*(t/=r)*t*((i+1)*t-i)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,r,i){return void 0===i&&(i=1.70158),n*((t=t/r-1)*t*((i+1)*t+i)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,r,i){return void 0===i&&(i=1.70158),(t/=r/2)<1?n/2*t*t*((1+(i*=1.525))*t-i)+e:n/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e}]},d={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},p=document,v=window,h="bkwld-tram",E=/[\-\.0-9]/g,g=/[A-Z]/,m="number",y=/^(rgb|#)/,_=/(em|cm|mm|in|pt|pc|px)$/,I=/(em|cm|mm|in|pt|pc|px|%)$/,b=/(deg|rad|turn)$/,T="unitless",w=/(all|none) 0s ease 0s/,O=/^(width|height)$/,A=" ",S=p.createElement("a"),x=["Webkit","Moz","O","ms"],R=["-webkit-","-moz-","-o-","-ms-"],N=function(t){if(t in S.style)return{dom:t,css:t};var e,n,r="",i=t.split("-");for(e=0;e<i.length;e++)r+=i[e].charAt(0).toUpperCase()+i[e].slice(1);for(e=0;e<x.length;e++)if((n=x[e]+r)in S.style)return{dom:n,css:R[e]+t}},C=e.support={bind:Function.prototype.bind,transform:N("transform"),transition:N("transition"),backface:N("backface-visibility"),timing:N("transition-timing-function")};if(C.transition){var L=C.timing.dom;if(S.style[L]=l["ease-in-back"][0],!S.style[L])for(var P in d)l[P][0]=d[P]}var D=e.frame=function(){var t=v.requestAnimationFrame||v.webkitRequestAnimationFrame||v.mozRequestAnimationFrame||v.oRequestAnimationFrame||v.msRequestAnimationFrame;return t&&C.bind?t.bind(v):function(t){v.setTimeout(t,16)}}(),M=e.now=function(){var t=v.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&C.bind?e.bind(t):Date.now||function(){return+new Date}}(),j=f(function(e){function i(t,e){var n=function(t){for(var e=-1,n=t?t.length:0,r=[];++e<n;){var i=t[e];i&&r.push(i)}return r}((""+t).split(A)),r=n[0];e=e||{};var i=Q[r];if(!i)return s("Unsupported property: "+r);if(!e.weak||!this.props[r]){var o=i[0],a=this.props[r];return a||(a=this.props[r]=new o.Bare),a.init(this.$el,n,i,e),a}}function o(t,e,n){if(t){var o=(0,r.default)(t);if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==o&&e)return this.timer=new W({duration:t,context:this,complete:a}),void(this.active=!0);if("string"==o&&e){switch(t){case"hide":f.call(this);break;case"stop":u.call(this);break;case"redraw":l.call(this);break;default:i.call(this,t,n&&n[1])}return a.call(this)}if("function"==o)return void t.call(this,this);if("object"==o){var s=0;p.call(this,t,function(t,e){t.span>s&&(s=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(s=c(t.wait,0))}),d.call(this),s>0&&(this.timer=new W({duration:s,context:this}),this.active=!0,e&&(this.timer.complete=a));var v=this,h=!1,E={};D(function(){p.call(v,t,function(t){t.active&&(h=!0,E[t.name]=t.nextStyle)}),h&&v.$el.css(E)})}}}function a(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();o.call(this,t.options,!0,t.args)}}function u(t){var e;this.timer&&this.timer.destroy(),this.queue=[],this.active=!1,"string"==typeof t?(e={})[t]=1:e="object"==(0,r.default)(t)&&null!=t?t:this.props,p.call(this,e,v),d.call(this)}function f(){u.call(this),this.el.style.display="none"}function l(){this.el.offsetHeight}function d(){var t,e,n=[];for(t in this.upstream&&n.push(this.upstream),this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[C.transition.dom]=n)}function p(t,e,r){var o,a,u,c,s=e!==v,f={};for(o in t)u=t[o],o in q?(f.transform||(f.transform={}),f.transform[o]=u):(g.test(o)&&(o=n(o)),o in Q?f[o]=u:(c||(c={}),c[o]=u));for(o in f){if(u=f[o],!(a=this.props[o])){if(!s)continue;a=i.call(this,o)}e.call(this,a,u)}r&&c&&r.call(this,c)}function v(t){t.stop()}function E(t,e){t.set(e)}function m(t){this.$el.css(t)}function y(t,n){e[t]=function(){return this.children?function(t,e){var n,r=this.children.length;for(n=0;r>n;n++)t.apply(this.children[n],e);return this}.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,H.keepInherited&&!H.fallback){var n=K(this.el,"transition");n&&!w.test(n)&&(this.upstream=n)}C.backface&&H.hideBackface&&z(this.el,C.backface.css,"hidden")},y("add",i),y("start",o),y("wait",function(t){t=c(t,0),this.active?this.queue.push({options:t}):(this.timer=new W({duration:t,context:this,complete:a}),this.active=!0)}),y("then",function(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=a)):s("No active transition timer. Use start() or wait() before then().")}),y("next",a),y("stop",u),y("set",function(t){u.call(this,t),p.call(this,t,E,m)}),y("show",function(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}),y("hide",f),y("redraw",l),y("destroy",function(){u.call(this),t.removeData(this.el,h),this.$el=this.el=null})}),F=f(j,function(e){function n(e,n){var r=t.data(e,h)||t.data(e,h,new j.Bare);return r.el||r.init(e),n?r.start(n):r}e.init=function(e,r){var i=t(e);if(!i.length)return this;if(1===i.length)return n(i[0],r);var o=[];return i.each(function(t,e){o.push(n(e,r))}),this.children=o,this}}),k=f(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function n(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?o(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var i=500,a="ease",u=0;t.init=function(t,e,n,r){this.$el=t,this.el=t[0];var o=e[0];n[2]&&(o=n[2]),Y[o]&&(o=Y[o]),this.name=o,this.type=n[1],this.duration=c(e[1],this.duration,i),this.ease=function(t,e,n){return void 0!==e&&(n=e),t in l?t:n}(e[2],this.ease,a),this.delay=c(e[3],this.delay,u),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=O.test(this.name),this.unit=r.unit||this.unit||H.defaultUnit,this.angle=r.angle||this.angle||H.defaultAngle,H.fallback||r.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+A+this.duration+"ms"+("ease"!=this.ease?A+l[this.ease][0]:"")+(this.delay?A+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new U({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return K(this.el,this.name)},t.update=function(t){z(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,z(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var i,o="number"==typeof t,a="string"==typeof t;switch(e){case m:if(o)return t;if(a&&""===t.replace(E,""))return+t;i="number(unitless)";break;case y:if(a){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:n(t)}i="hex or rgb string";break;case _:if(o)return t+this.unit;if(a&&e.test(t))return t;i="number(px) or string(unit)";break;case I:if(o)return t+this.unit;if(a&&e.test(t))return t;i="number(px) or string(unit or %)";break;case b:if(o)return t+this.angle;if(a&&e.test(t))return t;i="number(deg) or string(angle)";break;case T:if(o)return t;if(a&&I.test(t))return t;i="number(unitless) or string(unit or %)"}return function(t,e){s("Type warning: Expected: ["+t+"] Got: ["+(0,r.default)(e)+"] "+e)}(i,t),t},t.redraw=function(){this.el.offsetHeight}}),G=f(k,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),y))}}),X=f(k,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),V=f(k,function(t,e){function n(t,e){var n,r,i,o,a;for(n in t)i=(o=q[n])[0],r=o[1]||n,a=this.convert(t[n],i),e.call(this,r,a,i)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},q.perspective&&H.perspective&&(this.current.perspective=H.perspective,z(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),z(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new B({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,r={};for(n in this.current)r[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(r)},t.fallback=function(t){var e=this.values(t);this.tween=new B({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){z(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,r={};return n.call(this,t,function(t,n,i){r[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,i))}),r}}),U=f(function(e){function n(){var t,e,r,i=c.length;if(i)for(D(n),e=M(),t=i;t--;)(r=c[t])&&r.render(e)}var r={ease:l.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||r.ease;l[e]&&(e=l[e][1]),"function"!=typeof e&&(e=r.ease),this.ease=e,this.update=t.update||a,this.complete=t.complete||a,this.context=t.context||this,this.name=t.name;var n=t.from,i=t.to;void 0===n&&(n=r.from),void 0===i&&(i=r.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof i?(this.begin=n,this.change=i-n):this.format(i,n),this.value=this.begin+this.unit,this.start=M(),!1!==t.autoplay&&this.play()},e.play=function(){var t;this.active||(this.start||(this.start=M()),this.active=!0,t=this,1===c.push(t)&&D(n))},e.stop=function(){var e,n,r;this.active&&(this.active=!1,e=this,(r=t.inArray(e,c))>=0&&(n=c.slice(r+1),c.length=r,n.length&&(c=c.concat(n))))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var r=this.ease(n,0,1,this.duration);return e=this.startRGB?function(t,e,n){return o(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}(this.startRGB,this.endRGB,r):function(t){return Math.round(t*s)/s}(this.begin+r*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=i(e),this.endRGB=i(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(E,"");n!==t.replace(E,"")&&u("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=a};var c=[],s=1e3}),W=f(U,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||a,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),B=f(U,function(t,e){t.init=function(t){var e,n;for(e in this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current,t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new U({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,r=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,r=!0);return r?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),H=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!C.transition,agentTests:[]};e.fallback=function(t){if(!C.transition)return H.fallback=!0;H.agentTests.push("("+t+")");var e=new RegExp(H.agentTests.join("|"),"i");H.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new U(t)},e.delay=function(t,e,n){return new W({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var z=t.style,K=t.css,Y={transform:C.transform&&C.transform.css},Q={color:[G,y],background:[G,y,"background-color"],"outline-color":[G,y],"border-color":[G,y],"border-top-color":[G,y],"border-right-color":[G,y],"border-bottom-color":[G,y],"border-left-color":[G,y],"border-width":[k,_],"border-top-width":[k,_],"border-right-width":[k,_],"border-bottom-width":[k,_],"border-left-width":[k,_],"border-spacing":[k,_],"letter-spacing":[k,_],margin:[k,_],"margin-top":[k,_],"margin-right":[k,_],"margin-bottom":[k,_],"margin-left":[k,_],padding:[k,_],"padding-top":[k,_],"padding-right":[k,_],"padding-bottom":[k,_],"padding-left":[k,_],"outline-width":[k,_],opacity:[k,m],top:[k,I],right:[k,I],bottom:[k,I],left:[k,I],"font-size":[k,I],"text-indent":[k,I],"word-spacing":[k,I],width:[k,I],"min-width":[k,I],"max-width":[k,I],height:[k,I],"min-height":[k,I],"max-height":[k,I],"line-height":[k,T],"scroll-top":[X,m,"scrollTop"],"scroll-left":[X,m,"scrollLeft"]},q={};C.transform&&(Q.transform=[V],q={x:[I,"translateX"],y:[I,"translateY"],rotate:[b],rotateX:[b],rotateY:[b],scale:[m],scaleX:[m],scaleY:[m],skew:[b],skewX:[b],skewY:[b]}),C.transform&&C.backface&&(q.z=[I,"translateZ"],q.rotateZ=[b],q.scaleZ=[m],q.perspective=[_]);var $=/ms/,Z=/s|\./;return t.tram=e}(window.jQuery)},function(t,e,n){"use strict";var r=n(138);function i(t,e){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!0,null),t.dispatchEvent(n)}var o=window.jQuery,a={},u={reset:function(t,e){r.triggers.reset(t,e)},intro:function(t,e){r.triggers.intro(t,e),i(e,"COMPONENT_ACTIVE")},outro:function(t,e){r.triggers.outro(t,e),i(e,"COMPONENT_INACTIVE")}};a.triggers={},a.types={INTRO:"w-ix-intro.w-ix",OUTRO:"w-ix-outro.w-ix"},o.extend(a.triggers,u),t.exports=a},function(t,e,n){var r=n(14),i=n(39),o=n(146),a=n(71),u=n(26),c=n(73),s=n(9),f=n(80),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=c(e),f)try{return l(t,e)}catch(t){}if(s(t,e))return a(!i(o.f,t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},function(t,e,n){var r=n(149),i=n(74);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},function(t,e,n){var r=n(0),i=n(27),o=n(7),a=n(150),u=n(75),c=r.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return o(e)&&a(e.prototype,c(t))}},function(t,e,n){var r=n(76);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(151),i=n(19);t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},function(t,e,n){var r=n(0),i=n(78),o=n(9),a=n(79),u=n(76),c=n(75),s=i("wks"),f=r.Symbol,l=f&&f.for,d=c?f:f&&f.withoutSetter||a;t.exports=function(t){if(!o(s,t)||!u&&"string"!=typeof s[t]){var e="Symbol."+t;u&&o(f,t)?s[t]=f[t]:s[t]=c&&l?l(e):d(e)}return s[t]}},function(t,e,n){var r=n(157),i=n(40);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.0",mode:r?"pure":"global",copyright:"Â© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(5),i=0,o=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++i+o,36)}},function(t,e,n){var r=n(14),i=n(19),o=n(81);t.exports=!r&&!i(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(0),i=n(20),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,n){var r=n(5),i=n(7),o=n(40),a=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return a(t)}),t.exports=o.inspectSource},function(t,e,n){var r=n(78),i=n(79),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var r=n(5),i=n(9),o=n(26),a=n(85).indexOf,u=n(43),c=r([].push);t.exports=function(t,e){var n,r=o(t),s=0,f=[];for(n in r)!i(u,n)&&i(r,n)&&c(f,n);for(;e.length>s;)i(r,n=e[s++])&&(~a(f,n)||c(f,n));return f}},function(t,e,n){var r=n(26),i=n(166),o=n(167),a=function(t){return function(e,n,a){var u,c=r(e),s=o(c),f=i(a,s);if(t&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?r:n)(e)}},function(t,e,n){"use strict";n.r(e);var r=n(45);n.d(e,"createStore",function(){return r.default});var i=n(90);n.d(e,"combineReducers",function(){return i.default});var o=n(92);n.d(e,"bindActionCreators",function(){return o.default});var a=n(93);n.d(e,"applyMiddleware",function(){return a.default});var u=n(46);n.d(e,"compose",function(){return u.default});n(91)},function(t,e,n){"use strict";n.r(e);var r=n(177),i=n(182),o=n(184),a="[object Object]",u=Function.prototype,c=Object.prototype,s=u.toString,f=c.hasOwnProperty,l=s.call(Object);e.default=function(t){if(!Object(o.default)(t)||Object(r.default)(t)!=a)return!1;var e=Object(i.default)(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==l}},function(t,e,n){"use strict";n.r(e);var r=n(178).default.Symbol;e.default=r},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var r=n(45);n(88),n(91);function i(t,e){var n=e&&e.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(t){for(var e=Object.keys(t),n={},o=0;o<e.length;o++){var a=e[o];0,"function"==typeof t[a]&&(n[a]=t[a])}var u,c=Object.keys(n);try{!function(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:r.ActionTypes.INIT}))throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+r.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}(n)}catch(t){u=t}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(u)throw u;for(var r=!1,o={},a=0;a<c.length;a++){var s=c[a],f=n[s],l=t[s],d=f(l,e);if(void 0===d){var p=i(s,e);throw new Error(p)}o[s]=d,r=r||d!==l}return r?o:t}}},function(t,e,n){"use strict";function r(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw new Error(t)}catch(t){}}n.r(e),n.d(e,"default",function(){return r})},function(t,e,n){"use strict";function r(t,e){return function(){return e(t.apply(void 0,arguments))}}function i(t,e){if("function"==typeof t)return r(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),i={},o=0;o<n.length;o++){var a=n[o],u=t[a];"function"==typeof u&&(i[a]=r(u,e))}return i}n.r(e),n.d(e,"default",function(){return i})},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var r=n(46),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function o(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,o,a){var u,c=t(n,o,a),s=c.dispatch,f={getState:c.getState,dispatch:function(t){return s(t)}};return u=e.map(function(t){return t(f)}),s=r.default.apply(void 0,u)(c.dispatch),i({},c,{dispatch:s})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ActionAppliesTo=e.ActionTypeConsts=void 0;e.ActionTypeConsts={TRANSFORM_MOVE:"TRANSFORM_MOVE",TRANSFORM_SCALE:"TRANSFORM_SCALE",TRANSFORM_ROTATE:"TRANSFORM_ROTATE",TRANSFORM_SKEW:"TRANSFORM_SKEW",STYLE_OPACITY:"STYLE_OPACITY",STYLE_SIZE:"STYLE_SIZE",STYLE_FILTER:"STYLE_FILTER",STYLE_BACKGROUND_COLOR:"STYLE_BACKGROUND_COLOR",STYLE_BORDER:"STYLE_BORDER",STYLE_TEXT_COLOR:"STYLE_TEXT_COLOR",PLUGIN_LOTTIE:"PLUGIN_LOTTIE",GENERAL_DISPLAY:"GENERAL_DISPLAY",GENERAL_START_ACTION:"GENERAL_START_ACTION",GENERAL_CONTINUOUS_ACTION:"GENERAL_CONTINUOUS_ACTION",GENERAL_COMBO_CLASS:"GENERAL_COMBO_CLASS",GENERAL_STOP_ACTION:"GENERAL_STOP_ACTION",GENERAL_LOOP:"GENERAL_LOOP",STYLE_BOX_SHADOW:"STYLE_BOX_SHADOW"};e.ActionAppliesTo={ELEMENT:"ELEMENT",ELEMENT_CLASS:"ELEMENT_CLASS",TRIGGER_ELEMENT:"TRIGGER_ELEMENT"}},function(t,e,n){var r=n(96)(n(262));t.exports=r},function(t,e,n){var r=n(10),i=n(17),o=n(35);t.exports=function(t){return function(e,n,a){var u=Object(e);if(!i(e)){var c=r(n,3);e=o(e),n=function(t){return c(u[t],t,u)}}var s=t(e,n,a);return s>-1?u[c?e[s]:s]:void 0}}},function(t,e,n){var r=n(31),i=n(204),o=n(205),a=n(206),u=n(207),c=n(208);function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=i,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=u,s.prototype.set=c,t.exports=s},function(t,e,n){var r=n(16),i=n(8),o="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!i(t))return!1;var e=r(t);return e==a||e==u||e==o||e==c}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(25))},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,n){var r=n(227),i=n(12);t.exports=function t(e,n,o,a,u){return e===n||(null==e||null==n||!i(e)&&!i(n)?e!=e&&n!=n:r(e,n,o,a,t,u))}},function(t,e,n){var r=n(228),i=n(231),o=n(232),a=1,u=2;t.exports=function(t,e,n,c,s,f){var l=n&a,d=t.length,p=e.length;if(d!=p&&!(l&&p>d))return!1;var v=f.get(t),h=f.get(e);if(v&&h)return v==e&&h==t;var E=-1,g=!0,m=n&u?new r:void 0;for(f.set(t,e),f.set(e,t);++E<d;){var y=t[E],_=e[E];if(c)var I=l?c(_,y,E,e,t,f):c(y,_,E,t,e,f);if(void 0!==I){if(I)continue;g=!1;break}if(m){if(!i(e,function(t,e){if(!o(m,e)&&(y===t||s(y,t,n,c,f)))return m.push(e)})){g=!1;break}}else if(y!==_&&!s(y,_,n,c,f)){g=!1;break}}return f.delete(t),f.delete(e),g}},function(t,e,n){var r=n(51),i=n(2);t.exports=function(t,e,n){var o=e(t);return i(t)?o:r(o,n(t))}},function(t,e,n){var r=n(239),i=n(105),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),r(a(t),function(e){return o.call(t,e)}))}:i;t.exports=u},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(240),i=n(36),o=n(2),a=n(52),u=n(53),c=n(54),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=o(t),f=!n&&i(t),l=!n&&!f&&a(t),d=!n&&!f&&!l&&c(t),p=n||f||l||d,v=p?r(t.length,String):[],h=v.length;for(var E in t)!e&&!s.call(t,E)||p&&("length"==E||l&&("offset"==E||"parent"==E)||d&&("buffer"==E||"byteLength"==E||"byteOffset"==E)||u(E,h))||v.push(E);return v}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(11)(n(6),"WeakMap");t.exports=r},function(t,e,n){var r=n(8);t.exports=function(t){return t==t&&!r(t)}},function(t,e){t.exports=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}},function(t,e,n){var r=n(263);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},function(t,e,n){"use strict";var r=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.inQuad=function(t){return Math.pow(t,2)},e.outQuad=function(t){return-(Math.pow(t-1,2)-1)},e.inOutQuad=function(t){if((t/=.5)<1)return.5*Math.pow(t,2);return-.5*((t-=2)*t-2)},e.inCubic=function(t){return Math.pow(t,3)},e.outCubic=function(t){return Math.pow(t-1,3)+1},e.inOutCubic=function(t){if((t/=.5)<1)return.5*Math.pow(t,3);return.5*(Math.pow(t-2,3)+2)},e.inQuart=function(t){return Math.pow(t,4)},e.outQuart=function(t){return-(Math.pow(t-1,4)-1)},e.inOutQuart=function(t){if((t/=.5)<1)return.5*Math.pow(t,4);return-.5*((t-=2)*Math.pow(t,3)-2)},e.inQuint=function(t){return Math.pow(t,5)},e.outQuint=function(t){return Math.pow(t-1,5)+1},e.inOutQuint=function(t){if((t/=.5)<1)return.5*Math.pow(t,5);return.5*(Math.pow(t-2,5)+2)},e.inSine=function(t){return 1-Math.cos(t*(Math.PI/2))},e.outSine=function(t){return Math.sin(t*(Math.PI/2))},e.inOutSine=function(t){return-.5*(Math.cos(Math.PI*t)-1)},e.inExpo=function(t){return 0===t?0:Math.pow(2,10*(t-1))},e.outExpo=function(t){return 1===t?1:1-Math.pow(2,-10*t)},e.inOutExpo=function(t){if(0===t)return 0;if(1===t)return 1;if((t/=.5)<1)return.5*Math.pow(2,10*(t-1));return.5*(2-Math.pow(2,-10*--t))},e.inCirc=function(t){return-(Math.sqrt(1-t*t)-1)},e.outCirc=function(t){return Math.sqrt(1-Math.pow(t-1,2))},e.inOutCirc=function(t){if((t/=.5)<1)return-.5*(Math.sqrt(1-t*t)-1);return.5*(Math.sqrt(1-(t-=2)*t)+1)},e.outBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.inBack=function(t){return t*t*((o+1)*t-o)},e.outBack=function(t){return(t-=1)*t*((o+1)*t+o)+1},e.inOutBack=function(t){var e=o;if((t/=.5)<1)return t*t*((1+(e*=1.525))*t-e)*.5;return.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},e.inElastic=function(t){var e=o,n=0,r=1;if(0===t)return 0;if(1===t)return 1;n||(n=.3);r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r);return-r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)},e.outElastic=function(t){var e=o,n=0,r=1;if(0===t)return 0;if(1===t)return 1;n||(n=.3);r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r);return r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1},e.inOutElastic=function(t){var e=o,n=0,r=1;if(0===t)return 0;if(2==(t/=.5))return 1;n||(n=.3*1.5);r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r);if(t<1)return r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5;return r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1},e.swingFromTo=function(t){var e=o;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},e.swingFrom=function(t){return t*t*((o+1)*t-o)},e.swingTo=function(t){return(t-=1)*t*((o+1)*t+o)+1},e.bounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.bouncePast=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},e.easeInOut=e.easeOut=e.easeIn=e.ease=void 0;var i=r(n(117)),o=1.70158,a=(0,i.default)(.25,.1,.25,1);e.ease=a;var u=(0,i.default)(.42,0,1,1);e.easeIn=u;var c=(0,i.default)(0,0,.58,1);e.easeOut=c;var s=(0,i.default)(.42,0,.58,1);e.easeInOut=s},function(t,e){var n=4,r=.001,i=1e-7,o=10,a=11,u=1/(a-1),c="function"==typeof Float32Array;function s(t,e){return 1-3*e+3*t}function f(t,e){return 3*e-6*t}function l(t){return 3*t}function d(t,e,n){return((s(e,n)*t+f(e,n))*t+l(e))*t}function p(t,e,n){return 3*s(e,n)*t*t+2*f(e,n)*t+l(e)}t.exports=function(t,e,s,f){if(!(0<=t&&t<=1&&0<=s&&s<=1))throw new Error("bezier x values must be in [0, 1] range");var l=c?new Float32Array(a):new Array(a);if(t!==e||s!==f)for(var v=0;v<a;++v)l[v]=d(v*u,t,s);function h(e){for(var c=0,f=1,v=a-1;f!==v&&l[f]<=e;++f)c+=u;var h=c+(e-l[--f])/(l[f+1]-l[f])*u,E=p(h,t,s);return E>=r?function(t,e,r,i){for(var o=0;o<n;++o){var a=p(e,r,i);if(0===a)return e;e-=(d(e,r,i)-t)/a}return e}(e,h,t,s):0===E?h:function(t,e,n,r,a){var u,c,s=0;do{(u=d(c=e+(n-e)/2,r,a)-t)>0?n=c:e=c}while(Math.abs(u)>i&&++s<o);return c}(e,c,c+u,t,s)}return function(n){return t===e&&s===f?n:0===n?0:1===n?1:d(h(n),e,f)}}},function(t,e,n){"use strict";var r=n(1)(n(119)),i=n(1),o=n(18);Object.defineProperty(e,"__esModule",{value:!0}),e.optimizeFloat=c,e.createBezierEasing=function(t){return u.default.apply(void 0,(0,r.default)(t))},e.applyEasing=function(t,e,n){if(0===e)return 0;if(1===e)return 1;if(n)return c(e>0?n(e):e);return c(e>0&&t&&a[t]?a[t](e):e)};var a=o(n(116)),u=i(n(117));function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=Math.pow(n,e),i=Number(Math.round(t*r)/r);return Math.abs(i)>1e-4?i:0}},function(t,e,n){var r=n(266),i=n(267),o=n(268);t.exports=function(t){return r(t)||i(t)||o()}},function(t,e,n){"use strict";var r=n(1)(n(21));Object.defineProperty(e,"__esModule",{value:!0}),e.isPluginType=function(t){return t===o.ActionTypeConsts.PLUGIN_LOTTIE},e.clearPlugin=e.renderPlugin=e.createPluginInstance=e.getPluginDestination=e.getPluginDuration=e.getPluginOrigin=e.getPluginConfig=void 0;var i=n(270),o=n(3),a=n(47),u=(0,r.default)({},o.ActionTypeConsts.PLUGIN_LOTTIE,{getConfig:i.getPluginConfig,getOrigin:i.getPluginOrigin,getDuration:i.getPluginDuration,getDestination:i.getPluginDestination,createInstance:i.createPluginInstance,render:i.renderPlugin,clear:i.clearPlugin});var c=function(t){return function(e){if(!a.IS_BROWSER_ENV)return function(){return null};var n=u[e];if(!n)throw new Error("IX2 no plugin configured for: ".concat(e));var r=n[t];if(!r)throw new Error("IX2 invalid plugin method: ".concat(t));return r}},s=c("getConfig");e.getPluginConfig=s;var f=c("getOrigin");e.getPluginOrigin=f;var l=c("getDuration");e.getPluginDuration=l;var d=c("getDestination");e.getPluginDestination=d;var p=c("createInstance");e.createPluginInstance=p;var v=c("render");e.renderPlugin=v;var h=c("clear");e.clearPlugin=h},function(t,e,n){var r=n(122),i=n(277)(r);t.exports=i},function(t,e,n){var r=n(275),i=n(35);t.exports=function(t,e){return t&&r(t,e,i)}},function(t,e,n){"use strict";var r=n(1)(n(119)),i=n(18),o=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.observeRequests=function(t){P({store:t,select:function(t){var e=t.ixRequest;return e.preview},onChange:et}),P({store:t,select:function(t){var e=t.ixRequest;return e.playback},onChange:rt}),P({store:t,select:function(t){var e=t.ixRequest;return e.stop},onChange:it}),P({store:t,select:function(t){var e=t.ixRequest;return e.clear},onChange:ot})},e.startEngine=at,e.stopEngine=ut,e.stopAllActionGroups=ht,e.stopActionGroup=Et,e.startActionGroup=gt;var a=o(n(30)),u=o(n(284)),c=o(n(95)),s=o(n(59)),f=o(n(285)),l=o(n(291)),d=o(n(303)),p=o(n(304)),v=o(n(305)),h=o(n(308)),E=n(3),g=n(15),m=n(64),y=i(n(311)),_=o(n(312)),I=Object.keys(E.QuickEffectIds),b=function(t){return I.includes(t)},T=E.IX2EngineConstants,w=T.COLON_DELIMITER,O=T.BOUNDARY_SELECTOR,A=T.HTML_ELEMENT,S=T.RENDER_GENERAL,x=T.W_MOD_IX,R=g.IX2VanillaUtils,N=R.getAffectedElements,C=R.getElementId,L=R.getDestinationValues,P=R.observeStore,D=R.getInstanceId,M=R.renderHTMLElement,j=R.clearAllStyles,F=R.getMaxDurationItemIndex,k=R.getComputedStyle,G=R.getInstanceOrigin,X=R.reduceListToGroup,V=R.shouldNamespaceEventParameter,U=R.getNamespacedParameterId,W=R.shouldAllowMediaQuery,B=R.cleanupHTMLElement,H=R.stringifyTarget,z=R.mediaQueriesEqual,K=R.shallowEqual,Y=g.IX2VanillaPlugins,Q=Y.isPluginType,q=Y.createPluginInstance,$=Y.getPluginDuration,Z=navigator.userAgent,J=Z.match(/iPad/i)||Z.match(/iPhone/),tt=12;function et(t,e){var n=t.rawData,r=function(){at({store:e,rawData:n,allowEvents:!0}),nt()};t.defer?setTimeout(r,0):r()}function nt(){document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))}function rt(t,e){var n=t.actionTypeId,r=t.actionListId,i=t.actionItemId,o=t.eventId,a=t.allowEvents,u=t.immediate,c=t.testManual,s=t.verbose,f=void 0===s||s,l=t.rawData;if(r&&i&&l&&u){var d=l.actionLists[r];d&&(l=X({actionList:d,actionItemId:i,rawData:l}))}if(at({store:e,rawData:l,allowEvents:a,testManual:c}),r&&n===E.ActionTypeConsts.GENERAL_START_ACTION||b(n)){Et({store:e,actionListId:r}),vt({store:e,actionListId:r,eventId:o});var p=gt({store:e,eventId:o,actionListId:r,immediate:u,verbose:f});f&&p&&e.dispatch((0,m.actionListPlaybackChanged)({actionListId:r,isPlaying:!u}))}}function it(t,e){var n=t.actionListId;n?Et({store:e,actionListId:n}):ht({store:e}),ut(e)}function ot(t,e){ut(e),j({store:e,elementApi:y})}function at(t){var e,n=t.store,i=t.rawData,o=t.allowEvents,a=t.testManual,u=n.getState().ixSession;i&&n.dispatch((0,m.rawDataImported)(i)),u.active||(n.dispatch((0,m.sessionInitialized)({hasBoundaryNodes:Boolean(document.querySelector(O)),reducedMotion:document.body.hasAttribute("data-wf-ix-vacation")&&window.matchMedia("(prefers-reduced-motion)").matches})),o&&(function(t){var e=t.getState().ixData.eventTypeMap;ft(t),(0,v.default)(e,function(e,n){var i=_.default[n];i?function(t){var e=t.logic,n=t.store,i=t.events;!function(t){if(J){var e={},n="";for(var r in t){var i=t[r],o=i.eventTypeId,a=i.target,u=y.getQuerySelector(a);e[u]||o!==E.EventTypeConsts.MOUSE_CLICK&&o!==E.EventTypeConsts.MOUSE_SECOND_CLICK||(e[u]=!0,n+=u+"{cursor: pointer;touch-action: manipulation;}")}if(n){var c=document.createElement("style");c.textContent=n,document.body.appendChild(c)}}}(i);var o=e.types,a=e.handler,u=n.getState().ixData,l=u.actionLists,d=lt(i,pt);if((0,f.default)(d)){(0,v.default)(d,function(t,e){var o=i[e],a=o.action,f=o.id,d=o.mediaQueries,p=void 0===d?u.mediaQueryKeys:d,v=a.config.actionListId;if(z(p,u.mediaQueryKeys)||n.dispatch((0,m.mediaQueriesDefined)()),a.actionTypeId===E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION){var h=Array.isArray(o.config)?o.config:[o.config];h.forEach(function(e){var i=e.continuousParameterGroupId,o=(0,s.default)(l,"".concat(v,".continuousParameterGroups"),[]),a=(0,c.default)(o,function(t){var e=t.id;return e===i}),u=(e.smoothing||0)/100,d=(e.restingState||0)/100;a&&t.forEach(function(t,i){var o=f+w+i;!function(t){var e=t.store,n=t.eventStateKey,i=t.eventTarget,o=t.eventId,a=t.eventConfig,u=t.actionListId,c=t.parameterGroup,f=t.smoothing,l=t.restingValue,d=e.getState(),p=d.ixData,v=d.ixSession,h=p.events[o],E=h.eventTypeId,g={},m={},_=[],I=c.continuousActionGroups,b=c.id;V(E,a)&&(b=U(n,b));var T=v.hasBoundaryNodes&&i?y.getClosestElement(i,O):null;I.forEach(function(t){var e=t.keyframe,n=t.actionItems;n.forEach(function(t){var n=t.actionTypeId,o=t.config.target;if(o){var a=o.boundaryMode?T:null,u=H(o)+w+n;if(m[u]=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,o=(0,r.default)(e);return o.some(function(e,r){return e.keyframe===n&&(t=r,!0)}),null==t&&(t=o.length,o.push({keyframe:n,actionItems:[]})),o[t].actionItems.push(i),o}(m[u],e,t),!g[u]){g[u]=!0;var c=t.config;N({config:c,event:h,eventTarget:i,elementRoot:a,elementApi:y}).forEach(function(t){_.push({element:t,key:u})})}}})}),_.forEach(function(t){var n=t.element,r=t.key,i=m[r],a=(0,s.default)(i,"[0].actionItems[0]",{}),c=a.actionTypeId,d=Q(c)?q(c)(n,a):null,p=L({element:n,actionItem:a,elementApi:y},d);mt({store:e,element:n,eventId:o,actionListId:u,actionItem:a,destination:p,continuous:!0,parameterId:b,actionGroups:i,smoothing:f,restingValue:l,pluginInstance:d})})}({store:n,eventStateKey:o,eventTarget:t,eventId:f,eventConfig:e,actionListId:v,parameterGroup:a,smoothing:u,restingValue:d})})})}(a.actionTypeId===E.ActionTypeConsts.GENERAL_START_ACTION||b(a.actionTypeId))&&vt({store:n,actionListId:v,eventId:f})});var p=function(t){var e=n.getState(),r=e.ixSession;dt(d,function(e,o,c){var s=i[o],f=r.eventState[c],l=s.action,d=s.mediaQueries,p=void 0===d?u.mediaQueryKeys:d;if(W(p,r.mediaQueryKey)){var v=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=a({store:n,element:e,event:s,eventConfig:r,nativeEvent:t,eventStateKey:c},f);K(i,f)||n.dispatch((0,m.eventStateChanged)(c,i))};if(l.actionTypeId===E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION){var h=Array.isArray(s.config)?s.config:[s.config];h.forEach(v)}else v()}})},g=(0,h.default)(p,tt),_=function(t){var e=t.target,r=void 0===e?document:e,i=t.types,o=t.throttle;i.split(" ").filter(Boolean).forEach(function(t){var e=o?g:p;r.addEventListener(t,e),n.dispatch((0,m.eventListenerAdded)(r,[t,e]))})};Array.isArray(o)?o.forEach(_):"string"==typeof o&&_(e)}}({logic:i,store:t,events:e}):console.warn("IX2 event type not configured: ".concat(n))}),t.getState().ixSession.eventListeners.length&&function(t){var e=function(){ft(t)};st.forEach(function(n){window.addEventListener(n,e),t.dispatch((0,m.eventListenerAdded)(window,[n,e]))}),e()}(t)}(n),-1===(e=document.documentElement).className.indexOf(x)&&(e.className+=" ".concat(x)),n.getState().ixSession.hasDefinedMediaQueries&&function(t){P({store:t,select:function(t){return t.ixSession.mediaQueryKey},onChange:function(){ut(t),j({store:t,elementApi:y}),at({store:t,allowEvents:!0}),nt()}})}(n)),n.dispatch((0,m.sessionStarted)()),function(t,e){!function n(r){var i=t.getState(),o=i.ixSession,a=i.ixParameters;o.active&&(t.dispatch((0,m.animationFrameChanged)(r,a)),e?function(t,e){var n=P({store:t,select:function(t){return t.ixSession.tick},onChange:function(t){e(t),n()}})}(t,n):requestAnimationFrame(n))}(window.performance.now())}(n,a))}function ut(t){var e=t.getState().ixSession;e.active&&(e.eventListeners.forEach(ct),t.dispatch((0,m.sessionStopped)()))}function ct(t){var e=t.target,n=t.listenerParams;e.removeEventListener.apply(e,n)}var st=["resize","orientationchange"];function ft(t){var e=t.getState(),n=e.ixSession,r=e.ixData,i=window.innerWidth;if(i!==n.viewportWidth){var o=r.mediaQueries;t.dispatch((0,m.viewportWidthChanged)({width:i,mediaQueries:o}))}}var lt=function(t,e){return(0,l.default)((0,p.default)(t,e),d.default)},dt=function(t,e){(0,v.default)(t,function(t,n){t.forEach(function(t,r){e(t,n,n+w+r)})})},pt=function(t){var e={target:t.target,targets:t.targets};return N({config:e,elementApi:y})};function vt(t){var e=t.store,n=t.actionListId,r=t.eventId,i=e.getState(),o=i.ixData,a=i.ixSession,u=o.actionLists,c=o.events[r],f=u[n];if(f&&f.useFirstGroupAsInitialState){var l=(0,s.default)(f,"actionItemGroups[0].actionItems",[]),d=(0,s.default)(c,"mediaQueries",o.mediaQueryKeys);if(!W(d,a.mediaQueryKey))return;l.forEach(function(t){var i,o=t.config,a=t.actionTypeId,u=!0===(null==o?void 0:null===(i=o.target)||void 0===i?void 0:i.useEventTarget)?{target:c.target,targets:c.targets}:o,s=N({config:u,event:c,elementApi:y}),f=Q(a);s.forEach(function(i){var o=f?q(a)(i,t):null;mt({destination:L({element:i,actionItem:t,elementApi:y},o),immediate:!0,store:e,element:i,eventId:r,actionItem:t,actionListId:n,pluginInstance:o})})})}}function ht(t){var e=t.store,n=e.getState().ixInstances;(0,v.default)(n,function(t){if(!t.continuous){var n=t.actionListId,r=t.verbose;yt(t,e),r&&e.dispatch((0,m.actionListPlaybackChanged)({actionListId:n,isPlaying:!1}))}})}function Et(t){var e=t.store,n=t.eventId,r=t.eventTarget,i=t.eventStateKey,o=t.actionListId,a=e.getState(),u=a.ixInstances,c=a.ixSession.hasBoundaryNodes&&r?y.getClosestElement(r,O):null;(0,v.default)(u,function(t){var r=(0,s.default)(t,"actionItem.config.target.boundaryMode"),a=!i||t.eventStateKey===i;if(t.actionListId===o&&t.eventId===n&&a){if(c&&r&&!y.elementContains(c,t.element))return;yt(t,e),t.verbose&&e.dispatch((0,m.actionListPlaybackChanged)({actionListId:o,isPlaying:!1}))}})}function gt(t){var e,n=t.store,r=t.eventId,i=t.eventTarget,o=t.eventStateKey,a=t.actionListId,u=t.groupIndex,c=void 0===u?0:u,f=t.immediate,l=t.verbose,d=n.getState(),p=d.ixData,v=d.ixSession,h=p.events[r]||{},E=h.mediaQueries,g=void 0===E?p.mediaQueryKeys:E,m=(0,s.default)(p,"actionLists.".concat(a),{}),_=m.actionItemGroups,I=m.useFirstGroupAsInitialState;if(!_||!_.length)return!1;c>=_.length&&(0,s.default)(h,"config.loop")&&(c=0),0===c&&I&&c++;var T=(0===c||1===c&&I)&&b(null===(e=h.action)||void 0===e?void 0:e.actionTypeId)?h.config.delay:void 0,w=(0,s.default)(_,[c,"actionItems"],[]);if(!w.length)return!1;if(!W(g,v.mediaQueryKey))return!1;var A=v.hasBoundaryNodes&&i?y.getClosestElement(i,O):null,S=F(w),x=!1;return w.forEach(function(t,e){var u=t.config,s=t.actionTypeId,d=Q(s),p=u.target;if(p){var v=p.boundaryMode?A:null;N({config:u,event:h,eventTarget:i,elementRoot:v,elementApi:y}).forEach(function(u,p){var v=d?q(s)(u,t):null,h=d?$(s)(u,t):null;x=!0;var E=S===e&&0===p,g=k({element:u,actionItem:t}),m=L({element:u,actionItem:t,elementApi:y},v);mt({store:n,element:u,actionItem:t,eventId:r,eventTarget:i,eventStateKey:o,actionListId:a,groupIndex:c,isCarrier:E,computedStyle:g,destination:m,immediate:f,verbose:l,pluginInstance:v,pluginDuration:h,instanceDelay:T})})}}),x}function mt(t){var e,n,r=t.store,i=t.computedStyle,o=(0,u.default)(t,["store","computedStyle"]),c=o.element,s=o.actionItem,f=o.immediate,l=o.pluginInstance,d=o.continuous,p=o.restingValue,v=o.eventId,h=!d,g=D(),_=r.getState(),I=_.ixElements,b=_.ixSession,T=_.ixData,w=C(I,c),O=(I[w]||{}).refState,A=y.getRefType(c),S=b.reducedMotion&&E.ReducedMotionTypes[s.actionTypeId];if(S&&d)switch(null===(e=T.events[v])||void 0===e?void 0:e.eventTypeId){case E.EventTypeConsts.MOUSE_MOVE:case E.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:n=p;break;default:n=.5}var x=G(c,O,i,s,y,l);r.dispatch((0,m.instanceAdded)((0,a.default)({instanceId:g,elementId:w,origin:x,refType:A,skipMotion:S,skipToValue:n},o))),_t(document.body,"ix2-animation-started",g),f?function(t,e){var n=t.getState().ixParameters;t.dispatch((0,m.instanceStarted)(e,0)),t.dispatch((0,m.animationFrameChanged)(performance.now(),n)),It(t.getState().ixInstances[e],t)}(r,g):(P({store:r,select:function(t){return t.ixInstances[g]},onChange:It}),h&&r.dispatch((0,m.instanceStarted)(g,b.tick)))}function yt(t,e){_t(document.body,"ix2-animation-stopping",{instanceId:t.id,state:e.getState()});var n=t.elementId,r=t.actionItem,i=e.getState().ixElements[n]||{},o=i.ref;i.refType===A&&B(o,r,y),e.dispatch((0,m.instanceRemoved)(t.id))}function _t(t,e,n){var r=document.createEvent("CustomEvent");r.initCustomEvent(e,!0,!0,n),t.dispatchEvent(r)}function It(t,e){var n=t.active,r=t.continuous,i=t.complete,o=t.elementId,a=t.actionItem,u=t.actionTypeId,c=t.renderType,s=t.current,f=t.groupIndex,l=t.eventId,d=t.eventTarget,p=t.eventStateKey,v=t.actionListId,h=t.isCarrier,E=t.styleProp,g=t.verbose,_=t.pluginInstance,I=e.getState(),b=I.ixData,T=I.ixSession,w=(b.events[l]||{}).mediaQueries,O=void 0===w?b.mediaQueryKeys:w;if(W(O,T.mediaQueryKey)&&(r||n||i)){if(s||c===S&&i){e.dispatch((0,m.elementStateChanged)(o,u,s,a));var x=e.getState().ixElements[o]||{},R=x.ref,N=x.refType,C=x.refState,L=C&&C[u];switch(N){case A:M(R,C,L,l,a,E,y,c,_)}}if(i){if(h){var P=gt({store:e,eventId:l,eventTarget:d,eventStateKey:p,actionListId:v,groupIndex:f+1,verbose:g});g&&!P&&e.dispatch((0,m.actionListPlaybackChanged)({actionListId:v,isPlaying:!1}))}yt(t,e)}}}},function(t,e,n){var r=n(125);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var r=n(11),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},function(t,e,n){var r=n(8),i=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=o},function(t,e,n){var r=n(325),i=n(326),o=r?function(t){return r.get(t)}:i;t.exports=o},function(t,e,n){var r=n(327),i=Object.prototype.hasOwnProperty;t.exports=function(t){for(var e=t.name+"",n=r[e],o=i.call(r,e)?n.length:0;o--;){var a=n[o],u=a.func;if(null==u||u==t)return a.name}return e}},function(t,e,n){n(130),n(131),n(132),n(134),n(135),n(136),n(137),n(69),n(139),n(334),n(335),n(336),n(337),t.exports=n(338)},function(t,e,n){"use strict";var r=n(1)(n(13));!function(){if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),e=!!t&&parseInt(t[1],10)>=16;if(!("objectFit"in document.documentElement.style!=!1)||e){var n=function(t){var e=t.parentNode;!function(t){var e=window.getComputedStyle(t,null),n=e.getPropertyValue("position"),r=e.getPropertyValue("overflow"),i=e.getPropertyValue("display");n&&"static"!==n||(t.style.position="relative"),"hidden"!==r&&(t.style.overflow="hidden"),i&&"inline"!==i||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className+=" object-fit-polyfill")}(e),function(t){var e=window.getComputedStyle(t,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var r in n)e.getPropertyValue(r)!==n[r]&&(t.style[r]=n[r])}(t),t.style.position="absolute",t.style.height="100%",t.style.width="auto",t.clientWidth>e.clientWidth?(t.style.top="0",t.style.marginTop="0",t.style.left="50%",t.style.marginLeft=t.clientWidth/-2+"px"):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",t.style.top="50%",t.style.marginTop=t.clientHeight/-2+"px")},i=function(t){if(void 0===t||t instanceof Event)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!==(0,r.default)(t)||!t.length||!t[0].nodeName)return!1;t=t}for(var i=0;i<t.length;i++)if(t[i].nodeName){var o=t[i].nodeName.toLowerCase();if("img"===o){if(e)continue;t[i].complete?n(t[i]):t[i].addEventListener("load",function(){n(this)})}else"video"===o?t[i].readyState>0?n(t[i]):t[i].addEventListener("loadedmetadata",function(){n(this)}):n(t[i])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i(),window.addEventListener("resize",i),window.objectFitPolyfill=i}else window.objectFitPolyfill=function(){return!1}}}()},function(t,e,n){"use strict";!function(){function t(t){Webflow.env("design")||($("video").each(function(){t&&$(this).prop("autoplay")?this.play():this.pause()}),$(".w-background-video--control").each(function(){t?n($(this)):e($(this))}))}function e(t){t.find("> span").each(function(t){$(this).prop("hidden",function(){return 0===t})})}function n(t){t.find("> span").each(function(t){$(this).prop("hidden",function(){return 1===t})})}"undefined"!=typeof window&&$(document).ready(function(){var r=window.matchMedia("(prefers-reduced-motion: reduce)");r.addEventListener("change",function(e){t(!e.matches)}),r.matches&&t(!1),$(document).on("click",".w-background-video--control",function(t){if(!Webflow.env("design")){var r=$(t.currentTarget),i=$("video#".concat(r.attr("aria-controls"))).get(0);if(i)if(i.paused){var o=i.play();n(r),o&&"function"==typeof o.catch&&o.catch(function(){e(r)})}else i.pause(),e(r)}})})}()},function(t,e,n){"use strict";var r=n(4);r.define("brand",t.exports=function(t){var e,n={},i=document,o=t("html"),a=t("body"),u=".w-webflow-badge",c=window.location,s=/PhantomJS/i.test(navigator.userAgent),f="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";function l(){var n=i.fullScreen||i.mozFullScreen||i.webkitIsFullScreen||i.msFullscreenElement||Boolean(i.webkitFullscreenElement);t(e).attr("style",n?"display: none !important;":"")}function d(){var t=a.children(u),n=t.length&&t.get(0)===e,i=r.env("editor");n?i&&t.remove():(t.length&&t.remove(),i||a.append(e))}return n.ready=function(){var n,r,a,u=o.attr("data-wf-status"),p=o.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(p)&&c.hostname!==p&&(u=!0),u&&!s&&(e=e||(n=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),r=t("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt","").css({marginRight:"8px",width:"16px"}),a=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt","Made in Webflow"),n.append(r,a),n[0]),d(),setTimeout(d,500),t(i).off(f,l).on(f,l))},n})},function(t,e,n){"use strict";var r=window.$,i=n(68)&&r.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
t.exports=function(){var t={VERSION:"1.6.0-Webflow"},e={},n=Array.prototype,r=Object.prototype,o=Function.prototype,a=(n.push,n.slice),u=(n.concat,r.toString,r.hasOwnProperty),c=n.forEach,s=n.map,f=(n.reduce,n.reduceRight,n.filter),l=(n.every,n.some),d=n.indexOf,p=(n.lastIndexOf,Array.isArray,Object.keys),v=(o.bind,t.each=t.forEach=function(n,r,i){if(null==n)return n;if(c&&n.forEach===c)n.forEach(r,i);else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(r.call(i,n[o],o,n)===e)return}else{var u=t.keys(n);for(o=0,a=u.length;o<a;o++)if(r.call(i,n[u[o]],u[o],n)===e)return}return n});t.map=t.collect=function(t,e,n){var r=[];return null==t?r:s&&t.map===s?t.map(e,n):(v(t,function(t,i,o){r.push(e.call(n,t,i,o))}),r)},t.find=t.detect=function(t,e,n){var r;return h(t,function(t,i,o){if(e.call(n,t,i,o))return r=t,!0}),r},t.filter=t.select=function(t,e,n){var r=[];return null==t?r:f&&t.filter===f?t.filter(e,n):(v(t,function(t,i,o){e.call(n,t,i,o)&&r.push(t)}),r)};var h=t.some=t.any=function(n,r,i){r||(r=t.identity);var o=!1;return null==n?o:l&&n.some===l?n.some(r,i):(v(n,function(t,n,a){if(o||(o=r.call(i,t,n,a)))return e}),!!o)};t.contains=t.include=function(t,e){return null!=t&&(d&&t.indexOf===d?-1!=t.indexOf(e):h(t,function(t){return t===e}))},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,r;return function(){e||(e=!0,n=arguments,r=this,i.frame(function(){e=!1,t.apply(r,n)}))}},t.debounce=function(e,n,r){var i,o,a,u,c,s=function s(){var f=t.now()-u;f<n?i=setTimeout(s,n-f):(i=null,r||(c=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,u=t.now();var f=r&&!i;return i||(i=setTimeout(s,n)),f&&(c=e.apply(a,o),a=o=null),c}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,r=arguments.length;n<r;n++){var i=arguments[n];for(var o in i)void 0===e[o]&&(e[o]=i[o])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(p)return p(e);var n=[];for(var r in e)t.has(e,r)&&n.push(r);return n},t.has=function(t,e){return u.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var E=/(.)^/,g={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},m=/\\|'|\r|\n|\u2028|\u2029/g,y=function(t){return"\\"+g[t]};return t.template=function(e,n,r){!n&&r&&(n=r),n=t.defaults({},n,t.templateSettings);var i=RegExp([(n.escape||E).source,(n.interpolate||E).source,(n.evaluate||E).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(i,function(t,n,r,i,u){return a+=e.slice(o,u).replace(m,y),o=u+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":i&&(a+="';\n"+i+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var u=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var c=function(e){return u.call(this,e,t)},s=n.variable||"obj";return c.source="function("+s+"){\n"+a+"}",c},t}()},function(t,e,n){"use strict";var r=n(4);r.define("edit",t.exports=function(t,e,n){if(n=n||{},(r.env("test")||r.env("frame"))&&!n.fixture&&!function(){try{return window.top.__Cypress__}catch(t){return!1}}())return{exit:1};var i,o=t(window),a=t(document.documentElement),u=document.location,c="hashchange",s=n.load||function(){i=!0,window.WebflowEditor=!0,o.off(c,l),function(t){var e=window.document.createElement("iframe");e.src="https://webflow.com/site/third-party-cookie-check.html",e.style.display="none",e.sandbox="allow-scripts allow-same-origin";var n=function n(r){"WF_third_party_cookies_unsupported"===r.data?(g(e,n),t(!1)):"WF_third_party_cookies_supported"===r.data&&(g(e,n),t(!0))};e.onerror=function(){g(e,n),t(!1)},window.addEventListener("message",n,!1),window.document.body.appendChild(e)}(function(e){t.ajax({url:E("https://editor-api.webflow.com/api/editor/view"),data:{siteId:a.attr("data-wf-site")},xhrFields:{withCredentials:!0},dataType:"json",crossDomain:!0,success:d(e)})})},f=!1;try{f=localStorage&&localStorage.getItem&&localStorage.getItem("WebflowEditor")}catch(t){}function l(){i||/\?edit/.test(u.hash)&&s()}function d(t){return function(e){e?(e.thirdPartyCookiesSupported=t,p(h(e.bugReporterScriptPath),function(){p(h(e.scriptPath),function(){window.WebflowEditor(e)})})):console.error("Could not load editor data")}}function p(e,n){t.ajax({type:"GET",url:e,dataType:"script",cache:!0}).then(n,v)}function v(t,e,n){throw console.error("Could not load editor script: "+e),n}function h(t){return t.indexOf("//")>=0?t:E("https://editor-api.webflow.com"+t)}function E(t){return t.replace(/([^:])\/\//g,"$1/")}function g(t,e){window.removeEventListener("message",e,!1),t.remove()}return f?s():u.search?(/[?&](edit)(?:[=&?]|$)/.test(u.search)||/\?edit$/.test(u.href))&&s():o.on(c,l).triggerHandler(c),{}})},function(t,e,n){"use strict";n(4).define("focus-visible",t.exports=function(){function t(t){var e=!0,n=!1,r=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function a(t){t.getAttribute("data-wf-focus-visible")||t.setAttribute("data-wf-focus-visible","true")}function u(){e=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(o(t.activeElement)&&a(t.activeElement),e=!0)},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&(n&&(e=!0),c())},!0),c(),t.addEventListener("focus",function(t){var n,r,u;o(t.target)&&(e||(n=t.target,r=n.type,"INPUT"===(u=n.tagName)&&i[r]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&a(t.target)},!0),t.addEventListener("blur",function(t){var e;o(t.target)&&t.target.hasAttribute("data-wf-focus-visible")&&(n=!0,window.clearTimeout(r),r=window.setTimeout(function(){n=!1},100),(e=t.target).getAttribute("data-wf-focus-visible")&&e.removeAttribute("data-wf-focus-visible"))},!0)}return{ready:function(){if("undefined"!=typeof document)try{document.querySelector(":focus-visible")}catch(e){t(document)}}}})},function(t,e,n){"use strict";n(4).define("focus-within",t.exports=function(){function t(t){for(var e=[t],n=null;n=t.parentNode||t.host||t.defaultView;)e.push(n),t=n;return e}function e(t){"function"!=typeof t.getAttribute||t.getAttribute("data-wf-focus-within")||t.setAttribute("data-wf-focus-within","true")}function n(t){"function"==typeof t.getAttribute&&t.getAttribute("data-wf-focus-within")&&t.removeAttribute("data-wf-focus-within")}return{ready:function(){if("undefined"!=typeof document&&document.body.hasAttribute("data-wf-focus-within"))try{document.querySelector(":focus-within")}catch(i){r=function(r){var i;i||(window.requestAnimationFrame(function(){i=!1,"blur"===r.type&&Array.prototype.slice.call(t(r.target)).forEach(n),"focus"===r.type&&Array.prototype.slice.call(t(r.target)).forEach(e)}),i=!0)},document.addEventListener("focus",r,!0),document.addEventListener("blur",r,!0),e(document.body)}var r}}})},function(t,e,n){"use strict";var r=n(4);r.define("focus",t.exports=function(){var t=[],e=!1;function n(n){e&&(n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),t.unshift(n))}function i(n){(function(t){var e=t.target,n=e.tagName;return/^a$/i.test(n)&&null!=e.href||/^(button|textarea)$/i.test(n)&&!0!==e.disabled||/^input$/i.test(n)&&/^(button|reset|submit|radio|checkbox)$/i.test(e.type)&&!e.disabled||!/^(button|input|textarea|select|a)$/i.test(n)&&!Number.isNaN(Number.parseFloat(e.tabIndex))||/^audio$/i.test(n)||/^video$/i.test(n)&&!0===e.controls})(n)&&(e=!0,setTimeout(function(){for(e=!1,n.target.focus();t.length>0;){var r=t.pop();r.target.dispatchEvent(new MouseEvent(r.type,r))}},0))}return{ready:function(){"undefined"!=typeof document&&document.body.hasAttribute("data-wf-focus-within")&&r.env.safari&&(document.addEventListener("mousedown",i,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("click",n,!0))}}})},function(t,e,n){"use strict";var r=window.jQuery,i={},o=[],a={reset:function(t,e){e.__wf_intro=null},intro:function(t,e){e.__wf_intro||(e.__wf_intro=!0,r(e).triggerHandler(i.types.INTRO))},outro:function(t,e){e.__wf_intro&&(e.__wf_intro=null,r(e).triggerHandler(i.types.OUTRO))}};i.triggers={},i.types={INTRO:"w-ix-intro.w-ix",OUTRO:"w-ix-outro.w-ix"},i.init=function(){for(var t=o.length,e=0;e<t;e++){var n=o[e];n[0](0,n[1])}o=[],r.extend(i.triggers,a)},i.async=function(){for(var t in a){var e=a[t];a.hasOwnProperty(t)&&(i.triggers[t]=function(t,n){o.push([e,n])})}},i.async(),t.exports=i},function(t,e,n){"use strict";var r=n(4),i=n(140);i.setEnv(r.env),r.define("ix2",t.exports=function(){return i})},function(t,e,n){"use strict";var r=n(18),i=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.setEnv=function(t){t()&&(0,u.observeRequests)(s)},e.init=function(t){f(),(0,u.startEngine)({store:s,rawData:t,allowEvents:!0})},e.destroy=f,e.actions=e.store=void 0,n(141);var o=n(87),a=i(n(188)),u=n(123),c=r(n(64));e.actions=c;var s=(0,o.createStore)(a.default);function f(){(0,u.stopEngine)(s)}e.store=s},function(t,e,n){var r=n(142);t.exports=r},function(t,e,n){var r=n(143);t.exports=r},function(t,e,n){n(144);var r=n(176);t.exports=r("Array","includes")},function(t,e,n){"use strict";var r=n(145),i=n(85).includes,o=n(171);r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},function(t,e,n){var r=n(0),i=n(70).f,o=n(42),a=n(159),u=n(41),c=n(163),s=n(170);t.exports=function(t,e){var n,f,l,d,p,v=t.target,h=t.global,E=t.stat;if(n=h?r:E?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in e){if(d=e[f],l=t.noTargetGet?(p=i(n,f))&&p.value:n[f],!s(h?f:v+(E?".":"#")+f,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;c(d,l)}(t.sham||l&&l.sham)&&o(d,"sham",!0),a(n,f,d,t)}}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),i=n(5),o=n(19),a=n(148),u=r.Object,c=i("".split);t.exports=o(function(){return!u("z").propertyIsEnumerable(0)})?function(t){return"String"==a(t)?c(t,""):u(t)}:u},function(t,e,n){var r=n(5),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},function(t,e,n){var r=n(0),i=n(39),o=n(20),a=n(74),u=n(153),c=n(156),s=n(77),f=r.TypeError,l=s("toPrimitive");t.exports=function(t,e){if(!o(t)||a(t))return t;var n,r=u(t,l);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!o(n)||a(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},function(t,e,n){var r=n(5);t.exports=r({}.isPrototypeOf)},function(t,e,n){var r,i,o=n(0),a=n(152),u=o.process,c=o.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(i=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=+r[1]),t.exports=i},function(t,e,n){var r=n(27);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(154);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},function(t,e,n){var r=n(0),i=n(7),o=n(155),a=r.TypeError;t.exports=function(t){if(i(t))return t;throw a(o(t)+" is not a function")}},function(t,e,n){var r=n(0).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},function(t,e,n){var r=n(0),i=n(39),o=n(7),a=n(20),u=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&o(n=t.toString)&&!a(r=i(n,t)))return r;if(o(n=t.valueOf)&&!a(r=i(n,t)))return r;if("string"!==e&&o(n=t.toString)&&!a(r=i(n,t)))return r;throw u("Can't convert object to primitive value")}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),i=n(72),o=r.Object;t.exports=function(t){return o(i(t))}},function(t,e,n){var r=n(0),i=n(7),o=n(9),a=n(42),u=n(41),c=n(82),s=n(160),f=n(162).CONFIGURABLE,l=s.get,d=s.enforce,p=String(String).split("String");(t.exports=function(t,e,n,c){var s,l=!!c&&!!c.unsafe,v=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,E=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(E).slice(0,7)&&(E="["+String(E).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||f&&n.name!==E)&&a(n,"name",E),(s=d(n)).source||(s.source=p.join("string"==typeof E?E:""))),t!==r?(l?!h&&t[e]&&(v=!0):delete t[e],v?t[e]=n:a(t,e,n)):v?t[e]=n:u(e,n)})(Function.prototype,"toString",function(){return i(this)&&l(this).source||c(this)})},function(t,e,n){var r,i,o,a=n(161),u=n(0),c=n(5),s=n(20),f=n(42),l=n(9),d=n(40),p=n(83),v=n(43),h=u.TypeError,E=u.WeakMap;if(a||d.state){var g=d.state||(d.state=new E),m=c(g.get),y=c(g.has),_=c(g.set);r=function(t,e){if(y(g,t))throw new h("Object already initialized");return e.facade=t,_(g,t,e),e},i=function(t){return m(g,t)||{}},o=function(t){return y(g,t)}}else{var I=p("state");v[I]=!0,r=function(t,e){if(l(t,I))throw new h("Object already initialized");return e.facade=t,f(t,I,e),e},i=function(t){return l(t,I)?t[I]:{}},o=function(t){return l(t,I)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=i(e)).type!==t)throw h("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),i=n(7),o=n(82),a=r.WeakMap;t.exports=i(a)&&/native code/.test(o(a))},function(t,e,n){var r=n(14),i=n(9),o=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=i(o,"name"),c=u&&"something"===function(){}.name,s=u&&(!r||r&&a(o,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},function(t,e,n){var r=n(9),i=n(164),o=n(70),a=n(28);t.exports=function(t,e){for(var n=i(e),u=a.f,c=o.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,c(e,f))}}},function(t,e,n){var r=n(27),i=n(5),o=n(165),a=n(169),u=n(29),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=a.f;return n?c(e,n(t)):e}},function(t,e,n){var r=n(84),i=n(44).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(86),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},function(t,e,n){var r=n(168);t.exports=function(t){return r(t.length)}},function(t,e,n){var r=n(86),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(19),i=n(7),o=/#|\.prototype\./,a=function(t,e){var n=c[u(t)];return n==f||n!=s&&(i(e)?r(e):!!e)},u=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},function(t,e,n){var r=n(77),i=n(172),o=n(28),a=r("unscopables"),u=Array.prototype;null==u[a]&&o.f(u,a,{configurable:!0,value:i(null)}),t.exports=function(t){u[a][t]=!0}},function(t,e,n){var r,i=n(29),o=n(173),a=n(44),u=n(43),c=n(175),s=n(81),f=n(83),l=f("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},h=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;h="undefined"!=typeof document?document.domain&&r?v(r):((e=s("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):v(r);for(var n=a.length;n--;)delete h.prototype[a[n]];return h()};u[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=i(t),n=new d,d.prototype=null,n[l]=t):n=h(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(14),i=n(28),o=n(29),a=n(26),u=n(174);t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=a(e),c=u(e),s=c.length,f=0;s>f;)i.f(t,n=c[f++],r[n]);return t}},function(t,e,n){var r=n(84),i=n(44);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(27);t.exports=r("document","documentElement")},function(t,e,n){var r=n(0),i=n(5);t.exports=function(t,e){return i(r[t].prototype[e])}},function(t,e,n){"use strict";n.r(e);var r=n(89),i=n(180),o=n(181),a="[object Null]",u="[object Undefined]",c=r.default?r.default.toStringTag:void 0;e.default=function(t){return null==t?void 0===t?u:a:c&&c in Object(t)?Object(i.default)(t):Object(o.default)(t)}},function(t,e,n){"use strict";n.r(e);var r=n(179),i="object"==typeof self&&self&&self.Object===Object&&self,o=r.default||i||Function("return this")();e.default=o},function(t,e,n){"use strict";n.r(e),function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.default=n}.call(this,n(25))},function(t,e,n){"use strict";n.r(e);var r=n(89),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r.default?r.default.toStringTag:void 0;e.default=function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[u]=n:delete t[u]),i}},function(t,e,n){"use strict";n.r(e);var r=Object.prototype.toString;e.default=function(t){return r.call(t)}},function(t,e,n){"use strict";n.r(e);var r=n(183),i=Object(r.default)(Object.getPrototypeOf,Object);e.default=i},function(t,e,n){"use strict";n.r(e),e.default=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){"use strict";n.r(e),e.default=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";n.r(e),function(t,r){var i,o=n(187);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var a=Object(o.default)(i);e.default=a}.call(this,n(25),n(186)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.r(e),n.d(e,"default",function(){return r})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(87),i=n(189),o=n(195),a=n(196),u=n(15),c=n(282),s=n(283),f=u.IX2ElementsReducer.ixElements,l=(0,r.combineReducers)({ixData:i.ixData,ixRequest:o.ixRequest,ixSession:a.ixSession,ixElements:f,ixInstances:c.ixInstances,ixParameters:s.ixParameters});e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ixData=void 0;var r=n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;e.ixData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.freeze({}),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r:return e.payload.ixData||Object.freeze({});default:return t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.QuickEffectDirectionConsts=e.QuickEffectIds=e.EventLimitAffectedElements=e.EventContinuousMouseAxes=e.EventBasedOn=e.EventAppliesTo=e.EventTypeConsts=void 0;e.EventTypeConsts={NAVBAR_OPEN:"NAVBAR_OPEN",NAVBAR_CLOSE:"NAVBAR_CLOSE",TAB_ACTIVE:"TAB_ACTIVE",TAB_INACTIVE:"TAB_INACTIVE",SLIDER_ACTIVE:"SLIDER_ACTIVE",SLIDER_INACTIVE:"SLIDER_INACTIVE",DROPDOWN_OPEN:"DROPDOWN_OPEN",DROPDOWN_CLOSE:"DROPDOWN_CLOSE",MOUSE_CLICK:"MOUSE_CLICK",MOUSE_SECOND_CLICK:"MOUSE_SECOND_CLICK",MOUSE_DOWN:"MOUSE_DOWN",MOUSE_UP:"MOUSE_UP",MOUSE_OVER:"MOUSE_OVER",MOUSE_OUT:"MOUSE_OUT",MOUSE_MOVE:"MOUSE_MOVE",MOUSE_MOVE_IN_VIEWPORT:"MOUSE_MOVE_IN_VIEWPORT",SCROLL_INTO_VIEW:"SCROLL_INTO_VIEW",SCROLL_OUT_OF_VIEW:"SCROLL_OUT_OF_VIEW",SCROLLING_IN_VIEW:"SCROLLING_IN_VIEW",ECOMMERCE_CART_OPEN:"ECOMMERCE_CART_OPEN",ECOMMERCE_CART_CLOSE:"ECOMMERCE_CART_CLOSE",PAGE_START:"PAGE_START",PAGE_FINISH:"PAGE_FINISH",PAGE_SCROLL_UP:"PAGE_SCROLL_UP",PAGE_SCROLL_DOWN:"PAGE_SCROLL_DOWN",PAGE_SCROLL:"PAGE_SCROLL"};e.EventAppliesTo={ELEMENT:"ELEMENT",CLASS:"CLASS",PAGE:"PAGE"};e.EventBasedOn={ELEMENT:"ELEMENT",VIEWPORT:"VIEWPORT"};e.EventContinuousMouseAxes={X_AXIS:"X_AXIS",Y_AXIS:"Y_AXIS"};e.EventLimitAffectedElements={CHILDREN:"CHILDREN",SIBLINGS:"SIBLINGS",IMMEDIATE_CHILDREN:"IMMEDIATE_CHILDREN"};e.QuickEffectIds={FADE_EFFECT:"FADE_EFFECT",SLIDE_EFFECT:"SLIDE_EFFECT",GROW_EFFECT:"GROW_EFFECT",SHRINK_EFFECT:"SHRINK_EFFECT",SPIN_EFFECT:"SPIN_EFFECT",FLY_EFFECT:"FLY_EFFECT",POP_EFFECT:"POP_EFFECT",FLIP_EFFECT:"FLIP_EFFECT",JIGGLE_EFFECT:"JIGGLE_EFFECT",PULSE_EFFECT:"PULSE_EFFECT",DROP_EFFECT:"DROP_EFFECT",BLINK_EFFECT:"BLINK_EFFECT",BOUNCE_EFFECT:"BOUNCE_EFFECT",FLIP_LEFT_TO_RIGHT_EFFECT:"FLIP_LEFT_TO_RIGHT_EFFECT",FLIP_RIGHT_TO_LEFT_EFFECT:"FLIP_RIGHT_TO_LEFT_EFFECT",RUBBER_BAND_EFFECT:"RUBBER_BAND_EFFECT",JELLO_EFFECT:"JELLO_EFFECT",GROW_BIG_EFFECT:"GROW_BIG_EFFECT",SHRINK_BIG_EFFECT:"SHRINK_BIG_EFFECT",PLUGIN_LOTTIE_EFFECT:"PLUGIN_LOTTIE_EFFECT"};e.QuickEffectDirectionConsts={LEFT:"LEFT",RIGHT:"RIGHT",BOTTOM:"BOTTOM",TOP:"TOP",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_RIGHT:"BOTTOM_RIGHT",TOP_RIGHT:"TOP_RIGHT",TOP_LEFT:"TOP_LEFT",CLOCKWISE:"CLOCKWISE",COUNTER_CLOCKWISE:"COUNTER_CLOCKWISE"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InteractionTypeConsts=void 0;e.InteractionTypeConsts={MOUSE_CLICK_INTERACTION:"MOUSE_CLICK_INTERACTION",MOUSE_HOVER_INTERACTION:"MOUSE_HOVER_INTERACTION",MOUSE_MOVE_INTERACTION:"MOUSE_MOVE_INTERACTION",SCROLL_INTO_VIEW_INTERACTION:"SCROLL_INTO_VIEW_INTERACTION",SCROLLING_IN_VIEW_INTERACTION:"SCROLLING_IN_VIEW_INTERACTION",MOUSE_MOVE_IN_VIEWPORT_INTERACTION:"MOUSE_MOVE_IN_VIEWPORT_INTERACTION",PAGE_IS_SCROLLING_INTERACTION:"PAGE_IS_SCROLLING_INTERACTION",PAGE_LOAD_INTERACTION:"PAGE_LOAD_INTERACTION",PAGE_SCROLLED_INTERACTION:"PAGE_SCROLLED_INTERACTION",NAVBAR_INTERACTION:"NAVBAR_INTERACTION",DROPDOWN_INTERACTION:"DROPDOWN_INTERACTION",ECOMMERCE_CART_INTERACTION:"ECOMMERCE_CART_INTERACTION",TAB_INTERACTION:"TAB_INTERACTION",SLIDER_INTERACTION:"SLIDER_INTERACTION"}},function(t,e,n){"use strict";var r,i=n(1)(n(21));Object.defineProperty(e,"__esModule",{value:!0}),e.ReducedMotionTypes=void 0;var o=n(94).ActionTypeConsts,a=o.TRANSFORM_MOVE,u=o.TRANSFORM_SCALE,c=o.TRANSFORM_ROTATE,s=o.TRANSFORM_SKEW,f=o.STYLE_SIZE,l=o.STYLE_FILTER,d=(r={},(0,i.default)(r,a,!0),(0,i.default)(r,u,!0),(0,i.default)(r,c,!0),(0,i.default)(r,s,!0),(0,i.default)(r,f,!0),(0,i.default)(r,l,!0),r);e.ReducedMotionTypes=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.IX2_TEST_FRAME_RENDERED=e.IX2_MEDIA_QUERIES_DEFINED=e.IX2_VIEWPORT_WIDTH_CHANGED=e.IX2_ACTION_LIST_PLAYBACK_CHANGED=e.IX2_ELEMENT_STATE_CHANGED=e.IX2_INSTANCE_REMOVED=e.IX2_INSTANCE_STARTED=e.IX2_INSTANCE_ADDED=e.IX2_PARAMETER_CHANGED=e.IX2_ANIMATION_FRAME_CHANGED=e.IX2_EVENT_STATE_CHANGED=e.IX2_EVENT_LISTENER_ADDED=e.IX2_CLEAR_REQUESTED=e.IX2_STOP_REQUESTED=e.IX2_PLAYBACK_REQUESTED=e.IX2_PREVIEW_REQUESTED=e.IX2_SESSION_STOPPED=e.IX2_SESSION_STARTED=e.IX2_SESSION_INITIALIZED=e.IX2_RAW_DATA_IMPORTED=void 0;e.IX2_RAW_DATA_IMPORTED="IX2_RAW_DATA_IMPORTED";e.IX2_SESSION_INITIALIZED="IX2_SESSION_INITIALIZED";e.IX2_SESSION_STARTED="IX2_SESSION_STARTED";e.IX2_SESSION_STOPPED="IX2_SESSION_STOPPED";e.IX2_PREVIEW_REQUESTED="IX2_PREVIEW_REQUESTED";e.IX2_PLAYBACK_REQUESTED="IX2_PLAYBACK_REQUESTED";e.IX2_STOP_REQUESTED="IX2_STOP_REQUESTED";e.IX2_CLEAR_REQUESTED="IX2_CLEAR_REQUESTED";e.IX2_EVENT_LISTENER_ADDED="IX2_EVENT_LISTENER_ADDED";e.IX2_EVENT_STATE_CHANGED="IX2_EVENT_STATE_CHANGED";e.IX2_ANIMATION_FRAME_CHANGED="IX2_ANIMATION_FRAME_CHANGED";e.IX2_PARAMETER_CHANGED="IX2_PARAMETER_CHANGED";e.IX2_INSTANCE_ADDED="IX2_INSTANCE_ADDED";e.IX2_INSTANCE_STARTED="IX2_INSTANCE_STARTED";e.IX2_INSTANCE_REMOVED="IX2_INSTANCE_REMOVED";e.IX2_ELEMENT_STATE_CHANGED="IX2_ELEMENT_STATE_CHANGED";e.IX2_ACTION_LIST_PLAYBACK_CHANGED="IX2_ACTION_LIST_PLAYBACK_CHANGED";e.IX2_VIEWPORT_WIDTH_CHANGED="IX2_VIEWPORT_WIDTH_CHANGED";e.IX2_MEDIA_QUERIES_DEFINED="IX2_MEDIA_QUERIES_DEFINED";e.IX2_TEST_FRAME_RENDERED="IX2_TEST_FRAME_RENDERED"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RENDER_PLUGIN=e.RENDER_STYLE=e.RENDER_GENERAL=e.RENDER_TRANSFORM=e.ABSTRACT_NODE=e.PLAIN_OBJECT=e.HTML_ELEMENT=e.PRESERVE_3D=e.PARENT=e.SIBLINGS=e.IMMEDIATE_CHILDREN=e.CHILDREN=e.BAR_DELIMITER=e.COLON_DELIMITER=e.COMMA_DELIMITER=e.AUTO=e.WILL_CHANGE=e.FLEX=e.DISPLAY=e.COLOR=e.BORDER_COLOR=e.BACKGROUND=e.BACKGROUND_COLOR=e.HEIGHT=e.WIDTH=e.FILTER=e.OPACITY=e.SKEW_Y=e.SKEW_X=e.SKEW=e.ROTATE_Z=e.ROTATE_Y=e.ROTATE_X=e.SCALE_3D=e.SCALE_Z=e.SCALE_Y=e.SCALE_X=e.TRANSLATE_3D=e.TRANSLATE_Z=e.TRANSLATE_Y=e.TRANSLATE_X=e.TRANSFORM=e.CONFIG_UNIT=e.CONFIG_Z_UNIT=e.CONFIG_Y_UNIT=e.CONFIG_X_UNIT=e.CONFIG_VALUE=e.CONFIG_Z_VALUE=e.CONFIG_Y_VALUE=e.CONFIG_X_VALUE=e.BOUNDARY_SELECTOR=e.W_MOD_IX=e.W_MOD_JS=e.WF_PAGE=e.IX2_ID_DELIMITER=void 0;e.IX2_ID_DELIMITER="|";e.WF_PAGE="data-wf-page";e.W_MOD_JS="w-mod-js";e.W_MOD_IX="w-mod-ix";e.BOUNDARY_SELECTOR=".w-dyn-item";e.CONFIG_X_VALUE="xValue";e.CONFIG_Y_VALUE="yValue";e.CONFIG_Z_VALUE="zValue";e.CONFIG_VALUE="value";e.CONFIG_X_UNIT="xUnit";e.CONFIG_Y_UNIT="yUnit";e.CONFIG_Z_UNIT="zUnit";e.CONFIG_UNIT="unit";e.TRANSFORM="transform";e.TRANSLATE_X="translateX";e.TRANSLATE_Y="translateY";e.TRANSLATE_Z="translateZ";e.TRANSLATE_3D="translate3d";e.SCALE_X="scaleX";e.SCALE_Y="scaleY";e.SCALE_Z="scaleZ";e.SCALE_3D="scale3d";e.ROTATE_X="rotateX";e.ROTATE_Y="rotateY";e.ROTATE_Z="rotateZ";e.SKEW="skew";e.SKEW_X="skewX";e.SKEW_Y="skewY";e.OPACITY="opacity";e.FILTER="filter";e.WIDTH="width";e.HEIGHT="height";e.BACKGROUND_COLOR="backgroundColor";e.BACKGROUND="background";e.BORDER_COLOR="borderColor";e.COLOR="color";e.DISPLAY="display";e.FLEX="flex";e.WILL_CHANGE="willChange";e.AUTO="AUTO";e.COMMA_DELIMITER=",";e.COLON_DELIMITER=":";e.BAR_DELIMITER="|";e.CHILDREN="CHILDREN";e.IMMEDIATE_CHILDREN="IMMEDIATE_CHILDREN";e.SIBLINGS="SIBLINGS";e.PARENT="PARENT";e.PRESERVE_3D="preserve-3d";e.HTML_ELEMENT="HTML_ELEMENT";e.PLAIN_OBJECT="PLAIN_OBJECT";e.ABSTRACT_NODE="ABSTRACT_NODE";e.RENDER_TRANSFORM="RENDER_TRANSFORM";e.RENDER_GENERAL="RENDER_GENERAL";e.RENDER_STYLE="RENDER_STYLE";e.RENDER_PLUGIN="RENDER_PLUGIN"},function(t,e,n){"use strict";var r,i=n(1)(n(21)),o=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.ixRequest=void 0;var a=o(n(30)),u=n(3),c=n(22),s=u.IX2EngineActionTypes,f=s.IX2_PREVIEW_REQUESTED,l=s.IX2_PLAYBACK_REQUESTED,d=s.IX2_STOP_REQUESTED,p=s.IX2_CLEAR_REQUESTED,v={preview:{},playback:{},stop:{},clear:{}},h=Object.create(null,(r={},(0,i.default)(r,f,{value:"preview"}),(0,i.default)(r,l,{value:"playback"}),(0,i.default)(r,d,{value:"stop"}),(0,i.default)(r,p,{value:"clear"}),r));e.ixRequest=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;if(e.type in h){var n=[h[e.type]];return(0,c.setIn)(t,[n],(0,a.default)({},e.payload))}return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ixSession=void 0;var r=n(3),i=n(22),o=r.IX2EngineActionTypes,a=o.IX2_SESSION_INITIALIZED,u=o.IX2_SESSION_STARTED,c=o.IX2_TEST_FRAME_RENDERED,s=o.IX2_SESSION_STOPPED,f=o.IX2_EVENT_LISTENER_ADDED,l=o.IX2_EVENT_STATE_CHANGED,d=o.IX2_ANIMATION_FRAME_CHANGED,p=o.IX2_ACTION_LIST_PLAYBACK_CHANGED,v=o.IX2_VIEWPORT_WIDTH_CHANGED,h=o.IX2_MEDIA_QUERIES_DEFINED,E={active:!1,tick:0,eventListeners:[],eventState:{},playbackState:{},viewportWidth:0,mediaQueryKey:null,hasBoundaryNodes:!1,hasDefinedMediaQueries:!1,reducedMotion:!1};e.ixSession=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:var n=e.payload,r=n.hasBoundaryNodes,o=n.reducedMotion;return(0,i.merge)(t,{hasBoundaryNodes:r,reducedMotion:o});case u:return(0,i.set)(t,"active",!0);case c:var g=e.payload.step,m=void 0===g?20:g;return(0,i.set)(t,"tick",t.tick+m);case s:return E;case d:var y=e.payload.now;return(0,i.set)(t,"tick",y);case f:var _=(0,i.addLast)(t.eventListeners,e.payload);return(0,i.set)(t,"eventListeners",_);case l:var I=e.payload,b=I.stateKey,T=I.newState;return(0,i.setIn)(t,["eventState",b],T);case p:var w=e.payload,O=w.actionListId,A=w.isPlaying;return(0,i.setIn)(t,["playbackState",O],A);case v:for(var S=e.payload,x=S.width,R=S.mediaQueries,N=R.length,C=null,L=0;L<N;L++){var P=R[L],D=P.key,M=P.min,j=P.max;if(x>=M&&x<=j){C=D;break}}return(0,i.merge)(t,{viewportWidth:x,mediaQueryKey:C});case h:return(0,i.set)(t,"hasDefinedMediaQueries",!0);default:return t}}},function(t,e,n){var r=n(198),i=n(250),o=n(111);t.exports=function(t){var e=i(t);return 1==e.length&&e[0][2]?o(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},function(t,e,n){var r=n(97),i=n(101),o=1,a=2;t.exports=function(t,e,n,u){var c=n.length,s=c,f=!u;if(null==t)return!s;for(t=Object(t);c--;){var l=n[c];if(f&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++c<s;){var d=(l=n[c])[0],p=t[d],v=l[1];if(f&&l[2]){if(void 0===p&&!(d in t))return!1}else{var h=new r;if(u)var E=u(p,v,d,t,e,h);if(!(void 0===E?i(v,p,o|a,u,h):E))return!1}}return!0}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(32),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0))}},function(t,e,n){var r=n(32);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(32);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(32);t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},function(t,e,n){var r=n(31);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(31),i=n(49),o=n(50),a=200;t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var u=n.__data__;if(!i||u.length<a-1)return u.push([t,e]),this.size=++n.size,this;n=this.__data__=new o(u)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(98),i=n(212),o=n(8),a=n(100),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,l=s.hasOwnProperty,d=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||i(t))&&(r(t)?d:u).test(a(t))}},function(t,e,n){var r=n(23),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[u]=n:delete t[u]),i}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,i=n(213),o=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!o&&o in t}},function(t,e,n){var r=n(6)["__core-js_shared__"];t.exports=r},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(216),i=n(31),o=n(49);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}},function(t,e,n){var r=n(217),i=n(218),o=n(219),a=n(220),u=n(221);function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},function(t,e,n){var r=n(33);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(33),i="__lodash_hash_undefined__",o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===i?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(33),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t)}},function(t,e,n){var r=n(33),i="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?i:e,this}},function(t,e,n){var r=n(34);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(34);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(34);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(34);t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},function(t,e,n){var r=n(97),i=n(102),o=n(233),a=n(237),u=n(58),c=n(2),s=n(52),f=n(54),l=1,d="[object Arguments]",p="[object Array]",v="[object Object]",h=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,E,g,m){var y=c(t),_=c(e),I=y?p:u(t),b=_?p:u(e),T=(I=I==d?v:I)==v,w=(b=b==d?v:b)==v,O=I==b;if(O&&s(t)){if(!s(e))return!1;y=!0,T=!1}if(O&&!T)return m||(m=new r),y||f(t)?i(t,e,n,E,g,m):o(t,e,I,n,E,g,m);if(!(n&l)){var A=T&&h.call(t,"__wrapped__"),S=w&&h.call(e,"__wrapped__");if(A||S){var x=A?t.value():t,R=S?e.value():e;return m||(m=new r),g(x,R,n,E,m)}}return!!O&&(m||(m=new r),a(t,e,n,E,g,m))}},function(t,e,n){var r=n(50),i=n(229),o=n(230);function a(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}a.prototype.add=a.prototype.push=i,a.prototype.has=o,t.exports=a},function(t,e){var n="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,n),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,n){var r=n(23),i=n(234),o=n(48),a=n(102),u=n(235),c=n(236),s=1,f=2,l="[object Boolean]",d="[object Date]",p="[object Error]",v="[object Map]",h="[object Number]",E="[object RegExp]",g="[object Set]",m="[object String]",y="[object Symbol]",_="[object ArrayBuffer]",I="[object DataView]",b=r?r.prototype:void 0,T=b?b.valueOf:void 0;t.exports=function(t,e,n,r,b,w,O){switch(n){case I:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case _:return!(t.byteLength!=e.byteLength||!w(new i(t),new i(e)));case l:case d:case h:return o(+t,+e);case p:return t.name==e.name&&t.message==e.message;case E:case m:return t==e+"";case v:var A=u;case g:var S=r&s;if(A||(A=c),t.size!=e.size&&!S)return!1;var x=O.get(t);if(x)return x==e;r|=f,O.set(t,e);var R=a(A(t),A(e),r,b,w,O);return O.delete(t),R;case y:if(T)return T.call(t)==T.call(e)}return!1}},function(t,e,n){var r=n(6).Uint8Array;t.exports=r},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}},function(t,e,n){var r=n(238),i=1,o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,a,u,c){var s=n&i,f=r(t),l=f.length;if(l!=r(e).length&&!s)return!1;for(var d=l;d--;){var p=f[d];if(!(s?p in e:o.call(e,p)))return!1}var v=c.get(t),h=c.get(e);if(v&&h)return v==e&&h==t;var E=!0;c.set(t,e),c.set(e,t);for(var g=s;++d<l;){var m=t[p=f[d]],y=e[p];if(a)var _=s?a(y,m,p,e,t,c):a(m,y,p,t,e,c);if(!(void 0===_?m===y||u(m,y,n,a,c):_)){E=!1;break}g||(g="constructor"==p)}if(E&&!g){var I=t.constructor,b=e.constructor;I!=b&&"constructor"in t&&"constructor"in e&&!("function"==typeof I&&I instanceof I&&"function"==typeof b&&b instanceof b)&&(E=!1)}return c.delete(t),c.delete(e),E}},function(t,e,n){var r=n(103),i=n(104),o=n(35);t.exports=function(t){return r(t,o,i)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(16),i=n(12),o="[object Arguments]";t.exports=function(t){return i(t)&&r(t)==o}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(16),i=n(55),o=n(12),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return o(t)&&i(t.length)&&!!a[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(99),i=e&&!e.nodeType&&e,o=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=o&&o.exports===i&&r.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u}).call(this,n(107)(t))},function(t,e,n){var r=n(108)(Object.keys,Object);t.exports=r},function(t,e,n){var r=n(11)(n(6),"DataView");t.exports=r},function(t,e,n){var r=n(11)(n(6),"Promise");t.exports=r},function(t,e,n){var r=n(11)(n(6),"Set");t.exports=r},function(t,e,n){var r=n(110),i=n(35);t.exports=function(t){for(var e=i(t),n=e.length;n--;){var o=e[n],a=t[o];e[n]=[o,a,r(a)]}return e}},function(t,e,n){var r=n(101),i=n(59),o=n(257),a=n(61),u=n(110),c=n(111),s=n(24),f=1,l=2;t.exports=function(t,e){return a(t)&&u(e)?c(s(t),e):function(n){var a=i(n,t);return void 0===a&&a===e?o(n,t):r(e,a,f|l)}}},function(t,e,n){var r=n(253),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,function(t,n,r,i){e.push(r?i.replace(o,"$1"):n||t)}),e});t.exports=a},function(t,e,n){var r=n(254),i=500;t.exports=function(t){var e=r(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}},function(t,e,n){var r=n(50),i="Expected a function";function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},function(t,e,n){var r=n(256);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(23),i=n(112),o=n(2),a=n(38),u=1/0,c=r?r.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return i(e,t)+"";if(a(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-u?"-0":n}},function(t,e,n){var r=n(258),i=n(259);t.exports=function(t,e){return null!=t&&i(t,e,r)}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,n){var r=n(37),i=n(36),o=n(2),a=n(53),u=n(55),c=n(24);t.exports=function(t,e,n){for(var s=-1,f=(e=r(e,t)).length,l=!1;++s<f;){var d=c(e[s]);if(!(l=null!=t&&n(t,d)))break;t=t[d]}return l||++s!=f?l:!!(f=null==t?0:t.length)&&u(f)&&a(d,f)&&(o(t)||i(t))}},function(t,e,n){var r=n(113),i=n(261),o=n(61),a=n(24);t.exports=function(t){return o(t)?r(a(t)):i(t)}},function(t,e,n){var r=n(60);t.exports=function(t){return function(e){return r(e,t)}}},function(t,e,n){var r=n(114),i=n(10),o=n(115),a=Math.max;t.exports=function(t,e,n){var u=null==t?0:t.length;if(!u)return-1;var c=null==n?0:o(n);return c<0&&(c=a(u+c,0)),r(t,i(e,3),c)}},function(t,e,n){var r=n(63),i=1/0,o=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===i||t===-i?(t<0?-1:1)*o:t==t?t:0:0===t?t:0}},function(t,e,n){var r=n(265),i=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}},function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createElementState=I,e.mergeActionState=b,e.ixElements=void 0;var r=n(22),i=n(3),o=i.IX2EngineConstants,a=(o.HTML_ELEMENT,o.PLAIN_OBJECT),u=(o.ABSTRACT_NODE,o.CONFIG_X_VALUE),c=o.CONFIG_Y_VALUE,s=o.CONFIG_Z_VALUE,f=o.CONFIG_VALUE,l=o.CONFIG_X_UNIT,d=o.CONFIG_Y_UNIT,p=o.CONFIG_Z_UNIT,v=o.CONFIG_UNIT,h=i.IX2EngineActionTypes,E=h.IX2_SESSION_STOPPED,g=h.IX2_INSTANCE_ADDED,m=h.IX2_ELEMENT_STATE_CHANGED,y={},_="refState";function I(t,e,n,i,o){var u=n===a?(0,r.getIn)(o,["config","target","objectId"]):null;return(0,r.mergeIn)(t,[i],{id:i,ref:e,refId:u,refType:n})}function b(t,e,n,i,o){var a=function(t){var e=t.config;return T.reduce(function(t,n){var r=n[0],i=n[1],o=e[r],a=e[i];return null!=o&&null!=a&&(t[i]=a),t},{})}(o),u=[e,_,n];return(0,r.mergeIn)(t,u,i,a)}e.ixElements=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case E:return y;case g:var n=e.payload,i=n.elementId,o=n.element,a=n.origin,u=n.actionItem,c=n.refType,s=u.actionTypeId,f=t;return(0,r.getIn)(f,[i,o])!==o&&(f=I(f,o,c,i,u)),b(f,i,s,a,u);case m:var l=e.payload;return b(t,l.elementId,l.actionTypeId,l.current,l.actionItem);default:return t}};var T=[[u,l],[c,d],[s,p],[f,v]]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.clearPlugin=e.renderPlugin=e.createPluginInstance=e.getPluginDestination=e.getPluginOrigin=e.getPluginDuration=e.getPluginConfig=void 0;e.getPluginConfig=function(t){return t.value};e.getPluginDuration=function(t,e){if("auto"!==e.config.duration)return null;var n=parseFloat(t.getAttribute("data-duration"));return n>0?1e3*n:1e3*parseFloat(t.getAttribute("data-default-duration"))};e.getPluginOrigin=function(t){return t||{value:0}};e.getPluginDestination=function(t){return{value:t.value}};e.createPluginInstance=function(t){var e=window.Webflow.require("lottie").createInstance(t);return e.stop(),e.setSubframe(!0),e};e.renderPlugin=function(t,e,n){if(t){var r=e[n.actionTypeId].value/100;t.goToFrame(t.frames*r)}};e.clearPlugin=function(t){window.Webflow.require("lottie").createInstance(t).stop()}},function(t,e,n){"use strict";var r,i,o,a=n(1),u=a(n(13)),c=a(n(21)),s=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.getInstanceId=function(){return"i"+vt++},e.getElementId=function(t,e){for(var n in t){var r=t[n];if(r&&r.ref===e)return r.id}return"e"+ht++},e.reifyState=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.events,n=t.actionLists,r=t.site,i=(0,l.default)(e,function(t,e){var n=e.eventTypeId;return t[n]||(t[n]={}),t[n][e.id]=e,t},{}),o=r&&r.mediaQueries,a=[];o?a=o.map(function(t){return t.key}):(o=[],console.warn("IX2 missing mediaQueries in site data"));return{ixData:{events:e,actionLists:n,eventTypeMap:i,mediaQueries:o,mediaQueryKeys:a}}},e.observeStore=function(t){var e=t.store,n=t.select,r=t.onChange,i=t.comparator,o=void 0===i?Et:i,a=e.getState,u=(0,e.subscribe)(function(){var t=n(a());if(null==t)return void u();o(t,c)||r(c=t,e)}),c=n(a());return u},e.getAffectedElements=mt,e.getComputedStyle=function(t){var e=t.element,n=t.actionItem;if(!m.IS_BROWSER_ENV)return{};switch(n.actionTypeId){case it:case ot:case at:case ut:case ct:return window.getComputedStyle(e);default:return{}}},e.getInstanceOrigin=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,i=(arguments.length>4?arguments[4]:void 0).getStyle,o=r.actionTypeId,a=r.config;if((0,g.isPluginType)(o))return(0,g.getPluginOrigin)(o)(e[o]);switch(o){case Z:case J:case tt:case et:return e[o]||Tt[o];case rt:return _t(e[o],r.config.filters);case nt:return{value:(0,f.default)(parseFloat(i(t,N)),1)};case it:var u,c,s=i(t,L),l=i(t,P);return u=a.widthUnit===W?yt.test(s)?parseFloat(s):parseFloat(n.width):(0,f.default)(parseFloat(s),parseFloat(n.width)),c=a.heightUnit===W?yt.test(l)?parseFloat(l):parseFloat(n.height):(0,f.default)(parseFloat(l),parseFloat(n.height)),{widthValue:u,heightValue:c};case ot:case at:case ut:return function(t){var e=t.element,n=t.actionTypeId,r=t.computedStyle,i=t.getStyle,o=lt[n],a=i(e,o),u=St.test(a)?a:r[o],c=function(t,e){var n=t.exec(e);return n?n[1]:""}(xt,u).split(B);return{rValue:(0,f.default)(parseInt(c[0],10),255),gValue:(0,f.default)(parseInt(c[1],10),255),bValue:(0,f.default)(parseInt(c[2],10),255),aValue:(0,f.default)(parseFloat(c[3]),1)}}({element:t,actionTypeId:o,computedStyle:n,getStyle:i});case ct:return{value:(0,f.default)(i(t,V),n.display)};case st:return e[o]||{value:0};default:return}},e.getDestinationValues=function(t){var e=t.element,n=t.actionItem,r=t.elementApi,i=n.actionTypeId;if((0,g.isPluginType)(i))return(0,g.getPluginDestination)(i)(n.config);switch(i){case Z:case J:case tt:case et:var o=n.config,a=o.xValue,u=o.yValue,c=o.zValue;return{xValue:a,yValue:u,zValue:c};case it:var s=r.getStyle,f=r.setStyle,l=r.getProperty,d=n.config,p=d.widthUnit,v=d.heightUnit,h=n.config,E=h.widthValue,y=h.heightValue;if(!m.IS_BROWSER_ENV)return{widthValue:E,heightValue:y};if(p===W){var _=s(e,L);f(e,L,""),E=l(e,"offsetWidth"),f(e,L,_)}if(v===W){var I=s(e,P);f(e,P,""),y=l(e,"offsetHeight"),f(e,P,I)}return{widthValue:E,heightValue:y};case ot:case at:case ut:var b=n.config,T=b.rValue,w=b.gValue,O=b.bValue,A=b.aValue;return{rValue:T,gValue:w,bValue:O,aValue:A};case rt:return n.config.filters.reduce(It,{});default:var S=n.config.value;return{value:S}}},e.getRenderType=bt,e.getStyleProp=function(t,e){return t===Q?e.replace("STYLE_","").toLowerCase():null},e.renderHTMLElement=function(t,e,n,r,i,o,a,u,c){switch(u){case K:return function(t,e,n,r,i){var o=At.map(function(t){var n=Tt[t],r=e[t]||{},i=r.xValue,o=void 0===i?n.xValue:i,a=r.yValue,u=void 0===a?n.yValue:a,c=r.zValue,s=void 0===c?n.zValue:c,f=r.xUnit,l=void 0===f?"":f,d=r.yUnit,p=void 0===d?"":d,v=r.zUnit,h=void 0===v?"":v;switch(t){case Z:return"".concat(b,"(").concat(o).concat(l,", ").concat(u).concat(p,", ").concat(s).concat(h,")");case J:return"".concat(T,"(").concat(o).concat(l,", ").concat(u).concat(p,", ").concat(s).concat(h,")");case tt:return"".concat(w,"(").concat(o).concat(l,") ").concat(O,"(").concat(u).concat(p,") ").concat(A,"(").concat(s).concat(h,")");case et:return"".concat(S,"(").concat(o).concat(l,", ").concat(u).concat(p,")");default:return""}}).join(" "),a=i.setStyle;Rt(t,m.TRANSFORM_PREFIXED,i),a(t,m.TRANSFORM_PREFIXED,o),u=r,c=n,s=u.actionTypeId,f=c.xValue,l=c.yValue,d=c.zValue,(s===Z&&void 0!==d||s===J&&void 0!==d||s===tt&&(void 0!==f||void 0!==l))&&a(t,m.TRANSFORM_STYLE_PREFIXED,x);var u,c,s,f,l,d}(t,e,n,i,a);case Q:return function(t,e,n,r,i,o){var a=o.setStyle,u=r.actionTypeId,c=r.config;switch(u){case it:var s=r.config,f=s.widthUnit,d=void 0===f?"":f,p=s.heightUnit,v=void 0===p?"":p,h=n.widthValue,E=n.heightValue;void 0!==h&&(d===W&&(d="px"),Rt(t,L,o),a(t,L,h+d)),void 0!==E&&(v===W&&(v="px"),Rt(t,P,o),a(t,P,E+v));break;case rt:!function(t,e,n,r){var i=(0,l.default)(e,function(t,e,r){return"".concat(t," ").concat(r,"(").concat(e).concat(Ot(r,n),")")},""),o=r.setStyle;Rt(t,C,r),o(t,C,i)}(t,n,c,o);break;case ot:case at:case ut:var g=lt[u],m=Math.round(n.rValue),y=Math.round(n.gValue),_=Math.round(n.bValue),I=n.aValue;Rt(t,g,o),a(t,g,I>=1?"rgb(".concat(m,",").concat(y,",").concat(_,")"):"rgba(".concat(m,",").concat(y,",").concat(_,",").concat(I,")"));break;default:var b=c.unit,T=void 0===b?"":b;Rt(t,i,o),a(t,i,n.value+T)}}(t,0,n,i,o,a);case Y:return function(t,e,n){var r=n.setStyle;switch(e.actionTypeId){case ct:var i=e.config.value;return void(i===R&&m.IS_BROWSER_ENV?r(t,V,m.FLEX_PREFIXED):r(t,V,i))}}(t,i,a);case q:var s=i.actionTypeId;if((0,g.isPluginType)(s))return(0,g.renderPlugin)(s)(c,e,i)}},e.clearAllStyles=function(t){var e=t.store,n=t.elementApi,r=e.getState().ixData,i=r.events,o=void 0===i?{}:i,a=r.actionLists,u=void 0===a?{}:a;Object.keys(o).forEach(function(t){var e=o[t],r=e.action.config,i=r.actionListId,a=u[i];a&&Ct({actionList:a,event:e,elementApi:n})}),Object.keys(u).forEach(function(t){Ct({actionList:u[t],elementApi:n})})},e.cleanupHTMLElement=function(t,e,n){var r=n.setStyle,i=n.getStyle,o=e.actionTypeId;if(o===it){var a=e.config;a.widthUnit===W&&r(t,L,""),a.heightUnit===W&&r(t,P,"")}i(t,U)&&Pt({effect:Nt,actionTypeId:o,elementApi:n})(t)},e.getMaxDurationItemIndex=Mt,e.getActionListProgress=function(t,e){var n=t.actionItemGroups,r=t.useFirstGroupAsInitialState,i=e.actionItem,o=e.verboseTimeElapsed,a=void 0===o?0:o,u=0,c=0;return n.forEach(function(t,e){if(!r||0!==e){var n=t.actionItems,o=n[Mt(n)],s=o.config,f=o.actionTypeId;i.id===o.id&&(c=u+a);var l=bt(f)===Y?0:s.duration;u+=s.delay+l}}),u>0?(0,E.optimizeFloat)(c/u):0},e.reduceListToGroup=function(t){var e=t.actionList,n=t.actionItemId,r=t.rawData,i=e.actionItemGroups,o=e.continuousParameterGroups,a=[],u=function(t){return a.push((0,p.mergeIn)(t,["config"],{delay:0,duration:0})),t.id===n};return i&&i.some(function(t){return t.actionItems.some(u)}),o&&o.some(function(t){return t.continuousActionGroups.some(function(t){return t.actionItems.some(u)})}),(0,p.setIn)(r,["actionLists"],(0,c.default)({},e.id,{id:e.id,actionItemGroups:[{actionItems:a}]}))},e.shouldNamespaceEventParameter=function(t,e){var n=e.basedOn;return t===v.EventTypeConsts.SCROLLING_IN_VIEW&&(n===v.EventBasedOn.ELEMENT||null==n)||t===v.EventTypeConsts.MOUSE_MOVE&&n===v.EventBasedOn.ELEMENT},e.getNamespacedParameterId=function(t,e){return t+H+e},e.shouldAllowMediaQuery=function(t,e){if(null==e)return!0;return-1!==t.indexOf(e)},e.mediaQueriesEqual=function(t,e){return(0,h.default)(t&&t.sort(),e&&e.sort())},e.stringifyTarget=function(t){if("string"==typeof t)return t;var e=t.id,n=void 0===e?"":e,r=t.selector,i=void 0===r?"":r,o=t.useEventTarget;return n+z+i+z+(void 0===o?"":o)},Object.defineProperty(e,"shallowEqual",{enumerable:!0,get:function(){return h.default}}),e.getItemConfigByKey=void 0;var f=s(n(272)),l=s(n(273)),d=s(n(279)),p=n(22),v=n(3),h=s(n(281)),E=n(118),g=n(120),m=n(47),y=v.IX2EngineConstants,_=y.BACKGROUND,I=y.TRANSFORM,b=y.TRANSLATE_3D,T=y.SCALE_3D,w=y.ROTATE_X,O=y.ROTATE_Y,A=y.ROTATE_Z,S=y.SKEW,x=y.PRESERVE_3D,R=y.FLEX,N=y.OPACITY,C=y.FILTER,L=y.WIDTH,P=y.HEIGHT,D=y.BACKGROUND_COLOR,M=y.BORDER_COLOR,j=y.COLOR,F=y.CHILDREN,k=y.IMMEDIATE_CHILDREN,G=y.SIBLINGS,X=y.PARENT,V=y.DISPLAY,U=y.WILL_CHANGE,W=y.AUTO,B=y.COMMA_DELIMITER,H=y.COLON_DELIMITER,z=y.BAR_DELIMITER,K=y.RENDER_TRANSFORM,Y=y.RENDER_GENERAL,Q=y.RENDER_STYLE,q=y.RENDER_PLUGIN,$=v.ActionTypeConsts,Z=$.TRANSFORM_MOVE,J=$.TRANSFORM_SCALE,tt=$.TRANSFORM_ROTATE,et=$.TRANSFORM_SKEW,nt=$.STYLE_OPACITY,rt=$.STYLE_FILTER,it=$.STYLE_SIZE,ot=$.STYLE_BACKGROUND_COLOR,at=$.STYLE_BORDER,ut=$.STYLE_TEXT_COLOR,ct=$.GENERAL_DISPLAY,st="OBJECT_VALUE",ft=function(t){return t.trim()},lt=Object.freeze((r={},(0,c.default)(r,ot,D),(0,c.default)(r,at,M),(0,c.default)(r,ut,j),r)),dt=Object.freeze((i={},(0,c.default)(i,m.TRANSFORM_PREFIXED,I),(0,c.default)(i,D,_),(0,c.default)(i,N,N),(0,c.default)(i,C,C),(0,c.default)(i,L,L),(0,c.default)(i,P,P),i)),pt={},vt=1;var ht=1;var Et=function(t,e){return t===e};function gt(t){var e=(0,u.default)(t);return"string"===e?{id:t}:null!=t&&"object"===e?{id:t.id,objectId:t.objectId,selector:t.selector,selectorGuids:t.selectorGuids,appliesTo:t.appliesTo,useEventTarget:t.useEventTarget}:{}}function mt(t){var e,n,r,i=t.config,o=t.event,a=t.eventTarget,u=t.elementRoot,c=t.elementApi;if(!c)throw new Error("IX2 missing elementApi");var s=i.targets;if(Array.isArray(s)&&s.length>0)return s.reduce(function(t,e){return t.concat(mt({config:{target:e},event:o,eventTarget:a,elementRoot:u,elementApi:c}))},[]);var f=c.getValidDocument,l=c.getQuerySelector,d=c.queryDocument,p=c.getChildElements,h=c.getSiblingElements,E=c.matchSelector,g=c.elementContains,y=c.isSiblingNode,_=i.target;if(!_)return[];var I=gt(_),b=I.id,T=I.objectId,w=I.selector,O=I.selectorGuids,A=I.appliesTo,S=I.useEventTarget;if(T)return[pt[T]||(pt[T]={})];if(A===v.EventAppliesTo.PAGE){var x=f(b);return x?[x]:[]}var R,N,C,L=(null!==(e=null==o?void 0:null===(n=o.action)||void 0===n?void 0:null===(r=n.config)||void 0===r?void 0:r.affectedElements)&&void 0!==e?e:{})[b||w]||{},P=Boolean(L.id||L.selector),D=o&&l(gt(o.target));if(P?(R=L.limitAffectedElements,N=D,C=l(L)):N=C=l({id:b,selector:w,selectorGuids:O}),o&&S){var M=a&&(C||!0===S)?[a]:d(D);if(C){if(S===X)return d(C).filter(function(t){return M.some(function(e){return g(t,e)})});if(S===F)return d(C).filter(function(t){return M.some(function(e){return g(e,t)})});if(S===G)return d(C).filter(function(t){return M.some(function(e){return y(e,t)})})}return M}return null==N||null==C?[]:m.IS_BROWSER_ENV&&u?d(C).filter(function(t){return u.contains(t)}):R===F?d(N,C):R===k?p(d(N)).filter(E(C)):R===G?h(d(N)).filter(E(C)):d(C)}var yt=/px/,_t=function(t,e){return e.reduce(function(t,e){return null==t[e.type]&&(t[e.type]=wt[e.type]),t},t||{})};var It=function(t,e){return e&&(t[e.type]=e.value||0),t};function bt(t){return/^TRANSFORM_/.test(t)?K:/^STYLE_/.test(t)?Q:/^GENERAL_/.test(t)?Y:/^PLUGIN_/.test(t)?q:void 0}e.getItemConfigByKey=function(t,e,n){if((0,g.isPluginType)(t))return(0,g.getPluginConfig)(t)(n,e);switch(t){case rt:var r=(0,d.default)(n.filters,function(t){return t.type===e});return r?r.value:0;default:return n[e]}};var Tt=(o={},(0,c.default)(o,Z,Object.freeze({xValue:0,yValue:0,zValue:0})),(0,c.default)(o,J,Object.freeze({xValue:1,yValue:1,zValue:1})),(0,c.default)(o,tt,Object.freeze({xValue:0,yValue:0,zValue:0})),(0,c.default)(o,et,Object.freeze({xValue:0,yValue:0})),o),wt=Object.freeze({blur:0,"hue-rotate":0,invert:0,grayscale:0,saturate:100,sepia:0,contrast:100,brightness:100}),Ot=function(t,e){var n=(0,d.default)(e.filters,function(e){return e.type===t});if(n&&n.unit)return n.unit;switch(t){case"blur":return"px";case"hue-rotate":return"deg";default:return"%"}},At=Object.keys(Tt);var St=/^rgb/,xt=RegExp("rgba?".concat("\\(([^)]+)\\)"));function Rt(t,e,n){if(m.IS_BROWSER_ENV){var r=dt[e];if(r){var i=n.getStyle,o=n.setStyle,a=i(t,U);if(a){var u=a.split(B).map(ft);-1===u.indexOf(r)&&o(t,U,u.concat(r).join(B))}else o(t,U,r)}}}function Nt(t,e,n){if(m.IS_BROWSER_ENV){var r=dt[e];if(r){var i=n.getStyle,o=n.setStyle,a=i(t,U);a&&-1!==a.indexOf(r)&&o(t,U,a.split(B).map(ft).filter(function(t){return t!==r}).join(B))}}}function Ct(t){var e=t.actionList,n=void 0===e?{}:e,r=t.event,i=t.elementApi,o=n.actionItemGroups,a=n.continuousParameterGroups;o&&o.forEach(function(t){Lt({actionGroup:t,event:r,elementApi:i})}),a&&a.forEach(function(t){t.continuousActionGroups.forEach(function(t){Lt({actionGroup:t,event:r,elementApi:i})})})}function Lt(t){var e=t.actionGroup,n=t.event,r=t.elementApi;e.actionItems.forEach(function(t){var e,i=t.actionTypeId,o=t.config;e=(0,g.isPluginType)(i)?(0,g.clearPlugin)(i):Pt({effect:Dt,actionTypeId:i,elementApi:r}),mt({config:o,event:n,elementApi:r}).forEach(e)})}var Pt=function(t){var e=t.effect,n=t.actionTypeId,r=t.elementApi;return function(t){switch(n){case Z:case J:case tt:case et:e(t,m.TRANSFORM_PREFIXED,r);break;case rt:e(t,C,r);break;case nt:e(t,N,r);break;case it:e(t,L,r),e(t,P,r);break;case ot:case at:case ut:e(t,lt[n],r);break;case ct:e(t,V,r)}}};function Dt(t,e,n){var r=n.setStyle;Nt(t,e,n),r(t,e,""),e===m.TRANSFORM_PREFIXED&&r(t,m.TRANSFORM_STYLE_PREFIXED,"")}function Mt(t){var e=0,n=0;return t.forEach(function(t,r){var i=t.config,o=i.delay+i.duration;o>=e&&(e=o,n=r)}),n}},function(t,e){t.exports=function(t,e){return null==t||t!=t?e:t}},function(t,e,n){var r=n(274),i=n(121),o=n(10),a=n(278),u=n(2);t.exports=function(t,e,n){var c=u(t)?r:a,s=arguments.length<3;return c(t,o(e,4),n,s,i)}},function(t,e){t.exports=function(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}},function(t,e,n){var r=n(276)();t.exports=r},function(t,e){t.exports=function(t){return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++i];if(!1===n(o[c],c,o))break}return e}}},function(t,e,n){var r=n(17);t.exports=function(t,e){return function(n,i){if(null==n)return n;if(!r(n))return t(n,i);for(var o=n.length,a=e?o:-1,u=Object(n);(e?a--:++a<o)&&!1!==i(u[a],a,u););return n}}},function(t,e){t.exports=function(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}},function(t,e,n){var r=n(96)(n(280));t.exports=r},function(t,e,n){var r=n(114),i=n(10),o=n(115),a=Math.max,u=Math.min;t.exports=function(t,e,n){var c=null==t?0:t.length;if(!c)return-1;var s=c-1;return void 0!==n&&(s=o(n),s=n<0?a(c+s,0):u(s,c-1)),r(t,i(e,3),s,!0)}},function(t,e,n){"use strict";var r=n(1)(n(13));Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=Object.prototype.hasOwnProperty;function o(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}var a=function(t,e){if(o(t,e))return!0;if("object"!==(0,r.default)(t)||null===t||"object"!==(0,r.default)(e)||null===e)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(var u=0;u<n.length;u++)if(!i.call(e,n[u])||!o(t[n[u]],e[n[u]]))return!1;return!0};e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ixInstances=void 0;var r=n(3),i=n(15),o=n(22),a=r.IX2EngineActionTypes,u=a.IX2_RAW_DATA_IMPORTED,c=a.IX2_SESSION_STOPPED,s=a.IX2_INSTANCE_ADDED,f=a.IX2_INSTANCE_STARTED,l=a.IX2_INSTANCE_REMOVED,d=a.IX2_ANIMATION_FRAME_CHANGED,p=i.IX2EasingUtils,v=p.optimizeFloat,h=p.applyEasing,E=p.createBezierEasing,g=r.IX2EngineConstants.RENDER_GENERAL,m=i.IX2VanillaUtils,y=m.getItemConfigByKey,_=m.getRenderType,I=m.getStyleProp,b=function(t,e){var n=t.position,r=t.parameterId,i=t.actionGroups,a=t.destinationKeys,u=t.smoothing,c=t.restingValue,s=t.actionTypeId,f=t.customEasingFn,l=t.skipMotion,d=t.skipToValue,p=e.payload.parameters,E=Math.max(1-u,.01),g=p[r];null==g&&(E=1,g=c);var m,_,I,b,T=Math.max(g,0)||0,w=v(T-n),O=l?d:v(n+w*E),A=100*O;if(O===n&&t.current)return t;for(var S=0,x=i.length;S<x;S++){var R=i[S],N=R.keyframe,C=R.actionItems;if(0===S&&(m=C[0]),A>=N){m=C[0];var L=i[S+1],P=L&&A!==N;_=P?L.actionItems[0]:null,P&&(I=N/100,b=(L.keyframe-N)/100)}}var D={};if(m&&!_)for(var M=0,j=a.length;M<j;M++){var F=a[M];D[F]=y(s,F,m.config)}else if(m&&_&&void 0!==I&&void 0!==b)for(var k=(O-I)/b,G=m.config.easing,X=h(G,k,f),V=0,U=a.length;V<U;V++){var W=a[V],B=y(s,W,m.config),H=(y(s,W,_.config)-B)*X+B;D[W]=H}return(0,o.merge)(t,{position:O,current:D})},T=function(t,e){var n=t,r=n.active,i=n.origin,a=n.start,u=n.immediate,c=n.renderType,s=n.verbose,f=n.actionItem,l=n.destination,d=n.destinationKeys,p=n.pluginDuration,E=n.instanceDelay,m=n.customEasingFn,y=n.skipMotion,_=f.config.easing,I=f.config,b=I.duration,T=I.delay;null!=p&&(b=p),T=null!=E?E:T,c===g?b=0:(u||y)&&(b=T=0);var w=e.payload.now;if(r&&i){var O=w-(a+T);if(s){var A=w-a,S=b+T,x=v(Math.min(Math.max(0,A/S),1));t=(0,o.set)(t,"verboseTimeElapsed",S*x)}if(O<0)return t;var R=v(Math.min(Math.max(0,O/b),1)),N=h(_,R,m),C={},L=null;return d.length&&(L=d.reduce(function(t,e){var n=l[e],r=parseFloat(i[e])||0,o=(parseFloat(n)-r)*N+r;return t[e]=o,t},{})),C.current=L,C.position=R,1===R&&(C.active=!1,C.complete=!0),(0,o.merge)(t,C)}return t};e.ixInstances=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.freeze({}),e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return e.payload.ixInstances||Object.freeze({});case c:return Object.freeze({});case s:var n=e.payload,r=n.instanceId,i=n.elementId,a=n.actionItem,p=n.eventId,v=n.eventTarget,h=n.eventStateKey,g=n.actionListId,m=n.groupIndex,y=n.isCarrier,w=n.origin,O=n.destination,A=n.immediate,S=n.verbose,x=n.continuous,R=n.parameterId,N=n.actionGroups,C=n.smoothing,L=n.restingValue,P=n.pluginInstance,D=n.pluginDuration,M=n.instanceDelay,j=n.skipMotion,F=n.skipToValue,k=a.actionTypeId,G=_(k),X=I(G,k),V=Object.keys(O).filter(function(t){return null!=O[t]}),U=a.config.easing;return(0,o.set)(t,r,{id:r,elementId:i,active:!1,position:0,start:0,origin:w,destination:O,destinationKeys:V,immediate:A,verbose:S,current:null,actionItem:a,actionTypeId:k,eventId:p,eventTarget:v,eventStateKey:h,actionListId:g,groupIndex:m,renderType:G,isCarrier:y,styleProp:X,continuous:x,parameterId:R,actionGroups:N,smoothing:C,restingValue:L,pluginInstance:P,pluginDuration:D,instanceDelay:M,skipMotion:j,skipToValue:F,customEasingFn:Array.isArray(U)&&4===U.length?E(U):void 0});case f:var W=e.payload,B=W.instanceId,H=W.time;return(0,o.mergeIn)(t,[B],{active:!0,complete:!1,start:H});case l:var z=e.payload.instanceId;if(!t[z])return t;for(var K={},Y=Object.keys(t),Q=Y.length,q=0;q<Q;q++){var $=Y[q];$!==z&&(K[$]=t[$])}return K;case d:for(var Z=t,J=Object.keys(t),tt=J.length,et=0;et<tt;et++){var nt=J[et],rt=t[nt],it=rt.continuous?b:T;Z=(0,o.set)(Z,nt,it(rt,e))}return Z;default:return t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ixParameters=void 0;var r=n(3).IX2EngineActionTypes,i=r.IX2_RAW_DATA_IMPORTED,o=r.IX2_SESSION_STOPPED,a=r.IX2_PARAMETER_CHANGED;e.ixParameters=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:return e.payload.ixParameters||{};case o:return{};case a:var n=e.payload,r=n.key,u=n.value;return t[r]=u,t;default:return t}}},function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}},function(t,e,n){var r=n(56),i=n(58),o=n(17),a=n(286),u=n(287),c="[object Map]",s="[object Set]";t.exports=function(t){if(null==t)return 0;if(o(t))return a(t)?u(t):t.length;var e=i(t);return e==c||e==s?t.size:r(t).length}},function(t,e,n){var r=n(16),i=n(2),o=n(12),a="[object String]";t.exports=function(t){return"string"==typeof t||!i(t)&&o(t)&&r(t)==a}},function(t,e,n){var r=n(288),i=n(289),o=n(290);t.exports=function(t){return i(t)?o(t):r(t)}},function(t,e,n){var r=n(113)("length");t.exports=r},function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},function(t,e){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+i+")"+"?",s="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[o,a,u].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),f="(?:"+[o+r+"?",r,a,u,n].join("|")+")",l=RegExp(i+"(?="+i+")|"+f+s,"g");t.exports=function(t){for(var e=l.lastIndex=0;l.test(t);)++e;return e}},function(t,e,n){var r=n(10),i=n(292),o=n(293);t.exports=function(t,e){return o(t,i(r(e)))}},function(t,e){var n="Expected a function";t.exports=function(t){if("function"!=typeof t)throw new TypeError(n);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}},function(t,e,n){var r=n(112),i=n(10),o=n(294),a=n(297);t.exports=function(t,e){if(null==t)return{};var n=r(a(t),function(t){return[t]});return e=i(e),o(t,n,function(t,n){return e(t,n[0])})}},function(t,e,n){var r=n(60),i=n(295),o=n(37);t.exports=function(t,e,n){for(var a=-1,u=e.length,c={};++a<u;){var s=e[a],f=r(t,s);n(f,s)&&i(c,o(s,t),f)}return c}},function(t,e,n){var r=n(296),i=n(37),o=n(53),a=n(8),u=n(24);t.exports=function(t,e,n,c){if(!a(t))return t;for(var s=-1,f=(e=i(e,t)).length,l=f-1,d=t;null!=d&&++s<f;){var p=u(e[s]),v=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(s!=l){var h=d[p];void 0===(v=c?c(h,p,d):void 0)&&(v=a(h)?h:o(e[s+1])?[]:{})}r(d,p,v),d=d[p]}return t}},function(t,e,n){var r=n(124),i=n(48),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(103),i=n(298),o=n(300);t.exports=function(t){return r(t,o,i)}},function(t,e,n){var r=n(51),i=n(299),o=n(104),a=n(105),u=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:a;t.exports=u},function(t,e,n){var r=n(108)(Object.getPrototypeOf,Object);t.exports=r},function(t,e,n){var r=n(106),i=n(301),o=n(17);t.exports=function(t){return o(t)?r(t,!0):i(t)}},function(t,e,n){var r=n(8),i=n(57),o=n(302),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var u in t)("constructor"!=u||!e&&a.call(t,u))&&n.push(u);return n}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){var r=n(56),i=n(58),o=n(36),a=n(2),u=n(17),c=n(52),s=n(57),f=n(54),l="[object Map]",d="[object Set]",p=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(u(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||f(t)||o(t)))return!t.length;var e=i(t);if(e==l||e==d)return!t.size;if(s(t))return!r(t).length;for(var n in t)if(p.call(t,n))return!1;return!0}},function(t,e,n){var r=n(124),i=n(122),o=n(10);t.exports=function(t,e){var n={};return e=o(e,3),i(t,function(t,i,o){r(n,i,e(t,i,o))}),n}},function(t,e,n){var r=n(306),i=n(121),o=n(307),a=n(2);t.exports=function(t,e){return(a(t)?r:i)(t,o(e))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},function(t,e,n){var r=n(62);t.exports=function(t){return"function"==typeof t?t:r}},function(t,e,n){var r=n(309),i=n(8),o="Expected a function";t.exports=function(t,e,n){var a=!0,u=!0;if("function"!=typeof t)throw new TypeError(o);return i(n)&&(a="leading"in n?!!n.leading:a,u="trailing"in n?!!n.trailing:u),r(t,e,{leading:a,maxWait:e,trailing:u})}},function(t,e,n){var r=n(8),i=n(310),o=n(63),a="Expected a function",u=Math.max,c=Math.min;t.exports=function(t,e,n){var s,f,l,d,p,v,h=0,E=!1,g=!1,m=!0;if("function"!=typeof t)throw new TypeError(a);function y(e){var n=s,r=f;return s=f=void 0,h=e,d=t.apply(r,n)}function _(t){var n=t-v;return void 0===v||n>=e||n<0||g&&t-h>=l}function I(){var t=i();if(_(t))return b(t);p=setTimeout(I,function(t){var n=e-(t-v);return g?c(n,l-(t-h)):n}(t))}function b(t){return p=void 0,m&&s?y(t):(s=f=void 0,d)}function T(){var t=i(),n=_(t);if(s=arguments,f=this,v=t,n){if(void 0===p)return function(t){return h=t,p=setTimeout(I,e),E?y(t):d}(v);if(g)return clearTimeout(p),p=setTimeout(I,e),y(v)}return void 0===p&&(p=setTimeout(I,e)),d}return e=o(e)||0,r(n)&&(E=!!n.leading,l=(g="maxWait"in n)?u(o(n.maxWait)||0,e):l,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==p&&clearTimeout(p),h=0,s=v=f=p=void 0},T.flush=function(){return void 0===p?d:b(i())},T}},function(t,e,n){var r=n(6);t.exports=function(){return r.Date.now()}},function(t,e,n){"use strict";var r=n(1)(n(13));Object.defineProperty(e,"__esModule",{value:!0}),e.setStyle=function(t,e,n){t.style[e]=n},e.getStyle=function(t,e){return t.style[e]},e.getProperty=function(t,e){return t[e]},e.matchSelector=function(t){return function(e){return e[a](t)}},e.getQuerySelector=function(t){var e=t.id,n=t.selector;if(e){var r=e;if(-1!==e.indexOf(c)){var i=e.split(c),o=i[0];if(r=i[1],o!==document.documentElement.getAttribute(l))return null}return'[data-w-id="'.concat(r,'"], [data-w-id^="').concat(r,'_instance"]')}return n},e.getValidDocument=function(t){if(null==t||t===document.documentElement.getAttribute(l))return document;return null},e.queryDocument=function(t,e){return Array.prototype.slice.call(document.querySelectorAll(e?t+" "+e:t))},e.elementContains=function(t,e){return t.contains(e)},e.isSiblingNode=function(t,e){return t!==e&&t.parentNode===e.parentNode},e.getChildElements=function(t){for(var e=[],n=0,r=(t||[]).length;n<r;n++){var i=t[n].children,o=i.length;if(o)for(var a=0;a<o;a++)e.push(i[a])}return e},e.getSiblingElements=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[],n=[],r=0,i=t.length;r<i;r++){var o=t[r].parentNode;if(o&&o.children&&o.children.length&&-1===n.indexOf(o)){n.push(o);for(var a=o.firstElementChild;null!=a;)-1===t.indexOf(a)&&e.push(a),a=a.nextElementSibling}}return e},e.getRefType=function(t){if(null!=t&&"object"==(0,r.default)(t))return t instanceof Element?s:f;return null},e.getClosestElement=void 0;var i=n(15),o=n(3),a=i.IX2BrowserSupport.ELEMENT_MATCHES,u=o.IX2EngineConstants,c=u.IX2_ID_DELIMITER,s=u.HTML_ELEMENT,f=u.PLAIN_OBJECT,l=u.WF_PAGE;var d=Element.prototype.closest?function(t,e){return document.documentElement.contains(t)?t.closest(e):null}:function(t,e){if(!document.documentElement.contains(t))return null;var n=t;do{if(n[a]&&n[a](e))return n;n=n.parentNode}while(null!=n);return null};e.getClosestElement=d},function(t,e,n){"use strict";var r,i=n(1),o=i(n(21)),a=i(n(13)),u=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c,s,f,l=u(n(30)),d=u(n(313)),p=u(n(59)),v=u(n(332)),h=n(3),E=n(123),g=n(64),m=n(15),y=h.EventTypeConsts,_=y.MOUSE_CLICK,I=y.MOUSE_SECOND_CLICK,b=y.MOUSE_DOWN,T=y.MOUSE_UP,w=y.MOUSE_OVER,O=y.MOUSE_OUT,A=y.DROPDOWN_CLOSE,S=y.DROPDOWN_OPEN,x=y.SLIDER_ACTIVE,R=y.SLIDER_INACTIVE,N=y.TAB_ACTIVE,C=y.TAB_INACTIVE,L=y.NAVBAR_CLOSE,P=y.NAVBAR_OPEN,D=y.MOUSE_MOVE,M=y.PAGE_SCROLL_DOWN,j=y.SCROLL_INTO_VIEW,F=y.SCROLL_OUT_OF_VIEW,k=y.PAGE_SCROLL_UP,G=y.SCROLLING_IN_VIEW,X=y.PAGE_FINISH,V=y.ECOMMERCE_CART_CLOSE,U=y.ECOMMERCE_CART_OPEN,W=y.PAGE_START,B=y.PAGE_SCROLL,H="COMPONENT_ACTIVE",z="COMPONENT_INACTIVE",K=h.IX2EngineConstants.COLON_DELIMITER,Y=m.IX2VanillaUtils.getNamespacedParameterId,Q=function(t){return function(e){return!("object"!==(0,a.default)(e)||!t(e))||e}},q=Q(function(t){return t.element===t.nativeEvent.target}),$=Q(function(t){var e=t.element,n=t.nativeEvent;return e.contains(n.target)}),Z=(0,d.default)([q,$]),J=function(t,e){if(e){var n=t.getState().ixData.events[e];if(n&&!at[n.eventTypeId])return n}return null},tt=function(t,e){var n=t.store,r=t.event,i=t.element,o=t.eventStateKey,a=r.action,u=r.id,c=a.config,s=c.actionListId,f=c.autoStopEventId,l=J(n,f);return l&&(0,E.stopActionGroup)({store:n,eventId:f,eventTarget:i,eventStateKey:f+K+o.split(K)[1],actionListId:(0,p.default)(l,"action.config.actionListId")}),(0,E.stopActionGroup)({store:n,eventId:u,eventTarget:i,eventStateKey:o,actionListId:s}),(0,E.startActionGroup)({store:n,eventId:u,eventTarget:i,eventStateKey:o,actionListId:s}),e},et=function(t,e){return function(n,r){return!0===t(n,r)?e(n,r):r}},nt={handler:et(Z,tt)},rt=(0,l.default)({},nt,{types:[H,z].join(" ")}),it=[{target:window,types:"resize orientationchange",throttle:!0},{target:document,types:"scroll wheel readystatechange IX2_PAGE_UPDATE",throttle:!0}],ot={types:it},at={PAGE_START:W,PAGE_FINISH:X},ut=(c=void 0!==window.pageXOffset,s="CSS1Compat"===document.compatMode?document.documentElement:document.body,function(){return{scrollLeft:c?window.pageXOffset:s.scrollLeft,scrollTop:c?window.pageYOffset:s.scrollTop,stiffScrollTop:(0,v.default)(c?window.pageYOffset:s.scrollTop,0,s.scrollHeight-window.innerHeight),scrollWidth:s.scrollWidth,scrollHeight:s.scrollHeight,clientWidth:s.clientWidth,clientHeight:s.clientHeight,innerWidth:window.innerWidth,innerHeight:window.innerHeight}}),ct=function(t){var e=t.element,n=t.nativeEvent,r=n.type,i=n.target,o=n.relatedTarget,a=e.contains(i);if("mouseover"===r&&a)return!0;var u=e.contains(o);return!("mouseout"!==r||!a||!u)},st=function(t){var e,n,r=t.element,i=t.event.config,o=ut(),a=o.clientWidth,u=o.clientHeight,c=i.scrollOffsetValue,s="PX"===i.scrollOffsetUnit?c:u*(c||0)/100;return e=r.getBoundingClientRect(),n={left:0,top:s,right:a,bottom:u-s},!(e.left>n.right||e.right<n.left||e.top>n.bottom||e.bottom<n.top)},ft=function(t){return function(e,n){var r=e.nativeEvent.type,i=-1!==[H,z].indexOf(r)?r===H:n.isActive,o=(0,l.default)({},n,{isActive:i});return n&&o.isActive===n.isActive?o:t(e,o)||o}},lt=function(t){return function(e,n){var r={elementHovered:ct(e)};return(n?r.elementHovered!==n.elementHovered:r.elementHovered)&&t(e,r)||r}},dt=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=ut(),i=r.stiffScrollTop,o=r.scrollHeight,a=r.innerHeight,u=e.event,c=u.config,s=u.eventTypeId,f=c.scrollOffsetValue,d="PX"===c.scrollOffsetUnit,p=o-a,v=Number((i/p).toFixed(2));if(n&&n.percentTop===v)return n;var h,E,g=(d?f:a*(f||0)/100)/p,m=0;n&&(h=v>n.percentTop,m=(E=n.scrollingDown!==h)?v:n.anchorTop);var y=s===M?v>=m+g:v<=m-g,_=(0,l.default)({},n,{percentTop:v,inBounds:y,anchorTop:m,scrollingDown:h});return n&&y&&(E||_.inBounds!==n.inBounds)&&t(e,_)||_}},pt=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{clickCount:0},r={clickCount:n.clickCount%2+1};return r.clickCount!==n.clickCount&&t(e,r)||r}},vt=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return(0,l.default)({},rt,{handler:et(t?Z:q,ft(function(t,e){return e.isActive?nt.handler(t,e):e}))})},ht=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return(0,l.default)({},rt,{handler:et(t?Z:q,ft(function(t,e){return e.isActive?e:nt.handler(t,e)}))})},Et=(0,l.default)({},ot,{handler:(f=function(t,e){var n=e.elementVisible,r=t.event;return!t.store.getState().ixData.events[r.action.config.autoStopEventId]&&e.triggered?e:r.eventTypeId===j===n?(tt(t),(0,l.default)({},e,{triggered:!0})):e},function(t,e){var n=(0,l.default)({},e,{elementVisible:st(t)});return(e?n.elementVisible!==e.elementVisible:n.elementVisible)&&f(t,n)||n})}),gt=(r={},(0,o.default)(r,x,vt()),(0,o.default)(r,R,ht()),(0,o.default)(r,S,vt()),(0,o.default)(r,A,ht()),(0,o.default)(r,P,vt(!1)),(0,o.default)(r,L,ht(!1)),(0,o.default)(r,N,vt()),(0,o.default)(r,C,ht()),(0,o.default)(r,U,{types:"ecommerce-cart-open",handler:et(Z,tt)}),(0,o.default)(r,V,{types:"ecommerce-cart-close",handler:et(Z,tt)}),(0,o.default)(r,_,{types:"click",handler:et(Z,pt(function(t,e){var n,r,i,o=e.clickCount;r=(n=t).store,i=n.event.action.config.autoStopEventId,Boolean(J(r,i))?1===o&&tt(t):tt(t)}))}),(0,o.default)(r,I,{types:"click",handler:et(Z,pt(function(t,e){2===e.clickCount&&tt(t)}))}),(0,o.default)(r,b,(0,l.default)({},nt,{types:"mousedown"})),(0,o.default)(r,T,(0,l.default)({},nt,{types:"mouseup"})),(0,o.default)(r,w,{types:"mouseover mouseout",handler:et(Z,lt(function(t,e){e.elementHovered&&tt(t)}))}),(0,o.default)(r,O,{types:"mouseover mouseout",handler:et(Z,lt(function(t,e){e.elementHovered||tt(t)}))}),(0,o.default)(r,D,{types:"mousemove mouseout scroll",handler:function(t){var e=t.store,n=t.element,r=t.eventConfig,i=t.nativeEvent,o=t.eventStateKey,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{clientX:0,clientY:0,pageX:0,pageY:0},u=r.basedOn,c=r.selectedAxis,s=r.continuousParameterGroupId,f=r.reverse,l=r.restingState,d=void 0===l?0:l,p=i.clientX,v=void 0===p?a.clientX:p,E=i.clientY,m=void 0===E?a.clientY:E,y=i.pageX,_=void 0===y?a.pageX:y,I=i.pageY,b=void 0===I?a.pageY:I,T="X_AXIS"===c,w="mouseout"===i.type,O=d/100,A=s,S=!1;switch(u){case h.EventBasedOn.VIEWPORT:O=T?Math.min(v,window.innerWidth)/window.innerWidth:Math.min(m,window.innerHeight)/window.innerHeight;break;case h.EventBasedOn.PAGE:var x=ut(),R=x.scrollLeft,N=x.scrollTop,C=x.scrollWidth,L=x.scrollHeight;O=T?Math.min(R+_,C)/C:Math.min(N+b,L)/L;break;case h.EventBasedOn.ELEMENT:default:A=Y(o,s);var P=0===i.type.indexOf("mouse");if(P&&!0!==Z({element:n,nativeEvent:i}))break;var D=n.getBoundingClientRect(),M=D.left,j=D.top,F=D.width,k=D.height;if(!P&&!function(t,e){return t.left>e.left&&t.left<e.right&&t.top>e.top&&t.top<e.bottom}({left:v,top:m},D))break;S=!0,O=T?(v-M)/F:(m-j)/k}return w&&(O>.95||O<.05)&&(O=Math.round(O)),(u!==h.EventBasedOn.ELEMENT||S||S!==a.elementHovered)&&(O=f?1-O:O,e.dispatch((0,g.parameterChanged)(A,O))),{elementHovered:S,clientX:v,clientY:m,pageX:_,pageY:b}}}),(0,o.default)(r,B,{types:it,handler:function(t){var e=t.store,n=t.eventConfig,r=n.continuousParameterGroupId,i=n.reverse,o=ut(),a=o.scrollTop/(o.scrollHeight-o.clientHeight);a=i?1-a:a,e.dispatch((0,g.parameterChanged)(r,a))}}),(0,o.default)(r,G,{types:it,handler:function(t){var e=t.element,n=t.store,r=t.eventConfig,i=t.eventStateKey,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{scrollPercent:0},a=ut(),u=a.scrollLeft,c=a.scrollTop,s=a.scrollWidth,f=a.scrollHeight,l=a.clientHeight,d=r.basedOn,p=r.selectedAxis,v=r.continuousParameterGroupId,E=r.startsEntering,m=r.startsExiting,y=r.addEndOffset,_=r.addStartOffset,I=r.addOffsetValue,b=void 0===I?0:I,T=r.endOffsetValue,w=void 0===T?0:T,O="X_AXIS"===p;if(d===h.EventBasedOn.VIEWPORT){var A=O?u/s:c/f;return A!==o.scrollPercent&&n.dispatch((0,g.parameterChanged)(v,A)),{scrollPercent:A}}var S=Y(i,v),x=e.getBoundingClientRect(),R=(_?b:0)/100,N=(y?w:0)/100;R=E?R:1-R,N=m?N:1-N;var C=x.top+Math.min(x.height*R,l),L=x.top+x.height*N-C,P=Math.min(l+L,f),D=Math.min(Math.max(0,l-C),P)/P;return D!==o.scrollPercent&&n.dispatch((0,g.parameterChanged)(S,D)),{scrollPercent:D}}}),(0,o.default)(r,j,Et),(0,o.default)(r,F,Et),(0,o.default)(r,M,(0,l.default)({},ot,{handler:dt(function(t,e){e.scrollingDown&&tt(t)})})),(0,o.default)(r,k,(0,l.default)({},ot,{handler:dt(function(t,e){e.scrollingDown||tt(t)})})),(0,o.default)(r,X,{types:"readystatechange IX2_PAGE_UPDATE",handler:et(q,function(t){return function(e,n){var r={finished:"complete"===document.readyState};return!r.finished||n&&n.finshed||t(e),r}}(tt))}),(0,o.default)(r,W,{types:"readystatechange IX2_PAGE_UPDATE",handler:et(q,function(t){return function(e,n){return n||t(e),{started:!0}}}(tt))}),r);e.default=gt},function(t,e,n){var r=n(314)();t.exports=r},function(t,e,n){var r=n(65),i=n(315),o=n(127),a=n(128),u=n(2),c=n(328),s="Expected a function",f=8,l=32,d=128,p=256;t.exports=function(t){return i(function(e){var n=e.length,i=n,v=r.prototype.thru;for(t&&e.reverse();i--;){var h=e[i];if("function"!=typeof h)throw new TypeError(s);if(v&&!E&&"wrapper"==a(h))var E=new r([],!0)}for(i=E?i:n;++i<n;){h=e[i];var g=a(h),m="wrapper"==g?o(h):void 0;E=m&&c(m[0])&&m[1]==(d|f|l|p)&&!m[4].length&&1==m[9]?E[a(m[0])].apply(E,m[3]):1==h.length&&c(h)?E[g]():E.thru(h)}return function(){var t=arguments,r=t[0];if(E&&1==t.length&&u(r))return E.plant(r).value();for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o);return o}})}},function(t,e,n){var r=n(316),i=n(319),o=n(321);t.exports=function(t){return o(i(t,void 0,r),t+"")}},function(t,e,n){var r=n(317);t.exports=function(t){return null!=t&&t.length?r(t,1):[]}},function(t,e,n){var r=n(51),i=n(318);t.exports=function t(e,n,o,a,u){var c=-1,s=e.length;for(o||(o=i),u||(u=[]);++c<s;){var f=e[c];n>0&&o(f)?n>1?t(f,n-1,o,a,u):r(u,f):a||(u[u.length]=f)}return u}},function(t,e,n){var r=n(23),i=n(36),o=n(2),a=r?r.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||i(t)||!!(a&&t&&t[a])}},function(t,e,n){var r=n(320),i=Math.max;t.exports=function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,a=-1,u=i(o.length-e,0),c=Array(u);++a<u;)c[a]=o[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=o[a];return s[e]=n(c),r(t,this,s)}}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(322),i=n(324)(r);t.exports=i},function(t,e,n){var r=n(323),i=n(125),o=n(62),a=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:o;t.exports=a},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var n=800,r=16,i=Date.now;t.exports=function(t){var e=0,o=0;return function(){var a=i(),u=r-(a-o);if(o=a,u>0){if(++e>=n)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,n){var r=n(109),i=r&&new r;t.exports=i},function(t,e){t.exports=function(){}},function(t,e){t.exports={}},function(t,e,n){var r=n(67),i=n(127),o=n(128),a=n(329);t.exports=function(t){var e=o(t),n=a[e];if("function"!=typeof n||!(e in r.prototype))return!1;if(t===n)return!0;var u=i(n);return!!u&&t===u[0]}},function(t,e,n){var r=n(67),i=n(65),o=n(66),a=n(2),u=n(12),c=n(330),s=Object.prototype.hasOwnProperty;function f(t){if(u(t)&&!a(t)&&!(t instanceof r)){if(t instanceof i)return t;if(s.call(t,"__wrapped__"))return c(t)}return new i(t)}f.prototype=o.prototype,f.prototype.constructor=f,t.exports=f},function(t,e,n){var r=n(67),i=n(65),o=n(331);t.exports=function(t){if(t instanceof r)return t.clone();var e=new i(t.__wrapped__,t.__chain__);return e.__actions__=o(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e,n){var r=n(333),i=n(63);t.exports=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=i(n))==n?n:0),void 0!==e&&(e=(e=i(e))==e?e:0),r(i(t),e,n)}},function(t,e){t.exports=function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}},function(t,e,n){"use strict";var r=n(4);r.define("links",t.exports=function(t,e){var n,i,o,a={},u=t(window),c=r.env(),s=window.location,f=document.createElement("a"),l="w--current",d=/index\.(html|php)$/,p=/\/$/;function v(e){var r=n&&e.getAttribute("href-disabled")||e.getAttribute("href");if(f.href=r,!(r.indexOf(":")>=0)){var a=t(e);if(f.hash.length>1&&f.host+f.pathname===s.host+s.pathname){if(!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash))return;var u=t(f.hash);u.length&&i.push({link:a,sec:u,active:!1})}else if("#"!==r&&""!==r){var c=f.href===s.href||r===o||d.test(r)&&p.test(o);E(a,l,c)}}}function h(){var t=u.scrollTop(),n=u.height();e.each(i,function(e){var r=e.link,i=e.sec,o=i.offset().top,a=i.outerHeight(),u=.5*n,c=i.is(":visible")&&o+a-u>=t&&o+u<=t+n;e.active!==c&&(e.active=c,E(r,l,c))})}function E(t,e,n){var r=t.hasClass(e);n&&r||(n||r)&&(n?t.addClass(e):t.removeClass(e))}return a.ready=a.design=a.preview=function(){n=c&&r.env("design"),o=r.env("slug")||s.pathname||"",r.scroll.off(h),i=[];for(var t=document.links,e=0;e<t.length;++e)v(t[e]);i.length&&(r.scroll.on(h),h())},a})},function(t,e,n){"use strict";var r=n(4);r.define("scroll",t.exports=function(t){var e={WF_CLICK_EMPTY:"click.wf-empty-link",WF_CLICK_SCROLL:"click.wf-scroll"},n=window.location,i=function(){try{return Boolean(window.frameElement)}catch(t){return!0}}()?null:window.history,o=t(window),a=t(document),u=t(document.body),c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},s=r.env("editor")?".w-editor-body":"body",f="header, "+s+" > .header, "+s+" > .w-nav:not([data-no-scroll])",l='a[href="#"]',d='a[href*="#"]:not(.w-tab-link):not('+l+")",p=document.createElement("style");p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));var v=/^#[a-zA-Z0-9][\w:.-]*$/;var h="function"==typeof window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)");function E(t,e){var n;switch(e){case"add":(n=t.attr("tabindex"))?t.attr("data-wf-tabindex-swap",n):t.attr("tabindex","-1");break;case"remove":(n=t.attr("data-wf-tabindex-swap"))?(t.attr("tabindex",n),t.removeAttr("data-wf-tabindex-swap")):t.removeAttr("tabindex")}t.toggleClass("wf-force-outline-none","add"===e)}function g(e){var a=e.currentTarget;if(!(r.env("design")||window.$.mobile&&/(?:^|\s)ui-link(?:$|\s)/.test(a.className))){var s,l=(s=a,v.test(s.hash)&&s.host+s.pathname===n.host+n.pathname?a.hash:"");if(""!==l){var d=t(l);d.length&&(e&&(e.preventDefault(),e.stopPropagation()),function(t){if(n.hash!==t&&i&&i.pushState&&(!r.env.chrome||"file:"!==n.protocol)){var e=i.state&&i.state.hash;e!==t&&i.pushState({hash:t},"",t)}}(l),window.setTimeout(function(){!function(e,n){var r=o.scrollTop(),i=function(e){var n=t(f),r="fixed"===n.css("position")?n.outerHeight():0,i=e.offset().top-r;if("mid"===e.data("scroll")){var a=o.height()-r,u=e.outerHeight();u<a&&(i-=Math.round((a-u)/2))}return i}(e);if(r===i)return;var a=function(t,e,n){if("none"===document.body.getAttribute("data-wf-scroll-motion")||h.matches)return 0;var r=1;return u.add(t).each(function(t,e){var n=parseFloat(e.getAttribute("data-scroll-time"));!isNaN(n)&&n>=0&&(r=n)}),(472.143*Math.log(Math.abs(e-n)+125)-2e3)*r}(e,r,i),s=Date.now();c(function t(){var e=Date.now()-s;window.scroll(0,function(t,e,n,r){return n>r?e:t+(e-t)*((i=n/r)<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1);var i}(r,i,e,a)),e<=a?c(t):"function"==typeof n&&n()})}(d,function(){E(d,"add"),d.get(0).focus({preventScroll:!0}),E(d,"remove")})},e?0:300))}}}return{ready:function(){var t=e.WF_CLICK_EMPTY,n=e.WF_CLICK_SCROLL;a.on(n,d,g),a.on(t,l,function(t){t.preventDefault()}),document.head.insertBefore(p,document.head.firstChild)}}})},function(t,e,n){"use strict";n(4).define("touch",t.exports=function(t){var e={},n=window.getSelection;function r(e){var r,i,o=!1,a=!1,u=Math.min(Math.round(.04*window.innerWidth),40);function c(t){var e=t.touches;e&&e.length>1||(o=!0,e?(a=!0,r=e[0].clientX):r=t.clientX,i=r)}function s(e){if(o){if(a&&"mousemove"===e.type)return e.preventDefault(),void e.stopPropagation();var r=e.touches,c=r?r[0].clientX:e.clientX,s=c-i;i=c,Math.abs(s)>u&&n&&""===String(n())&&(!function(e,n,r){var i=t.Event(e,{originalEvent:n});t(n.target).trigger(i,r)}("swipe",e,{direction:s>0?"right":"left"}),l())}}function f(t){if(o)return o=!1,a&&"mouseup"===t.type?(t.preventDefault(),t.stopPropagation(),void(a=!1)):void 0}function l(){o=!1}e.addEventListener("touchstart",c,!1),e.addEventListener("touchmove",s,!1),e.addEventListener("touchend",f,!1),e.addEventListener("touchcancel",l,!1),e.addEventListener("mousedown",c,!1),e.addEventListener("mousemove",s,!1),e.addEventListener("mouseup",f,!1),e.addEventListener("mouseout",l,!1),this.destroy=function(){e.removeEventListener("touchstart",c,!1),e.removeEventListener("touchmove",s,!1),e.removeEventListener("touchend",f,!1),e.removeEventListener("touchcancel",l,!1),e.removeEventListener("mousedown",c,!1),e.removeEventListener("mousemove",s,!1),e.removeEventListener("mouseup",f,!1),e.removeEventListener("mouseout",l,!1),e=null}}return t.event.special.tap={bindType:"click",delegateType:"click"},e.init=function(e){return(e="string"==typeof e?t(e).get(0):e)?new r(e):null},e.instance=e.init(document),e})},function(t,e,n){"use strict";var r=n(4),i="w-condition-invisible",o="."+i;function a(t){return Boolean(t.$el&&t.$el.closest(o).length)}function u(t,e){for(var n=t;n>=0;n--)if(!a(e[n]))return n;return-1}function c(t,e){for(var n=t;n<=e.length-1;n++)if(!a(e[n]))return n;return-1}function s(t,e){t.attr("aria-label")||t.attr("aria-label",e)}function f(t,e,n,r){var o,f,l,d=n.tram,p=Array.isArray,v="w-lightbox-",h=/(^|\s+)/g,E=[],g=[];function m(t,e){return E=p(t)?t:[t],f||m.build(),function(t){return t.filter(function(t){return!a(t)})}(E).length>1&&(f.items=f.empty,E.forEach(function(t,e){var n=k("thumbnail"),r=k("item").prop("tabIndex",0).attr("aria-controls","w-lightbox-view").attr("role","tab").append(n);s(r,"show item ".concat(e+1," of ").concat(E.length)),a(t)&&r.addClass(i),f.items=f.items.add(r),N(t.thumbnailUrl||t.url,function(t){t.prop("width")>t.prop("height")?D(t,"wide"):D(t,"tall"),n.append(D(t,"thumbnail-image"))})}),f.strip.empty().append(f.items),D(f.content,"group")),d(M(f.lightbox,"hide").trigger("focus")).add("opacity .3s").start({opacity:1}),D(f.html,"noscroll"),m.show(e||0)}function y(t){return function(e){this===e.target&&(e.stopPropagation(),e.preventDefault(),t())}}m.build=function(){return m.destroy(),(f={html:n(e.documentElement),empty:n()}).arrowLeft=k("control left inactive").attr("role","button").attr("aria-hidden",!0).attr("aria-controls","w-lightbox-view"),f.arrowRight=k("control right inactive").attr("role","button").attr("aria-hidden",!0).attr("aria-controls","w-lightbox-view"),f.close=k("control close").attr("role","button"),s(f.arrowLeft,"previous image"),s(f.arrowRight,"next image"),s(f.close,"close lightbox"),f.spinner=k("spinner").attr("role","progressbar").attr("aria-live","polite").attr("aria-hidden",!1).attr("aria-busy",!0).attr("aria-valuemin",0).attr("aria-valuemax",100).attr("aria-valuenow",0).attr("aria-valuetext","Loading image"),f.strip=k("strip").attr("role","tablist"),l=new C(f.spinner,L("hide")),f.content=k("content").append(f.spinner,f.arrowLeft,f.arrowRight,f.close),f.container=k("container").append(f.content,f.strip),f.lightbox=k("backdrop hide").append(f.container),f.strip.on("click",P("item"),T),f.content.on("swipe",w).on("click",P("left"),_).on("click",P("right"),I).on("click",P("close"),b).on("click",P("image, caption"),I),f.container.on("click",P("view"),b).on("dragstart",P("img"),A),f.lightbox.on("keydown",S).on("focusin",O),n(r).append(f.lightbox),m},m.destroy=function(){f&&(M(f.html,"noscroll"),f.lightbox.remove(),f=void 0)},m.show=function(t){if(t!==o){var e=E[t];if(!e)return m.hide();if(a(e)){if(t<o){var r=u(t-1,E);t=r>-1?r:t}else{var i=c(t+1,E);t=i>-1?i:t}e=E[t]}var s,p,v=o;return o=t,f.spinner.attr("aria-hidden",!1).attr("aria-busy",!0).attr("aria-valuenow",0).attr("aria-valuetext","Loading image"),l.show(),N(e.html&&(s=e.width,p=e.height,"data:image/svg+xml;charset=utf-8,"+encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="'+s+'" height="'+p+'"/>'))||e.url,function(r){if(t===o){var i,a,s=k("figure","figure").append(D(r,"image")),p=k("frame").append(s),h=k("view").prop("tabIndex",0).attr("id","w-lightbox-view").append(p);e.html&&((a=(i=n(e.html)).is("iframe"))&&i.on("load",g),s.append(D(i,"embed"))),e.caption&&s.append(k("caption","figcaption").text(e.caption)),f.spinner.before(h),a||g()}function g(){if(f.spinner.attr("aria-hidden",!0).attr("aria-busy",!1).attr("aria-valuenow",100).attr("aria-valuetext","Loaded image"),l.hide(),t===o){var e=function(t,e){return-1===u(t-1,e)}(t,E);j(f.arrowLeft,"inactive",e),F(f.arrowLeft,e),e&&f.arrowLeft.is(":focus")&&f.arrowRight.focus();var n,r=function(t,e){return-1===c(t+1,e)}(t,E);if(j(f.arrowRight,"inactive",r),F(f.arrowRight,r),r&&f.arrowRight.is(":focus")&&f.arrowLeft.focus(),f.view?(d(f.view).add("opacity .3s").start({opacity:0}).then((n=f.view,function(){n.remove()})),d(h).add("opacity .3s").add("transform .3s").set({x:t>v?"80px":"-80px"}).start({opacity:1,x:0})):h.css("opacity",1),f.view=h,f.view.prop("tabIndex",0),f.items){M(f.items,"active"),f.items.removeAttr("aria-selected");var i=f.items.eq(t);D(i,"active"),i.attr("aria-selected",!0),function(t){var e,n=t.get(0),r=f.strip.get(0),i=n.offsetLeft,o=n.clientWidth,a=r.scrollLeft,u=r.clientWidth,c=r.scrollWidth-u;i<a?e=Math.max(0,i+o-u):i+o>u+a&&(e=Math.min(i,c));null!=e&&d(f.strip).add("scroll-left 500ms").start({"scroll-left":e})}(i)}}else h.remove()}}),f.close.prop("tabIndex",0),n(":focus").addClass("active-lightbox"),0===g.length&&(n("body").children().each(function(){n(this).hasClass("w-lightbox-backdrop")||n(this).is("script")||(g.push({node:n(this),hidden:n(this).attr("aria-hidden"),tabIndex:n(this).attr("tabIndex")}),n(this).attr("aria-hidden",!0).attr("tabIndex",-1))}),f.close.focus()),m}},m.hide=function(){return d(f.lightbox).add("opacity .3s").start({opacity:0}).then(R),m},m.prev=function(){var t=u(o-1,E);t>-1&&m.show(t)},m.next=function(){var t=c(o+1,E);t>-1&&m.show(t)};var _=y(m.prev),I=y(m.next),b=y(m.hide),T=function(t){var e=n(this).index();t.preventDefault(),m.show(e)},w=function(t,e){t.preventDefault(),"left"===e.direction?m.next():"right"===e.direction&&m.prev()},O=function(){this.focus()};function A(t){t.preventDefault()}function S(t){var e=t.keyCode;27===e||x(e,"close")?m.hide():37===e||x(e,"left")?m.prev():39===e||x(e,"right")?m.next():x(e,"item")&&n(":focus").click()}function x(t,e){if(13!==t&&32!==t)return!1;var r=n(":focus").attr("class"),i=L(e).trim();return r.includes(i)}function R(){f&&(f.strip.scrollLeft(0).empty(),M(f.html,"noscroll"),D(f.lightbox,"hide"),f.view&&f.view.remove(),M(f.content,"group"),D(f.arrowLeft,"inactive"),D(f.arrowRight,"inactive"),o=f.view=void 0,g.forEach(function(t){var e=t.node;e&&(t.hidden?e.attr("aria-hidden",t.hidden):e.removeAttr("aria-hidden"),t.tabIndex?e.attr("tabIndex",t.tabIndex):e.removeAttr("tabIndex"))}),g=[],n(".active-lightbox").removeClass("active-lightbox").focus())}function N(t,e){var n=k("img","img");return n.one("load",function(){e(n)}),n.attr("src",t),n}function C(t,e,n){this.$element=t,this.className=e,this.delay=n||200,this.hide()}function L(t,e){return t.replace(h,(e?" .":" ")+v)}function P(t){return L(t,!0)}function D(t,e){return t.addClass(L(e))}function M(t,e){return t.removeClass(L(e))}function j(t,e,n){return t.toggleClass(L(e),n)}function F(t,e){return t.attr("aria-hidden",e).attr("tabIndex",e?-1:0)}function k(t,r){return D(n(e.createElement(r||"div")),t)}return C.prototype.show=function(){var t=this;t.timeoutId||(t.timeoutId=setTimeout(function(){t.$element.removeClass(t.className),delete t.timeoutId},t.delay))},C.prototype.hide=function(){if(this.timeoutId)return clearTimeout(this.timeoutId),void delete this.timeoutId;this.$element.addClass(this.className)},function(){var n=t.navigator.userAgent,r=n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);if(n.indexOf("Android ")>-1&&-1===n.indexOf("Chrome")||r&&!(r[2]>7)){var i=e.createElement("style");e.head.appendChild(i),t.addEventListener("resize",o,!0),o()}function o(){var e=t.innerHeight,n=t.innerWidth,r=".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:"+e+"px}.w-lightbox-view {width:"+n+"px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:"+.86*e+"px}.w-lightbox-image {max-width:"+n+"px;max-height:"+e+"px}.w-lightbox-group .w-lightbox-image {max-height:"+.86*e+"px}.w-lightbox-strip {padding: 0 "+.01*e+"px}.w-lightbox-item {width:"+.1*e+"px;padding:"+.02*e+"px "+.01*e+"px}.w-lightbox-thumbnail {height:"+.1*e+"px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:"+.96*e+"px}.w-lightbox-content {margin-top:"+.02*e+"px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:"+.84*e+"px}.w-lightbox-image {max-width:"+.96*n+"px;max-height:"+.96*e+"px}.w-lightbox-group .w-lightbox-image {max-width:"+.823*n+"px;max-height:"+.84*e+"px}}";i.textContent=r}}(),m}r.define("lightbox",t.exports=function(t){var e,n,i,o={},a=r.env(),u=f(window,document,t,a?"#lightbox-mountpoint":"body"),c=t(document),l=".w-lightbox";function d(t){var e,n,r=t.el.children(".w-json").html();if(r){try{r=JSON.parse(r)}catch(t){console.error("Malformed lightbox JSON configuration.",t)}!function(t){t.images&&(t.images.forEach(function(t){t.type="image"}),t.items=t.images);t.embed&&(t.embed.type="video",t.items=[t.embed]);t.groupId&&(t.group=t.groupId)}(r),r.items.forEach(function(e){e.$el=t.el}),(e=r.group)?((n=i[e])||(n=i[e]=[]),t.items=n,r.items.length&&(t.index=n.length,n.push.apply(n,r.items))):(t.items=r.items,t.index=0)}else t.items=[]}return o.ready=o.design=o.preview=function(){n=a&&r.env("design"),u.destroy(),i={},(e=c.find(l)).webflowLightBox(),e.each(function(){s(t(this),"open lightbox"),t(this).attr("aria-haspopup","dialog")})},jQuery.fn.extend({webflowLightBox:function(){t.each(this,function(e,r){var i=t.data(r,l);i||(i=t.data(r,l,{el:t(r),mode:"images",images:[],embed:""})),i.el.off(l),d(i),n?i.el.on("setting"+l,d.bind(null,i)):i.el.on("click"+l,function(t){return function(){t.items.length&&u(t.items,t.index||0)}}(i)).on("click"+l,function(t){t.preventDefault()})})}}),o})},function(t,e,n){"use strict";var r=n(4),i=n(69),o={ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,ESCAPE:27,SPACE:32,ENTER:13,HOME:36,END:35};r.define("navbar",t.exports=function(t,e){var n,a,u,c,s={},f=t.tram,l=t(window),d=t(document),p=e.debounce,v=r.env(),h='<div class="w-nav-overlay" data-wf-ignore />',E=".w-nav",g="w--open",m="w--nav-dropdown-open",y="w--nav-dropdown-toggle-open",_="w--nav-dropdown-list-open",I="w--nav-link-open",b=i.triggers,T=t();function w(){r.resize.off(O)}function O(){a.each(M)}function A(n,r){var i=t(r),a=t.data(r,E);a||(a=t.data(r,E,{open:!1,el:i,config:{},selectedIdx:-1})),a.menu=i.find(".w-nav-menu"),a.links=a.menu.find(".w-nav-link"),a.dropdowns=a.menu.find(".w-dropdown"),a.dropdownToggle=a.menu.find(".w-dropdown-toggle"),a.dropdownList=a.menu.find(".w-dropdown-list"),a.button=i.find(".w-nav-button"),a.container=i.find(".w-container"),a.overlayContainerId="w-nav-overlay-"+n,a.outside=function(e){e.outside&&d.off("click"+E,e.outside);return function(n){var r=t(n.target);c&&r.closest(".w-editor-bem-EditorOverlay").length||D(e,r)}}(a);var s=i.find(".w-nav-brand");s&&"/"===s.attr("href")&&null==s.attr("aria-label")&&s.attr("aria-label","home"),a.button.attr("style","-webkit-user-select: text;"),null==a.button.attr("aria-label")&&a.button.attr("aria-label","menu"),a.button.attr("role","button"),a.button.attr("tabindex","0"),a.button.attr("aria-controls",a.overlayContainerId),a.button.attr("aria-haspopup","menu"),a.button.attr("aria-expanded","false"),a.el.off(E),a.button.off(E),a.menu.off(E),R(a),u?(x(a),a.el.on("setting"+E,function(t){return function(n,r){r=r||{};var i=l.width();R(t),!0===r.open&&G(t,!0),!1===r.open&&V(t,!0),t.open&&e.defer(function(){i!==l.width()&&C(t)})}}(a))):(!function(e){if(e.overlay)return;e.overlay=t(h).appendTo(e.el),e.overlay.attr("id",e.overlayContainerId),e.parent=e.menu.parent(),V(e,!0)}(a),a.button.on("click"+E,L(a)),a.menu.on("click"+E,"a",P(a)),a.button.on("keydown"+E,function(t){return function(e){switch(e.keyCode){case o.SPACE:case o.ENTER:return L(t)(),e.preventDefault(),e.stopPropagation();case o.ESCAPE:return V(t),e.preventDefault(),e.stopPropagation();case o.ARROW_RIGHT:case o.ARROW_DOWN:case o.HOME:case o.END:return t.open?(e.keyCode===o.END?t.selectedIdx=t.links.length-1:t.selectedIdx=0,N(t),e.preventDefault(),e.stopPropagation()):(e.preventDefault(),e.stopPropagation())}}}(a)),a.el.on("keydown"+E,function(t){return function(e){if(t.open)switch(t.selectedIdx=t.links.index(document.activeElement),e.keyCode){case o.HOME:case o.END:return e.keyCode===o.END?t.selectedIdx=t.links.length-1:t.selectedIdx=0,N(t),e.preventDefault(),e.stopPropagation();case o.ESCAPE:return V(t),t.button.focus(),e.preventDefault(),e.stopPropagation();case o.ARROW_LEFT:case o.ARROW_UP:return t.selectedIdx=Math.max(-1,t.selectedIdx-1),N(t),e.preventDefault(),e.stopPropagation();case o.ARROW_RIGHT:case o.ARROW_DOWN:return t.selectedIdx=Math.min(t.links.length-1,t.selectedIdx+1),N(t),e.preventDefault(),e.stopPropagation()}}}(a))),M(n,r)}function S(e,n){var r=t.data(n,E);r&&(x(r),t.removeData(n,E))}function x(t){t.overlay&&(V(t,!0),t.overlay.remove(),t.overlay=null)}function R(t){var n={},r=t.config||{},i=n.animation=t.el.attr("data-animation")||"default";n.animOver=/^over/.test(i),n.animDirect=/left$/.test(i)?-1:1,r.animation!==i&&t.open&&e.defer(C,t),n.easing=t.el.attr("data-easing")||"ease",n.easing2=t.el.attr("data-easing2")||"ease";var o=t.el.attr("data-duration");n.duration=null!=o?Number(o):400,n.docHeight=t.el.attr("data-doc-height"),t.config=n}function N(t){if(t.links[t.selectedIdx]){var e=t.links[t.selectedIdx];e.focus(),P(e)}}function C(t){t.open&&(V(t,!0),G(t,!0))}function L(t){return p(function(){t.open?V(t):G(t)})}function P(e){return function(n){var i=t(this).attr("href");r.validClick(n.currentTarget)?i&&0===i.indexOf("#")&&e.open&&V(e):n.preventDefault()}}s.ready=s.design=s.preview=function(){if(u=v&&r.env("design"),c=r.env("editor"),n=t(document.body),!(a=d.find(E)).length)return;a.each(A),w(),r.resize.on(O)},s.destroy=function(){T=t(),w(),a&&a.length&&a.each(S)};var D=p(function(t,e){if(t.open){var n=e.closest(".w-nav-menu");t.menu.is(n)||V(t)}});function M(e,n){var r=t.data(n,E),i=r.collapsed="none"!==r.button.css("display");if(!r.open||i||u||V(r,!0),r.container.length){var o=function(e){var n=e.container.css(j);"none"===n&&(n="");return function(e,r){(r=t(r)).css(j,""),"none"===r.css(j)&&r.css(j,n)}}(r);r.links.each(o),r.dropdowns.each(o)}r.open&&X(r)}var j="max-width";function F(t,e){e.setAttribute("data-nav-menu-open","")}function k(t,e){e.removeAttribute("data-nav-menu-open")}function G(t,e){if(!t.open){t.open=!0,t.menu.each(F),t.links.addClass(I),t.dropdowns.addClass(m),t.dropdownToggle.addClass(y),t.dropdownList.addClass(_),t.button.addClass(g);var n=t.config;("none"===n.animation||!f.support.transform||n.duration<=0)&&(e=!0);var i=X(t),o=t.menu.outerHeight(!0),a=t.menu.outerWidth(!0),c=t.el.height(),s=t.el[0];if(M(0,s),b.intro(0,s),r.redraw.up(),u||d.on("click"+E,t.outside),e)v();else{var l="transform "+n.duration+"ms "+n.easing;if(t.overlay&&(T=t.menu.prev(),t.overlay.show().append(t.menu)),n.animOver)return f(t.menu).add(l).set({x:n.animDirect*a,height:i}).start({x:0}).then(v),void(t.overlay&&t.overlay.width(a));var p=c+o;f(t.menu).add(l).set({y:-p}).start({y:0}).then(v)}}function v(){t.button.attr("aria-expanded","true")}}function X(t){var e=t.config,r=e.docHeight?d.height():n.height();return e.animOver?t.menu.height(r):"fixed"!==t.el.css("position")&&(r-=t.el.outerHeight(!0)),t.overlay&&t.overlay.height(r),r}function V(t,e){if(t.open){t.open=!1,t.button.removeClass(g);var n=t.config;if(("none"===n.animation||!f.support.transform||n.duration<=0)&&(e=!0),b.outro(0,t.el[0]),d.off("click"+E,t.outside),e)return f(t.menu).stop(),void c();var r="transform "+n.duration+"ms "+n.easing2,i=t.menu.outerHeight(!0),o=t.menu.outerWidth(!0),a=t.el.height();if(n.animOver)f(t.menu).add(r).start({x:o*n.animDirect}).then(c);else{var u=a+i;f(t.menu).add(r).start({y:-u}).then(c)}}function c(){t.menu.height(""),f(t.menu).set({x:0,y:0}),t.menu.each(k),t.links.removeClass(I),t.dropdowns.removeClass(m),t.dropdownToggle.removeClass(y),t.dropdownList.removeClass(_),t.overlay&&t.overlay.children().length&&(T.length?t.menu.insertAfter(T):t.menu.prependTo(t.parent),t.overlay.attr("style","").hide()),t.el.triggerHandler("w-close"),t.button.attr("aria-expanded","false")}}return s})}]);/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e-2":{"id":"e-2","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5da34cabae7ebd7268d933da","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"5da34cabae7ebd7268d933da","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1570995502584},"e-3":{"id":"e-3","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-3","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"338d12ba-e28e-e439-2671-b5b5bc61bfea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"338d12ba-e28e-e439-2671-b5b5bc61bfea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-3-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1571064067338},"e-10":{"id":"e-10","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5da34d3aae7ebd5c6bd93df5","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"5da34d3aae7ebd5c6bd93df5","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1571436688758},"e-12":{"id":"e-12","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5daa7f620d705b8dcf7e872d|f5678024-19bd-6602-a749-fac99038ac69","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5daa7f620d705b8dcf7e872d|f5678024-19bd-6602-a749-fac99038ac69","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1571454893450},"e-16":{"id":"e-16","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5daa7f620d705b8dcf7e872d","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"5daa7f620d705b8dcf7e872d","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1571457780797},"e-17":{"id":"e-17","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5dab2146e9af6ece18e112e3|b833d3b2-217c-79ac-e443-03afd1668321","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5dab2146e9af6ece18e112e3|b833d3b2-217c-79ac-e443-03afd1668321","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1571577964610},"e-18":{"id":"e-18","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5dab2146e9af6ece18e112e3|b833d3b2-217c-79ac-e443-03afd1668321","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5dab2146e9af6ece18e112e3|b833d3b2-217c-79ac-e443-03afd1668321","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1571577964611},"e-19":{"id":"e-19","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5dab2146e9af6ece18e112e3","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"5dab2146e9af6ece18e112e3","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1571578094884},"e-21":{"id":"e-21","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-12","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5dac6dc806d077312ee2522e|09e4849c-4550-bb41-c090-d0e7b1c0f6d8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5dac6dc806d077312ee2522e|09e4849c-4550-bb41-c090-d0e7b1c0f6d8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-12-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1571581431783},"e-24":{"id":"e-24","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-13","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5da34cabae7ebd7268d933da|3f2f0733-000a-2802-443d-a5d8bdeb6700","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5da34cabae7ebd7268d933da|3f2f0733-000a-2802-443d-a5d8bdeb6700","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-13-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1571583747088},"e-27":{"id":"e-27","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-14","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5dac75fc65b2d92ed20dd403|5dcd37e6-258e-df82-bbff-cb36f948891e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5dac75fc65b2d92ed20dd403|5dcd37e6-258e-df82-bbff-cb36f948891e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-14-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1571583957656},"e-30":{"id":"e-30","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-15","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5dac78a765b2d97dfe0df774|9b4d5907-beb6-36f3-b87b-025f194561e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5dac78a765b2d97dfe0df774|9b4d5907-beb6-36f3-b87b-025f194561e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-15-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1571584193069}},"actionLists":{"a":{"id":"a","title":"scroll icon","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5da34cabae7ebd7268d933da|28efab7a-2eca-7f4e-e77c-dd705eade339"},"xValue":-34,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5da34cabae7ebd7268d933da|28efab7a-2eca-7f4e-e77c-dd705eade339"},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5da34cabae7ebd7268d933da|28efab7a-2eca-7f4e-e77c-dd705eade339"},"yValue":22,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5da34cabae7ebd7268d933da|28efab7a-2eca-7f4e-e77c-dd705eade339"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5da34cabae7ebd7268d933da|28efab7a-2eca-7f4e-e77c-dd705eade339"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5da34cabae7ebd7268d933da|28efab7a-2eca-7f4e-e77c-dd705eade339"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1570995516380},"a-3":{"id":"a-3","title":"Parallax scroll","continuousParameterGroups":[{"id":"a-3-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"338d12ba-e28e-e439-2671-b5b5bc61bfea"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"338d12ba-e28e-e439-2671-b5b5bc61bfea"},"yValue":-112,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1571064098805},"a-2":{"id":"a-2","title":"Load","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuad","duration":0,"target":{"id":"5da34d3aae7ebd5c6bd93df5|5da34d3aae7ebd4dd4d93df7"},"value":0.11,"unit":""}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inQuad","duration":500,"target":{"id":"5da34d3aae7ebd5c6bd93df5|5da34d3aae7ebd4dd4d93df7"},"yValue":0,"zValue":-430,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuad","duration":1000,"target":{"id":"5da34d3aae7ebd5c6bd93df5|5da34d3aae7ebd4dd4d93df7"},"value":1,"unit":""}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inQuad","duration":500,"target":{"id":"5da34d3aae7ebd5c6bd93df5|5da34d3aae7ebd4dd4d93df7"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1570999591360},"a-8":{"id":"a-8","title":"Parallax scroll 2","continuousParameterGroups":[{"id":"a-8-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5daa7f620d705b8dcf7e872d|f5678024-19bd-6602-a749-fac99038ac69"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5daa7f620d705b8dcf7e872d|f5678024-19bd-6602-a749-fac99038ac69"},"yValue":-112,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1571064098805},"a-9":{"id":"a-9","title":"photo hover","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":true,"id":"5dab2146e9af6ece18e112e3|b833d3b2-217c-79ac-e443-03afd1668321"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-9-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":500,"target":{"useEventTarget":true,"id":"5dab2146e9af6ece18e112e3|b833d3b2-217c-79ac-e443-03afd1668321"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1571577977470},"a-11":{"id":"a-11","title":"photo hover out","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5dab2146e9af6ece18e112e3|b833d3b2-217c-79ac-e443-03afd1668321"},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1571578260699},"a-10":{"id":"a-10","title":"photo load","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"boundaryMode":true,"id":"5dab2146e9af6ece18e112e3|b833d3b2-217c-79ac-e443-03afd1668321"},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1571578106335},"a-12":{"id":"a-12","title":"Parallax scroll 3","continuousParameterGroups":[{"id":"a-12-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5dac6dc806d077312ee2522e|09e4849c-4550-bb41-c090-d0e7b1c0f6d8"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-12-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5dac6dc806d077312ee2522e|09e4849c-4550-bb41-c090-d0e7b1c0f6d8"},"yValue":-112,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1571064098805},"a-13":{"id":"a-13","title":"Parallax scroll 4","continuousParameterGroups":[{"id":"a-13-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5da34cabae7ebd7268d933da|3f2f0733-000a-2802-443d-a5d8bdeb6700"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-13-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5da34cabae7ebd7268d933da|3f2f0733-000a-2802-443d-a5d8bdeb6700"},"yValue":-112,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1571064098805},"a-14":{"id":"a-14","title":"Parallax scroll 5","continuousParameterGroups":[{"id":"a-14-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-14-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5dac75fc65b2d92ed20dd403|5dcd37e6-258e-df82-bbff-cb36f948891e"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-14-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5dac75fc65b2d92ed20dd403|5dcd37e6-258e-df82-bbff-cb36f948891e"},"yValue":-112,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1571064098805},"a-15":{"id":"a-15","title":"Parallax scroll 6","continuousParameterGroups":[{"id":"a-15-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5dac78a765b2d97dfe0df774|9b4d5907-beb6-36f3-b87b-025f194561e5"},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-15-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"5dac78a765b2d97dfe0df774|9b4d5907-beb6-36f3-b87b-025f194561e5"},"yValue":-112,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1571064098805}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals window, document, navigator, WEBFLOW_ENV_TEST */

/* eslint-disable no-var */

/**
 * Webflow: Core site library
 */

var Webflow = {};
var modules = {};
var primary = [];
var secondary = window.Webflow || [];
var $ = window.jQuery;
var $win = $(window);
var $doc = $(document);
var isFunction = $.isFunction;

var _ = Webflow._ = __webpack_require__(131);

var tram = Webflow.tram = __webpack_require__(69) && $.tram;
var domready = false;
var destroyed = false;
tram.config.hideBackface = false;
tram.config.keepInherited = true;
/**
 * Webflow.define - Define a named module
 * @param  {string} name
 * @param  {function} factory
 * @param  {object} options
 * @return {object}
 */

Webflow.define = function (name, factory, options) {
  if (modules[name]) {
    unbindModule(modules[name]);
  }

  var instance = modules[name] = factory($, _, options) || {};
  bindModule(instance);
  return instance;
};
/**
 * Webflow.require - Require a named module
 * @param  {string} name
 * @return {object}
 */


Webflow.require = function (name) {
  return modules[name];
};

function bindModule(module) {
  // If running in Webflow app, subscribe to design/preview events
  if (Webflow.env()) {
    isFunction(module.design) && $win.on('__wf_design', module.design);
    isFunction(module.preview) && $win.on('__wf_preview', module.preview);
  } // Subscribe to front-end destroy event


  isFunction(module.destroy) && $win.on('__wf_destroy', module.destroy); // Look for ready method on module

  if (module.ready && isFunction(module.ready)) {
    addReady(module);
  }
}

function addReady(module) {
  // If domready has already happened, run ready method
  if (domready) {
    module.ready();
    return;
  } // Otherwise add ready method to the primary queue (only once)


  if (_.contains(primary, module.ready)) {
    return;
  }

  primary.push(module.ready);
}

function unbindModule(module) {
  // Unsubscribe module from window events
  isFunction(module.design) && $win.off('__wf_design', module.design);
  isFunction(module.preview) && $win.off('__wf_preview', module.preview);
  isFunction(module.destroy) && $win.off('__wf_destroy', module.destroy); // Remove ready method from primary queue

  if (module.ready && isFunction(module.ready)) {
    removeReady(module);
  }
}

function removeReady(module) {
  primary = _.filter(primary, function (readyFn) {
    return readyFn !== module.ready;
  });
}
/**
 * Webflow.push - Add a ready handler into secondary queue
 * @param {function} ready  Callback to invoke on domready
 */


Webflow.push = function (ready) {
  // If domready has already happened, invoke handler
  if (domready) {
    isFunction(ready) && ready();
    return;
  } // Otherwise push into secondary queue


  secondary.push(ready);
};
/**
 * Webflow.env - Get the state of the Webflow app
 * @param {string} mode [optional]
 * @return {boolean}
 */


Webflow.env = function (mode) {
  var designFlag = window.__wf_design;
  var inApp = typeof designFlag !== 'undefined';

  if (!mode) {
    return inApp;
  }

  if (mode === 'design') {
    return inApp && designFlag;
  }

  if (mode === 'preview') {
    return inApp && !designFlag;
  }

  if (mode === 'slug') {
    return inApp && window.__wf_slug;
  }

  if (mode === 'editor') {
    return window.WebflowEditor;
  }

  if (mode === 'test') {
    return  false || window.__wf_test;
  }

  if (mode === 'frame') {
    return window !== window.top;
  }
}; // Feature detects + browser sniffs  à² _à² 


var userAgent = navigator.userAgent.toLowerCase();
var touch = Webflow.env.touch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios; // Maintain current touch target to prevent late clicks on touch devices

var touchTarget; // Listen for both events to support touch/mouse hybrid devices

touch && $doc.on('touchstart mousedown', function (evt) {
  touchTarget = evt.target;
});
/**
 * Webflow.validClick - validate click target against current touch target
 * @param  {HTMLElement} clickTarget  Element being clicked
 * @return {Boolean}  True if click target is valid (always true on non-touch)
 */

Webflow.validClick = touch ? function (clickTarget) {
  return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
} : function () {
  return true;
};
/**
 * Webflow.resize, Webflow.scroll - throttled event proxies
 */

var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
var scrollEvents = 'scroll.webflow ' + resizeEvents;
Webflow.resize = eventProxy($win, resizeEvents);
Webflow.scroll = eventProxy($win, scrollEvents);
Webflow.redraw = eventProxy(); // Create a proxy instance for throttled events

function eventProxy(target, types) {
  // Set up throttled method (using custom frame-based _.throttle)
  var handlers = [];
  var proxy = {};
  proxy.up = _.throttle(function (evt) {
    _.each(handlers, function (h) {
      h(evt);
    });
  }); // Bind events to target

  if (target && types) {
    target.on(types, proxy.up);
  }
  /**
   * Add an event handler
   * @param  {function} handler
   */


  proxy.on = function (handler) {
    if (typeof handler !== 'function') {
      return;
    }

    if (_.contains(handlers, handler)) {
      return;
    }

    handlers.push(handler);
  };
  /**
   * Remove an event handler
   * @param  {function} handler
   */


  proxy.off = function (handler) {
    // If no arguments supplied, clear all handlers
    if (!arguments.length) {
      handlers = [];
      return;
    } // Otherwise, remove handler from the list


    handlers = _.filter(handlers, function (h) {
      return h !== handler;
    });
  };

  return proxy;
} // Webflow.location - Wrap window.location in api


Webflow.location = function (url) {
  window.location = url;
};

if (Webflow.env()) {
  // Ignore redirects inside a Webflow design/edit environment
  Webflow.location = function () {};
} // Webflow.ready - Call primary and secondary handlers


Webflow.ready = function () {
  domready = true; // Restore modules after destroy

  if (destroyed) {
    restoreModules(); // Otherwise run primary ready methods
  } else {
    _.each(primary, callReady);
  } // Run secondary ready methods


  _.each(secondary, callReady); // Trigger resize


  Webflow.resize.up();
};

function callReady(readyFn) {
  isFunction(readyFn) && readyFn();
}

function restoreModules() {
  destroyed = false;

  _.each(modules, bindModule);
}
/**
 * Webflow.load - Add a window load handler that will run even if load event has already happened
 * @param  {function} handler
 */


var deferLoad;

Webflow.load = function (handler) {
  deferLoad.then(handler);
};

function bindLoad() {
  // Reject any previous deferred (to support destroy)
  if (deferLoad) {
    deferLoad.reject();
    $win.off('load', deferLoad.resolve);
  } // Create deferred and bind window load event


  deferLoad = new $.Deferred();
  $win.on('load', deferLoad.resolve);
} // Webflow.destroy - Trigger a destroy event for all modules


Webflow.destroy = function (options) {
  options = options || {};
  destroyed = true;
  $win.triggerHandler('__wf_destroy'); // Allow domready reset for tests

  if (options.domready != null) {
    domready = options.domready;
  } // Unbind modules


  _.each(modules, unbindModule); // Clear any proxy event handlers


  Webflow.resize.off();
  Webflow.scroll.off();
  Webflow.redraw.off(); // Clear any queued ready methods

  primary = [];
  secondary = []; // If load event has not yet fired, replace the deferred

  if (deferLoad.state() === 'pending') {
    bindLoad();
  }
}; // Listen for domready


$(Webflow.ready); // Listen for window.onload and resolve deferred

bindLoad(); // Export commonjs module

module.exports = window.Webflow = Webflow;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  IX2EngineActionTypes: true,
  IX2EngineConstants: true
};
exports.IX2EngineConstants = exports.IX2EngineActionTypes = void 0;

var _triggerEvents = __webpack_require__(188);

Object.keys(_triggerEvents).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _triggerEvents[key];
    }
  });
});

var _animationActions = __webpack_require__(94);

Object.keys(_animationActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animationActions[key];
    }
  });
});

var _triggerInteractions = __webpack_require__(189);

Object.keys(_triggerInteractions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _triggerInteractions[key];
    }
  });
});

var _reducedMotion = __webpack_require__(190);

Object.keys(_reducedMotion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reducedMotion[key];
    }
  });
});

var IX2EngineActionTypes = _interopRequireWildcard(__webpack_require__(191));

exports.IX2EngineActionTypes = IX2EngineActionTypes;

var IX2EngineConstants = _interopRequireWildcard(__webpack_require__(192));

exports.IX2EngineConstants = IX2EngineConstants;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(99);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(5);
var toObject = __webpack_require__(156);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(195),
    baseMatchesProperty = __webpack_require__(249),
    identity = __webpack_require__(63),
    isArray = __webpack_require__(2),
    property = __webpack_require__(258);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(207),
    getValue = __webpack_require__(212);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(19);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IX2VanillaUtils = exports.IX2VanillaPlugins = exports.IX2ElementsReducer = exports.IX2EasingUtils = exports.IX2Easings = exports.IX2BrowserSupport = void 0;

var IX2BrowserSupport = _interopRequireWildcard(__webpack_require__(48));

exports.IX2BrowserSupport = IX2BrowserSupport;

var IX2Easings = _interopRequireWildcard(__webpack_require__(116));

exports.IX2Easings = IX2Easings;

var IX2EasingUtils = _interopRequireWildcard(__webpack_require__(118));

exports.IX2EasingUtils = IX2EasingUtils;

var IX2ElementsReducer = _interopRequireWildcard(__webpack_require__(267));

exports.IX2ElementsReducer = IX2ElementsReducer;

var IX2VanillaPlugins = _interopRequireWildcard(__webpack_require__(120));

exports.IX2VanillaPlugins = IX2VanillaPlugins;

var IX2VanillaUtils = _interopRequireWildcard(__webpack_require__(269));

exports.IX2VanillaUtils = IX2VanillaUtils;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    getRawTag = __webpack_require__(208),
    objectToString = __webpack_require__(209);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(98),
    isLength = __webpack_require__(56);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(7);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.clone = clone;
exports.addLast = addLast;
exports.addFirst = addFirst;
exports.removeLast = removeLast;
exports.removeFirst = removeFirst;
exports.insert = insert;
exports.removeAt = removeAt;
exports.replaceAt = replaceAt;
exports.getIn = getIn;
exports.set = set;
exports.setIn = setIn;
exports.update = update;
exports.updateIn = updateIn;
exports.merge = merge;
exports.mergeDeep = mergeDeep;
exports.mergeIn = mergeIn;
exports.omit = omit;
exports.addDefaults = addDefaults;


/*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 */

var INVALID_ARGS = 'INVALID_ARGS';

// ===============================================
// ### Helpers
// ===============================================


function throwStr(msg) {
  throw new Error(msg);
}

function getKeysAndSymbols(obj) {
  var keys = Object.keys(obj);
  if (Object.getOwnPropertySymbols) {
    return keys.concat(Object.getOwnPropertySymbols(obj));
  }
  return keys;
}

var hasOwnProperty = {}.hasOwnProperty;

function clone(obj) {
  if (Array.isArray(obj)) return obj.slice();
  var keys = getKeysAndSymbols(obj);
  var out = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    out[key] = obj[key];
  }
  return out;
}

function doMerge(fAddDefaults, fDeep, first) {
  var out = first;
  !(out != null) && throwStr( false ? undefined : INVALID_ARGS);
  var fChanged = false;

  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  for (var idx = 0; idx < rest.length; idx++) {
    var obj = rest[idx];
    if (obj == null) continue;
    var keys = getKeysAndSymbols(obj);
    if (!keys.length) continue;
    for (var j = 0; j <= keys.length; j++) {
      var key = keys[j];
      if (fAddDefaults && out[key] !== undefined) continue;
      var nextVal = obj[key];
      if (fDeep && isObject(out[key]) && isObject(nextVal)) {
        nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
      }
      if (nextVal === undefined || nextVal === out[key]) continue;
      if (!fChanged) {
        fChanged = true;
        out = clone(out);
      }
      out[key] = nextVal;
    }
  }
  return out;
}

function isObject(o) {
  var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
  return o != null && (type === 'object' || type === 'function');
}

// _deepFreeze = (obj) ->
//   Object.freeze obj
//   for key in Object.getOwnPropertyNames obj
//     val = obj[key]
//     if isObject(val) and not Object.isFrozen val
//       _deepFreeze val
//   obj

// ===============================================
// -- ### Arrays
// ===============================================

// -- #### addLast()
// -- Returns a new array with an appended item or items.
// --
// -- Usage: `addLast<T>(array: Array<T>, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = addLast(arr, 'c')
// -- // ['a', 'b', 'c']
// -- arr2 === arr
// -- // false
// -- arr3 = addLast(arr, ['c', 'd'])
// -- // ['a', 'b', 'c', 'd']
// -- ```
// `array.concat(val)` also handles the scalar case,
// but is apparently very slow
function addLast(array, val) {
  if (Array.isArray(val)) return array.concat(val);
  return array.concat([val]);
}

// -- #### addFirst()
// -- Returns a new array with a prepended item or items.
// --
// -- Usage: `addFirst<T>(array: Array<T>, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = addFirst(arr, 'c')
// -- // ['c', 'a', 'b']
// -- arr2 === arr
// -- // false
// -- arr3 = addFirst(arr, ['c', 'd'])
// -- // ['c', 'd', 'a', 'b']
// -- ```
function addFirst(array, val) {
  if (Array.isArray(val)) return val.concat(array);
  return [val].concat(array);
}

// -- #### removeLast()
// -- Returns a new array removing the last item.
// --
// -- Usage: `removeLast<T>(array: Array<T>): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = removeLast(arr)
// -- // ['a']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- arr3 = []
// -- removeLast(arr3) === arr3
// -- // true
// -- ```
function removeLast(array) {
  if (!array.length) return array;
  return array.slice(0, array.length - 1);
}

// -- #### removeFirst()
// -- Returns a new array removing the first item.
// --
// -- Usage: `removeFirst<T>(array: Array<T>): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = removeFirst(arr)
// -- // ['b']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- arr3 = []
// -- removeFirst(arr3) === arr3
// -- // true
// -- ```
function removeFirst(array) {
  if (!array.length) return array;
  return array.slice(1);
}

// -- #### insert()
// -- Returns a new array obtained by inserting an item or items
// -- at a specified index.
// --
// -- Usage: `insert<T>(array: Array<T>, idx: number, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = insert(arr, 1, 'd')
// -- // ['a', 'd', 'b', 'c']
// -- arr2 === arr
// -- // false
// -- insert(arr, 1, ['d', 'e'])
// -- // ['a', 'd', 'e', 'b', 'c']
// -- ```
function insert(array, idx, val) {
  return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
}

// -- #### removeAt()
// -- Returns a new array obtained by removing an item at
// -- a specified index.
// --
// -- Usage: `removeAt<T>(array: Array<T>, idx: number): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = removeAt(arr, 1)
// -- // ['a', 'c']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- removeAt(arr, 4) === arr
// -- // true
// -- ```
function removeAt(array, idx) {
  if (idx >= array.length || idx < 0) return array;
  return array.slice(0, idx).concat(array.slice(idx + 1));
}

// -- #### replaceAt()
// -- Returns a new array obtained by replacing an item at
// -- a specified index. If the provided item is the same as
// -- (*referentially equal to*) the previous item at that position,
// -- the original array is returned.
// --
// -- Usage: `replaceAt<T>(array: Array<T>, idx: number, newItem: T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = replaceAt(arr, 1, 'd')
// -- // ['a', 'd', 'c']
// -- arr2 === arr
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- replaceAt(arr, 1, 'b') === arr
// -- // true
// -- ```
function replaceAt(array, idx, newItem) {
  if (array[idx] === newItem) return array;
  var len = array.length;
  var result = Array(len);
  for (var i = 0; i < len; i++) {
    result[i] = array[i];
  }
  result[idx] = newItem;
  return result;
}

// ===============================================
// -- ### Collections (objects and arrays)
// ===============================================
// -- The following types are used throughout this section
// -- ```js
// -- type ArrayOrObject = Array<any>|Object;
// -- type Key = number|string;
// -- ```

// -- #### getIn()
// -- Returns a value from an object at a given path. Works with
// -- nested arrays and objects. If the path does not exist, it returns
// -- `undefined`.
// --
// -- Usage: `getIn(obj: ?ArrayOrObject, path: Array<Key>): any`
// --
// -- ```js
// -- obj = { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: ['a', 'b', 'c'] }
// -- getIn(obj, ['d', 'd1'])
// -- // 3
// -- getIn(obj, ['e', 1])
// -- // 'b'
// -- ```
function getIn(obj, path) {
  !Array.isArray(path) && throwStr( false ? undefined : INVALID_ARGS);
  if (obj == null) return undefined;
  var ptr = obj;
  for (var i = 0; i < path.length; i++) {
    var key = path[i];
    ptr = ptr != null ? ptr[key] : undefined;
    if (ptr === undefined) return ptr;
  }
  return ptr;
}

// -- #### set()
// -- Returns a new object with a modified attribute.
// -- If the provided value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `set<T>(obj: ?T, key: Key, val: any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, c: 3 }
// -- obj2 = set(obj, 'b', 5)
// -- // { a: 1, b: 5, c: 3 }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- set(obj, 'b', 2) === obj
// -- // true
// -- ```
function set(obj, key, val) {
  var fallback = typeof key === 'number' ? [] : {};
  var finalObj = obj == null ? fallback : obj;
  if (finalObj[key] === val) return finalObj;
  var obj2 = clone(finalObj);
  obj2[key] = val;
  return obj2;
}

// -- #### setIn()
// -- Returns a new object with a modified **nested** attribute.
// --
// -- Notes:
// --
// -- * If the provided value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// -- * If the path does not exist, it will be created before setting
// -- the new value.
// --
// -- Usage: `setIn<T: ArrayOrObject>(obj: T, path: Array<Key>, val: any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj2 = setIn(obj, ['d', 'd1'], 4)
// -- // { a: 1, b: 2, d: { d1: 4, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj2 === obj
// -- // false
// -- obj2.d === obj.d
// -- // false
// -- obj2.e === obj.e
// -- // true
// --
// -- // The same object is returned if there are no changes:
// -- obj3 = setIn(obj, ['d', 'd1'], 3)
// -- // { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj3 === obj
// -- // true
// -- obj3.d === obj.d
// -- // true
// -- obj3.e === obj.e
// -- // true
// --
// -- // ... unknown paths create intermediate keys. Numeric segments are treated as array indices:
// -- setIn({ a: 3 }, ['unknown', 0, 'path'], 4)
// -- // { a: 3, unknown: [{ path: 4 }] }
// -- ```
function doSetIn(obj, path, val, idx) {
  var newValue = void 0;
  var key = path[idx];
  if (idx === path.length - 1) {
    newValue = val;
  } else {
    var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === 'number' ? [] : {};
    newValue = doSetIn(nestedObj, path, val, idx + 1);
  }
  return set(obj, key, newValue);
}

function setIn(obj, path, val) {
  if (!path.length) return val;
  return doSetIn(obj, path, val, 0);
}

// -- #### update()
// -- Returns a new object with a modified attribute,
// -- calculated via a user-provided callback based on the current value.
// -- If the calculated value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `update<T: ArrayOrObject>(obj: T, key: Key,
// -- fnUpdate: (prevValue: any) => any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, c: 3 }
// -- obj2 = update(obj, 'b', (val) => val + 1)
// -- // { a: 1, b: 3, c: 3 }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- update(obj, 'b', (val) => val) === obj
// -- // true
// -- ```
function update(obj, key, fnUpdate) {
  var prevVal = obj == null ? undefined : obj[key];
  var nextVal = fnUpdate(prevVal);
  return set(obj, key, nextVal);
}

// -- #### updateIn()
// -- Returns a new object with a modified **nested** attribute,
// -- calculated via a user-provided callback based on the current value.
// -- If the calculated value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `updateIn<T: ArrayOrObject>(obj: T, path: Array<Key>,
// -- fnUpdate: (prevValue: any) => any): T`
// --
// -- ```js
// -- obj = { a: 1, d: { d1: 3, d2: 4 } }
// -- obj2 = updateIn(obj, ['d', 'd1'], (val) => val + 1)
// -- // { a: 1, d: { d1: 4, d2: 4 } }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- obj3 = updateIn(obj, ['d', 'd1'], (val) => val)
// -- // { a: 1, d: { d1: 3, d2: 4 } }
// -- obj3 === obj
// -- // true
// -- ```
function updateIn(obj, path, fnUpdate) {
  var prevVal = getIn(obj, path);
  var nextVal = fnUpdate(prevVal);
  return setIn(obj, path, nextVal);
}

// -- #### merge()
// -- Returns a new object built as follows: the overlapping keys from the
// -- second one overwrite the corresponding entries from the first one.
// -- Similar to `Object.assign()`, but immutable.
// --
// -- Usage:
// --
// -- * `merge(obj1: Object, obj2: ?Object): Object`
// -- * `merge(obj1: Object, ...objects: Array<?Object>): Object`
// --
// -- The unmodified `obj1` is returned if `obj2` does not *provide something
// -- new to* `obj1`, i.e. if either of the following
// -- conditions are true:
// --
// -- * `obj2` is `null` or `undefined`
// -- * `obj2` is an object, but it is empty
// -- * All attributes of `obj2` are `undefined`
// -- * All attributes of `obj2` are referentially equal to the
// --   corresponding attributes of `obj1`
// --
// -- Note that `undefined` attributes in `obj2` do not modify the
// -- corresponding attributes in `obj1`.
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: 3 }
// -- obj2 = { c: 4, d: 5 }
// -- obj3 = merge(obj1, obj2)
// -- // { a: 1, b: 2, c: 4, d: 5 }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- merge(obj1, { c: 3 }) === obj1
// -- // true
// -- ```
function merge(a, b, c, d, e, f) {
  for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
    rest[_key2 - 6] = arguments[_key2];
  }

  return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
}

// -- #### mergeDeep()
// -- Returns a new object built as follows: the overlapping keys from the
// -- second one overwrite the corresponding entries from the first one.
// -- If both the first and second entries are objects they are merged recursively.
// -- Similar to `Object.assign()`, but immutable, and deeply merging.
// --
// -- Usage:
// --
// -- * `mergeDeep(obj1: Object, obj2: ?Object): Object`
// -- * `mergeDeep(obj1: Object, ...objects: Array<?Object>): Object`
// --
// -- The unmodified `obj1` is returned if `obj2` does not *provide something
// -- new to* `obj1`, i.e. if either of the following
// -- conditions are true:
// --
// -- * `obj2` is `null` or `undefined`
// -- * `obj2` is an object, but it is empty
// -- * All attributes of `obj2` are `undefined`
// -- * All attributes of `obj2` are referentially equal to the
// --   corresponding attributes of `obj1`
// --
// -- Note that `undefined` attributes in `obj2` do not modify the
// -- corresponding attributes in `obj1`.
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: { a: 1 } }
// -- obj2 = { b: 3, c: { b: 2 } }
// -- obj3 = mergeDeep(obj1, obj2)
// -- // { a: 1, b: 3, c: { a: 1, b: 2 }  }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- mergeDeep(obj1, { c: { a: 1 } }) === obj1
// -- // true
// -- ```
function mergeDeep(a, b, c, d, e, f) {
  for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
    rest[_key3 - 6] = arguments[_key3];
  }

  return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
}

// -- #### mergeIn()
// -- Similar to `merge()`, but merging the value at a given nested path.
// -- Note that the returned type is the same as that of the first argument.
// --
// -- Usage:
// --
// -- * `mergeIn<T: ArrayOrObject>(obj1: T, path: Array<Key>, obj2: ?Object): T`
// -- * `mergeIn<T: ArrayOrObject>(obj1: T, path: Array<Key>,
// -- ...objects: Array<?Object>): T`
// --
// -- ```js
// -- obj1 = { a: 1, d: { b: { d1: 3, d2: 4 } } }
// -- obj2 = { d3: 5 }
// -- obj3 = mergeIn(obj1, ['d', 'b'], obj2)
// -- // { a: 1, d: { b: { d1: 3, d2: 4, d3: 5 } } }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- mergeIn(obj1, ['d', 'b'], { d2: 4 }) === obj1
// -- // true
// -- ```
function mergeIn(a, path, b, c, d, e, f) {
  var prevVal = getIn(a, path);
  if (prevVal == null) prevVal = {};
  var nextVal = void 0;

  for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
    rest[_key4 - 7] = arguments[_key4];
  }

  if (rest.length) {
    nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
  } else {
    nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
  }
  return setIn(a, path, nextVal);
}

// -- #### omit()
// -- Returns an object excluding one or several attributes.
// --
// -- Usage: `omit(obj: Object, attrs: Array<string>|string): Object`
//
// -- ```js
// -- obj = { a: 1, b: 2, c: 3, d: 4 }
// -- omit(obj, 'a')
// -- // { b: 2, c: 3, d: 4 }
// -- omit(obj, ['b', 'c'])
// -- // { a: 1, d: 4 }
// --
// -- // The same object is returned if there are no changes:
// -- omit(obj, 'z') === obj1
// -- // true
// -- ```
function omit(obj, attrs) {
  var omitList = Array.isArray(attrs) ? attrs : [attrs];
  var fDoSomething = false;
  for (var i = 0; i < omitList.length; i++) {
    if (hasOwnProperty.call(obj, omitList[i])) {
      fDoSomething = true;
      break;
    }
  }
  if (!fDoSomething) return obj;
  var out = {};
  var keys = getKeysAndSymbols(obj);
  for (var _i = 0; _i < keys.length; _i++) {
    var key = keys[_i];
    if (omitList.indexOf(key) >= 0) continue;
    out[key] = obj[key];
  }
  return out;
}

// -- #### addDefaults()
// -- Returns a new object built as follows: `undefined` keys in the first one
// -- are filled in with the corresponding values from the second one
// -- (even if they are `null`).
// --
// -- Usage:
// --
// -- * `addDefaults(obj: Object, defaults: Object): Object`
// -- * `addDefaults(obj: Object, ...defaultObjects: Array<?Object>): Object`
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: 3 }
// -- obj2 = { c: 4, d: 5, e: null }
// -- obj3 = addDefaults(obj1, obj2)
// -- // { a: 1, b: 2, c: 3, d: 5, e: null }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- addDefaults(obj1, { c: 4 }) === obj1
// -- // true
// -- ```
function addDefaults(a, b, c, d, e, f) {
  for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
    rest[_key5 - 6] = arguments[_key5];
  }

  return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
}

// ===============================================
// ### Public API
// ===============================================
var timm = {
  clone: clone,
  addLast: addLast,
  addFirst: addFirst,
  removeLast: removeLast,
  removeFirst: removeFirst,
  insert: insert,
  removeAt: removeAt,
  replaceAt: replaceAt,

  getIn: getIn,
  // eslint-disable-next-line object-shorthand
  set: set, // so that flow doesn't complain
  setIn: setIn,
  update: update,
  updateIn: updateIn,
  merge: merge,
  mergeDeep: mergeDeep,
  mergeIn: mergeIn,
  omit: omit,
  addDefaults: addDefaults
};

exports.default = timm;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(38);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(145);
var requireObjectCoercible = __webpack_require__(72);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(7);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(80);
var anObject = __webpack_require__(29);
var toPropertyKey = __webpack_require__(73);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(20);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(197),
    listCacheDelete = __webpack_require__(198),
    listCacheGet = __webpack_require__(199),
    listCacheHas = __webpack_require__(200),
    listCacheSet = __webpack_require__(201);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(49);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(221);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(106),
    baseKeys = __webpack_require__(57),
    isArrayLike = __webpack_require__(16);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(239),
    isObjectLike = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isKey = __webpack_require__(62),
    stringToPath = __webpack_require__(250),
    toString = __webpack_require__(253);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObjectLike = __webpack_require__(12);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @wf-will-never-add-flow-to-this-file

/* globals window, document */

/* eslint-disable no-var */
// eslint-disable-next-line strict


var IXEvents = __webpack_require__(136);

function dispatchCustomEvent(element, eventName) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventName, true, true, null);
  element.dispatchEvent(event);
}
/**
 * Webflow: IX Event triggers for other modules
 */


var $ = window.jQuery;
var api = {};
var namespace = '.w-ix';
var eventTriggers = {
  reset: function reset(i, el) {
    IXEvents.triggers.reset(i, el);
  },
  intro: function intro(i, el) {
    IXEvents.triggers.intro(i, el);
    dispatchCustomEvent(el, 'COMPONENT_ACTIVE');
  },
  outro: function outro(i, el) {
    IXEvents.triggers.outro(i, el);
    dispatchCustomEvent(el, 'COMPONENT_INACTIVE');
  }
};
api.triggers = {};
api.types = {
  INTRO: 'w-ix-intro' + namespace,
  OUTRO: 'w-ix-outro' + namespace
};
$.extend(api.triggers, eventTriggers);
module.exports = api;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(42);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var definePropertyModule = __webpack_require__(28);
var createPropertyDescriptor = __webpack_require__(71);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(183);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing â€œwhat changedâ€. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_1__["default"]] = observable, _ref2;
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compose; });
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSFORM_STYLE_PREFIXED = exports.TRANSFORM_PREFIXED = exports.FLEX_PREFIXED = exports.ELEMENT_MATCHES = exports.withBrowser = exports.IS_BROWSER_ENV = void 0;

var _find = _interopRequireDefault(__webpack_require__(95));
/* eslint-env browser */


var IS_BROWSER_ENV = typeof window !== 'undefined'; // $FlowFixMe

exports.IS_BROWSER_ENV = IS_BROWSER_ENV;

var withBrowser = function withBrowser(fn, fallback) {
  if (IS_BROWSER_ENV) {
    return fn();
  }

  return fallback;
};

exports.withBrowser = withBrowser;
var ELEMENT_MATCHES = withBrowser(function () {
  return (0, _find["default"])(['matches', 'matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector'], function (key) {
    return key in Element.prototype;
  });
});
exports.ELEMENT_MATCHES = ELEMENT_MATCHES;
var FLEX_PREFIXED = withBrowser(function () {
  var el = document.createElement('i');
  var values = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'];
  var none = '';

  try {
    var length = values.length;

    for (var i = 0; i < length; i++) {
      var value = values[i];
      el.style.display = value;

      if (el.style.display === value) {
        return value;
      }
    }

    return none;
  } catch (err) {
    return none;
  }
}, 'flex');
exports.FLEX_PREFIXED = FLEX_PREFIXED;
var TRANSFORM_PREFIXED = withBrowser(function () {
  var el = document.createElement('i');

  if (el.style.transform == null) {
    var prefixes = ['Webkit', 'Moz', 'ms'];
    var suffix = 'Transform';
    var length = prefixes.length;

    for (var i = 0; i < length; i++) {
      var prop = prefixes[i] + suffix; // $FlowFixMe

      if (el.style[prop] !== undefined) {
        return prop;
      }
    }
  }

  return 'transform';
}, 'transform'); // $FlowFixMe

exports.TRANSFORM_PREFIXED = TRANSFORM_PREFIXED;
var TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split('transform')[0];
var TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + 'TransformStyle' : 'transformStyle';
exports.TRANSFORM_STYLE_PREFIXED = TRANSFORM_STYLE_PREFIXED;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(213),
    mapCacheDelete = __webpack_require__(220),
    mapCacheGet = __webpack_require__(222),
    mapCacheHas = __webpack_require__(223),
    mapCacheSet = __webpack_require__(224);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(6),
    stubFalse = __webpack_require__(240);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(107)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(241),
    baseUnary = __webpack_require__(242),
    nodeUtil = __webpack_require__(243);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(58),
    nativeKeys = __webpack_require__(244);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(245),
    Map = __webpack_require__(50),
    Promise = __webpack_require__(246),
    Set = __webpack_require__(247),
    WeakMap = __webpack_require__(109),
    baseGetTag = __webpack_require__(15),
    toSource = __webpack_require__(100);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(61);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(37),
    toKey = __webpack_require__(24);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(38);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(262),
    isObject = __webpack_require__(8),
    isSymbol = __webpack_require__(38);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaQueriesDefined = exports.viewportWidthChanged = exports.actionListPlaybackChanged = exports.elementStateChanged = exports.instanceRemoved = exports.instanceStarted = exports.instanceAdded = exports.parameterChanged = exports.animationFrameChanged = exports.eventStateChanged = exports.testFrameRendered = exports.eventListenerAdded = exports.clearRequested = exports.stopRequested = exports.playbackRequested = exports.previewRequested = exports.sessionStopped = exports.sessionStarted = exports.sessionInitialized = exports.rawDataImported = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(30));

var _constants = __webpack_require__(4);

var _shared = __webpack_require__(14);

var _constants$IX2EngineA = _constants.IX2EngineActionTypes,
    IX2_RAW_DATA_IMPORTED = _constants$IX2EngineA.IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_INITIALIZED = _constants$IX2EngineA.IX2_SESSION_INITIALIZED,
    IX2_SESSION_STARTED = _constants$IX2EngineA.IX2_SESSION_STARTED,
    IX2_SESSION_STOPPED = _constants$IX2EngineA.IX2_SESSION_STOPPED,
    IX2_PREVIEW_REQUESTED = _constants$IX2EngineA.IX2_PREVIEW_REQUESTED,
    IX2_PLAYBACK_REQUESTED = _constants$IX2EngineA.IX2_PLAYBACK_REQUESTED,
    IX2_STOP_REQUESTED = _constants$IX2EngineA.IX2_STOP_REQUESTED,
    IX2_CLEAR_REQUESTED = _constants$IX2EngineA.IX2_CLEAR_REQUESTED,
    IX2_EVENT_LISTENER_ADDED = _constants$IX2EngineA.IX2_EVENT_LISTENER_ADDED,
    IX2_TEST_FRAME_RENDERED = _constants$IX2EngineA.IX2_TEST_FRAME_RENDERED,
    IX2_EVENT_STATE_CHANGED = _constants$IX2EngineA.IX2_EVENT_STATE_CHANGED,
    IX2_ANIMATION_FRAME_CHANGED = _constants$IX2EngineA.IX2_ANIMATION_FRAME_CHANGED,
    IX2_PARAMETER_CHANGED = _constants$IX2EngineA.IX2_PARAMETER_CHANGED,
    IX2_INSTANCE_ADDED = _constants$IX2EngineA.IX2_INSTANCE_ADDED,
    IX2_INSTANCE_STARTED = _constants$IX2EngineA.IX2_INSTANCE_STARTED,
    IX2_INSTANCE_REMOVED = _constants$IX2EngineA.IX2_INSTANCE_REMOVED,
    IX2_ELEMENT_STATE_CHANGED = _constants$IX2EngineA.IX2_ELEMENT_STATE_CHANGED,
    IX2_ACTION_LIST_PLAYBACK_CHANGED = _constants$IX2EngineA.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    IX2_VIEWPORT_WIDTH_CHANGED = _constants$IX2EngineA.IX2_VIEWPORT_WIDTH_CHANGED,
    IX2_MEDIA_QUERIES_DEFINED = _constants$IX2EngineA.IX2_MEDIA_QUERIES_DEFINED;
var reifyState = _shared.IX2VanillaUtils.reifyState; // TODO: Figure out what this is and elevate it

var rawDataImported = function rawDataImported(rawData) {
  return {
    type: IX2_RAW_DATA_IMPORTED,
    payload: (0, _extends2["default"])({}, reifyState(rawData))
  };
};

exports.rawDataImported = rawDataImported;

var sessionInitialized = function sessionInitialized(_ref) {
  var hasBoundaryNodes = _ref.hasBoundaryNodes,
      reducedMotion = _ref.reducedMotion;
  return {
    type: IX2_SESSION_INITIALIZED,
    payload: {
      hasBoundaryNodes: hasBoundaryNodes,
      reducedMotion: reducedMotion
    }
  };
};

exports.sessionInitialized = sessionInitialized;

var sessionStarted = function sessionStarted() {
  return {
    type: IX2_SESSION_STARTED
  };
};

exports.sessionStarted = sessionStarted;

var sessionStopped = function sessionStopped() {
  return {
    type: IX2_SESSION_STOPPED
  };
};

exports.sessionStopped = sessionStopped;

var previewRequested = function previewRequested(_ref2) {
  var rawData = _ref2.rawData,
      defer = _ref2.defer;
  return {
    type: IX2_PREVIEW_REQUESTED,
    payload: {
      defer: defer,
      rawData: rawData
    }
  };
};

exports.previewRequested = previewRequested;

var playbackRequested = function playbackRequested(_ref3) {
  var _ref3$actionTypeId = _ref3.actionTypeId,
      actionTypeId = _ref3$actionTypeId === void 0 ? _constants.ActionTypeConsts.GENERAL_START_ACTION : _ref3$actionTypeId,
      actionListId = _ref3.actionListId,
      actionItemId = _ref3.actionItemId,
      eventId = _ref3.eventId,
      allowEvents = _ref3.allowEvents,
      immediate = _ref3.immediate,
      testManual = _ref3.testManual,
      verbose = _ref3.verbose,
      rawData = _ref3.rawData;
  return {
    type: IX2_PLAYBACK_REQUESTED,
    payload: {
      actionTypeId: actionTypeId,
      actionListId: actionListId,
      actionItemId: actionItemId,
      testManual: testManual,
      eventId: eventId,
      allowEvents: allowEvents,
      immediate: immediate,
      verbose: verbose,
      rawData: rawData
    }
  };
};

exports.playbackRequested = playbackRequested;

var stopRequested = function stopRequested(actionListId) {
  return {
    type: IX2_STOP_REQUESTED,
    payload: {
      actionListId: actionListId
    }
  };
};

exports.stopRequested = stopRequested;

var clearRequested = function clearRequested() {
  return {
    type: IX2_CLEAR_REQUESTED
  };
};

exports.clearRequested = clearRequested;

var eventListenerAdded = function eventListenerAdded(target, listenerParams) {
  return {
    type: IX2_EVENT_LISTENER_ADDED,
    payload: {
      target: target,
      listenerParams: listenerParams
    }
  };
};

exports.eventListenerAdded = eventListenerAdded;

var testFrameRendered = function testFrameRendered() {
  var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: IX2_TEST_FRAME_RENDERED,
    payload: {
      step: step
    }
  };
};

exports.testFrameRendered = testFrameRendered;

var eventStateChanged = function eventStateChanged(stateKey, newState) {
  return {
    type: IX2_EVENT_STATE_CHANGED,
    payload: {
      stateKey: stateKey,
      newState: newState
    }
  };
};

exports.eventStateChanged = eventStateChanged;

var animationFrameChanged = function animationFrameChanged(now, parameters) {
  return {
    type: IX2_ANIMATION_FRAME_CHANGED,
    payload: {
      now: now,
      parameters: parameters
    }
  };
};

exports.animationFrameChanged = animationFrameChanged;

var parameterChanged = function parameterChanged(key, value) {
  return {
    type: IX2_PARAMETER_CHANGED,
    payload: {
      key: key,
      value: value
    }
  };
};

exports.parameterChanged = parameterChanged;

var instanceAdded = function instanceAdded(options) {
  return {
    type: IX2_INSTANCE_ADDED,
    payload: (0, _extends2["default"])({}, options)
  };
};

exports.instanceAdded = instanceAdded;

var instanceStarted = function instanceStarted(instanceId, time) {
  return {
    type: IX2_INSTANCE_STARTED,
    payload: {
      instanceId: instanceId,
      time: time
    }
  };
};

exports.instanceStarted = instanceStarted;

var instanceRemoved = function instanceRemoved(instanceId) {
  return {
    type: IX2_INSTANCE_REMOVED,
    payload: {
      instanceId: instanceId
    }
  };
};

exports.instanceRemoved = instanceRemoved;

var elementStateChanged = function elementStateChanged(elementId, actionTypeId, current, actionItem) {
  return {
    type: IX2_ELEMENT_STATE_CHANGED,
    payload: {
      elementId: elementId,
      actionTypeId: actionTypeId,
      current: current,
      actionItem: actionItem
    }
  };
};

exports.elementStateChanged = elementStateChanged;

var actionListPlaybackChanged = function actionListPlaybackChanged(_ref4) {
  var actionListId = _ref4.actionListId,
      isPlaying = _ref4.isPlaying;
  return {
    type: IX2_ACTION_LIST_PLAYBACK_CHANGED,
    payload: {
      actionListId: actionListId,
      isPlaying: isPlaying
    }
  };
};

exports.actionListPlaybackChanged = actionListPlaybackChanged;

var viewportWidthChanged = function viewportWidthChanged(_ref5) {
  var width = _ref5.width,
      mediaQueries = _ref5.mediaQueries;
  return {
    type: IX2_VIEWPORT_WIDTH_CHANGED,
    payload: {
      width: width,
      mediaQueries: mediaQueries
    }
  };
};

exports.viewportWidthChanged = viewportWidthChanged;

var mediaQueriesDefined = function mediaQueriesDefined() {
  return {
    type: IX2_MEDIA_QUERIES_DEFINED
  };
};

exports.mediaQueriesDefined = mediaQueriesDefined;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(126),
    baseLodash = __webpack_require__(67);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(126),
    baseLodash = __webpack_require__(67);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* eslint-disable eslint-comments/no-unlimited-disable */

/* eslint-disable */

/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */

/* prettier-ignore */

var _interopRequireDefault = __webpack_require__(1);

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

window.tram = function (a) {
  function b(a, b) {
    var c = new M.Bare();
    return c.init(a, b);
  }

  function c(a) {
    return a.replace(/[A-Z]/g, function (a) {
      return "-" + a.toLowerCase();
    });
  }

  function d(a) {
    var b = parseInt(a.slice(1), 16),
        c = b >> 16 & 255,
        d = b >> 8 & 255,
        e = 255 & b;
    return [c, d, e];
  }

  function e(a, b, c) {
    return "#" + (1 << 24 | a << 16 | b << 8 | c).toString(16).slice(1);
  }

  function f() {}

  function g(a, b) {
    j("Type warning: Expected: [" + a + "] Got: [" + (0, _typeof2["default"])(b) + "] " + b);
  }

  function h(a, b, c) {
    j("Units do not match [" + a + "]: " + b + ", " + c);
  }

  function i(a, b, c) {
    if (void 0 !== b && (c = b), void 0 === a) return c;
    var d = c;
    return $.test(a) || !_.test(a) ? d = parseInt(a, 10) : _.test(a) && (d = 1e3 * parseFloat(a)), 0 > d && (d = 0), d === d ? d : c;
  }

  function j(a) {
    U.debug && window && window.console.warn(a);
  }

  function k(a) {
    for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
      var e = a[b];
      e && d.push(e);
    }

    return d;
  }

  var l = function (a, b, c) {
    function d(a) {
      return "object" == (0, _typeof2["default"])(a);
    }

    function e(a) {
      return "function" == typeof a;
    }

    function f() {}

    function g(h, i) {
      function j() {
        var a = new k();
        return e(a.init) && a.init.apply(a, arguments), a;
      }

      function k() {}

      i === c && (i = h, h = Object), j.Bare = k;
      var l,
          m = f[a] = h[a],
          n = k[a] = j[a] = new f();
      return n.constructor = j, j.mixin = function (b) {
        return k[a] = j[a] = g(j, b)[a], j;
      }, j.open = function (a) {
        if (l = {}, e(a) ? l = a.call(j, n, m, j, h) : d(a) && (l = a), d(l)) for (var c in l) {
          b.call(l, c) && (n[c] = l[c]);
        }
        return e(n.init) || (n.init = h), j;
      }, j.open(i);
    }

    return g;
  }("prototype", {}.hasOwnProperty),
      m = {
    ease: ["ease", function (a, b, c, d) {
      var e = (a /= d) * a,
          f = e * a;
      return b + c * (-2.75 * f * e + 11 * e * e + -15.5 * f + 8 * e + .25 * a);
    }],
    "ease-in": ["ease-in", function (a, b, c, d) {
      var e = (a /= d) * a,
          f = e * a;
      return b + c * (-1 * f * e + 3 * e * e + -3 * f + 2 * e);
    }],
    "ease-out": ["ease-out", function (a, b, c, d) {
      var e = (a /= d) * a,
          f = e * a;
      return b + c * (.3 * f * e + -1.6 * e * e + 2.2 * f + -1.8 * e + 1.9 * a);
    }],
    "ease-in-out": ["ease-in-out", function (a, b, c, d) {
      var e = (a /= d) * a,
          f = e * a;
      return b + c * (2 * f * e + -5 * e * e + 2 * f + 2 * e);
    }],
    linear: ["linear", function (a, b, c, d) {
      return c * a / d + b;
    }],
    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (a, b, c, d) {
      return c * (a /= d) * a + b;
    }],
    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (a, b, c, d) {
      return -c * (a /= d) * (a - 2) + b;
    }],
    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b;
    }],
    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (a, b, c, d) {
      return c * (a /= d) * a * a + b;
    }],
    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (a, b, c, d) {
      return c * ((a = a / d - 1) * a * a + 1) + b;
    }],
    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b;
    }],
    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (a, b, c, d) {
      return c * (a /= d) * a * a * a + b;
    }],
    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (a, b, c, d) {
      return -c * ((a = a / d - 1) * a * a * a - 1) + b;
    }],
    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b;
    }],
    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (a, b, c, d) {
      return c * (a /= d) * a * a * a * a + b;
    }],
    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (a, b, c, d) {
      return c * ((a = a / d - 1) * a * a * a * a + 1) + b;
    }],
    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b;
    }],
    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (a, b, c, d) {
      return -c * Math.cos(a / d * (Math.PI / 2)) + c + b;
    }],
    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (a, b, c, d) {
      return c * Math.sin(a / d * (Math.PI / 2)) + b;
    }],
    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (a, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b;
    }],
    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (a, b, c, d) {
      return 0 === a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b;
    }],
    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (a, b, c, d) {
      return a === d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b;
    }],
    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (a, b, c, d) {
      return 0 === a ? b : a === d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b;
    }],
    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (a, b, c, d) {
      return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b;
    }],
    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (a, b, c, d) {
      return c * Math.sqrt(1 - (a = a / d - 1) * a) + b;
    }],
    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (a, b, c, d) {
      return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
    }],
    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (a, b, c, d, e) {
      return void 0 === e && (e = 1.70158), c * (a /= d) * a * ((e + 1) * a - e) + b;
    }],
    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (a, b, c, d, e) {
      return void 0 === e && (e = 1.70158), c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b;
    }],
    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (a, b, c, d, e) {
      return void 0 === e && (e = 1.70158), (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b;
    }]
  },
      n = {
    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
  },
      o = document,
      p = window,
      q = "bkwld-tram",
      r = /[\-\.0-9]/g,
      s = /[A-Z]/,
      t = "number",
      u = /^(rgb|#)/,
      v = /(em|cm|mm|in|pt|pc|px)$/,
      w = /(em|cm|mm|in|pt|pc|px|%)$/,
      x = /(deg|rad|turn)$/,
      y = "unitless",
      z = /(all|none) 0s ease 0s/,
      A = /^(width|height)$/,
      B = " ",
      C = o.createElement("a"),
      D = ["Webkit", "Moz", "O", "ms"],
      E = ["-webkit-", "-moz-", "-o-", "-ms-"],
      F = function F(a) {
    if (a in C.style) return {
      dom: a,
      css: a
    };
    var b,
        c,
        d = "",
        e = a.split("-");

    for (b = 0; b < e.length; b++) {
      d += e[b].charAt(0).toUpperCase() + e[b].slice(1);
    }

    for (b = 0; b < D.length; b++) {
      if (c = D[b] + d, c in C.style) return {
        dom: c,
        css: E[b] + a
      };
    }
  },
      G = b.support = {
    bind: Function.prototype.bind,
    transform: F("transform"),
    transition: F("transition"),
    backface: F("backface-visibility"),
    timing: F("transition-timing-function")
  };

  if (G.transition) {
    var H = G.timing.dom;
    if (C.style[H] = m["ease-in-back"][0], !C.style[H]) for (var I in n) {
      m[I][0] = n[I];
    }
  }

  var J = b.frame = function () {
    var a = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
    return a && G.bind ? a.bind(p) : function (a) {
      p.setTimeout(a, 16);
    };
  }(),
      K = b.now = function () {
    var a = p.performance,
        b = a && (a.now || a.webkitNow || a.msNow || a.mozNow);
    return b && G.bind ? b.bind(a) : Date.now || function () {
      return +new Date();
    };
  }(),
      L = l(function (b) {
    function d(a, b) {
      var c = k(("" + a).split(B)),
          d = c[0];
      b = b || {};
      var e = Y[d];
      if (!e) return j("Unsupported property: " + d);

      if (!b.weak || !this.props[d]) {
        var f = e[0],
            g = this.props[d];
        return g || (g = this.props[d] = new f.Bare()), g.init(this.$el, c, e, b), g;
      }
    }

    function e(a, b, c) {
      if (a) {
        var e = (0, _typeof2["default"])(a);
        if (b || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == e && b) return this.timer = new S({
          duration: a,
          context: this,
          complete: h
        }), void (this.active = !0);

        if ("string" == e && b) {
          switch (a) {
            case "hide":
              o.call(this);
              break;

            case "stop":
              l.call(this);
              break;

            case "redraw":
              p.call(this);
              break;

            default:
              d.call(this, a, c && c[1]);
          }

          return h.call(this);
        }

        if ("function" == e) return void a.call(this, this);

        if ("object" == e) {
          var f = 0;
          u.call(this, a, function (a, b) {
            a.span > f && (f = a.span), a.stop(), a.animate(b);
          }, function (a) {
            "wait" in a && (f = i(a.wait, 0));
          }), t.call(this), f > 0 && (this.timer = new S({
            duration: f,
            context: this
          }), this.active = !0, b && (this.timer.complete = h));
          var g = this,
              j = !1,
              k = {};
          J(function () {
            u.call(g, a, function (a) {
              a.active && (j = !0, k[a.name] = a.nextStyle);
            }), j && g.$el.css(k);
          });
        }
      }
    }

    function f(a) {
      a = i(a, 0), this.active ? this.queue.push({
        options: a
      }) : (this.timer = new S({
        duration: a,
        context: this,
        complete: h
      }), this.active = !0);
    }

    function g(a) {
      return this.active ? (this.queue.push({
        options: a,
        args: arguments
      }), void (this.timer.complete = h)) : j("No active transition timer. Use start() or wait() before then().");
    }

    function h() {
      if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
        var a = this.queue.shift();
        e.call(this, a.options, !0, a.args);
      }
    }

    function l(a) {
      this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
      var b;
      "string" == typeof a ? (b = {}, b[a] = 1) : b = "object" == (0, _typeof2["default"])(a) && null != a ? a : this.props, u.call(this, b, v), t.call(this);
    }

    function m(a) {
      l.call(this, a), u.call(this, a, w, x);
    }

    function n(a) {
      "string" != typeof a && (a = "block"), this.el.style.display = a;
    }

    function o() {
      l.call(this), this.el.style.display = "none";
    }

    function p() {
      this.el.offsetHeight;
    }

    function r() {
      l.call(this), a.removeData(this.el, q), this.$el = this.el = null;
    }

    function t() {
      var a,
          b,
          c = [];
      this.upstream && c.push(this.upstream);

      for (a in this.props) {
        b = this.props[a], b.active && c.push(b.string);
      }

      c = c.join(","), this.style !== c && (this.style = c, this.el.style[G.transition.dom] = c);
    }

    function u(a, b, e) {
      var f,
          g,
          h,
          i,
          j = b !== v,
          k = {};

      for (f in a) {
        h = a[f], f in Z ? (k.transform || (k.transform = {}), k.transform[f] = h) : (s.test(f) && (f = c(f)), f in Y ? k[f] = h : (i || (i = {}), i[f] = h));
      }

      for (f in k) {
        if (h = k[f], g = this.props[f], !g) {
          if (!j) continue;
          g = d.call(this, f);
        }

        b.call(this, g, h);
      }

      e && i && e.call(this, i);
    }

    function v(a) {
      a.stop();
    }

    function w(a, b) {
      a.set(b);
    }

    function x(a) {
      this.$el.css(a);
    }

    function y(a, c) {
      b[a] = function () {
        return this.children ? A.call(this, c, arguments) : (this.el && c.apply(this, arguments), this);
      };
    }

    function A(a, b) {
      var c,
          d = this.children.length;

      for (c = 0; d > c; c++) {
        a.apply(this.children[c], b);
      }

      return this;
    }

    b.init = function (b) {
      if (this.$el = a(b), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, U.keepInherited && !U.fallback) {
        var c = W(this.el, "transition");
        c && !z.test(c) && (this.upstream = c);
      }

      G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
    }, y("add", d), y("start", e), y("wait", f), y("then", g), y("next", h), y("stop", l), y("set", m), y("show", n), y("hide", o), y("redraw", p), y("destroy", r);
  }),
      M = l(L, function (b) {
    function c(b, c) {
      var d = a.data(b, q) || a.data(b, q, new L.Bare());
      return d.el || d.init(b), c ? d.start(c) : d;
    }

    b.init = function (b, d) {
      var e = a(b);
      if (!e.length) return this;
      if (1 === e.length) return c(e[0], d);
      var f = [];
      return e.each(function (a, b) {
        f.push(c(b, d));
      }), this.children = f, this;
    };
  }),
      N = l(function (a) {
    function b() {
      var a = this.get();
      this.update("auto");
      var b = this.get();
      return this.update(a), b;
    }

    function c(a, b, c) {
      return void 0 !== b && (c = b), a in m ? a : c;
    }

    function d(a) {
      var b = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);
      return (b ? e(b[1], b[2], b[3]) : a).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
    }

    var f = {
      duration: 500,
      ease: "ease",
      delay: 0
    };
    a.init = function (a, b, d, e) {
      this.$el = a, this.el = a[0];
      var g = b[0];
      d[2] && (g = d[2]), X[g] && (g = X[g]), this.name = g, this.type = d[1], this.duration = i(b[1], this.duration, f.duration), this.ease = c(b[2], this.ease, f.ease), this.delay = i(b[3], this.delay, f.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e.unit || this.unit || U.defaultUnit, this.angle = e.angle || this.angle || U.defaultAngle, U.fallback || e.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
    }, a.set = function (a) {
      a = this.convert(a, this.type), this.update(a), this.redraw();
    }, a.transition = function (a) {
      this.active = !0, a = this.convert(a, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a && (a = b.call(this))), this.nextStyle = a;
    }, a.fallback = function (a) {
      var c = this.el.style[this.name] || this.convert(this.get(), this.type);
      a = this.convert(a, this.type), this.auto && ("auto" == c && (c = this.convert(this.get(), this.type)), "auto" == a && (a = b.call(this))), this.tween = new R({
        from: c,
        to: a,
        duration: this.duration,
        delay: this.delay,
        ease: this.ease,
        update: this.update,
        context: this
      });
    }, a.get = function () {
      return W(this.el, this.name);
    }, a.update = function (a) {
      V(this.el, this.name, a);
    }, a.stop = function () {
      (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, V(this.el, this.name, this.get()));
      var a = this.tween;
      a && a.context && a.destroy();
    }, a.convert = function (a, b) {
      if ("auto" == a && this.auto) return a;
      var c,
          e = "number" == typeof a,
          f = "string" == typeof a;

      switch (b) {
        case t:
          if (e) return a;
          if (f && "" === a.replace(r, "")) return +a;
          c = "number(unitless)";
          break;

        case u:
          if (f) {
            if ("" === a && this.original) return this.original;
            if (b.test(a)) return "#" == a.charAt(0) && 7 == a.length ? a : d(a);
          }

          c = "hex or rgb string";
          break;

        case v:
          if (e) return a + this.unit;
          if (f && b.test(a)) return a;
          c = "number(px) or string(unit)";
          break;

        case w:
          if (e) return a + this.unit;
          if (f && b.test(a)) return a;
          c = "number(px) or string(unit or %)";
          break;

        case x:
          if (e) return a + this.angle;
          if (f && b.test(a)) return a;
          c = "number(deg) or string(angle)";
          break;

        case y:
          if (e) return a;
          if (f && w.test(a)) return a;
          c = "number(unitless) or string(unit or %)";
      }

      return g(c, a), a;
    }, a.redraw = function () {
      this.el.offsetHeight;
    };
  }),
      O = l(N, function (a, b) {
    a.init = function () {
      b.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
    };
  }),
      P = l(N, function (a, b) {
    a.init = function () {
      b.init.apply(this, arguments), this.animate = this.fallback;
    }, a.get = function () {
      return this.$el[this.name]();
    }, a.update = function (a) {
      this.$el[this.name](a);
    };
  }),
      Q = l(N, function (a, b) {
    function c(a, b) {
      var c, d, e, f, g;

      for (c in a) {
        f = Z[c], e = f[0], d = f[1] || c, g = this.convert(a[c], e), b.call(this, d, g, e);
      }
    }

    a.init = function () {
      b.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
    }, a.set = function (a) {
      c.call(this, a, function (a, b) {
        this.current[a] = b;
      }), V(this.el, this.name, this.style(this.current)), this.redraw();
    }, a.transition = function (a) {
      var b = this.values(a);
      this.tween = new T({
        current: this.current,
        values: b,
        duration: this.duration,
        delay: this.delay,
        ease: this.ease
      });
      var c,
          d = {};

      for (c in this.current) {
        d[c] = c in b ? b[c] : this.current[c];
      }

      this.active = !0, this.nextStyle = this.style(d);
    }, a.fallback = function (a) {
      var b = this.values(a);
      this.tween = new T({
        current: this.current,
        values: b,
        duration: this.duration,
        delay: this.delay,
        ease: this.ease,
        update: this.update,
        context: this
      });
    }, a.update = function () {
      V(this.el, this.name, this.style(this.current));
    }, a.style = function (a) {
      var b,
          c = "";

      for (b in a) {
        c += b + "(" + a[b] + ") ";
      }

      return c;
    }, a.values = function (a) {
      var b,
          d = {};
      return c.call(this, a, function (a, c, e) {
        d[a] = c, void 0 === this.current[a] && (b = 0, ~a.indexOf("scale") && (b = 1), this.current[a] = this.convert(b, e));
      }), d;
    };
  }),
      R = l(function (b) {
    function c(a) {
      1 === n.push(a) && J(g);
    }

    function g() {
      var a,
          b,
          c,
          d = n.length;
      if (d) for (J(g), b = K(), a = d; a--;) {
        c = n[a], c && c.render(b);
      }
    }

    function i(b) {
      var c,
          d = a.inArray(b, n);
      d >= 0 && (c = n.slice(d + 1), n.length = d, c.length && (n = n.concat(c)));
    }

    function j(a) {
      return Math.round(a * o) / o;
    }

    function k(a, b, c) {
      return e(a[0] + c * (b[0] - a[0]), a[1] + c * (b[1] - a[1]), a[2] + c * (b[2] - a[2]));
    }

    var l = {
      ease: m.ease[1],
      from: 0,
      to: 1
    };
    b.init = function (a) {
      this.duration = a.duration || 0, this.delay = a.delay || 0;
      var b = a.ease || l.ease;
      m[b] && (b = m[b][1]), "function" != typeof b && (b = l.ease), this.ease = b, this.update = a.update || f, this.complete = a.complete || f, this.context = a.context || this, this.name = a.name;
      var c = a.from,
          d = a.to;
      void 0 === c && (c = l.from), void 0 === d && (d = l.to), this.unit = a.unit || "", "number" == typeof c && "number" == typeof d ? (this.begin = c, this.change = d - c) : this.format(d, c), this.value = this.begin + this.unit, this.start = K(), a.autoplay !== !1 && this.play();
    }, b.play = function () {
      this.active || (this.start || (this.start = K()), this.active = !0, c(this));
    }, b.stop = function () {
      this.active && (this.active = !1, i(this));
    }, b.render = function (a) {
      var b,
          c = a - this.start;

      if (this.delay) {
        if (c <= this.delay) return;
        c -= this.delay;
      }

      if (c < this.duration) {
        var d = this.ease(c, 0, 1, this.duration);
        return b = this.startRGB ? k(this.startRGB, this.endRGB, d) : j(this.begin + d * this.change), this.value = b + this.unit, void this.update.call(this.context, this.value);
      }

      b = this.endHex || this.begin + this.change, this.value = b + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
    }, b.format = function (a, b) {
      if (b += "", a += "", "#" == a.charAt(0)) return this.startRGB = d(b), this.endRGB = d(a), this.endHex = a, this.begin = 0, void (this.change = 1);

      if (!this.unit) {
        var c = b.replace(r, ""),
            e = a.replace(r, "");
        c !== e && h("tween", b, a), this.unit = c;
      }

      b = parseFloat(b), a = parseFloat(a), this.begin = this.value = b, this.change = a - b;
    }, b.destroy = function () {
      this.stop(), this.context = null, this.ease = this.update = this.complete = f;
    };
    var n = [],
        o = 1e3;
  }),
      S = l(R, function (a) {
    a.init = function (a) {
      this.duration = a.duration || 0, this.complete = a.complete || f, this.context = a.context, this.play();
    }, a.render = function (a) {
      var b = a - this.start;
      b < this.duration || (this.complete.call(this.context), this.destroy());
    };
  }),
      T = l(R, function (a, b) {
    a.init = function (a) {
      this.context = a.context, this.update = a.update, this.tweens = [], this.current = a.current;
      var b, c;

      for (b in a.values) {
        c = a.values[b], this.current[b] !== c && this.tweens.push(new R({
          name: b,
          from: this.current[b],
          to: c,
          duration: a.duration,
          delay: a.delay,
          ease: a.ease,
          autoplay: !1
        }));
      }

      this.play();
    }, a.render = function (a) {
      var b,
          c,
          d = this.tweens.length,
          e = !1;

      for (b = d; b--;) {
        c = this.tweens[b], c.context && (c.render(a), this.current[c.name] = c.value, e = !0);
      }

      return e ? void (this.update && this.update.call(this.context)) : this.destroy();
    }, a.destroy = function () {
      if (b.destroy.call(this), this.tweens) {
        var a,
            c = this.tweens.length;

        for (a = c; a--;) {
          this.tweens[a].destroy();
        }

        this.tweens = null, this.current = null;
      }
    };
  }),
      U = b.config = {
    debug: !1,
    defaultUnit: "px",
    defaultAngle: "deg",
    keepInherited: !1,
    hideBackface: !1,
    perspective: "",
    fallback: !G.transition,
    agentTests: []
  };

  b.fallback = function (a) {
    if (!G.transition) return U.fallback = !0;
    U.agentTests.push("(" + a + ")");
    var b = new RegExp(U.agentTests.join("|"), "i");
    U.fallback = b.test(navigator.userAgent);
  }, b.fallback("6.0.[2-5] Safari"), b.tween = function (a) {
    return new R(a);
  }, b.delay = function (a, b, c) {
    return new S({
      complete: b,
      duration: a,
      context: c
    });
  }, a.fn.tram = function (a) {
    return b.call(null, this, a);
  };
  var V = a.style,
      W = a.css,
      X = {
    transform: G.transform && G.transform.css
  },
      Y = {
    color: [O, u],
    background: [O, u, "background-color"],
    "outline-color": [O, u],
    "border-color": [O, u],
    "border-top-color": [O, u],
    "border-right-color": [O, u],
    "border-bottom-color": [O, u],
    "border-left-color": [O, u],
    "border-width": [N, v],
    "border-top-width": [N, v],
    "border-right-width": [N, v],
    "border-bottom-width": [N, v],
    "border-left-width": [N, v],
    "border-spacing": [N, v],
    "letter-spacing": [N, v],
    margin: [N, v],
    "margin-top": [N, v],
    "margin-right": [N, v],
    "margin-bottom": [N, v],
    "margin-left": [N, v],
    padding: [N, v],
    "padding-top": [N, v],
    "padding-right": [N, v],
    "padding-bottom": [N, v],
    "padding-left": [N, v],
    "outline-width": [N, v],
    opacity: [N, t],
    top: [N, w],
    right: [N, w],
    bottom: [N, w],
    left: [N, w],
    "font-size": [N, w],
    "text-indent": [N, w],
    "word-spacing": [N, w],
    width: [N, w],
    "min-width": [N, w],
    "max-width": [N, w],
    height: [N, w],
    "min-height": [N, w],
    "max-height": [N, w],
    "line-height": [N, y],
    "scroll-top": [P, t, "scrollTop"],
    "scroll-left": [P, t, "scrollLeft"]
  },
      Z = {};
  G.transform && (Y.transform = [Q], Z = {
    x: [w, "translateX"],
    y: [w, "translateY"],
    rotate: [x],
    rotateX: [x],
    rotateY: [x],
    scale: [t],
    scaleX: [t],
    scaleY: [t],
    skew: [x],
    skewX: [x],
    skewY: [x]
  }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
  var $ = /ms/,
      _ = /s|\./;
  return a.tram = b;
}(window.jQuery);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var call = __webpack_require__(40);
var propertyIsEnumerableModule = __webpack_require__(144);
var createPropertyDescriptor = __webpack_require__(71);
var toIndexedObject = __webpack_require__(26);
var toPropertyKey = __webpack_require__(73);
var hasOwn = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(80);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(147);
var isSymbol = __webpack_require__(74);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getBuiltIn = __webpack_require__(27);
var isCallable = __webpack_require__(7);
var isPrototypeOf = __webpack_require__(148);
var USE_SYMBOL_AS_UID = __webpack_require__(75);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(76);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(149);
var fails = __webpack_require__(19);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(78);
var hasOwn = __webpack_require__(9);
var uid = __webpack_require__(79);
var NATIVE_SYMBOL = __webpack_require__(76);
var USE_SYMBOL_AS_UID = __webpack_require__(75);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(155);
var store = __webpack_require__(41);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: 'Â© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(5);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var fails = __webpack_require__(19);
var createElement = __webpack_require__(81);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(20);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(5);
var isCallable = __webpack_require__(7);
var store = __webpack_require__(41);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(78);
var uid = __webpack_require__(79);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(5);
var hasOwn = __webpack_require__(9);
var toIndexedObject = __webpack_require__(26);
var indexOf = __webpack_require__(85).indexOf;
var hiddenKeys = __webpack_require__(44);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(26);
var toAbsoluteIndex = __webpack_require__(164);
var lengthOfArrayLike = __webpack_require__(165);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return _createStore__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return _combineReducers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {}



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(180);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(182);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }
  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineReducers; });
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (false) { var unexpectedKeyCache; }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bindActionCreators; });
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyMiddleware; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose__WEBPACK_IMPORTED_MODULE_0__["default"].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionAppliesTo = exports.ActionTypeConsts = void 0;
var ActionTypeConsts = {
  TRANSFORM_MOVE: 'TRANSFORM_MOVE',
  TRANSFORM_SCALE: 'TRANSFORM_SCALE',
  TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
  TRANSFORM_SKEW: 'TRANSFORM_SKEW',
  STYLE_OPACITY: 'STYLE_OPACITY',
  STYLE_SIZE: 'STYLE_SIZE',
  STYLE_FILTER: 'STYLE_FILTER',
  STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
  STYLE_BORDER: 'STYLE_BORDER',
  STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
  PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
  GENERAL_DISPLAY: 'GENERAL_DISPLAY',
  GENERAL_START_ACTION: 'GENERAL_START_ACTION',
  GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
  // TODO: Clean these up below because they're not used at this time
  GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
  GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
  GENERAL_LOOP: 'GENERAL_LOOP',
  STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW'
};
exports.ActionTypeConsts = ActionTypeConsts;
var ActionAppliesTo = {
  ELEMENT: 'ELEMENT',
  ELEMENT_CLASS: 'ELEMENT_CLASS',
  TRIGGER_ELEMENT: 'TRIGGER_ELEMENT'
};
exports.ActionAppliesTo = ActionAppliesTo;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(96),
    findIndex = __webpack_require__(260);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(10),
    isArrayLike = __webpack_require__(16),
    keys = __webpack_require__(35);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(31),
    stackClear = __webpack_require__(202),
    stackDelete = __webpack_require__(203),
    stackGet = __webpack_require__(204),
    stackHas = __webpack_require__(205),
    stackSet = __webpack_require__(206);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObject = __webpack_require__(8);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 100 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(225),
    isObjectLike = __webpack_require__(12);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(226),
    arraySome = __webpack_require__(229),
    cacheHas = __webpack_require__(230);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(52),
    isArray = __webpack_require__(2);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(237),
    stubArray = __webpack_require__(105);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(238),
    isArguments = __webpack_require__(36),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(53),
    isIndex = __webpack_require__(54),
    isTypedArray = __webpack_require__(55);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(261);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inQuad = inQuad;
exports.outQuad = outQuad;
exports.inOutQuad = inOutQuad;
exports.inCubic = inCubic;
exports.outCubic = outCubic;
exports.inOutCubic = inOutCubic;
exports.inQuart = inQuart;
exports.outQuart = outQuart;
exports.inOutQuart = inOutQuart;
exports.inQuint = inQuint;
exports.outQuint = outQuint;
exports.inOutQuint = inOutQuint;
exports.inSine = inSine;
exports.outSine = outSine;
exports.inOutSine = inOutSine;
exports.inExpo = inExpo;
exports.outExpo = outExpo;
exports.inOutExpo = inOutExpo;
exports.inCirc = inCirc;
exports.outCirc = outCirc;
exports.inOutCirc = inOutCirc;
exports.outBounce = outBounce;
exports.inBack = inBack;
exports.outBack = outBack;
exports.inOutBack = inOutBack;
exports.inElastic = inElastic;
exports.outElastic = outElastic;
exports.inOutElastic = inOutElastic;
exports.swingFromTo = swingFromTo;
exports.swingFrom = swingFrom;
exports.swingTo = swingTo;
exports.bounce = bounce;
exports.bouncePast = bouncePast;
exports.easeInOut = exports.easeOut = exports.easeIn = exports.ease = void 0;

var _bezierEasing = _interopRequireDefault(__webpack_require__(117)); // Easing functions adapted from Thomas Fuchs & Jeremy Kahn
// Easing Equations (c) 2003 Robert Penner, BSD license
// https://raw.github.com/danro/easing-js/master/LICENSE


var magicSwing = 1.70158;
var ease = (0, _bezierEasing["default"])(0.25, 0.1, 0.25, 1.0);
exports.ease = ease;
var easeIn = (0, _bezierEasing["default"])(0.42, 0.0, 1.0, 1.0);
exports.easeIn = easeIn;
var easeOut = (0, _bezierEasing["default"])(0.0, 0.0, 0.58, 1.0);
exports.easeOut = easeOut;
var easeInOut = (0, _bezierEasing["default"])(0.42, 0.0, 0.58, 1.0);
exports.easeInOut = easeInOut;

function inQuad(pos) {
  return Math.pow(pos, 2);
}

function outQuad(pos) {
  return -(Math.pow(pos - 1, 2) - 1);
}

function inOutQuad(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 2);
  }

  return -0.5 * ((pos -= 2) * pos - 2);
}

function inCubic(pos) {
  return Math.pow(pos, 3);
}

function outCubic(pos) {
  return Math.pow(pos - 1, 3) + 1;
}

function inOutCubic(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3);
  }

  return 0.5 * (Math.pow(pos - 2, 3) + 2);
}

function inQuart(pos) {
  return Math.pow(pos, 4);
}

function outQuart(pos) {
  return -(Math.pow(pos - 1, 4) - 1);
}

function inOutQuart(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 4);
  }

  return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
}

function inQuint(pos) {
  return Math.pow(pos, 5);
}

function outQuint(pos) {
  return Math.pow(pos - 1, 5) + 1;
}

function inOutQuint(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 5);
  }

  return 0.5 * (Math.pow(pos - 2, 5) + 2);
}

function inSine(pos) {
  return -Math.cos(pos * (Math.PI / 2)) + 1;
}

function outSine(pos) {
  return Math.sin(pos * (Math.PI / 2));
}

function inOutSine(pos) {
  return -0.5 * (Math.cos(Math.PI * pos) - 1);
}

function inExpo(pos) {
  return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
}

function outExpo(pos) {
  return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
}

function inOutExpo(pos) {
  if (pos === 0) {
    return 0;
  }

  if (pos === 1) {
    return 1;
  }

  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(2, 10 * (pos - 1));
  }

  return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
}

function inCirc(pos) {
  return -(Math.sqrt(1 - pos * pos) - 1);
}

function outCirc(pos) {
  return Math.sqrt(1 - Math.pow(pos - 1, 2));
}

function inOutCirc(pos) {
  if ((pos /= 0.5) < 1) {
    return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
  }

  return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
}

function outBounce(pos) {
  if (pos < 1 / 2.75) {
    return 7.5625 * pos * pos;
  } else if (pos < 2 / 2.75) {
    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
  } else if (pos < 2.5 / 2.75) {
    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
  } else {
    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
  }
}

function inBack(pos) {
  var s = magicSwing;
  return pos * pos * ((s + 1) * pos - s);
}

function outBack(pos) {
  var s = magicSwing;
  return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
}

function inOutBack(pos) {
  var s = magicSwing;

  if ((pos /= 0.5) < 1) {
    return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
  }

  return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
}

function inElastic(pos) {
  var s = magicSwing;
  var p = 0;
  var a = 1;

  if (pos === 0) {
    return 0;
  }

  if (pos === 1) {
    return 1;
  }

  if (!p) {
    p = 0.3;
  }

  if (a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }

  return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
}

function outElastic(pos) {
  var s = magicSwing;
  var p = 0;
  var a = 1;

  if (pos === 0) {
    return 0;
  }

  if (pos === 1) {
    return 1;
  }

  if (!p) {
    p = 0.3;
  }

  if (a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }

  return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
}

function inOutElastic(pos) {
  var s = magicSwing;
  var p = 0;
  var a = 1;

  if (pos === 0) {
    return 0;
  }

  if ((pos /= 1 / 2) === 2) {
    return 1;
  }

  if (!p) {
    p = 0.3 * 1.5;
  }

  if (a < 1) {
    a = 1;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(1 / a);
  }

  if (pos < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
  }

  return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
}

function swingFromTo(pos) {
  var s = magicSwing;
  return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
}

function swingFrom(pos) {
  var s = magicSwing;
  return pos * pos * ((s + 1) * pos - s);
}

function swingTo(pos) {
  var s = magicSwing;
  return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
}

function bounce(pos) {
  if (pos < 1 / 2.75) {
    return 7.5625 * pos * pos;
  } else if (pos < 2 / 2.75) {
    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
  } else if (pos < 2.5 / 2.75) {
    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
  } else {
    return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
  }
}

function bouncePast(pos) {
  if (pos < 1 / 2.75) {
    return 7.5625 * pos * pos;
  } else if (pos < 2 / 2.75) {
    return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
  } else if (pos < 2.5 / 2.75) {
    return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
  } else {
    return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by GaÃ«tan Renaudeau 2014 - 2015 â€“ MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(1);

var _toConsumableArray2 = _interopRequireDefault2(__webpack_require__(119));

var _interopRequireDefault = __webpack_require__(1);

var _interopRequireWildcard = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optimizeFloat = optimizeFloat;
exports.createBezierEasing = createBezierEasing;
exports.applyEasing = applyEasing;

var easings = _interopRequireWildcard(__webpack_require__(116));

var _bezierEasing = _interopRequireDefault(__webpack_require__(117));

function optimizeFloat(value) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var pow = Math.pow(base, digits);

  var _float = Number(Math.round(value * pow) / pow);

  return Math.abs(_float) > 0.0001 ? _float : 0;
}

function createBezierEasing(easing) {
  return (0, _bezierEasing["default"]).apply(void 0, (0, _toConsumableArray2["default"])(easing));
}

function applyEasing(easing, position, customEasingFn) {
  if (position === 0) {
    return 0;
  }

  if (position === 1) {
    return 1;
  }

  if (customEasingFn) {
    return optimizeFloat(position > 0 ? customEasingFn(position) : position);
  }

  return optimizeFloat(position > 0 && easing && easings[easing] ? easings[easing](position) : position);
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(264);

var iterableToArray = __webpack_require__(265);

var nonIterableSpread = __webpack_require__(266);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(__webpack_require__(21));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPluginType = isPluginType;
exports.clearPlugin = exports.renderPlugin = exports.createPluginInstance = exports.getPluginDestination = exports.getPluginDuration = exports.getPluginOrigin = exports.getPluginConfig = void 0;

var _IX2LottieUtils = __webpack_require__(268);

var _constants = __webpack_require__(4);

var _IX2BrowserSupport = __webpack_require__(48); // eslint-disable-next-line webflow/module-top-level-imports, webflow/packages-must-be-defined


var pluginMethodMap = (0, _defineProperty2["default"])({}, _constants.ActionTypeConsts.PLUGIN_LOTTIE, {
  getConfig: _IX2LottieUtils.getPluginConfig,
  getOrigin: _IX2LottieUtils.getPluginOrigin,
  getDuration: _IX2LottieUtils.getPluginDuration,
  getDestination: _IX2LottieUtils.getPluginDestination,
  createInstance: _IX2LottieUtils.createPluginInstance,
  render: _IX2LottieUtils.renderPlugin,
  clear: _IX2LottieUtils.clearPlugin
});

function isPluginType(actionTypeId) {
  return actionTypeId === _constants.ActionTypeConsts.PLUGIN_LOTTIE;
}

var pluginMethod = function pluginMethod(methodName) {
  return function (actionTypeId) {
    if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
      // IX2 plugins require browser libs for now
      return function () {
        return null;
      };
    }

    var plugin = pluginMethodMap[actionTypeId];

    if (!plugin) {
      throw new Error("IX2 no plugin configured for: ".concat(actionTypeId));
    }

    var method = plugin[methodName];

    if (!method) {
      throw new Error("IX2 invalid plugin method: ".concat(methodName));
    }

    return method;
  };
};

var getPluginConfig = pluginMethod('getConfig');
exports.getPluginConfig = getPluginConfig;
var getPluginOrigin = pluginMethod('getOrigin');
exports.getPluginOrigin = getPluginOrigin;
var getPluginDuration = pluginMethod('getDuration');
exports.getPluginDuration = getPluginDuration;
var getPluginDestination = pluginMethod('getDestination');
exports.getPluginDestination = getPluginDestination;
var createPluginInstance = pluginMethod('createInstance');
exports.createPluginInstance = createPluginInstance;
var renderPlugin = pluginMethod('render');
exports.renderPlugin = renderPlugin;
var clearPlugin = pluginMethod('clear');
exports.clearPlugin = clearPlugin;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(122),
    createBaseEach = __webpack_require__(275);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(273),
    keys = __webpack_require__(35);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(1);

var _toConsumableArray2 = _interopRequireDefault2(__webpack_require__(119));

var _interopRequireWildcard = __webpack_require__(18);

var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeRequests = observeRequests;
exports.startEngine = startEngine;
exports.stopEngine = stopEngine;
exports.stopAllActionGroups = stopAllActionGroups;
exports.stopActionGroup = stopActionGroup;
exports.startActionGroup = startActionGroup;

var _extends2 = _interopRequireDefault(__webpack_require__(30));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(282));

var _find = _interopRequireDefault(__webpack_require__(95));

var _get = _interopRequireDefault(__webpack_require__(60));

var _size = _interopRequireDefault(__webpack_require__(283));

var _omitBy = _interopRequireDefault(__webpack_require__(289));

var _isEmpty = _interopRequireDefault(__webpack_require__(301));

var _mapValues = _interopRequireDefault(__webpack_require__(302));

var _forEach = _interopRequireDefault(__webpack_require__(303));

var _throttle = _interopRequireDefault(__webpack_require__(306));

var _constants = __webpack_require__(4);

var _shared = __webpack_require__(14);

var _IX2EngineActions = __webpack_require__(65);

var elementApi = _interopRequireWildcard(__webpack_require__(309));

var _IX2VanillaEvents = _interopRequireDefault(__webpack_require__(310));
/* eslint-env browser */


var QuickEffectsIdList = Object.keys(_constants.QuickEffectIds);

var isQuickEffect = function isQuickEffect(actionTypeId) {
  return QuickEffectsIdList.includes(actionTypeId);
};

var _constants$IX2EngineC = _constants.IX2EngineConstants,
    COLON_DELIMITER = _constants$IX2EngineC.COLON_DELIMITER,
    BOUNDARY_SELECTOR = _constants$IX2EngineC.BOUNDARY_SELECTOR,
    HTML_ELEMENT = _constants$IX2EngineC.HTML_ELEMENT,
    RENDER_GENERAL = _constants$IX2EngineC.RENDER_GENERAL,
    W_MOD_IX = _constants$IX2EngineC.W_MOD_IX;
var _shared$IX2VanillaUti = _shared.IX2VanillaUtils,
    getAffectedElements = _shared$IX2VanillaUti.getAffectedElements,
    getElementId = _shared$IX2VanillaUti.getElementId,
    getDestinationValues = _shared$IX2VanillaUti.getDestinationValues,
    observeStore = _shared$IX2VanillaUti.observeStore,
    getInstanceId = _shared$IX2VanillaUti.getInstanceId,
    renderHTMLElement = _shared$IX2VanillaUti.renderHTMLElement,
    clearAllStyles = _shared$IX2VanillaUti.clearAllStyles,
    getMaxDurationItemIndex = _shared$IX2VanillaUti.getMaxDurationItemIndex,
    getComputedStyle = _shared$IX2VanillaUti.getComputedStyle,
    getInstanceOrigin = _shared$IX2VanillaUti.getInstanceOrigin,
    reduceListToGroup = _shared$IX2VanillaUti.reduceListToGroup,
    shouldNamespaceEventParameter = _shared$IX2VanillaUti.shouldNamespaceEventParameter,
    getNamespacedParameterId = _shared$IX2VanillaUti.getNamespacedParameterId,
    shouldAllowMediaQuery = _shared$IX2VanillaUti.shouldAllowMediaQuery,
    cleanupHTMLElement = _shared$IX2VanillaUti.cleanupHTMLElement,
    stringifyTarget = _shared$IX2VanillaUti.stringifyTarget,
    mediaQueriesEqual = _shared$IX2VanillaUti.mediaQueriesEqual,
    shallowEqual = _shared$IX2VanillaUti.shallowEqual;
var _shared$IX2VanillaPlu = _shared.IX2VanillaPlugins,
    isPluginType = _shared$IX2VanillaPlu.isPluginType,
    createPluginInstance = _shared$IX2VanillaPlu.createPluginInstance,
    getPluginDuration = _shared$IX2VanillaPlu.getPluginDuration;
var ua = navigator.userAgent;
var IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/); // Keep throttled events at ~80fps to reduce reflows while maintaining render accuracy

var THROTTLED_EVENT_WAIT = 12; // $FlowFixMe

function observeRequests(store) {
  observeStore({
    store: store,
    select: function select(_ref) {
      var ixRequest = _ref.ixRequest;
      return ixRequest.preview;
    },
    onChange: handlePreviewRequest
  });
  observeStore({
    store: store,
    select: function select(_ref2) {
      var ixRequest = _ref2.ixRequest;
      return ixRequest.playback;
    },
    onChange: handlePlaybackRequest
  });
  observeStore({
    store: store,
    select: function select(_ref3) {
      var ixRequest = _ref3.ixRequest;
      return ixRequest.stop;
    },
    onChange: handleStopRequest
  });
  observeStore({
    store: store,
    select: function select(_ref4) {
      var ixRequest = _ref4.ixRequest;
      return ixRequest.clear;
    },
    onChange: handleClearRequest
  });
}

function observeMediaQueryChange(store) {
  observeStore({
    store: store,
    select: function select(_ref5) {
      var ixSession = _ref5.ixSession;
      return ixSession.mediaQueryKey;
    },
    onChange: function onChange() {
      stopEngine(store);
      clearAllStyles({
        store: store,
        elementApi: elementApi
      });
      startEngine({
        store: store,
        allowEvents: true
      });
      dispatchPageUpdateEvent();
    }
  });
}

function observeOneRenderTick(store, onTick) {
  var unsubscribe = observeStore({
    store: store,
    select: function select(_ref6) {
      var ixSession = _ref6.ixSession;
      return ixSession.tick;
    },
    onChange: function onChange(tick) {
      onTick(tick);
      unsubscribe();
    }
  });
}

function handlePreviewRequest(_ref7, store) {
  var rawData = _ref7.rawData,
      defer = _ref7.defer;

  var start = function start() {
    startEngine({
      store: store,
      rawData: rawData,
      allowEvents: true
    });
    dispatchPageUpdateEvent();
  };

  defer ? setTimeout(start, 0) : start();
}

function dispatchPageUpdateEvent() {
  document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
}

function handlePlaybackRequest(playback, store) {
  var actionTypeId = playback.actionTypeId,
      actionListId = playback.actionListId,
      actionItemId = playback.actionItemId,
      eventId = playback.eventId,
      allowEvents = playback.allowEvents,
      immediate = playback.immediate,
      testManual = playback.testManual,
      _playback$verbose = playback.verbose,
      verbose = _playback$verbose === void 0 ? true : _playback$verbose;
  var rawData = playback.rawData;

  if (actionListId && actionItemId && rawData && immediate) {
    var actionList = rawData.actionLists[actionListId];

    if (actionList) {
      rawData = reduceListToGroup({
        actionList: actionList,
        actionItemId: actionItemId,
        rawData: rawData
      });
    }
  }

  startEngine({
    store: store,
    rawData: rawData,
    allowEvents: allowEvents,
    testManual: testManual
  });

  if (actionListId && actionTypeId === _constants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
    stopActionGroup({
      store: store,
      actionListId: actionListId
    });
    renderInitialGroup({
      store: store,
      actionListId: actionListId,
      eventId: eventId
    });
    var started = startActionGroup({
      store: store,
      eventId: eventId,
      actionListId: actionListId,
      immediate: immediate,
      verbose: verbose
    });

    if (verbose && started) {
      store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
        actionListId: actionListId,
        isPlaying: !immediate
      }));
    }
  }
}

function handleStopRequest(_ref8, store) {
  var actionListId = _ref8.actionListId;

  if (actionListId) {
    stopActionGroup({
      store: store,
      actionListId: actionListId
    });
  } else {
    stopAllActionGroups({
      store: store
    });
  }

  stopEngine(store);
}

function handleClearRequest(state, store) {
  stopEngine(store);
  clearAllStyles({
    store: store,
    elementApi: elementApi
  });
} // $FlowFixMe


function startEngine(_ref9) {
  var store = _ref9.store,
      rawData = _ref9.rawData,
      allowEvents = _ref9.allowEvents,
      testManual = _ref9.testManual;

  var _store$getState = store.getState(),
      ixSession = _store$getState.ixSession;

  if (rawData) {
    store.dispatch((0, _IX2EngineActions.rawDataImported)(rawData));
  }

  if (!ixSession.active) {
    store.dispatch((0, _IX2EngineActions.sessionInitialized)({
      hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR)),
      reducedMotion: // $FlowFixMe - Remove this attribute on beta launch
      document.body.hasAttribute('data-wf-ix-vacation') && window.matchMedia('(prefers-reduced-motion)').matches
    }));

    if (allowEvents) {
      bindEvents(store);
      addDocumentClass();

      if (store.getState().ixSession.hasDefinedMediaQueries) {
        observeMediaQueryChange(store);
      }
    }

    store.dispatch((0, _IX2EngineActions.sessionStarted)());
    startRenderLoop(store, testManual);
  }
}

function addDocumentClass() {
  var _document = document,
      documentElement = _document.documentElement; // $FlowFixMe

  if (documentElement.className.indexOf(W_MOD_IX) === -1) {
    // $FlowFixMe
    documentElement.className += " ".concat(W_MOD_IX);
  }
}

function startRenderLoop(store, testManual) {
  var handleFrame = function handleFrame(now) {
    var _store$getState2 = store.getState(),
        ixSession = _store$getState2.ixSession,
        ixParameters = _store$getState2.ixParameters;

    if (ixSession.active) {
      store.dispatch((0, _IX2EngineActions.animationFrameChanged)(now, ixParameters));

      if (testManual) {
        observeOneRenderTick(store, handleFrame);
      } else {
        requestAnimationFrame(handleFrame);
      }
    }
  };

  handleFrame(window.performance.now());
} // $FlowFixMe


function stopEngine(store) {
  var _store$getState3 = store.getState(),
      ixSession = _store$getState3.ixSession;

  if (ixSession.active) {
    var eventListeners = ixSession.eventListeners;
    eventListeners.forEach(clearEventListener);
    store.dispatch((0, _IX2EngineActions.sessionStopped)());
  }
}

function clearEventListener(_ref10) {
  var target = _ref10.target,
      listenerParams = _ref10.listenerParams;
  target.removeEventListener.apply(target, listenerParams);
}

function createGroupInstances(_ref11) {
  var store = _ref11.store,
      eventStateKey = _ref11.eventStateKey,
      eventTarget = _ref11.eventTarget,
      eventId = _ref11.eventId,
      eventConfig = _ref11.eventConfig,
      actionListId = _ref11.actionListId,
      parameterGroup = _ref11.parameterGroup,
      smoothing = _ref11.smoothing,
      restingValue = _ref11.restingValue;

  var _store$getState4 = store.getState(),
      ixData = _store$getState4.ixData,
      ixSession = _store$getState4.ixSession;

  var events = ixData.events;
  var event = events[eventId];
  var eventTypeId = event.eventTypeId;
  var targetCache = {};
  var instanceActionGroups = {};
  var instanceConfigs = [];
  var continuousActionGroups = parameterGroup.continuousActionGroups;
  var parameterId = parameterGroup.id;

  if (shouldNamespaceEventParameter(eventTypeId, eventConfig)) {
    parameterId = getNamespacedParameterId(eventStateKey, parameterId);
  } // Limit affected elements when event target is within a boundary node


  var eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
  continuousActionGroups.forEach(function (actionGroup) {
    var keyframe = actionGroup.keyframe,
        actionItems = actionGroup.actionItems;
    actionItems.forEach(function (actionItem) {
      var actionTypeId = actionItem.actionTypeId;
      var target = actionItem.config.target;

      if (!target) {
        return;
      }

      var elementRoot = target.boundaryMode ? eventElementRoot : null;
      var key = stringifyTarget(target) + COLON_DELIMITER + actionTypeId;
      instanceActionGroups[key] = appendActionItem(instanceActionGroups[key], keyframe, actionItem);

      if (!targetCache[key]) {
        targetCache[key] = true;
        var config = actionItem.config;
        getAffectedElements({
          config: config,
          event: event,
          eventTarget: eventTarget,
          elementRoot: elementRoot,
          elementApi: elementApi
        }).forEach(function (element) {
          instanceConfigs.push({
            element: element,
            key: key
          });
        });
      }
    });
  });
  instanceConfigs.forEach(function (_ref12) {
    var element = _ref12.element,
        key = _ref12.key;
    var actionGroups = instanceActionGroups[key];
    var actionItem = (0, _get["default"])(actionGroups, "[0].actionItems[0]", {});
    var actionTypeId = actionItem.actionTypeId;
    var pluginInstance = isPluginType(actionTypeId) ? // $FlowFixMe
    createPluginInstance(actionTypeId)(element, actionItem) : null;
    var destination = getDestinationValues({
      element: element,
      actionItem: actionItem,
      elementApi: elementApi
    }, // $FlowFixMe
    pluginInstance);
    createInstance({
      store: store,
      element: element,
      eventId: eventId,
      actionListId: actionListId,
      actionItem: actionItem,
      destination: destination,
      continuous: true,
      parameterId: parameterId,
      actionGroups: actionGroups,
      smoothing: smoothing,
      restingValue: restingValue,
      pluginInstance: pluginInstance
    });
  });
}

function appendActionItem() {
  var actionGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keyframe = arguments.length > 1 ? arguments[1] : undefined;
  var actionItem = arguments.length > 2 ? arguments[2] : undefined;
  var newActionGroups = (0, _toConsumableArray2["default"])(actionGroups);
  var groupIndex;
  newActionGroups.some(function (group, index) {
    if (group.keyframe === keyframe) {
      groupIndex = index;
      return true;
    }

    return false;
  });

  if (groupIndex == null) {
    groupIndex = newActionGroups.length;
    newActionGroups.push({
      keyframe: keyframe,
      actionItems: []
    });
  }

  newActionGroups[groupIndex].actionItems.push(actionItem);
  return newActionGroups;
}

function bindEvents(store) {
  var _store$getState5 = store.getState(),
      ixData = _store$getState5.ixData;

  var eventTypeMap = ixData.eventTypeMap;
  updateViewportWidth(store);
  (0, _forEach["default"])(eventTypeMap, function (events, key) {
    var logic = _IX2VanillaEvents["default"][key];

    if (!logic) {
      console.warn("IX2 event type not configured: ".concat(key));
      return;
    }

    bindEventType({
      logic: logic,
      store: store,
      events: events
    });
  });

  var _store$getState6 = store.getState(),
      ixSession = _store$getState6.ixSession;

  if (ixSession.eventListeners.length) {
    bindResizeEvents(store);
  }
}

var WINDOW_RESIZE_EVENTS = ['resize', 'orientationchange'];

function bindResizeEvents(store) {
  var handleResize = function handleResize() {
    updateViewportWidth(store);
  };

  WINDOW_RESIZE_EVENTS.forEach(function (type) {
    window.addEventListener(type, handleResize);
    store.dispatch((0, _IX2EngineActions.eventListenerAdded)(window, [type, handleResize]));
  });
  handleResize();
}

function updateViewportWidth(store) {
  var _store$getState7 = store.getState(),
      ixSession = _store$getState7.ixSession,
      ixData = _store$getState7.ixData;

  var width = window.innerWidth;

  if (width !== ixSession.viewportWidth) {
    var mediaQueries = ixData.mediaQueries;
    store.dispatch((0, _IX2EngineActions.viewportWidthChanged)({
      width: width,
      mediaQueries: mediaQueries
    }));
  }
}

var mapFoundValues = function mapFoundValues(object, iteratee) {
  return (0, _omitBy["default"])((0, _mapValues["default"])(object, iteratee), _isEmpty["default"]);
};

var forEachEventTarget = function forEachEventTarget(eventTargets, eventCallback) {
  (0, _forEach["default"])(eventTargets, function (elements, eventId) {
    elements.forEach(function (element, index) {
      var eventStateKey = eventId + COLON_DELIMITER + index;
      eventCallback(element, eventId, eventStateKey);
    });
  });
};

var getAffectedForEvent = function getAffectedForEvent(event) {
  var config = {
    target: event.target,
    targets: event.targets
  };
  return getAffectedElements({
    config: config,
    elementApi: elementApi
  });
};

function bindEventType(_ref13) {
  var logic = _ref13.logic,
      store = _ref13.store,
      events = _ref13.events;
  injectBehaviorCSSFixes(events);
  var eventTypes = logic.types,
      eventHandler = logic.handler;

  var _store$getState8 = store.getState(),
      ixData = _store$getState8.ixData;

  var actionLists = ixData.actionLists;
  var eventTargets = mapFoundValues(events, getAffectedForEvent);

  if (!(0, _size["default"])(eventTargets)) {
    return;
  }

  (0, _forEach["default"])(eventTargets, function (elements, key) {
    var event = events[key];
    var eventAction = event.action,
        eventId = event.id,
        _event$mediaQueries = event.mediaQueries,
        mediaQueries = _event$mediaQueries === void 0 ? ixData.mediaQueryKeys : _event$mediaQueries;
    var actionListId = eventAction.config.actionListId;

    if (!mediaQueriesEqual(mediaQueries, ixData.mediaQueryKeys)) {
      store.dispatch((0, _IX2EngineActions.mediaQueriesDefined)());
    }

    if (eventAction.actionTypeId === _constants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
      var configs = Array.isArray(event.config) ? event.config : [event.config];
      configs.forEach(function (eventConfig) {
        var continuousParameterGroupId = eventConfig.continuousParameterGroupId;
        var paramGroups = (0, _get["default"])(actionLists, "".concat(actionListId, ".continuousParameterGroups"), []);
        var parameterGroup = (0, _find["default"])(paramGroups, function (_ref14) {
          var id = _ref14.id;
          return id === continuousParameterGroupId;
        });
        var smoothing = (eventConfig.smoothing || 0) / 100;
        var restingValue = (eventConfig.restingState || 0) / 100;

        if (!parameterGroup) {
          return;
        }

        elements.forEach(function (eventTarget, index) {
          var eventStateKey = eventId + COLON_DELIMITER + index;
          createGroupInstances({
            store: store,
            eventStateKey: eventStateKey,
            eventTarget: eventTarget,
            eventId: eventId,
            eventConfig: eventConfig,
            actionListId: actionListId,
            parameterGroup: parameterGroup,
            smoothing: smoothing,
            restingValue: restingValue
          });
        });
      });
    }

    if (eventAction.actionTypeId === _constants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
      renderInitialGroup({
        store: store,
        actionListId: actionListId,
        eventId: eventId
      });
    }
  });

  var handleEvent = function handleEvent(nativeEvent) {
    var _store$getState9 = store.getState(),
        ixSession = _store$getState9.ixSession;

    forEachEventTarget(eventTargets, function (element, eventId, eventStateKey) {
      var event = events[eventId];
      var oldState = ixSession.eventState[eventStateKey];
      var eventAction = event.action,
          _event$mediaQueries2 = event.mediaQueries,
          mediaQueries = _event$mediaQueries2 === void 0 ? ixData.mediaQueryKeys : _event$mediaQueries2; // Bypass event handler if current media query is not listed in event config

      if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
        return;
      }

      var handleEventWithConfig = function handleEventWithConfig() {
        var eventConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var newState = eventHandler({
          store: store,
          element: element,
          event: event,
          eventConfig: eventConfig,
          nativeEvent: nativeEvent,
          eventStateKey: eventStateKey
        }, oldState);

        if (!shallowEqual(newState, oldState)) {
          store.dispatch((0, _IX2EngineActions.eventStateChanged)(eventStateKey, newState));
        }
      };

      if (eventAction.actionTypeId === _constants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
        var configs = Array.isArray(event.config) ? event.config : [event.config];
        configs.forEach(handleEventWithConfig);
      } else {
        handleEventWithConfig();
      }
    });
  };

  var handleEventThrottled = (0, _throttle["default"])(handleEvent, THROTTLED_EVENT_WAIT);

  var addListeners = function addListeners(_ref15) {
    var _ref15$target = _ref15.target,
        target = _ref15$target === void 0 ? document : _ref15$target,
        types = _ref15.types,
        shouldThrottle = _ref15.throttle;
    types.split(' ').filter(Boolean).forEach(function (type) {
      var handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent; // $FlowFixMe

      target.addEventListener(type, handlerFunc);
      store.dispatch((0, _IX2EngineActions.eventListenerAdded)(target, [type, handlerFunc]));
    });
  };

  if (Array.isArray(eventTypes)) {
    eventTypes.forEach(addListeners);
  } else if (typeof eventTypes === 'string') {
    addListeners(logic);
  }
}
/**
 * Injects CSS into the document to fix behavior issues across
 * different devices.
 */


function injectBehaviorCSSFixes(events) {
  if (!IS_MOBILE_SAFARI) {
    return;
  }

  var injectedSelectors = {};
  var cssText = '';

  for (var eventId in events) {
    var _events$eventId = events[eventId],
        eventTypeId = _events$eventId.eventTypeId,
        target = _events$eventId.target;
    var selector = elementApi.getQuerySelector(target); // $FlowFixMe

    if (injectedSelectors[selector]) {
      continue;
    } // add a "cursor: pointer" style rule to ensure that CLICK events get fired for IOS devices


    if (eventTypeId === _constants.EventTypeConsts.MOUSE_CLICK || eventTypeId === _constants.EventTypeConsts.MOUSE_SECOND_CLICK) {
      // $FlowFixMe
      injectedSelectors[selector] = true;
      cssText += // $FlowFixMe
      selector + '{' + 'cursor: pointer;' + 'touch-action: manipulation;' + '}';
    }
  }

  if (cssText) {
    var style = document.createElement('style');
    style.textContent = cssText; // $FlowFixMe

    document.body.appendChild(style);
  }
}

function renderInitialGroup(_ref16) {
  var store = _ref16.store,
      actionListId = _ref16.actionListId,
      eventId = _ref16.eventId;

  var _store$getState10 = store.getState(),
      ixData = _store$getState10.ixData,
      ixSession = _store$getState10.ixSession;

  var actionLists = ixData.actionLists,
      events = ixData.events;
  var event = events[eventId];
  var actionList = actionLists[actionListId];

  if (actionList && actionList.useFirstGroupAsInitialState) {
    var initialStateItems = (0, _get["default"])(actionList, 'actionItemGroups[0].actionItems', []); // Bypass initial state render if current media query is not listed in event config

    var mediaQueries = (0, _get["default"])(event, 'mediaQueries', ixData.mediaQueryKeys);

    if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
      return;
    }

    initialStateItems.forEach(function (actionItem) {
      var _itemConfig$target;

      var itemConfig = actionItem.config,
          actionTypeId = actionItem.actionTypeId;
      var config = // When useEventTarget is explicitly true, use event target/targets to query elements
      (itemConfig === null || itemConfig === void 0 ? void 0 : (_itemConfig$target = itemConfig.target) === null || _itemConfig$target === void 0 ? void 0 : _itemConfig$target.useEventTarget) === true ? {
        target: event.target,
        targets: event.targets
      } : itemConfig;
      var itemElements = getAffectedElements({
        config: config,
        event: event,
        elementApi: elementApi
      });
      var shouldUsePlugin = isPluginType(actionTypeId);
      itemElements.forEach(function (element) {
        var pluginInstance = shouldUsePlugin ? // $FlowFixMe
        createPluginInstance(actionTypeId)(element, actionItem) : null;
        createInstance({
          destination: getDestinationValues({
            element: element,
            actionItem: actionItem,
            elementApi: elementApi
          }, // $FlowFixMe
          pluginInstance),
          immediate: true,
          store: store,
          element: element,
          eventId: eventId,
          actionItem: actionItem,
          actionListId: actionListId,
          pluginInstance: pluginInstance
        });
      });
    });
  }
} // $FlowFixMe


function stopAllActionGroups(_ref17) {
  var store = _ref17.store;

  var _store$getState11 = store.getState(),
      ixInstances = _store$getState11.ixInstances;

  (0, _forEach["default"])(ixInstances, function (instance) {
    if (!instance.continuous) {
      var actionListId = instance.actionListId,
          verbose = instance.verbose;
      removeInstance(instance, store);

      if (verbose) {
        store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
          actionListId: actionListId,
          isPlaying: false
        }));
      }
    }
  });
} // $FlowFixMe


function stopActionGroup(_ref18) {
  var store = _ref18.store,
      eventId = _ref18.eventId,
      eventTarget = _ref18.eventTarget,
      eventStateKey = _ref18.eventStateKey,
      actionListId = _ref18.actionListId;

  var _store$getState12 = store.getState(),
      ixInstances = _store$getState12.ixInstances,
      ixSession = _store$getState12.ixSession; // Check for element boundary before stopping engine instances


  var eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
  (0, _forEach["default"])(ixInstances, function (instance) {
    var boundaryMode = (0, _get["default"])(instance, 'actionItem.config.target.boundaryMode'); // Validate event key if eventStateKey was provided, otherwise default to true

    var validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true; // Remove engine instances that match the required ids

    if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
      // Avoid removal when root boundary does not contain instance element
      if (eventElementRoot && boundaryMode && !elementApi.elementContains(eventElementRoot, instance.element)) {
        return;
      }

      removeInstance(instance, store);

      if (instance.verbose) {
        store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
          actionListId: actionListId,
          isPlaying: false
        }));
      }
    }
  });
} // $FlowFixMe


function startActionGroup(_ref19) {
  var store = _ref19.store,
      eventId = _ref19.eventId,
      eventTarget = _ref19.eventTarget,
      eventStateKey = _ref19.eventStateKey,
      actionListId = _ref19.actionListId,
      _ref19$groupIndex = _ref19.groupIndex,
      groupIndex = _ref19$groupIndex === void 0 ? 0 : _ref19$groupIndex,
      immediate = _ref19.immediate,
      verbose = _ref19.verbose;

  var _event$action;

  var _store$getState13 = store.getState(),
      ixData = _store$getState13.ixData,
      ixSession = _store$getState13.ixSession;

  var events = ixData.events;
  var event = events[eventId] || {};
  var _event$mediaQueries3 = event.mediaQueries,
      mediaQueries = _event$mediaQueries3 === void 0 ? ixData.mediaQueryKeys : _event$mediaQueries3;
  var actionList = (0, _get["default"])(ixData, "actionLists.".concat(actionListId), {});
  var actionItemGroups = actionList.actionItemGroups,
      useFirstGroupAsInitialState = actionList.useFirstGroupAsInitialState; // Abort playback if no action groups

  if (!actionItemGroups || !actionItemGroups.length) {
    return false;
  } // Reset to first group when event loop is configured


  if (groupIndex >= actionItemGroups.length && (0, _get["default"])(event, 'config.loop')) {
    groupIndex = 0;
  } // Skip initial state group during action list playback, as it should already be applied


  if (groupIndex === 0 && useFirstGroupAsInitialState) {
    groupIndex++;
  } // Identify first animated group and apply the initial QuickEffect delay


  var isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
  var instanceDelay = isFirstGroup && isQuickEffect((_event$action = event.action) === null || _event$action === void 0 ? void 0 : _event$action.actionTypeId) ? event.config.delay : undefined; // Abort playback if no action items exist at group index

  var actionItems = (0, _get["default"])(actionItemGroups, [groupIndex, 'actionItems'], []);

  if (!actionItems.length) {
    return false;
  } // Abort playback if current media query is not listed in event config


  if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
    return false;
  } // Limit affected elements when event target is within a boundary node


  var eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? elementApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
  var carrierIndex = getMaxDurationItemIndex(actionItems);
  var groupStartResult = false;
  actionItems.forEach(function (actionItem, actionIndex) {
    var config = actionItem.config,
        actionTypeId = actionItem.actionTypeId;
    var shouldUsePlugin = isPluginType(actionTypeId);
    var target = config.target;

    if (!target) {
      return;
    }

    var elementRoot = target.boundaryMode ? eventElementRoot : null;
    var elements = getAffectedElements({
      config: config,
      event: event,
      eventTarget: eventTarget,
      elementRoot: elementRoot,
      elementApi: elementApi
    });
    elements.forEach(function (element, elementIndex) {
      var pluginInstance = shouldUsePlugin ? // $FlowFixMe
      createPluginInstance(actionTypeId)(element, actionItem) : null;
      var pluginDuration = shouldUsePlugin ? // $FlowFixMe
      getPluginDuration(actionTypeId)(element, actionItem) : null;
      groupStartResult = true;
      var isCarrier = carrierIndex === actionIndex && elementIndex === 0;
      var computedStyle = getComputedStyle({
        element: element,
        actionItem: actionItem
      });
      var destination = getDestinationValues({
        element: element,
        actionItem: actionItem,
        elementApi: elementApi
      }, // $FlowFixMe
      pluginInstance);
      createInstance({
        store: store,
        element: element,
        actionItem: actionItem,
        eventId: eventId,
        eventTarget: eventTarget,
        eventStateKey: eventStateKey,
        actionListId: actionListId,
        groupIndex: groupIndex,
        isCarrier: isCarrier,
        computedStyle: computedStyle,
        destination: destination,
        immediate: immediate,
        verbose: verbose,
        pluginInstance: pluginInstance,
        pluginDuration: pluginDuration,
        instanceDelay: instanceDelay
      });
    });
  });
  return groupStartResult;
}

function createInstance(options) {
  var _ixData$events$eventI; // $FlowFixMe


  var store = options.store,
      computedStyle = options.computedStyle,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(options, ["store", "computedStyle"]);
  var element = rest.element,
      actionItem = rest.actionItem,
      immediate = rest.immediate,
      pluginInstance = rest.pluginInstance,
      continuous = rest.continuous,
      restingValue = rest.restingValue,
      eventId = rest.eventId;
  var autoStart = !continuous;
  var instanceId = getInstanceId();

  var _store$getState14 = store.getState(),
      ixElements = _store$getState14.ixElements,
      ixSession = _store$getState14.ixSession,
      ixData = _store$getState14.ixData;

  var elementId = getElementId(ixElements, element);

  var _ref20 = ixElements[elementId] || {},
      refState = _ref20.refState;

  var refType = elementApi.getRefType(element);
  var skipMotion = ixSession.reducedMotion && _constants.ReducedMotionTypes[actionItem.actionTypeId];
  var skipToValue;

  if (skipMotion && continuous) {
    switch ((_ixData$events$eventI = ixData.events[eventId]) === null || _ixData$events$eventI === void 0 ? void 0 : _ixData$events$eventI.eventTypeId) {
      case _constants.EventTypeConsts.MOUSE_MOVE:
      case _constants.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
        skipToValue = restingValue;
        break;

      default:
        skipToValue = 0.5;
        break;
    }
  }

  var origin = getInstanceOrigin(element, refState, computedStyle, actionItem, elementApi, // $FlowFixMe
  pluginInstance);
  store.dispatch((0, _IX2EngineActions.instanceAdded)((0, _extends2["default"])({
    instanceId: instanceId,
    elementId: elementId,
    origin: origin,
    refType: refType,
    skipMotion: skipMotion,
    skipToValue: skipToValue
  }, rest)));
  dispatchCustomEvent(document.body, 'ix2-animation-started', instanceId);

  if (immediate) {
    renderImmediateInstance(store, instanceId);
    return;
  }

  observeStore({
    store: store,
    select: function select(_ref21) {
      var ixInstances = _ref21.ixInstances;
      return ixInstances[instanceId];
    },
    onChange: handleInstanceChange
  });

  if (autoStart) {
    store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, ixSession.tick));
  }
}

function removeInstance(instance, store) {
  dispatchCustomEvent(document.body, 'ix2-animation-stopping', {
    instanceId: instance.id,
    state: store.getState()
  });
  var elementId = instance.elementId,
      actionItem = instance.actionItem;

  var _store$getState15 = store.getState(),
      ixElements = _store$getState15.ixElements;

  var _ref22 = ixElements[elementId] || {},
      ref = _ref22.ref,
      refType = _ref22.refType;

  if (refType === HTML_ELEMENT) {
    cleanupHTMLElement(ref, actionItem, elementApi);
  }

  store.dispatch((0, _IX2EngineActions.instanceRemoved)(instance.id));
}

function dispatchCustomEvent(element, eventName, detail) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventName, true, true, detail); // $FlowFixMe

  element.dispatchEvent(event);
}

function renderImmediateInstance(store, instanceId) {
  var _store$getState16 = store.getState(),
      ixParameters = _store$getState16.ixParameters;

  store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, 0));
  store.dispatch((0, _IX2EngineActions.animationFrameChanged)(performance.now(), ixParameters));

  var _store$getState17 = store.getState(),
      ixInstances = _store$getState17.ixInstances;

  handleInstanceChange(ixInstances[instanceId], store);
}

function handleInstanceChange(instance, store) {
  var active = instance.active,
      continuous = instance.continuous,
      complete = instance.complete,
      elementId = instance.elementId,
      actionItem = instance.actionItem,
      actionTypeId = instance.actionTypeId,
      renderType = instance.renderType,
      current = instance.current,
      groupIndex = instance.groupIndex,
      eventId = instance.eventId,
      eventTarget = instance.eventTarget,
      eventStateKey = instance.eventStateKey,
      actionListId = instance.actionListId,
      isCarrier = instance.isCarrier,
      styleProp = instance.styleProp,
      verbose = instance.verbose,
      pluginInstance = instance.pluginInstance; // Bypass render if current media query is not listed in event config

  var _store$getState18 = store.getState(),
      ixData = _store$getState18.ixData,
      ixSession = _store$getState18.ixSession;

  var events = ixData.events;
  var event = events[eventId] || {};
  var _event$mediaQueries4 = event.mediaQueries,
      mediaQueries = _event$mediaQueries4 === void 0 ? ixData.mediaQueryKeys : _event$mediaQueries4;

  if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
    return;
  }

  if (continuous || active || complete) {
    if (current || renderType === RENDER_GENERAL && complete) {
      // Render current values to ref state and grab latest
      store.dispatch((0, _IX2EngineActions.elementStateChanged)(elementId, actionTypeId, current, actionItem));

      var _store$getState19 = store.getState(),
          ixElements = _store$getState19.ixElements;

      var _ref23 = ixElements[elementId] || {},
          ref = _ref23.ref,
          refType = _ref23.refType,
          refState = _ref23.refState;

      var actionState = refState && refState[actionTypeId]; // Choose render based on ref type

      switch (refType) {
        case HTML_ELEMENT:
          {
            renderHTMLElement(ref, refState, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance);
            break;
          }
      }
    }

    if (complete) {
      if (isCarrier) {
        var started = startActionGroup({
          store: store,
          eventId: eventId,
          eventTarget: eventTarget,
          eventStateKey: eventStateKey,
          actionListId: actionListId,
          groupIndex: groupIndex + 1,
          verbose: verbose
        });

        if (verbose && !started) {
          store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
            actionListId: actionListId,
            isPlaying: false
          }));
        }
      }

      removeInstance(instance, store);
    }
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(125);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(323),
    noop = __webpack_require__(324);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(325);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
__webpack_require__(132);
__webpack_require__(133);
__webpack_require__(134);
__webpack_require__(135);
__webpack_require__(39);
__webpack_require__(137);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
__webpack_require__(335);
__webpack_require__(340);
module.exports = __webpack_require__(341);


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals document, window, navigator */

/* eslint-disable no-var */

/**
 * Webflow: Brand pages on the subdomain
 */

var Webflow = __webpack_require__(3);

Webflow.define('brand', module.exports = function ($) {
  var api = {};
  var doc = document;
  var $html = $('html');
  var $body = $('body');
  var namespace = '.w-webflow-badge';
  var location = window.location;
  var isPhantom = /PhantomJS/i.test(navigator.userAgent);
  var fullScreenEvents = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
  var brandElement; // -----------------------------------
  // Module methods

  api.ready = function () {
    var shouldBrand = $html.attr('data-wf-status');
    var publishedDomain = $html.attr('data-wf-domain') || '';

    if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
      shouldBrand = true;
    }

    if (shouldBrand && !isPhantom) {
      brandElement = brandElement || createBadge();
      ensureBrand();
      setTimeout(ensureBrand, 500);
      $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
    }
  };

  function onFullScreenChange() {
    var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
    $(brandElement).attr('style', fullScreen ? 'display: none !important;' : '');
  }



  function ensureBrand() {
    var found = $body.children(namespace);
    var match = found.length && found.get(0) === brandElement;
    var inEditor = Webflow.env('editor');

    if (match) {
      // Remove brand when Editor is active
      if (inEditor) {
        found.remove();
      } // Exit early, brand is in place


      return;
    } // Remove any invalid brand elements


    if (found.length) {
      found.remove();
    } // Append the brand (unless Editor is active)


    if (!inEditor) {
      $body.append(brandElement);
    }
  } // Export module


  return api;
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file
// Include tram for frame-throttling

/* globals window */

/* eslint-disable no-var */

var $ = window.$;
var tram = __webpack_require__(69) && $.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */

module.exports = function () {
  var _ = {}; // Current version.

  _.VERSION = '1.6.0-Webflow'; // Establish the object that gets returned to break out of a loop iteration.

  var breaker = {}; // Save bytes in the minified (but not gzipped) version:

  /* eslint-disable one-var */

  var ArrayProto = Array.prototype,
      ObjProto = Object.prototype,
      FuncProto = Function.prototype;
  /* eslint-enable one-var */
  // Create quick reference variables for speed access to core prototypes.

  /* eslint-disable one-var, no-unused-vars */

  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      concat = ArrayProto.concat,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;
  /* eslint-enable one-var, no-unused-vars */
  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.

  /* eslint-disable one-var, no-unused-vars */

  var nativeForEach = ArrayProto.forEach,
      nativeMap = ArrayProto.map,
      nativeReduce = ArrayProto.reduce,
      nativeReduceRight = ArrayProto.reduceRight,
      nativeFilter = ArrayProto.filter,
      nativeEvery = ArrayProto.every,
      nativeSome = ArrayProto.some,
      nativeIndexOf = ArrayProto.indexOf,
      nativeLastIndexOf = ArrayProto.lastIndexOf,
      nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeBind = FuncProto.bind;
  /* eslint-enable one-var, no-unused-vars */
  // Collection Functions
  // --------------------
  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.

  var each = _.each = _.forEach = function (obj, iterator, context) {
    /* jshint shadow:true */
    if (obj == null) return obj;

    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context); // eslint-disable-next-line no-implicit-coercion
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj); // eslint-disable-next-line no-redeclare


      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }

    return obj;
  }; // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.


  _.map = _.collect = function (obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function (value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  }; // Return the first value which passes a truth test. Aliased as `detect`.


  _.find = _.detect = function (obj, predicate, context) {
    var result;
    any(obj, function (value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  }; // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.


  _.filter = _.select = function (obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function (value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  }; // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.


  var any = _.some = _.any = function (obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function (value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result; // eslint-disable-line no-implicit-coercion
  }; // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.


  _.contains = _.include = function (obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) // eslint-disable-next-line eqeqeq
      return obj.indexOf(target) != -1;
    return any(obj, function (value) {
      return value === target;
    });
  }; // Function (ahem) Functions
  // --------------------
  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.


  _.delay = function (func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function () {
      return func.apply(null, args);
    }, wait);
  }; // Defers a function, scheduling it to run after the current call stack has
  // cleared.


  _.defer = function (func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  }; // Returns a function, that, when invoked, will only be triggered once every
  // browser animation frame - using tram's requestAnimationFrame polyfill.


  _.throttle = function (func) {
    // eslint-disable-next-line one-var
    var wait, args, context;
    return function () {
      if (wait) return;
      wait = true;
      args = arguments;
      context = this;
      tram.frame(function () {
        wait = false;
        func.apply(context, args);
      });
    };
  }; // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.


  _.debounce = function (func, wait, immediate) {
    // eslint-disable-next-line one-var
    var timeout, args, context, timestamp, result;

    var later = function later() {
      var last = _.now() - timestamp;

      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;

        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function () {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }

      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  }; // Object Functions
  // ----------------
  // Fill in a given object with default properties.


  _.defaults = function (obj) {
    if (!_.isObject(obj)) return obj;

    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];

      for (var prop in source) {
        // eslint-disable-next-line no-void
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }

    return obj;
  }; // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`


  _.keys = function (obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];

    for (var key in obj) {
      if (_.has(obj, key)) keys.push(key);
    }

    return keys;
  }; // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).


  _.has = function (obj, key) {
    return hasOwnProperty.call(obj, key);
  }; // Is a given variable an object?


  _.isObject = function (obj) {
    return obj === Object(obj);
  }; // Utility Functions
  // -----------------
  // A (possibly faster) way to get the current timestamp as an integer.


  _.now = Date.now || function () {
    return new Date().getTime();
  }; // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.


  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  }; // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.

  var noMatch = /(.)^/; // Certain characters need to be escaped so that they can be put into a
  // string literal.

  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    "\u2028": 'u2028',
    "\u2029": 'u2029'
  };
  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function escapeChar(match) {
    return '\\' + escapes[match];
  }; // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.


  _.template = function (text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings); // Combine delimiters into one regular expression via alternation.

    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g'); // Compile the template source, escaping string literals appropriately.

    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      } // Adobe VMs need the match returned to produce the correct offest.


      return match;
    });
    source += "';\n"; // If a variable is not specified, place data values in local scope.

    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

    try {
      // eslint-disable-next-line no-new-func
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function template(data) {
      return render.call(this, data, _);
    }; // Provide the compiled source as a convenience for precompilation.


    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';
    return template;
  }; // Export underscore


  return _;
}();
/* eslint-enable */

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals document, window, localStorage, WEBFLOW_API_HOST, WEBFLOW_DEFAULT_HOST */

/* eslint-disable no-var */

/**
 * Webflow: Editor loader
 */

var Webflow = __webpack_require__(3);

Webflow.define('edit', module.exports = function ($, _, options) {
  options = options || {}; // Exit early in test env or when inside an iframe

  if (Webflow.env('test') || Webflow.env('frame')) {
    // Allow test fixtures to continue
    if (!options.fixture && !inCypress()) {
      return {
        exit: 1
      };
    }
  }

  var api = {};
  var $win = $(window);
  var $html = $(document.documentElement);
  var location = document.location;
  var hashchange = 'hashchange';
  var loaded;
  var loadEditor = options.load || load;
  var hasLocalStorage = false;

  try {
    // Check localStorage for editor data
    hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem('WebflowEditor');
  } catch (e) {// SecurityError: browser storage has been disabled
  }

  if (hasLocalStorage) {
    loadEditor();
  } else if (location.search) {
    // Check url query for `edit` parameter or any url ending in `?edit`
    if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
      loadEditor();
    }
  } else {
    // Check hash fragment to support `#hash?edit`
    $win.on(hashchange, checkHash).triggerHandler(hashchange);
  }

  function checkHash() {
    if (loaded) {
      return;
    } // Load editor when hash contains `?edit`


    if (/\?edit/.test(location.hash)) {
      loadEditor();
    }
  }

  function load() {
    loaded = true; // Predefine global immediately to benefit Webflow.env

    window.WebflowEditor = true;
    $win.off(hashchange, checkHash);
    checkThirdPartyCookieSupport(function (thirdPartyCookiesSupported) {
      $.ajax({
        url: cleanSlashes("https://editor-api.webflow.com" + '/api/editor/view'),
        data: {
          siteId: $html.attr('data-wf-site')
        },
        xhrFields: {
          withCredentials: true
        },
        dataType: 'json',
        crossDomain: true,
        success: success(thirdPartyCookiesSupported)
      });
    });
  }

  function success(thirdPartyCookiesSupported) {
    return function (data) {
      if (!data) {
        console.error('Could not load editor data');
        return;
      }

      data.thirdPartyCookiesSupported = thirdPartyCookiesSupported;
      getScript(prefix(data.bugReporterScriptPath), function () {
        getScript(prefix(data.scriptPath), function () {
          window.WebflowEditor(data);
        });
      });
    };
  }

  function getScript(url, done) {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'script',
      cache: true
    }).then(done, error);
  }

  function error(jqXHR, textStatus, errorThrown) {
    console.error('Could not load editor script: ' + textStatus);
    throw errorThrown;
  }

  function prefix(url) {
    return url.indexOf('//') >= 0 ? url : cleanSlashes("https://editor-api.webflow.com" + url);
  }

  function cleanSlashes(url) {
    return url.replace(/([^:])\/\//g, '$1/');
  }

  function checkThirdPartyCookieSupport(callback) {
    var iframe = window.document.createElement('iframe');
    iframe.src = "https://webflow.com" + '/site/third-party-cookie-check.html';
    iframe.style.display = 'none';
    iframe.sandbox = 'allow-scripts allow-same-origin';

    var handleMessage = function handleMessage(event) {
      if (event.data === 'WF_third_party_cookies_unsupported') {
        cleanUpCookieCheckerIframe(iframe, handleMessage);
        callback(false);
      } else if (event.data === 'WF_third_party_cookies_supported') {
        cleanUpCookieCheckerIframe(iframe, handleMessage);
        callback(true);
      }
    };

    iframe.onerror = function () {
      cleanUpCookieCheckerIframe(iframe, handleMessage);
      callback(false);
    };

    window.addEventListener('message', handleMessage, false);
    window.document.body.appendChild(iframe);
  }

  function cleanUpCookieCheckerIframe(iframe, listener) {
    window.removeEventListener('message', listener, false);
    iframe.remove();
  } // Export module


  return api;
});

function inCypress() {
  try {
    return window.top.__Cypress__;
  } catch (e) {
    return false;
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals window, document */

/* eslint-disable no-var */

/**
 * Webflow: focus-visible
 */

var Webflow = __webpack_require__(3);
/*
 * This polyfill comes from https://github.com/WICG/focus-visible
 */


Webflow.define('focus-visible', module.exports = function () {
  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;
    var inputTypesAllowlist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };
    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */

    function isValidFocusTarget(el) {
      if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
        return true;
      }

      return false;
    }
    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */


    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }

    function addFocusVisibleAttribute(el) {
      if (el.getAttribute('data-wf-focus-visible')) {
        return;
      }

      el.setAttribute('data-wf-focus-visible', 'true');
    }

    function removeFocusVisibleAttribute(el) {
      if (!el.getAttribute('data-wf-focus-visible')) {
        return;
      }

      el.removeAttribute('data-wf-focus-visible');
    }
    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */


    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleAttribute(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }
    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */


    function onPointerDown() {
      hadKeyboardEvent = false;
    }
    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */


    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleAttribute(e.target);
      }
    }
    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */


    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (e.target.hasAttribute('data-wf-focus-visible')) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleAttribute(e.target);
      }
    }
    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */


    function onVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }

        addInitialPointerMoveListeners();
      }
    }
    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */


    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }
    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */


    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. Â¯\_(ãƒ„)_/Â¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    } // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:


    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);
    addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:

    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true);
  }

  function ready() {
    if (typeof document !== 'undefined') {
      try {
        // check for native support; this will throw if the selector is not considered valid
        document.querySelector(':focus-visible');
      } catch (e) {
        // :focus-visible pseudo-selector is not supported natively
        applyFocusVisiblePolyfill(document);
      }
    }
  } // Export module


  return {
    ready: ready
  };
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals window, document */

/* eslint-disable no-var */

/**
 * Webflow: focus-within
 */

var Webflow = __webpack_require__(3); // polyfill based off of https://github.com/matteobad/focus-within-polyfill


Webflow.define('focus-within', module.exports = function () {
  /**
   * Calculate the entire event path.
   *
   * @param {Element} node
   * @return {Array} computedPath
   */
  function computeEventPath(node) {
    var path = [node];
    var parent = null;

    while (parent = node.parentNode || node.host || node.defaultView) {
      path.push(parent);
      node = parent;
    }

    return path;
  }

  function addFocusWithinAttribute(el) {
    if (typeof el.getAttribute !== 'function' || el.getAttribute('data-wf-focus-within')) {
      return;
    }

    el.setAttribute('data-wf-focus-within', 'true');
  }

  function removeFocusWithinAttribute(el) {
    if (typeof el.getAttribute !== 'function' || !el.getAttribute('data-wf-focus-within')) {
      return;
    }

    el.removeAttribute('data-wf-focus-within');
  }
  /**
   * Attach event listerns to initiate polyfill
   * @return {boolean}
   */


  function loadFocusWithinPolyfill() {
    var handler = function handler(e) {
      var running;
      /**
       * Request animation frame callback.
       * Remove previously applied attributes.
       * Add new attributes.
       */

      function action() {
        running = false;

        if ('blur' === e.type) {
          Array.prototype.slice.call(computeEventPath(e.target)).forEach(removeFocusWithinAttribute);
        }

        if ('focus' === e.type) {
          Array.prototype.slice.call(computeEventPath(e.target)).forEach(addFocusWithinAttribute);
        }
      }

      if (!running) {
        window.requestAnimationFrame(action);
        running = true;
      }
    };

    document.addEventListener('focus', handler, true);
    document.addEventListener('blur', handler, true);
    addFocusWithinAttribute(document.body);
    return true;
  }

  function ready() {
    if (typeof document !== 'undefined' && document.body.hasAttribute('data-wf-focus-within')) {
      try {
        // check for native support; this will throw if the selector is not considered valid
        document.querySelector(':focus-within');
      } catch (e) {
        loadFocusWithinPolyfill();
      }
    }
  } // Export module


  return {
    ready: ready
  };
});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals document, MouseEvent */

/* eslint-disable no-var */

/**
 * Webflow: focus
 */

var Webflow = __webpack_require__(3);
/*
 * Safari has a weird bug where it doesn't support :focus for links with hrefs,
 * buttons, and input[type=button|submit], so we listen for mousedown events
 * instead and force the element to emit a focus event in those cases.

 * See these webkit bugs for reference:
 * https://bugs.webkit.org/show_bug.cgi?id=22261
 * https://bugs.webkit.org/show_bug.cgi?id=229895
 */


Webflow.define('focus', module.exports = function () {
  var capturedEvents = [];
  var capturing = false;

  function captureEvent(e) {
    if (capturing) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      capturedEvents.unshift(e);
    }
  }
  /*
   * The only mousedown events we care about here are ones emanating from
   * (A) anchor links with href attribute,
   * (B) non-disabled buttons,
   * (C) non-disabled textarea,
   * (D) non-disabled inputs of type "button", "reset", "checkbox", "radio", "submit"
   * (E) non-interactive elements (button, a, input, textarea, select) that have a tabindex with a numeric value
   * (F) audio elements
   * (G) video elements with controls attribute
   */


  function isPolyfilledFocusEvent(e) {
    var el = e.target;
    var tag = el.tagName;
    return /^a$/i.test(tag) && el.href != null || // (A)
    /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
    /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
    !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
    /^audio$/i.test(tag) || // (F)
    /^video$/i.test(tag) && el.controls === true // (G)
    ;
  }

  function handler(e) {
    if (isPolyfilledFocusEvent(e)) {
      // start capturing possible out-of-order mouse events
      capturing = true;
      /*
       * enqueue the focus event _after_ the current batch of events, which
       * includes any blur events. The correct order of events is:
       *
       * [this element] MOUSEDOWN               <-- this event
       * [previously active element] BLUR
       * [previously active element] FOCUSOUT
       * [this element] FOCUS                   <-- forced event
       * [this element] FOCUSIN                 <-- forced event
       * [this element] MOUSEUP                 <-- possibly captured event (it may have fired _before_ the FOCUS event)
       * [this element] CLICK                   <-- possibly captured event (it may have fired _before_ the FOCUS event)
       */

      setTimeout(function () {
        // stop capturing possible out-of-order mouse events
        capturing = false; // trigger focus event

        e.target.focus(); // re-dispatch captured mouse events in order

        while (capturedEvents.length > 0) {
          var event = capturedEvents.pop();
          event.target.dispatchEvent(new MouseEvent(event.type, event));
        }
      }, 0);
    }
  }

  function ready() {
    if (typeof document !== 'undefined' && document.body.hasAttribute('data-wf-focus-within') && Webflow.env.safari) {
      document.addEventListener('mousedown', handler, true);
      document.addEventListener('mouseup', captureEvent, true);
      document.addEventListener('click', captureEvent, true);
    }
  } // Export module


  return {
    ready: ready
  };
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @wf-will-never-add-flow-to-this-file

/* globals window */

/* eslint-disable no-var */

/**
 * Webflow: IX Event triggers for other modules
 */
// eslint-disable-next-line strict


var $ = window.jQuery;
var api = {};
var eventQueue = [];
var namespace = '.w-ix';
var eventTriggers = {
  reset: function reset(i, el) {
    el.__wf_intro = null;
  },
  intro: function intro(i, el) {
    if (el.__wf_intro) {
      return;
    }

    el.__wf_intro = true;
    $(el).triggerHandler(api.types.INTRO);
  },
  outro: function outro(i, el) {
    if (!el.__wf_intro) {
      return;
    }

    el.__wf_intro = null;
    $(el).triggerHandler(api.types.OUTRO);
  }
};
api.triggers = {};
api.types = {
  INTRO: 'w-ix-intro' + namespace,
  OUTRO: 'w-ix-outro' + namespace
}; // Trigger any events in queue + restore trigger methods

api.init = function () {
  var count = eventQueue.length;

  for (var i = 0; i < count; i++) {
    var memo = eventQueue[i];
    memo[0](0, memo[1]);
  }

  eventQueue = [];
  $.extend(api.triggers, eventTriggers);
}; // Replace all triggers with async wrapper to queue events until init


api.async = function () {
  for (var key in eventTriggers) {
    var func = eventTriggers[key];

    if (!eventTriggers.hasOwnProperty(key)) {
      continue;
    } // Replace trigger method with async wrapper


    api.triggers[key] = function (i, el) {
      eventQueue.push([func, el]);
    };
  }
}; // Default triggers to async queue


api.async();
module.exports = api;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* eslint-disable no-var */

/**
 * Webflow: Interactions 2
 */

var Webflow = __webpack_require__(3);

var ix2 = __webpack_require__(138);

ix2.setEnv(Webflow.env);
Webflow.define('ix2', module.exports = function () {
  return ix2;
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(18);

var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnv = setEnv;
exports.init = init;
exports.destroy = destroy;
exports.actions = exports.store = void 0;

__webpack_require__(139);

var _redux = __webpack_require__(87);

var _IX2Reducer = _interopRequireDefault(__webpack_require__(186));

var _IX2VanillaEngine = __webpack_require__(123);

var actions = _interopRequireWildcard(__webpack_require__(65));

exports.actions = actions; // Array.includes needed for IE11 @packages/systems/ix2/shared/utils/quick-effects

var store = (0, _redux.createStore)(_IX2Reducer["default"]);
exports.store = store;

function setEnv(env) {
  if (env()) {
    (0, _IX2VanillaEngine.observeRequests)(store);
  }
}

function init(rawData) {
  destroy();
  (0, _IX2VanillaEngine.startEngine)({
    store: store,
    rawData: rawData,
    allowEvents: true
  });
}

function destroy() {
  (0, _IX2VanillaEngine.stopEngine)(store);
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(140);

module.exports = parent;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(141);

module.exports = parent;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
var entryUnbind = __webpack_require__(174);

module.exports = entryUnbind('Array', 'includes');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(143);
var $includes = __webpack_require__(85).includes;
var addToUnscopables = __webpack_require__(169);

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(70).f;
var createNonEnumerableProperty = __webpack_require__(43);
var redefine = __webpack_require__(157);
var setGlobal = __webpack_require__(42);
var copyConstructorProperties = __webpack_require__(161);
var isForced = __webpack_require__(168);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var uncurryThis = __webpack_require__(5);
var fails = __webpack_require__(19);
var classof = __webpack_require__(146);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(5);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var call = __webpack_require__(40);
var isObject = __webpack_require__(20);
var isSymbol = __webpack_require__(74);
var getMethod = __webpack_require__(151);
var ordinaryToPrimitive = __webpack_require__(154);
var wellKnownSymbol = __webpack_require__(77);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(5);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var userAgent = __webpack_require__(150);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(27);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(152);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(7);
var tryToString = __webpack_require__(153);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var call = __webpack_require__(40);
var isCallable = __webpack_require__(7);
var isObject = __webpack_require__(20);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var requireObjectCoercible = __webpack_require__(72);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(7);
var hasOwn = __webpack_require__(9);
var createNonEnumerableProperty = __webpack_require__(43);
var setGlobal = __webpack_require__(42);
var inspectSource = __webpack_require__(82);
var InternalStateModule = __webpack_require__(158);
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(160).CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(159);
var global = __webpack_require__(0);
var uncurryThis = __webpack_require__(5);
var isObject = __webpack_require__(20);
var createNonEnumerableProperty = __webpack_require__(43);
var hasOwn = __webpack_require__(9);
var shared = __webpack_require__(41);
var sharedKey = __webpack_require__(83);
var hiddenKeys = __webpack_require__(44);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isCallable = __webpack_require__(7);
var inspectSource = __webpack_require__(82);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var hasOwn = __webpack_require__(9);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(9);
var ownKeys = __webpack_require__(162);
var getOwnPropertyDescriptorModule = __webpack_require__(70);
var definePropertyModule = __webpack_require__(28);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(27);
var uncurryThis = __webpack_require__(5);
var getOwnPropertyNamesModule = __webpack_require__(163);
var getOwnPropertySymbolsModule = __webpack_require__(167);
var anObject = __webpack_require__(29);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(84);
var enumBugKeys = __webpack_require__(45);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(86);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(166);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(86);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 167 */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(19);
var isCallable = __webpack_require__(7);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(77);
var create = __webpack_require__(170);
var definePropertyModule = __webpack_require__(28);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(29);
var defineProperties = __webpack_require__(171);
var enumBugKeys = __webpack_require__(45);
var hiddenKeys = __webpack_require__(44);
var html = __webpack_require__(173);
var documentCreateElement = __webpack_require__(81);
var sharedKey = __webpack_require__(83);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var definePropertyModule = __webpack_require__(28);
var anObject = __webpack_require__(29);
var toIndexedObject = __webpack_require__(26);
var objectKeys = __webpack_require__(172);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(84);
var enumBugKeys = __webpack_require__(45);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(27);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var uncurryThis = __webpack_require__(5);

module.exports = function (CONSTRUCTOR, METHOD) {
  return uncurryThis(global[CONSTRUCTOR].prototype[METHOD]);
};


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(178);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(179);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);


/** Built-in value references. */
var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overArg);


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25), __webpack_require__(184)(module)))

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = __webpack_require__(87);

var _IX2DataReducer = __webpack_require__(187);

var _IX2RequestReducer = __webpack_require__(193);

var _IX2SessionReducer = __webpack_require__(194);

var _shared = __webpack_require__(14);

var _IX2InstancesReducer = __webpack_require__(280);

var _IX2ParametersReducer = __webpack_require__(281);

var ixElements = _shared.IX2ElementsReducer.ixElements;

var _default = (0, _redux.combineReducers)({
  ixData: _IX2DataReducer.ixData,
  ixRequest: _IX2RequestReducer.ixRequest,
  ixSession: _IX2SessionReducer.ixSession,
  ixElements: ixElements,
  ixInstances: _IX2InstancesReducer.ixInstances,
  ixParameters: _IX2ParametersReducer.ixParameters
});

exports["default"] = _default;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixData = void 0;

var _constants = __webpack_require__(4);

var IX2_RAW_DATA_IMPORTED = _constants.IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;

var ixData = function ixData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.freeze({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case IX2_RAW_DATA_IMPORTED:
      {
        return action.payload.ixData || Object.freeze({});
      }

    default:
      {
        return state;
      }
  }
};

exports.ixData = ixData;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickEffectDirectionConsts = exports.QuickEffectIds = exports.EventLimitAffectedElements = exports.EventContinuousMouseAxes = exports.EventBasedOn = exports.EventAppliesTo = exports.EventTypeConsts = void 0;
/**
 * Event Type IDs
 */

var EventTypeConsts = {
  NAVBAR_OPEN: 'NAVBAR_OPEN',
  NAVBAR_CLOSE: 'NAVBAR_CLOSE',
  TAB_ACTIVE: 'TAB_ACTIVE',
  TAB_INACTIVE: 'TAB_INACTIVE',
  SLIDER_ACTIVE: 'SLIDER_ACTIVE',
  SLIDER_INACTIVE: 'SLIDER_INACTIVE',
  DROPDOWN_OPEN: 'DROPDOWN_OPEN',
  DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
  MOUSE_CLICK: 'MOUSE_CLICK',
  MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
  MOUSE_DOWN: 'MOUSE_DOWN',
  MOUSE_UP: 'MOUSE_UP',
  MOUSE_OVER: 'MOUSE_OVER',
  MOUSE_OUT: 'MOUSE_OUT',
  MOUSE_MOVE: 'MOUSE_MOVE',
  MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
  SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
  SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
  SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
  ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
  ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
  PAGE_START: 'PAGE_START',
  PAGE_FINISH: 'PAGE_FINISH',
  PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
  PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
  PAGE_SCROLL: 'PAGE_SCROLL'
};
/**
 * Event Config Enums
 */

exports.EventTypeConsts = EventTypeConsts;
var EventAppliesTo = {
  ELEMENT: 'ELEMENT',
  CLASS: 'CLASS',
  PAGE: 'PAGE'
};
exports.EventAppliesTo = EventAppliesTo;
var EventBasedOn = {
  ELEMENT: 'ELEMENT',
  VIEWPORT: 'VIEWPORT'
};
exports.EventBasedOn = EventBasedOn;
var EventContinuousMouseAxes = {
  X_AXIS: 'X_AXIS',
  Y_AXIS: 'Y_AXIS'
};
exports.EventContinuousMouseAxes = EventContinuousMouseAxes;
var EventLimitAffectedElements = {
  CHILDREN: 'CHILDREN',
  SIBLINGS: 'SIBLINGS',
  IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN'
};
/**
 * Quick Effect Enums
 */

exports.EventLimitAffectedElements = EventLimitAffectedElements;
var QuickEffectIds = {
  FADE_EFFECT: 'FADE_EFFECT',
  SLIDE_EFFECT: 'SLIDE_EFFECT',
  GROW_EFFECT: 'GROW_EFFECT',
  SHRINK_EFFECT: 'SHRINK_EFFECT',
  SPIN_EFFECT: 'SPIN_EFFECT',
  FLY_EFFECT: 'FLY_EFFECT',
  POP_EFFECT: 'POP_EFFECT',
  FLIP_EFFECT: 'FLIP_EFFECT',
  JIGGLE_EFFECT: 'JIGGLE_EFFECT',
  PULSE_EFFECT: 'PULSE_EFFECT',
  DROP_EFFECT: 'DROP_EFFECT',
  BLINK_EFFECT: 'BLINK_EFFECT',
  BOUNCE_EFFECT: 'BOUNCE_EFFECT',
  FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
  FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
  RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
  JELLO_EFFECT: 'JELLO_EFFECT',
  GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
  SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
  PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT'
};
/**
 * Quick Effect Direction Enums
 */

exports.QuickEffectIds = QuickEffectIds;
var QuickEffectDirectionConsts = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  BOTTOM: 'BOTTOM',
  TOP: 'TOP',
  BOTTOM_LEFT: 'BOTTOM_LEFT',
  BOTTOM_RIGHT: 'BOTTOM_RIGHT',
  TOP_RIGHT: 'TOP_RIGHT',
  TOP_LEFT: 'TOP_LEFT',
  CLOCKWISE: 'CLOCKWISE',
  COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE'
};
exports.QuickEffectDirectionConsts = QuickEffectDirectionConsts;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractionTypeConsts = void 0;
var InteractionTypeConsts = {
  MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
  MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
  MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
  SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
  SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
  MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
  PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
  PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
  PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
  NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
  DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
  ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
  TAB_INTERACTION: 'TAB_INTERACTION',
  SLIDER_INTERACTION: 'SLIDER_INTERACTION'
};
exports.InteractionTypeConsts = InteractionTypeConsts;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(__webpack_require__(21));

var _ReducedMotionTypes;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReducedMotionTypes = void 0;

var _animationActions = __webpack_require__(94);

var _animationActions$Act = _animationActions.ActionTypeConsts,
    TRANSFORM_MOVE = _animationActions$Act.TRANSFORM_MOVE,
    TRANSFORM_SCALE = _animationActions$Act.TRANSFORM_SCALE,
    TRANSFORM_ROTATE = _animationActions$Act.TRANSFORM_ROTATE,
    TRANSFORM_SKEW = _animationActions$Act.TRANSFORM_SKEW,
    STYLE_SIZE = _animationActions$Act.STYLE_SIZE,
    STYLE_FILTER = _animationActions$Act.STYLE_FILTER;
/**
 * Reduced Motion: Action types to bypass during `prefers-reduced-motion`
 */

var ReducedMotionTypes = (_ReducedMotionTypes = {}, (0, _defineProperty2["default"])(_ReducedMotionTypes, TRANSFORM_MOVE, true), (0, _defineProperty2["default"])(_ReducedMotionTypes, TRANSFORM_SCALE, true), (0, _defineProperty2["default"])(_ReducedMotionTypes, TRANSFORM_ROTATE, true), (0, _defineProperty2["default"])(_ReducedMotionTypes, TRANSFORM_SKEW, true), (0, _defineProperty2["default"])(_ReducedMotionTypes, STYLE_SIZE, true), (0, _defineProperty2["default"])(_ReducedMotionTypes, STYLE_FILTER, true), _ReducedMotionTypes);
exports.ReducedMotionTypes = ReducedMotionTypes;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IX2_TEST_FRAME_RENDERED = exports.IX2_MEDIA_QUERIES_DEFINED = exports.IX2_VIEWPORT_WIDTH_CHANGED = exports.IX2_ACTION_LIST_PLAYBACK_CHANGED = exports.IX2_ELEMENT_STATE_CHANGED = exports.IX2_INSTANCE_REMOVED = exports.IX2_INSTANCE_STARTED = exports.IX2_INSTANCE_ADDED = exports.IX2_PARAMETER_CHANGED = exports.IX2_ANIMATION_FRAME_CHANGED = exports.IX2_EVENT_STATE_CHANGED = exports.IX2_EVENT_LISTENER_ADDED = exports.IX2_CLEAR_REQUESTED = exports.IX2_STOP_REQUESTED = exports.IX2_PLAYBACK_REQUESTED = exports.IX2_PREVIEW_REQUESTED = exports.IX2_SESSION_STOPPED = exports.IX2_SESSION_STARTED = exports.IX2_SESSION_INITIALIZED = exports.IX2_RAW_DATA_IMPORTED = void 0;
var IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
exports.IX2_RAW_DATA_IMPORTED = IX2_RAW_DATA_IMPORTED;
var IX2_SESSION_INITIALIZED = 'IX2_SESSION_INITIALIZED';
exports.IX2_SESSION_INITIALIZED = IX2_SESSION_INITIALIZED;
var IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
exports.IX2_SESSION_STARTED = IX2_SESSION_STARTED;
var IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
exports.IX2_SESSION_STOPPED = IX2_SESSION_STOPPED;
var IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
exports.IX2_PREVIEW_REQUESTED = IX2_PREVIEW_REQUESTED;
var IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
exports.IX2_PLAYBACK_REQUESTED = IX2_PLAYBACK_REQUESTED;
var IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
exports.IX2_STOP_REQUESTED = IX2_STOP_REQUESTED;
var IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
exports.IX2_CLEAR_REQUESTED = IX2_CLEAR_REQUESTED;
var IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
exports.IX2_EVENT_LISTENER_ADDED = IX2_EVENT_LISTENER_ADDED;
var IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
exports.IX2_EVENT_STATE_CHANGED = IX2_EVENT_STATE_CHANGED;
var IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
exports.IX2_ANIMATION_FRAME_CHANGED = IX2_ANIMATION_FRAME_CHANGED;
var IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
exports.IX2_PARAMETER_CHANGED = IX2_PARAMETER_CHANGED;
var IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
exports.IX2_INSTANCE_ADDED = IX2_INSTANCE_ADDED;
var IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
exports.IX2_INSTANCE_STARTED = IX2_INSTANCE_STARTED;
var IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
exports.IX2_INSTANCE_REMOVED = IX2_INSTANCE_REMOVED;
var IX2_ELEMENT_STATE_CHANGED = 'IX2_ELEMENT_STATE_CHANGED';
exports.IX2_ELEMENT_STATE_CHANGED = IX2_ELEMENT_STATE_CHANGED;
var IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
exports.IX2_ACTION_LIST_PLAYBACK_CHANGED = IX2_ACTION_LIST_PLAYBACK_CHANGED;
var IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';
exports.IX2_VIEWPORT_WIDTH_CHANGED = IX2_VIEWPORT_WIDTH_CHANGED;
var IX2_MEDIA_QUERIES_DEFINED = 'IX2_MEDIA_QUERIES_DEFINED';
exports.IX2_MEDIA_QUERIES_DEFINED = IX2_MEDIA_QUERIES_DEFINED;
var IX2_TEST_FRAME_RENDERED = 'IX2_TEST_FRAME_RENDERED';
exports.IX2_TEST_FRAME_RENDERED = IX2_TEST_FRAME_RENDERED;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RENDER_PLUGIN = exports.RENDER_STYLE = exports.RENDER_GENERAL = exports.RENDER_TRANSFORM = exports.ABSTRACT_NODE = exports.PLAIN_OBJECT = exports.HTML_ELEMENT = exports.PRESERVE_3D = exports.PARENT = exports.SIBLINGS = exports.IMMEDIATE_CHILDREN = exports.CHILDREN = exports.BAR_DELIMITER = exports.COLON_DELIMITER = exports.COMMA_DELIMITER = exports.AUTO = exports.WILL_CHANGE = exports.FLEX = exports.DISPLAY = exports.COLOR = exports.BORDER_COLOR = exports.BACKGROUND = exports.BACKGROUND_COLOR = exports.HEIGHT = exports.WIDTH = exports.FILTER = exports.OPACITY = exports.SKEW_Y = exports.SKEW_X = exports.SKEW = exports.ROTATE_Z = exports.ROTATE_Y = exports.ROTATE_X = exports.SCALE_3D = exports.SCALE_Z = exports.SCALE_Y = exports.SCALE_X = exports.TRANSLATE_3D = exports.TRANSLATE_Z = exports.TRANSLATE_Y = exports.TRANSLATE_X = exports.TRANSFORM = exports.CONFIG_UNIT = exports.CONFIG_Z_UNIT = exports.CONFIG_Y_UNIT = exports.CONFIG_X_UNIT = exports.CONFIG_VALUE = exports.CONFIG_Z_VALUE = exports.CONFIG_Y_VALUE = exports.CONFIG_X_VALUE = exports.BOUNDARY_SELECTOR = exports.W_MOD_IX = exports.W_MOD_JS = exports.WF_PAGE = exports.IX2_ID_DELIMITER = void 0;
var IX2_ID_DELIMITER = '|';
exports.IX2_ID_DELIMITER = IX2_ID_DELIMITER;
var WF_PAGE = 'data-wf-page';
exports.WF_PAGE = WF_PAGE;
var W_MOD_JS = 'w-mod-js';
exports.W_MOD_JS = W_MOD_JS;
var W_MOD_IX = 'w-mod-ix';
exports.W_MOD_IX = W_MOD_IX;
var BOUNDARY_SELECTOR = '.w-dyn-item';
exports.BOUNDARY_SELECTOR = BOUNDARY_SELECTOR;
var CONFIG_X_VALUE = 'xValue';
exports.CONFIG_X_VALUE = CONFIG_X_VALUE;
var CONFIG_Y_VALUE = 'yValue';
exports.CONFIG_Y_VALUE = CONFIG_Y_VALUE;
var CONFIG_Z_VALUE = 'zValue';
exports.CONFIG_Z_VALUE = CONFIG_Z_VALUE;
var CONFIG_VALUE = 'value';
exports.CONFIG_VALUE = CONFIG_VALUE;
var CONFIG_X_UNIT = 'xUnit';
exports.CONFIG_X_UNIT = CONFIG_X_UNIT;
var CONFIG_Y_UNIT = 'yUnit';
exports.CONFIG_Y_UNIT = CONFIG_Y_UNIT;
var CONFIG_Z_UNIT = 'zUnit';
exports.CONFIG_Z_UNIT = CONFIG_Z_UNIT;
var CONFIG_UNIT = 'unit';
exports.CONFIG_UNIT = CONFIG_UNIT;
var TRANSFORM = 'transform';
exports.TRANSFORM = TRANSFORM;
var TRANSLATE_X = 'translateX';
exports.TRANSLATE_X = TRANSLATE_X;
var TRANSLATE_Y = 'translateY';
exports.TRANSLATE_Y = TRANSLATE_Y;
var TRANSLATE_Z = 'translateZ';
exports.TRANSLATE_Z = TRANSLATE_Z;
var TRANSLATE_3D = 'translate3d';
exports.TRANSLATE_3D = TRANSLATE_3D;
var SCALE_X = 'scaleX';
exports.SCALE_X = SCALE_X;
var SCALE_Y = 'scaleY';
exports.SCALE_Y = SCALE_Y;
var SCALE_Z = 'scaleZ';
exports.SCALE_Z = SCALE_Z;
var SCALE_3D = 'scale3d';
exports.SCALE_3D = SCALE_3D;
var ROTATE_X = 'rotateX';
exports.ROTATE_X = ROTATE_X;
var ROTATE_Y = 'rotateY';
exports.ROTATE_Y = ROTATE_Y;
var ROTATE_Z = 'rotateZ';
exports.ROTATE_Z = ROTATE_Z;
var SKEW = 'skew';
exports.SKEW = SKEW;
var SKEW_X = 'skewX';
exports.SKEW_X = SKEW_X;
var SKEW_Y = 'skewY';
exports.SKEW_Y = SKEW_Y;
var OPACITY = 'opacity';
exports.OPACITY = OPACITY;
var FILTER = 'filter';
exports.FILTER = FILTER;
var WIDTH = 'width';
exports.WIDTH = WIDTH;
var HEIGHT = 'height';
exports.HEIGHT = HEIGHT;
var BACKGROUND_COLOR = 'backgroundColor';
exports.BACKGROUND_COLOR = BACKGROUND_COLOR;
var BACKGROUND = 'background';
exports.BACKGROUND = BACKGROUND;
var BORDER_COLOR = 'borderColor';
exports.BORDER_COLOR = BORDER_COLOR;
var COLOR = 'color';
exports.COLOR = COLOR;
var DISPLAY = 'display';
exports.DISPLAY = DISPLAY;
var FLEX = 'flex';
exports.FLEX = FLEX;
var WILL_CHANGE = 'willChange';
exports.WILL_CHANGE = WILL_CHANGE;
var AUTO = 'AUTO';
exports.AUTO = AUTO;
var COMMA_DELIMITER = ',';
exports.COMMA_DELIMITER = COMMA_DELIMITER;
var COLON_DELIMITER = ':';
exports.COLON_DELIMITER = COLON_DELIMITER;
var BAR_DELIMITER = '|';
exports.BAR_DELIMITER = BAR_DELIMITER;
var CHILDREN = 'CHILDREN';
exports.CHILDREN = CHILDREN;
var IMMEDIATE_CHILDREN = 'IMMEDIATE_CHILDREN';
exports.IMMEDIATE_CHILDREN = IMMEDIATE_CHILDREN;
var SIBLINGS = 'SIBLINGS';
exports.SIBLINGS = SIBLINGS;
var PARENT = 'PARENT';
exports.PARENT = PARENT;
var PRESERVE_3D = 'preserve-3d';
exports.PRESERVE_3D = PRESERVE_3D;
var HTML_ELEMENT = 'HTML_ELEMENT';
exports.HTML_ELEMENT = HTML_ELEMENT;
var PLAIN_OBJECT = 'PLAIN_OBJECT';
exports.PLAIN_OBJECT = PLAIN_OBJECT;
var ABSTRACT_NODE = 'ABSTRACT_NODE';
exports.ABSTRACT_NODE = ABSTRACT_NODE;
var RENDER_TRANSFORM = 'RENDER_TRANSFORM';
exports.RENDER_TRANSFORM = RENDER_TRANSFORM;
var RENDER_GENERAL = 'RENDER_GENERAL';
exports.RENDER_GENERAL = RENDER_GENERAL;
var RENDER_STYLE = 'RENDER_STYLE';
exports.RENDER_STYLE = RENDER_STYLE;
var RENDER_PLUGIN = 'RENDER_PLUGIN';
exports.RENDER_PLUGIN = RENDER_PLUGIN;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault2(__webpack_require__(21));

var _Object$create;

var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixRequest = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(30));

var _constants = __webpack_require__(4);

var _timm = __webpack_require__(22);

var _constants$IX2EngineA = _constants.IX2EngineActionTypes,
    IX2_PREVIEW_REQUESTED = _constants$IX2EngineA.IX2_PREVIEW_REQUESTED,
    IX2_PLAYBACK_REQUESTED = _constants$IX2EngineA.IX2_PLAYBACK_REQUESTED,
    IX2_STOP_REQUESTED = _constants$IX2EngineA.IX2_STOP_REQUESTED,
    IX2_CLEAR_REQUESTED = _constants$IX2EngineA.IX2_CLEAR_REQUESTED;
var initialState = {
  preview: {},
  playback: {},
  stop: {},
  clear: {}
};
var stateKeys = Object.create(null, (_Object$create = {}, (0, _defineProperty2["default"])(_Object$create, IX2_PREVIEW_REQUESTED, {
  value: 'preview'
}), (0, _defineProperty2["default"])(_Object$create, IX2_PLAYBACK_REQUESTED, {
  value: 'playback'
}), (0, _defineProperty2["default"])(_Object$create, IX2_STOP_REQUESTED, {
  value: 'stop'
}), (0, _defineProperty2["default"])(_Object$create, IX2_CLEAR_REQUESTED, {
  value: 'clear'
}), _Object$create));

var ixRequest = function ixRequest() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type in stateKeys) {
    var key = [stateKeys[action.type]];
    return (0, _timm.setIn)(state, [key], (0, _extends2["default"])({}, action.payload));
  }

  return state;
};

exports.ixRequest = ixRequest;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixSession = void 0;

var _constants = __webpack_require__(4);

var _timm = __webpack_require__(22);

var _constants$IX2EngineA = _constants.IX2EngineActionTypes,
    IX2_SESSION_INITIALIZED = _constants$IX2EngineA.IX2_SESSION_INITIALIZED,
    IX2_SESSION_STARTED = _constants$IX2EngineA.IX2_SESSION_STARTED,
    IX2_TEST_FRAME_RENDERED = _constants$IX2EngineA.IX2_TEST_FRAME_RENDERED,
    IX2_SESSION_STOPPED = _constants$IX2EngineA.IX2_SESSION_STOPPED,
    IX2_EVENT_LISTENER_ADDED = _constants$IX2EngineA.IX2_EVENT_LISTENER_ADDED,
    IX2_EVENT_STATE_CHANGED = _constants$IX2EngineA.IX2_EVENT_STATE_CHANGED,
    IX2_ANIMATION_FRAME_CHANGED = _constants$IX2EngineA.IX2_ANIMATION_FRAME_CHANGED,
    IX2_ACTION_LIST_PLAYBACK_CHANGED = _constants$IX2EngineA.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    IX2_VIEWPORT_WIDTH_CHANGED = _constants$IX2EngineA.IX2_VIEWPORT_WIDTH_CHANGED,
    IX2_MEDIA_QUERIES_DEFINED = _constants$IX2EngineA.IX2_MEDIA_QUERIES_DEFINED;
var initialState = {
  active: false,
  tick: 0,
  eventListeners: [],
  eventState: {},
  playbackState: {},
  viewportWidth: 0,
  mediaQueryKey: null,
  hasBoundaryNodes: false,
  hasDefinedMediaQueries: false,
  reducedMotion: false
};
var TEST_FRAME_STEPS_SIZE = 20; // $FlowFixMe

var ixSession = function ixSession() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case IX2_SESSION_INITIALIZED:
      {
        var _action$payload = action.payload,
            hasBoundaryNodes = _action$payload.hasBoundaryNodes,
            reducedMotion = _action$payload.reducedMotion;
        return (0, _timm.merge)(state, {
          hasBoundaryNodes: hasBoundaryNodes,
          reducedMotion: reducedMotion
        });
      }

    case IX2_SESSION_STARTED:
      {
        return (0, _timm.set)(state, 'active', true);
      }

    case IX2_TEST_FRAME_RENDERED:
      {
        var _action$payload$step = action.payload.step,
            step = _action$payload$step === void 0 ? TEST_FRAME_STEPS_SIZE : _action$payload$step;
        return (0, _timm.set)(state, 'tick', state.tick + step);
      }

    case IX2_SESSION_STOPPED:
      {
        return initialState;
      }

    case IX2_ANIMATION_FRAME_CHANGED:
      {
        var now = action.payload.now;
        return (0, _timm.set)(state, 'tick', now);
      }

    case IX2_EVENT_LISTENER_ADDED:
      {
        var eventListeners = (0, _timm.addLast)(state.eventListeners, action.payload);
        return (0, _timm.set)(state, 'eventListeners', eventListeners);
      }

    case IX2_EVENT_STATE_CHANGED:
      {
        var _action$payload2 = action.payload,
            stateKey = _action$payload2.stateKey,
            newState = _action$payload2.newState;
        return (0, _timm.setIn)(state, ['eventState', stateKey], newState);
      }

    case IX2_ACTION_LIST_PLAYBACK_CHANGED:
      {
        var _action$payload3 = action.payload,
            actionListId = _action$payload3.actionListId,
            isPlaying = _action$payload3.isPlaying;
        return (0, _timm.setIn)(state, ['playbackState', actionListId], isPlaying);
      }

    case IX2_VIEWPORT_WIDTH_CHANGED:
      {
        var _action$payload4 = action.payload,
            width = _action$payload4.width,
            mediaQueries = _action$payload4.mediaQueries;
        var mediaQueryCount = mediaQueries.length;
        var mediaQueryKey = null;

        for (var i = 0; i < mediaQueryCount; i++) {
          var _mediaQueries$i = mediaQueries[i],
              key = _mediaQueries$i.key,
              min = _mediaQueries$i.min,
              max = _mediaQueries$i.max;

          if (width >= min && width <= max) {
            mediaQueryKey = key;
            break;
          }
        }

        return (0, _timm.merge)(state, {
          viewportWidth: width,
          mediaQueryKey: mediaQueryKey
        });
      }

    case IX2_MEDIA_QUERIES_DEFINED:
      {
        return (0, _timm.set)(state, 'hasDefinedMediaQueries', true);
      }

    default:
      {
        return state;
      }
  }
};

exports.ixSession = ixSession;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(196),
    getMatchData = __webpack_require__(248),
    matchesStrictComparable = __webpack_require__(111);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(97),
    baseIsEqual = __webpack_require__(101);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(32);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(32);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(32);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(32);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(31);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 203 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 205 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(31),
    Map = __webpack_require__(50),
    MapCache = __webpack_require__(51);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(98),
    isMasked = __webpack_require__(210),
    isObject = __webpack_require__(8),
    toSource = __webpack_require__(100);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 209 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(211);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 212 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(214),
    ListCache = __webpack_require__(31),
    Map = __webpack_require__(50);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(215),
    hashDelete = __webpack_require__(216),
    hashGet = __webpack_require__(217),
    hashHas = __webpack_require__(218),
    hashSet = __webpack_require__(219);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(33);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(33);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(33);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(33);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(34);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(34);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(34);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(34);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(97),
    equalArrays = __webpack_require__(102),
    equalByTag = __webpack_require__(231),
    equalObjects = __webpack_require__(235),
    getTag = __webpack_require__(59),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(53),
    isTypedArray = __webpack_require__(55);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(51),
    setCacheAdd = __webpack_require__(227),
    setCacheHas = __webpack_require__(228);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 227 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 228 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 229 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 230 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    Uint8Array = __webpack_require__(232),
    eq = __webpack_require__(49),
    equalArrays = __webpack_require__(102),
    mapToArray = __webpack_require__(233),
    setToArray = __webpack_require__(234);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 233 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 234 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(236);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(103),
    getSymbols = __webpack_require__(104),
    keys = __webpack_require__(35);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 237 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 238 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObjectLike = __webpack_require__(12);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isLength = __webpack_require__(56),
    isObjectLike = __webpack_require__(12);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 242 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(99);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(107)(module)))

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(108);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(11),
    root = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(110),
    keys = __webpack_require__(35);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(101),
    get = __webpack_require__(60),
    hasIn = __webpack_require__(255),
    isKey = __webpack_require__(62),
    isStrictComparable = __webpack_require__(110),
    matchesStrictComparable = __webpack_require__(111),
    toKey = __webpack_require__(24);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(251);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(252);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(51);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(254);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    arrayMap = __webpack_require__(112),
    isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(38);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(256),
    hasPath = __webpack_require__(257);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 256 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(37),
    isArguments = __webpack_require__(36),
    isArray = __webpack_require__(2),
    isIndex = __webpack_require__(54),
    isLength = __webpack_require__(56),
    toKey = __webpack_require__(24);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(113),
    basePropertyDeep = __webpack_require__(259),
    isKey = __webpack_require__(62),
    toKey = __webpack_require__(24);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(61);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(114),
    baseIteratee = __webpack_require__(10),
    toInteger = __webpack_require__(115);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(64);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(263);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),
/* 263 */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),
/* 264 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 265 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 266 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElementState = createElementState;
exports.mergeActionState = mergeActionState;
exports.ixElements = void 0;

var _timm = __webpack_require__(22);

var _constants = __webpack_require__(4);

var _constants$IX2EngineC = _constants.IX2EngineConstants,
    HTML_ELEMENT = _constants$IX2EngineC.HTML_ELEMENT,
    PLAIN_OBJECT = _constants$IX2EngineC.PLAIN_OBJECT,
    ABSTRACT_NODE = _constants$IX2EngineC.ABSTRACT_NODE,
    CONFIG_X_VALUE = _constants$IX2EngineC.CONFIG_X_VALUE,
    CONFIG_Y_VALUE = _constants$IX2EngineC.CONFIG_Y_VALUE,
    CONFIG_Z_VALUE = _constants$IX2EngineC.CONFIG_Z_VALUE,
    CONFIG_VALUE = _constants$IX2EngineC.CONFIG_VALUE,
    CONFIG_X_UNIT = _constants$IX2EngineC.CONFIG_X_UNIT,
    CONFIG_Y_UNIT = _constants$IX2EngineC.CONFIG_Y_UNIT,
    CONFIG_Z_UNIT = _constants$IX2EngineC.CONFIG_Z_UNIT,
    CONFIG_UNIT = _constants$IX2EngineC.CONFIG_UNIT;
var _constants$IX2EngineA = _constants.IX2EngineActionTypes,
    IX2_SESSION_STOPPED = _constants$IX2EngineA.IX2_SESSION_STOPPED,
    IX2_INSTANCE_ADDED = _constants$IX2EngineA.IX2_INSTANCE_ADDED,
    IX2_ELEMENT_STATE_CHANGED = _constants$IX2EngineA.IX2_ELEMENT_STATE_CHANGED;
var initialState = {};
var refState = 'refState';

var ixElements = function ixElements() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case IX2_SESSION_STOPPED:
      {
        return initialState;
      }

    case IX2_INSTANCE_ADDED:
      {
        var _action$payload = action.payload,
            elementId = _action$payload.elementId,
            ref = _action$payload.element,
            origin = _action$payload.origin,
            actionItem = _action$payload.actionItem,
            refType = _action$payload.refType;
        var actionTypeId = actionItem.actionTypeId;
        var newState = state; // Create new ref entry if it doesn't exist

        if ((0, _timm.getIn)(newState, [elementId, ref]) !== ref) {
          newState = createElementState(newState, ref, refType, elementId, actionItem);
        } // Merge origin values into ref state


        return mergeActionState(newState, elementId, actionTypeId, origin, actionItem);
      }

    case IX2_ELEMENT_STATE_CHANGED:
      {
        var _action$payload2 = action.payload,
            _elementId = _action$payload2.elementId,
            _actionTypeId = _action$payload2.actionTypeId,
            current = _action$payload2.current,
            _actionItem = _action$payload2.actionItem;
        return mergeActionState(state, _elementId, _actionTypeId, current, _actionItem);
      }

    default:
      {
        return state;
      }
  }
};

exports.ixElements = ixElements;

function createElementState(state, ref, refType, elementId, actionItem) {
  var refId = refType === PLAIN_OBJECT ? (0, _timm.getIn)(actionItem, ['config', 'target', 'objectId']) : null;
  return (0, _timm.mergeIn)(state, [elementId], {
    id: elementId,
    ref: ref,
    refId: refId,
    refType: refType
  });
}

function mergeActionState(state, elementId, actionTypeId, actionState, // FIXME: weak type is used
actionItem) {
  var units = pickUnits(actionItem);
  var mergePath = [elementId, refState, actionTypeId];
  return (0, _timm.mergeIn)(state, mergePath, actionState, units);
}

var valueUnitPairs = [[CONFIG_X_VALUE, CONFIG_X_UNIT], [CONFIG_Y_VALUE, CONFIG_Y_UNIT], [CONFIG_Z_VALUE, CONFIG_Z_UNIT], [CONFIG_VALUE, CONFIG_UNIT]]; // FIXME: weak type is used
// eslint-disable-next-line flowtype/no-weak-types

function pickUnits(actionItem) {
  var config = actionItem.config;
  return valueUnitPairs.reduce(function (result, pair) {
    var valueKey = pair[0];
    var unitKey = pair[1];
    var configValue = config[valueKey];
    var configUnit = config[unitKey];

    if (configValue != null && configUnit != null) {
      result[unitKey] = configUnit;
    }

    return result;
  }, {});
}

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearPlugin = exports.renderPlugin = exports.createPluginInstance = exports.getPluginDestination = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginConfig = void 0;
/* eslint-env browser */
// $FlowFixMe

var getPluginConfig = function getPluginConfig(actionItemConfig) {
  return actionItemConfig.value;
}; // $FlowFixMe


exports.getPluginConfig = getPluginConfig;

var getPluginDuration = function getPluginDuration(element, actionItem) {
  if (actionItem.config.duration !== 'auto') {
    return null;
  }

  var duration = parseFloat(element.getAttribute('data-duration'));

  if (duration > 0) {
    return duration * 1000;
  }

  return parseFloat(element.getAttribute('data-default-duration')) * 1000;
}; // $FlowFixMe


exports.getPluginDuration = getPluginDuration;

var getPluginOrigin = function getPluginOrigin(refState) {
  return refState || {
    value: 0
  };
}; // $FlowFixMe


exports.getPluginOrigin = getPluginOrigin;

var getPluginDestination = function getPluginDestination(actionItemConfig) {
  return {
    value: actionItemConfig.value
  };
}; // $FlowFixMe


exports.getPluginDestination = getPluginDestination;

var createPluginInstance = function createPluginInstance(element) {
  var instance = window.Webflow.require('lottie').createInstance(element);

  instance.stop();
  instance.setSubframe(true);
  return instance;
}; // $FlowFixMe


exports.createPluginInstance = createPluginInstance;

var renderPlugin = function renderPlugin(pluginInstance, refState, actionItem) {
  if (!pluginInstance) {
    return;
  }

  var percent = refState[actionItem.actionTypeId].value / 100;
  pluginInstance.goToFrame(pluginInstance.frames * percent);
}; // $FlowFixMe


exports.renderPlugin = renderPlugin;

var clearPlugin = function clearPlugin(element) {
  var instance = window.Webflow.require('lottie').createInstance(element);

  instance.stop();
};

exports.clearPlugin = clearPlugin;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(1);

var _typeof2 = _interopRequireDefault2(__webpack_require__(17));

var _defineProperty2 = _interopRequireDefault2(__webpack_require__(21));

var _Object$freeze, _Object$freeze2, _transformDefaults;

var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInstanceId = getInstanceId;
exports.getElementId = getElementId;
exports.reifyState = reifyState;
exports.observeStore = observeStore;
exports.getAffectedElements = getAffectedElements;
exports.getComputedStyle = getComputedStyle;
exports.getInstanceOrigin = getInstanceOrigin;
exports.getDestinationValues = getDestinationValues;
exports.getRenderType = getRenderType;
exports.getStyleProp = getStyleProp;
exports.renderHTMLElement = renderHTMLElement;
exports.clearAllStyles = clearAllStyles;
exports.cleanupHTMLElement = cleanupHTMLElement;
exports.getMaxDurationItemIndex = getMaxDurationItemIndex;
exports.getActionListProgress = getActionListProgress;
exports.reduceListToGroup = reduceListToGroup;
exports.shouldNamespaceEventParameter = shouldNamespaceEventParameter;
exports.getNamespacedParameterId = getNamespacedParameterId;
exports.shouldAllowMediaQuery = shouldAllowMediaQuery;
exports.mediaQueriesEqual = mediaQueriesEqual;
exports.stringifyTarget = stringifyTarget;
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function get() {
    return _shallowEqual["default"];
  }
});
exports.getItemConfigByKey = void 0;

var _defaultTo = _interopRequireDefault(__webpack_require__(270));

var _reduce = _interopRequireDefault(__webpack_require__(271));

var _findLast = _interopRequireDefault(__webpack_require__(277));

var _timm = __webpack_require__(22);

var _constants = __webpack_require__(4);

var _shallowEqual = _interopRequireDefault(__webpack_require__(279));

var _IX2EasingUtils = __webpack_require__(118);

var _IX2VanillaPlugins = __webpack_require__(120);

var _IX2BrowserSupport = __webpack_require__(48);
/* eslint-env browser */


var _constants$IX2EngineC = _constants.IX2EngineConstants,
    BACKGROUND = _constants$IX2EngineC.BACKGROUND,
    TRANSFORM = _constants$IX2EngineC.TRANSFORM,
    TRANSLATE_3D = _constants$IX2EngineC.TRANSLATE_3D,
    SCALE_3D = _constants$IX2EngineC.SCALE_3D,
    ROTATE_X = _constants$IX2EngineC.ROTATE_X,
    ROTATE_Y = _constants$IX2EngineC.ROTATE_Y,
    ROTATE_Z = _constants$IX2EngineC.ROTATE_Z,
    SKEW = _constants$IX2EngineC.SKEW,
    PRESERVE_3D = _constants$IX2EngineC.PRESERVE_3D,
    FLEX = _constants$IX2EngineC.FLEX,
    OPACITY = _constants$IX2EngineC.OPACITY,
    FILTER = _constants$IX2EngineC.FILTER,
    WIDTH = _constants$IX2EngineC.WIDTH,
    HEIGHT = _constants$IX2EngineC.HEIGHT,
    BACKGROUND_COLOR = _constants$IX2EngineC.BACKGROUND_COLOR,
    BORDER_COLOR = _constants$IX2EngineC.BORDER_COLOR,
    COLOR = _constants$IX2EngineC.COLOR,
    CHILDREN = _constants$IX2EngineC.CHILDREN,
    IMMEDIATE_CHILDREN = _constants$IX2EngineC.IMMEDIATE_CHILDREN,
    SIBLINGS = _constants$IX2EngineC.SIBLINGS,
    PARENT = _constants$IX2EngineC.PARENT,
    DISPLAY = _constants$IX2EngineC.DISPLAY,
    WILL_CHANGE = _constants$IX2EngineC.WILL_CHANGE,
    AUTO = _constants$IX2EngineC.AUTO,
    COMMA_DELIMITER = _constants$IX2EngineC.COMMA_DELIMITER,
    COLON_DELIMITER = _constants$IX2EngineC.COLON_DELIMITER,
    BAR_DELIMITER = _constants$IX2EngineC.BAR_DELIMITER,
    RENDER_TRANSFORM = _constants$IX2EngineC.RENDER_TRANSFORM,
    RENDER_GENERAL = _constants$IX2EngineC.RENDER_GENERAL,
    RENDER_STYLE = _constants$IX2EngineC.RENDER_STYLE,
    RENDER_PLUGIN = _constants$IX2EngineC.RENDER_PLUGIN;
var _constants$ActionType = _constants.ActionTypeConsts,
    TRANSFORM_MOVE = _constants$ActionType.TRANSFORM_MOVE,
    TRANSFORM_SCALE = _constants$ActionType.TRANSFORM_SCALE,
    TRANSFORM_ROTATE = _constants$ActionType.TRANSFORM_ROTATE,
    TRANSFORM_SKEW = _constants$ActionType.TRANSFORM_SKEW,
    STYLE_OPACITY = _constants$ActionType.STYLE_OPACITY,
    STYLE_FILTER = _constants$ActionType.STYLE_FILTER,
    STYLE_SIZE = _constants$ActionType.STYLE_SIZE,
    STYLE_BACKGROUND_COLOR = _constants$ActionType.STYLE_BACKGROUND_COLOR,
    STYLE_BORDER = _constants$ActionType.STYLE_BORDER,
    STYLE_TEXT_COLOR = _constants$ActionType.STYLE_TEXT_COLOR,
    GENERAL_DISPLAY = _constants$ActionType.GENERAL_DISPLAY;
var OBJECT_VALUE = 'OBJECT_VALUE';

var trim = function trim(v) {
  return v.trim();
};

var colorStyleProps = Object.freeze((_Object$freeze = {}, (0, _defineProperty2["default"])(_Object$freeze, STYLE_BACKGROUND_COLOR, BACKGROUND_COLOR), (0, _defineProperty2["default"])(_Object$freeze, STYLE_BORDER, BORDER_COLOR), (0, _defineProperty2["default"])(_Object$freeze, STYLE_TEXT_COLOR, COLOR), _Object$freeze));
var willChangeProps = Object.freeze((_Object$freeze2 = {}, (0, _defineProperty2["default"])(_Object$freeze2, _IX2BrowserSupport.TRANSFORM_PREFIXED, TRANSFORM), (0, _defineProperty2["default"])(_Object$freeze2, BACKGROUND_COLOR, BACKGROUND), (0, _defineProperty2["default"])(_Object$freeze2, OPACITY, OPACITY), (0, _defineProperty2["default"])(_Object$freeze2, FILTER, FILTER), (0, _defineProperty2["default"])(_Object$freeze2, WIDTH, WIDTH), (0, _defineProperty2["default"])(_Object$freeze2, HEIGHT, HEIGHT), _Object$freeze2));
var objectCache = {};
var instanceCount = 1;

function getInstanceId() {
  return 'i' + instanceCount++;
}

var elementCount = 1; // $FlowFixMe

function getElementId(ixElements, ref) {
  // TODO: optimize element lookup
  for (var key in ixElements) {
    var ixEl = ixElements[key];

    if (ixEl && ixEl.ref === ref) {
      return ixEl.id;
    }
  }

  return 'e' + elementCount++;
} // $FlowFixMe


function reifyState() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      events = _ref2.events,
      actionLists = _ref2.actionLists,
      site = _ref2.site;

  var eventTypeMap = (0, _reduce["default"])(events, function (result, event) {
    var eventTypeId = event.eventTypeId;

    if (!result[eventTypeId]) {
      result[eventTypeId] = {};
    }

    result[eventTypeId][event.id] = event;
    return result;
  }, {});
  var mediaQueries = site && site.mediaQueries;
  var mediaQueryKeys = [];

  if (mediaQueries) {
    mediaQueryKeys = mediaQueries.map(function (mq) {
      return mq.key;
    });
  } else {
    mediaQueries = [];
    console.warn("IX2 missing mediaQueries in site data");
  }

  return {
    ixData: {
      events: events,
      actionLists: actionLists,
      eventTypeMap: eventTypeMap,
      mediaQueries: mediaQueries,
      mediaQueryKeys: mediaQueryKeys
    }
  };
}

var strictEqual = function strictEqual(a, b) {
  return a === b;
}; // $FlowFixMe


function observeStore(_ref3) {
  var store = _ref3.store,
      select = _ref3.select,
      onChange = _ref3.onChange,
      _ref3$comparator = _ref3.comparator,
      comparator = _ref3$comparator === void 0 ? strictEqual : _ref3$comparator;
  var getState = store.getState,
      subscribe = store.subscribe;
  var unsubscribe = subscribe(handleChange);
  var currentState = select(getState());

  function handleChange() {
    var nextState = select(getState());

    if (nextState == null) {
      unsubscribe();
      return;
    }

    if (!comparator(nextState, currentState)) {
      currentState = nextState;
      onChange(currentState, store);
    }
  }

  return unsubscribe;
}

function normalizeTarget(target) {
  var type = (0, _typeof2["default"])(target);

  if (type === 'string') {
    return {
      id: target
    };
  } else if (target != null && type === 'object') {
    var id = target.id,
        objectId = target.objectId,
        selector = target.selector,
        selectorGuids = target.selectorGuids,
        appliesTo = target.appliesTo,
        useEventTarget = target.useEventTarget;
    return {
      id: id,
      objectId: objectId,
      selector: selector,
      selectorGuids: selectorGuids,
      appliesTo: appliesTo,
      useEventTarget: useEventTarget
    };
  }

  return {};
}

function getAffectedElements(_ref4) {
  var config = _ref4.config,
      event = _ref4.event,
      eventTarget = _ref4.eventTarget,
      elementRoot = _ref4.elementRoot,
      elementApi = _ref4.elementApi;

  var _ref, _event$action, _event$action$config;

  if (!elementApi) {
    throw new Error('IX2 missing elementApi');
  }

  var targets = config.targets;

  if (Array.isArray(targets) && targets.length > 0) {
    return targets.reduce(function (accumulator, target) {
      return accumulator.concat(getAffectedElements({
        config: {
          target: target
        },
        event: event,
        eventTarget: eventTarget,
        elementRoot: elementRoot,
        elementApi: elementApi
      }));
    }, []);
  }

  var getValidDocument = elementApi.getValidDocument,
      getQuerySelector = elementApi.getQuerySelector,
      queryDocument = elementApi.queryDocument,
      getChildElements = elementApi.getChildElements,
      getSiblingElements = elementApi.getSiblingElements,
      matchSelector = elementApi.matchSelector,
      elementContains = elementApi.elementContains,
      isSiblingNode = elementApi.isSiblingNode;
  var target = config.target;

  if (!target) {
    return [];
  }

  var _normalizeTarget = normalizeTarget(target),
      id = _normalizeTarget.id,
      objectId = _normalizeTarget.objectId,
      selector = _normalizeTarget.selector,
      selectorGuids = _normalizeTarget.selectorGuids,
      appliesTo = _normalizeTarget.appliesTo,
      useEventTarget = _normalizeTarget.useEventTarget;

  if (objectId) {
    var ref = objectCache[objectId] || (objectCache[objectId] = {});
    return [ref];
  }

  if (appliesTo === _constants.EventAppliesTo.PAGE) {
    var doc = getValidDocument(id);
    return doc ? [doc] : [];
  }

  var overrides = (_ref = event === null || event === void 0 ? void 0 : (_event$action = event.action) === null || _event$action === void 0 ? void 0 : (_event$action$config = _event$action.config) === null || _event$action$config === void 0 ? void 0 : _event$action$config.affectedElements) !== null && _ref !== void 0 ? _ref : {};
  var override = overrides[id || selector] || {};
  var validOverride = Boolean(override.id || override.selector);
  var limitAffectedElements;
  var baseSelector;
  var finalSelector;
  var eventTargetSelector = event && getQuerySelector(normalizeTarget(event.target));

  if (validOverride) {
    limitAffectedElements = override.limitAffectedElements;
    baseSelector = eventTargetSelector;
    finalSelector = getQuerySelector(override);
  } else {
    // pass in selectorGuids as well for server-side rendering.
    baseSelector = finalSelector = getQuerySelector({
      id: id,
      selector: selector,
      selectorGuids: selectorGuids
    });
  }

  if (event && useEventTarget) {
    // eventTarget is not defined when this function is called in a clear request, so find
    // all target elements associated with the event data, and return affected elements.
    var eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument(eventTargetSelector);

    if (finalSelector) {
      if (useEventTarget === PARENT) {
        return queryDocument(finalSelector).filter(function (parentElement) {
          return eventTargets.some(function (targetElement) {
            return elementContains(parentElement, targetElement);
          });
        });
      }

      if (useEventTarget === CHILDREN) {
        return queryDocument(finalSelector).filter(function (childElement) {
          return eventTargets.some(function (targetElement) {
            return elementContains(targetElement, childElement);
          });
        });
      }

      if (useEventTarget === SIBLINGS) {
        return queryDocument(finalSelector).filter(function (siblingElement) {
          return eventTargets.some(function (targetElement) {
            return isSiblingNode(targetElement, siblingElement);
          });
        });
      }
    }

    return eventTargets;
  }

  if (baseSelector == null || finalSelector == null) {
    return [];
  }

  if (_IX2BrowserSupport.IS_BROWSER_ENV && elementRoot) {
    return queryDocument(finalSelector).filter(function (element) {
      return elementRoot.contains(element);
    });
  }

  if (limitAffectedElements === CHILDREN) {
    return queryDocument(baseSelector, finalSelector);
  } else if (limitAffectedElements === IMMEDIATE_CHILDREN) {
    return getChildElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
  } else if (limitAffectedElements === SIBLINGS) {
    return getSiblingElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
  } else {
    return queryDocument(finalSelector);
  }
} // $FlowFixMe


function getComputedStyle(_ref5) {
  var element = _ref5.element,
      actionItem = _ref5.actionItem;

  if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
    return {};
  }

  var actionTypeId = actionItem.actionTypeId;

  switch (actionTypeId) {
    case STYLE_SIZE:
    case STYLE_BACKGROUND_COLOR:
    case STYLE_BORDER:
    case STYLE_TEXT_COLOR:
    case GENERAL_DISPLAY:
      return window.getComputedStyle(element);

    default:
      return {};
  }
}

var pxValueRegex = /px/;

var getFilterDefaults = function getFilterDefaults(actionState, filters) {
  return filters.reduce(function (result, filter) {
    if (result[filter.type] == null) {
      result[filter.type] = filterDefaults[filter.type];
    }

    return result;
  }, actionState || {});
};

function getInstanceOrigin( // $FlowFixMe
element) {
  var refState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var computedStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // $FlowFixMe
  actionItem = arguments.length > 3 ? arguments[3] : undefined;
  var // $FlowFixMe
  elementApi = arguments.length > 4 ? arguments[4] : undefined;
  var getStyle = elementApi.getStyle;
  var actionTypeId = actionItem.actionTypeId,
      config = actionItem.config;

  if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
    // $FlowFixMe
    return (0, _IX2VanillaPlugins.getPluginOrigin)(actionTypeId)(refState[actionTypeId]);
  }

  switch (actionTypeId) {
    case TRANSFORM_MOVE:
    case TRANSFORM_SCALE:
    case TRANSFORM_ROTATE:
    case TRANSFORM_SKEW:
      return refState[actionTypeId] || transformDefaults[actionTypeId];

    case STYLE_FILTER:
      return getFilterDefaults(refState[actionTypeId], actionItem.config.filters);

    case STYLE_OPACITY:
      return {
        value: (0, _defaultTo["default"])(parseFloat(getStyle(element, OPACITY)), 1.0)
      };

    case STYLE_SIZE:
      {
        var inlineWidth = getStyle(element, WIDTH);
        var inlineHeight = getStyle(element, HEIGHT);
        var widthValue;
        var heightValue; // When destination unit is 'AUTO', ensure origin values are in px

        if (config.widthUnit === AUTO) {
          widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : parseFloat(computedStyle.width);
        } else {
          widthValue = (0, _defaultTo["default"])(parseFloat(inlineWidth), parseFloat(computedStyle.width));
        }

        if (config.heightUnit === AUTO) {
          heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : parseFloat(computedStyle.height);
        } else {
          heightValue = (0, _defaultTo["default"])(parseFloat(inlineHeight), parseFloat(computedStyle.height));
        }

        return {
          widthValue: widthValue,
          heightValue: heightValue
        };
      }

    case STYLE_BACKGROUND_COLOR:
    case STYLE_BORDER:
    case STYLE_TEXT_COLOR:
      return parseColor({
        element: element,
        actionTypeId: actionTypeId,
        computedStyle: computedStyle,
        getStyle: getStyle
      });

    case GENERAL_DISPLAY:
      return {
        value: (0, _defaultTo["default"])(getStyle(element, DISPLAY), computedStyle.display)
      };

    case OBJECT_VALUE:
      return refState[actionTypeId] || {
        value: 0
      };

    default:
      return;
  }
}

var reduceFilters = function reduceFilters(result, filter) {
  if (filter) {
    result[filter.type] = filter.value || 0;
  }

  return result;
}; // $FlowFixMe


var getItemConfigByKey = function getItemConfigByKey(actionTypeId, key, config) {
  if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
    // $FlowFixMe
    return (0, _IX2VanillaPlugins.getPluginConfig)(actionTypeId)(config, key);
  }

  switch (actionTypeId) {
    case STYLE_FILTER:
      {
        var filter = (0, _findLast["default"])(config.filters, function (_ref6) {
          var type = _ref6.type;
          return type === key;
        });
        return filter ? filter.value : 0;
      }

    default:
      return config[key];
  }
}; // $FlowFixMe


exports.getItemConfigByKey = getItemConfigByKey;

function getDestinationValues(_ref7) {
  var element = _ref7.element,
      actionItem = _ref7.actionItem,
      elementApi = _ref7.elementApi;
  var actionTypeId = actionItem.actionTypeId;

  if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
    // $FlowFixMe
    return (0, _IX2VanillaPlugins.getPluginDestination)(actionTypeId)(actionItem.config);
  }

  switch (actionTypeId) {
    case TRANSFORM_MOVE:
    case TRANSFORM_SCALE:
    case TRANSFORM_ROTATE:
    case TRANSFORM_SKEW:
      {
        var _actionItem$config = actionItem.config,
            xValue = _actionItem$config.xValue,
            yValue = _actionItem$config.yValue,
            zValue = _actionItem$config.zValue;
        return {
          xValue: xValue,
          yValue: yValue,
          zValue: zValue
        };
      }

    case STYLE_SIZE:
      {
        var getStyle = elementApi.getStyle,
            setStyle = elementApi.setStyle,
            getProperty = elementApi.getProperty;
        var _actionItem$config2 = actionItem.config,
            widthUnit = _actionItem$config2.widthUnit,
            heightUnit = _actionItem$config2.heightUnit;
        var _actionItem$config3 = actionItem.config,
            widthValue = _actionItem$config3.widthValue,
            heightValue = _actionItem$config3.heightValue;

        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
          return {
            widthValue: widthValue,
            heightValue: heightValue
          };
        }

        if (widthUnit === AUTO) {
          var temp = getStyle(element, WIDTH);
          setStyle(element, WIDTH, '');
          widthValue = getProperty(element, 'offsetWidth');
          setStyle(element, WIDTH, temp);
        }

        if (heightUnit === AUTO) {
          var _temp = getStyle(element, HEIGHT);

          setStyle(element, HEIGHT, '');
          heightValue = getProperty(element, 'offsetHeight');
          setStyle(element, HEIGHT, _temp);
        }

        return {
          widthValue: widthValue,
          heightValue: heightValue
        };
      }

    case STYLE_BACKGROUND_COLOR:
    case STYLE_BORDER:
    case STYLE_TEXT_COLOR:
      {
        var _actionItem$config4 = actionItem.config,
            rValue = _actionItem$config4.rValue,
            gValue = _actionItem$config4.gValue,
            bValue = _actionItem$config4.bValue,
            aValue = _actionItem$config4.aValue;
        return {
          rValue: rValue,
          gValue: gValue,
          bValue: bValue,
          aValue: aValue
        };
      }

    case STYLE_FILTER:
      {
        return actionItem.config.filters.reduce(reduceFilters, {});
      }

    default:
      {
        var value = actionItem.config.value;
        return {
          value: value
        };
      }
  }
} // $FlowFixMe


function getRenderType(actionTypeId) {
  if (/^TRANSFORM_/.test(actionTypeId)) {
    return RENDER_TRANSFORM;
  }

  if (/^STYLE_/.test(actionTypeId)) {
    return RENDER_STYLE;
  }

  if (/^GENERAL_/.test(actionTypeId)) {
    return RENDER_GENERAL;
  }

  if (/^PLUGIN_/.test(actionTypeId)) {
    return RENDER_PLUGIN;
  }
} // $FlowFixMe


function getStyleProp(renderType, actionTypeId) {
  return renderType === RENDER_STYLE ? actionTypeId.replace('STYLE_', '').toLowerCase() : null;
}

function renderHTMLElement( // $FlowFixMe
element, // $FlowFixMe
refState, // $FlowFixMe
actionState, // $FlowFixMe
eventId, // $FlowFixMe
actionItem, // $FlowFixMe
styleProp, // $FlowFixMe
elementApi, // $FlowFixMe
renderType, // $FlowFixMe
pluginInstance) {
  switch (renderType) {
    case RENDER_TRANSFORM:
      {
        return renderTransform(element, refState, actionState, actionItem, elementApi);
      }

    case RENDER_STYLE:
      {
        return renderStyle(element, refState, actionState, actionItem, styleProp, elementApi);
      }

    case RENDER_GENERAL:
      {
        return renderGeneral(element, actionItem, elementApi);
      }

    case RENDER_PLUGIN:
      {
        var actionTypeId = actionItem.actionTypeId;

        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
          // $FlowFixMe
          return (0, _IX2VanillaPlugins.renderPlugin)(actionTypeId)(pluginInstance, refState, actionItem);
        }
      }
  }
}

var transformDefaults = (_transformDefaults = {}, (0, _defineProperty2["default"])(_transformDefaults, TRANSFORM_MOVE, Object.freeze({
  xValue: 0,
  yValue: 0,
  zValue: 0
})), (0, _defineProperty2["default"])(_transformDefaults, TRANSFORM_SCALE, Object.freeze({
  xValue: 1,
  yValue: 1,
  zValue: 1
})), (0, _defineProperty2["default"])(_transformDefaults, TRANSFORM_ROTATE, Object.freeze({
  xValue: 0,
  yValue: 0,
  zValue: 0
})), (0, _defineProperty2["default"])(_transformDefaults, TRANSFORM_SKEW, Object.freeze({
  xValue: 0,
  yValue: 0
})), _transformDefaults);
var filterDefaults = Object.freeze({
  blur: 0,
  'hue-rotate': 0,
  invert: 0,
  grayscale: 0,
  saturate: 100,
  sepia: 0,
  contrast: 100,
  brightness: 100
});

var getFilterUnit = function getFilterUnit(filterType, actionItemConfig) {
  var filter = (0, _findLast["default"])(actionItemConfig.filters, function (_ref8) {
    var type = _ref8.type;
    return type === filterType;
  });

  if (filter && filter.unit) {
    return filter.unit;
  }

  switch (filterType) {
    case 'blur':
      return 'px';

    case 'hue-rotate':
      return 'deg';

    default:
      return '%';
  }
};

var transformKeys = Object.keys(transformDefaults);

function renderTransform(element, refState, actionState, actionItem, elementApi) {
  var newTransform = transformKeys.map(function (actionTypeId) {
    var defaults = transformDefaults[actionTypeId];

    var _ref9 = refState[actionTypeId] || {},
        _ref9$xValue = _ref9.xValue,
        xValue = _ref9$xValue === void 0 ? defaults.xValue : _ref9$xValue,
        _ref9$yValue = _ref9.yValue,
        yValue = _ref9$yValue === void 0 ? defaults.yValue : _ref9$yValue,
        _ref9$zValue = _ref9.zValue,
        zValue = _ref9$zValue === void 0 ? defaults.zValue : _ref9$zValue,
        _ref9$xUnit = _ref9.xUnit,
        xUnit = _ref9$xUnit === void 0 ? '' : _ref9$xUnit,
        _ref9$yUnit = _ref9.yUnit,
        yUnit = _ref9$yUnit === void 0 ? '' : _ref9$yUnit,
        _ref9$zUnit = _ref9.zUnit,
        zUnit = _ref9$zUnit === void 0 ? '' : _ref9$zUnit;

    switch (actionTypeId) {
      case TRANSFORM_MOVE:
        return "".concat(TRANSLATE_3D, "(").concat(xValue).concat(xUnit, ", ").concat(yValue).concat(yUnit, ", ").concat(zValue).concat(zUnit, ")");

      case TRANSFORM_SCALE:
        return "".concat(SCALE_3D, "(").concat(xValue).concat(xUnit, ", ").concat(yValue).concat(yUnit, ", ").concat(zValue).concat(zUnit, ")");

      case TRANSFORM_ROTATE:
        return "".concat(ROTATE_X, "(").concat(xValue).concat(xUnit, ") ").concat(ROTATE_Y, "(").concat(yValue).concat(yUnit, ") ").concat(ROTATE_Z, "(").concat(zValue).concat(zUnit, ")");

      case TRANSFORM_SKEW:
        return "".concat(SKEW, "(").concat(xValue).concat(xUnit, ", ").concat(yValue).concat(yUnit, ")");

      default:
        return '';
    }
  }).join(' ');
  var setStyle = elementApi.setStyle;
  addWillChange(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
  setStyle(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, newTransform); // Set transform-style: preserve-3d

  if (hasDefined3dTransform(actionItem, actionState)) {
    setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, PRESERVE_3D);
  }
}

function renderFilter(element, actionState, actionItemConfig, elementApi) {
  var filterValue = (0, _reduce["default"])(actionState, function (result, value, type) {
    return "".concat(result, " ").concat(type, "(").concat(value).concat(getFilterUnit(type, actionItemConfig), ")");
  }, '');
  var setStyle = elementApi.setStyle;
  addWillChange(element, FILTER, elementApi);
  setStyle(element, FILTER, filterValue);
}

function hasDefined3dTransform(_ref10, _ref11) {
  var actionTypeId = _ref10.actionTypeId;
  var xValue = _ref11.xValue,
      yValue = _ref11.yValue,
      zValue = _ref11.zValue;
  // TRANSLATE_Z
  return actionTypeId === TRANSFORM_MOVE && zValue !== undefined || // SCALE_Z
  actionTypeId === TRANSFORM_SCALE && zValue !== undefined || // ROTATE_X or ROTATE_Y
  actionTypeId === TRANSFORM_ROTATE && (xValue !== undefined || yValue !== undefined);
}

var paramCapture = '\\(([^)]+)\\)';
var rgbValidRegex = /^rgb/;
var rgbMatchRegex = RegExp("rgba?".concat(paramCapture));

function getFirstMatch(regex, value) {
  var match = regex.exec(value);
  return match ? match[1] : '';
}

function parseColor(_ref12) {
  var element = _ref12.element,
      actionTypeId = _ref12.actionTypeId,
      computedStyle = _ref12.computedStyle,
      getStyle = _ref12.getStyle;
  var prop = colorStyleProps[actionTypeId];
  var inlineValue = getStyle(element, prop);
  var value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
  var matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER);
  return {
    rValue: (0, _defaultTo["default"])(parseInt(matches[0], 10), 255),
    gValue: (0, _defaultTo["default"])(parseInt(matches[1], 10), 255),
    bValue: (0, _defaultTo["default"])(parseInt(matches[2], 10), 255),
    aValue: (0, _defaultTo["default"])(parseFloat(matches[3]), 1)
  };
}

function renderStyle(element, refState, actionState, actionItem, styleProp, elementApi) {
  var setStyle = elementApi.setStyle;
  var actionTypeId = actionItem.actionTypeId,
      config = actionItem.config;

  switch (actionTypeId) {
    case STYLE_SIZE:
      {
        var _actionItem$config5 = actionItem.config,
            _actionItem$config5$w = _actionItem$config5.widthUnit,
            widthUnit = _actionItem$config5$w === void 0 ? '' : _actionItem$config5$w,
            _actionItem$config5$h = _actionItem$config5.heightUnit,
            heightUnit = _actionItem$config5$h === void 0 ? '' : _actionItem$config5$h;
        var widthValue = actionState.widthValue,
            heightValue = actionState.heightValue;

        if (widthValue !== undefined) {
          if (widthUnit === AUTO) {
            widthUnit = 'px';
          }

          addWillChange(element, WIDTH, elementApi);
          setStyle(element, WIDTH, widthValue + widthUnit);
        }

        if (heightValue !== undefined) {
          if (heightUnit === AUTO) {
            heightUnit = 'px';
          }

          addWillChange(element, HEIGHT, elementApi);
          setStyle(element, HEIGHT, heightValue + heightUnit);
        }

        break;
      }

    case STYLE_FILTER:
      {
        renderFilter(element, actionState, config, elementApi);
        break;
      }

    case STYLE_BACKGROUND_COLOR:
    case STYLE_BORDER:
    case STYLE_TEXT_COLOR:
      {
        var prop = colorStyleProps[actionTypeId];
        var rValue = Math.round(actionState.rValue);
        var gValue = Math.round(actionState.gValue);
        var bValue = Math.round(actionState.bValue);
        var aValue = actionState.aValue;
        addWillChange(element, prop, elementApi);
        setStyle(element, prop, aValue >= 1 ? "rgb(".concat(rValue, ",").concat(gValue, ",").concat(bValue, ")") : "rgba(".concat(rValue, ",").concat(gValue, ",").concat(bValue, ",").concat(aValue, ")"));
        break;
      }

    default:
      {
        var _config$unit = config.unit,
            unit = _config$unit === void 0 ? '' : _config$unit;
        addWillChange(element, styleProp, elementApi);
        setStyle(element, styleProp, actionState.value + unit);
        break;
      }
  }
}

function renderGeneral(element, actionItem, elementApi) {
  var setStyle = elementApi.setStyle;

  switch (actionItem.actionTypeId) {
    case GENERAL_DISPLAY:
      {
        var value = actionItem.config.value;

        if (value === FLEX && _IX2BrowserSupport.IS_BROWSER_ENV) {
          setStyle(element, DISPLAY, _IX2BrowserSupport.FLEX_PREFIXED);
        } else {
          setStyle(element, DISPLAY, value);
        }

        return;
      }
  }
}

function addWillChange(element, prop, elementApi) {
  if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
    return;
  }

  var validProp = willChangeProps[prop];

  if (!validProp) {
    return;
  }

  var getStyle = elementApi.getStyle,
      setStyle = elementApi.setStyle;
  var value = getStyle(element, WILL_CHANGE);

  if (!value) {
    setStyle(element, WILL_CHANGE, validProp);
    return;
  }

  var values = value.split(COMMA_DELIMITER).map(trim);

  if (values.indexOf(validProp) === -1) {
    setStyle(element, WILL_CHANGE, values.concat(validProp).join(COMMA_DELIMITER));
  }
}

function removeWillChange(element, prop, elementApi) {
  if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
    return;
  }

  var validProp = willChangeProps[prop];

  if (!validProp) {
    return;
  }

  var getStyle = elementApi.getStyle,
      setStyle = elementApi.setStyle;
  var value = getStyle(element, WILL_CHANGE);

  if (!value || value.indexOf(validProp) === -1) {
    return;
  }

  setStyle(element, WILL_CHANGE, value.split(COMMA_DELIMITER).map(trim).filter(function (v) {
    return v !== validProp;
  }).join(COMMA_DELIMITER));
} // $FlowFixMe


function clearAllStyles(_ref13) {
  var store = _ref13.store,
      elementApi = _ref13.elementApi;

  var _store$getState = store.getState(),
      ixData = _store$getState.ixData;

  var _ixData$events = ixData.events,
      events = _ixData$events === void 0 ? {} : _ixData$events,
      _ixData$actionLists = ixData.actionLists,
      actionLists = _ixData$actionLists === void 0 ? {} : _ixData$actionLists;
  Object.keys(events).forEach(function (eventId) {
    var event = events[eventId];
    var config = event.action.config;
    var actionListId = config.actionListId;
    var actionList = actionLists[actionListId];

    if (actionList) {
      clearActionListStyles({
        actionList: actionList,
        event: event,
        elementApi: elementApi
      });
    }
  });
  Object.keys(actionLists).forEach(function (actionListId) {
    clearActionListStyles({
      actionList: actionLists[actionListId],
      elementApi: elementApi
    });
  });
} // $FlowFixMe


function clearActionListStyles(_ref14) {
  var _ref14$actionList = _ref14.actionList,
      actionList = _ref14$actionList === void 0 ? {} : _ref14$actionList,
      event = _ref14.event,
      elementApi = _ref14.elementApi;
  var actionItemGroups = actionList.actionItemGroups,
      continuousParameterGroups = actionList.continuousParameterGroups;
  actionItemGroups && actionItemGroups.forEach(function (actionGroup) {
    clearActionGroupStyles({
      actionGroup: actionGroup,
      event: event,
      elementApi: elementApi
    });
  });
  continuousParameterGroups && continuousParameterGroups.forEach(function (paramGroup) {
    var continuousActionGroups = paramGroup.continuousActionGroups;
    continuousActionGroups.forEach(function (actionGroup) {
      clearActionGroupStyles({
        actionGroup: actionGroup,
        event: event,
        elementApi: elementApi
      });
    });
  });
}

function clearActionGroupStyles(_ref15) {
  var actionGroup = _ref15.actionGroup,
      event = _ref15.event,
      elementApi = _ref15.elementApi;
  var actionItems = actionGroup.actionItems;
  actionItems.forEach(function (_ref16) {
    var actionTypeId = _ref16.actionTypeId,
        config = _ref16.config;
    var clearElement;

    if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
      clearElement = (0, _IX2VanillaPlugins.clearPlugin)(actionTypeId);
    } else {
      clearElement = processElementByType({
        effect: clearStyleProp,
        actionTypeId: actionTypeId,
        elementApi: elementApi
      });
    }

    getAffectedElements({
      config: config,
      event: event,
      elementApi: elementApi
    }).forEach(clearElement);
  });
} // $FlowFixMe


function cleanupHTMLElement(element, actionItem, elementApi) {
  var setStyle = elementApi.setStyle,
      getStyle = elementApi.getStyle;
  var actionTypeId = actionItem.actionTypeId;

  if (actionTypeId === STYLE_SIZE) {
    var config = actionItem.config;

    if (config.widthUnit === AUTO) {
      setStyle(element, WIDTH, '');
    }

    if (config.heightUnit === AUTO) {
      setStyle(element, HEIGHT, '');
    }
  }

  if (getStyle(element, WILL_CHANGE)) {
    processElementByType({
      effect: removeWillChange,
      actionTypeId: actionTypeId,
      elementApi: elementApi
    })(element);
  }
}

var processElementByType = function processElementByType(_ref17) {
  var effect = _ref17.effect,
      actionTypeId = _ref17.actionTypeId,
      elementApi = _ref17.elementApi;
  return function (element) {
    switch (actionTypeId) {
      case TRANSFORM_MOVE:
      case TRANSFORM_SCALE:
      case TRANSFORM_ROTATE:
      case TRANSFORM_SKEW:
        effect(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
        break;

      case STYLE_FILTER:
        effect(element, FILTER, elementApi);
        break;

      case STYLE_OPACITY:
        effect(element, OPACITY, elementApi);
        break;

      case STYLE_SIZE:
        effect(element, WIDTH, elementApi);
        effect(element, HEIGHT, elementApi);
        break;

      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
        effect(element, colorStyleProps[actionTypeId], elementApi);
        break;

      case GENERAL_DISPLAY:
        effect(element, DISPLAY, elementApi);
        break;
    }
  };
};

function clearStyleProp(element, prop, elementApi) {
  var setStyle = elementApi.setStyle;
  removeWillChange(element, prop, elementApi);
  setStyle(element, prop, ''); // Clear transform-style: preserve-3d

  if (prop === _IX2BrowserSupport.TRANSFORM_PREFIXED) {
    setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, '');
  }
} // $FlowFixMe


function getMaxDurationItemIndex(actionItems) {
  var maxDuration = 0;
  var resultIndex = 0;
  actionItems.forEach(function (actionItem, index) {
    var config = actionItem.config;
    var total = config.delay + config.duration;

    if (total >= maxDuration) {
      maxDuration = total;
      resultIndex = index;
    }
  });
  return resultIndex;
} // $FlowFixMe


function getActionListProgress(actionList, instance) {
  var actionItemGroups = actionList.actionItemGroups,
      useFirstGroupAsInitialState = actionList.useFirstGroupAsInitialState;
  var instanceItem = instance.actionItem,
      _instance$verboseTime = instance.verboseTimeElapsed,
      verboseTimeElapsed = _instance$verboseTime === void 0 ? 0 : _instance$verboseTime;
  var totalDuration = 0;
  var elapsedDuration = 0;
  actionItemGroups.forEach(function (group, index) {
    if (useFirstGroupAsInitialState && index === 0) {
      return;
    }

    var actionItems = group.actionItems;
    var carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
    var config = carrierItem.config,
        actionTypeId = carrierItem.actionTypeId;

    if (instanceItem.id === carrierItem.id) {
      elapsedDuration = totalDuration + verboseTimeElapsed;
    }

    var duration = getRenderType(actionTypeId) === RENDER_GENERAL ? 0 : config.duration;
    totalDuration += config.delay + duration;
  });
  return totalDuration > 0 ? (0, _IX2EasingUtils.optimizeFloat)(elapsedDuration / totalDuration) : 0;
} // $FlowFixMe


function reduceListToGroup(_ref18) {
  var actionList = _ref18.actionList,
      actionItemId = _ref18.actionItemId,
      rawData = _ref18.rawData;
  var actionItemGroups = actionList.actionItemGroups,
      continuousParameterGroups = actionList.continuousParameterGroups;
  var newActionItems = [];

  var takeItemUntilMatch = function takeItemUntilMatch(actionItem) {
    newActionItems.push((0, _timm.mergeIn)(actionItem, ['config'], {
      delay: 0,
      duration: 0
    }));
    return actionItem.id === actionItemId;
  };

  actionItemGroups && actionItemGroups.some(function (_ref19) {
    var actionItems = _ref19.actionItems;
    return actionItems.some(takeItemUntilMatch);
  });
  continuousParameterGroups && continuousParameterGroups.some(function (paramGroup) {
    var continuousActionGroups = paramGroup.continuousActionGroups;
    return continuousActionGroups.some(function (_ref20) {
      var actionItems = _ref20.actionItems;
      return actionItems.some(takeItemUntilMatch);
    });
  });
  return (0, _timm.setIn)(rawData, ['actionLists'], (0, _defineProperty2["default"])({}, actionList.id, {
    id: actionList.id,
    actionItemGroups: [{
      actionItems: newActionItems
    }]
  }));
} // $FlowFixMe


function shouldNamespaceEventParameter(eventTypeId, _ref22) {
  var basedOn = _ref22.basedOn;
  return eventTypeId === _constants.EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === _constants.EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === _constants.EventTypeConsts.MOUSE_MOVE && basedOn === _constants.EventBasedOn.ELEMENT;
}

function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
  var namespacedParameterId = eventStateKey + COLON_DELIMITER + continuousParameterGroupId;
  return namespacedParameterId;
} // $FlowFixMe


function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
  // During design mode, current media query key does not exist
  if (mediaQueryKey == null) {
    return true;
  }

  return mediaQueries.indexOf(mediaQueryKey) !== -1;
} // $FlowFixMe


function mediaQueriesEqual(listA, listB) {
  return (0, _shallowEqual["default"])(listA && listA.sort(), listB && listB.sort());
} // $FlowFixMe


function stringifyTarget(target) {
  if (typeof target === 'string') {
    return target;
  }

  var _target$id = target.id,
      id = _target$id === void 0 ? '' : _target$id,
      _target$selector = target.selector,
      selector = _target$selector === void 0 ? '' : _target$selector,
      _target$useEventTarge = target.useEventTarget,
      useEventTarget = _target$useEventTarge === void 0 ? '' : _target$useEventTarge;
  return id + BAR_DELIMITER + selector + BAR_DELIMITER + useEventTarget;
}

/***/ }),
/* 270 */
/***/ (function(module, exports) {

/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * _.defaultTo(1, 10);
 * // => 1
 *
 * _.defaultTo(undefined, 10);
 * // => 10
 */
function defaultTo(value, defaultValue) {
  return (value == null || value !== value) ? defaultValue : value;
}

module.exports = defaultTo;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(272),
    baseEach = __webpack_require__(121),
    baseIteratee = __webpack_require__(10),
    baseReduce = __webpack_require__(276),
    isArray = __webpack_require__(2);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 272 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(274);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 274 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(16);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(96),
    findLastIndex = __webpack_require__(278);

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = createFind(findLastIndex);

module.exports = findLast;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(114),
    baseIteratee = __webpack_require__(10),
    toInteger = __webpack_require__(115);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0; // from https://github.com/acdlite/recompose/blob/master/src/packages/recompose/shallowEqual.js

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 */

/* eslint-disable no-self-compare */

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } // Step 6.a: NaN == NaN


  return x !== x && y !== y;
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */


function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((0, _typeof2["default"])(objA) !== 'object' || objA === null || (0, _typeof2["default"])(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

var _default = shallowEqual;
exports["default"] = _default;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixInstances = void 0;

var _constants = __webpack_require__(4);

var _shared = __webpack_require__(14);

var _timm = __webpack_require__(22);
/* eslint-env browser */


var _constants$IX2EngineA = _constants.IX2EngineActionTypes,
    IX2_RAW_DATA_IMPORTED = _constants$IX2EngineA.IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_STOPPED = _constants$IX2EngineA.IX2_SESSION_STOPPED,
    IX2_INSTANCE_ADDED = _constants$IX2EngineA.IX2_INSTANCE_ADDED,
    IX2_INSTANCE_STARTED = _constants$IX2EngineA.IX2_INSTANCE_STARTED,
    IX2_INSTANCE_REMOVED = _constants$IX2EngineA.IX2_INSTANCE_REMOVED,
    IX2_ANIMATION_FRAME_CHANGED = _constants$IX2EngineA.IX2_ANIMATION_FRAME_CHANGED;
var _shared$IX2EasingUtil = _shared.IX2EasingUtils,
    optimizeFloat = _shared$IX2EasingUtil.optimizeFloat,
    applyEasing = _shared$IX2EasingUtil.applyEasing,
    createBezierEasing = _shared$IX2EasingUtil.createBezierEasing;
var RENDER_GENERAL = _constants.IX2EngineConstants.RENDER_GENERAL;
var _shared$IX2VanillaUti = _shared.IX2VanillaUtils,
    getItemConfigByKey = _shared$IX2VanillaUti.getItemConfigByKey,
    getRenderType = _shared$IX2VanillaUti.getRenderType,
    getStyleProp = _shared$IX2VanillaUti.getStyleProp;

var continuousInstance = function continuousInstance(state, action) {
  var lastPosition = state.position,
      parameterId = state.parameterId,
      actionGroups = state.actionGroups,
      destinationKeys = state.destinationKeys,
      smoothing = state.smoothing,
      restingValue = state.restingValue,
      actionTypeId = state.actionTypeId,
      customEasingFn = state.customEasingFn,
      skipMotion = state.skipMotion,
      skipToValue = state.skipToValue;
  var parameters = action.payload.parameters;
  var velocity = Math.max(1 - smoothing, 0.01);
  var paramValue = parameters[parameterId];

  if (paramValue == null) {
    velocity = 1;
    paramValue = restingValue;
  }

  var nextPosition = Math.max(paramValue, 0) || 0;
  var positionDiff = optimizeFloat(nextPosition - lastPosition);
  var position = skipMotion ? skipToValue : optimizeFloat(lastPosition + positionDiff * velocity);
  var keyframePosition = position * 100;

  if (position === lastPosition && state.current) {
    return state;
  }

  var fromActionItem;
  var toActionItem;
  var positionOffset;
  var positionRange;

  for (var i = 0, length = actionGroups.length; i < length; i++) {
    var _actionGroups$i = actionGroups[i],
        keyframe = _actionGroups$i.keyframe,
        actionItems = _actionGroups$i.actionItems;

    if (i === 0) {
      fromActionItem = actionItems[0];
    }

    if (keyframePosition >= keyframe) {
      fromActionItem = actionItems[0];
      var nextGroup = actionGroups[i + 1];
      var hasNextItem = nextGroup && keyframePosition !== keyframe;
      toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;

      if (hasNextItem) {
        positionOffset = keyframe / 100;
        positionRange = (nextGroup.keyframe - keyframe) / 100;
      }
    }
  }

  var current = {};

  if (fromActionItem && !toActionItem) {
    for (var _i = 0, _length = destinationKeys.length; _i < _length; _i++) {
      var key = destinationKeys[_i];
      current[key] = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
    }
  } else if (fromActionItem && toActionItem && positionOffset !== undefined && positionRange !== undefined) {
    var localPosition = (position - positionOffset) / positionRange;
    var easing = fromActionItem.config.easing;
    var eased = applyEasing(easing, localPosition, customEasingFn);

    for (var _i2 = 0, _length2 = destinationKeys.length; _i2 < _length2; _i2++) {
      var _key = destinationKeys[_i2];
      var fromVal = getItemConfigByKey(actionTypeId, _key, fromActionItem.config);
      var toVal = getItemConfigByKey(actionTypeId, _key, toActionItem.config); // $FlowFixMe â€” toVal and fromVal could potentially be null, need to update type higher to determine number

      var diff = toVal - fromVal; // $FlowFixMe

      var value = diff * eased + fromVal;
      current[_key] = value;
    }
  }

  return (0, _timm.merge)(state, {
    position: position,
    current: current
  });
};

var timedInstance = function timedInstance(state, action) {
  var _state = state,
      active = _state.active,
      origin = _state.origin,
      start = _state.start,
      immediate = _state.immediate,
      renderType = _state.renderType,
      verbose = _state.verbose,
      actionItem = _state.actionItem,
      destination = _state.destination,
      destinationKeys = _state.destinationKeys,
      pluginDuration = _state.pluginDuration,
      instanceDelay = _state.instanceDelay,
      customEasingFn = _state.customEasingFn,
      skipMotion = _state.skipMotion;
  var easing = actionItem.config.easing;
  var _actionItem$config = actionItem.config,
      duration = _actionItem$config.duration,
      delay = _actionItem$config.delay;

  if (pluginDuration != null) {
    duration = pluginDuration;
  }

  delay = instanceDelay != null ? instanceDelay : delay;

  if (renderType === RENDER_GENERAL) {
    duration = 0;
  } else if (immediate || skipMotion) {
    duration = delay = 0;
  }

  var now = action.payload.now;

  if (active && origin) {
    var delta = now - (start + delay);

    if (verbose) {
      var verboseDelta = now - start;
      var verboseDuration = duration + delay;
      var verbosePosition = optimizeFloat(Math.min(Math.max(0, verboseDelta / verboseDuration), 1));
      state = (0, _timm.set)(state, 'verboseTimeElapsed', verboseDuration * verbosePosition);
    }

    if (delta < 0) {
      return state;
    }

    var position = optimizeFloat(Math.min(Math.max(0, delta / duration), 1));
    var eased = applyEasing(easing, position, customEasingFn);
    var newProps = {};
    var current = null;

    if (destinationKeys.length) {
      current = destinationKeys.reduce(function (result, key) {
        var destValue = destination[key];
        var originVal = parseFloat(origin[key]) || 0;
        var diff = parseFloat(destValue) - originVal;
        var value = diff * eased + originVal;
        result[key] = value;
        return result;
      }, {});
    }

    newProps.current = current;
    newProps.position = position;

    if (position === 1) {
      newProps.active = false;
      newProps.complete = true;
    }

    return (0, _timm.merge)(state, newProps);
  }

  return state;
};

var ixInstances = function ixInstances() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.freeze({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case IX2_RAW_DATA_IMPORTED:
      {
        return action.payload.ixInstances || Object.freeze({});
      }

    case IX2_SESSION_STOPPED:
      {
        return Object.freeze({});
      }

    case IX2_INSTANCE_ADDED:
      {
        var _action$payload = action.payload,
            instanceId = _action$payload.instanceId,
            elementId = _action$payload.elementId,
            actionItem = _action$payload.actionItem,
            eventId = _action$payload.eventId,
            eventTarget = _action$payload.eventTarget,
            eventStateKey = _action$payload.eventStateKey,
            actionListId = _action$payload.actionListId,
            groupIndex = _action$payload.groupIndex,
            isCarrier = _action$payload.isCarrier,
            origin = _action$payload.origin,
            destination = _action$payload.destination,
            immediate = _action$payload.immediate,
            verbose = _action$payload.verbose,
            continuous = _action$payload.continuous,
            parameterId = _action$payload.parameterId,
            actionGroups = _action$payload.actionGroups,
            smoothing = _action$payload.smoothing,
            restingValue = _action$payload.restingValue,
            pluginInstance = _action$payload.pluginInstance,
            pluginDuration = _action$payload.pluginDuration,
            instanceDelay = _action$payload.instanceDelay,
            skipMotion = _action$payload.skipMotion,
            skipToValue = _action$payload.skipToValue;
        var actionTypeId = actionItem.actionTypeId;
        var renderType = getRenderType(actionTypeId);
        var styleProp = getStyleProp(renderType, actionTypeId);
        var destinationKeys = Object.keys(destination).filter(function (key) {
          return destination[key] != null;
        });
        var easing = actionItem.config.easing;
        return (0, _timm.set)(state, instanceId, {
          id: instanceId,
          elementId: elementId,
          active: false,
          position: 0,
          start: 0,
          origin: origin,
          destination: destination,
          destinationKeys: destinationKeys,
          immediate: immediate,
          verbose: verbose,
          current: null,
          actionItem: actionItem,
          actionTypeId: actionTypeId,
          eventId: eventId,
          eventTarget: eventTarget,
          eventStateKey: eventStateKey,
          actionListId: actionListId,
          groupIndex: groupIndex,
          renderType: renderType,
          isCarrier: isCarrier,
          styleProp: styleProp,
          continuous: continuous,
          parameterId: parameterId,
          actionGroups: actionGroups,
          smoothing: smoothing,
          restingValue: restingValue,
          pluginInstance: pluginInstance,
          pluginDuration: pluginDuration,
          instanceDelay: instanceDelay,
          skipMotion: skipMotion,
          skipToValue: skipToValue,
          customEasingFn: Array.isArray(easing) && easing.length === 4 ? createBezierEasing(easing) : undefined
        });
      }

    case IX2_INSTANCE_STARTED:
      {
        var _action$payload2 = action.payload,
            _instanceId = _action$payload2.instanceId,
            time = _action$payload2.time;
        return (0, _timm.mergeIn)(state, [_instanceId], {
          active: true,
          complete: false,
          start: time
        });
      }

    case IX2_INSTANCE_REMOVED:
      {
        var _instanceId2 = action.payload.instanceId;

        if (!state[_instanceId2]) {
          return state;
        }

        var newState = {};
        var keys = Object.keys(state);
        var length = keys.length;

        for (var i = 0; i < length; i++) {
          var key = keys[i];

          if (key !== _instanceId2) {
            newState[key] = state[key];
          }
        }

        return newState;
      }

    case IX2_ANIMATION_FRAME_CHANGED:
      {
        var _newState = state;

        var _keys = Object.keys(state);

        var _length3 = _keys.length;

        for (var _i3 = 0; _i3 < _length3; _i3++) {
          var _key2 = _keys[_i3];
          var instance = state[_key2];
          var reducer = instance.continuous ? continuousInstance : timedInstance;
          _newState = (0, _timm.set)(_newState, _key2, reducer(instance, action));
        }

        return _newState;
      }

    default:
      {
        return state;
      }
  }
};

exports.ixInstances = ixInstances;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ixParameters = void 0;

var _constants = __webpack_require__(4);

var _constants$IX2EngineA = _constants.IX2EngineActionTypes,
    IX2_RAW_DATA_IMPORTED = _constants$IX2EngineA.IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_STOPPED = _constants$IX2EngineA.IX2_SESSION_STOPPED,
    IX2_PARAMETER_CHANGED = _constants$IX2EngineA.IX2_PARAMETER_CHANGED; // prettier-ignore

var ixParameters = function ixParameters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    /*mutable flat state*/
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case IX2_RAW_DATA_IMPORTED:
      {
        return action.payload.ixParameters || {
          /*mutable flat state*/
        };
      }

    case IX2_SESSION_STOPPED:
      {
        return {
          /*mutable flat state*/
        };
      }

    case IX2_PARAMETER_CHANGED:
      {
        var _action$payload = action.payload,
            key = _action$payload.key,
            value = _action$payload.value;
        state[key] = value;
        return state;
      }

    default:
      {
        return state;
      }
  }
};

exports.ixParameters = ixParameters;

/***/ }),
/* 282 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(57),
    getTag = __webpack_require__(59),
    isArrayLike = __webpack_require__(16),
    isString = __webpack_require__(284),
    stringSize = __webpack_require__(285);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isArray = __webpack_require__(2),
    isObjectLike = __webpack_require__(12);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(286),
    hasUnicode = __webpack_require__(287),
    unicodeSize = __webpack_require__(288);

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(113);

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),
/* 287 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 288 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(10),
    negate = __webpack_require__(290),
    pickBy = __webpack_require__(291);

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy(object, negate(baseIteratee(predicate)));
}

module.exports = omitBy;


/***/ }),
/* 290 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(112),
    baseIteratee = __webpack_require__(10),
    basePickBy = __webpack_require__(292),
    getAllKeysIn = __webpack_require__(295);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(61),
    baseSet = __webpack_require__(293),
    castPath = __webpack_require__(37);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(294),
    castPath = __webpack_require__(37),
    isIndex = __webpack_require__(54),
    isObject = __webpack_require__(8),
    toKey = __webpack_require__(24);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(124),
    eq = __webpack_require__(49);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(103),
    getSymbolsIn = __webpack_require__(296),
    keysIn = __webpack_require__(298);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(52),
    getPrototype = __webpack_require__(297),
    getSymbols = __webpack_require__(104),
    stubArray = __webpack_require__(105);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(108);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(106),
    baseKeysIn = __webpack_require__(299),
    isArrayLike = __webpack_require__(16);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isPrototype = __webpack_require__(58),
    nativeKeysIn = __webpack_require__(300);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 300 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(57),
    getTag = __webpack_require__(59),
    isArguments = __webpack_require__(36),
    isArray = __webpack_require__(2),
    isArrayLike = __webpack_require__(16),
    isBuffer = __webpack_require__(53),
    isPrototype = __webpack_require__(58),
    isTypedArray = __webpack_require__(55);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(124),
    baseForOwn = __webpack_require__(122),
    baseIteratee = __webpack_require__(10);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(304),
    baseEach = __webpack_require__(121),
    castFunction = __webpack_require__(305),
    isArray = __webpack_require__(2);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 304 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(63);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(307),
    isObject = __webpack_require__(8);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    now = __webpack_require__(308),
    toNumber = __webpack_require__(64);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(6);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _typeof2 = _interopRequireDefault(__webpack_require__(17));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStyle = setStyle;
exports.getStyle = getStyle;
exports.getProperty = getProperty;
exports.matchSelector = matchSelector;
exports.getQuerySelector = getQuerySelector;
exports.getValidDocument = getValidDocument;
exports.queryDocument = queryDocument;
exports.elementContains = elementContains;
exports.isSiblingNode = isSiblingNode;
exports.getChildElements = getChildElements;
exports.getSiblingElements = getSiblingElements;
exports.getRefType = getRefType;
exports.getClosestElement = void 0;

var _shared = __webpack_require__(14);

var _constants = __webpack_require__(4);
/* eslint-env browser */


var ELEMENT_MATCHES = _shared.IX2BrowserSupport.ELEMENT_MATCHES;
var _constants$IX2EngineC = _constants.IX2EngineConstants,
    IX2_ID_DELIMITER = _constants$IX2EngineC.IX2_ID_DELIMITER,
    HTML_ELEMENT = _constants$IX2EngineC.HTML_ELEMENT,
    PLAIN_OBJECT = _constants$IX2EngineC.PLAIN_OBJECT,
    WF_PAGE = _constants$IX2EngineC.WF_PAGE;

function setStyle(element, prop, value) {
  // $FlowIgnore â€” flow complains that prop should be a number. Will need to update upstream
  element.style[prop] = value;
}

function getStyle(element, prop) {
  // $FlowIgnore â€” flow complains that prop should be a number. Will need to update upstream
  return element.style[prop];
}

function getProperty(element, prop) {
  // $FlowIgnore â€” flow complains that prop should be a number. Will need to update upstream
  return element[prop];
}

function matchSelector(selector) {
  // $FlowIgnore â€” ELEMENT_MATCHES is the name of the method on the element's prototype depending on browser
  return function (element) {
    return element[ELEMENT_MATCHES](selector);
  };
}

function getQuerySelector(_ref) {
  var id = _ref.id,
      selector = _ref.selector;

  if (id) {
    var nodeId = id;

    if (id.indexOf(IX2_ID_DELIMITER) !== -1) {
      var pair = id.split(IX2_ID_DELIMITER);
      var pageId = pair[0];
      nodeId = pair[1]; // Short circuit query if we're on the wrong page
      // $FlowIgnore â€” if documentElement is null crash

      if (pageId !== document.documentElement.getAttribute(WF_PAGE)) {
        return null;
      }
    }

    return "[data-w-id=\"".concat(nodeId, "\"], [data-w-id^=\"").concat(nodeId, "_instance\"]");
  }

  return selector;
}

function getValidDocument(pageId) {
  if (pageId == null || // $FlowIgnore â€” if documentElement is null crash
  pageId === document.documentElement.getAttribute(WF_PAGE)) {
    return document;
  }

  return null;
}

function queryDocument(baseSelector, descendantSelector) {
  return Array.prototype.slice.call(document.querySelectorAll(descendantSelector ? baseSelector + ' ' + descendantSelector : baseSelector));
}

function elementContains(parent, child) {
  return parent.contains(child);
}

function isSiblingNode(a, b) {
  return a !== b && a.parentNode === b.parentNode;
}

function getChildElements(sourceElements) {
  var childElements = [];

  for (var i = 0, _ref2 = sourceElements || [], length = _ref2.length; i < length; i++) {
    var children = sourceElements[i].children;
    var childCount = children.length;

    if (!childCount) {
      continue;
    }

    for (var j = 0; j < childCount; j++) {
      childElements.push(children[j]);
    }
  }

  return childElements;
} // $FlowFixMe


function getSiblingElements() {
  var sourceElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var elements = [];
  var parentCache = [];

  for (var i = 0, length = sourceElements.length; i < length; i++) {
    var parentNode = sourceElements[i].parentNode;

    if (!parentNode || !parentNode.children || !parentNode.children.length) {
      continue;
    }

    if (parentCache.indexOf(parentNode) !== -1) {
      continue;
    }

    parentCache.push(parentNode);
    var el = parentNode.firstElementChild;

    while (el != null) {
      if (sourceElements.indexOf(el) === -1) {
        elements.push(el);
      }

      el = el.nextElementSibling;
    }
  }

  return elements;
}

var getClosestElement = Element.prototype.closest ? function (element, selector) {
  // $FlowIgnore â€” ELEMENT_MATCHES is the name of the method on the element's prototype depending on browser
  if (!document.documentElement.contains(element)) {
    return null;
  }

  return element.closest(selector);
} : function (element, selector) {
  // $FlowIgnore â€” if documentElement is null crash
  if (!document.documentElement.contains(element)) {
    return null;
  }

  var el = element;

  do {
    // $FlowIgnore â€” if documentElement is null crash
    if (el[ELEMENT_MATCHES] && el[ELEMENT_MATCHES](selector)) {
      return el;
    }

    el = el.parentNode;
  } while (el != null);

  return null;
};
exports.getClosestElement = getClosestElement;

function getRefType(ref) {
  if (ref != null && (0, _typeof2["default"])(ref) == 'object') {
    return ref instanceof Element ? HTML_ELEMENT : PLAIN_OBJECT;
  }

  return null;
}

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault2(__webpack_require__(21));

var _typeof2 = _interopRequireDefault2(__webpack_require__(17));

var _default2;

var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(30));

var _flow = _interopRequireDefault(__webpack_require__(311));

var _get = _interopRequireDefault(__webpack_require__(60));

var _clamp = _interopRequireDefault(__webpack_require__(330));

var _constants = __webpack_require__(4);

var _IX2VanillaEngine = __webpack_require__(123);

var _IX2EngineActions = __webpack_require__(65);

var _shared = __webpack_require__(14);
/* eslint-env browser */


var _constants$EventTypeC = _constants.EventTypeConsts,
    MOUSE_CLICK = _constants$EventTypeC.MOUSE_CLICK,
    MOUSE_SECOND_CLICK = _constants$EventTypeC.MOUSE_SECOND_CLICK,
    MOUSE_DOWN = _constants$EventTypeC.MOUSE_DOWN,
    MOUSE_UP = _constants$EventTypeC.MOUSE_UP,
    MOUSE_OVER = _constants$EventTypeC.MOUSE_OVER,
    MOUSE_OUT = _constants$EventTypeC.MOUSE_OUT,
    DROPDOWN_CLOSE = _constants$EventTypeC.DROPDOWN_CLOSE,
    DROPDOWN_OPEN = _constants$EventTypeC.DROPDOWN_OPEN,
    SLIDER_ACTIVE = _constants$EventTypeC.SLIDER_ACTIVE,
    SLIDER_INACTIVE = _constants$EventTypeC.SLIDER_INACTIVE,
    TAB_ACTIVE = _constants$EventTypeC.TAB_ACTIVE,
    TAB_INACTIVE = _constants$EventTypeC.TAB_INACTIVE,
    NAVBAR_CLOSE = _constants$EventTypeC.NAVBAR_CLOSE,
    NAVBAR_OPEN = _constants$EventTypeC.NAVBAR_OPEN,
    MOUSE_MOVE = _constants$EventTypeC.MOUSE_MOVE,
    PAGE_SCROLL_DOWN = _constants$EventTypeC.PAGE_SCROLL_DOWN,
    SCROLL_INTO_VIEW = _constants$EventTypeC.SCROLL_INTO_VIEW,
    SCROLL_OUT_OF_VIEW = _constants$EventTypeC.SCROLL_OUT_OF_VIEW,
    PAGE_SCROLL_UP = _constants$EventTypeC.PAGE_SCROLL_UP,
    SCROLLING_IN_VIEW = _constants$EventTypeC.SCROLLING_IN_VIEW,
    PAGE_FINISH = _constants$EventTypeC.PAGE_FINISH,
    ECOMMERCE_CART_CLOSE = _constants$EventTypeC.ECOMMERCE_CART_CLOSE,
    ECOMMERCE_CART_OPEN = _constants$EventTypeC.ECOMMERCE_CART_OPEN,
    PAGE_START = _constants$EventTypeC.PAGE_START,
    PAGE_SCROLL = _constants$EventTypeC.PAGE_SCROLL;
var COMPONENT_ACTIVE = 'COMPONENT_ACTIVE';
var COMPONENT_INACTIVE = 'COMPONENT_INACTIVE';
var COLON_DELIMITER = _constants.IX2EngineConstants.COLON_DELIMITER;
var getNamespacedParameterId = _shared.IX2VanillaUtils.getNamespacedParameterId;

var composableFilter = function composableFilter(predicate) {
  return function (options) {
    if ((0, _typeof2["default"])(options) === 'object' && predicate(options)) {
      return true;
    }

    return options;
  };
};

var isElement = composableFilter(function (_ref) {
  var element = _ref.element,
      nativeEvent = _ref.nativeEvent;
  return element === nativeEvent.target;
});
var containsElement = composableFilter(function (_ref2) {
  var element = _ref2.element,
      nativeEvent = _ref2.nativeEvent;
  return element.contains(nativeEvent.target);
});
var isOrContainsElement = (0, _flow["default"])([isElement, containsElement]);

var getAutoStopEvent = function getAutoStopEvent(store, autoStopEventId) {
  if (autoStopEventId) {
    var _store$getState = store.getState(),
        ixData = _store$getState.ixData;

    var events = ixData.events;
    var eventToStop = events[autoStopEventId];

    if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
      return eventToStop;
    }
  }

  return null;
};

var hasAutoStopEvent = function hasAutoStopEvent(_ref3) {
  var store = _ref3.store,
      event = _ref3.event;
  var eventAction = event.action;
  var autoStopEventId = eventAction.config.autoStopEventId;
  return Boolean(getAutoStopEvent(store, autoStopEventId));
};

var actionGroupCreator = function actionGroupCreator(_ref4, state) {
  var store = _ref4.store,
      event = _ref4.event,
      element = _ref4.element,
      eventStateKey = _ref4.eventStateKey;
  var eventAction = event.action,
      eventId = event.id;
  var _eventAction$config = eventAction.config,
      actionListId = _eventAction$config.actionListId,
      autoStopEventId = _eventAction$config.autoStopEventId;
  var eventToStop = getAutoStopEvent(store, autoStopEventId);

  if (eventToStop) {
    (0, _IX2VanillaEngine.stopActionGroup)({
      store: store,
      eventId: autoStopEventId,
      eventTarget: element,
      eventStateKey: autoStopEventId + COLON_DELIMITER + eventStateKey.split(COLON_DELIMITER)[1],
      actionListId: (0, _get["default"])(eventToStop, 'action.config.actionListId')
    });
  }

  (0, _IX2VanillaEngine.stopActionGroup)({
    store: store,
    eventId: eventId,
    eventTarget: element,
    eventStateKey: eventStateKey,
    actionListId: actionListId
  });
  (0, _IX2VanillaEngine.startActionGroup)({
    store: store,
    eventId: eventId,
    eventTarget: element,
    eventStateKey: eventStateKey,
    actionListId: actionListId
  });
  return state;
}; // $FlowFixMe


var withFilter = function withFilter(filter, handler) {
  return function (options, state) {
    return (// $FlowFixMe
      filter(options, state) === true ? handler(options, state) : state
    );
  };
};

var baseActionGroupOptions = {
  handler: withFilter(isOrContainsElement, actionGroupCreator)
};
var baseActivityActionGroupOptions = (0, _extends2["default"])({}, baseActionGroupOptions, {
  types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(' ')
});
var SCROLL_EVENT_TYPES = [{
  target: window,
  types: 'resize orientationchange',
  throttle: true
}, {
  target: document,
  types: 'scroll wheel readystatechange IX2_PAGE_UPDATE',
  throttle: true
}];
var MOUSE_OVER_OUT_TYPES = 'mouseover mouseout';
var baseScrollActionGroupOptions = {
  types: SCROLL_EVENT_TYPES
};
var AUTO_STOP_DISABLED_EVENTS = {
  PAGE_START: PAGE_START,
  PAGE_FINISH: PAGE_FINISH
};

var getDocumentState = function () {
  var supportOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = document.compatMode === 'CSS1Compat';
  var rootElement = isCSS1Compat ? document.documentElement : document.body;
  return function () {
    return {
      // $FlowFixMe
      scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
      // $FlowFixMe
      scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
      // required to remove elasticity in Safari scrolling.
      stiffScrollTop: (0, _clamp["default"])( // $FlowFixMe
      supportOffset ? window.pageYOffset : rootElement.scrollTop, 0, // $FlowFixMe
      rootElement.scrollHeight - window.innerHeight),
      // $FlowFixMe
      scrollWidth: rootElement.scrollWidth,
      // $FlowFixMe
      scrollHeight: rootElement.scrollHeight,
      // $FlowFixMe
      clientWidth: rootElement.clientWidth,
      // $FlowFixMe
      clientHeight: rootElement.clientHeight,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  };
}();

var areBoxesIntersecting = function areBoxesIntersecting(a, b) {
  return !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
};

var isElementHovered = function isElementHovered(_ref5) {
  var element = _ref5.element,
      nativeEvent = _ref5.nativeEvent;
  var type = nativeEvent.type,
      target = nativeEvent.target,
      relatedTarget = nativeEvent.relatedTarget;
  var containsTarget = element.contains(target);

  if (type === 'mouseover' && containsTarget) {
    return true;
  }

  var containsRelated = element.contains(relatedTarget);

  if (type === 'mouseout' && containsTarget && containsRelated) {
    return true;
  }

  return false;
};

var isElementVisible = function isElementVisible(options) {
  var element = options.element,
      config = options.event.config;

  var _getDocumentState = getDocumentState(),
      clientWidth = _getDocumentState.clientWidth,
      clientHeight = _getDocumentState.clientHeight;

  var scrollOffsetValue = config.scrollOffsetValue;
  var scrollOffsetUnit = config.scrollOffsetUnit;
  var isPX = scrollOffsetUnit === 'PX';
  var offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
  return areBoxesIntersecting(element.getBoundingClientRect(), {
    left: 0,
    top: offsetPadding,
    right: clientWidth,
    bottom: clientHeight - offsetPadding
  });
};

var whenComponentActiveChange = function whenComponentActiveChange(handler) {
  return function (options, oldState) {
    var type = options.nativeEvent.type; // prettier-ignore

    var isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
    var newState = (0, _extends2["default"])({}, oldState, {
      isActive: isActive
    });

    if (!oldState || newState.isActive !== oldState.isActive) {
      return handler(options, newState) || newState;
    }

    return newState;
  };
};

var whenElementHoverChange = function whenElementHoverChange(handler) {
  return function (options, oldState) {
    var newState = {
      elementHovered: isElementHovered(options)
    };

    if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
      return handler(options, newState) || newState;
    }

    return newState;
  };
}; // $FlowFixMe


var whenElementVisibiltyChange = function whenElementVisibiltyChange(handler) {
  return function (options, oldState) {
    var newState = (0, _extends2["default"])({}, oldState, {
      elementVisible: isElementVisible(options)
    });

    if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
      return handler(options, newState) || newState;
    }

    return newState;
  };
}; // $FlowFixMe


var whenScrollDirectionChange = function whenScrollDirectionChange(handler) {
  return function (options) {
    var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _getDocumentState2 = getDocumentState(),
        scrollTop = _getDocumentState2.stiffScrollTop,
        scrollHeight = _getDocumentState2.scrollHeight,
        innerHeight = _getDocumentState2.innerHeight;

    var _options$event = options.event,
        config = _options$event.config,
        eventTypeId = _options$event.eventTypeId;
    var scrollOffsetValue = config.scrollOffsetValue,
        scrollOffsetUnit = config.scrollOffsetUnit;
    var isPX = scrollOffsetUnit === 'PX';
    var scrollHeightBounds = scrollHeight - innerHeight; // percent top since innerHeight may change for mobile devices which also changes the scrollTop value.

    var percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2)); // no state change

    if (oldState && oldState.percentTop === percentTop) {
      return oldState;
    }

    var scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
    var scrollingDown;
    var scrollDirectionChanged;
    var anchorTop = 0;

    if (oldState) {
      scrollingDown = percentTop > oldState.percentTop;
      scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
      anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
    }

    var inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
    var newState = (0, _extends2["default"])({}, oldState, {
      percentTop: percentTop,
      inBounds: inBounds,
      anchorTop: anchorTop,
      scrollingDown: scrollingDown
    });

    if (oldState && inBounds && (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
      return handler(options, newState) || newState;
    }

    return newState;
  };
};

var pointIntersects = function pointIntersects(point, rect) {
  return point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
};

var whenPageLoadFinish = function whenPageLoadFinish(handler) {
  return function (options, oldState) {
    var newState = {
      finished: document.readyState === 'complete'
    };

    if (newState.finished && !(oldState && oldState.finshed)) {
      handler(options);
    }

    return newState;
  };
};

var whenPageLoadStart = function whenPageLoadStart(handler) {
  return function (options, oldState) {
    var newState = {
      started: true
    };

    if (!oldState) {
      handler(options);
    }

    return newState;
  };
};

var whenClickCountChange = function whenClickCountChange(handler) {
  return function (options) {
    var oldState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      clickCount: 0
    };
    var newState = {
      clickCount: oldState.clickCount % 2 + 1
    };

    if (newState.clickCount !== oldState.clickCount) {
      return handler(options, newState) || newState;
    }

    return newState;
  };
};

var getComponentActiveOptions = function getComponentActiveOptions() {
  var allowNestedChildrenEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return (0, _extends2["default"])({}, baseActivityActionGroupOptions, {
    handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, whenComponentActiveChange(function (options, state) {
      return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
    }))
  });
};

var getComponentInactiveOptions = function getComponentInactiveOptions() {
  var allowNestedChildrenEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return (0, _extends2["default"])({}, baseActivityActionGroupOptions, {
    handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, whenComponentActiveChange(function (options, state) {
      return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
    }))
  });
};

var scrollIntoOutOfViewOptions = (0, _extends2["default"])({}, baseScrollActionGroupOptions, {
  handler: whenElementVisibiltyChange(function (options, state) {
    var elementVisible = state.elementVisible;
    var event = options.event,
        store = options.store;

    var _store$getState2 = store.getState(),
        ixData = _store$getState2.ixData;

    var events = ixData.events; // trigger the handler only once if only one of SCROLL_INTO or SCROLL_OUT_OF event types
    // are registered.

    if (!events[event.action.config.autoStopEventId] && state.triggered) {
      return state;
    }

    if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
      actionGroupCreator(options);
      return (0, _extends2["default"])({}, state, {
        triggered: true
      });
    } else {
      return state;
    }
  })
});
var MOUSE_OUT_ROUND_THRESHOLD = 0.05;

var _default = (_default2 = {}, (0, _defineProperty2["default"])(_default2, SLIDER_ACTIVE, getComponentActiveOptions()), (0, _defineProperty2["default"])(_default2, SLIDER_INACTIVE, getComponentInactiveOptions()), (0, _defineProperty2["default"])(_default2, DROPDOWN_OPEN, getComponentActiveOptions()), (0, _defineProperty2["default"])(_default2, DROPDOWN_CLOSE, getComponentInactiveOptions()), (0, _defineProperty2["default"])(_default2, NAVBAR_OPEN, getComponentActiveOptions(false)), (0, _defineProperty2["default"])(_default2, NAVBAR_CLOSE, getComponentInactiveOptions(false)), (0, _defineProperty2["default"])(_default2, TAB_ACTIVE, getComponentActiveOptions()), (0, _defineProperty2["default"])(_default2, TAB_INACTIVE, getComponentInactiveOptions()), (0, _defineProperty2["default"])(_default2, ECOMMERCE_CART_OPEN, {
  types: 'ecommerce-cart-open',
  handler: withFilter(isOrContainsElement, actionGroupCreator)
}), (0, _defineProperty2["default"])(_default2, ECOMMERCE_CART_CLOSE, {
  types: 'ecommerce-cart-close',
  handler: withFilter(isOrContainsElement, actionGroupCreator)
}), (0, _defineProperty2["default"])(_default2, MOUSE_CLICK, {
  types: 'click',
  handler: withFilter(isOrContainsElement, whenClickCountChange(function (options, _ref6) {
    var clickCount = _ref6.clickCount;

    if (hasAutoStopEvent(options)) {
      clickCount === 1 && actionGroupCreator(options);
    } else {
      actionGroupCreator(options);
    }
  }))
}), (0, _defineProperty2["default"])(_default2, MOUSE_SECOND_CLICK, {
  types: 'click',
  handler: withFilter(isOrContainsElement, whenClickCountChange(function (options, _ref7) {
    var clickCount = _ref7.clickCount;

    if (clickCount === 2) {
      actionGroupCreator(options);
    }
  }))
}), (0, _defineProperty2["default"])(_default2, MOUSE_DOWN, (0, _extends2["default"])({}, baseActionGroupOptions, {
  types: 'mousedown'
})), (0, _defineProperty2["default"])(_default2, MOUSE_UP, (0, _extends2["default"])({}, baseActionGroupOptions, {
  types: 'mouseup'
})), (0, _defineProperty2["default"])(_default2, MOUSE_OVER, {
  types: MOUSE_OVER_OUT_TYPES,
  handler: withFilter(isOrContainsElement, whenElementHoverChange(function (options, state) {
    if (state.elementHovered) {
      actionGroupCreator(options);
    }
  }))
}), (0, _defineProperty2["default"])(_default2, MOUSE_OUT, {
  types: MOUSE_OVER_OUT_TYPES,
  handler: withFilter(isOrContainsElement, whenElementHoverChange(function (options, state) {
    if (!state.elementHovered) {
      actionGroupCreator(options);
    }
  }))
}), (0, _defineProperty2["default"])(_default2, MOUSE_MOVE, {
  types: 'mousemove mouseout scroll',
  handler: function handler( // $FlowFixMe
  _ref8) {
    var store = _ref8.store,
        element = _ref8.element,
        eventConfig = _ref8.eventConfig,
        nativeEvent = _ref8.nativeEvent,
        eventStateKey = _ref8.eventStateKey;
    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0
    };
    var basedOn = eventConfig.basedOn,
        selectedAxis = eventConfig.selectedAxis,
        continuousParameterGroupId = eventConfig.continuousParameterGroupId,
        reverse = eventConfig.reverse,
        _eventConfig$restingS = eventConfig.restingState,
        restingState = _eventConfig$restingS === void 0 ? 0 : _eventConfig$restingS;
    var _nativeEvent$clientX = nativeEvent.clientX,
        clientX = _nativeEvent$clientX === void 0 ? state.clientX : _nativeEvent$clientX,
        _nativeEvent$clientY = nativeEvent.clientY,
        clientY = _nativeEvent$clientY === void 0 ? state.clientY : _nativeEvent$clientY,
        _nativeEvent$pageX = nativeEvent.pageX,
        pageX = _nativeEvent$pageX === void 0 ? state.pageX : _nativeEvent$pageX,
        _nativeEvent$pageY = nativeEvent.pageY,
        pageY = _nativeEvent$pageY === void 0 ? state.pageY : _nativeEvent$pageY;
    var isXAxis = selectedAxis === 'X_AXIS';
    var isMouseOut = nativeEvent.type === 'mouseout';
    var value = restingState / 100;
    var namespacedParameterId = continuousParameterGroupId;
    var elementHovered = false;

    switch (basedOn) {
      case _constants.EventBasedOn.VIEWPORT:
        {
          value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
          break;
        }

      case _constants.EventBasedOn.PAGE:
        {
          var _getDocumentState3 = getDocumentState(),
              scrollLeft = _getDocumentState3.scrollLeft,
              scrollTop = _getDocumentState3.scrollTop,
              scrollWidth = _getDocumentState3.scrollWidth,
              scrollHeight = _getDocumentState3.scrollHeight;

          value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
          break;
        }

      case _constants.EventBasedOn.ELEMENT:
      default:
        {
          namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
          var isMouseEvent = nativeEvent.type.indexOf('mouse') === 0; // Use isOrContainsElement for mouse events since they are fired from the target

          if (isMouseEvent && isOrContainsElement({
            element: element,
            nativeEvent: nativeEvent
          }) !== true) {
            break;
          }

          var rect = element.getBoundingClientRect();
          var left = rect.left,
              top = rect.top,
              width = rect.width,
              height = rect.height; // Otherwise we'll need to calculate the mouse position from the previous handler state
          // against the target element's rect

          if (!isMouseEvent && !pointIntersects({
            left: clientX,
            top: clientY
          }, rect)) {
            break;
          }

          elementHovered = true;
          value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
          break;
        }
    } // cover case where the event is a mouse out, but the value is not quite at 100%


    if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
      value = Math.round(value);
    } // Only update based on element if the mouse is moving over or has just left the element


    if (basedOn !== _constants.EventBasedOn.ELEMENT || elementHovered || // $FlowFixMe
    elementHovered !== state.elementHovered) {
      value = reverse ? 1 - value : value;
      store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, value));
    }

    return {
      elementHovered: elementHovered,
      clientX: clientX,
      clientY: clientY,
      pageX: pageX,
      pageY: pageY
    };
  }
}), (0, _defineProperty2["default"])(_default2, PAGE_SCROLL, {
  types: SCROLL_EVENT_TYPES,
  // $FlowFixMe
  handler: function handler(_ref9) {
    var store = _ref9.store,
        eventConfig = _ref9.eventConfig;
    var continuousParameterGroupId = eventConfig.continuousParameterGroupId,
        reverse = eventConfig.reverse;

    var _getDocumentState4 = getDocumentState(),
        scrollTop = _getDocumentState4.scrollTop,
        scrollHeight = _getDocumentState4.scrollHeight,
        clientHeight = _getDocumentState4.clientHeight;

    var value = scrollTop / (scrollHeight - clientHeight);
    value = reverse ? 1 - value : value;
    store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
  }
}), (0, _defineProperty2["default"])(_default2, SCROLLING_IN_VIEW, {
  types: SCROLL_EVENT_TYPES,
  handler: function handler( // $FlowFixMe
  _ref10) {
    var element = _ref10.element,
        store = _ref10.store,
        eventConfig = _ref10.eventConfig,
        eventStateKey = _ref10.eventStateKey;
    var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      scrollPercent: 0
    };

    var _getDocumentState5 = getDocumentState(),
        scrollLeft = _getDocumentState5.scrollLeft,
        scrollTop = _getDocumentState5.scrollTop,
        scrollWidth = _getDocumentState5.scrollWidth,
        scrollHeight = _getDocumentState5.scrollHeight,
        visibleHeight = _getDocumentState5.clientHeight;

    var basedOn = eventConfig.basedOn,
        selectedAxis = eventConfig.selectedAxis,
        continuousParameterGroupId = eventConfig.continuousParameterGroupId,
        startsEntering = eventConfig.startsEntering,
        startsExiting = eventConfig.startsExiting,
        addEndOffset = eventConfig.addEndOffset,
        addStartOffset = eventConfig.addStartOffset,
        _eventConfig$addOffse = eventConfig.addOffsetValue,
        addOffsetValue = _eventConfig$addOffse === void 0 ? 0 : _eventConfig$addOffse,
        _eventConfig$endOffse = eventConfig.endOffsetValue,
        endOffsetValue = _eventConfig$endOffse === void 0 ? 0 : _eventConfig$endOffse;
    var isXAxis = selectedAxis === 'X_AXIS';

    if (basedOn === _constants.EventBasedOn.VIEWPORT) {
      var value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;

      if (value !== state.scrollPercent) {
        store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
      }

      return {
        scrollPercent: value
      };
    } else {
      var namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
      var elementRect = element.getBoundingClientRect();
      var offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
      var offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100; // flip the offset percentages depending on start / exit type

      offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
      offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
      var offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
      var offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
      var offsetHeight = offsetElementBottom - offsetElementTop;
      var fixedScrollHeight = Math.min(visibleHeight + offsetHeight, scrollHeight);
      var fixedScrollTop = Math.min(Math.max(0, visibleHeight - offsetElementTop), fixedScrollHeight);
      var fixedScrollPerc = fixedScrollTop / fixedScrollHeight;

      if (fixedScrollPerc !== state.scrollPercent) {
        store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, fixedScrollPerc));
      }

      return {
        scrollPercent: fixedScrollPerc
      };
    }
  }
}), (0, _defineProperty2["default"])(_default2, SCROLL_INTO_VIEW, scrollIntoOutOfViewOptions), (0, _defineProperty2["default"])(_default2, SCROLL_OUT_OF_VIEW, scrollIntoOutOfViewOptions), (0, _defineProperty2["default"])(_default2, PAGE_SCROLL_DOWN, (0, _extends2["default"])({}, baseScrollActionGroupOptions, {
  handler: whenScrollDirectionChange(function (options, state) {
    if (state.scrollingDown) {
      actionGroupCreator(options);
    }
  })
})), (0, _defineProperty2["default"])(_default2, PAGE_SCROLL_UP, (0, _extends2["default"])({}, baseScrollActionGroupOptions, {
  handler: whenScrollDirectionChange(function (options, state) {
    if (!state.scrollingDown) {
      actionGroupCreator(options);
    }
  })
})), (0, _defineProperty2["default"])(_default2, PAGE_FINISH, {
  types: 'readystatechange IX2_PAGE_UPDATE',
  handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
}), (0, _defineProperty2["default"])(_default2, PAGE_START, {
  types: 'readystatechange IX2_PAGE_UPDATE',
  handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
}), _default2);

exports["default"] = _default;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var createFlow = __webpack_require__(312);

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var LodashWrapper = __webpack_require__(66),
    flatRest = __webpack_require__(313),
    getData = __webpack_require__(127),
    getFuncName = __webpack_require__(128),
    isArray = __webpack_require__(2),
    isLaziable = __webpack_require__(326);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) &&
            data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

module.exports = createFlow;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(314),
    overRest = __webpack_require__(317),
    setToString = __webpack_require__(319);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(315);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(52),
    isFlattenable = __webpack_require__(316);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    isArguments = __webpack_require__(36),
    isArray = __webpack_require__(2);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(318);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 318 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(320),
    shortOut = __webpack_require__(322);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(321),
    defineProperty = __webpack_require__(125),
    identity = __webpack_require__(63);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 321 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 322 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(109);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 324 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 325 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(68),
    getData = __webpack_require__(127),
    getFuncName = __webpack_require__(128),
    lodash = __webpack_require__(327);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(68),
    LodashWrapper = __webpack_require__(66),
    baseLodash = __webpack_require__(67),
    isArray = __webpack_require__(2),
    isObjectLike = __webpack_require__(12),
    wrapperClone = __webpack_require__(328);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(68),
    LodashWrapper = __webpack_require__(66),
    copyArray = __webpack_require__(329);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 329 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(331),
    toNumber = __webpack_require__(64);

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),
/* 331 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals window, document */

/* eslint-disable no-var */

/**
 * Webflow: Auto-select links to current page or section
 */

var Webflow = __webpack_require__(3);

Webflow.define('links', module.exports = function ($, _) {
  var api = {};
  var $win = $(window);
  var designer;
  var inApp = Webflow.env();
  var location = window.location;
  var tempLink = document.createElement('a');
  var linkCurrent = 'w--current';
  var indexPage = /index\.(html|php)$/;
  var dirList = /\/$/;
  var anchors;
  var slug; // -----------------------------------
  // Module methods

  api.ready = api.design = api.preview = init; // -----------------------------------
  // Private methods

  function init() {
    designer = inApp && Webflow.env('design');
    slug = Webflow.env('slug') || location.pathname || ''; // Reset scroll listener, init anchors

    Webflow.scroll.off(scroll);
    anchors = []; // Test all links for a selectable href

    var links = document.links;

    for (var i = 0; i < links.length; ++i) {
      select(links[i]);
    } // Listen for scroll if any anchors exist


    if (anchors.length) {
      Webflow.scroll.on(scroll);
      scroll();
    }
  }

  function select(link) {
    var href = designer && link.getAttribute('href-disabled') || link.getAttribute('href');
    tempLink.href = href; // Ignore any hrefs with a colon to safely avoid all uri schemes

    if (href.indexOf(':') >= 0) {
      return;
    }

    var $link = $(link); // Check for all links with hash (eg (this-host)(/this-path)#section) to this page

    if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
      // Ignore any hrefs with Google Translate type hash
      // Example: jQuery can't parse $('#googtrans(en|es)')
      // https://forum.webflow.com/t/dropdown-menus-not-working-on-site/87140
      if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
        return;
      }

      var $section = $(tempLink.hash);
      $section.length && anchors.push({
        link: $link,
        sec: $section,
        active: false
      });
      return;
    } // Ignore empty # links


    if (href === '#' || href === '') {
      return;
    } // Determine whether the link should be selected


    var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
    setClass($link, linkCurrent, match);
  }

  function scroll() {
    var viewTop = $win.scrollTop();
    var viewHeight = $win.height(); // Check each anchor for a section in view

    _.each(anchors, function (anchor) {
      var $link = anchor.link;
      var $section = anchor.sec;
      var top = $section.offset().top;
      var height = $section.outerHeight();
      var offset = viewHeight * 0.5;
      var active = $section.is(':visible') && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;

      if (anchor.active === active) {
        return;
      }

      anchor.active = active;
      setClass($link, linkCurrent, active);
    });
  }

  function setClass($elem, className, add) {
    var exists = $elem.hasClass(className);

    if (add && exists) {
      return;
    }

    if (!add && !exists) {
      return;
    }

    add ? $elem.addClass(className) : $elem.removeClass(className);
  } // Export module


  return api;
});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals window, document */

/* eslint-disable no-var */

/**
 * Webflow: Smooth scroll
 */

var Webflow = __webpack_require__(3);

Webflow.define('scroll', module.exports = function ($) {
  /**
   * A collection of namespaced events found in this module.
   * Namespaced events encapsulate our code, and make it safer and easier
   * for designers to apply custom code overrides.
   * @see https://api.jquery.com/on/#event-names
   * @typedef {Object.<string>} NamespacedEventsCollection
   */
  var NS_EVENTS = {
    WF_CLICK_EMPTY: 'click.wf-empty-link',
    WF_CLICK_SCROLL: 'click.wf-scroll'
  };
  var loc = window.location;
  var history = inIframe() ? null : window.history;
  var $win = $(window);
  var $doc = $(document);
  var $body = $(document.body);

  var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
    window.setTimeout(fn, 15);
  };

  var rootTag = Webflow.env('editor') ? '.w-editor-body' : 'body';
  var headerSelector = 'header, ' + rootTag + ' > .header, ' + rootTag + ' > .w-nav:not([data-no-scroll])';
  var emptyHrefSelector = 'a[href="#"]';
  /**
   * Select only links whose href:
   * - contains a #
   * - is not one of our namespaced TabLink elements
   * - is not _only_ a #
   */

  var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ')';
  var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
  var focusStylesEl = document.createElement('style');
  focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));

  function inIframe() {
    try {
      return Boolean(window.frameElement);
    } catch (e) {
      return true;
    }
  }

  var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
  /**
   * Determine if link navigates to current page
   * @param {HTMLAnchorElement} link
   */

  function linksToCurrentPage(link) {
    return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
  }
  /**
   * Check if the designer has indicated that this page should
   * have no scroll animation, or if the end user has set
   * prefers-reduced-motion in their OS
   */


  var reducedMotionMediaQuery = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)');

  function reducedMotionEnabled() {
    return document.body.getAttribute('data-wf-scroll-motion') === 'none' || reducedMotionMediaQuery.matches;
  }

  function setFocusable($el, action) {
    var initialTabindex;

    switch (action) {
      case 'add':
        initialTabindex = $el.attr('tabindex');

        if (initialTabindex) {
          $el.attr('data-wf-tabindex-swap', initialTabindex);
        } else {
          $el.attr('tabindex', '-1');
        }

        break;

      case 'remove':
        initialTabindex = $el.attr('data-wf-tabindex-swap');

        if (initialTabindex) {
          $el.attr('tabindex', initialTabindex);
          $el.removeAttr('data-wf-tabindex-swap');
        } else {
          $el.removeAttr('tabindex');
        }

        break;
    }

    $el.toggleClass('wf-force-outline-none', action === 'add');
  }
  /**
   * Determine if we should execute custom scroll
   */


  function validateScroll(evt) {
    var target = evt.currentTarget;

    if ( // Bail if in Designer
    Webflow.env('design') || // Ignore links being used by jQuery mobile
    window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)) {
      return;
    }

    var hash = linksToCurrentPage(target) ? target.hash : '';
    if (hash === '') return;
    var $el = $(hash);

    if (!$el.length) {
      return;
    }

    if (evt) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    updateHistory(hash, evt);
    window.setTimeout(function () {
      scroll($el, function setFocus() {
        setFocusable($el, 'add');
        $el.get(0).focus({
          preventScroll: true
        });
        setFocusable($el, 'remove');
      });
    }, evt ? 0 : 300);
  }

  function updateHistory(hash) {
    // Push new history state
    if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
    !(Webflow.env.chrome && loc.protocol === 'file:')) {
      var oldHash = history.state && history.state.hash;

      if (oldHash !== hash) {
        history.pushState({
          hash: hash
        }, '', hash);
      }
    }
  }

  function scroll($targetEl, cb) {
    var start = $win.scrollTop();
    var end = calculateScrollEndPosition($targetEl);
    if (start === end) return;
    var duration = calculateScrollDuration($targetEl, start, end);
    var clock = Date.now();

    var step = function step() {
      var elapsed = Date.now() - clock;
      window.scroll(0, getY(start, end, elapsed, duration));

      if (elapsed <= duration) {
        animate(step);
      } else if (typeof cb === 'function') {
        cb();
      }
    };

    animate(step);
  }

  function calculateScrollEndPosition($targetEl) {
    // If a fixed header exists, offset for the height
    var $header = $(headerSelector);
    var offsetY = $header.css('position') === 'fixed' ? $header.outerHeight() : 0;
    var end = $targetEl.offset().top - offsetY; // If specified, scroll so that the element ends up in the middle of the viewport

    if ($targetEl.data('scroll') === 'mid') {
      var available = $win.height() - offsetY;
      var elHeight = $targetEl.outerHeight();

      if (elHeight < available) {
        end -= Math.round((available - elHeight) / 2);
      }
    }

    return end;
  }

  function calculateScrollDuration($targetEl, start, end) {
    if (reducedMotionEnabled()) return 0;
    var mult = 1; // Check for custom time multiplier on the body and the scroll target

    $body.add($targetEl).each(function (_, el) {
      var time = parseFloat(el.getAttribute('data-scroll-time'));

      if (!isNaN(time) && time >= 0) {
        mult = time;
      }
    });
    return (472.143 * Math.log(Math.abs(start - end) + 125) - 2000) * mult;
  }

  function getY(start, end, elapsed, duration) {
    if (elapsed > duration) {
      return end;
    }

    return start + (end - start) * ease(elapsed / duration);
  }

  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  function ready() {
    var WF_CLICK_EMPTY = NS_EVENTS.WF_CLICK_EMPTY,
        WF_CLICK_SCROLL = NS_EVENTS.WF_CLICK_SCROLL;
    $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
    /**
     * Prevent empty hash links from triggering scroll.
     * Legacy feature to preserve: use the default "#" link
     * to trigger an interaction, and do not want the page
     * to scroll to the top.
     */

    $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function (e) {
      e.preventDefault();
    });
    document.head.insertBefore(focusStylesEl, document.head.firstChild);
  } // Export module


  return {
    ready: ready
  };
});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals document, window */

/* eslint-disable no-var */

/**
 * Webflow: Touch events
 * Supports legacy 'tap' event
 * Adds a 'swipe' event to desktop and mobile
 */

var Webflow = __webpack_require__(3);

Webflow.define('touch', module.exports = function ($) {
  var api = {};
  var getSelection = window.getSelection; // Delegate all legacy 'tap' events to 'click'

  $.event.special.tap = {
    bindType: 'click',
    delegateType: 'click'
  };

  api.init = function (el) {
    el = typeof el === 'string' ? $(el).get(0) : el;
    return el ? new Touch(el) : null;
  };

  function Touch(el) {
    var active = false;
    var useTouch = false;
    var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
    var startX;
    var lastX;
    el.addEventListener('touchstart', start, false);
    el.addEventListener('touchmove', move, false);
    el.addEventListener('touchend', end, false);
    el.addEventListener('touchcancel', cancel, false);
    el.addEventListener('mousedown', start, false);
    el.addEventListener('mousemove', move, false);
    el.addEventListener('mouseup', end, false);
    el.addEventListener('mouseout', cancel, false);

    function start(evt) {
      // We donâ€™t handle multi-touch events yet.
      var touches = evt.touches;

      if (touches && touches.length > 1) {
        return;
      }

      active = true;

      if (touches) {
        useTouch = true;
        startX = touches[0].clientX;
      } else {
        startX = evt.clientX;
      }

      lastX = startX;
    }

    function move(evt) {
      if (!active) {
        return;
      }

      if (useTouch && evt.type === 'mousemove') {
        evt.preventDefault();
        evt.stopPropagation();
        return;
      }

      var touches = evt.touches;
      var x = touches ? touches[0].clientX : evt.clientX;
      var velocityX = x - lastX;
      lastX = x; // Allow swipes while pointer is down, but prevent them during text selection

      if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === '') {
        triggerEvent('swipe', evt, {
          direction: velocityX > 0 ? 'right' : 'left'
        });
        cancel();
      }
    }

    function end(evt) {
      if (!active) {
        return;
      }

      active = false;

      if (useTouch && evt.type === 'mouseup') {
        evt.preventDefault();
        evt.stopPropagation();
        useTouch = false;
        return;
      }
    }

    function cancel() {
      active = false;
    }

    function destroy() {
      el.removeEventListener('touchstart', start, false);
      el.removeEventListener('touchmove', move, false);
      el.removeEventListener('touchend', end, false);
      el.removeEventListener('touchcancel', cancel, false);
      el.removeEventListener('mousedown', start, false);
      el.removeEventListener('mousemove', move, false);
      el.removeEventListener('mouseup', end, false);
      el.removeEventListener('mouseout', cancel, false);
      el = null;
    } // Public instance methods


    this.destroy = destroy;
  } // Wrap native event to supoprt preventdefault + stopPropagation


  function triggerEvent(type, evt, data) {
    var newEvent = $.Event(type, {
      originalEvent: evt
    });
    $(evt.target).trigger(newEvent, data);
  } // Listen for touch events on all nodes by default.


  api.instance = api.init(document); // Export module

  return api;
});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals
  window,
  document,
  FormData,
  WEBFLOW_FORM_API_HOST,
  WEBFLOW_FORM_OLDIE_HOST
*/

/* eslint-disable no-var */

/**
 * Webflow: Forms
 */

var _interopRequireDefault = __webpack_require__(1);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(336));

var Webflow = __webpack_require__(3);

Webflow.define('forms', module.exports = function ($, _) {
  var api = {};
  var $doc = $(document);
  var $forms;
  var loc = window.location;
  var retro = window.XDomainRequest && !window.atob;
  var namespace = '.w-form';
  var siteId;
  var emailField = /e(-)?mail/i;
  var emailValue = /^\S+@\S+$/;
  var alert = window.alert;
  var inApp = Webflow.env();
  var listening;
  var formUrl;
  var signFileUrl; // MailChimp domains: list-manage.com + mirrors

  var chimpRegex = /list-manage[1-9]?.com/i;

  var disconnected = _.debounce(function () {
    alert('Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.');
  }, 100);

  api.ready = api.design = api.preview = function () {
    // Init forms
    init(); // Wire document events on published site only once

    if (!inApp && !listening) {
      addListeners();
    }
  };

  function init() {
    siteId = $('html').attr('data-wf-site');
    formUrl = "https://webflow.com" + '/api/v1/form/' + siteId; // Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit

    if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
      formUrl = formUrl.replace("https://webflow.com", "http://formdata.webflow.com");
    }

    signFileUrl = "".concat(formUrl, "/signFile");
    $forms = $(namespace + ' form');

    if (!$forms.length) {
      return;
    }

    $forms.each(build);
  }

  function build(i, el) {
    // Store form state using namespace
    var $el = $(el);
    var data = $.data(el, namespace);

    if (!data) {
      data = $.data(el, namespace, {
        form: $el
      });
    } // data.form


    reset(data);
    var wrap = $el.closest('div.w-form');
    data.done = wrap.find('> .w-form-done');
    data.fail = wrap.find('> .w-form-fail');
    data.fileUploads = wrap.find('.w-file-upload');
    data.fileUploads.each(function (j) {
      initFileUpload(j, data);
    }); // Accessiblity fixes

    var formName = data.form.attr('aria-label') || data.form.attr('data-name') || 'Form';

    if (!data.done.attr('aria-label')) {
      data.form.attr('aria-label', formName);
    }

    data.done.attr('tabindex', '-1');
    data.done.attr('role', 'region');

    if (!data.done.attr('aria-label')) {
      data.done.attr('aria-label', formName + ' success');
    }

    data.fail.attr('tabindex', '-1');
    data.fail.attr('role', 'region');

    if (!data.fail.attr('aria-label')) {
      data.fail.attr('aria-label', formName + ' failure');
    }

    var action = data.action = $el.attr('action');
    data.handler = null;
    data.redirect = $el.attr('data-redirect'); // MailChimp form

    if (chimpRegex.test(action)) {
      data.handler = submitMailChimp;
      return;
    } // Custom form action


    if (action) {
      return;
    } // Webflow forms for hosting accounts


    if (siteId) {
      data.handler = typeof hostedSubmitWebflow === 'function' ? hostedSubmitWebflow : exportedSubmitWebflow;
      return;
    } // Alert for disconnected Webflow forms


    disconnected();
  }

  function addListeners() {
    listening = true; // Handle form submission for Webflow forms

    $doc.on('submit', namespace + ' form', function (evt) {
      var data = $.data(this, namespace);

      if (data.handler) {
        data.evt = evt;
        data.handler(data);
      }
    }); // handle checked ui for custom checkbox and radio button

    var CHECKBOX_CLASS_NAME = '.w-checkbox-input';
    var RADIO_INPUT_CLASS_NAME = '.w-radio-input';
    var CHECKED_CLASS = 'w--redirected-checked';
    var FOCUSED_CLASS = 'w--redirected-focus';
    var FOCUSED_VISIBLE_CLASS = 'w--redirected-focus-visible';
    var focusVisibleSelectors = ':focus-visible, [data-wf-focus-visible]';
    var CUSTOM_CONTROLS = [['checkbox', CHECKBOX_CLASS_NAME], ['radio', RADIO_INPUT_CLASS_NAME]];
    $doc.on('change', namespace + " form input[type=\"checkbox\"]:not(" + CHECKBOX_CLASS_NAME + ')', function (evt) {
      $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
    });
    $doc.on('change', namespace + " form input[type=\"radio\"]", function (evt) {
      $("input[name=\"".concat(evt.target.name, "\"]:not(").concat(CHECKBOX_CLASS_NAME, ")")).map(function (i, el) {
        return $(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS);
      });
      var $target = $(evt.target);

      if (!$target.hasClass('w-radio-input')) {
        $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
      }
    });
    CUSTOM_CONTROLS.forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          controlType = _ref2[0],
          customControlClassName = _ref2[1];

      $doc.on('focus', namespace + " form input[type=\"".concat(controlType, "\"]:not(") + customControlClassName + ')', function (evt) {
        $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
        $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
      });
      $doc.on('blur', namespace + " form input[type=\"".concat(controlType, "\"]:not(") + customControlClassName + ')', function (evt) {
        $(evt.target).siblings(customControlClassName).removeClass("".concat(FOCUSED_CLASS, " ").concat(FOCUSED_VISIBLE_CLASS));
      });
    });
  } // Reset data common to all submit handlers


  function reset(data) {
    var btn = data.btn = data.form.find(':input[type="submit"]');
    data.wait = data.btn.attr('data-wait') || null;
    data.success = false;
    btn.prop('disabled', false);
    data.label && btn.val(data.label);
  } // Disable submit button


  function disableBtn(data) {
    var btn = data.btn;
    var wait = data.wait;
    btn.prop('disabled', true); // Show wait text and store previous label

    if (wait) {
      data.label = btn.val();
      btn.val(wait);
    }
  } // Find form fields, validate, and set value pairs


  function findFields(form, result) {
    var status = null;
    result = result || {}; // The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas

    form.find(':input:not([type="submit"]):not([type="file"])').each(function (i, el) {
      var field = $(el);
      var type = field.attr('type');
      var name = field.attr('data-name') || field.attr('name') || 'Field ' + (i + 1);
      var value = field.val();

      if (type === 'checkbox') {
        value = field.is(':checked');
      } else if (type === 'radio') {
        // Radio group value already processed
        if (result[name] === null || typeof result[name] === 'string') {
          return;
        }

        value = form.find('input[name="' + field.attr('name') + '"]:checked').val() || null;
      }

      if (typeof value === 'string') {
        value = $.trim(value);
      }

      result[name] = value;
      status = status || getStatus(field, type, name, value);
    });
    return status;
  }

  function findFileUploads(form) {
    var result = {};
    form.find(':input[type="file"]').each(function (i, el) {
      var field = $(el);
      var name = field.attr('data-name') || field.attr('name') || 'File ' + (i + 1);
      var value = field.attr('data-value');

      if (typeof value === 'string') {
        value = $.trim(value);
      }

      result[name] = value;
    });
    return result;
  }

  var trackingCookieNameMap = {
    _mkto_trk: 'marketo' // __hstc: 'hubspot',

  };

  function collectEnterpriseTrackingCookies() {
    var cookies = document.cookie.split('; ').reduce(function (acc, cookie) {
      var splitCookie = cookie.split('=');
      var name = splitCookie[0];

      if (name in trackingCookieNameMap) {
        var mappedName = trackingCookieNameMap[name];
        var value = splitCookie.slice(1).join('=');
        acc[mappedName] = value;
      }

      return acc;
    }, {});
    return cookies;
  }

  function getStatus(field, type, name, value) {
    var status = null;

    if (type === 'password') {
      status = 'Passwords cannot be submitted.';
    } else if (field.attr('required')) {
      if (!value) {
        status = 'Please fill out the required field: ' + name;
      } else if (emailField.test(field.attr('type'))) {
        if (!emailValue.test(value)) {
          status = 'Please enter a valid email address for: ' + name;
        }
      }
    } else if (name === 'g-recaptcha-response' && !value) {
      status = 'Please confirm youâ€™re not a robot.';
    }

    return status;
  }

  function exportedSubmitWebflow(data) {
    preventDefault(data);
    afterSubmit(data);
  }
  /* WEBFLOW_HOSTED_BLOCK:START */
  // Submit form to Webflow


  function hostedSubmitWebflow(data) {
    reset(data);
    var form = data.form;
    var payload = {
      name: form.attr('data-name') || form.attr('name') || 'Untitled Form',
      source: loc.href,
      test: Webflow.env(),
      fields: {},
      fileUploads: {},
      dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
      trackingCookies: collectEnterpriseTrackingCookies()
    };
    var wfFlow = form.attr('data-wf-flow');

    if (wfFlow) {
      payload.wfFlow = wfFlow;
    }

    preventDefault(data); // Find & populate all fields

    var status = findFields(form, payload.fields);

    if (status) {
      return alert(status);
    }

    payload.fileUploads = findFileUploads(form); // Disable submit button

    disableBtn(data); // Read site ID
    // NOTE: If this site is exported, the HTML tag must retain the data-wf-site attribute for forms to work

    if (!siteId) {
      afterSubmit(data);
      return;
    }

    $.ajax({
      url: formUrl,
      type: 'POST',
      data: payload,
      dataType: 'json',
      crossDomain: true
    }).done(function (response) {
      if (response && response.code === 200) {
        data.success = true;
      }

      afterSubmit(data);
    }).fail(function () {
      afterSubmit(data);
    });
  }
  /* WEBFLOW_HOSTED_BLOCK:END */
  // Submit form to MailChimp


  function submitMailChimp(data) {
    reset(data);
    var form = data.form;
    var payload = {}; // Skip Ajax submission if http/s mismatch, fallback to POST instead

    if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
      form.attr('method', 'post');
      return;
    }

    preventDefault(data); // Find & populate all fields

    var status = findFields(form, payload);

    if (status) {
      return alert(status);
    } // Disable submit button


    disableBtn(data); // Use special format for MailChimp params

    var fullName;

    _.each(payload, function (value, key) {
      if (emailField.test(key)) {
        payload.EMAIL = value;
      }

      if (/^((full[ _-]?)?name)$/i.test(key)) {
        fullName = value;
      }

      if (/^(first[ _-]?name)$/i.test(key)) {
        payload.FNAME = value;
      }

      if (/^(last[ _-]?name)$/i.test(key)) {
        payload.LNAME = value;
      }
    });

    if (fullName && !payload.FNAME) {
      fullName = fullName.split(' ');
      payload.FNAME = fullName[0];
      payload.LNAME = payload.LNAME || fullName[1];
    } // Use the (undocumented) MailChimp jsonp api


    var url = data.action.replace('/post?', '/post-json?') + '&c=?'; // Add special param to prevent bot signups

    var userId = url.indexOf('u=') + 2;
    userId = url.substring(userId, url.indexOf('&', userId));
    var listId = url.indexOf('id=') + 3;
    listId = url.substring(listId, url.indexOf('&', listId));
    payload['b_' + userId + '_' + listId] = '';
    $.ajax({
      url: url,
      data: payload,
      dataType: 'jsonp'
    }).done(function (resp) {
      data.success = resp.result === 'success' || /already/.test(resp.msg);

      if (!data.success) {
        console.info('MailChimp error: ' + resp.msg);
      }

      afterSubmit(data);
    }).fail(function () {
      afterSubmit(data);
    });
  } // Common callback which runs after all Ajax submissions


  function afterSubmit(data) {
    var form = data.form;
    var redirect = data.redirect;
    var success = data.success; // Redirect to a success url if defined

    if (success && redirect) {
      Webflow.location(redirect);
      return;
    } // Show or hide status divs


    data.done.toggle(success);
    data.fail.toggle(!success);

    if (success) {
      data.done.focus();
    } else {
      data.fail.focus();
    } // Hide form on success


    form.toggle(!success); // Reset data and enable submit button

    reset(data);
  }

  function preventDefault(data) {
    data.evt && data.evt.preventDefault();
    data.evt = null;
  }

  function initFileUpload(i, form) {
    if (!form.fileUploads || !form.fileUploads[i]) {
      return;
    }

    var file;
    var $el = $(form.fileUploads[i]);
    var $defaultWrap = $el.find('> .w-file-upload-default');
    var $uploadingWrap = $el.find('> .w-file-upload-uploading');
    var $successWrap = $el.find('> .w-file-upload-success');
    var $errorWrap = $el.find('> .w-file-upload-error');
    var $input = $defaultWrap.find('.w-file-upload-input');
    var $label = $defaultWrap.find('.w-file-upload-label');
    var $labelChildren = $label.children();
    var $errorMsgEl = $errorWrap.find('.w-file-upload-error-msg');
    var $fileEl = $successWrap.find('.w-file-upload-file');
    var $removeEl = $successWrap.find('.w-file-remove-link');
    var $fileNameEl = $fileEl.find('.w-file-upload-file-name');
    var sizeErrMsg = $errorMsgEl.attr('data-w-size-error');
    var typeErrMsg = $errorMsgEl.attr('data-w-type-error');
    var genericErrMsg = $errorMsgEl.attr('data-w-generic-error'); // Accessiblity fixes
    // The file upload Input is not stylable by the designer, so we are
    // going to pretend the Label is the input. Â¯\_(ãƒ„)_/Â¯

    if (!inApp) {
      $label.on('click keydown', function (e) {
        if (e.type === 'keydown' && e.which !== 13 && e.which !== 32) {
          return;
        }

        e.preventDefault();
        $input.click();
      });
    } // Both of these are added through CSS


    $label.find('.w-icon-file-upload-icon').attr('aria-hidden', 'true');
    $removeEl.find('.w-icon-file-upload-remove').attr('aria-hidden', 'true');

    if (!inApp) {
      $removeEl.on('click keydown', function (e) {
        if (e.type === 'keydown') {
          if (e.which !== 13 && e.which !== 32) {
            return;
          }

          e.preventDefault();
        }

        $input.removeAttr('data-value');
        $input.val('');
        $fileNameEl.html('');
        $defaultWrap.toggle(true);
        $successWrap.toggle(false);
        $label.focus();
      });
      $input.on('change', function (e) {
        file = e.target && e.target.files && e.target.files[0];

        if (!file) {
          return;
        } // Show uploading


        $defaultWrap.toggle(false);
        $errorWrap.toggle(false);
        $uploadingWrap.toggle(true);
        $uploadingWrap.focus(); // Set filename

        $fileNameEl.text(file.name); // Disable submit button

        if (!isUploading()) {
          disableBtn(form);
        }

        form.fileUploads[i].uploading = true;
        signFile(file, afterSign);
      }); // Setting input width 1px and height equal label
      // This is so the browser required error will show up

      var height = $label.outerHeight();
      $input.height(height);
      $input.width(1);
    } else {
      $input.on('click', function (e) {
        e.preventDefault();
      });
      $label.on('click', function (e) {
        e.preventDefault();
      });
      $labelChildren.on('click', function (e) {
        e.preventDefault();
      });
    }

    function parseError(err) {
      var errorMsg = err.responseJSON && err.responseJSON.msg;
      var userError = genericErrMsg;

      if (typeof errorMsg === 'string' && errorMsg.indexOf('InvalidFileTypeError') === 0) {
        userError = typeErrMsg;
      } else if (typeof errorMsg === 'string' && errorMsg.indexOf('MaxFileSizeError') === 0) {
        userError = sizeErrMsg;
      }

      $errorMsgEl.text(userError);
      $input.removeAttr('data-value');
      $input.val('');
      $uploadingWrap.toggle(false);
      $defaultWrap.toggle(true);
      $errorWrap.toggle(true);
      $errorWrap.focus();
      form.fileUploads[i].uploading = false;

      if (!isUploading()) {
        reset(form);
      }
    }

    function afterSign(err, data) {
      if (err) {
        return parseError(err);
      }

      var fileName = data.fileName;
      var postData = data.postData;
      var fileId = data.fileId;
      var s3Url = data.s3Url;
      $input.attr('data-value', fileId);
      uploadS3(s3Url, postData, file, fileName, afterUpload);
    }

    function afterUpload(err) {
      if (err) {
        return parseError(err);
      } // Show success


      $uploadingWrap.toggle(false);
      $successWrap.css('display', 'inline-block');
      $successWrap.focus();
      form.fileUploads[i].uploading = false;

      if (!isUploading()) {
        reset(form);
      }
    }

    function isUploading() {
      var uploads = form.fileUploads && form.fileUploads.toArray() || [];
      return uploads.some(function (value) {
        return value.uploading;
      });
    }
  }

  function signFile(file, cb) {
    var payload = new URLSearchParams({
      name: file.name,
      size: file.size
    });
    $.ajax({
      type: 'GET',
      url: "".concat(signFileUrl, "?").concat(payload),
      crossDomain: true
    }).done(function (data) {
      cb(null, data);
    }).fail(function (err) {
      cb(err);
    });
  }

  function uploadS3(url, data, file, fileName, cb) {
    var formData = new FormData();

    for (var k in data) {
      formData.append(k, data[k]);
    }

    formData.append('file', file, fileName);
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      processData: false,
      contentType: false
    }).done(function () {
      cb(null);
    }).fail(function (err) {
      cb(err);
    });
  } // Export module


  return api;
});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(337);

var iterableToArrayLimit = __webpack_require__(338);

var nonIterableRest = __webpack_require__(339);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 337 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 338 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 339 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* globals window, document */

/* eslint-disable no-var */

/**
 * Webflow: Navbar component
 */

var Webflow = __webpack_require__(3);

var IXEvents = __webpack_require__(39);

var KEY_CODES = {
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  ESCAPE: 27,
  SPACE: 32,
  ENTER: 13,
  HOME: 36,
  END: 35
};
Webflow.define('navbar', module.exports = function ($, _) {
  var api = {};
  var tram = $.tram;
  var $win = $(window);
  var $doc = $(document);
  var debounce = _.debounce;
  var $body;
  var $navbars;
  var designer;
  var inEditor;
  var inApp = Webflow.env();
  var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
  var namespace = '.w-nav';
  var navbarOpenedButton = 'w--open';
  var navbarOpenedDropdown = 'w--nav-dropdown-open';
  var navbarOpenedDropdownToggle = 'w--nav-dropdown-toggle-open';
  var navbarOpenedDropdownList = 'w--nav-dropdown-list-open';
  var navbarOpenedLink = 'w--nav-link-open';
  var ix = IXEvents.triggers;
  var menuSibling = $(); // -----------------------------------
  // Module methods

  api.ready = api.design = api.preview = init;

  api.destroy = function () {
    menuSibling = $();
    removeListeners();

    if ($navbars && $navbars.length) {
      $navbars.each(teardown);
    }
  }; // -----------------------------------
  // Private methods


  function init() {
    designer = inApp && Webflow.env('design');
    inEditor = Webflow.env('editor');
    $body = $(document.body); // Find all instances on the page

    $navbars = $doc.find(namespace);

    if (!$navbars.length) {
      return;
    }

    $navbars.each(build); // Wire events

    removeListeners();
    addListeners();
  }

  function removeListeners() {
    Webflow.resize.off(resizeAll);
  }

  function addListeners() {
    Webflow.resize.on(resizeAll);
  }

  function resizeAll() {
    $navbars.each(resize);
  }

  function build(i, el) {
    var $el = $(el); // Store state in data

    var data = $.data(el, namespace);

    if (!data) {
      data = $.data(el, namespace, {
        open: false,
        el: $el,
        config: {},
        selectedIdx: -1
      });
    }

    data.menu = $el.find('.w-nav-menu');
    data.links = data.menu.find('.w-nav-link');
    data.dropdowns = data.menu.find('.w-dropdown');
    data.dropdownToggle = data.menu.find('.w-dropdown-toggle');
    data.dropdownList = data.menu.find('.w-dropdown-list');
    data.button = $el.find('.w-nav-button');
    data.container = $el.find('.w-container');
    data.overlayContainerId = 'w-nav-overlay-' + i;
    data.outside = outside(data); //   If the brand links exists and is set to link to the homepage, the
    // default setting, then add an aria-label

    var navBrandLink = $el.find('.w-nav-brand');

    if (navBrandLink && navBrandLink.attr('href') === '/' && navBrandLink.attr('aria-label') == null) {
      navBrandLink.attr('aria-label', 'home');
    } //   VoiceOver bug, when items that disallow user selection are focused
    // VoiceOver gets confused and scrolls to the end of the page. Â¯\_(ãƒ„)_/Â¯


    data.button.attr('style', '-webkit-user-select: text;'); // Add attributes to toggle element

    if (data.button.attr('aria-label') == null) {
      data.button.attr('aria-label', 'menu');
    }

    data.button.attr('role', 'button');
    data.button.attr('tabindex', '0');
    data.button.attr('aria-controls', data.overlayContainerId);
    data.button.attr('aria-haspopup', 'menu');
    data.button.attr('aria-expanded', 'false'); // Remove old events

    data.el.off(namespace);
    data.button.off(namespace);
    data.menu.off(namespace); // Set config from data attributes

    configure(data); // Add events based on mode

    if (designer) {
      removeOverlay(data);
      data.el.on('setting' + namespace, handler(data));
    } else {
      addOverlay(data);
      data.button.on('click' + namespace, toggle(data));
      data.menu.on('click' + namespace, 'a', navigate(data));
      data.button.on('keydown' + namespace, makeToggleButtonKeyboardHandler(data));
      data.el.on('keydown' + namespace, makeLinksKeyboardHandler(data));
    } // Trigger initial resize


    resize(i, el);
  }

  function teardown(i, el) {
    var data = $.data(el, namespace);

    if (data) {
      removeOverlay(data);
      $.removeData(el, namespace);
    }
  }

  function removeOverlay(data) {
    if (!data.overlay) {
      return;
    }

    close(data, true);
    data.overlay.remove();
    data.overlay = null;
  }

  function addOverlay(data) {
    if (data.overlay) {
      return;
    }

    data.overlay = $(overlay).appendTo(data.el);
    data.overlay.attr('id', data.overlayContainerId);
    data.parent = data.menu.parent();
    close(data, true);
  }

  function configure(data) {
    var config = {};
    var old = data.config || {}; // Set config options from data attributes

    var animation = config.animation = data.el.attr('data-animation') || 'default';
    config.animOver = /^over/.test(animation);
    config.animDirect = /left$/.test(animation) ? -1 : 1; // Re-open menu if the animation type changed

    if (old.animation !== animation) {
      data.open && _.defer(reopen, data);
    }

    config.easing = data.el.attr('data-easing') || 'ease';
    config.easing2 = data.el.attr('data-easing2') || 'ease';
    var duration = data.el.attr('data-duration');
    config.duration = duration != null ? Number(duration) : 400;
    config.docHeight = data.el.attr('data-doc-height'); // Store config in data

    data.config = config;
  }

  function handler(data) {
    return function (evt, options) {
      options = options || {};
      var winWidth = $win.width();
      configure(data);
      options.open === true && open(data, true);
      options.open === false && close(data, true); // Reopen if media query changed after setting

      data.open && _.defer(function () {
        if (winWidth !== $win.width()) {
          reopen(data);
        }
      });
    };
  }

  function makeToggleButtonKeyboardHandler(data) {
    return function (evt) {
      switch (evt.keyCode) {
        case KEY_CODES.SPACE:
        case KEY_CODES.ENTER:
          {
            // Toggle returns a function
            toggle(data)();
            evt.preventDefault();
            return evt.stopPropagation();
          }

        case KEY_CODES.ESCAPE:
          {
            close(data);
            evt.preventDefault();
            return evt.stopPropagation();
          }

        case KEY_CODES.ARROW_RIGHT:
        case KEY_CODES.ARROW_DOWN:
        case KEY_CODES.HOME:
        case KEY_CODES.END:
          {
            if (!data.open) {
              evt.preventDefault();
              return evt.stopPropagation();
            }

            if (evt.keyCode === KEY_CODES.END) {
              data.selectedIdx = data.links.length - 1;
            } else {
              data.selectedIdx = 0;
            }

            focusSelectedLink(data);
            evt.preventDefault();
            return evt.stopPropagation();
          }
      }
    };
  }

  function makeLinksKeyboardHandler(data) {
    return function (evt) {
      if (!data.open) {
        return;
      } // Realign selectedIdx with the menu item that is currently in focus.
      // We need this because we do not track the `Tab` key activity!


      data.selectedIdx = data.links.index(document.activeElement);

      switch (evt.keyCode) {
        case KEY_CODES.HOME:
        case KEY_CODES.END:
          {
            if (evt.keyCode === KEY_CODES.END) {
              data.selectedIdx = data.links.length - 1;
            } else {
              data.selectedIdx = 0;
            }

            focusSelectedLink(data);
            evt.preventDefault();
            return evt.stopPropagation();
          }

        case KEY_CODES.ESCAPE:
          {
            close(data); // Focus toggle button

            data.button.focus();
            evt.preventDefault();
            return evt.stopPropagation();
          }

        case KEY_CODES.ARROW_LEFT:
        case KEY_CODES.ARROW_UP:
          {
            data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
            focusSelectedLink(data);
            evt.preventDefault();
            return evt.stopPropagation();
          }

        case KEY_CODES.ARROW_RIGHT:
        case KEY_CODES.ARROW_DOWN:
          {
            data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
            focusSelectedLink(data);
            evt.preventDefault();
            return evt.stopPropagation();
          }
      }
    };
  }

  function focusSelectedLink(data) {
    if (data.links[data.selectedIdx]) {
      var selectedElement = data.links[data.selectedIdx];
      selectedElement.focus();
      navigate(selectedElement);
    }
  }

  function reopen(data) {
    if (!data.open) {
      return;
    }

    close(data, true);
    open(data, true);
  }

  function toggle(data) {
    // Debounce toggle to wait for accurate open state
    return debounce(function () {
      data.open ? close(data) : open(data);
    });
  }

  function navigate(data) {
    return function (evt) {
      var link = $(this);
      var href = link.attr('href'); // Avoid late clicks on touch devices

      if (!Webflow.validClick(evt.currentTarget)) {
        evt.preventDefault();
        return;
      } // Close when navigating to an in-page anchor


      if (href && href.indexOf('#') === 0 && data.open) {
        close(data);
      }
    };
  }

  function outside(data) {
    // Unbind previous click handler if it exists
    if (data.outside) {
      $doc.off('click' + namespace, data.outside);
    }

    return function (evt) {
      var $target = $(evt.target); // Ignore clicks on Editor overlay UI

      if (inEditor && $target.closest('.w-editor-bem-EditorOverlay').length) {
        return;
      } // Close menu when clicked outside, debounced to wait for state


      outsideDebounced(data, $target);
    };
  }

  var outsideDebounced = debounce(function (data, $target) {
    if (!data.open) {
      return;
    }

    var menu = $target.closest('.w-nav-menu');

    if (!data.menu.is(menu)) {
      close(data);
    }
  });

  function resize(i, el) {
    var data = $.data(el, namespace); // Check for collapsed state based on button display

    var collapsed = data.collapsed = data.button.css('display') !== 'none'; // Close menu if button is no longer visible (and not in designer)

    if (data.open && !collapsed && !designer) {
      close(data, true);
    } // Set max-width of links + dropdowns to match container


    if (data.container.length) {
      var updateEachMax = updateMax(data);
      data.links.each(updateEachMax);
      data.dropdowns.each(updateEachMax);
    } // If currently open, update height to match body


    if (data.open) {
      setOverlayHeight(data);
    }
  }

  var maxWidth = 'max-width';

  function updateMax(data) {
    // Set max-width of each element to match container
    var containMax = data.container.css(maxWidth);

    if (containMax === 'none') {
      containMax = '';
    }

    return function (i, link) {
      link = $(link);
      link.css(maxWidth, ''); // Don't set the max-width if an upstream value exists

      if (link.css(maxWidth) === 'none') {
        link.css(maxWidth, containMax);
      }
    };
  }

  function addMenuOpen(i, el) {
    el.setAttribute('data-nav-menu-open', '');
  }

  function removeMenuOpen(i, el) {
    el.removeAttribute('data-nav-menu-open');
  }

  function open(data, immediate) {
    if (data.open) {
      return;
    }

    data.open = true;
    data.menu.each(addMenuOpen);
    data.links.addClass(navbarOpenedLink);
    data.dropdowns.addClass(navbarOpenedDropdown);
    data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
    data.dropdownList.addClass(navbarOpenedDropdownList);
    data.button.addClass(navbarOpenedButton);
    var config = data.config;
    var animation = config.animation;

    if (animation === 'none' || !tram.support.transform || config.duration <= 0) {
      immediate = true;
    }

    var bodyHeight = setOverlayHeight(data);
    var menuHeight = data.menu.outerHeight(true);
    var menuWidth = data.menu.outerWidth(true);
    var navHeight = data.el.height();
    var navbarEl = data.el[0];
    resize(0, navbarEl);
    ix.intro(0, navbarEl);
    Webflow.redraw.up(); // Listen for click outside events

    if (!designer) {
      $doc.on('click' + namespace, data.outside);
    } // No transition for immediate


    if (immediate) {
      complete();
      return;
    }

    var transConfig = 'transform ' + config.duration + 'ms ' + config.easing; // Add menu to overlay

    if (data.overlay) {
      menuSibling = data.menu.prev();
      data.overlay.show().append(data.menu);
    } // Over left/right


    if (config.animOver) {
      tram(data.menu).add(transConfig).set({
        x: config.animDirect * menuWidth,
        height: bodyHeight
      }).start({
        x: 0
      }).then(complete);
      data.overlay && data.overlay.width(menuWidth);
      return;
    } // Drop Down


    var offsetY = navHeight + menuHeight;
    tram(data.menu).add(transConfig).set({
      y: -offsetY
    }).start({
      y: 0
    }).then(complete);

    function complete() {
      data.button.attr('aria-expanded', 'true');
    }
  }

  function setOverlayHeight(data) {
    var config = data.config;
    var bodyHeight = config.docHeight ? $doc.height() : $body.height();

    if (config.animOver) {
      data.menu.height(bodyHeight);
    } else if (data.el.css('position') !== 'fixed') {
      bodyHeight -= data.el.outerHeight(true);
    }

    data.overlay && data.overlay.height(bodyHeight);
    return bodyHeight;
  }

  function close(data, immediate) {
    if (!data.open) {
      return;
    }

    data.open = false;
    data.button.removeClass(navbarOpenedButton);
    var config = data.config;

    if (config.animation === 'none' || !tram.support.transform || config.duration <= 0) {
      immediate = true;
    }

    ix.outro(0, data.el[0]); // Stop listening for click outside events

    $doc.off('click' + namespace, data.outside);

    if (immediate) {
      tram(data.menu).stop();
      complete();
      return;
    }

    var transConfig = 'transform ' + config.duration + 'ms ' + config.easing2;
    var menuHeight = data.menu.outerHeight(true);
    var menuWidth = data.menu.outerWidth(true);
    var navHeight = data.el.height(); // Over left/right

    if (config.animOver) {
      tram(data.menu).add(transConfig).start({
        x: menuWidth * config.animDirect
      }).then(complete);
      return;
    } // Drop Down


    var offsetY = navHeight + menuHeight;
    tram(data.menu).add(transConfig).start({
      y: -offsetY
    }).then(complete);

    function complete() {
      data.menu.height('');
      tram(data.menu).set({
        x: 0,
        y: 0
      });
      data.menu.each(removeMenuOpen);
      data.links.removeClass(navbarOpenedLink);
      data.dropdowns.removeClass(navbarOpenedDropdown);
      data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
      data.dropdownList.removeClass(navbarOpenedDropdownList);

      if (data.overlay && data.overlay.children().length) {
        // Move menu back to parent at the original location
        menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
        data.overlay.attr('style', '').hide();
      } // Trigger event so other components can hook in (dropdown)


      data.el.triggerHandler('w-close');
      data.button.attr('aria-expanded', 'false');
    }
  } // Export module


  return api;
});

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @wf-will-never-add-flow-to-this-file

/* global document window */

/* eslint-disable no-var */

/**
 * Webflow: Tabs component
 */

var Webflow = __webpack_require__(3);

var IXEvents = __webpack_require__(39);

Webflow.define('tabs', module.exports = function ($) {
  var api = {};
  var tram = $.tram;
  var $doc = $(document);
  var $tabs;
  var design;
  var env = Webflow.env;
  var safari = env.safari;
  var inApp = env();
  var tabAttr = 'data-w-tab';
  var paneAttr = 'data-w-pane';
  var namespace = '.w-tabs';
  var linkCurrent = 'w--current';
  var tabActive = 'w--tab-active';
  var ix = IXEvents.triggers;
  var inRedraw = false; // -----------------------------------
  // Module methods

  api.ready = api.design = api.preview = init;

  api.redraw = function () {
    inRedraw = true;
    init();
    inRedraw = false;
  };

  api.destroy = function () {
    $tabs = $doc.find(namespace);

    if (!$tabs.length) {
      return;
    }

    $tabs.each(resetIX);
    removeListeners();
  }; // -----------------------------------
  // Private methods


  function init() {
    design = inApp && Webflow.env('design'); // Find all instances on the page

    $tabs = $doc.find(namespace);

    if (!$tabs.length) {
      return;
    }

    $tabs.each(build);

    if (Webflow.env('preview') && !inRedraw) {
      $tabs.each(resetIX);
    }

    removeListeners();
    addListeners();
  }

  function removeListeners() {
    Webflow.redraw.off(api.redraw);
  }

  function addListeners() {
    Webflow.redraw.on(api.redraw);
  }

  function resetIX(i, el) {
    var data = $.data(el, namespace);

    if (!data) {
      return;
    }

    data.links && data.links.each(ix.reset);
    data.panes && data.panes.each(ix.reset);
  }

  function build(i, el) {
    var widgetHash = namespace.substr(1) + '-' + i;
    var $el = $(el); // Store state in data

    var data = $.data(el, namespace);

    if (!data) {
      data = $.data(el, namespace, {
        el: $el,
        config: {}
      });
    }

    data.current = null;
    data.tabIdentifier = widgetHash + '-' + tabAttr;
    data.paneIdentifier = widgetHash + '-' + paneAttr;
    data.menu = $el.children('.w-tab-menu');
    data.links = data.menu.children('.w-tab-link');
    data.content = $el.children('.w-tab-content');
    data.panes = data.content.children('.w-tab-pane'); // Remove old events

    data.el.off(namespace);
    data.links.off(namespace); // This role is necessary in the ARIA spec

    data.menu.attr('role', 'tablist'); // Set all tabs unfocusable

    data.links.attr('tabindex', '-1'); // Set config from data attributes

    configure(data); // Wire up events when not in design mode

    if (!design) {
      data.links.on('click' + namespace, linkSelect(data));
      data.links.on('keydown' + namespace, handleLinkKeydown(data)); // Trigger first intro event from current tab

      var $link = data.links.filter('.' + linkCurrent);
      var tab = $link.attr(tabAttr);
      tab && changeTab(data, {
        tab: tab,
        immediate: true
      });
    }
  }

  function configure(data) {
    var config = {}; // Set config options from data attributes

    config.easing = data.el.attr('data-easing') || 'ease';
    var intro = parseInt(data.el.attr('data-duration-in'), 10); // eslint-disable-next-line no-self-compare

    intro = config.intro = intro === intro ? intro : 0;
    var outro = parseInt(data.el.attr('data-duration-out'), 10); // eslint-disable-next-line no-self-compare

    outro = config.outro = outro === outro ? outro : 0;
    config.immediate = !intro && !outro; // Store config in data

    data.config = config;
  }

  function getActiveTabIdx(data) {
    var tab = data.current;
    return Array.prototype.findIndex.call(data.links, function (t) {
      return t.getAttribute(tabAttr) === tab;
    }, null);
  }

  function linkSelect(data) {
    return function (evt) {
      evt.preventDefault();
      var tab = evt.currentTarget.getAttribute(tabAttr);
      tab && changeTab(data, {
        tab: tab
      });
    };
  }

  function handleLinkKeydown(data) {
    return function (evt) {
      var currentIdx = getActiveTabIdx(data);
      var keyName = evt.key;
      var keyMap = {
        ArrowLeft: currentIdx - 1,
        ArrowUp: currentIdx - 1,
        ArrowRight: currentIdx + 1,
        ArrowDown: currentIdx + 1,
        End: data.links.length - 1,
        Home: 0
      }; // Bail out of function if this key is not
      // involved in tab management

      if (!(keyName in keyMap)) return;
      evt.preventDefault();
      var nextIdx = keyMap[keyName]; // go back to end of tabs if we wrap past the start

      if (nextIdx === -1) {
        nextIdx = data.links.length - 1;
      } // go back to start if we wrap past the last tab


      if (nextIdx === data.links.length) {
        nextIdx = 0;
      }

      var tabEl = data.links[nextIdx];
      var tab = tabEl.getAttribute(tabAttr);
      tab && changeTab(data, {
        tab: tab
      });
    };
  }

  function changeTab(data, options) {
    options = options || {};
    var config = data.config;
    var easing = config.easing;
    var tab = options.tab; // Don't select the same tab twice

    if (tab === data.current) {
      return;
    }

    data.current = tab;
    /**
     * The currently active tab.
     * Will be referenced to manage focus after
     * TabLink attributes are changed
     * @type {HTMLAnchorElement}
     */

    var currentTab; // Select the current link

    data.links.each(function (i, el) {
      var $el = $(el); // Add important attributes at build time.

      if (options.immediate || config.immediate) {
        // Store corresponding pane for reference.
        var pane = data.panes[i]; // IDs are necessary for ARIA relationships,
        // so if the user did not create one, we create one
        // using our generated identifier

        if (!el.id) {
          el.id = data.tabIdentifier + '-' + i;
        }

        if (!pane.id) {
          pane.id = data.paneIdentifier + '-' + i;
        }

        el.href = '#' + pane.id; // Tab elements must take this role

        el.setAttribute('role', 'tab'); // Tab elements must reference the unique ID of the panel
        // that they control

        el.setAttribute('aria-controls', pane.id); // Tab elements must report that they are not selected
        // by default

        el.setAttribute('aria-selected', 'false'); // Panes must take on the `Tabpanel` role

        pane.setAttribute('role', 'tabpanel'); // Elements with tabpanel role must be labelled by
        // their controlling tab

        pane.setAttribute('aria-labelledby', el.id);
      }

      if (el.getAttribute(tabAttr) === tab) {
        // This is the current tab. Store it.
        currentTab = el;
        $el.addClass(linkCurrent).removeAttr('tabindex').attr({
          'aria-selected': 'true'
        }).each(ix.intro);
      } else if ($el.hasClass(linkCurrent)) {
        $el.removeClass(linkCurrent).attr({
          tabindex: '-1',
          'aria-selected': 'false'
        }).each(ix.outro);
      }
    }); // Find the new tab panes and keep track of previous

    var targets = [];
    var previous = [];
    data.panes.each(function (i, el) {
      var $el = $(el);

      if (el.getAttribute(tabAttr) === tab) {
        targets.push(el);
      } else if ($el.hasClass(tabActive)) {
        previous.push(el);
      }
    });
    var $targets = $(targets);
    var $previous = $(previous); // Switch tabs immediately and bypass transitions

    if (options.immediate || config.immediate) {
      $targets.addClass(tabActive).each(ix.intro);
      $previous.removeClass(tabActive); // Redraw to benefit components in the hidden tab pane
      // But only if not currently in the middle of a redraw

      if (!inRedraw) {
        Webflow.redraw.up();
      }

      return;
    } // Focus if this is not the on-page-load call to `changeTab`
    else {
        // Backwards compatible hack to prevent focus from scrolling
        var x = window.scrollX;
        var y = window.scrollY;
        currentTab.focus();
        window.scrollTo(x, y);
      } // Fade out the currently active tab before intro


    if ($previous.length && config.outro) {
      $previous.each(ix.outro);
      tram($previous).add('opacity ' + config.outro + 'ms ' + easing, {
        fallback: safari
      }).start({
        opacity: 0
      }).then(function () {
        return fadeIn(config, $previous, $targets);
      });
    } else {
      // Skip the outro and play intro
      fadeIn(config, $previous, $targets);
    }
  } // Fade in the new target


  function fadeIn(config, $previous, $targets) {
    // Clear previous active class + styles touched by tram
    // We cannot remove the whole inline style because it could be dynamically bound
    $previous.removeClass(tabActive).css({
      opacity: '',
      transition: '',
      transform: '',
      width: '',
      height: ''
    }); // Add active class to new target

    $targets.addClass(tabActive).each(ix.intro);
    Webflow.redraw.up(); // Set opacity immediately if intro is zero

    if (!config.intro) {
      return tram($targets).set({
        opacity: 1
      });
    } // Otherwise fade in opacity


    tram($targets).set({
      opacity: 0
    }).redraw().add('opacity ' + config.intro + 'ms ' + config.easing, {
      fallback: safari
    }).start({
      opacity: 1
    });
  } // Export module


  return api;
});

/***/ })
/******/ ]);/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"186ecda1-2ceb-0acb-19f3-b04daa9a1a21","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"186ecda1-2ceb-0acb-19f3-b04daa9a1a21","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647112962119},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"56df7c21-c68f-a0fe-7deb-c479ed312abb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56df7c21-c68f-a0fe-7deb-c479ed312abb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1647112976825},"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62263d4c9154af3d4204b5eb","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"62263d4c9154af3d4204b5eb","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1651169501671}},"actionLists":{"a":{"id":"a","title":"Show \"Close\"","actionItemGroups":[{"actionItems":[{"id":"a-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".menu-text","selectorGuids":["50c33425-8343-860d-ad62-473885217b4d"]},"value":"none"}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"186ecda1-2ceb-0acb-19f3-b04daa9a1a21"},"value":"none"}},{"id":"a-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".menu-text","selectorGuids":["50c33425-8343-860d-ad62-473885217b4d"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1647105031082},"a-2":{"id":"a-2","title":"Show \"Menu\"","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".menu-text","selectorGuids":["50c33425-8343-860d-ad62-473885217b4d"]},"value":"block"}},{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"56df7c21-c68f-a0fe-7deb-c479ed312abb"},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1647105081695},"a-3":{"id":"a-3","title":"Page Load Animation","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"62263d4c9154af3d4204b5eb|4855a2b2-d7cb-03f3-a696-f57d1bc1f62e"},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"62263d4c9154af3d4204b5eb|bcc5fd7c-72e1-8be8-3d5e-aab64c8c2569"},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-3-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"62263d4c9154af3d4204b5eb|31fa58b8-6ee1-37e8-4280-582f8c70cdd6"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-3-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"62263d4c9154af3d4204b5eb|2c8884dd-87e0-1403-63fa-8a4087adcf34"},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCubic","duration":1000,"target":{"id":"62263d4c9154af3d4204b5eb|4855a2b2-d7cb-03f3-a696-f57d1bc1f62e"},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]},{"actionItems":[{"id":"a-3-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCubic","duration":800,"target":{"id":"62263d4c9154af3d4204b5eb|bcc5fd7c-72e1-8be8-3d5e-aab64c8c2569"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-3-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCubic","duration":1000,"target":{"id":"62263d4c9154af3d4204b5eb|31fa58b8-6ee1-37e8-4280-582f8c70cdd6"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-3-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutCubic","duration":2000,"target":{"id":"62263d4c9154af3d4204b5eb|2c8884dd-87e0-1403-63fa-8a4087adcf34"},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1651169508744}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);

/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
*/!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";var i={},r={},o=[],a=window.Webflow||[],s=window.jQuery,u=s(window),c=s(document),l=s.isFunction,h=i._=n(4),f=i.tram=n(1)&&s.tram,d=!1,p=!1;function m(t){i.env()&&(l(t.design)&&u.on("__wf_design",t.design),l(t.preview)&&u.on("__wf_preview",t.preview)),l(t.destroy)&&u.on("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){if(d)return void t.ready();if(h.contains(o,t.ready))return;o.push(t.ready)}(t)}function v(t){l(t.design)&&u.off("__wf_design",t.design),l(t.preview)&&u.off("__wf_preview",t.preview),l(t.destroy)&&u.off("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){o=h.filter(o,function(e){return e!==t.ready})}(t)}f.config.hideBackface=!1,f.config.keepInherited=!0,i.define=function(t,e,n){r[t]&&v(r[t]);var i=r[t]=e(s,h,n)||{};return m(i),i},i.require=function(t){return r[t]},i.push=function(t){d?l(t)&&t():a.push(t)},i.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var g,w=navigator.userAgent.toLowerCase(),b=i.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,y=i.env.chrome=/chrome/.test(w)&&/Google/.test(navigator.vendor)&&parseInt(w.match(/chrome\/(\d+)\./)[1],10),x=i.env.ios=/(ipod|iphone|ipad)/.test(w);i.env.safari=/safari/.test(w)&&!y&&!x,b&&c.on("touchstart mousedown",function(t){g=t.target}),i.validClick=b?function(t){return t===g||s.contains(t,g)}:function(){return!0};var k,_="resize.webflow orientationchange.webflow load.webflow";function E(t,e){var n=[],i={};return i.up=h.throttle(function(t){h.each(n,function(e){e(t)})}),t&&e&&t.on(e,i.up),i.on=function(t){"function"==typeof t&&(h.contains(n,t)||n.push(t))},i.off=function(t){n=arguments.length?h.filter(n,function(e){return e!==t}):[]},i}function S(t){l(t)&&t()}function z(){k&&(k.reject(),u.off("load",k.resolve)),k=new s.Deferred,u.on("load",k.resolve)}i.resize=E(u,_),i.scroll=E(u,"scroll.webflow resize.webflow orientationchange.webflow load.webflow"),i.redraw=E(),i.location=function(t){window.location=t},i.env()&&(i.location=function(){}),i.ready=function(){d=!0,p?(p=!1,h.each(r,m)):h.each(o,S),h.each(a,S),i.resize.up()},i.load=function(t){k.then(t)},i.destroy=function(t){t=t||{},p=!0,u.triggerHandler("__wf_destroy"),null!=t.domready&&(d=t.domready),h.each(r,v),i.resize.off(),i.scroll.off(),i.redraw.off(),o=[],a=[],"pending"===k.state()&&z()},s(i.ready),z(),t.exports=window.Webflow=i},function(t,e,n){"use strict";var i=n(5)(n(6));window.tram=function(t){function e(t,e){return(new D.Bare).init(t,e)}function n(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function r(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function o(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function a(){}function s(t,e,n){c("Units do not match ["+t+"]: "+e+", "+n)}function u(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var i=n;return Q.test(t)||!V.test(t)?i=parseInt(t,10):V.test(t)&&(i=1e3*parseFloat(t)),0>i&&(i=0),i==i?i:n}function c(t){G.debug&&window&&window.console.warn(t)}var l=function(t,e,n){function r(t){return"object"==(0,i.default)(t)}function o(t){return"function"==typeof t}function a(){}return function i(s,u){function c(){var t=new l;return o(t.init)&&t.init.apply(t,arguments),t}function l(){}u===n&&(u=s,s=Object),c.Bare=l;var h,f=a[t]=s[t],d=l[t]=c[t]=new a;return d.constructor=c,c.mixin=function(e){return l[t]=c[t]=i(c,e)[t],c},c.open=function(t){if(h={},o(t)?h=t.call(c,d,f,c,s):r(t)&&(h=t),r(h))for(var n in h)e.call(h,n)&&(d[n]=h[n]);return o(d.init)||(d.init=s),c},c.open(u)}}("prototype",{}.hasOwnProperty),h={ease:["ease",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-2.75*o*r+11*r*r+-15.5*o+8*r+.25*t)}],"ease-in":["ease-in",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-1*o*r+3*r*r+-3*o+2*r)}],"ease-out":["ease-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(.3*o*r+-1.6*r*r+2.2*o+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(2*o*r+-5*r*r+2*o+2*r)}],linear:["linear",function(t,e,n,i){return n*t/i+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,i){return n*(t/=i)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,i){return-n*(t/=i)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,i){return n*(t/=i)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,i){return n*(t/=i)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,i){return n*(t/=i)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,i){return 0===t?e:n*Math.pow(2,10*(t/i-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,i){return t===i?e+n:n*(1-Math.pow(2,-10*t/i))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,i){return 0===t?e:t===i?e+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*(t/=i)*t*((r+1)*t-r)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*((t=t/i-1)*t*((r+1)*t+r)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),(t/=i/2)<1?n/2*t*t*((1+(r*=1.525))*t-r)+e:n/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e}]},f={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},d=document,p=window,m="bkwld-tram",v=/[\-\.0-9]/g,g=/[A-Z]/,w="number",b=/^(rgb|#)/,y=/(em|cm|mm|in|pt|pc|px)$/,x=/(em|cm|mm|in|pt|pc|px|%)$/,k=/(deg|rad|turn)$/,_="unitless",E=/(all|none) 0s ease 0s/,S=/^(width|height)$/,z=" ",$=d.createElement("a"),j=["Webkit","Moz","O","ms"],A=["-webkit-","-moz-","-o-","-ms-"],q=function(t){if(t in $.style)return{dom:t,css:t};var e,n,i="",r=t.split("-");for(e=0;e<r.length;e++)i+=r[e].charAt(0).toUpperCase()+r[e].slice(1);for(e=0;e<j.length;e++)if((n=j[e]+i)in $.style)return{dom:n,css:A[e]+t}},L=e.support={bind:Function.prototype.bind,transform:q("transform"),transition:q("transition"),backface:q("backface-visibility"),timing:q("transition-timing-function")};if(L.transition){var O=L.timing.dom;if($.style[O]=h["ease-in-back"][0],!$.style[O])for(var M in f)h[M][0]=f[M]}var T=e.frame=function(){var t=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return t&&L.bind?t.bind(p):function(t){p.setTimeout(t,16)}}(),I=e.now=function(){var t=p.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&L.bind?e.bind(t):Date.now||function(){return+new Date}}(),C=l(function(e){function r(t,e){var n=function(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}return i}((""+t).split(z)),i=n[0];e=e||{};var r=Z[i];if(!r)return c("Unsupported property: "+i);if(!e.weak||!this.props[i]){var o=r[0],a=this.props[i];return a||(a=this.props[i]=new o.Bare),a.init(this.$el,n,r,e),a}}function o(t,e,n){if(t){var o=(0,i.default)(t);if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==o&&e)return this.timer=new W({duration:t,context:this,complete:a}),void(this.active=!0);if("string"==o&&e){switch(t){case"hide":l.call(this);break;case"stop":s.call(this);break;case"redraw":h.call(this);break;default:r.call(this,t,n&&n[1])}return a.call(this)}if("function"==o)return void t.call(this,this);if("object"==o){var c=0;d.call(this,t,function(t,e){t.span>c&&(c=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(c=u(t.wait,0))}),f.call(this),c>0&&(this.timer=new W({duration:c,context:this}),this.active=!0,e&&(this.timer.complete=a));var p=this,m=!1,v={};T(function(){d.call(p,t,function(t){t.active&&(m=!0,v[t.name]=t.nextStyle)}),m&&p.$el.css(v)})}}}function a(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();o.call(this,t.options,!0,t.args)}}function s(t){var e;this.timer&&this.timer.destroy(),this.queue=[],this.active=!1,"string"==typeof t?(e={})[t]=1:e="object"==(0,i.default)(t)&&null!=t?t:this.props,d.call(this,e,p),f.call(this)}function l(){s.call(this),this.el.style.display="none"}function h(){this.el.offsetHeight}function f(){var t,e,n=[];for(t in this.upstream&&n.push(this.upstream),this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[L.transition.dom]=n)}function d(t,e,i){var o,a,s,u,c=e!==p,l={};for(o in t)s=t[o],o in J?(l.transform||(l.transform={}),l.transform[o]=s):(g.test(o)&&(o=n(o)),o in Z?l[o]=s:(u||(u={}),u[o]=s));for(o in l){if(s=l[o],!(a=this.props[o])){if(!c)continue;a=r.call(this,o)}e.call(this,a,s)}i&&u&&i.call(this,u)}function p(t){t.stop()}function v(t,e){t.set(e)}function w(t){this.$el.css(t)}function b(t,n){e[t]=function(){return this.children?function(t,e){var n,i=this.children.length;for(n=0;i>n;n++)t.apply(this.children[n],e);return this}.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,G.keepInherited&&!G.fallback){var n=X(this.el,"transition");n&&!E.test(n)&&(this.upstream=n)}L.backface&&G.hideBackface&&U(this.el,L.backface.css,"hidden")},b("add",r),b("start",o),b("wait",function(t){t=u(t,0),this.active?this.queue.push({options:t}):(this.timer=new W({duration:t,context:this,complete:a}),this.active=!0)}),b("then",function(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=a)):c("No active transition timer. Use start() or wait() before then().")}),b("next",a),b("stop",s),b("set",function(t){s.call(this,t),d.call(this,t,v,w)}),b("show",function(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}),b("hide",l),b("redraw",h),b("destroy",function(){s.call(this),t.removeData(this.el,m),this.$el=this.el=null})}),D=l(C,function(e){function n(e,n){var i=t.data(e,m)||t.data(e,m,new C.Bare);return i.el||i.init(e),n?i.start(n):i}e.init=function(e,i){var r=t(e);if(!r.length)return this;if(1===r.length)return n(r[0],i);var o=[];return r.each(function(t,e){o.push(n(e,i))}),this.children=o,this}}),F=l(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function n(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?o(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var r=500,a="ease",s=0;t.init=function(t,e,n,i){this.$el=t,this.el=t[0];var o=e[0];n[2]&&(o=n[2]),Y[o]&&(o=Y[o]),this.name=o,this.type=n[1],this.duration=u(e[1],this.duration,r),this.ease=function(t,e,n){return void 0!==e&&(n=e),t in h?t:n}(e[2],this.ease,a),this.delay=u(e[3],this.delay,s),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=S.test(this.name),this.unit=i.unit||this.unit||G.defaultUnit,this.angle=i.angle||this.angle||G.defaultAngle,G.fallback||i.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+z+this.duration+"ms"+("ease"!=this.ease?z+h[this.ease][0]:"")+(this.delay?z+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new N({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return X(this.el,this.name)},t.update=function(t){U(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,U(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var r,o="number"==typeof t,a="string"==typeof t;switch(e){case w:if(o)return t;if(a&&""===t.replace(v,""))return+t;r="number(unitless)";break;case b:if(a){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:n(t)}r="hex or rgb string";break;case y:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit)";break;case x:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit or %)";break;case k:if(o)return t+this.angle;if(a&&e.test(t))return t;r="number(deg) or string(angle)";break;case _:if(o)return t;if(a&&x.test(t))return t;r="number(unitless) or string(unit or %)"}return function(t,e){c("Type warning: Expected: ["+t+"] Got: ["+(0,i.default)(e)+"] "+e)}(r,t),t},t.redraw=function(){this.el.offsetHeight}}),R=l(F,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),b))}}),P=l(F,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),B=l(F,function(t,e){function n(t,e){var n,i,r,o,a;for(n in t)r=(o=J[n])[0],i=o[1]||n,a=this.convert(t[n],r),e.call(this,i,a,r)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},J.perspective&&G.perspective&&(this.current.perspective=G.perspective,U(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),U(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new H({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,i={};for(n in this.current)i[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(i)},t.fallback=function(t){var e=this.values(t);this.tween=new H({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){U(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,i={};return n.call(this,t,function(t,n,r){i[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,r))}),i}}),N=l(function(e){function n(){var t,e,i,r=u.length;if(r)for(T(n),e=I(),t=r;t--;)(i=u[t])&&i.render(e)}var i={ease:h.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||i.ease;h[e]&&(e=h[e][1]),"function"!=typeof e&&(e=i.ease),this.ease=e,this.update=t.update||a,this.complete=t.complete||a,this.context=t.context||this,this.name=t.name;var n=t.from,r=t.to;void 0===n&&(n=i.from),void 0===r&&(r=i.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof r?(this.begin=n,this.change=r-n):this.format(r,n),this.value=this.begin+this.unit,this.start=I(),!1!==t.autoplay&&this.play()},e.play=function(){var t;this.active||(this.start||(this.start=I()),this.active=!0,t=this,1===u.push(t)&&T(n))},e.stop=function(){var e,n,i;this.active&&(this.active=!1,e=this,(i=t.inArray(e,u))>=0&&(n=u.slice(i+1),u.length=i,n.length&&(u=u.concat(n))))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var i=this.ease(n,0,1,this.duration);return e=this.startRGB?function(t,e,n){return o(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}(this.startRGB,this.endRGB,i):function(t){return Math.round(t*c)/c}(this.begin+i*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=r(e),this.endRGB=r(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(v,"");n!==t.replace(v,"")&&s("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=a};var u=[],c=1e3}),W=l(N,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||a,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),H=l(N,function(t,e){t.init=function(t){var e,n;for(e in this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current,t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new N({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,i=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,i=!0);return i?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),G=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!L.transition,agentTests:[]};e.fallback=function(t){if(!L.transition)return G.fallback=!0;G.agentTests.push("("+t+")");var e=new RegExp(G.agentTests.join("|"),"i");G.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new N(t)},e.delay=function(t,e,n){return new W({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var U=t.style,X=t.css,Y={transform:L.transform&&L.transform.css},Z={color:[R,b],background:[R,b,"background-color"],"outline-color":[R,b],"border-color":[R,b],"border-top-color":[R,b],"border-right-color":[R,b],"border-bottom-color":[R,b],"border-left-color":[R,b],"border-width":[F,y],"border-top-width":[F,y],"border-right-width":[F,y],"border-bottom-width":[F,y],"border-left-width":[F,y],"border-spacing":[F,y],"letter-spacing":[F,y],margin:[F,y],"margin-top":[F,y],"margin-right":[F,y],"margin-bottom":[F,y],"margin-left":[F,y],padding:[F,y],"padding-top":[F,y],"padding-right":[F,y],"padding-bottom":[F,y],"padding-left":[F,y],"outline-width":[F,y],opacity:[F,w],top:[F,x],right:[F,x],bottom:[F,x],left:[F,x],"font-size":[F,x],"text-indent":[F,x],"word-spacing":[F,x],width:[F,x],"min-width":[F,x],"max-width":[F,x],height:[F,x],"min-height":[F,x],"max-height":[F,x],"line-height":[F,_],"scroll-top":[P,w,"scrollTop"],"scroll-left":[P,w,"scrollLeft"]},J={};L.transform&&(Z.transform=[B],J={x:[x,"translateX"],y:[x,"translateY"],rotate:[k],rotateX:[k],rotateY:[k],scale:[w],scaleX:[w],scaleY:[w],skew:[k],skewX:[k],skewY:[k]}),L.transform&&L.backface&&(J.z=[x,"translateZ"],J.rotateZ=[k],J.scaleZ=[w],J.perspective=[y]);var Q=/ms/,V=/s|\./;return t.tram=e}(window.jQuery)},function(t,e,n){n(3),n(7),n(8),n(9),n(10),t.exports=n(11)},function(t,e,n){"use strict";var i=n(0);i.define("brand",t.exports=function(t){var e,n={},r=document,o=t("html"),a=t("body"),s=".w-webflow-badge",u=window.location,c=/PhantomJS/i.test(navigator.userAgent),l="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";function h(){var n=r.fullScreen||r.mozFullScreen||r.webkitIsFullScreen||r.msFullscreenElement||Boolean(r.webkitFullscreenElement);t(e).attr("style",n?"display: none !important;":"")}function f(){var t=a.children(s),n=t.length&&t.get(0)===e,r=i.env("editor");n?r&&t.remove():(t.length&&t.remove(),r||a.append(e))}return n.ready=function(){var n,i,a,s=o.attr("data-wf-status"),d=o.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(d)&&u.hostname!==d&&(s=!0),s&&!c&&(e=e||(n=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),i=t("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").css({marginRight:"8px",width:"16px"}),a=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"),n.append(i,a),n[0]),f(),setTimeout(f,500),t(r).off(l,h).on(l,h))},n})},function(t,e,n){"use strict";var i=window.$,r=n(1)&&i.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
t.exports=function(){var t={VERSION:"1.6.0-Webflow"},e={},n=Array.prototype,i=Object.prototype,o=Function.prototype,a=(n.push,n.slice),s=(n.concat,i.toString,i.hasOwnProperty),u=n.forEach,c=n.map,l=(n.reduce,n.reduceRight,n.filter),h=(n.every,n.some),f=n.indexOf,d=(n.lastIndexOf,Array.isArray,Object.keys),p=(o.bind,t.each=t.forEach=function(n,i,r){if(null==n)return n;if(u&&n.forEach===u)n.forEach(i,r);else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(i.call(r,n[o],o,n)===e)return}else{var s=t.keys(n);for(o=0,a=s.length;o<a;o++)if(i.call(r,n[s[o]],s[o],n)===e)return}return n});t.map=t.collect=function(t,e,n){var i=[];return null==t?i:c&&t.map===c?t.map(e,n):(p(t,function(t,r,o){i.push(e.call(n,t,r,o))}),i)},t.find=t.detect=function(t,e,n){var i;return m(t,function(t,r,o){if(e.call(n,t,r,o))return i=t,!0}),i},t.filter=t.select=function(t,e,n){var i=[];return null==t?i:l&&t.filter===l?t.filter(e,n):(p(t,function(t,r,o){e.call(n,t,r,o)&&i.push(t)}),i)};var m=t.some=t.any=function(n,i,r){i||(i=t.identity);var o=!1;return null==n?o:h&&n.some===h?n.some(i,r):(p(n,function(t,n,a){if(o||(o=i.call(r,t,n,a)))return e}),!!o)};t.contains=t.include=function(t,e){return null!=t&&(f&&t.indexOf===f?-1!=t.indexOf(e):m(t,function(t){return t===e}))},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,i;return function(){e||(e=!0,n=arguments,i=this,r.frame(function(){e=!1,t.apply(i,n)}))}},t.debounce=function(e,n,i){var r,o,a,s,u,c=function c(){var l=t.now()-s;l<n?r=setTimeout(c,n-l):(r=null,i||(u=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,s=t.now();var l=i&&!r;return r||(r=setTimeout(c,n)),l&&(u=e.apply(a,o),a=o=null),u}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,i=arguments.length;n<i;n++){var r=arguments[n];for(var o in r)void 0===e[o]&&(e[o]=r[o])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(d)return d(e);var n=[];for(var i in e)t.has(e,i)&&n.push(i);return n},t.has=function(t,e){return s.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var v=/(.)^/,g={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},w=/\\|'|\r|\n|\u2028|\u2029/g,b=function(t){return"\\"+g[t]};return t.template=function(e,n,i){!n&&i&&(n=i),n=t.defaults({},n,t.templateSettings);var r=RegExp([(n.escape||v).source,(n.interpolate||v).source,(n.evaluate||v).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(r,function(t,n,i,r,s){return a+=e.slice(o,s).replace(w,b),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":i?a+="'+\n((__t=("+i+"))==null?'':__t)+\n'":r&&(a+="';\n"+r+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var s=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var u=function(e){return s.call(this,e,t)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},t}()},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},function(t,e,n){"use strict";var i=n(0);i.define("edit",t.exports=function(t,e,n){if(n=n||{},(i.env("test")||i.env("frame"))&&!n.fixture)return{exit:1};var r,o=t(window),a=t(document.documentElement),s=document.location,u="hashchange",c=n.load||function(){r=!0,window.WebflowEditor=!0,o.off(u,h),function(t){var e=window.document.createElement("iframe");e.src="https://webflow.com/site/third-party-cookie-check.html",e.style.display="none",e.sandbox="allow-scripts allow-same-origin";var n=function n(i){"WF_third_party_cookies_unsupported"===i.data?(g(e,n),t(!1)):"WF_third_party_cookies_supported"===i.data&&(g(e,n),t(!0))};e.onerror=function(){g(e,n),t(!1)},window.addEventListener("message",n,!1),window.document.body.appendChild(e)}(function(e){t.ajax({url:v("https://editor-api.webflow.com/api/editor/view"),data:{siteId:a.attr("data-wf-site")},xhrFields:{withCredentials:!0},dataType:"json",crossDomain:!0,success:f(e)})})},l=!1;try{l=localStorage&&localStorage.getItem&&localStorage.getItem("WebflowEditor")}catch(t){}function h(){r||/\?edit/.test(s.hash)&&c()}function f(t){return function(e){e?(e.thirdPartyCookiesSupported=t,d(m(e.bugReporterScriptPath),function(){d(m(e.scriptPath),function(){window.WebflowEditor(e)})})):console.error("Could not load editor data")}}function d(e,n){t.ajax({type:"GET",url:e,dataType:"script",cache:!0}).then(n,p)}function p(t,e,n){throw console.error("Could not load editor script: "+e),n}function m(t){return t.indexOf("//")>=0?t:v("https://editor-api.webflow.com"+t)}function v(t){return t.replace(/([^:])\/\//g,"$1/")}function g(t,e){window.removeEventListener("message",e,!1),t.remove()}return l?c():s.search?(/[?&](edit)(?:[=&?]|$)/.test(s.search)||/\?edit$/.test(s.href))&&c():o.on(u,h).triggerHandler(u),{}})},function(t,e,n){"use strict";var i=n(0);i.define("links",t.exports=function(t,e){var n,r,o,a={},s=t(window),u=i.env(),c=window.location,l=document.createElement("a"),h="w--current",f=/index\.(html|php)$/,d=/\/$/;function p(e){var i=n&&e.getAttribute("href-disabled")||e.getAttribute("href");if(l.href=i,!(i.indexOf(":")>=0)){var a=t(e);if(l.hash.length>1&&l.host+l.pathname===c.host+c.pathname){if(!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash))return;var s=t(l.hash);s.length&&r.push({link:a,sec:s,active:!1})}else if("#"!==i&&""!==i){var u=l.href===c.href||i===o||f.test(i)&&d.test(o);v(a,h,u)}}}function m(){var t=s.scrollTop(),n=s.height();e.each(r,function(e){var i=e.link,r=e.sec,o=r.offset().top,a=r.outerHeight(),s=.5*n,u=r.is(":visible")&&o+a-s>=t&&o+s<=t+n;e.active!==u&&(e.active=u,v(i,h,u))})}function v(t,e,n){var i=t.hasClass(e);n&&i||(n||i)&&(n?t.addClass(e):t.removeClass(e))}return a.ready=a.design=a.preview=function(){n=u&&i.env("design"),o=i.env("slug")||c.pathname||"",i.scroll.off(m),r=[];for(var t=document.links,e=0;e<t.length;++e)p(t[e]);r.length&&(i.scroll.on(m),m())},a})},function(t,e,n){"use strict";var i=n(0);i.define("scroll",t.exports=function(t){var e=t(document),n=window,r=n.location,o=function(){try{return Boolean(n.frameElement)}catch(t){return!0}}()?null:n.history,a=/^[a-zA-Z0-9][\w:.-]*$/;return{ready:function(){var s=r.href.split("#")[0];e.on("click","a",function(e){if(!(i.env("design")||window.$.mobile&&t(e.currentTarget).hasClass("ui-link")))if("#"!==this.getAttribute("href")){var u=this.href.split("#"),c=u[0]===s?u[1]:null;c&&function(e,s){if(a.test(e)){var u=t("#"+e);if(u.length){if(s&&(s.preventDefault(),s.stopPropagation()),r.hash!==e&&o&&o.pushState&&(!i.env.chrome||"file:"!==r.protocol)){var c=o.state&&o.state.hash;c!==e&&o.pushState({hash:e},"","#"+e)}var l=i.env("editor")?".w-editor-body":"body",h=t("header, "+l+" > .header, "+l+" > .w-nav:not([data-no-scroll])"),f="fixed"===h.css("position")?h.outerHeight():0;n.setTimeout(function(){!function(e,i){var r=t(n).scrollTop(),o=e.offset().top-i;if("mid"===e.data("scroll")){var a=t(n).height()-i,s=e.outerHeight();s<a&&(o-=Math.round((a-s)/2))}var u=1;t("body").add(e).each(function(){var e=parseFloat(t(this).attr("data-scroll-time"),10);!isNaN(e)&&(0===e||e>0)&&(u=e)}),Date.now||(Date.now=function(){return(new Date).getTime()});var c=Date.now(),l=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(t){n.setTimeout(t,15)},h=(472.143*Math.log(Math.abs(r-o)+125)-2e3)*u;!function t(){var e=Date.now()-c;n.scroll(0,function(t,e,n,i){return n>i?e:t+(e-t)*((r=n/i)<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1);var r}(r,o,e,h)),e<=h&&l(t)}()}(u,f)},s?0:300)}}}(c,e)}else e.preventDefault()})}}})},function(t,e,n){"use strict";n(0).define("touch",t.exports=function(t){var e={},n=!document.addEventListener,i=window.getSelection;function r(t){var e,n,r,a=!1,s=!1,u=!1,c=Math.min(Math.round(.04*window.innerWidth),40);function l(t){var i=t.touches;i&&i.length>1||(a=!0,s=!1,i?(u=!0,e=i[0].clientX,n=i[0].clientY):(e=t.clientX,n=t.clientY),r=e)}function h(t){if(a){if(u&&"mousemove"===t.type)return t.preventDefault(),void t.stopPropagation();var l=t.touches,h=l?l[0].clientX:t.clientX,f=l?l[0].clientY:t.clientY,p=h-r;r=h,Math.abs(p)>c&&i&&""===String(i())&&(o("swipe",t,{direction:p>0?"right":"left"}),d()),(Math.abs(h-e)>10||Math.abs(f-n)>10)&&(s=!0)}}function f(t){if(a){if(a=!1,u&&"mouseup"===t.type)return t.preventDefault(),t.stopPropagation(),void(u=!1);s||o("tap",t)}}function d(){a=!1}t.addEventListener("touchstart",l,!1),t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",f,!1),t.addEventListener("touchcancel",d,!1),t.addEventListener("mousedown",l,!1),t.addEventListener("mousemove",h,!1),t.addEventListener("mouseup",f,!1),t.addEventListener("mouseout",d,!1),this.destroy=function(){t.removeEventListener("touchstart",l,!1),t.removeEventListener("touchmove",h,!1),t.removeEventListener("touchend",f,!1),t.removeEventListener("touchcancel",d,!1),t.removeEventListener("mousedown",l,!1),t.removeEventListener("mousemove",h,!1),t.removeEventListener("mouseup",f,!1),t.removeEventListener("mouseout",d,!1),t=null}}function o(e,n,i){var r=t.Event(e,{originalEvent:n});t(n.target).trigger(r,i)}return n&&(t.event.special.tap={bindType:"click",delegateType:"click"}),e.init=function(e){return n?null:(e="string"==typeof e?t(e).get(0):e)?new r(e):null},e.instance=e.init(document),e})},function(t,e,n){"use strict";var i=n(0),r="w-condition-invisible",o="."+r;function a(t){return Boolean(t.$el&&t.$el.closest(o).length)}function s(t,e){for(var n=t;n>=0;n--)if(!a(e[n]))return n;return-1}function u(t,e){for(var n=t;n<=e.length-1;n++)if(!a(e[n]))return n;return-1}function c(t,e,n,i){var o,c,l,h=n.tram,f=Array.isArray,d="w-lightbox-",p=/(^|\s+)/g,m=[];function v(t,e){return m=f(t)?t:[t],c||v.build(),function(t){return t.filter(function(t){return!a(t)})}(m).length>1&&(c.items=c.empty,m.forEach(function(t){var e=T("thumbnail"),n=T("item").append(e);a(t)&&n.addClass(r),c.items=c.items.add(n),$(t.thumbnailUrl||t.url,function(t){t.prop("width")>t.prop("height")?L(t,"wide"):L(t,"tall"),e.append(L(t,"thumbnail-image"))})}),c.strip.empty().append(c.items),L(c.content,"group")),h(O(c.lightbox,"hide").trigger("focus")).add("opacity .3s").start({opacity:1}),L(c.html,"noscroll"),v.show(e||0)}function g(t){return function(e){this===e.target&&(e.stopPropagation(),e.preventDefault(),t())}}v.build=function(){return v.destroy(),(c={html:n(e.documentElement),empty:n()}).arrowLeft=T("control left inactive"),c.arrowRight=T("control right inactive"),c.close=T("control close"),c.spinner=T("spinner"),c.strip=T("strip"),l=new j(c.spinner,A("hide")),c.content=T("content").append(c.spinner,c.arrowLeft,c.arrowRight,c.close),c.container=T("container").append(c.content,c.strip),c.lightbox=T("backdrop hide").append(c.container),c.strip.on("tap",q("item"),x),c.content.on("swipe",k).on("tap",q("left"),w).on("tap",q("right"),b).on("tap",q("close"),y).on("tap",q("image, caption"),b),c.container.on("tap",q("view"),y).on("dragstart",q("img"),E),c.lightbox.on("keydown",S).on("focusin",_),n(i).append(c.lightbox.prop("tabIndex",0)),v},v.destroy=function(){c&&(O(c.html,"noscroll"),c.lightbox.remove(),c=void 0)},v.show=function(t){if(t!==o){var e=m[t];if(!e)return v.hide();if(a(e)){if(t<o){var i=s(t-1,m);t=i>-1?i:t}else{var r=u(t+1,m);t=r>-1?r:t}e=m[t]}var f,d,p=o;return o=t,l.show(),$(e.html&&(f=e.width,d=e.height,"data:image/svg+xml;charset=utf-8,"+encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="'+f+'" height="'+d+'"/>'))||e.url,function(i){if(t===o){var r,a,f=T("figure","figure").append(L(i,"image")),d=T("frame").append(f),v=T("view").append(d);e.html&&((a=(r=n(e.html)).is("iframe"))&&r.on("load",g),f.append(L(r,"embed"))),e.caption&&f.append(T("caption","figcaption").text(e.caption)),c.spinner.before(v),a||g()}function g(){var e,n,i,r;if(l.hide(),t===o){if(M(c.arrowLeft,"inactive",function(t,e){return-1===s(t-1,e)}(t,m)),M(c.arrowRight,"inactive",function(t,e){return-1===u(t+1,e)}(t,m)),c.view?(h(c.view).add("opacity .3s").start({opacity:0}).then((e=c.view,function(){e.remove()})),h(v).add("opacity .3s").add("transform .3s").set({x:t>p?"80px":"-80px"}).start({opacity:1,x:0})):v.css("opacity",1),c.view=v,c.items){O(c.items,"active");var a=c.items.eq(t);L(a,"active"),n=a.position().left,i=c.strip.scrollLeft(),r=c.strip.width(),(n<i||n>r+i)&&h(c.strip).add("scroll-left 500ms").start({"scroll-left":n})}}else v.remove()}}),v}},v.hide=function(){return h(c.lightbox).add("opacity .3s").start({opacity:0}).then(z),v},v.prev=function(){var t=s(o-1,m);t>-1&&v.show(t)},v.next=function(){var t=u(o+1,m);t>-1&&v.show(t)};var w=g(v.prev),b=g(v.next),y=g(v.hide),x=function(t){var e=n(this).index();t.preventDefault(),v.show(e)},k=function(t,e){t.preventDefault(),"left"===e.direction?v.next():"right"===e.direction&&v.prev()},_=function(){this.focus()};function E(t){t.preventDefault()}function S(t){var e=t.keyCode;27===e?v.hide():37===e?v.prev():39===e&&v.next()}function z(){c&&(c.strip.scrollLeft(0).empty(),O(c.html,"noscroll"),L(c.lightbox,"hide"),c.view&&c.view.remove(),O(c.content,"group"),L(c.arrowLeft,"inactive"),L(c.arrowRight,"inactive"),o=c.view=void 0)}function $(t,e){var n=T("img","img");return n.one("load",function(){e(n)}),n.attr("src",t),n}function j(t,e,n){this.$element=t,this.className=e,this.delay=n||200,this.hide()}function A(t,e){return t.replace(p,(e?" .":" ")+d)}function q(t){return A(t,!0)}function L(t,e){return t.addClass(A(e))}function O(t,e){return t.removeClass(A(e))}function M(t,e,n){return t.toggleClass(A(e),n)}function T(t,i){return L(n(e.createElement(i||"div")),t)}return j.prototype.show=function(){var t=this;t.timeoutId||(t.timeoutId=setTimeout(function(){t.$element.removeClass(t.className),delete t.timeoutId},t.delay))},j.prototype.hide=function(){if(this.timeoutId)return clearTimeout(this.timeoutId),void delete this.timeoutId;this.$element.addClass(this.className)},function(){var n=t.navigator.userAgent,i=n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);if(n.indexOf("Android ")>-1&&-1===n.indexOf("Chrome")||i&&!(i[2]>7)){var r=e.createElement("style");e.head.appendChild(r),t.addEventListener("orientationchange",o,!0),o()}function o(){var e=t.innerHeight,n=t.innerWidth,i=".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:"+e+"px}.w-lightbox-view {width:"+n+"px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:"+.86*e+"px}.w-lightbox-image {max-width:"+n+"px;max-height:"+e+"px}.w-lightbox-group .w-lightbox-image {max-height:"+.86*e+"px}.w-lightbox-strip {padding: 0 "+.01*e+"px}.w-lightbox-item {width:"+.1*e+"px;padding:"+.02*e+"px "+.01*e+"px}.w-lightbox-thumbnail {height:"+.1*e+"px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:"+.96*e+"px}.w-lightbox-content {margin-top:"+.02*e+"px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:"+.84*e+"px}.w-lightbox-image {max-width:"+.96*n+"px;max-height:"+.96*e+"px}.w-lightbox-group .w-lightbox-image {max-width:"+.823*n+"px;max-height:"+.84*e+"px}}";r.textContent=i}}(),v}i.define("lightbox",t.exports=function(t){var e,n,r={},o=i.env(),a=c(window,document,t,o?"#lightbox-mountpoint":"body"),s=t(document),u=".w-lightbox";function l(t){var e,i,r=t.el.children(".w-json").html();if(r){try{r=JSON.parse(r)}catch(t){console.error("Malformed lightbox JSON configuration.",t)}!function(t){t.images&&(t.images.forEach(function(t){t.type="image"}),t.items=t.images);t.embed&&(t.embed.type="video",t.items=[t.embed]);t.groupId&&(t.group=t.groupId)}(r),r.items.forEach(function(e){e.$el=t.el}),(e=r.group)?((i=n[e])||(i=n[e]=[]),t.items=i,r.items.length&&(t.index=i.length,i.push.apply(i,r.items))):(t.items=r.items,t.index=0)}else t.items=[]}return r.ready=r.design=r.preview=function(){e=o&&i.env("design"),a.destroy(),n={},s.find(u).webflowLightBox()},jQuery.fn.extend({webflowLightBox:function(){t.each(this,function(n,i){var r=t.data(i,u);r||(r=t.data(i,u,{el:t(i),mode:"images",images:[],embed:""})),r.el.off(u),l(r),e?r.el.on("setting"+u,l.bind(null,r)):r.el.on("tap"+u,function(t){return function(){t.items.length&&a(t.items,t.index||0)}}(r)).on("click"+u,function(t){t.preventDefault()})})}}),r})}]);