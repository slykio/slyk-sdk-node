
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `QuestionModel`.
 */

export default class QuestionModel extends AbstractModel {

  /**
   * Delete.
   */

  delete() {
    return this._sdk.question.delete(this.id);
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.question.patch(this.id, data);
  }

}
