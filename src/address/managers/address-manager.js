
/**
 * Module dependencies.
 */

import { get, map } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `AddressManager`.
 */

export default class AddressManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: address } = await this.resolver.create(data);

    return this.instantiate(address);
  }

  /**
   * Get.
   */

  async get(address, options) {
    const { data } = await this.resolver.get({ address }, options);

    return this.instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), address => this.instantiate(address));
    const total = get(result, 'total');

    return { results, total };
  }

}
