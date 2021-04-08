
/**
 * Module dependencies.
 */

import { get, map } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `TaskStepQuestionManager`.
 */

export default class TaskStepQuestionManager extends AbstractManager {

  /**
   * List.
   */

  async list(taskId, stepId, options) {
    const result = await this.resolver.list({ stepId, taskId }, options);
    const results = map(get(result, 'data', []), stepQuestion => this.instantiate(stepQuestion));
    const total = get(result, 'total');

    return { results, total };
  }

}
