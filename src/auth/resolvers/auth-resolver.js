
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  confirmTwoFactorCode: {
    endpoint: 'users/auth/2fa/:twoFactorId/confirm',
    method: 'post'
  },
  disableTwoFactor: {
    endpoint: 'users/:userId/auth/2fa',
    method: 'delete'
  },
  enableTwoFactor: {
    endpoint: 'users/:userId/auth/2fa',
    method: 'post'
  },
  generateTwoFactorRecoveryCodes: {
    endpoint: 'users/:userId/auth/2fa/recovery-codes',
    method: 'post'
  },
  getTwoFactorRecoveryCodes: {
    endpoint: 'users/:userId/auth/2fa/recovery-codes',
    method: 'get'
  },
  getTwoFactorSecret: {
    endpoint: 'users/auth/2fa/secret',
    method: 'get'
  },
  login: {
    endpoint: 'auth/token',
    method: 'post'
  },
  logout: {
    endpoint: 'auth/token/revoke',
    method: 'post'
  },
  refresh: {
    endpoint: 'auth/token/refresh',
    method: 'post'
  },
  startTwoFactorFlow: {
    endpoint: 'users/auth/2fa/start',
    method: 'post'
  },
  validate: {
    endpoint: 'auth/token/validate',
    method: 'post'
  }
};

/**
 * Export `AuthResolver`.
 */

export default connection => resolverFactory(connection, config);
