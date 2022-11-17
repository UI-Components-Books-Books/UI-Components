"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalStorage = void 0;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Hook para manejar el localStorage.
 *
 * Maneja automaticamente la creación y actualización de la información en el localStorage.
 * El uso es similar a useState excepto que pasamos una clave de almacenamiento local para que podamos
 * usar ese valor de forma predeterminada en la carga de la página en lugar del valor inicial especificado.
 *
 * @example
 * // Similar uso que el useState solo que el primer argumento es la llave del valor en el localStorage
 *
 * const [name, setName] = useLocalStorage("name", "Bob");
 *
 * @param {String} key - LLave relacionada al valor en el localStorage.
 * @param {any} initialValue - Valor del localStorage.
 *
 * @returns {any} Retorna el valor del Localstorage y el setter
 */

var useLocalStorage = function useLocalStorage(key, initialValue) {
  /**
    * Estado que va a almacenar nuestro valor.
    *
    * Pasamos la función para el estado inicial al useState,
    * para que esta solo se ejecute una vez.
    */
  var _useState = (0, _react.useState)(function () {
      /**
         * Dado que la API del localStorage no está disponible
         * en server side rendering comprobamos la existencia de está.
         */
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
        // Obtenemos el valor del localStorage usando la key.
        var item = window.localStorage.getItem(key);

        // Transformamos de JSON si no retornamos el initialValue.
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // Si hay un error retornamos el initialValue
        console.warn("Error in useLocalStorage: ".concat(error));
        return initialValue;
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];

  /**
    * Función usada para actualizar el valor
    * del localStorage.
    *
    * @param {*} value - Nuevo valor del localStorage.
    */
  var setValue = function setValue(value) {
    try {
      // Permite que value sea una función para tener la misma API que useState.
      var valueToStore = value instanceof Function ? value(storedValue) : value;

      // Guardamos el value en el estado
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        // Guardamos en el localStorage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Si hay un error retornamos un mensaje en consola.
      console.warn("Error in useLocalStorage: ".concat(error));
    }
  };
  return [storedValue, setValue];
};
exports.useLocalStorage = useLocalStorage;