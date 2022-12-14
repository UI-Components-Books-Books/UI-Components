"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsContext = exports.Tabs = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _getChildrenType = require("utils/validations/getChildrenType");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "defaultIndex", "addClass"];
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// Creaci??n del contexto del componente padre Tabs
var TabsContext = /*#__PURE__*/(0, _react.createContext)();
exports.TabsContext = TabsContext;
var Tabs = function Tabs(_ref) {
  var children = _ref.children,
    defaultIndex = _ref.defaultIndex,
    addClass = _ref.addClass,
    props = _objectWithoutProperties(_ref, _excluded);
  // Controla el estado de abierto / cerrado del TabPanel.
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];

  /**
    * Funci??n para abrir o cerrar el TabPanel.
    *
    * @param {Number} value - Id correspondiente del TabPanel.
    */
  var onToggle = function onToggle(value) {
    return setIsOpen(value);
  };

  /**
    * Devuelve "true" o "false" apartir de evaluar
    * el id con el estado.
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(TabsContext.Provider, {
    value: {
      validation: validation,
      onToggle: onToggle
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread(_objectSpread({}, addClass && {
      className: "".concat(addClass)
    }), props), {}, {
      children: (0, _getChildrenType.getChildrenByType)(children, ['TabList', 'TabPanels'])
    }))
  });
};
exports.Tabs = Tabs;
Tabs.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.element),
  defaultIndex: _propTypes.default.number,
  addClass: _propTypes.default.string
};