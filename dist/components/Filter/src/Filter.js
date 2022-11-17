"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Filter = function Filter(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", _objectSpread(_objectSpread({
    id: "hc_extension_svg_filters"
  }, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      height: "0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("defs", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("filter", {
          id: "hc_extension_off",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "0 1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "0 1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0 1"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("filter", {
          id: "hc_extension_highcontrast",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              exponent: "3.0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              exponent: "3.0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              exponent: "3.0"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("filter", {
          id: "hc_extension_highcontrast_back",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              exponent: "0.33"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              exponent: "0.33"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              exponent: "0.33"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_grayscale",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
            type: "matrix",
            values: "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              exponent: "3"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              exponent: "3"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              exponent: "3"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("filter", {
          id: "hc_extension_grayscale_back",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              exponent: "0.33"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              exponent: "0.33"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              exponent: "0.33"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("filter", {
          id: "hc_extension_invert",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              amplitude: "-1",
              exponent: "3",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              amplitude: "-1",
              exponent: "3",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              amplitude: "-1",
              exponent: "3",
              offset: "1"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_invert_back",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "1 0"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              exponent: "1.7"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              exponent: "1.7"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              exponent: "1.7"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_yellow_on_black",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              amplitude: "-1",
              exponent: "3",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              amplitude: "-1",
              exponent: "3",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              amplitude: "-1",
              exponent: "3",
              offset: "1"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
            type: "matrix",
            values: "0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_yellow_on_black_back",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "1 0"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              exponent: "0.33"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              exponent: "0.33"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              exponent: "0.33"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_red_on_white",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          filterUnits: "objectBoundingBox",
          primitiveUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
            type: "matrix",
            values: "                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            in: "colormatrix",
            result: "componentTransfer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "0.97 0.52"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "1 0.03"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0.98 0.06"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncA", {
              type: "table",
              tableValues: "0 1"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feBlend", {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_red_on_white_back",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "0 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0 0"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_green_on_blue",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          filterUnits: "objectBoundingBox",
          primitiveUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            in: "colormatrix",
            result: "componentTransfer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "0.09 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "1 0.16"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0 1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncA", {
              type: "table",
              tableValues: "0 1"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feBlend", {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_green_on_blue_back",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "0 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0 0"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_yellow_on_blue",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          filterUnits: "objectBoundingBox",
          primitiveUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            in: "colormatrix",
            result: "componentTransfer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "0.99 0.16"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0 1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncA", {
              type: "table",
              tableValues: "0 1"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feBlend", {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_yellow_on_blue_back",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "0 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0 0"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_white_on_black",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          filterUnits: "objectBoundingBox",
          primitiveUnits: "userSpaceOnUse",
          colorInterpolationFilters: "sRGB",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feColorMatrix", {
            type: "matrix",
            values: ".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0",
            in: "SourceGraphic",
            result: "colormatrix"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            in: "colormatrix",
            result: "componentTransfer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0.98 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncA", {
              type: "table",
              tableValues: "0 1"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feBlend", {
            mode: "normal",
            in: "componentTransfer",
            in2: "SourceGraphic",
            result: "blend"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("filter", {
          id: "hc_extension_white_on_black_back",
          x: "0",
          y: "0",
          width: "99999",
          height: "99999",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "table",
              tableValues: "1 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "table",
              tableValues: "0 0"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "table",
              tableValues: "0 0"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("feComponentTransfer", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncR", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncG", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("feFuncB", {
              type: "gamma",
              amplitude: "-1",
              exponent: "5",
              offset: "1"
            })]
          })]
        })]
      })
    })
  }));
};
exports.Filter = Filter;