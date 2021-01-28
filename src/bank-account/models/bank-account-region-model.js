
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `BankAccountRegionModel`.
 */

export default class BankAccountRegionModel extends AbstractModel {

  /**
   * Get assets.
   */

  getAssets(options) {
    return this._sdk.asset.list({ ...options, filter: { code: `in:${this.assets.join(',')}` } });
  }

}
