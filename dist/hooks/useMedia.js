"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMedia = void 0;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Hook para crear Media Queries.
 *
 * Realiza la creación y control de Media queries personalizadas.
 * esto facilita el uso de estas en la lógica de cualquier componente.
 *
 * @example
 *  // Media query para controlar el número de columnas en una página.
 *
 *  const columnCount = useMedia(
 *   // Media queries
 *   ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
 *   // Cantidad de columnas ( Están relacionadas con las media queries por medio del indice del arreglo).
 *   [5, 4, 3],
 *   // Cantidad de columnas por defecto.
 *   2
 * );
 *
 * @param {Array} queries - Arreglo de queries.
 * @param {Array} values - Arreglo de valores de cada queries.
 * @param {any} defaultValue - Valor por defecto.
 *
 * @returns {any} Retorna el valor de la media quiery al cumplirse.
 */
var useMedia = function useMedia(queries, values, defaultValue) {
  /**
    * Estado que almacena el valor de la propiedad matches
    * del MediaQueryList.
    *
    * @link https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
    */
  var _useState = (0, _react.useState)(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];

  /**
    * Arreglo que contiene una media query list
    * por cada una de las queries.
    */
  var mediaQueryList = queries.map(function (query) {
    return window.matchMedia(query);
  });

  /**
    * Función utilizada para obtener uno de los valores de la propiedad values
    * basado en la propiedad matches del media query.
    *
    * @returns value - Valor proveniente de values.
    */
  var getValue = function getValue() {
    // Obtenemos el index del primer media query que haya hecho match.
    var index = mediaQueryList.findIndex(function (mediaQuery) {
      return mediaQuery.matches;
    });

    // Retornamos el valor relacionado o el defaultValue si no hay ninguno.
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };
  (0, _react.useEffect)(function () {
    // Agregamos el valor inicial al estado.
    setValue(getValue);

    /**
       * Función callback que se llama cada vez que
       * cambia el estado de la media query.
       *
       * @param {event} _
       */
    var handler = function handler(_) {
      return setValue(getValue);
    };

    // Agregamos un eventListener por cada uno de las media query.
    mediaQueryList.forEach(function (mediaQuery) {
      return mediaQuery.addEventListener('change', handler);
    });
    return function () {
      // Eliminamos el eventListener de cada media query.
      mediaQueryList.forEach(function (mediaQuery) {
        return mediaQuery.removeEventListener('change', handler);
      });
    };
  }, []);
  return value;
};
exports.useMedia = useMedia;