"use strict";

var _react = require("@testing-library/react");
var _Button = require("components/Button");
var _jsxRuntime = require("react/jsx-runtime");
describe('Test in <Button/>', function () {
  test('should render correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {}));
    expect(_react.screen.getByRole('button', {
      name: /Button/i
    })).toBeInTheDocument();
  });
  test('should have aria-label attribute', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      label: "delete",
      hasAriaLabel: true
    }));
    expect(_react.screen.getByRole('button', {
      'aria-label': /delete/i
    })).toBeInTheDocument();
  });
  test('should be disabled', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      disabled: true
    }));
    expect(_react.screen.getByText(/Button/i)).toBeDisabled();
  });
  test('should render with icon correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      label: "play",
      icon: {
        name: 'play'
      }
    }));
    expect(_react.screen.getByRole('button', {
      name: /play/i
    })).toContainElement(_react.screen.getByTestId(/play/i));
  });
  test('Should have the class "c-reverse" if the icon position is right', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
      icon: {
        name: 'play',
        position: 'right'
      }
    }));
    expect(_react.screen.getByText(/Button/i)).toHaveClass('c-reverse');
  });
});