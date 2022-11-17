"use strict";

var _react = require("@testing-library/react");
var _Audio = require("components/Audio");
var _jsxRuntime = require("react/jsx-runtime");
describe('Test in <Audio/>', function () {
  test('should render correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Audio.Audio, {
      type: "Button"
    }));
    expect(_react.screen.getByRole('button', {
      name: /Reproduccir/i
    })).toBeInTheDocument();
  });
  test('should render correctly if the type is “Bar“', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Audio.Audio, {
      type: "Bar",
      "data-testid": "test-bar"
    }));
    expect(_react.screen.getByTestId('test-bar')).toBeInTheDocument();
  });
  test('should have “c-audio--small” class with the size property change', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Audio.Audio, {
      "data-testid": "test-audio",
      size: "small"
    }));
    expect(_react.screen.getByTestId('test-audio')).toHaveClass('c-audio--small');
  });
  test('should hide with a11y property', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Audio.Audio, {
      type: "Button",
      a11y: true
    }));
    expect(_react.screen.getByRole('button', {
      name: /Reproduccir/i
    })).toHaveAttribute('data-a11y', 'true');
  });
});