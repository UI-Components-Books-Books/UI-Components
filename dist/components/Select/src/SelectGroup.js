"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectGroup = void 0;
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
var SelectGroup = function SelectGroup(_ref) {
  var childrenProps = _ref.children,
    onAllSelect = _ref.onAllSelect;
  // Estado para controlar el valor de los select
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    allSelect = _useState2[0],
    setAllSelect = _useState2[1];

  /**
    * Función encargada de actualzar el estado con los valores
    * provenientes del select component.
    * @param {object} choise
    */
  /**
    * Función callback que se pasa como parámetro del componente select,
    * encargada de actualzar el estado con los valores
    * provenientes del select component.
    *
    * @pretorna un objeto con los valores ID y value.
    * aram {Object} value - Objeto { Id, value }
    */
  var onAddSelect = function onAddSelect(choise) {
    return setAllSelect([].concat(_toConsumableArray(allSelect.filter(function (option) {
      return option.id !== choise.id;
    })), [_objectSpread({}, choise)]));
  };
  (0, _react.useEffect)(function () {
    // Si existe la propiedad onAllSelect emita el valor del estado
    if (onAllSelect) onAllSelect(allSelect);
  }, [allSelect, onAllSelect]);

  /**
    * Necesitamos agregar las propiedades onChoise al componente select.
    */
  var children = _react.Children.map(childrenProps, function (child) {
    var _child$props;
    if (! /*#__PURE__*/(0, _react.isValidElement)(child)) return null;
    if ((child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.__TYPE) === 'Select') {
      return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
        onChoise: onAddSelect
      }));
    }
    return child;
  });
  return children;
};
exports.SelectGroup = SelectGroup;
SelectGroup.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  onAllSelect: _propTypes.default.func
};