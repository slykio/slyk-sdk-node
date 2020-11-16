
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
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
  validate: {
    endpoint: 'auth/token/validate',
    method: 'post'
  }
};

/**
 * Export `AuthResolver`.
 */

export default connection => resolverFactory(connection, config);
