"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabList = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _getChildrenType = require("utils/validations/getChildrenType");
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "addClass", "label", "orientation", "__TYPE"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TabList = function TabList(_ref) {
  var ChildrenProps = _ref.children,
    addClass = _ref.addClass,
    label = _ref.label,
    orientation = _ref.orientation,
    __TYPE = _ref.__TYPE,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
    * Usado para almacenar las referencias
    * de todos los botones usados como Tab.
    */
  var refTabs = (0, _react.useRef)([]);

  /**
    * Función para utilizada para agregar una nueva referencia
    * al arreglo de referencias refTabs.
    *
    * @param {ReactNode[]} ref - Referencia del botón usado en el Tab.
    * @returns {ReactNode[]} refTabs - Arreglo de referencias.
    */
  var addNewRef = function addNewRef(ref) {
    return refTabs.current = [].concat(_toConsumableArray(refTabs.current), [ref]);
  };

  /**
    * Se crea un objeto que no se puede cambiar para
    * almacenar el keyCode de las teclas up, down, end y home.
    */
  var KEYCODE = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  });

  /**
    * Función utilizada en el evento KeyDown del botón,
    * permite decidir el focus del siguiente elemento
    * utilizando las teclas ArrowLeft o ArrowRight.
    *
    * @param {Event} event - Evento disparado por KeyDown
    */
  var onNavigation = function onNavigation(e) {
    // Obtenemos la primera Tab
    var FIRST_TAB = refTabs.current[0];
    // Obtenemos la última Tab
    var LAST_TAB = refTabs.current[refTabs.current.length - 1];

    // Si la tecla pulsada ArrowLeft
    if ((e.keyCode || e.which) === KEYCODE.LEFT) {
      if (e.target === FIRST_TAB) {
        LAST_TAB.focus();
      } else {
        var prevFocusButton = refTabs.current.indexOf(e.target) - 1;
        // Agregamos el focus al botón anterior
        refTabs.current[prevFocusButton].focus();
      }
    } else if ((e.keyCode || e.which) === KEYCODE.RIGHT) {
      // Si la tecla pulsada es ArrowRight
      if (e.target === LAST_TAB) {
        FIRST_TAB.focus();
      } else {
        var nextFocusButton = refTabs.current.indexOf(e.target) + 1;
        // Agregamos el focus al siguiente botón
        refTabs.current[nextFocusButton].focus();
      }
    }
  };
  var children = _react.Children.map(ChildrenProps, function (child, index) {
    if (! /*#__PURE__*/(0, _react.isValidElement)(child)) return null;
    return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
      id: index,
      addNewRef: addNewRef,
      onNavigation: onNavigation
    }));
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
    role: "tablist",
    "data-type": __TYPE,
    "aria-label": label,
    "aria-orientation": orientation,
    className: "".concat(_TabsModule.default['c-tab__list'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : '')
  }, props), {}, {
    children: (0, _getChildrenType.getChildrenByType)(children, ['Tab'])
  }));
};
exports.TabList = TabList;
TabList.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element]),
  addClass: _propTypes.default.string,
  label: _propTypes.default.string,
  orientation: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('TabList')
};
TabList.defaultProps = {
  __TYPE: 'TabList',
  label: 'Simple tabs',
  orientation: 'horizontal'
};