"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rateManager = _interopRequireDefault(require("./managers/rate-manager"));

var _rateModel = _interopRequireDefault(require("./models/rate-model"));

var _rateResolver = _interopRequireDefault(require("./resolvers/rate-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `rate`.
 */
var _default = {
  manager: _rateManager.default,
  model: _rateModel.default,
  resolver: _rateResolver.default
};
exports.default = _default;
module.exports = exports.default;