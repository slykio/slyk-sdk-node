"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assetManager = _interopRequireDefault(require("./managers/asset-manager"));

var _assetModel = _interopRequireDefault(require("./models/asset-model"));

var _assetResolver = _interopRequireDefault(require("./resolvers/asset-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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