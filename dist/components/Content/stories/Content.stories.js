"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Col = require("components/Col");
var _Row = require("components/Row");
var _Image = require("components/Image");
var _Content = require("components/Content");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'ui-components/Content',
  component: _Content.Content
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content.Content, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
      xs: "11",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
          xs: "11",
          mm: "10",
          md: "9",
          lg: "4",
          hd: "3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.Image, {
            url: "https://images.pexels.com/photos/1545346/pexels-photo-1545346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            alt: "Autumn season.",
            title: "Photography 1."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Col.Col, {
          xs: "11",
          mm: "10",
          md: "9",
          lg: "5",
          hd: "4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro provident animi veniam ducimus quisquam, alias facilis eos iusto architecto ea recusandae ex exercitationem laboriosam corrupti facere. Obcaecati fugit aspernatur fuga ad, perferendis, repudiandae aut quibusdam pariatur explicabo qui fugiat nobis? Eos cum enim aliquam dignissimos nam facilis rem consequuntur, nulla molestiae dicta excepturi architecto reiciendis blanditiis nobis id incidunt fugit voluptatem consequatur veniam quisquam libero, fugiat voluptate animi quis."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "u-my-4",
            children: "Dicta asperiores rerum velit! Dolores maxime est adipisci eum esse quas in cumque, commodi debitis amet magni, earum quod rem dignissimos quis? Ipsam similique excepturi cupiditate quidem saepe aliquam quam. Dolor illum cupiditate expedita! Aspernatur distinctio at fugiat recusandae placeat alias sunt culpa optio nemo autem quasi ex repellendus qui eius quaerat minima, animi quidem libero voluptatem magnam quos quibusdam. Laudantium doloremque sed voluptatum at. Numquam, ipsam ipsa perferendis odio hic nam laborum, quaerat similique pariatur doloribus nisi sequi eos reiciendis aliquid porro sapiente omnis reprehenderit maxime enim quo est."
          })]
        })]
      })
    })
  });
};
exports.Default = Default;
Default.storyName = 'default';