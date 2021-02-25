
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
    await this.resolver.cancel(merge({}, data, { code }));

    return true;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: invite } = await this.resolver.create(data);

    return this.instantiate(invite);
  }

  /**
   * Get.
   */

  async get(code, options) {
    const { data } = await this.resolver.get({ code }, options);

    return this.instantiate(data);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), asset => this.instantiate(asset));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Send.
   */

  async send(data) {
    await this.resolver.send(data);

    return true;
  }

  /**
   * Validate.
   */

  async validate(code) {
    const { data: result } = await this.resolver.validate({ code });

    return result;
  }

}
