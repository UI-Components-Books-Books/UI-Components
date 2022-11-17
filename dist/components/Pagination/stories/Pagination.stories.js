"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithMoreButtons = exports.WithIcon = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Pagination = require("components/Pagination");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'ui-components/Pagination',
  component: _Pagination.Pagination,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.Pagination, {
    count: 10
  });
};
exports.Default = Default;
Default.storyName = 'default';
var WithMoreButtons = function WithMoreButtons() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.Pagination, {
    count: 10,
    showLastButton: true,
    showFirstButton: true
  });
};
exports.WithMoreButtons = WithMoreButtons;
WithMoreButtons.storyName = 'with more buttons';
var WithIcon = function WithIcon() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.Pagination, {
    count: 10,
    showLastButton: true,
    showFirstButton: true,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.PaginationItem, _objectSpread(_objectSpread({}, item), {}, {
        icons: {
          previous: 'arrow_drop_down',
          next: 'arrow_drop_up',
          last: 'volume_off',
          first: 'volume_on'
        }
      }));
    }
  });
};
exports.WithIcon = WithIcon;
WithIcon.storyName = 'with other icons';