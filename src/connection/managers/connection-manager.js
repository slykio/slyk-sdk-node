
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
    const { data: connection } = await this._resolver.create(data);

    return this._instantiate(connection);
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data } = await this._resolver.get({ id }, options);

    return this._instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), connection => this._instantiate(connection));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: connection } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(connection);
  }

}
