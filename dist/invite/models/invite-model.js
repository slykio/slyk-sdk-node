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
 * Export `InviteModel`.
 */
class InviteModel extends _abstractModel.default {
  /**
   * Cancel.
   */
  cancel(data) {
    return this._sdk.invite.cancel(this.code, data);
  }
  /**
   * Get invited user.
   */


  getInvitedUser(options) {
    return this.invitedUserId ? this._sdk.user.get(this.invitedUserId, options) : undefined;
  }
  /**
   * Get inviter user.
   */


  getInviterUser(options) {
    return this.inviterUserId ? this._sdk.user.get(this.inviterUserId, options) : undefined;
  }
  /**
   * Validate.
   */


  validate() {
    return this._sdk.invite.validate(this.code);
  }

}

exports.default = InviteModel;