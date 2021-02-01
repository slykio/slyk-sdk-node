
/**
 * Module dependencies.
 */

import { get, map, merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `UserManager`.
 */

export default class UserManager extends AbstractManager {

  /**
   * Approve.
   */

  async approve(id) {
    await this._resolver.approve({ id });

    return true;
  }

  /**
   * Block.
   */

  async block(id) {
    await this._resolver.block({ id });

    return true;
  }

  /**
   * Change email.
   */

  async changeEmail(id, data) {
    const { data: token } = await this._resolver.changeEmail(merge({}, data, { id }));

    return token;
  }

  /**
   * Change password.
   */

  async changePassword(id, data) {
    const { data: token } = await this._resolver.changePassword(merge({}, data, { id }));

    return token;
  }

  /**
   * Change phone.
   */

  async changePhone(id, data) {
    const { data: token } = await this._resolver.changePhone(merge({}, data, { id }));

    return token;
  }

  /**
   * Confirm email.
   */

  async confirmEmail(data) {
    const { data: accessTokens } = await this._resolver.confirmEmail(data);

    if (!accessTokens) {
      return true;
    }

    return accessTokens;
  }

  /**
   * Confirm phone.
   */

  async confirmPhone(data) {
    const { data: accessTokens } = await this._resolver.confirmPhone(data);

    if (!accessTokens) {
      return true;
    }

    return accessTokens;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: user } = await this._resolver.create(data);

    return this._instantiate(user);
  }

  /**
   * Forgot password.
   */

  async forgotPassword(data) {
    const { data: token } = await this._resolver.forgotPassword(data);

    return token;
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: user } = await this._resolver.get({ id }, options);

    return this._instantiate(user);
  }

  /**
   * Get referral program.
   */

  getReferralProgram(id, program, options) {
    return this._resolver.getReferralProgram({ id, program }, options);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this._resolver.delete({ id });

    return true;
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this._resolver.list({}, options);
    const results = map(get(result, 'data', []), user => this._instantiate(user));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: user } = await this._resolver.patch(merge({}, data, { id }));

    return this._instantiate(user);
  }

  /**
   * Resend confirmation.
   */

  async resendConfirmation(data) {
    const { data: token } = await this._resolver.resendConfirmation(data);

    return token;
  }

  /**
   * Reset password.
   */

  async resetPassword(data) {
    await this._resolver.resetPassword(data);

    return true;
  }

  /**
   * Unblock.
   */

  async unblock(id) {
    await this._resolver.unblock({ id });

    return true;
  }

}
