"use strict";

var _react = require("@testing-library/react");
var _Col = require("components/Col");
var _jsxRuntime = require("react/jsx-runtime");
describe('Test in <Col/>', function () {
  test('should render correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
      "data-testid": "test-col"
    }));
    expect(_react.screen.getByTestId('test-col')).toBeInTheDocument();
  });
  test('should render children correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "children text"
      })
    }));
    expect(_react.screen.getByText(/children text/i)).toBeInTheDocument();
  });
  test('should have all width properties', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
      xs: "12",
      xm: "11",
      sm: "10",
      mm: "9",
      md: "8",
      lg: "7",
      hd: "6",
      "data-testid": "test-col"
    }));
    expect(_react.screen.getByTestId('test-col')).toHaveAttribute('xs', '12');
    expect(_react.screen.getByTestId('test-col')).toHaveAttribute('xm', '11');
    expect(_react.screen.getByTestId('test-col')).toHaveAttribute('sm', '10');
    expect(_react.screen.getByTestId('test-col')).toHaveAttribute('mm', '9');
    expect(_react.screen.getByTestId('test-col')).toHaveAttribute('md', '8');
    expect(_react.screen.getByTestId('test-col')).toHaveAttribute('lg', '7');
    expect(_react.screen.getByTestId('test-col')).toHaveAttribute('hd', '6');
  });
});