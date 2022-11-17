"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDarkMode = void 0;
var _react = require("react");
var _useLocalStorage3 = require("./useLocalStorage");
var _useMedia = require("./useMedia");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Hook para manejar el Dark Mode.
 *
 * Agrega y remueve la propiedad "data-dark-mode" del Body element,
 * que sirve para controlar el tema en la aplicación. Además observa
 * las preferencias del usuario frente al modo oscuro.
 *
 * @example
 * const [darkMode, setDarkMode] = useDarkMode();
 *
 * @returns {Array} Retornamos nuestro enabled state y el setter.
 */
var useDarkMode = function useDarkMode() {
  /**
    * Usamos nuestro useLocalStorage Hook para guardar nuestro
    * estado sin importar que la página se recargue.
    */
  var _useLocalStorage = (0, _useLocalStorage3.useLocalStorage)('dark-mode-enabled'),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    enableState = _useLocalStorage2[0],
    setEnableState = _useLocalStorage2[1];

  /**
    * Comprueba si el usuario tiene en Navegador o el Sistema Operativo
    * con preferencia para dark mode.
    */
  var prefersDarkMode = (0, _useMedia.useMedia)(['(prefers-color-scheme: dark)'], [true], false);

  /**
    * Si enableState está definido entonces usar este, de otra manera usar el valor de
    * prefersDarkMode.
    */
  var enabled = typeof enableState !== 'undefined' ? enableState : prefersDarkMode;

  /**
    * Observa cambios en nuestra Media Query y lanza una
    * actualización a nuestro localStorage.
    */
  (0, _react.useEffect)(function () {
    setEnableState(prefersDarkMode);
  }, [prefersDarkMode]);

  /**
    * Efecto que agrega/remueve la propiedad "data-dark-mode"
    * del body element.
    */
  (0, _react.useEffect)(function () {
    var bodyElement = window.document.body;
    if (enabled) {
      bodyElement.setAttribute('data-dark-mode', enabled);
    } else {
      bodyElement.removeAttribute('data-dark-mode', enabled);
    }
  }, [enabled]);

  /**
    * Retornamos nuestro enabled state y el setter.
    */
  return [enabled, setEnableState];
};
exports.useDarkMode = useDarkMode;