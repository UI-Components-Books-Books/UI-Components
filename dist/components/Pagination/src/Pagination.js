"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Pagination = require("components/Pagination");
var _usePagination2 = require("hooks/usePagination");
var _PaginationModule = _interopRequireDefault(require("./Pagination.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["renderItem", "getItemAriaLabel", "addClass"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar las definiciones en español
 * de diferentes terminos usados en el aria-label.
 */
var getSpanishType = Object.freeze({
  first: 'primera',
  last: 'última',
  previous: 'anterior',
  next: 'siguiente'
});

/**
 *
 * Se crea una función que permite definir el aria-label
 * de los elementos que son usados para crear la paginación.
 *
 * @param {String} type - Tipo de elemento
 * @param {Number} page - Número de la página
 * @param {Boolean} selected - Boolean que informa si está la página seleccionada.
 * @returns {string} Message - Mensaje utiliado en el aria-label
 */
var defaultAriaLabel = function defaultAriaLabel(type, page, selected) {
  if (type === 'page') {
    return "".concat(selected ? '' : 'Ir a la ', "p\xE1gina ").concat(page);
  }
  return "Ir a la ".concat(getSpanishType[type], " p\xE1gina");
};
var Pagination = function Pagination(_ref) {
  var renderItem = _ref.renderItem,
    getItemAriaLabel = _ref.getItemAriaLabel,
    addClass = _ref.addClass,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
    * Se utiliza el custom hook usePagination para
    * obtener la paginación.
    */
  var _usePagination = (0, _usePagination2.usePagination)(_objectSpread({}, props)),
    items = _usePagination.items;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
    className: "".concat(addClass !== null && addClass !== void 0 ? addClass : '', " ").concat(_PaginationModule.default['c-pagination']),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: _PaginationModule.default['c-pagination__ul'],
      children: items.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: renderItem(_objectSpread(_objectSpread({}, item), {}, {
            'aria-label': getItemAriaLabel(item.type, item.page, item.selected)
          }))
        }, "pagination-item-".concat(index));
      })
    })
  });
};
exports.Pagination = Pagination;
Pagination.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: false,
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
  siblingCount: 1,
  renderItem: function renderItem(item) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.PaginationItem, _objectSpread({}, item));
  },
  getItemAriaLabel: defaultAriaLabel
};
Pagination.propTypes = {
  addClass: _propTypes.default.string,
  boundaryCount: _propTypes.default.number,
  count: _propTypes.default.number,
  defaultPage: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  hideNextButton: _propTypes.default.bool,
  hidePrevButton: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  showFirstButton: _propTypes.default.bool,
  showLastButton: _propTypes.default.bool,
  siblingCount: _propTypes.default.number,
  renderItem: _propTypes.default.func,
  getItemAriaLabel: _propTypes.default.func
};