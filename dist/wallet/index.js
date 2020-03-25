"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _walletManager = _interopRequireDefault(require("./managers/wallet-manager"));

var _walletModel = _interopRequireDefault(require("./models/wallet-model"));

var _walletResolver = _interopRequireDefault(require("./resolvers/wallet-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `wallet`.
 */
var _default = {
  manager: _walletManager.default,
  model: _walletModel.default,
  resolver: _walletResolver.default
};
exports.default = _default;