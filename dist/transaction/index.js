"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transactionManager = _interopRequireDefault(require("./managers/transaction-manager"));

var _transactionModel = _interopRequireDefault(require("./models/transaction-model"));

var _transactionResolver = _interopRequireDefault(require("./resolvers/transaction-resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `transaction`.
 */
var _default = {
  manager: _transactionManager.default,
  model: _transactionModel.default,
  resolver: _transactionResolver.default
};
exports.default = _default;