
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `TaskStepManager`.
 */

export default class TaskStepManager extends AbstractManager {

  /**
   * Get.
   */

  async get(taskId, id, options) {
    const { data: step } = await this.resolver.get({ id, taskId }, options);

    return this.instantiate(step);
  }

  /**
   * List.
   */

  async list(taskId, options) {
    const result = await this.resolver.list({ taskId }, options);
    const results = map(get(result, 'data', []), step => this.instantiate(step));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(taskId, id, data) {
    const { data: step } = await this.resolver.patch(merge({}, data, { id, taskId }));

    return this.instantiate(step);
  }

}
