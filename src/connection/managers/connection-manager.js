
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * `ConnectionManager`.
 */

export default class ConnectionManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: connection } = await this.resolver.create(data);

    return this.instantiate(connection);
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data } = await this.resolver.get({ id }, options);

    return this.instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), connection => this.instantiate(connection));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: connection } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(connection);
  }

}
