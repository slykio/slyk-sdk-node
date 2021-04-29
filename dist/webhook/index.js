"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _webhookManager = _interopRequireDefault(require("./managers/webhook-manager"));

var _webhookModel = _interopRequireDefault(require("./models/webhook-model"));

var _webhookResolver = _interopRequireDefault(require("./resolvers/webhook-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `webhook`.
 */
var _default = {
  manager: _webhookManager.default,
  model: _webhookModel.default,
  resolver: _webhookResolver.default
};
exports.default = _default;
module.exports = exports.default;