
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
    const { data: question } = await this._resolver.create(data);

    return this._instantiate(question);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this._resolver.delete({ id });

    return true;
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: question } = await this._resolver.get({ id }, options);

    return this._instantiate(question);
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), question => this._instantiate(question));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: question } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(question);
  }

}
