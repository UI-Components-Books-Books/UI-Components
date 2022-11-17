"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Input = require("components/Input");
var _Icon = require("components/Icon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'ui-components/InputGroup',
  component: _Input.InputGroup,
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
        children: story()
      })
    });
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Input.InputGroup, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Input.InputStyle, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.InputLeftAddon, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
          name: "play"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, {
        placeholder: "With addons",
        addClass: "u-mt-3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.InputRightAddon, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
          name: "check"
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.InputStyle, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, {
        placeholder: "With InputStyle",
        addClass: "u-mt-3"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.Input, {
      placeholder: "Alone",
      addClass: "u-mt-3"
    })]
  });
};
exports.Default = Default;
Default.storyName = 'default';