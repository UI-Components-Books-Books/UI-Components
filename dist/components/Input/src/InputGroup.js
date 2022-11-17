"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InputGroup = function InputGroup(_ref) {
  var childrenProps = _ref.children,
    onAllValue = _ref.onAllValue;
  /**
    * Estado usado para almacenar los objetos
    * provenientes de los inputs que han sido modificados.
    */
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    allValue = _useState2[0],
    setAllValue = _useState2[1];

  /**
    * Función callback que se pasa como parámetro del componente Input
    * y retorna un objeto con los valores ID y value.
    *
    * @param {Object} choise - Objeto { Id, value }
    */
  var onAddValue = function onAddValue(choise) {
    return setAllValue([].concat(_toConsumableArray(allValue.filter(function (option) {
      return option.id !== choise.id;
    })), [_objectSpread({}, choise)]));
  };
  (0, _react.useEffect)(function () {
    // Si existe la propiedad onAllValue emita el valor del estado.
    if (onAllValue) onAllValue(allValue);
  }, [allValue, onAllValue]);

  /**
    * Función que se realizo para agregar las propiedades onValue
    * al componente Input que se pasa junto al InputStyle.
    *
    * @param {ReactNode[]} childs - Arreglo de childrens.
    * @param {string} type - Tipo de child a modificar.
    * @param {object} properties - Objeto de propiedades para agregar a los children.
    * @returns {ReactNode[]} Arreglo de children modificados.
    */
  var setChildProperties = function setChildProperties(childs, type, properties) {
    return _react.Children.toArray(childs).map(function (child) {
      if (child.props.__TYPE === type) {
        return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), properties));
      }
      return child;
    });
  };

  /**
    * Agregamos la propiedad onValue al componente Input.
    */
  var children = _react.Children.map(childrenProps, function (child) {
    var _child$props, _child$props2;
    if (! /*#__PURE__*/(0, _react.isValidElement)(child)) return null;
    if ((child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.__TYPE) === 'InputStyle') {
      return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
        children: setChildProperties(child.props.children, 'Input', {
          onValue: onAddValue
        })
      }));
    }
    if ((child === null || child === void 0 ? void 0 : (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.__TYPE) === 'Input') {
      return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
        onValue: onAddValue
      }));
    }
    return child;
  });
  return children;
};
exports.InputGroup = InputGroup;
InputGroup.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  onAllValue: _propTypes.default.func
};