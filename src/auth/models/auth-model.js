
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `AuthModel`.
 */

export default class AuthModel extends AbstractModel {

  /**
   * Logout.
   */

  logout() {
    return AuthModel.sdk.auth.logout({ refreshToken: this.refreshToken });
  }

  /**
   * Refresh.
   */

  refresh() {
    return AuthModel.sdk.auth.refresh({ refreshToken: this.refreshToken });
  }

}
