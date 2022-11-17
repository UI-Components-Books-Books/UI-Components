"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePortal = void 0;
var _react = require("react");
/**
 *
 * Crea el elemento DOM que se utilizara como padre.
 *
 * @param {string} id - Id del contenedor
 * @returns {HTMLElement}
 */
var createRootElement = function createRootElement(id) {
  var rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
};

/**
 * Agrega elementos como último hijo del Body.
 * @param {HTMLElement} rootElem - Elemento a añadir
 */
var addRootElement = function addRootElement(rootElem) {
  document.body.append(rootElem);
};

/**
 * Hook para crear un React Portal.
 *
 * Maneja automaticamente la creación y desmontaje del elemento padre, por lo que no es
 * necesario asegurarse que el elemento ya exista en el Body.
 * @example
 *  const target = usePortal(id);
 *  return createPortal(children, target);
 *
 * @param {string} id - El id del contendor padre, e.g 'modal' o 'toggletip'.
 *
 * @returns {HTMLElement} El nodo del DOM que se usa como base del portal
 */
var usePortal = function usePortal(id) {
  var rootElement = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    // Busca si ya existe un elemento en el DOM
    var existingParent = document.querySelector("#".concat(id));

    // Si existe el elemento usarlo como padre si no crear un nuevo elemento DOM.
    var parentElement = existingParent || createRootElement(id);

    // Si no existe un elemento DOM agregar uno nuevo.
    if (!existingParent) {
      addRootElement(parentElement);
    }

    // Agregar elemento envoltoriO al padre.
    parentElement.append(rootElement.current);
    return function () {
      rootElement.current.remove();
      if (!parentElement.childElementCount) {
        parentElement.remove();
      }
    };
  }, [id]);

  /**
    * Es importante manejar esto de forma diferida (lazy):
    * - Se necesita que el primer render contenga el elemento DOM,
    *   pero no podemos agregarlo al useEffect.
    * - No podemos hacer 'const rootElementRef = useRef(document.createLement('div'))'
    *   dado que esto se ejecutará cada vez que se renderice.
    * - Queremos que la referencia apunte siempre al mismo elemento DOM y que sólo se ejecute
    *   una vez.
    * @link https://es.reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
    */
  function getRootElement() {
    if (!rootElement.current) {
      rootElement.current = document.createElement('div');
    }
    return rootElement.current;
  }
  return getRootElement();
};
exports.usePortal = usePortal;