
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `InviteModel`.
 */

export default class InviteModel extends AbstractModel {

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
