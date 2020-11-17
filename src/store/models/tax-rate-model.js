
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `TaxRateModel`.
 */

export default class TaxRateModel extends AbstractModel {

  /**
   * Delete.
   */

  delete() {
    return this._sdk.taxRate.delete(this.id);
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.taxRate.patch(this.id, data);
  }

}
