"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Section: true,
  NavSection: true,
  ButtonSection: true
};
Object.defineProperty(exports, "ButtonSection", {
  enumerable: true,
  get: function get() {
    return _ButtonSection.ButtonSection;
  }
});
Object.defineProperty(exports, "NavSection", {
  enumerable: true,
  get: function get() {
    return _NavSection.NavSection;
  }
});
Object.defineProperty(exports, "Section", {
  enumerable: true,
  get: function get() {
    return _Section.Section;
  }
});
var _Panel = require("./Panel");
Object.keys(_Panel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Panel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Panel[key];
    }
  });
});
var _Section = require("./Section");
var _NavSection = require("./NavSection");
var _ButtonSection = require("./ButtonSection");