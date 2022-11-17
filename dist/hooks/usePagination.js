"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePagination = void 0;
var _react = require("react");
var _excluded = ["boundaryCount", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "showFirstButton", "showLastButton", "siblingCount"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Hook para crear una Paginación.
 *
 * Este hook realiza la creación de la estructura base para realizar una páginación,
 * incluyendo botones de siguiente, anterior, primera página y última página.
 *
 * @example
 *
 * const { items } = usePagination({ ...props });
 *
 * @param {Number} boundaryCount - Número de páginas que hay en el limite e.g. [1,2,3,...4,5,...7,8,9].
 * @param {Number} count - Número de página que va a tener la paginación.
 * @param {Number} defaultPage - Número de la página por defecto.
 * @param {Boolean} disabled - Deshabilita las páginas.
 * @param {Boolean} hideNextButton - Muestra/Oculta el botón de siguiente.
 * @param {Boolean} hidePrevButton - Muestra/Oculta el botón de anterior.
 * @param {Function} onChange - Método que se ejecuta al cambio de página.
 * @param {Boolean} showFirstButton - Muestra/Oculta el botón de primera página.
 * @param {Boolean} showLastButton - Muestra/Oculta el botón de última página.
 * @param {Number} siblingCount - Número de página hermanas que va a tener la página seleccionada.
 *
 * @returns {Object} Arreglo de items con la estructua de la páginación.
 */
var usePagination = function usePagination(props) {
  var _props$boundaryCount = props.boundaryCount,
    boundaryCount = _props$boundaryCount === void 0 ? 1 : _props$boundaryCount,
    _props$count = props.count,
    count = _props$count === void 0 ? 1 : _props$count,
    _props$defaultPage = props.defaultPage,
    defaultPage = _props$defaultPage === void 0 ? 1 : _props$defaultPage,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$hideNextButton = props.hideNextButton,
    hideNextButton = _props$hideNextButton === void 0 ? false : _props$hideNextButton,
    _props$hidePrevButton = props.hidePrevButton,
    hidePrevButton = _props$hidePrevButton === void 0 ? false : _props$hidePrevButton,
    handleChange = props.onChange,
    _props$showFirstButto = props.showFirstButton,
    showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
    _props$showLastButton = props.showLastButton,
    showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
    _props$siblingCount = props.siblingCount,
    siblingCount = _props$siblingCount === void 0 ? 1 : _props$siblingCount,
    other = _objectWithoutProperties(props, _excluded);

  // Estado para controlar las páginas
  var _useState = (0, _react.useState)(defaultPage),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];

  /**
    * Función que se ejecuta al momento
    * de dar click en los botones.
    * @param {Event} event
    * @param {Number} value
    */
  var handleClick = function handleClick(event, value) {
    setPage(value);
    if (handleChange) {
      handleChange(event, value);
    }
  };

  /**
    * Función que genera un array a partir de un rango
    * de valores.
    *
    * @param {Number} start
    * @param {Number} end
    * @returns {Number[]} Array con el rango de números
    */
  var range = function range(start, end) {
    var length = end - start + 1;
    // Genera un array utilizando un Array-like
    return Array.from({
      length: length
    }, function (_, i) {
      return start + i;
    });
  };

  // Array de las páginas del inicio. e.g. [1,2]
  var startPages = range(1, Math.min(boundaryCount, count));
  // Array de las páginas del final. e.g. [9,10]
  var endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  var siblingsStart = Math.max(Math.min(
  // Inicio natural
  page - siblingCount,
  // Limite inferior cuando la página es mayor
  count - boundaryCount - siblingCount * 2 - 1),
  // Mayor que el startPages
  boundaryCount + 2);
  var siblingsEnd = Math.min(Math.max(
  // Final natural
  page + siblingCount,
  // Limite superior cuando la página es menor
  boundaryCount + siblingCount * 2 + 2),
  // Menor que el endPages
  endPages.length > 0 ? endPages[0] - 2 : count - 1);

  // Lista basica de items a renderizar
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  var itemList = [].concat(_toConsumableArray(showFirstButton ? ['first'] : []), _toConsumableArray(hidePrevButton ? [] : ['previous']), _toConsumableArray(startPages), _toConsumableArray(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []), _toConsumableArray(range(siblingsStart, siblingsEnd)), _toConsumableArray(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), _toConsumableArray(endPages), _toConsumableArray(hideNextButton ? [] : ['next']), _toConsumableArray(showLastButton ? ['last'] : []));

  // Asigna el número del botón apartir del tipo de este
  var buttonPage = function buttonPage(type) {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  // Convierte la lista de elemento básicos en objetos
  var items = itemList.map(function (item) {
    return typeof item === 'number' ? {
      onClick: function onClick(event) {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled: disabled,
      'aria-current': item === page ? true : undefined
    } : {
      onClick: function onClick(event) {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || item.indexOf('ellipsis') === -1 && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return _objectSpread({
    items: items
  }, other);
};
exports.usePagination = usePagination;