"use strict";

var _react = require("@testing-library/react");
var _Image = require("components/Image");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
describe('Test in <Image/>', function () {
  var defaultName = 'Default image.';
  var props = {
    url: 'https://images.pexels.com/photos/1545346/pexels-photo-1545346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Autumn season.',
    title: 'Photography 1.'
  };
  test('should have a default image', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, {}));
    expect(_react.screen.getByRole('img', {
      name: defaultName
    })).toHaveAttribute('src', 'undefined');
  });
  test('should doesn\'t show the caption is "noCaption" property is true', function () {
    var _render = (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, {})),
      rerender = _render.rerender;
    var image = _react.screen.getByText(defaultName);
    expect(image).toBeInTheDocument();
    rerender( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, {
      noCaption: true
    }));
    expect(image).not.toBeInTheDocument();
  });
  test('should have a custom image', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, _objectSpread({}, props)));
    expect(_react.screen.getByRole('img', {
      name: props.alt
    })).toBeInTheDocument();
  });
  test('should have the title property', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, _objectSpread({}, props)));
    expect(_react.screen.getByText(props.title)).toBeInTheDocument();
  });
  test('should have the alt property', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, _objectSpread({}, props)));
    expect(_react.screen.getByText(props.alt)).toBeInTheDocument();
  });
  test('should have width style', function () {
    (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, _objectSpread(_objectSpread({}, props), {}, {
      width: "350"
    })));
    expect(_react.screen.getByRole('figure')).toHaveStyle({
      'max-width': '350px'
    });
  });
});