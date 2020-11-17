
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `ProductManager`.
 */

export default class ProductManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: product } = await this._resolver.create(data);

    return this._instantiate(product);
  }

  /**
   * Create question.
   */

  async createQuestion(id, data) {
    const { data: product } = await this._resolver.createQuestion(merge({}, data, { id }));

    return this._instantiate(product);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this._resolver.delete({ id });

    return true;
  }

  /**
   * Delete question.
   */

  async deleteQuestion(productId, questionId) {
    await this._resolver.deleteQuestion({ productId, questionId });

    return true;
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: product } = await this._resolver.get({ id }, options);

    return this._instantiate(product);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), product => this._instantiate(product));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: product } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(product);
  }

  /**
   * Reorder.
   */

  async reorder(id, data) {
    await this._resolver.reorder(merge({}, data, { id }));

    return true;
  }

  /**
   * Reorder question.
   */

  async reorderQuestion(productId, questionId, data) {
    await this._resolver.reorderQuestion(merge({}, data, { productId, questionId }));

    return true;
  }

}
