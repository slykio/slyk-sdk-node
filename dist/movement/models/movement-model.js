"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `MovementModel`.
 */
class MovementModel extends _abstractModel.default {
  /**
   * Get asset.
   */
  getAsset(options) {
    return this._sdk.asset.get(this.assetCode, options);
  }
  /**
   * Get wallet.
   */


  getWallet(options) {
    return this._sdk.wallet.get(this.walletId, options);
  }
  /**
   * Get transaction.
   */


  getTransaction(options) {
    return this._sdk.transaction.get(this.transactionId, options);
  }

}

exports.default = MovementModel;