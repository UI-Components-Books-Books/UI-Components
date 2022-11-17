"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _Tabs = require("components/Tabs");
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "id", "addClass", "__TYPE"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TabPanel = function TabPanel(_ref) {
  var children = _ref.children,
    id = _ref.id,
    addClass = _ref.addClass,
    __TYPE = _ref.__TYPE,
    props = _objectWithoutProperties(_ref, _excluded);
  // Obtenemos la función validation del contexto
  var _useContext = (0, _react.useContext)(_Tabs.TabsContext),
    validation = _useContext.validation;

  /**
    * Devuelve "true" o "false" apartir de evaluar
    * el id con el estado.
    *
    * @returns {(Boolean)}
    */
  var isSelected = validation(id);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
    id: "panel-".concat(id),
    role: "tabpanel",
    tabIndex: 0,
    "data-type": __TYPE,
    "aria-hidden": !isSelected,
    hidden: !isSelected,
    "aria-labelledby": "tab-".concat(id),
    className: "".concat(isSelected ? _TabsModule.default['c-tab__panel--active'] : _TabsModule.default['c-tab__panel'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : '')
  }, props), {}, {
    children: children
  }));
};
exports.TabPanel = TabPanel;
TabPanel.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  id: _propTypes.default.number,
  addClass: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('TabPanel')
};
TabPanel.defaultProps = {
  __TYPE: 'TabPanel'
};