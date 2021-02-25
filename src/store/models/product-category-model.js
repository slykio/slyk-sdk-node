
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
    return ProductCategoryModel.sdk.productCategory.delete(this.id);
  }

  /**
   * Patch.
   */

  patch(data) {
    return ProductCategoryModel.sdk.productCategory.patch(this.id, data);
  }

  /**
   * Reorder.
   */

  reorder(data) {
    return ProductCategoryModel.sdk.productCategory.reorder(this.id, data);
  }

}
