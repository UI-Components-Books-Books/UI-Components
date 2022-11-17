"use strict";

var _react = require("@testing-library/react");
var _Link = require("components/Link");
var _jsxRuntime = require("react/jsx-runtime");
describe('Test in <Link/>', function () {
  test('should render correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {}));
    expect(_react.screen.getByRole('link', /Default label to link/i)).toBeInTheDocument();
  });
  test('should have the "target" and "rel" properties', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      isExternal: true
    }));
    var element = _react.screen.getByRole('link', /Default label to link/i);
    expect(element).toHaveAttribute('target', '_blank');
    expect(element).toHaveAttribute('rel', 'noopener');
  });
  test('should have a custom class', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
      addClass: "u-text-secondary-200"
    }));
    expect(_react.screen.getByRole('link', /Default label to link/i)).toHaveClass('u-text-secondary-200');
  });
});