"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portal = void 0;
var _reactDom = require("react-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _usePortal = require("hooks/usePortal");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Portal = function Portal(_ref) {
  var children = _ref.children,
    id = _ref.id;
  /**
    * Utilizamos el custom hook de usePortal para
    * obtener el elemento que vamos a usar
    * para crear nuestro portal.
    */
  var target = (0, _usePortal.usePortal)(id);
  return /*#__PURE__*/(0, _reactDom.createPortal)(children, target);
};
exports.Portal = Portal;
Portal.propTypes = {
  children: _propTypes.default.any,
  id: _propTypes.default.string.isRequired
};