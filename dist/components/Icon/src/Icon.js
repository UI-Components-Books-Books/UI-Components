"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _typeValidation = require("utils/validations/typeValidation");
var _iconsList = require("utils/icons/iconsList");
var _IconModule = _interopRequireDefault(require("./Icon.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Icon = function Icon(_ref) {
  var name = _ref.name,
    size = _ref.size,
    addClass = _ref.addClass;
  /**
    * Evaluamos la propiedad name para no retonar nada si está no existe.
    */
  if (!name) {
    return null;
  }

  /**
    * Si el nombre del icono no está en el array iconList, entonces
    * se muestra un mensaje informativo.
    */
  if (!_iconsList.iconList.includes(name)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: "Doesn't exist"
    });
  }

  /**
    * Se crea la URL del icono apartir del nombre de este.
    */
  var svgURL = require("../../../assets/icons/svg/".concat(name, ".svg"));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: "".concat(_IconModule.default['c-icon'], " ").concat(_IconModule.default["c-".concat(size)], " ").concat(addClass !== null && addClass !== void 0 ? addClass : ''),
    "aria-hidden": "true",
    "data-testid": name,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("use", {
      xlinkHref: "".concat(svgURL, "#").concat(name)
    })
  });
};
exports.Icon = Icon;
Icon.propTypes = {
  name: _propTypes.default.oneOf(_iconsList.iconList),
  size: _propTypes.default.oneOf(['small', 'normal', 'big']),
  addClass: _propTypes.default.string,
  __TYPE: (0, _typeValidation.typeValidation)('Icon')
};
Icon.defaultProps = {
  size: 'normal',
  __TYPE: 'Icon'
};