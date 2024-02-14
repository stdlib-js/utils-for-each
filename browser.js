// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(t=r.length,e(t)===t)&&r.length>=0&&r.length<=9007199254740991;var t}var t=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+o(n):o(n)+e,i&&(e="-"+e)),e}var s=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function p(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!a(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(e){return"string"==typeof e}var f=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,_=/\.0*e/,E=/(\..*[^0])0*e/;function k(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=h.call(t,E,"$1e"),t=h.call(t,_,"e"),t=h.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,w,"e+0$1"),t=h.call(t,b,"e-0$1"),e.alternate&&(t=h.call(t,y,"$1."),t=h.call(t,v,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var i=r-e.length;return i<0?e:e=t?e+x(i):x(i)+e}var j=String.fromCharCode,V=isNaN,T=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,i,n,a,o,s,l,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,l=0;l<e.length;l++)if(u(i=e[l]))o+=i;else{if(r=void 0!==i.precision,!(i=$(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,V(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,V(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=p(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!V(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=V(a)?String(i.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=k(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=c(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,i,n;for(t=[],n=0,i=A.exec(e);i;)(r=e.slice(n,A.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=A.lastIndex,i=A.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function R(e){return"string"==typeof e}function O(e){var r,t;if(!R(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return F.apply(null,r)}var Z,P=Object.prototype,W=P.toString,G=P.__defineGetter__,L=P.__defineSetter__,N=P.__lookupGetter__,U=P.__lookupSetter__;Z=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(e,r)||U.call(e,r)?(i=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&L&&L.call(e,r,t.set),e};var X=Z;function B(e,r,t){X(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(e){return"boolean"==typeof e}function z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var q=z();function D(){return q&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,J=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&J.call(e,r)}var Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"",ee=D()?function(e){var r,t,i;if(null==e)return H.call(e);t=e[Y],r=K(e,Y);try{e[Y]=void 0}catch(r){return H.call(e)}return i=H.call(e),r?e[Y]=t:delete e[Y],i}:function(e){return H.call(e)},re=Boolean,te=Boolean.prototype.toString,ie=D();function ne(e){return"object"==typeof e&&(e instanceof re||(ie?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function ae(e){return M(e)||ne(e)}function oe(){return new Function("return this;")()}B(ae,"isPrimitive",M),B(ae,"isObject",ne);var ce="object"==typeof self?self:null,se="object"==typeof window?window:null,le="object"==typeof globalThis?globalThis:null,pe=function(e){if(arguments.length){if(!M(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(le)return le;if(ce)return ce;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=pe.document&&pe.document.childNodes,fe=Int8Array,ge=z(),de=Object.prototype.toString,he="function"==typeof Symbol?Symbol:void 0,we="function"==typeof he?he.toStringTag:"",be=ge&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return de.call(e);t=e[we],r=K(e,we);try{e[we]=void 0}catch(r){return de.call(e)}return i=de.call(e),r?e[we]=t:delete e[we],i}:function(e){return de.call(e)},ye="function"==typeof Object.defineProperty?Object.defineProperty:null,ve=Object.defineProperty;function me(e){return"number"==typeof e}function _e(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ee(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+_e(n):_e(n)+e,i&&(e="-"+e)),e}var ke=String.prototype.toLowerCase,xe=String.prototype.toUpperCase;function Se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!me(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ee(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ee(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===xe.call(e.specifier)?xe.call(t):ke.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function je(e){return"string"==typeof e}var Ve=Math.abs,Te=String.prototype.toLowerCase,$e=String.prototype.toUpperCase,Fe=String.prototype.replace,Ae=/e\+(\d)$/,Ie=/e-(\d)$/,Ce=/^(\d+)$/,Re=/^(\d+)e/,Oe=/\.0$/,Ze=/\.0*e/,Pe=/(\..*[^0])0*e/;function We(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!me(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Ve(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Fe.call(t,Pe,"$1e"),t=Fe.call(t,Ze,"e"),t=Fe.call(t,Oe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Fe.call(t,Ae,"e+0$1"),t=Fe.call(t,Ie,"e-0$1"),e.alternate&&(t=Fe.call(t,Ce,"$1."),t=Fe.call(t,Re,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===$e.call(e.specifier)?$e.call(t):Te.call(t)}function Ge(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Le(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ge(i):Ge(i)+e}var Ne=String.fromCharCode,Ue=isNaN,Xe=Array.isArray;function Be(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Me(e){var r,t,i,n,a,o,c,s,l;if(!Xe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(je(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Be(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ue(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ue(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ue(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ue(a)?String(i.arg):Ne(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=We(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ee(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Le(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ze=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function De(e){var r,t,i,n;for(t=[],n=0,i=ze.exec(e);i;)(r=e.slice(n,ze.lastIndex-i[0].length)).length&&t.push(r),t.push(qe(i)),n=ze.lastIndex,i=ze.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function He(e){return"string"==typeof e}function Je(e){var r,t;if(!He(e))throw new TypeError(Je("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[De(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Me.apply(null,r)}var Ke,Qe=Object.prototype,Ye=Qe.toString,er=Qe.__defineGetter__,rr=Qe.__defineSetter__,tr=Qe.__lookupGetter__,ir=Qe.__lookupSetter__;Ke=function(){try{return ye({},"x",{}),!0}catch(e){return!1}}()?ve:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Ye.call(e))throw new TypeError(Je("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ye.call(t))throw new TypeError(Je("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(tr.call(e,r)||ir.call(e,r)?(i=e.__proto__,e.__proto__=Qe,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&er&&er.call(e,r,t.get),o&&rr&&rr.call(e,r,t.set),e};var nr=Ke;function ar(){return/^\s*function\s*([^(]*)/i}var or=/^\s*function\s*([^(]*)/i;!function(e,r,t){nr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(ar,"REGEXP",or);var cr="function"==typeof Object.defineProperty?Object.defineProperty:null,sr=Object.defineProperty;function lr(e){return"number"==typeof e}function pr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ur(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+pr(n):pr(n)+e,i&&(e="-"+e)),e}var fr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase;function dr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!lr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ur(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ur(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===gr.call(e.specifier)?gr.call(t):fr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function hr(e){return"string"==typeof e}var wr=Math.abs,br=String.prototype.toLowerCase,yr=String.prototype.toUpperCase,vr=String.prototype.replace,mr=/e\+(\d)$/,_r=/e-(\d)$/,Er=/^(\d+)$/,kr=/^(\d+)e/,xr=/\.0$/,Sr=/\.0*e/,jr=/(\..*[^0])0*e/;function Vr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!lr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":wr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=vr.call(t,jr,"$1e"),t=vr.call(t,Sr,"e"),t=vr.call(t,xr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=vr.call(t,mr,"e+0$1"),t=vr.call(t,_r,"e-0$1"),e.alternate&&(t=vr.call(t,Er,"$1."),t=vr.call(t,kr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===yr.call(e.specifier)?yr.call(t):br.call(t)}function Tr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function $r(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Tr(i):Tr(i)+e}var Fr=String.fromCharCode,Ar=isNaN,Ir=Array.isArray;function Cr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Rr(e){var r,t,i,n,a,o,c,s,l;if(!Ir(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(hr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Cr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ar(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ar(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=dr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ar(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ar(a)?String(i.arg):Fr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Vr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ur(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=$r(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Zr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Pr(e){var r,t,i,n;for(t=[],n=0,i=Or.exec(e);i;)(r=e.slice(n,Or.lastIndex-i[0].length)).length&&t.push(r),t.push(Zr(i)),n=Or.lastIndex,i=Or.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Wr(e){return"string"==typeof e}function Gr(e){var r,t;if(!Wr(e))throw new TypeError(Gr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Pr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Rr.apply(null,r)}var Lr,Nr=Object.prototype,Ur=Nr.toString,Xr=Nr.__defineGetter__,Br=Nr.__defineSetter__,Mr=Nr.__lookupGetter__,zr=Nr.__lookupSetter__;Lr=function(){try{return cr({},"x",{}),!0}catch(e){return!1}}()?sr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Ur.call(e))throw new TypeError(Gr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ur.call(t))throw new TypeError(Gr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Mr.call(e,r)||zr.call(e,r)?(i=e.__proto__,e.__proto__=Nr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Xr&&Xr.call(e,r,t.get),o&&Br&&Br.call(e,r,t.set),e};var qr=Lr,Dr=Array.isArray?Array.isArray:function(e){return"[object Array]"===be(e)};function Hr(e){return null!==e&&"object"==typeof e}function Jr(e){var r,t,i,n;if(("Object"===(t=be(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=or.exec(i.toString()))return r[1]}return Hr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}!function(e,r,t){qr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Hr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Gr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Dr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Hr));var Kr="function"==typeof t||"object"==typeof fe||"function"==typeof ue?function(e){return Jr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Jr(e).toLowerCase():r};function Qr(e){return"number"==typeof e}function Yr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function et(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Yr(n):Yr(n)+e,i&&(e="-"+e)),e}var rt=String.prototype.toLowerCase,tt=String.prototype.toUpperCase;function it(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Qr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=et(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=et(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===tt.call(e.specifier)?tt.call(t):rt.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function nt(e){return"string"==typeof e}var at=Math.abs,ot=String.prototype.toLowerCase,ct=String.prototype.toUpperCase,st=String.prototype.replace,lt=/e\+(\d)$/,pt=/e-(\d)$/,ut=/^(\d+)$/,ft=/^(\d+)e/,gt=/\.0$/,dt=/\.0*e/,ht=/(\..*[^0])0*e/;function wt(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Qr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":at(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=st.call(t,ht,"$1e"),t=st.call(t,dt,"e"),t=st.call(t,gt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=st.call(t,lt,"e+0$1"),t=st.call(t,pt,"e-0$1"),e.alternate&&(t=st.call(t,ut,"$1."),t=st.call(t,ft,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ct.call(e.specifier)?ct.call(t):ot.call(t)}function bt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function yt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+bt(i):bt(i)+e}var vt=String.fromCharCode,mt=isNaN,_t=Array.isArray;function Et(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function kt(e){var r,t,i,n,a,o,c,s,l;if(!_t(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(nt(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Et(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,mt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,mt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=it(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!mt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=mt(a)?String(i.arg):vt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=wt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=et(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=yt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function St(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function jt(e){var r,t,i,n;for(t=[],n=0,i=xt.exec(e);i;)(r=e.slice(n,xt.lastIndex-i[0].length)).length&&t.push(r),t.push(St(i)),n=xt.lastIndex,i=xt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Vt(e){return"string"==typeof e}function Tt(e){var r,t,i;if(!Vt(e))throw new TypeError(Tt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=jt(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return kt.apply(null,t)}return function(e,t,i){var n,a;if(!r(e))throw new TypeError(Tt("invalid argument. First argument must be a collection. Value: `%s`.",e));if("function"!==Kr(t))throw new TypeError(Tt("invalid argument. Second argument must be a function. Value: `%s`.",t));for(n=e.length,a=0;a<n;a++)t.call(i,e[a],a,e),n=e.length;return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).forEach=r();
//# sourceMappingURL=browser.js.map
