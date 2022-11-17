"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Tab: true,
  TabList: true,
  TabPanel: true,
  TabPanels: true
};
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _Tab.Tab;
  }
});
Object.defineProperty(exports, "TabList", {
  enumerable: true,
  get: function get() {
    return _TabList.TabList;
  }
});
Object.defineProperty(exports, "TabPanel", {
  enumerable: true,
  get: function get() {
    return _TabPanel.TabPanel;
  }
});
Object.defineProperty(exports, "TabPanels", {
  enumerable: true,
  get: function get() {
    return _TabPanels.TabPanels;
  }
});
var _Tabs = require("./Tabs");
Object.keys(_Tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Tabs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tabs[key];
    }
  });
});
var _Tab = require("./Tab");
var _TabList = require("./TabList");
var _TabPanel = require("./TabPanel");
var _TabPanels = require("./TabPanels");