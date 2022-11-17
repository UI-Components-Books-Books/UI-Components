"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ToggletipButton: true,
  ToggletipContent: true
};
Object.defineProperty(exports, "ToggletipButton", {
  enumerable: true,
  get: function get() {
    return _ToggletipButton.ToggletipButton;
  }
});
Object.defineProperty(exports, "ToggletipContent", {
  enumerable: true,
  get: function get() {
    return _ToggletipContent.ToggletipContent;
  }
});
var _Toggletip = require("./Toggletip");
Object.keys(_Toggletip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Toggletip[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Toggletip[key];
    }
  });
});
var _ToggletipButton = require("./ToggletipButton");
var _ToggletipContent = require("./ToggletipContent");