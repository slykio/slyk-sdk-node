
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `UserManager`.
 */

export default class UserManager extends AbstractManager {

  /**
   * Approve.
   */

  async approve(id) {
    await this._resolver.approve({ id });

    return true;
  }

  /**
   * Block.
   */

  async block(id) {
    await this._resolver.block({ id });

    return true;
  }

  /**
   * Change password.
   */

  async changePassword(id, data) {
    await this._resolver.changePassword(merge({}, data, { id }));

    return true;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: user } = await this._resolver.create(data);

    return this._instantiate(user);
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: user } = await this._resolver.get({ id }, options);

    return this._instantiate(user);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), user => this._instantiate(user));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: user } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(user);
  }

  /**
   * Unblock.
   */

  async unblock(id) {
    await this._resolver.unblock({ id });

    return true;
  }

}
