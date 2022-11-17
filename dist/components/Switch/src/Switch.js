"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));
var _SwitchModule = _interopRequireDefault(require("./Switch.module.scss"));
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
/**
 * Objeto utilizado para almacenar el valor
 * del keyCode de las teclas 'SPACE' y 'ENTER'.
 */
var KEYDOWN = Object.freeze({
  SPACE: 32,
  ENTER: 13
});
var Switch = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    name = _ref.name,
    size = _ref.size,
    value = _ref.value,
    label = _ref.label,
    addClass = _ref.addClass,
    isDisabled = _ref.isDisabled,
    defaultChecked = _ref.defaultChecked,
    isLabelVisible = _ref.isLabelVisible,
    onChange = _ref.onChange;
  // Estado utilizado para controlar si el input está checked.
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];

  /**
    * Se crea un ID para identificar el input y además
    * para pasarlo dentro la función onChange proveniente
    * de los props.
    */
  var switchId = (0, _react.useMemo)(function () {
    return id || (0, _uniqueId.default)('c-input-');
  }, [id]);

  /**
    * Detecta cuando el input tiene un cambio y actualiza
    * tanto el estado como el valor pasado
    * a través de la propiedad onChange cuando
    * el input cambia.
    *
    * @param {HTMLInputElement} target - HTMLInputElement.
    */
  var onChangeSwitch = function onChangeSwitch(_ref2) {
    var target = _ref2.target;
    setChecked(target.checked);
    if (!onChange) return;
    if (target.checked) {
      onChange({
        id: target.id,
        value: target.value
      });
      return;
    }
    onChange({
      id: target.id,
      value: ''
    });
  };

  /**
    * Función utilizada para actualizar
    * tanto el estado como el valor pasado
    * a través de la propiedad onChange cuando
    * el input cambia utilizando el teclado.
    *
    * @param {Event} e - Evento que se ejecuta al momento de presionar una tecla.
    */
  var onKeyDown = function onKeyDown(e) {
    if ((e.keyCode || e.which) === KEYDOWN.SPACE || (e.keyCode || e.which) === KEYDOWN.ENTER) {
      setChecked(function (prev) {
        if (!onChange) return !prev;
        if (!prev) {
          onChange({
            id: switchId,
            value: "".concat(value)
          });
        } else {
          onChange({
            id: switchId,
            value: ''
          });
        }
        return !prev;
      });
    }
  };
  (0, _react.useEffect)(function () {
    // se utiliza para cambiar el estado inicial a partir de la propiedad defaultChecked.
    if (defaultChecked) setChecked(!!defaultChecked);
    return function () {
      setChecked(false);
    };
  }, [defaultChecked]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    htmlFor: switchId,
    className: "".concat(_SwitchModule.default['c-label'], " ").concat(_SwitchModule.default["is-".concat(size)]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "".concat(!isLabelVisible && 'u-sr-only'),
      children: [" ", label, " "]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
      id: switchId,
      ref: ref,
      role: "switch",
      type: "checkbox",
      name: name,
      value: value,
      checked: checked,
      "aria-disabled": isDisabled,
      className: "".concat(_SwitchModule.default['c-switch'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
      onChange: onChangeSwitch,
      onKeyDown: onKeyDown
    }, isDisabled && {
      disabled: true
    }))]
  });
});
exports.Switch = Switch;
Switch.defaultProps = {
  size: 'md',
  name: 'switch',
  value: 'active',
  isDisabled: false,
  isLabelVisible: false,
  label: 'Default switch label'
};
Switch.propTypes = {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  size: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]),
  label: _propTypes.default.string,
  addClass: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  isLabelVisible: _propTypes.default.bool,
  onChange: _propTypes.default.func
};