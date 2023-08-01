// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;function e(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&(r=e.length,t(r)===r)&&e.length>=0&&e.length<=9007199254740991;var r}var r=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,u=Object.defineProperty,i=Object.prototype,l=i.toString,f=i.__defineGetter__,c=i.__defineSetter__,a=i.__lookupGetter__,p=i.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?u:function(t,e,r){var n,o,u,y;if("object"!=typeof t||null===t||"[object Array]"===l.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(t,e)||p.call(t,e)?(n=t.__proto__,t.__proto__=i,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,y="set"in r,o&&(u||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&f&&f.call(t,e,r.get),y&&c&&c.call(t,e,r.set),t};var y=o;function b(t,e,r){y(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(t){var e,r,n,o,u;if(null==t)return g.call(t);r=t[_],u=_,e=null!=(o=t)&&w.call(o,u);try{t[_]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[_]=r:delete t[_],n}:function(t){return g.call(t)},h=Boolean.prototype.toString;var m=d();function S(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function E(t){return s(t)||S(t)}function O(){return new Function("return this;")()}b(E,"isPrimitive",s),b(E,"isObject",S);var A="object"==typeof self?self:null,B="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof T?T:null;var x=function(t){if(arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(A)return A;if(B)return B;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),C=x.document&&x.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;b(k,"REGEXP",G);var L=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function M(t){return null!==t&&"object"==typeof t}function F(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=G.exec(n.toString()))return e[1]}return M(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}b(M,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!L(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(M));var I="function"==typeof r||"object"==typeof V||"function"==typeof C?function(t){return F(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?F(t).toLowerCase():e};function R(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function U(t,r,n){var o,u;if(!e(t))throw new TypeError(R("0jpBO",t));if("function"!==I(r))throw new TypeError(R("0jp2S",r));for(o=t.length,u=0;u<o;u++)r.call(n,t[u],u,t),o=t.length;return t}export{U as default};
//# sourceMappingURL=mod.js.map
