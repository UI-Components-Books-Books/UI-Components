"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnstyleWithIcon = exports.Unstyle = exports.Unordered = exports.Ordered = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _List = require("components/List");
var _Icon = require("components/Icon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'ui-components/List',
  components: _List.List,
  decorators: [function (story) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "5",
        hd: "4",
        children: story()
      })
    });
  }]
};
exports.default = _default;
var Ordered = function Ordered() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_List.OrderedList, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    })]
  });
};
exports.Ordered = Ordered;
Ordered.storyName = 'ordered';
var Unordered = function Unordered() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_List.UnorderedList, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    })]
  });
};
exports.Unordered = Unordered;
Unordered.storyName = 'unordered';
var Unstyle = function Unstyle() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_List.List, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.ListItem, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    })]
  });
};
exports.Unstyle = Unstyle;
Unstyle.storyName = 'unstyle';
var UnstyleWithIcon = function UnstyleWithIcon() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_List.List, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_List.ListItem, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
        name: "close"
      }), "Lorem ipsum dolor sit amet consectetur adipisicing elit."]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_List.ListItem, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
        name: "check"
      }), "Lorem ipsum dolor sit amet consectetur adipisicing elit."]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_List.ListItem, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
        name: "play"
      }), "Lorem ipsum dolor sit amet consectetur adipisicing elit."]
    })]
  });
};
exports.UnstyleWithIcon = UnstyleWithIcon;
UnstyleWithIcon.storyName = 'unstyle with icon';