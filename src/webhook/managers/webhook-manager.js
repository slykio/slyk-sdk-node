
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `WebhookManager`.
 */

export default class WebhookManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: webhook } = await this.resolver.create(data);

    return this.instantiate(webhook);
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
    const { data: webhook } = await this.resolver.get({ id }, options);

    return this.instantiate(webhook);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), webhook => this.instantiate(webhook));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: webhook } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(webhook);
  }

}
