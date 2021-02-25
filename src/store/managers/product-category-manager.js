
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `ProductCategoryManager`.
 */

export default class ProductCategoryManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: productCategory } = await this.resolver.create(data);

    return this.instantiate(productCategory);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this.resolver.delete({ id });

    return true;
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: productCategory } = await this.resolver.get({ id }, options);

    return this.instantiate(productCategory);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), productCategory => this.instantiate(productCategory));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: productCategory } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(productCategory);
  }

  /**
   * Reorder.
   */

  async reorder(id, data) {
    await this.resolver.reorder(merge({}, data, { id }));

    return true;
  }

}
