
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `AddressModel`.
 */

export default class AddressModel extends AbstractModel {

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
