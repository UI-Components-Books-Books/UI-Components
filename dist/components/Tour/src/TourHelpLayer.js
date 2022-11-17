"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TourHelpLayer = void 0;
var _react = require("react");
var _Tour = require("components/Tour");
var _TourModule = _interopRequireDefault(require("./Tour.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var TourHelpLayer = function TourHelpLayer() {
  // Propiedad obtenidas a través del contexto.
  var _useContext = (0, _react.useContext)(_Tour.TourContext),
    isOpen = _useContext.isOpen,
    id = _useContext.id,
    target = _useContext.target,
    helpLayerClass = _useContext.helpLayerClass;

  // Estado que almacena la posición del componente en el DOM.
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];

  /**
    * Función que obtiene la posición del elemento en el DOM,
    * crea un objecto con eso valores y
    * actualiza el estado position.
    */
  var getPosition = function getPosition() {
    var _document$querySelect = document.querySelector(target).getBoundingClientRect(),
      positionX = _document$querySelect.x,
      positionY = _document$querySelect.y,
      widthElement = _document$querySelect.width,
      heightElement = _document$querySelect.height;
    setPosition({
      width: "".concat(widthElement, "px"),
      height: "".concat(heightElement, "px"),
      top: "".concat(positionY, "px"),
      left: "".concat(positionX, "px")
    });
  };

  /**
    * Efecto que se lanza cuando existe un elemento
    * al cual se le pueda obtener la posición en el DOM.
    */
  (0, _react.useEffect)(function () {
    if (target) getPosition();
    return function () {
      setPosition({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  /**
    * Efecto utilizado para agregar el evento
    * resize en el objeto global window.
    */
  (0, _react.useEffect)(function () {
    if (!isOpen || !target) return;
    var handleResize = function handleResize(_) {
      getPosition();
    };

    // Si isOpen está en true, agregamos el evento "resize".
    if (isOpen) window.addEventListener('resize', handleResize);
    return function () {
      // Eliminamos el evento "resize" del window al desmontar el componente.
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, target]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(_TourModule.default['c-tour-help'], " ").concat(isOpen && 'animate__animated animate__fadeIn animate__faster animate__delay-2s', " ").concat(helpLayerClass !== null && helpLayerClass !== void 0 ? helpLayerClass : ''),
    style: position,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _TourModule.default['c-tour-number'],
      children: id
    })
  });
};
exports.TourHelpLayer = TourHelpLayer;