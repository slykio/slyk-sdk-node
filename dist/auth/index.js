"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _authManager = _interopRequireDefault(require("./managers/auth-manager"));

var _authModel = _interopRequireDefault(require("./models/auth-model"));

var _authResolver = _interopRequireDefault(require("./resolvers/auth-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `auth`.
 */
var _default = {
  manager: _authManager.default,
  model: _authModel.default,
  resolver: _authResolver.default
};
exports.default = _default;
module.exports = exports.default;