"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TourContext = exports.Tour = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
require("wicg-inert");
var _Portal = require("components/Portal");
var _Tour = require("components/Tour");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var TourContext = /*#__PURE__*/(0, _react.createContext)();
exports.TourContext = TourContext;
var Tour = function Tour(_ref) {
  var steps = _ref.steps,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    finalFocusRef = _ref.finalFocusRef,
    hideCloseButton = _ref.hideCloseButton,
    hideBackButton = _ref.hideBackButton,
    ariaAttributes = _ref.ariaAttributes;
  // Estado utilizado para almacenar el id del elemento activado.
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeId = _useState2[0],
    setActiveId = _useState2[1];

  /**
    * Creamos un array con todos los objetos
    * contenidos en la propiedad steps
    * y además agregamos la prop id.
    */
  var items = _toConsumableArray(steps.reduce(function (list, item, index) {
    return [].concat(_toConsumableArray(list), [_objectSpread({
      id: index + 1
    }, item)]);
  }, []));

  /**
    * Función utilizada para encontrar un objeto
    * a partir de la propiedad id.
    *
    * @param {Number} id - Id del objeto a buscar.
    * @returns {Array} - Array que contiene el objeto que concuerda con el id.
    */
  var findElement = function findElement(id) {
    return items.filter(function (item) {
      return item.id === id;
    }).reduce(function (object, item) {
      return _objectSpread(_objectSpread({}, object), item);
    }, {});
  };

  /**
    * Función usada para habilitar|deshabilitar
    * la propiedad inert que sirve para quitar el focus de los
    * elementos contenidos en el elemento #root.
    *
    * @param {bool} state - Estado.
    */
  var inertToggle = function inertToggle(state) {
    var root = document.querySelector('#root');
    root.inert = state;
  };

  /**
    * Función utilizada para mover
    * el tour al siguiente elemento.
    */
  var onNextElement = function onNextElement() {
    setActiveId(function (prev) {
      return prev < items.length ? prev + 1 : prev;
    });
  };

  /**
    * Función utilizada para mover
    * el tour al elemento anterior.
    */
  var onPrevElement = function onPrevElement() {
    setActiveId(function (prev) {
      return prev > 0 + 1 ? prev - 1 : prev;
    });
  };

  /**
    * Función utilizada cerrar el tour, reiniciar los diferentes estados y
    * mover el focus al elemento pasado a través
    * de la propiedad finalFocusRef.
    */
  var onCloseTour = function onCloseTour() {
    setActiveId(null);
    onClose(!isOpen);
    inertToggle(false);
    if (finalFocusRef) finalFocusRef.current.focus();
  };

  /**
    * Efecto encargado de mostrar el componente
    * cuando la propiedad isOpen es true.
    */
  (0, _react.useEffect)(function () {
    if (isOpen) {
      setActiveId(items.shift().id);
      inertToggle(true);
    }
  }, [isOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TourContext.Provider, {
    value: _objectSpread(_objectSpread({
      isOpen: isOpen,
      lastId: items.length
    }, findElement(activeId)), {}, {
      methods: {
        onNext: onNextElement,
        onPrev: onPrevElement,
        onClose: onCloseTour
      }
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.Portal, {
      id: "js-tour",
      children: isOpen && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tour.TourHelpLayer, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tour.TourElement, {
          ariaAttributes: ariaAttributes,
          hideCloseButton: hideCloseButton,
          hideBackButton: hideBackButton
        })]
      })
    })
  });
};
exports.Tour = Tour;
Tour.defaultProps = {
  isOpen: false,
  hideCloseButton: false,
  hideBackButton: false,
  ariaAttributes: {
    role: 'dialog',
    tabIndex: -1,
    'aria-label': 'Tour por la plataforma',
    'aria-modal': true
  }
};
Tour.propTypes = {
  steps: _propTypes.default.arrayOf(_propTypes.default.shape({
    target: _propTypes.default.string.isRequired,
    content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    placement: _propTypes.default.oneOf(['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end']),
    distance: _propTypes.default.number,
    elementClass: _propTypes.default.string,
    helpLayerClass: _propTypes.default.string
  })),
  isOpen: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  finalFocusRef: _propTypes.default.any.isRequired,
  hideCloseButton: _propTypes.default.bool,
  hideBackButton: _propTypes.default.bool,
  ariaAttributes: _propTypes.default.shape({
    role: _propTypes.default.string,
    tabIndex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    'aria-label': _propTypes.default.string,
    'aria-modal': _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool])
  })
};