"use strict";

var _react = require("@testing-library/react");
var _Icon = require("components/Icon");
var _iconsList = require("utils/icons/iconsList");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
describe('Test in <Icon/>', function () {
  var _iconList = _slicedToArray(_iconsList.iconList, 1),
    close = _iconList[0];
  test('should render correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
      name: close
    }));
    expect(_react.screen.getByTestId("".concat(close))).toBeInTheDocument();
  });
  test('should show "doesn\'t exist" if the icon doesn\'t exist', function () {
    // Silenciamos el error producido por los propTypes.
    var originalError = console.error;
    console.error = jest.fn();
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
      name: "undefined"
    }));
    expect(_react.screen.getByText('Doesn\'t exist')).toBeTruthy();
    console.error = originalError;
  });
  test('should have the "c-small" class if the size property is "small"', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
      name: close,
      size: "small"
    }));
    expect(_react.screen.getByTestId("".concat(close))).toHaveClass('c-small');
  });
  test('should have the "c-normal" class if the size property is "normal"', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
      name: close,
      size: "normal"
    }));
    expect(_react.screen.getByTestId("".concat(close))).toHaveClass('c-normal');
  });
  test('should have the "c-big" class if the size property is "big"', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
      name: close,
      size: "big"
    }));
    expect(_react.screen.getByTestId("".concat(close))).toHaveClass('c-big');
  });
});