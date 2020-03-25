
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `AssetModel`.
 */

export default class AssetModel extends AbstractModel {

  /**
   * Get Connection.
   */

  getConnection(options) {
    return this.connectionId ? this._sdk.connection.get(this.connectionId, options) : undefined;
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.asset.patch(this.code, data);
  }

}
