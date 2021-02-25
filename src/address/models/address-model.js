
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
    return AddressModel.sdk.asset.get(this.assetCode, options);
  }

  /**
   * Get Wallet.
   */

  getWallet(options) {
    return this.walletId ? AddressModel.sdk.wallet.get(this.walletId, options) : undefined;
  }

}
