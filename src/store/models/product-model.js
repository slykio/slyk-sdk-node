
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `ProductModel`.
 */

export default class ProductModel extends AbstractModel {

  /**
   * Create question.
   */

  createQuestion(data) {
    return ProductModel.sdk.product.createQuestion(this.id, data);
  }

  /**
   * Delete.
   */

  delete() {
    return ProductModel.sdk.product.delete(this.id);
  }

  /**
   * Delete question.
   */

  deleteQuestion(questionId) {
    return ProductModel.sdk.product.deleteQuestion(this.id, questionId);
  }

  /**
   * Patch.
   */

  patch(data) {
    return ProductModel.sdk.product.patch(this.id, data);
  }

  /**
   * Reorder.
   */

  reorder(data) {
    return ProductModel.sdk.product.reorder(this.id, data);
  }

  /**
   * Reorder question.
   */

  reorderQuestion(questionId, data) {
    return ProductModel.sdk.product.reorderQuestion(this.id, questionId, data);
  }

}
