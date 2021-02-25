
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
    return InviteModel.sdk.invite.cancel(this.code, data);
  }

  /**
   * Get invited user.
   */

  getInvitedUser(options) {
    return this.invitedUserId ? InviteModel.sdk.user.get(this.invitedUserId, options) : undefined;
  }

  /**
   * Get inviter user.
   */

  getInviterUser(options) {
    return this.inviterUserId ? InviteModel.sdk.user.get(this.inviterUserId, options) : undefined;
  }

  /**
   * Validate.
   */

  validate() {
    return InviteModel.sdk.invite.validate(this.code);
  }

}
