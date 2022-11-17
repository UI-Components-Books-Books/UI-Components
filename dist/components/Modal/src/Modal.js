"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
require("wicg-inert");
var _Button = require("components/Button");
var _Portal = require("components/Portal");
var _ModalModule = _interopRequireDefault(require("./Modal.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "addClass", "isOpen", "onClose", "finalFocusRef", "label"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de la tecla "ESC".
 */
var KEYCODE = Object.freeze({
  ESC: 27
});
var Modal = function Modal(_ref) {
  var children = _ref.children,
    addClass = _ref.addClass,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    finalFocusRef = _ref.finalFocusRef,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
    * Obtenemos la referencia del modal para
    * agregarle el focus cuando este se abra.
    */
  var refModal = (0, _react.useRef)();

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
    * Cierra el modal al presionar la tecla "ESC".
    * @param {event} e - Evento del teclado
    */
  var onKeyDown = function onKeyDown(e) {
    if ((e.keyCode || e.which) === KEYCODE.ESC) {
      onCloseModal();
    }
  };

  /**
    * Función utilizada para cerrar el modal.
    * además agrega el focus al elemento contenido
    * en la propiedad finalFocusRef.
    */
  var onCloseModal = function onCloseModal() {
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
      inertToggle(true);
      if (refModal.current) refModal.current.focus();
    }
  }, [isOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Portal.Portal, {
    id: "js-modal",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _ModalModule.default['c-layout'],
      onClick: onCloseModal,
      hidden: !isOpen
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
      role: "dialog",
      tabIndex: "-1",
      hidden: !isOpen,
      "aria-label": label,
      ref: refModal,
      onKeyDown: onKeyDown,
      "aria-modal": "true",
      className: "".concat(_ModalModule.default['c-modal'], " u-px-3 u-py-3 ").concat(addClass !== null && addClass !== void 0 ? addClass : '')
    }, props), {}, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(_ModalModule.default['c-modal-container'], " u-flow"),
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        addClass: _ModalModule.default['c-close-button'],
        label: "Cerrar modal",
        hasAriaLabel: true,
        icon: {
          name: 'close'
        },
        onClick: onCloseModal
      })]
    }))]
  });
};
exports.Modal = Modal;
Modal.defaultProps = {
  label: 'Default modal label',
  isOpen: false
};
Modal.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  addClass: _propTypes.default.string,
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  finalFocusRef: _propTypes.default.object
};