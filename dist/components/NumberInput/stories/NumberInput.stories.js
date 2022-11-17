"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withIcon = exports.default = exports.controlled = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _NumberInput = require("components/NumberInput");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'ui-components/NumberInput',
  component: _NumberInput.NumberInput,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_NumberInput.NumberInput, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberInputField, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_NumberInput.NumberInputStepper, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberIncrementStepper, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberDecrementStepper, {})]
    })]
  });
};
exports.Default = Default;
Default.storyName = 'default';
var controlled = function controlled() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_NumberInput.NumberInput, {
    max: 10,
    min: 5,
    defaultValue: 5,
    keepWithinRange: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberInputField, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_NumberInput.NumberInputStepper, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberIncrementStepper, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberDecrementStepper, {})]
    })]
  });
};
exports.controlled = controlled;
controlled.storyName = 'keep with in a range';
var withIcon = function withIcon() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_NumberInput.NumberInput, {
    max: 10,
    min: 5,
    defaultValue: 5,
    keepWithinRange: true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberInputField, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_NumberInput.NumberInputStepper, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberIncrementStepper, {
        children: "\uD83C\uDF1E"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput.NumberDecrementStepper, {
        children: "\uD83C\uDF1A"
      })]
    })]
  });
};
exports.withIcon = withIcon;
withIcon.storyName = 'with other icon';