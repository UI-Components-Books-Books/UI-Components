"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputRightAddon = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _InputModule = _interopRequireDefault(require("./Input.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var InputRightAddon = function InputRightAddon(_ref) {
  var children = _ref.children,
    addClass = _ref.addClass;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(_InputModule.default['c-input__right-addon'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: children
  });
};
exports.InputRightAddon = InputRightAddon;
InputRightAddon.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  addClass: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('InputRightAddon')
};
InputRightAddon.defaultProps = {
  __TYPE: 'InputRightAddon'
};