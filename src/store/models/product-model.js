
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
    return this._sdk.product.createQuestion(this.id, data);
  }

  /**
   * Delete.
   */

  delete() {
    return this._sdk.product.delete(this.id);
  }

  /**
   * Delete question.
   */

  deleteQuestion(questionId) {
    return this._sdk.product.deleteQuestion(this.id, questionId);
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.product.patch(this.id, data);
  }

  /**
   * Reorder.
   */

  reorder(data) {
    return this._sdk.product.reorder(this.id, data);
  }

  /**
   * Reorder question.
   */

  reorderQuestion(questionId, data) {
    return this._sdk.product.reorderQuestion(this.id, questionId, data);
  }

}
