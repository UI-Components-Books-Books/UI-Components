"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ThemeProvider = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var children = _ref.children,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? {} : _ref$theme;
  /**
    * Función encargada de agregas las nuevas
    * variables de color a una hoja de estilos.
    * @param {Object} customProperties
    */
  var updateCSSProperties = function updateCSSProperties(customProperties) {
    // Creamos el elemento style.
    var styleElement = document.createElement('style');

    // Agregamos el elemento <style> al <head>.
    document.head.append(styleElement);

    // Referenciamos la hoja de estilos del styleElement.
    var styleSheet = styleElement.sheet;

    // Variable que almacenara todas las reglas de CSS.
    var rule = '';
    for (var variable in customProperties) {
      rule += "--clr-".concat(variable, ": ").concat(customProperties[variable], ";\n");
    }

    // Insertamos las reglas del CSS a la hoja de estilos.
    styleSheet.insertRule(":root{".concat(rule, "}"));
  };
  (0, _react.useEffect)(function () {
    updateCSSProperties(theme);
  }, [theme]);
  return children;
});
exports.ThemeProvider = ThemeProvider;
ThemeProvider.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.element]),
  theme: _propTypes.default.object.isRequired
};