"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationItem = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = require("components/Icon");
var _PaginationModule = _interopRequireDefault(require("./Pagination.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["page", "type", "addClass", "disabled", "element", "icons", "selected"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PaginationItem = function PaginationItem(_ref) {
  var page = _ref.page,
    type = _ref.type,
    addClass = _ref.addClass,
    disabled = _ref.disabled,
    element = _ref.element,
    icons = _ref.icons,
    selected = _ref.selected,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
    * Se crea un objeto con el fin de almacenar los diferentes
    * tipos de iconos que se usaran para los botones previus,
    * next, last y first de la páginación.
    */
  var normalizedIcons = {
    previous: icons.previous || 'navigate_before',
    next: icons.next || 'navigate_next',
    last: icons.last || 'last_page',
    first: icons.first || 'first_page'
  };

  // Variable que contiene el icono a utilizar dependiendo de la propiedad type.
  var icon = normalizedIcons[type];
  return type === 'start-ellipsis' || type === 'end-ellipsis' ?
  /*#__PURE__*/
  // Devolvemos '...' si es de tipo ellipsis.
  (0, _jsxRuntime.jsx)("div", {
    className: _PaginationModule.default['c-pagination-item__ellipsis'],
    children: "..."
  }) : /*#__PURE__*/(0, _react.cloneElement)(element, _objectSpread(_objectSpread({
    disabled: disabled,
    className: "".concat(_PaginationModule.default['c-pagination-item'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : '', " ").concat(selected ? _PaginationModule.default['c-pagination-item--selected'] : '')
  }, element.props), props), [
  // Si es de tipo página colocar la página e.g 1,2,3.
  type === 'page' && page,
  // Si existe el icono agregarlo e.g icon = 'last_page'
  icon ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
    name: icon
  }, type) : null]);
};
exports.PaginationItem = PaginationItem;
PaginationItem.propTypes = {
  page: _propTypes.default.number,
  type: _propTypes.default.string,
  addClass: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  selected: _propTypes.default.bool,
  element: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node, _propTypes.default.string]),
  icons: _propTypes.default.shape({
    first: _propTypes.default.string,
    last: _propTypes.default.string,
    next: _propTypes.default.string,
    previous: _propTypes.default.string
  })
};
PaginationItem.defaultProps = {
  icons: {
    previous: 'navigate_before',
    next: 'navigate_next',
    last: 'last_page',
    first: 'first_page'
  },
  element: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {})
};