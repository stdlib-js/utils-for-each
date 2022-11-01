// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function e(e,o,i){var n,d;if(!t(e))throw new TypeError(s("0jpBO",e));if(!r(o))throw new TypeError(s("0jp2S",o));for(n=e.length,d=0;d<n;d++)o.call(i,e[d],d,e),n=e.length;return e}export{e as default};
//# sourceMappingURL=index.mjs.map
