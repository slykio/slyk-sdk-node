
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
    return this._sdk.task.complete(this.id, data);
  }

  /**
   * Delete.
   */

  delete() {
    return this._sdk.task.delete(this.id);
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.task.patch(this.id, data);
  }

  /**
   * Reorder.
   */

  reorder(data) {
    return this._sdk.task.reorder(this.id, data);
  }

}
