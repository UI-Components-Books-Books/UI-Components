"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coordinateGetter = void 0;
var _core = require("@dnd-kit/core");
var directions = [_core.KeyboardCode.Down, _core.KeyboardCode.Right, _core.KeyboardCode.Up, _core.KeyboardCode.Left];

/**
 * Sensor personalizado para le manejo
 * del drag and drop a través del teclado.
 */
var coordinateGetter = function coordinateGetter(event, _ref) {
  var _ref$context = _ref.context,
    active = _ref$context.active,
    droppableRects = _ref$context.droppableRects,
    droppableContainers = _ref$context.droppableContainers,
    collisionRect = _ref$context.collisionRect;
  if (directions.includes(event.code)) {
    event.preventDefault();
    var PADDING = 20;
    if (!active || !collisionRect) return;
    var filteredContainers = [];
    droppableContainers.getEnabled().forEach(function (entry) {
      if (!entry || entry !== null && entry !== void 0 && entry.disabled) return;
      var rect = droppableRects.get(entry.id);
      if (!rect) {
        return;
      }
      switch (event.code) {
        case _core.KeyboardCode.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry);
          }
          break;
        case _core.KeyboardCode.Up:
          if (collisionRect.top > rect.top + PADDING) {
            filteredContainers.push(entry);
          }
          break;
        case _core.KeyboardCode.Left:
          if (collisionRect.left >= rect.left + rect.width) {
            filteredContainers.push(entry);
          }
          break;
        case _core.KeyboardCode.Right:
          if (collisionRect.left + collisionRect.width <= rect.left) {
            filteredContainers.push(entry);
          }
          break;
      }
    });
    var collisions = (0, _core.closestCorners)({
      active: active,
      collisionRect: collisionRect,
      droppableRects: droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null
    });
    var closestId = (0, _core.getFirstCollision)(collisions, 'id');
    if (closestId != null) {
      var newDroppable = droppableContainers.get(closestId);
      var newNode = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.node.current;
      var newRect = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.rect.current;
      if (newNode && newRect) {
        var _newDroppable$data$cu;
        if (((_newDroppable$data$cu = newDroppable.data.current) === null || _newDroppable$data$cu === void 0 ? void 0 : _newDroppable$data$cu.type) === 'container') {
          return {
            x: newRect.left,
            y: newRect.top + PADDING
          };
        }
        return {
          x: newRect.left,
          y: newRect.top
        };
      }
    }
  }
  return undefined;
};
exports.coordinateGetter = coordinateGetter;