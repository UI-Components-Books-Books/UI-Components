"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Droppable = void 0;
var _core = require("@dnd-kit/core");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _DragModule = _interopRequireDefault(require("./Drag.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "id", "validate", "addClass", "over", "label", "element", "__TYPE"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Droppable = function Droppable(_ref) {
  var children = _ref.children,
    id = _ref.id,
    validate = _ref.validate,
    addClass = _ref.addClass,
    over = _ref.over,
    label = _ref.label,
    element = _ref.element,
    __TYPE = _ref.__TYPE,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
    * Creamos una variable con el elemento a generar
    * por el componente, esto nos permite usar
    * la sintaxis de JSX que es más
    * fácil de leer y manipular.
    */
  var Element = element || 'div';

  /**
    * Utilizamos el hook useDroppable
    * para poder agregar la funcionalidad
    * de "drop" al componente.
    */
  var _useDroppable = (0, _core.useDroppable)({
      id: id,
      data: {
        validate: validate,
        label: label,
        type: 'container'
      }
    }),
    isOver = _useDroppable.isOver,
    setNodeRef = _useDroppable.setNodeRef;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Element, _objectSpread(_objectSpread({
    ref: setNodeRef,
    "data-type": __TYPE,
    className: "".concat(_DragModule.default['c-droppable'], " ").concat(isOver && over && over, " ").concat(addClass !== null && addClass !== void 0 ? addClass : '')
  }, props), {}, {
    children: children
  }));
};
exports.Droppable = Droppable;
Droppable.defaultProps = {
  __TYPE: 'droppable',
  over: _DragModule.default['c-droppable--active']
};
Droppable.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node]),
  id: _propTypes.default.string.isRequired,
  validate: _propTypes.default.array.isRequired,
  addClass: _propTypes.default.string,
  over: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  element: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('droppable')
};