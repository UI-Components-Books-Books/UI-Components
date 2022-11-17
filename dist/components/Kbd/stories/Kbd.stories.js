"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Kbd = require("components/Kbd");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'ui-components/Kbd',
  component: _Kbd.Kbd,
  decorators: [function (story) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "3",
        hd: "2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
          "justify-content": "center",
          "align-items": "center",
          children: story()
        })
      })
    });
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Kbd.Kbd, {
      children: "Ctrl"
    }), " + ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Kbd.Kbd, {
      children: "Alt"
    }), " + ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Kbd.Kbd, {
      children: "D"
    })]
  });
};
exports.Default = Default;
Default.storyName = 'default';