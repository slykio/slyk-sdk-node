"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _movementManager = _interopRequireDefault(require("./managers/movement-manager"));

var _movementModel = _interopRequireDefault(require("./models/movement-model"));

var _movementResolver = _interopRequireDefault(require("./resolvers/movement-resolver"));

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
module.exports = exports.default;