"use strict";
exports.id = 135;
exports.ids = [135];
exports.modules = {

/***/ 3231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* binding */ LoadingIcon),
/* harmony export */   "Pz": () => (/* binding */ ErrorIcon),
/* harmony export */   "e0": () => (/* binding */ ArrowIcon),
/* harmony export */   "tm": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function ArrowIcon(_ref) {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: "23",
    height: "23",
    viewBox: "0 0 23 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      opacity: props.disabled ? '0.5' : '1'
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.5 2.01072e-06C17.8513 3.12122e-06 23 5.14873 23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 9.00232e-07 17.8513 2.01072e-06 11.5C3.12122e-06 5.14873 5.14873 9.00232e-07 11.5 2.01072e-06ZM18.6763 12.0843L12.9169 17.3458C12.5635 17.6687 11.9905 17.6687 11.637 17.3458C11.2836 17.0229 11.2836 16.4994 11.637 16.1766L15.8515 12.3265L4.96406 12.3265C4.46424 12.3265 4.05905 11.9563 4.05905 11.4997C4.05905 11.0431 4.46424 10.6729 4.96406 10.6729L15.8515 10.6729L11.637 6.82284C11.2836 6.49997 11.2836 5.97649 11.637 5.65362C11.9905 5.33075 12.5635 5.33075 12.9169 5.65362L18.6763 10.9151C19.0298 11.238 19.0298 11.7614 18.6763 12.0843Z",
      fill: "#4F95FF"
    })
  });
}
function LoadingIcon({
  theme
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      fill: "none",
      stroke: theme === 'light' ? '#B4D2FF' : '#4F95FF',
      xmlns: "http://www.w3.org/2000/svg",
      className: "jsx-3655573836",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M12.5 2.5C18.0229 2.5 22.5 6.97716 22.5 12.5C22.5 18.0229 18.0229 22.5 12.5 22.5C6.97716 22.5 2.5 18.0229 2.5 12.5C2.5 6.97716 6.97716 2.5 12.5 2.5Z",
        strokeOpacity: "0.3",
        strokeWidth: "4",
        strokeLinecap: "round",
        className: "jsx-3655573836"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M12.5 2.5C18.0229 2.5 22.5 6.97716 22.5 12.5",
        strokeWidth: "4",
        strokeLinecap: "round",
        className: "jsx-3655573836"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3655573836",
      children: ["@-webkit-keyframes spin-jsx-3655573836{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes spin-jsx-3655573836{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "svg.jsx-3655573836{-webkit-animation:spin-jsx-3655573836 1s linear infinite;animation:spin-jsx-3655573836 1s linear infinite;}"]
    })]
  });
}
function SuccessIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "24",
    height: "23",
    viewBox: "0 0 24 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M12 0C18.3513 0 23.5 5.14873 23.5 11.5C23.5 17.8513 18.3513 23 12 23C5.64873 23 0.5 17.8513 0.5 11.5C0.5 5.14873 5.64873 0 12 0Z",
      fill: "#4F95FF",
      fillOpacity: "0.2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M10.8671 17.86L18.5871 8.6L17.0071 7.26L10.7871 14.74L7.94713 11.7L6.54713 13.2L10.8671 17.86Z",
      fill: "#4F95FF"
    })]
  });
}
function ErrorIcon() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: "23",
    height: "23",
    viewBox: "0 0 23 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.5 0C5.14886 0 0 5.14886 0 11.5C0 17.8511 5.14886 23 11.5 23C17.8511 23 23 17.8511 23 11.5C23 5.14886 17.8511 0 11.5 0ZM15.3755 9.10277C15.5659 8.9056 15.6713 8.64151 15.6689 8.3674C15.6665 8.09328 15.5566 7.83107 15.3628 7.63723C15.1689 7.4434 14.9067 7.33345 14.6326 7.33107C14.3585 7.32869 14.0944 7.43406 13.8972 7.6245L11.5 10.0217L9.10277 7.6245C9.00633 7.52465 8.89097 7.445 8.76342 7.39021C8.63587 7.33542 8.49869 7.30658 8.35987 7.30537C8.22106 7.30417 8.08339 7.33062 7.95491 7.38319C7.82643 7.43575 7.7097 7.51338 7.61154 7.61154C7.51338 7.7097 7.43575 7.82643 7.38319 7.95491C7.33062 8.08339 7.30417 8.22106 7.30537 8.35987C7.30658 8.49869 7.33542 8.63587 7.39021 8.76342C7.445 8.89097 7.52465 9.00633 7.6245 9.10277L10.0217 11.5L7.6245 13.8972C7.52465 13.9937 7.445 14.109 7.39021 14.2366C7.33542 14.3641 7.30658 14.5013 7.30537 14.6401C7.30417 14.7789 7.33062 14.9166 7.38319 15.0451C7.43575 15.1736 7.51338 15.2903 7.61154 15.3885C7.7097 15.4866 7.82643 15.5642 7.95491 15.6168C8.08339 15.6694 8.22106 15.6958 8.35987 15.6946C8.49869 15.6934 8.63587 15.6646 8.76342 15.6098C8.89097 15.555 9.00633 15.4754 9.10277 15.3755L11.5 12.9783L13.8972 15.3755C14.0944 15.5659 14.3585 15.6713 14.6326 15.6689C14.9067 15.6665 15.1689 15.5566 15.3628 15.3628C15.5566 15.1689 15.6665 14.9067 15.6689 14.6326C15.6713 14.3585 15.5659 14.0944 15.3755 13.8972L12.9783 11.5L15.3755 9.10277Z",
      fill: "#ED7B7B"
    })
  });
}

/***/ }),

/***/ 9144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3231);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Button({
  as,
  href,
  variant,
  loading,
  state,
  disabled,
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [as === 'a' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
      href: href,
      target: "_blank",
      rel: "noreferrer",
      style: style,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["4273726127", [state === 'error' ? '#d55555' : state === 'success' ? '#44c4a4' : variant === 'secondary' ? 'rgba(82, 152, 255, 0.15)' : '#3889ff', variant === 'secondary' ? '#5298ff' : '#fff', variant === 'secondary' ? 'none' : 'var(--shadow)']]]),
      children: [children, loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_assets_icons__WEBPACK_IMPORTED_MODULE_1__/* .LoadingIcon */ .Ho, {
        theme: "light"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      onClick: onClick,
      type: "button",
      style: style,
      disabled: disabled,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["4273726127", [state === 'error' ? '#d55555' : state === 'success' ? '#44c4a4' : variant === 'secondary' ? 'rgba(82, 152, 255, 0.15)' : '#3889ff', variant === 'secondary' ? '#5298ff' : '#fff', variant === 'secondary' ? 'none' : 'var(--shadow)']]]),
      children: [children, loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_assets_icons__WEBPACK_IMPORTED_MODULE_1__/* .LoadingIcon */ .Ho, {
        theme: "light"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4273726127",
      dynamic: [state === 'error' ? '#d55555' : state === 'success' ? '#44c4a4' : variant === 'secondary' ? 'rgba(82, 152, 255, 0.15)' : '#3889ff', variant === 'secondary' ? '#5298ff' : '#fff', variant === 'secondary' ? 'none' : 'var(--shadow)'],
      children: [`button.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;gap:1rem;background:${state === 'error' ? '#d55555' : state === 'success' ? '#44c4a4' : variant === 'secondary' ? 'rgba(82, 152, 255, 0.15)' : '#3889ff'};line-height:1.6;padding:0.75rem 1.25rem;font-size:1.125rem;border:none;width:100%;border-radius:0.5rem;font-weight:700;color:${variant === 'secondary' ? '#5298ff' : '#fff'};box-shadow:${variant === 'secondary' ? 'none' : 'var(--shadow)'};-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;}`, "button.__jsx-style-dynamic-selector:hover,button.__jsx-style-dynamic-selector:focus-visible,a.__jsx-style-dynamic-selector:hover,a.__jsx-style-dynamic-selector:focus-visible{-webkit-transform:scale(1.025);-ms-transform:scale(1.025);transform:scale(1.025);}", "button.__jsx-style-dynamic-selector:disabled,a.__jsx-style-dynamic-selector:disabled{-webkit-transform:unset;-ms-transform:unset;transform:unset;cursor:not-allowed;background:#8dbbff;}"]
    })]
  });
}

/***/ }),

/***/ 4405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Feedback)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3231);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1099);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Feedback({
  setIsOpen
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    setStatus('loading');
    const res = await fetch('/api/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text
      })
    });

    if (res.ok === true) {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success('Feedback sent!');
      setStatus('success');
    } else {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error(res.statusText);
      setStatus('error');
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      setIsOpen: setIsOpen,
      padding: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
        onSubmit: async e => await handleSubmit(e),
        className: "jsx-2686896993",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
          type: "text",
          name: "text",
          id: "text",
          placeholder: "It would be cool if...",
          autoFocus: true,
          onChange: e => setText(e.target.value),
          className: "jsx-2686896993"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
          type: "submit",
          disabled: !text,
          className: "jsx-2686896993",
          children: status === 'loading' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_assets_icons__WEBPACK_IMPORTED_MODULE_1__/* .LoadingIcon */ .Ho, {}) : status === 'error' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_assets_icons__WEBPACK_IMPORTED_MODULE_1__/* .ErrorIcon */ .Pz, {}) : status === 'success' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_assets_icons__WEBPACK_IMPORTED_MODULE_1__/* .SuccessIcon */ .tm, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_assets_icons__WEBPACK_IMPORTED_MODULE_1__/* .ArrowIcon */ .e0, {
            disabled: !text || text.length < 3
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2686896993",
      children: ["form.jsx-2686896993{position:relative;}", "form.jsx-2686896993>*.jsx-2686896993{outline-color:var(--color-primary);}", "form.jsx-2686896993 input.jsx-2686896993{background:#fff;border:none;font-size:1.25rem;border-radius:0.5rem;padding:1rem 3.5rem 1rem 1.25rem;width:100%;}", "form.jsx-2686896993 button.jsx-2686896993{background:none;border:none;position:absolute;border-radius:5rem;width:2rem;height:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:50%;right:0.75rem;bottom:0;-webkit-transform:translateY(-50%) scale(1.3);-ms-transform:translateY(-50%) scale(1.3);transform:translateY(-50%) scale(1.3);}", "form.jsx-2686896993 button.jsx-2686896993:disabled{cursor:not-allowed;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1166);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4405);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, _Feedback__WEBPACK_IMPORTED_MODULE_5__]);
([wagmi__WEBPACK_IMPORTED_MODULE_2__, _Feedback__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Footer() {
  const {
    0: isHome,
    1: setIsHome
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setIsHome(window.location.pathname === '/'), []);
  const {
    chain
  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useNetwork)();
  const {
    0: mounted,
    1: setMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setMounted(true), []);
  const {
    0: isFeedbackOpen,
    1: setIsFeedbackOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const etherscanUrl = chain?.id === 5 ? `https://goerli.etherscan.io/address/${(0,_utils_contract__WEBPACK_IMPORTED_MODULE_4__/* .getContractAddress */ .CR)(chain?.id)}` : `https://etherscan.io/address/${(0,_utils_contract__WEBPACK_IMPORTED_MODULE_4__/* .getContractAddress */ .CR)(chain?.id)}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("footer", {
      className: "jsx-1531219829",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "jsx-1531219829" + " " + "links",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          href: "https://twitter.com/gregskril",
          target: "_blank",
          rel: "noreferrer",
          className: "jsx-1531219829",
          children: "@gregskril"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "jsx-1531219829" + " " + "links",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          className: "jsx-1531219829",
          children: [isHome && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/ens",
            children: "ENS Avatar"
          }), !isHome && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: "Home"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          href: "https://github.com/gskril/nft-pfp",
          target: "_blank",
          rel: "noreferrer",
          className: "jsx-1531219829",
          children: "GitHub"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: () => setIsFeedbackOpen(!isFeedbackOpen),
          className: "jsx-1531219829",
          children: "Feedback"
        }), isFeedbackOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Feedback__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          setIsOpen: setIsFeedbackOpen
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1531219829",
      children: ["footer.jsx-1531219829{gap:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.125rem;font-weight:500;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "@media (min-width:560px){footer.jsx-1531219829{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;gap:2rem;}}", ".links.jsx-1531219829{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:2rem;}", ".links.jsx-1531219829>*.jsx-1531219829{opacity:0.6;}", ".links.jsx-1531219829>*.jsx-1531219829:hover{opacity:1;cursor:pointer;}", ".links.jsx-1531219829 button.jsx-1531219829{background:none;border:none;}"]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Hero({
  title
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "jsx-4236030817" + " " + "hero",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        className: "jsx-4236030817",
        children: "The easiest way to"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
        className: "jsx-4236030817",
        children: title
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "4236030817",
      children: [".hero.jsx-4236030817{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:0.25rem;text-align:center;}", "@media (min-width:560px){.hero.jsx-4236030817{gap:0.5rem;}}", ".hero.jsx-4236030817 span.jsx-4236030817{opacity:80%;line-height:1;font-weight:500;font-size:1.5rem;}", "@media (min-width:560px){.hero.jsx-4236030817 span.jsx-4236030817{font-size:1.625rem;}}", ".hero.jsx-4236030817 h1.jsx-4236030817{line-height:1;font-size:3rem;color:var(--color-primary);}", "@media (min-width:560px){.hero.jsx-4236030817 h1.jsx-4236030817{font-size:4.5rem;}}"]
    })]
  });
}

/***/ }),

/***/ 6288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
/* harmony import */ var _hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6212);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9458);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_4__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Layout({
  hero,
  children,
  size
}) {
  const isMounted = (0,_hooks_useIsMounted__WEBPACK_IMPORTED_MODULE_3__/* .useIsMounted */ .t)();
  const {
    address
  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1736645239", [size === 'lg' ? '50rem' : '22rem']]]) + " " + "layout",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1736645239", [size === 'lg' ? '50rem' : '22rem']]]) + " " + "nav",
        children: address && isMounted && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1736645239", [size === 'lg' ? '50rem' : '22rem']]]) + " " + "connect-wrapper",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton, {
            showBalance: false,
            chainStatus: "none"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("main", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1736645239", [size === 'lg' ? '50rem' : '22rem']]]),
        children: [hero, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1736645239", [size === 'lg' ? '50rem' : '22rem']]]) + " " + "interactive",
          children: children
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1736645239",
      dynamic: [size === 'lg' ? '50rem' : '22rem'],
      children: [".layout.__jsx-style-dynamic-selector{padding:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:2.5rem;min-height:100vh;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}", "@media (min-width:560px){.layout.__jsx-style-dynamic-selector{padding:1.5rem 2rem;}}", ".layout.__jsx-style-dynamic-selector .nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", "@media (min-width:47em){.layout.__jsx-style-dynamic-selector .nav.__jsx-style-dynamic-selector .connect-wrapper.__jsx-style-dynamic-selector{position:absolute;}}", ".layout.__jsx-style-dynamic-selector main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:1.5rem;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", `.layout.__jsx-style-dynamic-selector .interactive.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem;width:100%;max-width:${size === 'lg' ? '50rem' : '22rem'};}`]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function Modal({
  setIsOpen,
  canClose = true,
  children,
  padding = true
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1866543787", [padding ? '1.5rem' : '0']]]) + " " + "modal",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        onClick: () => {
          if (canClose) {
            setIsOpen(false);
          }
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1866543787", [padding ? '1.5rem' : '0']]]) + " " + "background"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default().dynamic([["1866543787", [padding ? '1.5rem' : '0']]]) + " " + "content",
        children: children
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1866543787",
      dynamic: [padding ? '1.5rem' : '0'],
      children: [".modal.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100vw;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:100;background:rgba(0,0,0,0.5);-webkit-backdrop-filter:blur(0.5rem);backdrop-filter:blur(0.5rem);padding:1.5rem;}", ".background.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100vw;height:100vh;}", `.content.__jsx-style-dynamic-selector{background:#fff;border-radius:0.5rem;max-width:34rem;padding:${padding ? '1.5rem' : '0'};width:100%;z-index:101;}`, "form.__jsx-style-dynamic-selector{position:relative;}", "form.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{outline-color:var(--color-primary);}", "form.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{background:#fff;border:none;font-size:1.25rem;border-radius:0.5rem;padding:1rem 3.5rem 1rem 1.25rem;width:100%;}", "form.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{background:none;border:none;position:absolute;border-radius:5rem;width:2rem;height:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:50%;right:0.75rem;bottom:0;-webkit-transform:translateY(-50%) scale(1.3);-ms-transform:translateY(-50%) scale(1.3);transform:translateY(-50%) scale(1.3);}", "form.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:disabled{cursor:not-allowed;}"]
    })]
  });
}

/***/ }),

/***/ 6212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIsMounted() {
  const {
    0: isMounted,
    1: setIsMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  return isMounted;
}

/***/ }),

/***/ 1166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CR": () => (/* binding */ getContractAddress),
/* harmony export */   "MQ": () => (/* binding */ getEtherscanUrl),
/* harmony export */   "YT": () => (/* binding */ getOpenseaUrl),
/* harmony export */   "dL": () => (/* binding */ ABI),
/* harmony export */   "oU": () => (/* binding */ ENS_RESOLVER_ABI)
/* harmony export */ });
const ABI = [{
  inputs: [{
    internalType: 'address',
    name: 'recipient',
    type: 'address'
  }, {
    internalType: 'string',
    name: 'tokenURI',
    type: 'string'
  }],
  name: 'mintNFT',
  outputs: [{
    internalType: 'uint256',
    name: '',
    type: 'uint256'
  }],
  stateMutability: 'nonpayable',
  type: 'function'
}];
const getContractAddress = chainId => {
  return chainId === 1 ? '0x8dA3dA022d7a5224615c8F2E3fFdDc5B883B24A2' : '0x87E0a4fC215C13d6727f0dbB1700875dc02cBF16';
};
const getEtherscanUrl = (data, chain) => {
  return chain?.id === 1 ? `https://expedition.altcoinchain.org/tx/${data.hash}` : `https://expedition.altcoinchain.org/tx/${data.hash}`;
};
const getOpenseaUrl = chain => {
  return chain?.id === 5 ? 'https://testnets.opensea.io/collection/opennft-iboh5rhaks?search[sortAscending]=false&search[sortBy]=CREATED_DATE' : 'https://expedition.altcoinchain.org';
};
/**
 * ==============================
 * ENS CONTRACT CONSTANTS
 * ==============================
 */

const ENS_RESOLVER_ABI = [{
  constant: false,
  inputs: [{
    internalType: 'bytes32',
    name: 'node',
    type: 'bytes32'
  }, {
    internalType: 'string',
    name: 'key',
    type: 'string'
  }, {
    internalType: 'string',
    name: 'value',
    type: 'string'
  }],
  name: 'setText',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}];

/***/ })

};
;