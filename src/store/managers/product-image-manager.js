
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `ProductImageManager`.
 */

export default class ProductImageManager extends AbstractManager {

  /**
   * Create.
   */

  async create(productId, data) {
    const { data: productImage } = await this._resolver.create(merge({}, data, { productId }));

    return this._instantiate(productImage);
  }

  /**
   * Delete.
   */

  async delete(id, productId) {
    await this._resolver.delete({ id, productId });

    return true;
  }

  /**
   * Get.
   */

  async get(id, productId, options) {
    const { data: productImage } = await this._resolver.get({ id, productId }, options);

    return this._instantiate(productImage);
  }

  /**
   * List.
   */

  async list(productId, options) {
    const result = await this._resolver.list({ productId }, options);
    const results = map(get(result, 'data', []), productImage => this._instantiate(productImage));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Reorder.
   */

  async reorder(id, productId, data) {
    await this._resolver.reorder(merge({}, data, { id, productId }));

    return true;
  }

}
