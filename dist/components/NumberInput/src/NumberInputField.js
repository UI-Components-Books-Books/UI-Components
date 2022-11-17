"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInputField = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));
var _NumberInput = require("components/NumberInput");
var _typeValidation = require("utils/validations/typeValidation");
var _NumberInputModule = _interopRequireDefault(require("./NumberInput.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var NumberInputField = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    name = _ref.name,
    label = _ref.label,
    pattern = _ref.pattern,
    addClass = _ref.addClass,
    isLabelVisible = _ref.isLabelVisible;
  /**
    * Se obtienen las propiedades counter, onChangeValue, onIncrementValue, onDecrementValue,
    * min y max del contexto generado por el componente NumberInput.
    */
  var _useContext = (0, _react.useContext)(_NumberInput.NumberInputContext),
    counter = _useContext.counter,
    onChangeValue = _useContext.onChangeValue,
    onIncrementValue = _useContext.onIncrementValue,
    onDecrementValue = _useContext.onDecrementValue,
    min = _useContext.min,
    max = _useContext.max;

  /**
    * Se crea un ID para identificar el input.
    */
  var input = (0, _react.useMemo)(function () {
    return id || (0, _uniqueId.default)('c-number-input-');
  }, [id]);

  /**
    * Se crea un objeto que no se puede cambiar para
    * almacenar el keyCode de las teclas up, down, end y home.
    */
  var KEYCODE = Object.freeze({
    UP: 38,
    DOWN: 40,
    END: 35,
    HOME: 36
  });

  /**
    * Función que se ejecuta al cambio del input.
    * además envia el valor actual del input al método
    * onChangeValue.
    *
    * @param {HTMLInputElement} Elemento input
    */
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    if (!isNaN(target.value) && target.value) {
      return onChangeValue(parseInt(target.value));
    }
    onChangeValue(0);
  };

  /**
    * Función que se ejecuta con el evento onKeyDown,
    * utilizada para controlar el NumberInput con las teclas
    * cumpliendo con la accesibilidad del componente.
    *
    * @param {Event} e Evento
    */
  var onKeyDown = function onKeyDown(e) {
    switch (e.keyCode || e.which) {
      case KEYCODE.UP:
        onIncrementValue();
        break;
      case KEYCODE.DOWN:
        onDecrementValue();
        break;
      case KEYCODE.END:
        onChangeValue(max);
        break;
      case KEYCODE.HOME:
        onChangeValue(min);
        break;
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    htmlFor: input,
    className: "".concat(_NumberInputModule.default['c-number-input__label'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "".concat(!isLabelVisible && 'u-sr-only'),
      children: [" ", label, " "]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
      id: input,
      ref: ref,
      type: "text",
      name: name,
      role: "spinbutton",
      inputMode: "decimal",
      pattern: pattern,
      autoCorrect: "off",
      autoComplete: "off",
      className: _NumberInputModule.default['c-number-input__input'],
      onChange: onChange,
      onKeyDown: onKeyDown
    }, counter || counter === 0 ? {
      value: counter,
      'aria-valuemax': max,
      'aria-valuemin': min,
      'aria-valuenow': counter,
      'aria-valuetext': "".concat(counter)
    } : {
      value: ''
    }))]
  });
});
exports.NumberInputField = NumberInputField;
NumberInputField.defaultProps = {
  name: 'number-input-field',
  label: 'Default input number',
  pattern: '[0-9]*(.[0-9]+)?',
  __TYPE: 'NumberInputField'
};
NumberInputField.propTypes = {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  pattern: _propTypes.default.string,
  addClass: _propTypes.default.string,
  isLabelVisible: _propTypes.default.bool,
  __TYPE: (0, _typeValidation.typeValidation)('NumberInputField')
};