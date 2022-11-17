"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInputContext = exports.NumberInput = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _getChildrenType = require("utils/validations/getChildrenType");
var _NumberInputModule = _interopRequireDefault(require("./NumberInput.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Creación del contexto utilizado en el componente
var NumberInputContext = /*#__PURE__*/(0, _react.createContext)();
exports.NumberInputContext = NumberInputContext;
var NumberInput = function NumberInput(_ref) {
  var children = _ref.children,
    addClass = _ref.addClass,
    keepWithinRange = _ref.keepWithinRange,
    defaultValue = _ref.defaultValue,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    onValue = _ref.onValue;
  // Utilizado para controlar el valor del input.
  var _useState = (0, _react.useState)(defaultValue || 0),
    _useState2 = _slicedToArray(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];

  /**
    * Función que usa para incrementar el valor del input.
    * el valor a incrementar depende del valor del step.
    */
  var onIncrementValue = function onIncrementValue() {
    if (keepWithinRange && counter > max) {
      return setCounter(max);
    }
    setCounter(function (value) {
      return value + step;
    });
  };

  /**
    * Función que usa para disminuir el valor del input
    * el valor a incrementar depende del valor del step.
    */
  var onDecrementValue = function onDecrementValue() {
    if (keepWithinRange && counter < min) {
      return setCounter(min);
    }
    setCounter(function (value) {
      return value - step;
    });
  };

  /**
    * Función callback que se utiliza para cambiar el valor
    * del input apartir del valor pasado por medio de esta.
    *
    * @param {number} value - valor del contador
    */
  var onChangeValue = function onChangeValue(value) {
    return setCounter(value);
  };

  /**
    *
    * Función que se utiliza para comprobar si el valor de las
    * propiedades min o max es igual al valor del contador.
    *
    * @param {number} prop
    * @returns {boolean} - Retorna un valor booleano
    */
  var validate = function validate(prop) {
    return keepWithinRange && counter === prop;
  };
  (0, _react.useEffect)(function () {
    // Si existe la propiedad onAllValue emita el valor del estado.
    if (onValue) onValue(counter);
  }, [counter, onValue]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(NumberInputContext.Provider, {
    value: {
      counter: counter,
      min: min || Number.MIN_SAFE_INTEGER,
      max: max || Number.MAX_SAFE_INTEGER,
      validate: validate,
      onChangeValue: onChangeValue,
      onIncrementValue: onIncrementValue,
      onDecrementValue: onDecrementValue
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(_NumberInputModule.default['c-number-input'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
      children: (0, _getChildrenType.getChildrenByType)(children, ['NumberInputField', 'NumberInputStepper'])
    })
  });
};
exports.NumberInput = NumberInput;
NumberInput.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.element),
  addClass: _propTypes.default.string,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  defaultValue: _propTypes.default.number,
  step: _propTypes.default.number,
  onValue: _propTypes.default.func,
  keepWithinRange: _propTypes.default.bool
};
NumberInput.defaultProps = {
  step: 1
};