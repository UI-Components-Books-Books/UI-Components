"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionButton = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _AccordionModule = _interopRequireDefault(require("./Accordion.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "id", "onExpanded", "isExpanded", "expanded", "addClass", "icon", "__TYPE"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AccordionButton = function AccordionButton(_ref) {
  var children = _ref.children,
    id = _ref.id,
    onExpanded = _ref.onExpanded,
    isExpanded = _ref.isExpanded,
    expanded = _ref.expanded,
    addClass = _ref.addClass,
    icon = _ref.icon,
    __TYPE = _ref.__TYPE,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", _objectSpread(_objectSpread({
    id: "accordion-button-".concat(id),
    "aria-controls": "accordion-panel-".concat(id),
    "aria-expanded": isExpanded,
    className: "".concat(_AccordionModule.default['c-accordion__button'], " u-flex ").concat(addClass !== null && addClass !== void 0 ? addClass : '', " ").concat(isExpanded && expanded && expanded),
    onClick: onExpanded,
    "data-type": __TYPE
  }, props), {}, {
    children: [children, icon && icon(isExpanded)]
  }));
};
exports.AccordionButton = AccordionButton;
AccordionButton.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  id: _propTypes.default.number,
  onExpanded: _propTypes.default.func,
  isExpanded: _propTypes.default.bool,
  expanded: _propTypes.default.string,
  addClass: _propTypes.default.string,
  icon: _propTypes.default.func,
  __TYPE: (0, _typeValidation.typeValidation)('AccordionButton')
};
AccordionButton.defaultProps = {
  __TYPE: 'AccordionButton'
};