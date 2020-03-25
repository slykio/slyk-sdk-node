
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  approve: {
    endpoint: 'users/:id/approve',
    method: 'post'
  },
  block: {
    endpoint: 'users/:id/block',
    method: 'post'
  },
  changePassword: {
    endpoint: 'users/:id/change-password',
    method: 'post'
  },
  create: {
    endpoint: 'users',
    method: 'post'
  },
  get: {
    endpoint: 'users/:id',
    method: 'get'
  },
  list: {
    endpoint: 'users',
    method: 'get'
  },
  patch: {
    endpoint: 'users/:id',
    method: 'patch'
  },
  unblock: {
    endpoint: 'users/:id/unblock',
    method: 'post'
  }
};

/**
 * Export `UserResolver`.
 */

export default connection => resolverFactory(connection, config);
