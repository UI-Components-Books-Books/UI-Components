"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggletipButton = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Toggletip = require("./Toggletip");
var _typeValidation = require("utils/validations/typeValidation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ToggletipButton = function ToggletipButton(_ref) {
  var children = _ref.children;
  // Obtenemos la función onOpen y setRefButton del contexto
  var _useContext = (0, _react.useContext)(_Toggletip.ToggletipContext),
    onOpen = _useContext.onOpen,
    setRefButton = _useContext.setRefButton;

  // Si tiene más de un hijo no retornar nada.
  if (_react.Children.count(children) > 1) {
    return null;
  }
  var returnElements = function returnElements(child) {
    if (! /*#__PURE__*/(0, _react.isValidElement)(child)) return null;
    // Agregamos las propiedades ref y onClick en el hijo
    return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
      ref: setRefButton,
      onClick: onOpen
    }));
  };
  return _react.Children.map(children, returnElements);
};
exports.ToggletipButton = ToggletipButton;
ToggletipButton.propTypes = {
  children: _propTypes.default.element,
  __TYPE: (0, _typeValidation.typeValidation)('ToggletipButton')
};
ToggletipButton.defaultProps = {
  __TYPE: 'ToggletipButton'
};