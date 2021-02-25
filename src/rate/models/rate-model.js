
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
    return RateModel.sdk.asset.get(this.baseAssetCode, options);
  }

  /**
   * Get quote asset.
   */

  getQuoteAsset(options) {
    return RateModel.sdk.asset.get(this.quoteAssetCode, options);
  }

  /**
   * Patch.
   */

  patch(data) {
    return RateModel.sdk.rate.patch(this.baseAssetCode, this.quoteAssetCode, data);
  }

}
