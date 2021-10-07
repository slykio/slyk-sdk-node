
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
    const { data: rate } = await this.resolver.create(data);

    return this.instantiate(rate);
  }

  /**
   * Delete.
   */

  async delete(baseAssetCode, quoteAssetCode) {
    await this.resolver.delete({ baseAssetCode, quoteAssetCode });

    return true;
  }

  /**
   * Get.
   */

  async get(baseAssetCode, quoteAssetCode, options) {
    const { data: rate } = await this.resolver.get({ baseAssetCode, quoteAssetCode }, options);

    return this.instantiate(rate);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), rate => this.instantiate(rate));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch multiple.
   */

  async patchMultiple(data) {
    const result = await this.resolver.patchMultiple(data);

    return map(get(result, 'data', []), rate => this.instantiate(rate));
  }

  /**
   * Patch.
   */

  async patch(baseAssetCode, quoteAssetCode, data) {
    const { data: rate } = await this.resolver.patch(merge({}, data, { baseAssetCode, quoteAssetCode }));

    return this.instantiate(rate);
  }

}
