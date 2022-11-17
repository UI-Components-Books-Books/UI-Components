"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTheme = void 0;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Función recursiva permite aplanar un objeto.
 *
 * @param {Object} object
 * @returns Object
 */
var flatObject = function flatObject(object) {
  var newObject = {};
  for (var i in object) {
    if (_typeof(object[i]) === 'object') {
      var temporal = flatObject(object[i]);
      for (var j in temporal) {
        newObject = _objectSpread(_objectSpread({}, newObject), {}, _defineProperty({}, i.includes('accents') || i.includes('palette') ? j : "".concat(i, "-").concat(j), temporal[j]));
      }
    } else {
      newObject[i] = object[i];
    }
  }
  return newObject;
};

/**
 *
 * Función que permite crear un nuevo Tema
 * por medio de un objeto
 *
 * @param {Object} theme
 * @returns Object
 */
var createTheme = function createTheme(theme) {
  return flatObject(theme);
};
exports.createTheme = createTheme;