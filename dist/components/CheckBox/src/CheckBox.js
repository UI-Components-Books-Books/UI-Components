"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));
var _Icon = require("components/Icon");
var _typeValidation = require("utils/validations/typeValidation");
var _CheckBoxModule = _interopRequireDefault(require("./CheckBox.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["id", "name", "type", "label", "state", "value", "addClass", "isDisabled", "defaultChecked", "onChange", "__TYPE"];
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CheckBox = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    name = _ref.name,
    type = _ref.type,
    label = _ref.label,
    state = _ref.state,
    value = _ref.value,
    addClass = _ref.addClass,
    isDisabled = _ref.isDisabled,
    defaultChecked = _ref.defaultChecked,
    onChange = _ref.onChange,
    __TYPE = _ref.__TYPE,
    args = _objectWithoutProperties(_ref, _excluded);
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
  var checkboxId = (0, _react.useMemo)(function () {
    return id || (0, _uniqueId2.default)("ui-".concat(type));
  }, [id, type]);

  // Objeto con la lista de iconos que dependen del la propiedad state.
  var ICON_STATE = Object.freeze({
    right: 'done_all',
    wrong: 'close',
    normal: type === 'checkbox' ? 'check' : null
  });

  /**
     * Detecta cuando el input tiene un cambio y actualiza
     * tanto el estado como el valor pasado
     * a través de la propiedad onChange cuando
     * el input cambia.
     *
     * @param {HTMLInputElement} target - HTMLInputElement.
     */
  var onChangeCheckbox = function onChangeCheckbox(_ref2) {
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
  (0, _react.useEffect)(function () {
    // se utiliza para cambiar el estado inicial a partir de la propiedad defaultChecked.
    if (defaultChecked) setChecked(!!defaultChecked);
    return function () {
      setChecked(false);
    };
  }, [defaultChecked]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", _objectSpread(_objectSpread({
    htmlFor: checkboxId,
    className: "".concat(_CheckBoxModule.default['c-input'], " u-flex ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    "data-state": state,
    "data-type": type,
    "data-element": __TYPE
  }, args), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _CheckBoxModule.default['c-input__box'],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
        id: checkboxId,
        ref: ref,
        type: type,
        name: name,
        value: value,
        checked: checked,
        "data-state": state,
        className: _CheckBoxModule.default['c-input__check'],
        onChange: onChangeCheckbox
      }, isDisabled && {
        disabled: true
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _CheckBoxModule.default['c-input__icon'],
        children: ICON_STATE[state] && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
          name: ICON_STATE[state]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CheckBoxModule.default['c-input__label'],
      children: label
    })]
  }));
});
exports.CheckBox = CheckBox;
CheckBox.defaultProps = {
  name: 'checkbox',
  type: 'checkbox',
  label: 'Default checkbox label',
  state: 'normal',
  value: 'active',
  isDisabled: false,
  __TYPE: 'CheckBox'
};
CheckBox.propTypes = {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  type: _propTypes.default.oneOf(['radio', 'checkbox']),
  label: _propTypes.default.string.isRequired,
  state: _propTypes.default.oneOf(['normal', 'right', 'wrong']),
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]),
  addClass: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  __TYPE: (0, _typeValidation.typeValidation)('CheckBox')
};