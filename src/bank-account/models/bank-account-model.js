
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `BankAccountModel`.
 */

export default class BankAccountModel extends AbstractModel {

  /**
   * Get asset.
   */

  getAsset(options) {
    return this._sdk.asset.get(this.asset, options);
  }

}
