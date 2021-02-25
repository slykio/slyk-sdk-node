
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
    await this.resolver.approve({ id });

    return true;
  }

  /**
   * Block.
   */

  async block(id) {
    await this.resolver.block({ id });

    return true;
  }

  /**
   * Change email.
   */

  async changeEmail(id, data) {
    const { data: token } = await this.resolver.changeEmail(merge({}, data, { id }));

    return token;
  }

  /**
   * Change password.
   */

  async changePassword(id, data) {
    const { data: token } = await this.resolver.changePassword(merge({}, data, { id }));

    return token;
  }

  /**
   * Change phone.
   */

  async changePhone(id, data) {
    const { data: token } = await this.resolver.changePhone(merge({}, data, { id }));

    return token;
  }

  /**
   * Confirm email.
   */

  async confirmEmail(data) {
    const { data: accessTokens } = await this.resolver.confirmEmail(data);

    if (!accessTokens) {
      return true;
    }

    return accessTokens;
  }

  /**
   * Confirm phone.
   */

  async confirmPhone(data) {
    const { data: accessTokens } = await this.resolver.confirmPhone(data);

    if (!accessTokens) {
      return true;
    }

    return accessTokens;
  }

  /**
   * Create.
   */

  async create(data) {
    const { data: user } = await this.resolver.create(data);

    return this.instantiate(user);
  }

  /**
   * Forgot password.
   */

  async forgotPassword(data) {
    const { data: token } = await this.resolver.forgotPassword(data);

    return token;
  }

  /**
   * Get.
   */

  async get(id, options) {
    const { data: user } = await this.resolver.get({ id }, options);

    return this.instantiate(user);
  }

  /**
   * Get referral program.
   */

  getReferralProgram(id, program, options) {
    return this.resolver.getReferralProgram({ id, program }, options);
  }

  /**
   * Delete.
   */

  async delete(id) {
    await this.resolver.delete({ id });

    return true;
  }

  /**
   * List.
   */

  async list(options) {
    const result = await this.resolver.list({}, options);
    const results = map(get(result, 'data', []), user => this.instantiate(user));
    const total = get(result, 'total');

    return { results, total };
  }

  /**
   * Patch.
   */

  async patch(id, data) {
    const { data: user } = await this.resolver.patch(merge({}, data, { id }));

    return this.instantiate(user);
  }

  /**
   * Resend confirmation.
   */

  async resendConfirmation(data) {
    const { data: token } = await this.resolver.resendConfirmation(data);

    return token;
  }

  /**
   * Reset password.
   */

  async resetPassword(data) {
    await this.resolver.resetPassword(data);

    return true;
  }

  /**
   * Unblock.
   */

  async unblock(id) {
    await this.resolver.unblock({ id });

    return true;
  }

}
