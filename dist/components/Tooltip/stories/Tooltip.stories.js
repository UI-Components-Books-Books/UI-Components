"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withArrow = exports.placement = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Tooltip = require("components/Tooltip");
var _Button = require("components/Button");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'ui-components/Tooltip',
  component: _Tooltip.Tooltip,
  decorators: [function (story) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "6",
        hd: "5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
          "justify-content": "center",
          "align-items": "center",
          addClass: "u-my-5",
          style: {
            gap: '1rem'
          },
          children: story()
        })
      })
    });
  }]
};
exports.default = _default;
var withArrow = function withArrow() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
    label: "with arrow",
    placement: "auto",
    hasArrow: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      label: "With arrow",
      size: "small",
      variant: "secondary",
      style: {
        borderRadius: '0.375rem'
      }
    })
  });
};
exports.withArrow = withArrow;
withArrow.storyName = 'with arrow';
var placement = function placement() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Auto",
      placement: "auto",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Auto",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Auto start",
      placement: "auto-start",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Auto-Start",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Auto end",
      placement: "auto-end",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Auto-End",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Top",
      placement: "top",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Top",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Top start",
      placement: "top-start",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Top-Start",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Top end",
      placement: "top-end",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Top-End",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Bottom",
      placement: "bottom",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Bottom",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Bottom start",
      placement: "bottom-start",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Bottom-Start",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Bottom end",
      placement: "bottom-end",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Bottom-End",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Right",
      placement: "right",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Right",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Right start",
      placement: "right-start",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Right-Start",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Right end",
      placement: "right-end",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Right-End",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Left",
      placement: "left",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Left",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Left start",
      placement: "left-start",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Left-Start",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.Tooltip, {
      label: "Left end",
      placement: "left-end",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        label: "Left-End",
        size: "small",
        variant: "secondary",
        style: {
          borderRadius: '0.375rem'
        }
      })
    })]
  });
};
exports.placement = placement;
placement.storyName = 'placement';