"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggletipContext = exports.Toggletip = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _getChildrenType = require("utils/validations/getChildrenType");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ToggletipContext = /*#__PURE__*/(0, _react.createContext)();
exports.ToggletipContext = ToggletipContext;
var Toggletip = function Toggletip(_ref) {
  var children = _ref.children;
  // Estado que contrala la apertura o cierra del tooltip
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  // Referencia del botón que abre el toggletip
  var refButton = (0, _react.useRef)();

  /**
    * Función para abrir y cerrar el toggletip
    */
  var onOpen = function onOpen() {
    return setIsOpen(!isOpen);
  };

  /**
    * Función para agregara la referencia del botón
    *
    * @param {HTMLElement} ref - Referencia del botón padre.
    */
  var setRefButton = function setRefButton(ref) {
    if (!refButton.current) {
      refButton.current = ref;
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ToggletipContext.Provider, {
    value: {
      isOpen: isOpen,
      onOpen: onOpen,
      setRefButton: setRefButton,
      refButton: refButton
    },
    children: (0, _getChildrenType.getChildrenByType)(children, ['ToggletipButton', 'ToggletipContent'])
  });
};
exports.Toggletip = Toggletip;
Toggletip.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.element)
};