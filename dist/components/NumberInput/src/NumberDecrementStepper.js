"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberDecrementStepper = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _NumberInput = require("components/NumberInput");
var _Icon = require("components/Icon");
var _typeValidation = require("utils/validations/typeValidation");
var _NumberInputModule = _interopRequireDefault(require("./NumberInput.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NumberDecrementStepper = function NumberDecrementStepper(_ref) {
  var children = _ref.children,
    addClass = _ref.addClass,
    label = _ref.label;
  /**
    * Se obtienen las propiedades onDecrementValue, validate y min
    * del contexto generado por el componente NumberInput.
    */
  var _useContext = (0, _react.useContext)(_NumberInput.NumberInputContext),
    onDecrementValue = _useContext.onDecrementValue,
    validate = _useContext.validate,
    min = _useContext.min;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    tabIndex: -1,
    onClick: onDecrementValue,
    disabled: validate(min),
    "aria-label": "".concat(label !== null && label !== void 0 ? label : 'Decrementar valor'),
    className: "".concat(_NumberInputModule.default['c-number-input__button'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: children || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
      name: "arrow_drop_down"
    })
  });
};
exports.NumberDecrementStepper = NumberDecrementStepper;
NumberDecrementStepper.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.arrayOf(_propTypes.default.element)]),
  addClass: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('NumberDecrementStepper'),
  label: _propTypes.default.string
};
NumberDecrementStepper.defaultProps = {
  __TYPE: 'NumberDecrementStepper'
};