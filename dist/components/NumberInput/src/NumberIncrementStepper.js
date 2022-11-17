"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberIncrementStepper = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _NumberInput = require("components/NumberInput");
var _Icon = require("components/Icon");
var _typeValidation = require("utils/validations/typeValidation");
var _NumberInputModule = _interopRequireDefault(require("./NumberInput.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NumberIncrementStepper = function NumberIncrementStepper(_ref) {
  var children = _ref.children,
    addClass = _ref.addClass,
    label = _ref.label;
  /**
    * Se obtienen las propiedades onDecrementValue, validate y min
    * del contexto generado por el componente NumberInput.
    */
  var _useContext = (0, _react.useContext)(_NumberInput.NumberInputContext),
    onIncrementValue = _useContext.onIncrementValue,
    validate = _useContext.validate,
    max = _useContext.max;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    tabIndex: -1,
    onClick: onIncrementValue,
    disabled: validate(max),
    "aria-label": "".concat(label !== null && label !== void 0 ? label : 'Incrementar valor'),
    className: "".concat(_NumberInputModule.default['c-number-input__button'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: children || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
      name: "arrow_drop_up"
    })
  });
};
exports.NumberIncrementStepper = NumberIncrementStepper;
NumberIncrementStepper.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.arrayOf(_propTypes.default.element)]),
  addClass: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('NumberIncrementStepper'),
  label: _propTypes.default.string
};
NumberIncrementStepper.defaultProps = {
  __TYPE: 'NumberIncrementStepper'
};