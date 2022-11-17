"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TourElement = void 0;
var _react = require("react");
var _reactPopper = require("react-popper");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = require("components/Button");
var _Tour = require("components/Tour");
var _TourModule = _interopRequireDefault(require("./Tour.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TourElement = function TourElement(_ref) {
  var ariaAttributes = _ref.ariaAttributes,
    hideCloseButton = _ref.hideCloseButton,
    hideBackButton = _ref.hideBackButton;
  // Propiedad obtenidas a través del contexto.
  var _useContext = (0, _react.useContext)(_Tour.TourContext),
    isOpen = _useContext.isOpen,
    lastId = _useContext.lastId,
    methods = _useContext.methods,
    id = _useContext.id,
    target = _useContext.target,
    content = _useContext.content,
    placement = _useContext.placement,
    distance = _useContext.distance,
    elementClass = _useContext.elementClass;

  // Obtenemos la referencia del contenedor.
  var refContainer = (0, _react.useRef)();

  /**
    * Desestructuramos el objeto "methods" que
    * contiene las diferentes funciones usada
    * en los botones.
    */
  var onClose = methods.onClose,
    onPrev = methods.onPrev,
    onNext = methods.onNext;

  // Hook para controlar el posicionamiento del TourElement con respecto a su elemento padre.
  var _usePopper = (0, _reactPopper.usePopper)(document.querySelector(target), refContainer.current, {
      placement: placement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, distance || 8]
        }
      }, {
        name: 'computeStyles',
        options: {
          adaptive: false
        }
      }, {
        name: 'eventListeners',
        enabled: isOpen
      }]
    }),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes;

  /**
    * Función utilizada para distiguir que renderizar,
    * si es un texto crea un elemento "p", si no
    * devuelve el elemento contenido en la propiedad content.
    *
    * @returns {ReactNode} - Elemento react.
    */
  var renderContent = function renderContent() {
    if ( /*#__PURE__*/(0, _react.isValidElement)(content)) {
      return content;
    }
    return /*#__PURE__*/(0, _react.createElement)('p', {
      className: _TourModule.default['tour-description']
    }, [content]);
  };

  /**
    * Función que se encarga de actualizar la custom property
    * que almacena la velocidad de la transición del componente.
    * y lanza el método "onNext".
    */
  var handleNextElement = function handleNextElement() {
    refContainer.current.style.setProperty('--speed-movement', '0.8s');
    onNext();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(_TourModule.default['c-layout'])
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread(_objectSpread({
      id: "unique-id-tour-element-".concat(id),
      ref: refContainer,
      style: styles.popper,
      className: "".concat(_TourModule.default['c-tour-content'], " ").concat(isOpen && 'animate__animated animate__fadeIn animate__faster', " ").concat(elementClass !== null && elementClass !== void 0 ? elementClass : '')
    }, ariaAttributes), attributes.popper), {}, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        className: "u-sr-only",
        children: ["Parte ", id, " de ", lastId, "."]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        "aria-hidden": true,
        className: _TourModule.default['c-tour-progress'],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: _TourModule.default['c-tour-progress-bar'],
          style: {
            transform: "scaleX(".concat(id / lastId, ")")
          }
        })
      }), renderContent(), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _TourModule.default['c-tour-button-container'],
        children: [!hideCloseButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          hasAriaLabel: true,
          label: "Salir",
          onClick: onClose,
          icon: {
            name: 'close',
            size: 'big'
          }
        }), !hideBackButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          disabled: id === 1,
          hasAriaLabel: true,
          label: "Anterior",
          onClick: onPrev,
          icon: {
            name: 'navigate_before',
            size: 'big'
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          disabled: id === lastId,
          hasAriaLabel: true,
          label: "Siguiente",
          onClick: handleNextElement,
          icon: {
            name: 'navigate_next',
            size: 'big'
          }
        })]
      })]
    }))]
  });
};
exports.TourElement = TourElement;
TourElement.propTypes = {
  ariaAttributes: _propTypes.default.shape({
    role: _propTypes.default.string,
    tabIndex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    'aria-label': _propTypes.default.string,
    'aria-modal': _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool])
  }),
  hideCloseButton: _propTypes.default.bool,
  hideBackButton: _propTypes.default.bool
};