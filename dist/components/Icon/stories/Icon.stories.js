"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.small = exports.normal = exports.default = exports.big = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Icon = require("components/Icon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'ui-components/Icon',
  component: _Icon.Icon,
  argTypes: {
    name: {
      options: _Icon.iconList,
      control: {
        type: 'select'
      }
    }
  },
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
          children: story()
        })
      })
    });
  }]
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, _objectSpread({}, args));
};
var small = Template.bind({});
exports.small = small;
small.args = {
  name: 'close',
  size: 'small'
};
small.storyName = 'small';
var normal = Template.bind({});
exports.normal = normal;
normal.args = {
  name: 'close',
  size: 'normal'
};
normal.storyName = 'normal';
var big = Template.bind({});
exports.big = big;
big.args = {
  name: 'close',
  size: 'big'
};
big.storyName = 'big';