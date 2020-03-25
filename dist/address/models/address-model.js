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
 * Export `AddressModel`.
 */
class AddressModel extends _abstractModel.default {
  /**
   * Get Asset.
   */
  getAsset(options) {
    return this._sdk.asset.get(this.assetCode, options);
  }
  /**
   * Get Wallet.
   */


  getWallet(options) {
    return this.walletId ? this._sdk.wallet.get(this.walletId, options) : undefined;
  }

}

exports.default = AddressModel;