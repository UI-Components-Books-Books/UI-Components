"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithCustomContent = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Button = require("components/Button");
var _Image = require("components/Image");
var _Paper = require("components/Paper");
var _Tour = require("components/Tour");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = {
  title: 'ui-components/Tour',
  component: _Tour.Tour,
  decorators: [function (story) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: story()
    });
  }]
};
exports.default = _default;
var Template = function Template() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
      xs: "11",
      mm: "10",
      md: "9",
      hd: "8",
      lg: "7",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.Paper, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "paragraph u-my-4",
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta minima neque saepe architecto cupiditate impedit mollitia nesciunt similique accusantium tempora id enim, placeat omnis in, facere sit quasi quisquam doloremque nisi officiis tempore porro temporibus voluptatibus? Minus delectus pariatur porro officia deserunt, voluptatum totam impedit? Rem recusandae sed ad? Molestias, distinctio explicabo. Tenetur quis facere recusandae excepturi reiciendis soluta, odio nobis itaque fugit adipisci ut officia corporis eligendi harum. Minima in quasi doloribus reiciendis alias, beatae molestiae omnis dolores impedit expedita magnam cupiditate quas velit."
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
      xs: "11",
      mm: "10",
      md: "9",
      hd: "8",
      lg: "7",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
        "justify-content": "space-evenly",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          addClass: "download",
          label: "Download"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          addClass: "next",
          label: "Next"
        })]
      })
    })]
  });
};
var Default = function Default() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var buttonRef = (0, _react.useRef)();
  var onClose = function onClose(value) {
    setIsOpen(value);
  };
  var steps = [{
    target: '.paragraph',
    content: 'Paragraph'
  }, {
    target: '.download',
    content: 'Download button'
  }, {
    target: '.next',
    content: 'Next button'
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tour.Tour, {
      steps: steps,
      isOpen: isOpen,
      onClose: onClose,
      finalFocusRef: buttonRef
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
      xs: "11",
      mm: "10",
      md: "9",
      hd: "8",
      lg: "7",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        ref: buttonRef,
        label: "Start tour",
        addClass: "u-my-6",
        onClick: function onClick() {
          return setIsOpen(!isOpen);
        }
      })
    }), Template()]
  });
};
exports.Default = Default;
Default.storyName = 'default';
var WithCustomContent = function WithCustomContent() {
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var buttonRef = (0, _react.useRef)();
  var onClose = function onClose(value) {
    setIsOpen(value);
  };
  var steps = [{
    target: '.paragraph',
    placement: 'left',
    content: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Col.Col, {
        md: "12",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "u-my-2",
          children: "Paragraph"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, {
          url: "https://images.pexels.com/photos/1545346/pexels-photo-1545346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          noCaption: true,
          width: "180"
        })]
      })
    })
  }, {
    target: '.download',
    content: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "Download"
      }), " button"]
    })
  }, {
    target: '.next',
    content: /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
        children: "Next"
      }), " button"]
    })
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tour.Tour, {
      steps: steps,
      isOpen: isOpen,
      onClose: onClose,
      finalFocusRef: buttonRef
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
      xs: "11",
      mm: "10",
      md: "9",
      hd: "8",
      lg: "7",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
        ref: buttonRef,
        label: "Start tour",
        addClass: "u-my-6",
        onClick: function onClick() {
          return setIsOpen(!isOpen);
        }
      })
    }), Template()]
  });
};
exports.WithCustomContent = WithCustomContent;
WithCustomContent.storyName = 'with custom content';