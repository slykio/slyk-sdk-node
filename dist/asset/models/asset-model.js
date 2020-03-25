"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Export `AssetModel`.
 */
class AssetModel extends _abstractModel.default {
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

exports.default = AssetModel;