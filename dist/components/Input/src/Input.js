"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));
var _InputModule = _interopRequireDefault(require("./Input.module.scss"));
var _typeValidation = require("utils/validations/typeValidation");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Input = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    type = _ref.type,
    valueProps = _ref.value,
    placeholder = _ref.placeholder,
    label = _ref.label,
    addClass = _ref.addClass,
    isLabelVisible = _ref.isLabelVisible,
    isDisabled = _ref.isDisabled,
    isRequired = _ref.isRequired,
    isReadOnly = _ref.isReadOnly,
    onValue = _ref.onValue;
  // Utilizado para controlar el valor del input.
  var _useState = (0, _react.useState)(valueProps || ''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];

  /**
    * Se crea un ID para identificar el input y además
    * para pasarlo dentro la función onValue proveniente
    * de los props.
    */
  var input = (0, _react.useMemo)(function () {
    return id || (0, _uniqueId.default)('c-input-');
  }, [id]);

  /**
    * Detecta cuando el input tiene un cambio así actualizamos
    * el estado y si existe la propiedad onValue le pasamos
    * los parámetros id y value del input.
    *
    * @param {target} target - HTMLInputElement
    */
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    if (onValue) onValue({
      id: input,
      value: target.value
    });
    setValue(target.value);
  };

  /**
    * Comprobamos el tipo de input,
    * si no se encuentra entonces no devolvemos nada.
    */
  if (!['text', 'email', 'password', 'date'].includes(type)) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    htmlFor: input,
    className: "".concat(_InputModule.default['c-label'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "".concat(!isLabelVisible && 'u-sr-only'),
      children: [" ", label, " "]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
      id: input,
      ref: ref,
      type: type,
      name: input,
      value: value,
      disabled: isDisabled,
      required: isRequired,
      placeholder: placeholder,
      autoComplete: "off",
      onChange: onChange,
      className: _InputModule.default['c-input']
    }, isReadOnly && {
      readOnly: isReadOnly,
      'aria-readonly': isReadOnly
    }))]
  });
});
exports.Input = Input;
Input.defaultProps = {
  type: 'text',
  placeholder: 'Default placeholder',
  label: 'Default input label',
  isLabelVisible: false,
  __TYPE: 'Input'
};
Input.propTypes = {
  id: _propTypes.default.string,
  type: _propTypes.default.oneOf(['text', 'email', 'password', 'date']),
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  addClass: _propTypes.default.string,
  isLabelVisible: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,
  isRequired: _propTypes.default.bool,
  isReadOnly: _propTypes.default.bool,
  onValue: _propTypes.default.func,
  __TYPE: (0, _typeValidation.typeValidation)('Input')
};