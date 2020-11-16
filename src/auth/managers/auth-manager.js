
/**
 * Module dependencies.
 */

import AbstractManager from 'core/managers/abstract-manager';

/**
 * Export `AuthManager`.
 */

export default class AuthManager extends AbstractManager {

  /**
   * Login.
   */

  async login(data) {
    const { data: auth } = await this._resolver.login(data);

    return this._instantiate(auth);
  }

  /**
   * Logout.
   */

  async logout(data) {
    await this._resolver.logout(data);

    return true;
  }

  /**
   * Refresh.
   */

  async refresh(data) {
    const { data: auth } = await this._resolver.refresh(data);

    return this._instantiate(auth);
  }

  /**
   * Validate.
   */

  async validate(data) {
    await this._resolver.validate(data);

    return true;
  }

}
