"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeValidation = void 0;
/**
 * Se asegura que alguna propiedad del componente
 * no se sobrescriba.
 *
 * @param {string} expectedType - El tipo esperado para validar
 * @returns {func} función de validación personalizada
 */
var typeValidation = function typeValidation(expectedType) {
  return function (props, propName, componentName) {
    if (props[propName] !== expectedType) {
      return new Error("'".concat(propName, "' in '").concat(componentName, "' \n\n NO puedes pasar un valor de props para '").concat(propName, "'.") + 'La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.');
    }
  };
};
exports.typeValidation = typeValidation;