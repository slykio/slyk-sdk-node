"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connectionManager = _interopRequireDefault(require("./managers/connection-manager"));

var _connectionModel = _interopRequireDefault(require("./models/connection-model"));

var _connectionResolver = _interopRequireDefault(require("./resolvers/connection-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `connection`.
 */
var _default = {
  manager: _connectionManager.default,
  model: _connectionModel.default,
  resolver: _connectionResolver.default
};
exports.default = _default;