
/**
 * Module dependencies.
 */

import { get, map } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `QuestionTypeManager`.
 */

export default class QuestionTypeManager extends AbstractManager {

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), questionType => this.instantiate(questionType));
    const total = get(result, 'total');

    return { results, total };
  }

}
