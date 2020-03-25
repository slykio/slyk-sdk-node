
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `RateManager`.
 */

export default class RateManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: rate } = await this._resolver.create(data);

    return this._instantiate(rate);
  }

  /**
   * Delete.
   */

  async delete(baseAssetCode, quoteAssetCode) {
    await this._resolver.delete({ baseAssetCode, quoteAssetCode });

    return true;
  }

  /**
   * Get.
   */

  async get(baseAssetCode, quoteAssetCode, options) {
    const { data: rate } = await this._resolver.get({ baseAssetCode, quoteAssetCode }, options);

    return this._instantiate(rate);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), rate => this._instantiate(rate));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(baseAssetCode, quoteAssetCode, data) {
    const { data: rate } = await this._resolver.patch(merge({}, data, { baseAssetCode, quoteAssetCode }));

    return this._instantiate(rate);
  }

}
