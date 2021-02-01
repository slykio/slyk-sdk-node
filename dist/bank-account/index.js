"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bankAccountManager = _interopRequireDefault(require("./managers/bank-account-manager"));

var _bankAccountModel = _interopRequireDefault(require("./models/bank-account-model"));

var _bankAccountRegionManager = _interopRequireDefault(require("./managers/bank-account-region-manager"));

var _bankAccountRegionModel = _interopRequireDefault(require("./models/bank-account-region-model"));

var _bankAccountRegionResolver = _interopRequireDefault(require("./resolvers/bank-account-region-resolver"));

var _bankAccountResolver = _interopRequireDefault(require("./resolvers/bank-account-resolver"));

/* istanbul ignore file */

/**
 * Module dependencies.
 */

/**
 * Export `bankAccount`.
 */
module.exports = {
  bankAccount: {
    manager: _bankAccountManager.default,
    model: _bankAccountModel.default,
    resolver: _bankAccountResolver.default
  },
  bankAccountRegion: {
    manager: _bankAccountRegionManager.default,
    model: _bankAccountRegionModel.default,
    resolver: _bankAccountRegionResolver.default
  }
};