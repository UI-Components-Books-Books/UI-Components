"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeOfComponent = exports.getChildrenByType = void 0;
var _react = require("react");
/**
 *
 *  Obtiene en string el tipo de componente o tag HTML, para los
 *  React.Fragment devolvera el tipo 'react.fragment'.
 *
 * @param {ReactNode} component
 * @returns {string} - El string que representa el tipo
 */
var typeOfComponent = function typeOfComponent(component) {
  var _component$props, _component$type;
  return (component === null || component === void 0 ? void 0 : (_component$props = component.props) === null || _component$props === void 0 ? void 0 : _component$props.__TYPE) || (component === null || component === void 0 ? void 0 : (_component$type = component.type) === null || _component$type === void 0 ? void 0 : _component$type.toString().replace('Symbol(react.fragment)', 'react.fragment')) || undefined;
};

/**
 *
 * @param {ReactNode} children - JSX children
 * @param {string[]} types - Tipos de children a encontrar.
 * @returns {ReactNode[]} Arreglo de children encontrados.
 * @example
 *  // Encuentra todas las ocurrencias de AccordionItem, div, React Fragment
 *  getChildrenByType(childre, ['AccordionItem', 'div', 'react.fragment'])
 */
exports.typeOfComponent = typeOfComponent;
var getChildrenByType = function getChildrenByType(children, types) {
  return _react.Children.toArray(children).filter(function (child) {
    return types.indexOf(typeOfComponent(child)) !== -1;
  });
};
exports.getChildrenByType = getChildrenByType;