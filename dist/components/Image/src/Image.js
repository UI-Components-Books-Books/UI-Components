"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ImageModule = _interopRequireDefault(require("./Image.module.scss"));
var _baseImage = _interopRequireDefault(require("assets/images/base-image.png"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["url", "alt", "title", "width", "addClass", "noCaption"];
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
var Image = function Image(_ref) {
  var url = _ref.url,
    alt = _ref.alt,
    title = _ref.title,
    width = _ref.width,
    addClass = _ref.addClass,
    noCaption = _ref.noCaption,
    props = _objectWithoutProperties(_ref, _excluded);
  // Estado para determinar si se muestra la imagen por defecto.
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];

  /**
    * Función de error, al no conseguir la imagen cambia el estado setError
    * y muestra la imagen por defecto.
    *
    * @param {boolean} value
    */
  var onError = function onError(value) {
    return setError(value);
  };

  /**
    * Condicionamos que imagen se va a mostrar
    * dependiendo del valor del estado error.
    */
  var imgToSee = !error ? "".concat(url) : _baseImage.default;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("figure", _objectSpread(_objectSpread({
    className: "".concat(_ImageModule.default['c-image'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : '')
  }, width && {
    style: {
      maxWidth: "".concat(width, "px")
    }
  }), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", _objectSpread({
      src: imgToSee,
      onError: onError,
      alt: alt
    }, props)), !noCaption && /*#__PURE__*/(0, _jsxRuntime.jsx)("figcaption", {
      className: _ImageModule.default['c-image__figcaption'],
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("strong", {
          children: [title, "\xA0"]
        }), alt]
      })
    })]
  }));
};
exports.Image = Image;
Image.defaultProps = {
  title: 'Image 1.',
  alt: 'Default image.',
  noCaption: false
};
Image.propTypes = {
  url: _propTypes.default.string,
  alt: _propTypes.default.string,
  title: _propTypes.default.string,
  width: _propTypes.default.string,
  addClass: _propTypes.default.string,
  noCaption: _propTypes.default.bool
};