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
 * Export `WalletModel`.
 */
class WalletModel extends _abstractModel.default {
  /**
   * Get activity.
   */
  getActivity(options) {
    return this._sdk.wallet.activity(this.id, options);
  }
  /**
   * Get balance.
   */


  getBalance(options) {
    return this._sdk.wallet.balance(this.id, options);
  }
  /**
   * Get movements.
   */


  getMovements(options) {
    return this._sdk.wallet.movements(this.id, options);
  }
  /**
   * Get transactions.
   */


  getTransactions(options) {
    return this._sdk.wallet.transactions(this.id, options);
  }
  /**
   * Get Owner.
   */


  getOwner(options) {
    return this.ownerId ? this._sdk.user.get(this.ownerId, options) : undefined;
  }
  /**
   * Patch.
   */


  patch(data) {
    return this._sdk.wallet.patch(this.id, data);
  }

}

exports.default = WalletModel;