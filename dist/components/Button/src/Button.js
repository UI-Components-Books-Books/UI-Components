"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = require("components/Icon");
var _iconsList = require("utils/icons/iconsList");
var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["label", "size", "icon", "type", "variant", "hasAriaLabel", "disabled", "onClick", "children", "addClass"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Button = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var label = props.label,
    size = props.size,
    icon = props.icon,
    type = props.type,
    variant = props.variant,
    hasAriaLabel = props.hasAriaLabel,
    disabled = props.disabled,
    onClick = props.onClick,
    children = props.children,
    addClass = props.addClass,
    others = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", _objectSpread(_objectSpread(_objectSpread({
    ref: ref,
    className: "".concat(_ButtonModule.default['c-button'], " ").concat(_ButtonModule.default["c-".concat(variant)], " ").concat(_ButtonModule.default["c-".concat(size)], " ").concat(icon && icon.name && hasAriaLabel ? _ButtonModule.default['c-round'] : '', " \n        ").concat(icon && icon.position === 'right' ? _ButtonModule.default['c-reverse'] : '', " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    disabled: disabled,
    type: type,
    onClick: onClick
  }, hasAriaLabel && {
    'aria-label': "".concat(label)
  }), others), {}, {
    children: [children, icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
      name: icon.name,
      size: icon.size
    }), !hasAriaLabel ? label : null]
  }));
});
exports.Button = Button;
Button.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  label: _propTypes.default.string.isRequired,
  size: _propTypes.default.oneOf(['small', 'normal', 'big']),
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'no-line']),
  type: _propTypes.default.oneOf(['button', 'submit', 'reset']),
  hasAriaLabel: _propTypes.default.bool,
  icon: _propTypes.default.shape({
    name: _propTypes.default.oneOf(_iconsList.iconList),
    size: _propTypes.default.oneOf(['small', 'normal', 'big']),
    position: _propTypes.default.oneOf(['left', 'right'])
  }),
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  addClass: _propTypes.default.string
};
Button.defaultProps = {
  label: 'Button',
  size: 'normal',
  variant: 'primary',
  type: 'button',
  hasAriaLabel: false
};