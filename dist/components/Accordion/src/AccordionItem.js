"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionItem = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _getChildrenType = require("utils/validations/getChildrenType");
var _AccordionModule = _interopRequireDefault(require("./Accordion.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var AccordionItem = function AccordionItem(_ref) {
  var childrenProp = _ref.children,
    id = _ref.id,
    isOpen = _ref.isOpen,
    onToggle = _ref.onToggle,
    addClass = _ref.addClass;
  /**
    * Se crea la función onExpanded para lanzar la función
    * onToggle proveniente de las props desde acá,
    * de tal manera que no necesitamos pasar el ID
    * ni la función a cada hijo.
    *
    * @returns {function} onToggle - Abre el Accordion.
    */
  var onExpanded = function onExpanded() {
    return onToggle(id);
  };

  /**
    * Valida si el estado es un "Array" o "Number"
    * y devuelve "true" o "false" apartir de comporar
    * el ID con el estado.
    *
    * @returns {(Boolean)}
    */
  var validation = function validation() {
    if (typeof isOpen === 'number') {
      return isOpen === id;
    } else if (Array.isArray(isOpen)) {
      return !!isOpen.includes(id);
    } else {
      return false;
    }
  };

  /**
    * Necesitamos agregar las propiedades onExpanded, isExpanded, a los dos
    * diferentes tipos de hijos que recibe el componete.
    */
  var children = _react.Children.map(childrenProp, function (child) {
    if (! /*#__PURE__*/(0, _react.isValidElement)(child)) return null;

    // Comprueba si el child es de tipo AccordionItem
    if (child.props.__TYPE === 'AccordionButton') {
      return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
        id: id,
        onExpanded: onExpanded,
        isExpanded: validation()
      }));
    }
    return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
      id: id,
      isExpanded: validation()
    }));
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(_AccordionModule.default['c-accordion__item'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    children: (0, _getChildrenType.getChildrenByType)(children, ['AccordionButton', 'AccordionPanel'])
  });
};
exports.AccordionItem = AccordionItem;
AccordionItem.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.element),
  id: _propTypes.default.number,
  isOpen: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.number]),
  onToggle: _propTypes.default.func,
  addClass: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('AccordionItem')
};
AccordionItem.defaultProps = {
  __TYPE: 'AccordionItem'
};