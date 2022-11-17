"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));
var _reactPopper = require("react-popper");
var _Portal = require("components/Portal");
var _TooltipModule = _interopRequireDefault(require("./Tooltip.module.scss"));
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
var Tooltip = function Tooltip(_ref) {
  var childrenProps = _ref.children,
    id = _ref.id,
    label = _ref.label,
    placement = _ref.placement,
    addClass = _ref.addClass,
    hasArrow = _ref.hasArrow,
    distance = _ref.distance,
    isDisabled = _ref.isDisabled;
  // Estado que contrala la apertura o cierra del tooltip
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  // Referencia del elemento que va a tener el tooltip
  var refElement = (0, _react.useRef)(null);
  // Referencia del tooltip
  var refTooltip = (0, _react.useRef)(null);

  // Creamos el id relacionar el tooltip con su elemento padre
  var tooltipId = (0, _react.useMemo)(function () {
    return id || (0, _uniqueId.default)('c-tooltip-');
  }, [id]);

  /**
    * Función para manejar el evento focus del elemento padre.
    * @param {Event} Event
    */
  var onFocus = function onFocus(_) {
    if (!isOpen) setIsOpen(!isOpen);
  };

  /**
    * Función para manejar el evento leave focus del elemento padre.
    * @param {Event} Event
    */
  var onBlur = function onBlur(_) {
    return setIsOpen(false);
  };

  /**
    * Función para manejar el evento mouseover del elemento padre.
    * @param {Event} Event
    */
  var onMouseOver = function onMouseOver(_) {
    if (!isOpen || document.activeElement !== refElement.current) setIsOpen(!isOpen);
  };

  /**
    * Función para manejar el evento mouseout del elemento padre.
    * @param {Event} Event
    */
  var onMouseOut = function onMouseOut(_) {
    return setIsOpen(false);
  };

  /**
    * Función para manejar el evento keydown del elemento padre.
    * @param {Event} Event
    */
  var onKeyDown = function onKeyDown(e) {
    if ((e.keyCode | e.which) === 27 && isOpen) {
      setIsOpen(!isOpen);
    }
  };
  var children = _react.Children.map(childrenProps, function (child) {
    if (! /*#__PURE__*/(0, _react.isValidElement)(child)) return null;
    // Agregamos todos los eventos al elemento padre.
    return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
      'aria-describedby': id,
      ref: refElement,
      onFocus: onFocus,
      onBlur: onBlur,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      onKeyDown: onKeyDown
    }));
  });

  // Hook para controlar el posicionamiento del tooltip con respecto a su elemento padre.
  var _usePopper = (0, _reactPopper.usePopper)(refElement.current, refTooltip.current, {
      placement: placement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, distance || 8]
        }
      }, {
        name: 'flip',
        options: {
          padding: 10
        }
      }, {
        name: 'eventListeners',
        enabled: isOpen
      }]
    }),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes;

  // Si no hay label, está deshabilitado o tiene más de 1 hijo no mostrar el tooltip
  if (!label || _react.Children.count(childrenProps) > 1 || isDisabled) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: childrenProps
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portal.Portal, {
      id: "js-tooltip-portal",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
        id: tooltipId,
        ref: refTooltip,
        role: "tooltip",
        className: "".concat(_TooltipModule.default['c-tooltip'], " ").concat(isOpen && _TooltipModule.default['c-tooltip--active'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
        style: styles.popper
      }, attributes.popper), {}, {
        children: [label, hasArrow && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: _TooltipModule.default['c-tooltip__arrow'],
          "data-popper-arrow": true,
          style: styles.arrow
        })]
      }))
    })]
  });
};
exports.Tooltip = Tooltip;
Tooltip.defaultProps = {
  placement: 'auto'
};
Tooltip.propTypes = {
  children: _propTypes.default.any,
  id: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  addClass: _propTypes.default.string,
  hasArrow: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool,
  distance: _propTypes.default.number,
  placement: _propTypes.default.oneOf(['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'])
};