"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rateManager = _interopRequireDefault(require("./managers/rate-manager"));

var _rateModel = _interopRequireDefault(require("./models/rate-model"));

var _rateResolver = _interopRequireDefault(require("./resolvers/rate-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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