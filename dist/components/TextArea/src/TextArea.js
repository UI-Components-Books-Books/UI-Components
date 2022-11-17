"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));
var _TextAreaModule = _interopRequireDefault(require("./TextArea.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["id", "value", "resize", "placeholder", "label", "addClass", "isLabelVisible", "isDisabled", "isRequired", "onValue"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TextArea = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    value = _ref.value,
    resize = _ref.resize,
    placeholder = _ref.placeholder,
    label = _ref.label,
    addClass = _ref.addClass,
    isLabelVisible = _ref.isLabelVisible,
    isDisabled = _ref.isDisabled,
    isRequired = _ref.isRequired,
    onValue = _ref.onValue,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
     * Se crea un ID para identificar el textarea y además
     * para pasarlo dentro la función onValue proveniente
     * de los props.
     */
  var textAreaId = (0, _react.useMemo)(function () {
    return id || (0, _uniqueId.default)('c-input-');
  }, [id]);

  /**
     * Detecta cuando el input tiene un cambio y si existe
     * la propiedad onValue le pasamos los parámetros
     *  id y value del input.
     *
     * @param {target} target - HTMLInputElement.
     */
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    if (onValue) onValue({
      id: textAreaId,
      value: target.value
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    htmlFor: textAreaId,
    className: "".concat(_TextAreaModule.default['c-label'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "".concat(!isLabelVisible && 'u-sr-only'),
      children: [" ", label, " "]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", _objectSpread(_objectSpread({
      id: textAreaId,
      ref: ref,
      disabled: isDisabled,
      required: isRequired,
      placeholder: placeholder,
      autoComplete: "off",
      onChange: onChange,
      className: "".concat(_TextAreaModule.default['c-textarea'], " ").concat(_TextAreaModule.default["c-textarea--".concat(resize)])
    }, props), {}, {
      children: value
    }))]
  });
});
exports.TextArea = TextArea;
TextArea.defaultProps = {
  resize: 'vertical',
  placeholder: 'Here is a sample placeholder'
};
TextArea.propTypes = {
  id: _propTypes.default.string,
  value: _propTypes.default.string,
  resize: _propTypes.default.oneOf(['none', 'horizontal', 'vertical']),
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string,
  addClass: _propTypes.default.string,
  isLabelVisible: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,
  isRequired: _propTypes.default.bool,
  onValue: _propTypes.default.func
};