"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _Tabs = require("components/Tabs");
var _TabsModule = _interopRequireDefault(require("./Tabs.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "id", "selected", "addClass", "icon", "addNewRef", "onNavigation", "__TYPE"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tab = function Tab(_ref) {
  var children = _ref.children,
    id = _ref.id,
    selected = _ref.selected,
    addClass = _ref.addClass,
    icon = _ref.icon,
    addNewRef = _ref.addNewRef,
    onNavigation = _ref.onNavigation,
    __TYPE = _ref.__TYPE,
    props = _objectWithoutProperties(_ref, _excluded);
  /**
    * Necesitamos obtener la referencia del botón
    * para luego pasarla en la función addNewRef proveniente
    * de las propiedades.
    */
  var refButton = (0, _react.useRef)();

  /**
    * Obtenemos las funciones validation y onToggle del contexto creado en Tabs.
    */
  var _useContext = (0, _react.useContext)(_Tabs.TabsContext),
    validation = _useContext.validation,
    onToggle = _useContext.onToggle;

  /**
    * variable que almacena el resultado de validation.
    * Devuelve "true" o "false" apartir de evaluar
    * el id con el estado.
    *
    * @returns {(Boolean)}
    */
  var isSelected = validation(id);
  (0, _react.useEffect)(function () {
    // Agregamos al Referencia a la función addNewRef si está existe
    refButton.current && addNewRef(refButton.current);
    return function () {
      // Limpiamos la referencia al desmontar el componente
      refButton.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refButton]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", _objectSpread(_objectSpread({
    id: "tab-".concat(id),
    role: "tab",
    ref: refButton,
    "data-type": __TYPE,
    tabIndex: "".concat(isSelected ? 0 : -1),
    "aria-controls": "panel-".concat(id),
    "aria-selected": isSelected,
    onKeyDown: onNavigation,
    onClick: function onClick() {
      return onToggle(id);
    },
    className: "".concat(_TabsModule.default['c-tab__button'], " u-flex ").concat(addClass !== null && addClass !== void 0 ? addClass : '', " ").concat(isSelected && selected && selected)
  }, props), {}, {
    children: [children, icon && icon(isSelected)]
  }));
};
exports.Tab = Tab;
Tab.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.element, _propTypes.default.node]),
  id: _propTypes.default.number,
  selected: _propTypes.default.string,
  addClass: _propTypes.default.string,
  icon: _propTypes.default.func,
  addNewRef: _propTypes.default.func,
  onNavigation: _propTypes.default.func,
  __TYPE: (0, _typeValidation.typeValidation)('Tab')
};
Tab.defaultProps = {
  __TYPE: 'Tab'
};