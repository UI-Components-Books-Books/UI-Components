"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithVisibleLabel = exports.WithOtherIcon = exports.Disabled = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Select = require("components/Select");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'ui-components/Select',
  component: _Select.Select,
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
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.Select, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
      value: 1,
      children: "Lorem, ipsum dolor."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
      value: 2,
      children: "Lorem, ipsum dolor."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
      value: 3,
      children: "Lorem, ipsum dolor."
    })]
  }));
};
var Default = Template.bind({});
exports.Default = Default;
Default.storyName = 'default';
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.storyName = 'disabled state';
Disabled.args = {
  isDisabled: true
};
var WithOtherIcon = Template.bind({});
exports.WithOtherIcon = WithOtherIcon;
WithOtherIcon.storyName = 'with other icon';
WithOtherIcon.args = {
  icon: 'check'
};
var WithVisibleLabel = Template.bind({});
exports.WithVisibleLabel = WithVisibleLabel;
WithVisibleLabel.storyName = 'with visible label';
WithVisibleLabel.args = {
  isLabelVisible: true
};