"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 9576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const NOTIFY_API = process.env.NOTIFY_API;
async function handler(req, res) {
  const {
    text
  } = req.body;
  const endpoint = `${NOTIFY_API}?text=Feedback from mintyourpfp: `;
  await fetch(endpoint + text).then(res => res.json()).then(json => {
    if (json.error) throw new Error(json.error);
    res.status(200).json(json);
  }).catch(err => res.status(500).json({
    error: err
  }));
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9576));
module.exports = __webpack_exports__;

})();