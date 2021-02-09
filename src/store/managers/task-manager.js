
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `TaskManager`.
 */

export default class TaskManager extends AbstractManager {

  /**
   * Complete.
   */

  async complete(id, data) {
    await this._resolver.complete(merge({}, data, { id }));

    return true;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: task } = await this._resolver.create(data);

    return this._instantiate(task);
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
    const { data: task } = await this._resolver.get({ id }, options);

    return this._instantiate(task);
  }

  /**
   * Get statistics.
   */

  async getStatistics(userId, options) {
    const { data: { available, completed } } = await this._resolver.getStatistics({ id: userId }, options);
    const availableTasksData = map(get(available, 'data', []), task => this._instantiate(task));
    const completedTasksData = map(get(completed, 'data', []), task => this._instantiate(task));

    return {
      available: {
        ...available,
        data: availableTasksData
      },
      completed: {
        ...completed,
        data: completedTasksData
      }
    };
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), task => this._instantiate(task));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: task } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(task);
  }

  /**
   * Reorder.
   */

  async reorder(id, data) {
    await this._resolver.reorder(merge({}, data, { id }));

    return true;
  }

}
