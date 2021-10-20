
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'user-bank-accounts',
    method: 'post'
  },
  delete: {
    endpoint: 'user-bank-accounts/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'user-bank-accounts/:id',
    method: 'get'
  },
  list: {
    endpoint: 'user-bank-accounts',
    method: 'get'
  },
  patch: {
    endpoint: 'user-bank-accounts/:id',
    method: 'patch'
  }
};

/**
 * Export `UserBankAccountResolver`.
 */

export default connection => resolverFactory(connection, config);
