
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `TaxRateManager`.
 */

export default class TaxRateManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: taxRate } = await this.resolver.create(data);

    return this.instantiate(taxRate);
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
    const { data: taxRate } = await this.resolver.get({ id }, options);

    return this.instantiate(taxRate);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), taxRate => this.instantiate(taxRate));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: taxRate } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(taxRate);
  }

}
