(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _styles_normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1630);
/* harmony import */ var _styles_normalize_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9718);
/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6961);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(204);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8998);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6921);
/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9737);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8577);
/* harmony import */ var next_plausible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6112);
/* harmony import */ var next_plausible__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_plausible__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_4__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__]);
([wagmi__WEBPACK_IMPORTED_MODULE_4__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  chains,
  provider
} = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet], [(0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__.infuraProvider)({
  apiKey: "2JiDPAHVQOfT2Q6vywSZfLS0pU9"
}), (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()]);
const {
  connectors
} = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.getDefaultWallets)({
  appName: 'NFT PFP',
  chains
});
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({
  autoConnect: true,
  connectors,
  provider
});
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_plausible__WEBPACK_IMPORTED_MODULE_8___default()), {
    domain: "mintyourpfp.xyz",
    trackOutboundLinks: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {
      client: wagmiClient,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.RainbowKitProvider, {
        chains: chains,
        modalSize: "compact",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 204:
/***/ (() => {



/***/ }),

/***/ 9718:
/***/ (() => {



/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 1630:
/***/ (() => {



/***/ }),

/***/ 6112:
/***/ ((module) => {

"use strict";
module.exports = require("next-plausible");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6921:
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 8998:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ 9737:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/infura");;

/***/ }),

/***/ 8577:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1336));
module.exports = __webpack_exports__;

})();