"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userManager = _interopRequireDefault(require("./managers/user-manager"));

var _userModel = _interopRequireDefault(require("./models/user-model"));

var _userResolver = _interopRequireDefault(require("./resolvers/user-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `user`.
 */
var _default = {
  manager: _userManager.default,
  model: _userModel.default,
  resolver: _userResolver.default
};
exports.default = _default;
module.exports = exports.default;