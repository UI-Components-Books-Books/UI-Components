"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralDraggable = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@dnd-kit/core");
var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));
var _typeValidation = require("utils/validations/typeValidation");
var _DragModule = _interopRequireDefault(require("./Drag.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var GeneralDraggable = function GeneralDraggable(_ref) {
  var children = _ref.children,
    addClass = _ref.addClass,
    id = _ref.id,
    label = _ref.label,
    element = _ref.element;
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
        label: label,
        type: 'container'
      }
    }),
    setNodeRef = _useDroppable.setNodeRef;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Element, {
    id: id,
    ref: setNodeRef,
    className: "".concat(_DragModule.default['c-droppable'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: children
  });
};
exports.GeneralDraggable = GeneralDraggable;
GeneralDraggable.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  addClass: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  element: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('general-draggable')
};
GeneralDraggable.defaultProps = {
  __TYPE: 'general-draggable',
  id: (0, _uniqueId.default)('unique-id-general-'),
  label: 'contendor inicial'
};