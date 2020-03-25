
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
    const { data: address } = await this._resolver.create(data);

    return this._instantiate(address);
  }

  /**
   * Get.
   */

  async get(address, options) {
    const { data } = await this._resolver.get({ address }, options);

    return this._instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), address => this._instantiate(address));
    const total = get(result, 'total');

    return { results, total };
  }

}
