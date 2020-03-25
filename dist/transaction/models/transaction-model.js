"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `TransactionModel`.
 */
class TransactionModel extends _abstractModel.default {
  /**
   * Approve.
   */
  approve(data) {
    return this._sdk.transaction.approve(this.id, data);
  }
  /**
   * Confirm.
   */


  confirm(data) {
    return this._sdk.transaction.confirm(this.id, data);
  }
  /**
   * Confirm.
   */


  fail(data) {
    return this._sdk.transaction.fail(this.id, data);
  }
  /**
   * Get asset.
   */


  getAsset(options) {
    return this._sdk.asset.get(this.assetCode, options);
  }
  /**
   * Get destination address.
   */


  getDestinationAddress(options) {
    return this.destinationAddress ? this._sdk.address.get(this.destinationAddress, options) : undefined;
  }
  /**
   * Get destination wallet.
   */


  getDestinationWallet(options) {
    return this.destinationWalletId ? this._sdk.wallet.get(this.destinationWalletId, options) : undefined;
  }
  /**
   * Get origin address.
   */


  getOriginAddress(options) {
    return this.originAddress ? this._sdk.address.get(this.originAddress, options) : undefined;
  }
  /**
   * Get origin wallet.
   */


  getOriginWallet(options) {
    return this.originWalletId ? this._sdk.wallet.get(this.originWalletId, options) : undefined;
  }
  /**
   * Get movements.
   */


  getMovements(options) {
    return this._sdk.movement.list((0, _lodash.merge)({}, options, {
      filter: {
        transactionId: this.id
      }
    }));
  }
  /**
   * Reject.
   */


  reject(data) {
    return this._sdk.transaction.reject(this.id, data);
  }

}

exports.default = TransactionModel;