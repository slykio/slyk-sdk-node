"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _paymentMethodManager = _interopRequireDefault(require("./managers/payment-method-manager"));

var _paymentMethodModel = _interopRequireDefault(require("./models/payment-method-model"));

var _paymentMethodResolver = _interopRequireDefault(require("./resolvers/payment-method-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `paymentMethod`.
 */
var _default = {
  manager: _paymentMethodManager.default,
  model: _paymentMethodModel.default,
  resolver: _paymentMethodResolver.default
};
exports.default = _default;
module.exports = exports.default;