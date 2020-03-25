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
 * `ConnectionModel`.
 */
class ConnectionModel extends _abstractModel.default {
  /**
   * Patch.
   */
  patch(data) {
    return this._sdk.connection.patch(this.id, data);
  }

}

exports.default = ConnectionModel;