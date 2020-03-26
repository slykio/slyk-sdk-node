"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assetManager = _interopRequireDefault(require("./managers/asset-manager"));

var _assetModel = _interopRequireDefault(require("./models/asset-model"));

var _assetResolver = _interopRequireDefault(require("./resolvers/asset-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `asset`.
 */
var _default = {
  manager: _assetManager.default,
  model: _assetModel.default,
  resolver: _assetResolver.default
};
exports.default = _default;
module.exports = exports.default;