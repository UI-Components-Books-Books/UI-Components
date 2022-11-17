"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _Panel = require("components/Panel");
var _PanelModule = _interopRequireDefault(require("./Panel.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "id", "addClass", "__TYPE"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Section = function Section(_ref) {
  var children = _ref.children,
    id = _ref.id,
    addClass = _ref.addClass,
    __TYPE = _ref.__TYPE,
    props = _objectWithoutProperties(_ref, _excluded);
  // Obtenemos la función validation del contexto
  var _useContext = (0, _react.useContext)(_Panel.PanelContext),
    validation = _useContext.validation;

  /**
    * Devuelve "true" o "false" apartir de evaluar
    * el Id de la sección con el que está en el estado.
    *
    * @returns {(Boolean)}
    */
  var isSelected = validation(id);

  // TODO: Agregar transición con FrameMotion
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", _objectSpread(_objectSpread({
    role: "tabpanel",
    tabIndex: -1,
    hidden: !isSelected,
    "data-type": __TYPE,
    "aria-hidden": !isSelected,
    "aria-labelledby": "section-".concat(id),
    className: "".concat(_PanelModule.default['c-section'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : '')
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      id: "section-".concat(id),
      className: "u-sr-only",
      children: ["Secci\xF3n ", id]
    }), children]
  }));
};
exports.Section = Section;
Section.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  id: _propTypes.default.number,
  addClass: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('Section')
};
Section.defaultProps = {
  __TYPE: 'Section'
};