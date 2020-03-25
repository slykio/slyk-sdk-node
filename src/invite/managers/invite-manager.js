
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `InviteManager`.
 */

export default class UserManager extends AbstractManager {

  /**
   * Cancel.
   */

  async cancel(code, data) {
    await this._resolver.cancel(merge({}, data, { code }));

    return true;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: invite } = await this._resolver.create(data);

    return this._instantiate(invite);
  }

  /**
   * Get.
   */

  async get(code, options) {
    const { data } = await this._resolver.get({ code }, options);

    return this._instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), asset => this._instantiate(asset));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Send.
   */

  async send(data) {
    await this._resolver.send(data);

    return true;
  }

  /**
   * Validate.
   */

  async validate(code) {
    const { data: result } = await this._resolver.validate({ code });

    return result;
  }

}
