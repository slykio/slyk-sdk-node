
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
    return QuestionModel.sdk.question.delete(this.id);
  }

  /**
   * Patch.
   */

  patch(data) {
    return QuestionModel.sdk.question.patch(this.id, data);
  }

}
