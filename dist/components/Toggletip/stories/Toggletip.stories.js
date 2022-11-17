"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withArrow = exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Toggletip = require("components/Toggletip");
var _Button = require("components/Button");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'ui-components/Toggletip',
  component: _Toggletip.Toggletip,
  decorators: [function (story) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "5",
        hd: "4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
          "justify-content": "center",
          "align-items": "center",
          addClass: "u-my-5",
          children: story()
        })
      })
    });
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toggletip.Toggletip, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggletip.ToggletipButton, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "open toggletip",
        size: "small",
        hasAriaLabel: true,
        icon: {
          name: 'check',
          size: 'big'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toggletip.ToggletipContent, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "u-my-2",
        children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsam!"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        size: "small",
        label: "Learn more"
      })]
    })]
  });
};
exports.Default = Default;
Default.storyName = 'default';
var withArrow = function withArrow() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toggletip.Toggletip, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Toggletip.ToggletipButton, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "open toggletip",
        size: "small",
        hasAriaLabel: true,
        icon: {
          name: 'check',
          size: 'big'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Toggletip.ToggletipContent, {
      hasArrow: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "u-my-2",
        children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ipsam!"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        size: "small",
        label: "Learn more"
      })]
    })]
  });
};
exports.withArrow = withArrow;
withArrow.storyName = 'with arrow';