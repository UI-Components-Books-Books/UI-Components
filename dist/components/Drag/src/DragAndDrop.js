"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragAndDropContext = exports.DragAndDrop = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@dnd-kit/core");
var _modifiers = require("@dnd-kit/modifiers");
var _KeyboardCoordinates = require("./KeyboardCoordinates");
var _DragModule = _interopRequireDefault(require("./Drag.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
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
/**
 * Creamos el contexto que usamos
 * para poder pasar diferentes valores
 * al componente Draggable de una forma
 * más sencilla.
 */
var DragAndDropContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Función utilizada para devolver de los hijos de un
 * componente el elemento de un tipo especifico.
 *
 * @param {ReactElement[]} children - Hijos del componente.
 * @param {String} type - Tipo de componente.
 * @returns {ReactElement} Elemento de React.
 */
exports.DragAndDropContext = DragAndDropContext;
var getChildrenByType = function getChildrenByType(children, type) {
  return _react.Children.map(children, function (child) {
    var _child$props;
    if (! /*#__PURE__*/(0, _react.isValidElement)(child)) return;

    // Utilizamos esta validación para preever errores cuando son string.
    if (!child.props) return;
    if ((child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.__TYPE) === type) {
      return child;
    }
    if (child.props.children) {
      return getChildrenByType(child.props.children, type);
    }
  });
};

/**
 * Objeto utilizado para la parte de accesibilidad.
 * este contiene los diferentes anuncios por defecto
 * que los lectores de pantalla dirán cuando se ejecuten
 * los eventos: onDragCancel, onDragStart, onDragEnd y onDragOver.
 */
var defaultAnnouncements = {
  onDragStart: function onDragStart(_ref) {
    var active = _ref.active;
    return "Se ha agarrado el elemento arrastrable ".concat(active.data.current.label, ".");
  },
  onDragOver: function onDragOver(_ref2) {
    var active = _ref2.active,
      over = _ref2.over;
    if (over) {
      return "El elemento arrastrable ".concat(active.data.current.label, " se movi\xF3 sobre la \xE1rea desplegable ").concat(over.data.current.label, ".");
    }
    return "El elemento arrastrable ".concat(active.data.current.label, " ya no est\xE1 sobre una \xE1rea desplegable.");
  },
  onDragEnd: function onDragEnd(_ref3) {
    var active = _ref3.active,
      over = _ref3.over;
    if (over) {
      return "El elemento arrastrable ".concat(active.data.current.label, " se solt\xF3 sobre la \xE1rea desplegable ").concat(over.data.current.label, ".");
    }
    return "El elemento arrastrable item ".concat(active.data.current.label, " se elimin\xF3.");
  },
  onDragCancel: function onDragCancel(_ref4) {
    var active = _ref4.active;
    return "Se cancelo el arrastre. El elemento arrastrable ".concat(active.data.current.label, " se elimin\xF3.");
  }
};
var DragAndDrop = function DragAndDrop(_ref5) {
  var childrenProps = _ref5.children,
    multipleDrags = _ref5.multipleDrags,
    onValidate = _ref5.onValidate,
    validate = _ref5.validate,
    reboot = _ref5.reboot,
    propValidate = _ref5.propValidate,
    modifiersProp = _ref5.modifiers,
    announcements = _ref5.announcements;
  /**
    * Utilizamos este estado para almacenar la lista
    * de "drags" que están en su contenedor "drop" correcto.
    */
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    validateId = _useState2[0],
    setValidateId = _useState2[1];

  /**
    * Estado utilizado para almacenar el "id" del elemento "drag"
    * seleccionado. Esto nos ayuda para el DragOverlay y para aplicar
    * estilos al componente cuando está en dicho estado.
    */
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    activeId = _useState4[0],
    setActiveId = _useState4[1];

  /**
    * Estado principal del componente, este se encarga
    * de almacenar la posición de los elementos "drag"
    * en los contenedores "drop".
    */
  var _useState5 = (0, _react.useState)(function () {
      return initialState();
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];

  /**
    * Función utilizada para inicializar el estado items.
    * esta extrae los id de los contendores "drag" y los
    * estructura en un objecto.
    *
    * @returns {Object} - Objeto con los id de cada elemento drop.
    */
  function initialState() {
    return [].concat(_toConsumableArray(getChildrenByType(childrenProps, 'droppable')), _toConsumableArray(getChildrenByType(childrenProps, 'general-draggable'))).reduce(function (list, value) {
      return _objectSpread(_objectSpread({}, list), {}, _defineProperty({}, value.props.id, value.props.children ? _toConsumableArray(getChildrenByType(value.props.children, 'draggable').map(function (item) {
        return item.props.id;
      })) : []));
    }, {});
  }

  /**
    * Objeto con los modificadores permitidos
    * por el componente.
    */
  var modifiers = Object.freeze({
    restrictToVerticalAxis: _modifiers.restrictToVerticalAxis,
    restrictToHorizontalAxis: _modifiers.restrictToHorizontalAxis
  });

  /**
    * Sensores que detectan los
    * diferentes métodos de entrada
    * entre ellos: Mouse, Touch y Keyboard.
    */
  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.MouseSensor), (0, _core.useSensor)(_core.TouchSensor), (0, _core.useSensor)(_core.KeyboardSensor, {
    coordinateGetter: _KeyboardCoordinates.coordinateGetter
  }));

  /**
    * Función que evalua si el elemento "drag"
    * dentro del contenedor "drop" es correcto.
    * De esta manera actualizamos nuestro estado validateId.
    *
    * @param {Object} container - Objeto del contenedor "drop"
    * @param {String} id - Id del "drag" seleccionado.
    */
  var validateDrags = function validateDrags(container, id) {
    // Obtenemos la llave que corresponde al elemento base de los drag.
    var baseContainer = Object.keys(items).pop();
    if (baseContainer !== container.id && container.data.current.validate.includes(id)) {
      return setValidateId(function (prev) {
        return [].concat(_toConsumableArray(prev.filter(function (item) {
          return item !== id;
        })), [id]);
      });
    }
    setValidateId(function (prev) {
      return _toConsumableArray(prev.filter(function (item) {
        return item !== id;
      }));
    });
  };

  /**
    * Función utilizada para buscar entre el estado items
    * un elemento o contenedor especifico.
    * @param {String} id - Id del elemento|contenedor a buscar.
    * @returns {String}
    */
  var findContainer = function findContainer(id) {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find(function (key) {
      return items[key].includes(id);
    });
  };

  /**
    * Función utilizada en el evento onDragEnd.
    * Se encarga de actualizar el estado item,
    * dependiendo del movimiento de elemento "drag"
    * entre los diferentes contenedores "drop".
    *
    * @param {Object} - Objeto con las propiedades active y over.
    * @returns
    */
  var onDragEnd = function onDragEnd(_ref6) {
    var active = _ref6.active,
      over = _ref6.over;
    if (!over) return;
    setActiveId(null);
    validateDrags(over, active.id);

    // Contendor en el cual el drag se soltó.
    var overContainer = findContainer(over.id);
    // Contenedor donde estaba el drag.
    var activeContainer = findContainer(active.id);
    if (activeContainer !== overContainer) {
      // Si la propiedad multipleDrags está en true.
      if (multipleDrags) {
        return setItems(function (items) {
          var _objectSpread3;
          return _objectSpread(_objectSpread({}, items), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, activeContainer, items[activeContainer].filter(function (item) {
            return item !== active.id;
          })), _defineProperty(_objectSpread3, overContainer, [].concat(_toConsumableArray(items[overContainer]), [active.id])), _objectSpread3));
        });
      }

      // Obtenemos la llave que corresponde al elemento base de los drag.
      var baseContainer = Object.keys(items).pop();
      setItems(function (items) {
        var _objectSpread4;
        return _objectSpread(_objectSpread({}, items), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, overContainer, overContainer === baseContainer ? [].concat(_toConsumableArray(items[overContainer]), [active.id]) : [active.id]), _defineProperty(_objectSpread4, activeContainer, overContainer === baseContainer ? items[activeContainer].filter(function (item) {
          return item !== active.id;
        }) : [].concat(_toConsumableArray(items[activeContainer].filter(function (item) {
          return item !== active.id;
        })), _toConsumableArray(items[overContainer]))), _objectSpread4));
      });
    }
  };

  /**
    * Función utilizada para actualizar los hijos de elementos que
    * están dentro de la propiedad children del componente.
    * En especial se encarga de agregar los elementos "drag" como hijo
    * de los contenedores "drop".
    *
    * @param {ReactElement[]} children - Hijos del componente.
    * @returns
    */
  var updatedChild = function updatedChild(children) {
    return _react.Children.map(children, function (child) {
      if (!child.props) return child;
      if (child.props.__TYPE === 'draggable') return;

      /**
          * Comprueba que el child este en el estado items y además
          * que tenga uno o más elementos "drag" en su interior.
          */
      if (child.props.id in items && items[child.props.id].length > 0) {
        return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread({}, child.props), _toConsumableArray(items[child.props.id].map(function (item) {
          return getChildrenByType(childrenProps, 'draggable').filter(function (drag) {
            return drag.props.id === item;
          });
        }).flat()));
      }
      if (child.props.children) {
        return /*#__PURE__*/(0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
          children: updatedChild(child.props.children)
        }));
      }
      return child;
    });
  };

  /**
    * Función que replica la estructura del componente "draggable"
    * pero sin la funcionalidad del useDraggable, dado de que los elementos
    * que recibe el componente DragOverlay no deben ser elementos que se
    * puedan arrastrar.
    *
    * @link https://docs.dndkit.com/api-documentation/draggable/drag-overlay
    * @returns {ReactElement} - Elemento hijo del draggable.
    */
  var getDragOverlay = function getDragOverlay() {
    var child = getChildrenByType(childrenProps, 'draggable').filter(function (item) {
      return item.props.id === activeId;
    }).reduce(function (object, item) {
      return _objectSpread(_objectSpread({}, object), item.props);
    }, {});
    return /*#__PURE__*/(0, _react.createElement)((child === null || child === void 0 ? void 0 : child.element) || 'div', {
      className: "".concat(_DragModule.default['c-draggable'], " ").concat(child === null || child === void 0 ? void 0 : child.addClass)
    }, [child.children]);
  };

  /**
    * Objeto que contiene las transiciones utilizadas
    * por el componente DragOverlay.
    */
  var dropAnimation = {
    sideEffects: (0, _core.defaultDropAnimationSideEffects)({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  };

  /**
    * Efecto que se encarga de mandar el valor el estado validateId
    * a través de la propiedade onValidate.
    */
  (0, _react.useEffect)(function () {
    if (validateId.length > 0 && onValidate) onValidate(validateId);
  }, [validateId, onValidate]);

  /**
    * Efecto que se encarga de actualzar de reinicar el estado items
    * cada vez que la propiedad reboot esté en true.
    */
  (0, _react.useEffect)(function () {
    if (reboot) setItems(function () {
      return initialState();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reboot]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DragAndDropContext.Provider, {
    value: {
      listId: validateId,
      propValidate: propValidate,
      validate: validate,
      isDragging: activeId
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.DndContext, _objectSpread(_objectSpread({
      sensors: sensors,
      accessibility: {
        announcements: announcements
      },
      onDragStart: function onDragStart(_ref7) {
        var active = _ref7.active;
        return setActiveId(active.id);
      },
      onDragEnd: onDragEnd,
      onDragCancel: function onDragCancel() {
        return setActiveId(null);
      }
    }, modifiersProp && {
      modifiers: [modifiers[modifiersProp]]
    }), {}, {
      children: [updatedChild(childrenProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DragOverlay, {
        dropAnimation: dropAnimation,
        children: activeId && getDragOverlay()
      })]
    }))
  });
};
exports.DragAndDrop = DragAndDrop;
DragAndDrop.defaultProps = {
  multipleDrags: false,
  validate: false,
  reboot: false,
  propValidate: 'data-validation',
  announcements: defaultAnnouncements
};
DragAndDrop.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element), _propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]),
  multipleDrags: _propTypes.default.bool,
  onValidate: _propTypes.default.func,
  reboot: _propTypes.default.bool,
  validate: _propTypes.default.bool.isRequired,
  propValidate: _propTypes.default.string.isRequired,
  modifiers: _propTypes.default.oneOf(['restrictToVerticalAxis', 'restrictToHorizontalAxis']),
  announcements: _propTypes.default.object.isRequired
};