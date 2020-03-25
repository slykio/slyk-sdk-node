
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * `ConnectionModel`.
 */

export default class ConnectionModel extends AbstractModel {

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.connection.patch(this.id, data);
  }

}
