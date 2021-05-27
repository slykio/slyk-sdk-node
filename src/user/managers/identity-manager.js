
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `IdentityManager`.
 */

export default class IdentityManager extends AbstractManager {

  /**
   * Approve.
   */

  async approve(id) {
    const { data: identity } = await this.resolver.approve({ id });

    return this.instantiate(identity);
  }

  /**
   * Cancel.
   */

  async cancel(id, data) {
    const { data: identity } = await this.resolver.cancel(merge({}, data, { id }));

    return this.instantiate(identity);
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: identity } = await this.resolver.create(data);

    return this.instantiate(identity);
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
    const { data: identity } = await this.resolver.get({ id }, options);

    return this.instantiate(identity);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), identity => this.instantiate(identity));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Reject.
   */

  async reject(id, data) {
    const { data: identity } = await this.resolver.reject(merge({}, data, { id }));

    return this.instantiate(identity);
  }

  /**
   * Submit.
   */

  async submit(id) {
    const { data: identity } = await this.resolver.submit({ id });

    return this.instantiate(identity);
  }

}
