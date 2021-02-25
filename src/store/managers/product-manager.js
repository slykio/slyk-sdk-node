
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
    const { data: product } = await this.resolver.create(data);

    return this.instantiate(product);
  }

  /**
   * Create question.
   */

  async createQuestion(id, data) {
    const { data: product } = await this.resolver.createQuestion(merge({}, data, { id }));

    return this.instantiate(product);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this.resolver.delete({ id });

    return true;
  }

  /**
   * Delete question.
   */

  async deleteQuestion(productId, questionId) {
    await this.resolver.deleteQuestion({ productId, questionId });

    return true;
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: product } = await this.resolver.get({ id }, options);

    return this.instantiate(product);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), product => this.instantiate(product));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: product } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(product);
  }

  /**
   * Reorder.
   */

  async reorder(id, data) {
    await this.resolver.reorder(merge({}, data, { id }));

    return true;
  }

  /**
   * Reorder question.
   */

  async reorderQuestion(productId, questionId, data) {
    await this.resolver.reorderQuestion(merge({}, data, { productId, questionId }));

    return true;
  }

}
