
/**
 * Module dependencies.
 */

import AbstractManager from 'core/managers/abstract-manager';
import UserModel from 'user/models/user-model';

/**
 * Export `AuthManager`.
 */

export default class AuthManager extends AbstractManager {

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
   * Validate.
   */

  async validate(data, options) {
    const { data: { user } } = await this.resolver.validate(data, options);

    return { user: new UserModel(user, { connection: this.connection }) };
  }

}
