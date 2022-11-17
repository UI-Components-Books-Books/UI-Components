"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAriaLabel = exports.default = exports.WithIssuingValue = exports.DifferentStates = exports.DifferentSizes = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Switch = require("components/Switch");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = {
  title: 'ui-components/Switch',
  component: _Switch.Switch,
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
          "flex-direction": "column",
          children: story()
        })
      })
    });
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {});
};
exports.Default = Default;
Default.storyName = 'default';
var DifferentSizes = function DifferentSizes() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {
      size: "sm",
      name: "small"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {
      size: "md",
      name: "medium"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {
      size: "lg",
      name: "large"
    })]
  });
};
exports.DifferentSizes = DifferentSizes;
DifferentSizes.storyName = 'different sizes';
var withAriaLabel = function withAriaLabel() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {
    isLabelVisible: true,
    label: "With aria label"
  });
};
exports.withAriaLabel = withAriaLabel;
withAriaLabel.storyName = 'with aria label';
var DifferentStates = function DifferentStates() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {
      isDisabled: true,
      name: "disabled"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {
      isDisabled: true,
      defaultChecked: true,
      name: "disabled-default"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {
      defaultChecked: true,
      name: "default"
    })]
  });
};
exports.DifferentStates = DifferentStates;
DifferentStates.storyName = 'different states';
var WithIssuingValue = function WithIssuingValue() {
  var _useState = (0, _react.useState)({
      id: '',
      value: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var onChange = function onChange(value) {
    return setState(value);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.Switch, {
      onChange: onChange,
      value: "my value"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "u-my-2",
      children: JSON.stringify(state, 2, null)
    })]
  });
};
exports.WithIssuingValue = WithIssuingValue;
WithIssuingValue.storyName = 'with issuing value';