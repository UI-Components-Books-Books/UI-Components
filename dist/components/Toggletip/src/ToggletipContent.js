"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggletipContent = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactPopper = require("react-popper");
var _Toggletip = require("components/Toggletip");
var _Portal = require("components/Portal");
var _typeValidation = require("utils/validations/typeValidation");
var _ToggletipModule = _interopRequireDefault(require("./Toggletip.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de la tecla "ESC".
 */
var KEYCODE = Object.freeze({
  ESC: 27
});
var ToggletipContent = function ToggletipContent(_ref) {
  var children = _ref.children,
    addClass = _ref.addClass,
    hasArrow = _ref.hasArrow,
    isDisabled = _ref.isDisabled,
    distance = _ref.distance,
    placement = _ref.placement;
  // Obtenemos la función isOpen y la referencia del botón del contexto
  var _useContext = (0, _react.useContext)(_Toggletip.ToggletipContext),
    isOpen = _useContext.isOpen,
    refButton = _useContext.refButton;
  // Referencia del toggletip
  var refToggletip = (0, _react.useRef)();

  // Lista de elementos a los cuales se les puede hacer focus.
  var SELECTOR_ELEMENTS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])';
  var onKeyDown = function onKeyDown(e) {
    // Obtemos un array de elementos que se puede ::focus.
    var focusableElements = refToggletip.current.querySelectorAll(SELECTOR_ELEMENTS);
    // Obtemos la referencia del elemento padre.
    var buttonElement = refButton.current;

    // Sacamos el primer elemento de la lista.
    var FIRST_ELEMENT = focusableElements[0];
    // Sacamos el último elemento de la lista.
    var LAST_ELEMENT = focusableElements[focusableElements.length - 1];

    // Si va hacia adelante usando tab y el último elemento está activo, entonces agregar el focus al elemento padre.
    if (!e.shiftKey && document.activeElement === LAST_ELEMENT) {
      buttonElement.focus();
      return e.preventDefault();
    }

    // Si va hacia atrás usando shift + tab y el primer elemento está activo, entonces agregar el focus al elemento padre.
    if (e.shiftKey && document.activeElement === FIRST_ELEMENT) {
      buttonElement.focus();
      e.preventDefault();
    }

    // Retorna el focus al buttonElement al presionar Esc
    if ((e.keyCode || e.which) === KEYCODE.ESC) {
      buttonElement.focus();
    }
  };

  // Hook para controlar el posicionamiento del toggletip con respecto a su elemento padre.
  var _usePopper = (0, _reactPopper.usePopper)(refButton.current, refToggletip.current, {
      placement: placement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, distance || 8]
        }
      }, {
        name: 'flip',
        options: {
          padding: 10
        }
      }, {
        name: 'eventListeners',
        enabled: isOpen
      }]
    }),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes;
  (0, _react.useEffect)(function () {
    if (isOpen) {
      // Agrega el focus al toggletip
      refToggletip.current.focus();
    }
  }, [isOpen]);
  if (isDisabled) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.Portal, {
    id: "js-toggletip",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
      tabIndex: -1,
      onKeyDown: onKeyDown,
      ref: refToggletip,
      className: "".concat(_ToggletipModule.default['c-toggletip'], " ").concat(isOpen && _ToggletipModule.default['c-toggletip--active'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
      style: styles.popper
    }, attributes.popper), {}, {
      children: [children, hasArrow && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _ToggletipModule.default['c-toggletip__arrow'],
        "data-popper-arrow": true,
        style: styles.arrow
      })]
    }))
  });
};
exports.ToggletipContent = ToggletipContent;
ToggletipContent.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.element, _propTypes.default.node]),
  addClass: _propTypes.default.string,
  hasArrow: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,
  distance: _propTypes.default.number,
  placement: _propTypes.default.oneOf(['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end']),
  __TYPE: (0, _typeValidation.typeValidation)('ToggletipContent')
};
ToggletipContent.defaultProps = {
  hasArrow: false,
  placement: 'auto',
  __TYPE: 'ToggletipContent'
};