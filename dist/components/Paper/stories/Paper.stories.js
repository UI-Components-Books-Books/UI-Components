"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OtherColor = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Paper = require("components/Paper");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var _default = {
  title: 'ui-components/Paper',
  component: _Paper.Paper,
  decorators: [function (story) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.Row, {
      "justify-content": "center",
      "align-items": "center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
        xs: "11",
        mm: "10",
        md: "9",
        lg: "7",
        hd: "6",
        children: story()
      })
    });
  }]
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.Paper, _objectSpread(_objectSpread({}, args), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta minima neque saepe architecto cupiditate impedit mollitia nesciunt similique accusantium tempora id enim, placeat omnis in, facere sit quasi quisquam doloremque nisi officiis tempore porro temporibus voluptatibus? Minus delectus pariatur porro officia deserunt, voluptatum totam impedit? Rem recusandae sed ad? Molestias, distinctio explicabo. Tenetur quis facere recusandae excepturi reiciendis soluta, odio nobis itaque fugit adipisci ut officia corporis eligendi harum. Minima in quasi doloribus reiciendis alias, beatae molestiae omnis dolores impedit expedita magnam cupiditate quas velit, cum animi quos consequuntur commodi saepe nemo inventore perferendis tempore! Enim libero officiis dolore culpa amet magni dicta tempore, laboriosam placeat ipsum praesentium ex excepturi esse natus animi aliquam explicabo, voluptate iusto sunt eum rem! Provident aut at dolor, ut porro, earum sed nisi minus exercitationem error voluptatibus similique esse nesciunt quam fugiat dolores voluptatum tempora, assumenda hic. Quis, doloribus ut. Sapiente illo ad consequuntur velit amet consectetur, cupiditate blanditiis, debitis porro explicabo, eveniet sit non doloremque esse eum facere rerum enim nisi! Est molestiae alias sapiente consequatur magni perferendis fugit esse dolores! Cupiditate commodi ut repellat porro quo quisquam aliquam aperiam amet. Nisi eaque libero, voluptas earum, blanditiis assumenda ipsum inventore vero modi officiis, perferendis dolores molestias amet repellat consequatur sed ea quaerat sunt? Aperiam animi unde earum, natus aliquam fuga dolorem nihil, magni, nulla autem minima ullam. Deleniti repellendus accusamus fugiat delectus sequi rem quas accusantium dignissimos nobis perspiciatis iure eos, quis doloribus placeat labore provident ipsa consequuntur quam aliquam odit neque voluptas! Suscipit laudantium et voluptates earum minus velit reiciendis optio mollitia animi sint modi magni tempora amet, odio accusantium at quas impedit facere veniam alias. Iste sed mollitia omnis repellat adipisci cum non rem dolor illum. Beatae architecto ipsam consectetur, alias eius quo eum possimus harum voluptas, fugiat quis magnam!"
    })
  }));
};
var Default = Template.bind({});
exports.Default = Default;
Default.storyName = 'default';
var OtherColor = Template.bind({});
exports.OtherColor = OtherColor;
OtherColor.storyName = 'with other color';
OtherColor.args = {
  color: 'var(--clr-primary-400)'
};