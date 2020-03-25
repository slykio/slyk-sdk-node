
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `RateModel`.
 */

export default class RateModel extends AbstractModel {

  /**
   * Get base asset.
   */

  getBaseAsset(options) {
    return this._sdk.asset.get(this.baseAssetCode, options);
  }

  /**
   * Get quote asset.
   */

  getQuoteAsset(options) {
    return this._sdk.asset.get(this.quoteAssetCode, options);
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.rate.patch(this.baseAssetCode, this.quoteAssetCode, data);
  }

}
