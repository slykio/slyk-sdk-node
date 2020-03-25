
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `MovementModel`.
 */

export default class MovementModel extends AbstractModel {

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
