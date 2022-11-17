"use strict";

var _react = require("@testing-library/react");
var _Kbd = require("components/Kbd");
var _jsxRuntime = require("react/jsx-runtime");
describe('Test in <Kbd/>', function () {
  test('should render children correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Kbd.Kbd, {
      children: "ctrl"
    }));
    expect(_react.screen.getByText(/ctrl/i)).toBeInTheDocument();
  });
});