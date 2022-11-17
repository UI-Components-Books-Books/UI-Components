"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSection = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Panel = require("components/Panel");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ButtonSection = function ButtonSection(_ref) {
  var children = _ref.children,
    section = _ref.section,
    onClick = _ref.onClick;
  // Obtenemos el método onToggle del contexto.
  var _useContext = (0, _react.useContext)(_Panel.PanelContext),
    onToggle = _useContext.onToggle;

  /**
    * Función utilizada para realizar la navegación
    * a sección pasada a través de las props.
    * @param {event} e - evento
    */
  var handleClick = function handleClick(e) {
    onToggle(section);
    if (onClick) {
      onClick(e);
    }
  };

  /**
    * Agregamos el evento onClick al children pasado por
    * medio del compontente.
    */
  return _react.Children.map(children, function (child) {
    return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
      onClick: handleClick
    }));
  });
};
exports.ButtonSection = ButtonSection;
ButtonSection.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node]).isRequired,
  section: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func
};