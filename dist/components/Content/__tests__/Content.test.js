"use strict";

var _react = require("@testing-library/react");
var _Content = require("components/Content");
var _jsxRuntime = require("react/jsx-runtime");
describe('Test in <Content/>', function () {
  test('should render correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content.Content, {
      "data-testid": "content-test"
    }));
    expect(_react.screen.getByTestId('content-test')).toBeInTheDocument();
  });
  test('should render children correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content.Content, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "test text"
      })
    }));
    expect(_react.screen.getByText(/test text/i)).toBeInTheDocument();
  });
  test('should have a custom class', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content.Content, {
      addClass: "u-mx-2",
      "data-testid": "content-test"
    }));
    expect(_react.screen.getByTestId('content-test')).toHaveClass('u-mx-2');
  });
});