
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `ProductImageModel`.
 */

export default class ProductImageModel extends AbstractModel {

  /**
   * Delete.
   */

  delete() {
    return ProductImageModel.sdk.productImage.delete(this.id, this.productId);
  }

  /**
   * Reorder.
   */

  reorder(data) {
    return ProductImageModel.sdk.productImage.reorder(this.id, this.productId, data);
  }

}
