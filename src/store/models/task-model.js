
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `TaskModel`.
 */

export default class TaskModel extends AbstractModel {

  /**
   * Complete.
   */

  complete(data) {
    return TaskModel.sdk.task.complete(this.id, data);
  }

  /**
   * Delete.
   */

  delete() {
    return TaskModel.sdk.task.delete(this.id);
  }

  /**
   * Patch.
   */

  patch(data) {
    return TaskModel.sdk.task.patch(this.id, data);
  }

  /**
   * Reorder.
   */

  reorder(data) {
    return TaskModel.sdk.task.reorder(this.id, data);
  }

}
