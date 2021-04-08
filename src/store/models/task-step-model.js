
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `TaskStepModel`.
 */

export default class TaskStepModel extends AbstractModel {

  /**
   * List questions.
   */

  listQuestions(options) {
    return TaskStepModel.sdk.taskStepQuestion.list(this.taskId, this.id, options);
  }

  /**
   * Patch.
   */

  patch(data) {
    return TaskStepModel.sdk.taskStep.patch(this.taskId, this.id, data);
  }

}
