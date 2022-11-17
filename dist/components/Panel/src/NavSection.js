"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavSection = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Panel = require("components/Panel");
var _Icon = require("components/Icon");
var _PanelModule = _interopRequireDefault(require("./Panel.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["section", "type", "selected"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar las definiciones en español
 * de diferentes terminos usados en el aria-label.
 */
var getSpanishType = Object.freeze({
  previous: 'anterior',
  next: 'siguiente'
});

/**
 *
 * Se crea una función que permite definir el aria-label
 * de los elementos que son usados en la navegación de la secciones.
 *
 * @param {String} type - Tipo de elemento
 * @param {Number} section - Número de la sección
 * @param {Boolean} selected - Boolean que informa si está la sección seleccionada.
 * @returns {string} Message - Mensaje utiliado en el aria-label
 */
var defaultAriaLabel = function defaultAriaLabel(type, section, selected) {
  if (type === 'section') {
    return "".concat(selected ? '' : 'Ir a la ', "secci\xF3n ").concat(section);
  }
  return "Ir a la ".concat(getSpanishType[type], " secci\xF3n");
};
var NavSection = function NavSection(_ref) {
  var renderItem = _ref.renderItem,
    showPrevButton = _ref.showPrevButton,
    showNextButton = _ref.showNextButton,
    icons = _ref.icons,
    label = _ref.label,
    orientation = _ref.orientation,
    onValue = _ref.onValue,
    addClass = _ref.addClass,
    getItemAriaLabel = _ref.getItemAriaLabel;
  /**
    * Obtenemos las propiedaes validation,
    * onToggle, listId y currentSection del contexto.
    */
  var _useContext = (0, _react.useContext)(_Panel.PanelContext),
    validation = _useContext.validation,
    onToggle = _useContext.onToggle,
    listId = _useContext.listId,
    currentSection = _useContext.currentSection;

  /**
    * Creamos está referencia para almacenar
    * las referencias de los botones usados
    * para navegar entre secciones.
    */
  var refSections = (0, _react.useRef)([]);

  /**
    * Se crea un objeto que no se puede cambiar para
    * almacenar el keyCode de las teclas left y right.
    */
  var KEYCODE = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  });

  /**
    * Objeto que almacena el valor de la sección a la cual el botón
    * tiene que redirigir dependiendo el tipo de este.
    */
  var BUTTON_TYPE = Object.freeze({
    previous: currentSection - 1,
    next: currentSection + 1
  });

  /**
    * Objeto que tiene como fin almacenar los diferentes
    * tipos de iconos que se usaran para los botones previous y next
    * de la navegación.
    */
  var normalizedIcons = {
    previous: icons.previous || 'navigate_before',
    next: icons.next || 'navigate_next'
  };

  /**
    *  Lista básica de items a renderizar.
    *  e.g. itemList = ['previous', 1, 2, 3, 4, 'next']
    */
  var itemList = [].concat(_toConsumableArray(showPrevButton ? ['previous'] : []), _toConsumableArray(listId || []), _toConsumableArray(showNextButton ? ['next'] : []));

  /**
    * Función utilizada para obtener y almacenar
    * las referencias de los botones.
    *
    * @param {HTMLElement} ref - Referencia del botón.
    */
  var addNewRef = function addNewRef(ref) {
    if (!refSections.current.includes(ref) && ref) {
      return refSections.current = [].concat(_toConsumableArray(refSections.current), [ref]);
    }
    return refSections.current;
  };

  /**
    * Función utilizada en el evento KeyDown del botón,
    * permite decidir el focus del siguiente elemento
    * utilizando las teclas ArrowLeft o ArrowRight.
    *
    * @param {Event} event - Evento disparado por KeyDown
    */
  var onNavigation = function onNavigation(e) {
    // Obtenemos la primera sección.
    var FIRST_SECTION = refSections.current[0];
    // Obtenemos la última sección.
    var LAST_SECTION = refSections.current[refSections.current.length - 1];

    // Si la tecla pulsada ArrowLeft
    if ((e.keyCode || e.which) === KEYCODE.LEFT) {
      if (e.target === FIRST_SECTION) {
        LAST_SECTION.focus();
      } else {
        var prevFocusButton = refSections.current.indexOf(e.target) - 1;
        // Agregamos el focus al botón anterior
        refSections.current[prevFocusButton].focus();
      }
    } else if ((e.keyCode || e.which) === KEYCODE.RIGHT) {
      // Si la tecla pulsada es ArrowRight
      if (e.target === LAST_SECTION) {
        FIRST_SECTION.focus();
      } else {
        var nextFocusButton = refSections.current.indexOf(e.target) + 1;
        // Agregamos el focus al siguiente botón
        refSections.current[nextFocusButton].focus();
      }
    }
  };

  /**
    * Función del evento onClick utilizado
    * para mostrar la sección.
    * @param {Number} section - sección
    */
  var _onClick = function onClick(section) {
    onToggle(section);
    if (onValue !== undefined) {
      onValue(section, listId.length);
    }
  };

  // Convierte la lista de elemento básicos en objetos.
  var items = itemList.map(function (item) {
    return typeof item === 'number' ? {
      onClick: function onClick(_) {
        _onClick(item);
      },
      type: 'section',
      section: item,
      selected: validation(item),
      ref: addNewRef,
      onKeyDown: onNavigation
    } : {
      onClick: function onClick() {
        _onClick(BUTTON_TYPE[item]);
      },
      type: item,
      section: BUTTON_TYPE[item],
      selected: false,
      disabled: true && (item === 'next' ? currentSection >= listId.length : currentSection <= 1)
    };
  });

  /**
    * Efecto que comprueba si existe la propiedad onValue,
    * si es asi la ejecuta.
    */
  (0, _react.useEffect)(function () {
    if (onValue !== undefined) onValue(currentSection, listId.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      id: "section-list-navigation",
      className: "u-sr-only",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      role: "tablist",
      "aria-labelledby": "section-list-navigation",
      "aria-orientation": orientation,
      className: "".concat(_PanelModule.default['c-navigation'], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
      children: renderItem ? renderItem(items) : items.map(function (_ref2, index) {
        var section = _ref2.section,
          type = _ref2.type,
          selected = _ref2.selected,
          others = _objectWithoutProperties(_ref2, _excluded);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          role: "presentation",
          className: _PanelModule.default['c-navigation__item'],
          children: type === 'section' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("button", _objectSpread({
            id: "navigation-section-tab-".concat(section),
            role: "tab",
            tabIndex: "".concat(selected ? 0 : -1),
            "aria-selected": selected,
            className: _PanelModule.default['c-navigation__section'],
            "aria-label": getItemAriaLabel(type, section, selected)
          }, others)) : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", _objectSpread(_objectSpread({
            type: "button",
            className: "".concat(_PanelModule.default['c-navigation__button']),
            "aria-label": getItemAriaLabel(type, section, selected)
          }, others), {}, {
            children: normalizedIcons[type] ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
              name: normalizedIcons[type]
            }, type) : null
          }))
        }, "navigation-section-item-".concat(index));
      })
    })]
  });
};
exports.NavSection = NavSection;
NavSection.propTypes = {
  renderItem: _propTypes.default.func,
  showNextButton: _propTypes.default.bool,
  showPrevButton: _propTypes.default.bool,
  icons: _propTypes.default.shape({
    next: _propTypes.default.string,
    previous: _propTypes.default.string
  }),
  label: _propTypes.default.string,
  orientation: _propTypes.default.string,
  onValue: _propTypes.default.func,
  addClass: _propTypes.default.string,
  getItemAriaLabel: _propTypes.default.func
};
NavSection.defaultProps = {
  icons: {
    previous: 'navigate_before',
    next: 'navigate_next'
  },
  label: 'Lista de secciones',
  orientation: 'horizontal',
  getItemAriaLabel: defaultAriaLabel
};