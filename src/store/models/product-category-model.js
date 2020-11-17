
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `ProductCategoryModel`.
 */

export default class ProductCategoryModel extends AbstractModel {

  /**
   * Delete.
   */

  delete() {
    return this._sdk.productCategory.delete(this.id);
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.productCategory.patch(this.id, data);
  }

  /**
   * Reorder.
   */

  reorder(data) {
    return this._sdk.productCategory.reorder(this.id, data);
  }

}
