"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithDefautlIndex = exports.WithButtonSection = exports.WithButton = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Button = require("components/Button");
var _Panel = require("components/Panel");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'ui-components/Panel',
  component: _Panel.Panel,
  decorators: [function (story) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "7",
        hd: "6",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
          display: "flex",
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
var Default = function Default() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Panel.Panel, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.NavSection, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "First section"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Second section"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Third section"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Fourth section"
    })]
  });
};
exports.Default = Default;
Default.storyName = 'default';
var WithButton = function WithButton() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Panel.Panel, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.NavSection, {
      showNextButton: true,
      showPrevButton: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "First section"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Second section "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Third section "
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Fourth section "
    })]
  });
};
exports.WithButton = WithButton;
WithButton.storyName = 'with buttons';
var WithDefautlIndex = function WithDefautlIndex() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Panel.Panel, {
    defaultIndex: 3,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.NavSection, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "First section"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Second section"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Third section"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Fourth section "
    })]
  });
};
exports.WithDefautlIndex = WithDefautlIndex;
WithDefautlIndex.storyName = 'with default index';
var WithButtonSection = function WithButtonSection() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Panel.Panel, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.NavSection, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Panel.Section, {
      children: ["First section", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.ButtonSection, {
        section: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          label: "Go to the second section",
          addClass: "u-my-4",
          size: "small",
          hasAriaLabel: true,
          icon: {
            name: 'navigate_next',
            size: 'big'
          },
          style: {
            borderRadius: '0.375rem'
          }
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Second section "
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Panel.Section, {
      children: ["Third section", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.ButtonSection, {
        section: 1,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          label: "Go to the first section",
          addClass: "u-my-4",
          size: "small",
          hasAriaLabel: true,
          icon: {
            name: 'navigate_before',
            position: 'left',
            size: 'big'
          },
          style: {
            borderRadius: '0.375rem'
          }
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.Section, {
      children: "Fourth section "
    })]
  });
};
exports.WithButtonSection = WithButtonSection;
WithButtonSection.storyName = 'with button section';