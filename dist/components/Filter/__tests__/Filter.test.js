"use strict";

var _react = require("@testing-library/react");
var _Filter = require("components/Filter");
var _jsxRuntime = require("react/jsx-runtime");
describe('Test in <Filter/>', function () {
  test('should render correctly', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Filter.Filter, {
      "data-testid": "filter-test-id"
    }));
    expect(_react.screen.getByTestId('filter-test-id')).toBeInTheDocument();
  });
});