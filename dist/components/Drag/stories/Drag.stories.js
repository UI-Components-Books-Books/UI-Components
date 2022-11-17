"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithValidation = exports.MultipleDrags = exports.MultipleContainers = exports.BasicSetup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Button = require("components/Button");
var _Drag = require("components/Drag");
var _DragStoriesModule = _interopRequireDefault(require("./DragStories.module.scss"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = {
  title: 'ui-components/Drag',
  component: _Drag.DragAndDrop
};
exports.default = _default;
var BasicSetup = function BasicSetup() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.DragAndDrop, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "5",
        hd: "4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.GeneralDraggable, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Draggable, {
            id: "A",
            label: "Draggable item",
            disabledDefaultAttributes: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
              icon: {
                name: 'open_with',
                size: 'big'
              },
              label: "draggable"
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "5",
        hd: "4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Droppable, {
          id: "droppable",
          validate: ['A'],
          label: "droppable",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            style: {
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'var(--clr-neutral-500)'
            },
            children: "Droppable"
          })
        })
      })]
    })
  });
};
exports.BasicSetup = BasicSetup;
BasicSetup.storyName = 'basic setup';
var MultipleContainers = function MultipleContainers() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.DragAndDrop, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "5",
        hd: "4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.GeneralDraggable, {
          addClass: _DragStoriesModule.default['c-general-container'],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Draggable, {
            id: "A1",
            label: "Draggable item",
            disabledDefaultAttributes: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
              icon: {
                name: 'open_with',
                size: 'big'
              },
              label: "draggable"
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        md: "12",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
          "justify-content": "center",
          "align-items": "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
            xs: "11",
            mm: "10",
            md: "9",
            lg: "5",
            hd: "4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Droppable, {
              id: "A",
              validate: ['A'],
              label: "droppable",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                style: {
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: 'var(--clr-neutral-500)'
                },
                children: "Droppable A"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
            xs: "11",
            mm: "10",
            md: "9",
            lg: "5",
            hd: "4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Droppable, {
              id: "B",
              validate: ['A'],
              label: "droppable",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                style: {
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: 'var(--clr-neutral-500)'
                },
                children: "Droppable B"
              })
            })
          })]
        })
      })]
    })
  });
};
exports.MultipleContainers = MultipleContainers;
MultipleContainers.storyName = 'multiple containers';
var MultipleDrags = function MultipleDrags() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.DragAndDrop, {
    multipleDrags: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "5",
        hd: "5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Drag.GeneralDraggable, {
          addClass: _DragStoriesModule.default['c-general-container'],
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Draggable, {
            id: "A1",
            label: "Draggable item",
            disabledDefaultAttributes: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
              icon: {
                name: 'open_with',
                size: 'big'
              },
              label: "draggable A1"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Draggable, {
            id: "B1",
            label: "Draggable item",
            disabledDefaultAttributes: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
              icon: {
                name: 'open_with',
                size: 'big'
              },
              label: "draggable B1"
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        md: "12",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
          "justify-content": "center",
          "align-items": "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
            xs: "11",
            mm: "10",
            md: "9",
            lg: "5",
            hd: "4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Droppable, {
              id: "A",
              validate: ['A1', 'B1'],
              label: "droppable",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                style: {
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: 'var(--clr-neutral-500)'
                },
                children: "Droppable A"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
            xs: "11",
            mm: "10",
            md: "9",
            lg: "5",
            hd: "4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Droppable, {
              id: "B",
              validate: ['A1', 'B1'],
              label: "droppable",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                style: {
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: 'var(--clr-neutral-500)'
                },
                children: "Droppable B"
              })
            })
          })]
        })
      })]
    })
  });
};
exports.MultipleDrags = MultipleDrags;
MultipleDrags.storyName = 'multiple drags';
var WithValidation = function WithValidation() {
  var _useState = (0, _react.useState)({
      validate: false,
      reboot: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    validate = _useState2[0],
    setValidate = _useState2[1];
  var _useState3 = (0, _react.useState)({
      check: true,
      reset: true
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    button = _useState4[0],
    setButton = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];
  var handleValidate = function handleValidate() {
    setValidate(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        validate: true
      });
    });
    if (validate.reboot) {
      setValidate(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          reboot: false
        });
      });
    }
    if (items.length < 3) {
      return setButton({
        check: true,
        reset: false
      });
    }
    setButton(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        check: true
      });
    });
  };
  var handleReboot = function handleReboot() {
    setButton({
      check: true,
      reset: true
    });
    setValidate({
      validate: false,
      reboot: true
    });
  };
  (0, _react.useEffect)(function () {
    if (items.length > 0) {
      setButton(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          check: false
        });
      });
    }
  }, [items]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.DragAndDrop, {
    multipleDrags: true,
    validate: validate.validate,
    onValidate: setItems,
    reboot: validate.reboot,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "6",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Drag.GeneralDraggable, {
          addClass: _DragStoriesModule.default['c-general-container'],
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Draggable, {
            id: "A1",
            label: "Draggable first item",
            addClass: _DragStoriesModule.default['c-draggable'],
            disabledDefaultAttributes: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
              icon: {
                name: 'open_with',
                size: 'big'
              },
              label: "draggable A1"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Draggable, {
            id: "B1",
            label: "Draggable second item",
            addClass: _DragStoriesModule.default['c-draggable'],
            disabledDefaultAttributes: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
              icon: {
                name: 'open_with',
                size: 'big'
              },
              label: "draggable B1"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Draggable, {
            id: "C1",
            label: "Draggable third",
            addClass: _DragStoriesModule.default['c-draggable'],
            disabledDefaultAttributes: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
              icon: {
                name: 'open_with',
                size: 'big'
              },
              label: "draggable C1"
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        md: "12",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
          "justify-content": "center",
          "align-items": "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
            xs: "11",
            mm: "10",
            md: "9",
            lg: "5",
            hd: "4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Droppable, {
              id: "A",
              validate: ['A1', 'C1'],
              label: "droppable",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                style: {
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: 'var(--clr-neutral-500)'
                },
                children: "Droppable A - only accepts [A1, C1]"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
            xs: "11",
            mm: "10",
            md: "9",
            lg: "5",
            hd: "4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drag.Droppable, {
              id: "B",
              validate: ['B1'],
              label: "droppable",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                style: {
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: 'var(--clr-neutral-500)'
                },
                children: "Droppable B - only accepts [B1]"
              })
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        md: "12",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
          "justify-content": "center",
          "align-items": "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
            label: "validate",
            addClass: "u-mx-2",
            onClick: handleValidate,
            disabled: button.check
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
            label: "reboot",
            onClick: handleReboot,
            disabled: button.reset
          })]
        })
      })]
    })
  });
};
exports.WithValidation = WithValidation;
WithValidation.storyName = 'with validation';