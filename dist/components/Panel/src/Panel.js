"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelContext = exports.Panel = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PanelModule = _interopRequireDefault(require("./Panel.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Creamos un contexto para proveer a ciertos
 * componentes hijos las funcionalidades creadas
 * acá en el componente padre.
 */
var PanelContext = /*#__PURE__*/(0, _react.createContext)();
exports.PanelContext = PanelContext;
var Panel = function Panel(_ref) {
  var ChildrenProps = _ref.children,
    defaultIndex = _ref.defaultIndex,
    addClass = _ref.addClass;
  // Controla el estado de abierto / cerrado de las secciones.
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];

  /**
    * Objeto para almacenar el valor de los ID
    * de cada sección y el contador que se utiliza
    * para agregar un ID a cada sección.
    */
  var IdToSection = {
    index: [],
    counter: 0
  };

  /**
    * Se crea la función onToggle para agregar el ID de
    * la sección a mostrar.
    *
    * @param {Number} value - Id proveniente de la sección.
    */
  var onToggle = function onToggle(value) {
    return setIsOpen(value);
  };

  /**
    * Devuelve "true" o "false" apartir de comparar
    * el ID de la sección con el ID de la sección
    * que está visible.
    *
    * @returns {(Boolean)}
    */
  var validation = function validation(id) {
    return isOpen === id;
  };
  (0, _react.useEffect)(function () {
    // Si existe la propiedad defaultIndex actualiza el estado con ella.
    if (defaultIndex !== undefined) setIsOpen(defaultIndex);
  }, [defaultIndex]);

  /**
    * Utilizamos la Children API, para agregar
    * a cada sección un ID.
    */
  var children = _react.Children.map(ChildrenProps, function (child) {
    if (! /*#__PURE__*/(0, _react.isValidElement)(child)) return null;
    if (child.props.__TYPE === 'Section') {
      IdToSection.counter++;
      IdToSection.index.push(IdToSection.counter);
      return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
        id: IdToSection.counter
      }));
    }
    return child;
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PanelContext.Provider, {
    value: {
      validation: validation,
      onToggle: onToggle,
      listId: IdToSection.index,
      currentSection: isOpen
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(_PanelModule.default['c-panel'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
      children: children
    })
  });
};
exports.Panel = Panel;
Panel.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node, _propTypes.default.string]),
  defaultIndex: _propTypes.default.number,
  addClass: _propTypes.default.string
};