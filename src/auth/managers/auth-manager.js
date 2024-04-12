
/**
 * Module dependencies.
 */

import { merge } from 'lodash';
import AbstractManager from 'core/managers/abstract-manager';
import UserModel from 'user/models/user-model';

/**
 * Export `AuthManager`.
 */

export default class AuthManager extends AbstractManager {

  /**
   * Confirm two factor code.
   */

  async confirmTwoFactorCode(twoFactorId, data) {
    const { data: token } = await this.resolver.confirmTwoFactorCode(merge({}, data, { twoFactorId }));

    return token;
  }

  /**
   * Disable two factor.
   */

  async disableTwoFactor(userId, data) {
    await this.resolver.disableTwoFactor(merge({}, data, { userId }));

    return true;
  }

  /**
   * Enable two factor.
   */

  async enableTwoFactor(userId, data) {
    const { data: recoveryCodes } = await this.resolver.enableTwoFactor(merge({}, data, { userId }));

    return recoveryCodes;
  }

  /**
   * Generate two factor recovery codes.
   */

  async generateTwoFactorRecoveryCodes(userId) {
    const { data: recoveryCodes } = await this.resolver.generateTwoFactorRecoveryCodes({ userId });

    return recoveryCodes;
  }

  /**
   * Get two factor recovery codes.
   */

  async getTwoFactorRecoveryCodes(userId) {
    const { data: recoveryCodes } = await this.resolver.getTwoFactorRecoveryCodes({ userId });

    return recoveryCodes;
  }

  /**
   * Get two factor secret.
   */

  async getTwoFactorSecret() {
    const { data: secret } = await this.resolver.getTwoFactorSecret();

    return secret;
  }

  /**
   * Login.
   */

  async login(data) {
    const { data: auth } = await this.resolver.login(data);

    return this.instantiate(auth);
  }

  /**
   * Logout.
   */

  async logout(data) {
    await this.resolver.logout(data);

    return true;
  }

  /**
   * Refresh.
   */

  async refresh(data) {
    const { data: auth } = await this.resolver.refresh(data);

    return this.instantiate(auth);
  }

  /**
   * Start two factor flow.
   */

  async startTwoFactorFlow(data) {
    const { data: twoFactorId } = await this.resolver.startTwoFactorFlow(data);

    return twoFactorId;
  }

  /**
   * Validate.
   */

  async validate(data, options) {
    const { data: { user } } = await this.resolver.validate(data, options);

    return { user: new UserModel(user, { connection: this.connection }) };
  }

}
