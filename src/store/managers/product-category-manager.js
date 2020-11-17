
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
    const { data: productCategory } = await this._resolver.create(data);

    return this._instantiate(productCategory);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this._resolver.delete({ id });

    return true;
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: productCategory } = await this._resolver.get({ id }, options);

    return this._instantiate(productCategory);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), productCategory => this._instantiate(productCategory));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: productCategory } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(productCategory);
  }

  /**
   * Reorder.
   */

  async reorder(id, data) {
    await this._resolver.reorder(merge({}, data, { id }));

    return true;
  }

}
