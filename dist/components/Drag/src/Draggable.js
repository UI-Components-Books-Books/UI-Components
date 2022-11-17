"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Draggable = void 0;
var _react = require("react");
var _core = require("@dnd-kit/core");
var _utilities = require("@dnd-kit/utilities");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _Drag = require("components/Drag");
var _DragModule = _interopRequireDefault(require("./Drag.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Draggable = function Draggable(_ref) {
  var children = _ref.children,
    id = _ref.id,
    addClass = _ref.addClass,
    dragging = _ref.dragging,
    label = _ref.label,
    attribute = _ref.attribute,
    disabledDefaultAttributes = _ref.disabledDefaultAttributes,
    element = _ref.element;
  /**
    * Creamos una variable con el elemento a generar
    * por el componente, esto nos permite usar
    * la sintaxis de JSX que es más
    * fácil de leer y manipular.
    */
  var Element = element || 'div';

  /**
    * Obtenemos las diferentes propiedades
    * pasadas a través del contexto generado
    * en el componente DragAndDrop.
    */
  var _useContext = (0, _react.useContext)(_Drag.DragAndDropContext),
    listId = _useContext.listId,
    propValidate = _useContext.propValidate,
    validate = _useContext.validate,
    isDragging = _useContext.isDragging;

  /**
    * Utilizamos el hook useDraggable
    * para poder agregar la funcionalidad
    * de "drag" al componente.
    */
  var _useDraggable = (0, _core.useDraggable)(_objectSpread({
      id: id,
      disabled: validate,
      data: {
        label: label
      }
    }, {
      attributes: attribute
    } || {})),
    attributes = _useDraggable.attributes,
    listeners = _useDraggable.listeners,
    setNodeRef = _useDraggable.setNodeRef,
    transform = _useDraggable.transform;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Element, _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    id: id,
    ref: setNodeRef,
    className: "".concat(_DragModule.default['c-draggable'], " ").concat(isDragging === id ? dragging : '', " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    style: {
      transform: _utilities.CSS.Translate.toString(transform)
    }
  }, validate && _defineProperty({}, propValidate, !!listId.includes(id))), !disabledDefaultAttributes && _objectSpread({}, attributes)), listeners), {}, {
    children: children
  }));
};
exports.Draggable = Draggable;
Draggable.defaultProps = {
  __TYPE: 'draggable',
  dragging: _DragModule.default['c-draggable--active'],
  disabledDefaultAttributes: false
};
Draggable.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.element]),
  id: _propTypes.default.string.isRequired,
  addClass: _propTypes.default.string,
  dragging: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  attribute: _propTypes.default.shape({
    role: _propTypes.default.string,
    roleDescription: _propTypes.default.string,
    tabIndex: _propTypes.default.number
  }),
  disabledDefaultAttributes: _propTypes.default.bool,
  element: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('draggable')
};