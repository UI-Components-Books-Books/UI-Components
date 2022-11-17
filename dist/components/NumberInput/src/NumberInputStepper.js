"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInputStepper = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _getChildrenType = require("utils/validations/getChildrenType");
var _typeValidation = require("utils/validations/typeValidation");
var _NumberInputModule = _interopRequireDefault(require("./NumberInput.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NumberInputStepper = function NumberInputStepper(_ref) {
  var children = _ref.children,
    addClass = _ref.addClass;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(_NumberInputModule.default['c-number-input__stepper'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: (0, _getChildrenType.getChildrenByType)(children, ['NumberIncrementStepper', 'NumberDecrementStepper'])
  });
};
exports.NumberInputStepper = NumberInputStepper;
NumberInputStepper.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element)]),
  addClass: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('NumberInputStepper')
};
NumberInputStepper.defaultProps = {
  __TYPE: 'NumberInputStepper'
};