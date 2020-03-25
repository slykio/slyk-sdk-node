"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _movementManager = _interopRequireDefault(require("./managers/movement-manager"));

var _movementModel = _interopRequireDefault(require("./models/movement-model"));

var _movementResolver = _interopRequireDefault(require("./resolvers/movement-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `movement`.
 */
var _default = {
  manager: _movementManager.default,
  model: _movementModel.default,
  resolver: _movementResolver.default
};
exports.default = _default;