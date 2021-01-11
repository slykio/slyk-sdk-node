"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settingManager = _interopRequireDefault(require("./managers/setting-manager"));

var _settingModel = _interopRequireDefault(require("./models/setting-model"));

var _settingResolver = _interopRequireDefault(require("./resolvers/setting-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `setting`.
 */
var _default = {
  manager: _settingManager.default,
  model: _settingModel.default,
  resolver: _settingResolver.default
};
exports.default = _default;
module.exports = exports.default;