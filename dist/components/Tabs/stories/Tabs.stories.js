"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithRenderIcon = exports.StylingSelected = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Tabs = require("components/Tabs");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'ui-components/Tabs',
  component: _Tabs.Tabs,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.Tabs, _objectSpread(_objectSpread({}, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.TabList, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.Tab, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.Tab, {
        children: "Two"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.Tab, {
        children: "Three"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.TabPanels, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.TabPanel, {
        children: "First panel 1\uFE0F\u20E3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.TabPanel, {
        children: "Second panel 2\uFE0F\u20E3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.TabPanel, {
        children: "Third panel 3\uFE0F\u20E3"
      })]
    })]
  }));
};
var TemplateTab = function TemplateTab(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.Tabs, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.TabList, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.Tab, {
        children: "One"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.Tab, _objectSpread(_objectSpread({}, args), {}, {
        children: "Two"
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.Tab, {
        children: "Three"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Tabs.TabPanels, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.TabPanel, {
        children: "First panel 1\uFE0F\u20E3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.TabPanel, {
        children: "Second panel 2\uFE0F\u20E3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.TabPanel, {
        children: "Third panel 3\uFE0F\u20E3"
      })]
    })]
  });
};
var Default = Template.bind({});
exports.Default = Default;
Default.storyName = 'default';
Default.args = {
  defaultIndex: 0
};
var StylingSelected = TemplateTab.bind({});
exports.StylingSelected = StylingSelected;
StylingSelected.storyName = 'styling selected state';
StylingSelected.args = {
  selected: 'u-bg-success-300'
};
var WithRenderIcon = TemplateTab.bind({});
exports.WithRenderIcon = WithRenderIcon;
WithRenderIcon.storyName = 'using render prop with icon';
WithRenderIcon.args = {
  icon: function icon(isSelected) {
    return isSelected ? '🥳' : '😥';
  }
};