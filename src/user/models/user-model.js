
/**
 * Module dependencies.
 */

import { merge } from 'lodash';
import AbstractModel from 'core/models/abstract-model';

/**
 * Export `UserModel`.
 */

export default class UserModel extends AbstractModel {

  /**
   * Approve.
   */

  approve() {
    return this._sdk.user.approve(this.id);
  }

  /**
   * Block.
   */

  block() {
    return this._sdk.user.block(this.id);
  }

  /**
   * Change email.
   */

  changeEmail(data) {
    return this._sdk.user.changeEmail(this.id, data);
  }

  /**
   * Change password.
   */

  changePassword(data) {
    return this._sdk.user.changePassword(this.id, data);
  }

  /**
   * Change phone.
   */

  changePhone(data) {
    return this._sdk.user.changePhone(this.id, data);
  }

  /**
   * Delete.
   */

  delete() {
    return this._sdk.user.delete(this.id);
  }

  /**
   * Get invites.
   */

  getInvites(options) {
    return this._sdk.invite.list(merge({}, options, { filter: { inviterUserId: this.id } }));
  }

  /**
   * Get wallets.
   */

  getWallets(options) {
    return this._sdk.wallet.list(merge({}, options, { filter: { ownerId: this.id } }));
  }

  /**
   * Get primary wallet.
   */

  getPrimaryWallet(options) {
    return this._sdk.wallet.get(this.primaryWalletId, options);
  }

  /**
   * Get referral program.
   */

  getReferralProgram(program, options) {
    return this._sdk.user.getReferralProgram(this.id, program, options);
  }

  /**
   * Get referral user.
   */

  getReferralUser(options) {
    return this.referralUserId ? this._sdk.user.get(this.referralUserId, options) : undefined;
  }

  /**
   * Patch.
   */

  patch(data) {
    return this._sdk.user.patch(this.id, data);
  }

  /**
   * Unblock.
   */

  unblock() {
    return this._sdk.user.unblock(this.id);
  }

}
