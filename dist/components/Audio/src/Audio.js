"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audio = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = require("components/Button");
var _AudioModule = _interopRequireDefault(require("./Audio.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["src", "format", "a11y", "size", "type", "addClass"];
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
var Audio = function Audio(_ref) {
  var src = _ref.src,
    format = _ref.format,
    a11y = _ref.a11y,
    size = _ref.size,
    type = _ref.type,
    addClass = _ref.addClass,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
    * Es utilizado para conocer el estado del audio.
    */
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    play = _useState2[0],
    setPlay = _useState2[1];

  /**
    * Se obtiene la referencia del HTMLAudioElement.
    */
  var refAudio = (0, _react.useRef)();

  /**
    * Se crea un objeto que no se puede cambiar para
    * almacenar los tipos o formas que tiene el componente.
    */
  var TYPES = Object.freeze({
    BUTTON: 'Button',
    BAR: 'Bar'
  });

  /**
    * Función utilizada para alternar entre
    * activar o pausar el audio, dependiendo
    * del estado del mismo.
    *
    */
  var onToggle = function onToggle(_) {
    if (!refAudio.current) return;
    if (refAudio.current.paused) {
      refAudio.current.play();
    } else {
      refAudio.current.pause();
    }
    setPlay(!play);
  };
  return type === TYPES.BAR ? /*#__PURE__*/(0, _jsxRuntime.jsx)("audio", _objectSpread(_objectSpread({
    preload: "metadata",
    controls: true,
    className: "".concat(_AudioModule.default['c-audio'], " ").concat(size && _AudioModule.default["c-audio--".concat(size)], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    "data-a11y": a11y
  }, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("source", {
      src: src,
      type: format
    })
  })) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("audio", {
      ref: refAudio,
      src: src,
      type: format,
      onEnded: function onEnded() {
        return setPlay(!play);
      },
      className: _AudioModule.default['c-audio--hidden']
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, _objectSpread(_objectSpread({
      label: play ? 'Pausar' : 'Reproduccir',
      "data-a11y": a11y,
      addClass: "".concat(_AudioModule.default['c-button'], " ").concat(play ? _AudioModule.default['is-button-playing'] : _AudioModule.default['is-button-paused'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
      onClick: onToggle,
      hasAriaLabel: true
    }, a11y && {
      disabled: a11y
    }), props))]
  });
};
exports.Audio = Audio;
Audio.defaultProps = {
  a11y: false,
  type: 'Bar'
};
Audio.propTypes = {
  src: _propTypes.default.string,
  a11y: _propTypes.default.bool,
  format: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small']),
  type: _propTypes.default.oneOf(['Bar', 'Button']),
  addClass: _propTypes.default.string
};