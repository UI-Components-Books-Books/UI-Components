"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnScreen = void 0;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Usamos este objeto para crear
 * las configuraciones básica del IntersectionObserver API,
 * en caso de que la propiedad options del hook venga vácia.
 */
var initialOptions = Object.freeze({
  root: null,
  rootMargin: '0px',
  threshold: 0
});

/**
 * Hook para detectar si un elemento es visible en pantalla.
 *

 * Este hooks le permite detectar fácilmente cuándo un elemento es visible en
 * pantalla, así como especificar que tanto del elemento debe ser visible antes
 * de ser considerado en la pantalla. Utiliza la IntersectionObserver API y todas
 * sus propiedades.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#intersection_observer_concepts_and_usage
 *
 * @example
 *  // Media query para controlar el número de columnas en una página.
 *
 *  const [ref, isVisible] = useOnScreen({
 *       rootMargin: "20px 10px",
 *       threshold: [0, 0.25, 0.5, 0.75, 1]
 *  });
 *
 * <div ref={ref}>Hey I'm on the screen: {JSON.stringify(observer)}</div>
 *
 * @param {Object} options - Objeto con las configuraciones utilizadas por la IntersectionObserver API.
 *
 * @returns {Array} setRef - Función para obtener la referencia del elemento.
 * @returns {Array} isIntersecting - Booleano que informa si el valor está en pantalla o no.
 */

var useOnScreen = function useOnScreen(options) {
  /**
    *  Si existe el objeto options desestructurarlo si utiliza el initialOptions.
    */
  var _ref = options || initialOptions,
    root = _ref.root,
    rootMargin = _ref.rootMargin,
    threshold = _ref.threshold;

  /**
    * Estado utilizado para guardar el valor cuando el elemento es visible.
    */
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isIntersecting = _useState2[0],
    setIntersecting = _useState2[1];

  /**
    * Estado para almacenar la referencia del elemento a observar.
    */
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    ref = _useState4[0],
    setRef = _useState4[1];
  (0, _react.useEffect)(function () {
    /**
       * Si no existe la referencia del elemento reiniciamos
       * nuestro isIntersecting Estado.
       */
    if (!ref) {
      setIntersecting(false);
      return;
    }

    /**
       * Creamos una nueva instacia de nuestra IntersectionObserver API.
       */
    var observer = new IntersectionObserver(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        entry = _ref3[0];
      /**
           * actualizamos nuestro estado cuando el
           * callback del observer se llame.
           */
      setIntersecting(entry.isIntersecting);
    }, {
      /**
           * configuraciones del la IntersectionObserver API.
           */
      root: root,
      rootMargin: rootMargin,
      threshold: threshold
    });

    /**
       * Agregamos la referencia del elemento a observar.
       */
    observer.observe(ref);
    return function () {
      observer.unobserve(ref);
    };
  }, [threshold, rootMargin, root, ref]);

  /**
    * Retornamos nuestro setter para la referencia
    * del elemento y el valor de la visibilidad del elemento.
    */
  return [setRef, isIntersecting];
};
exports.useOnScreen = useOnScreen;