
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `QuestionManager`.
 */

export default class QuestionManager extends AbstractManager {

  /**
   * Create.
   */

  async create(data) {
    const { data: question } = await this.resolver.create(data);

    return this.instantiate(question);
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
    const { data: question } = await this.resolver.get({ id }, options);

    return this.instantiate(question);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), question => this.instantiate(question));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: question } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(question);
  }

}
