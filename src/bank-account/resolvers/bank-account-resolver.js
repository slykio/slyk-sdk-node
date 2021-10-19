
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'bank-accounts',
    method: 'post'
  },
  delete: {
    endpoint: 'bank-accounts/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'bank-accounts/:id',
    method: 'get'
  },
  list: {
    endpoint: 'bank-accounts',
    method: 'get'
  },
  patch: {
    endpoint: 'bank-accounts/:id',
    method: 'patch'
  }
};

/**
 * Export `BankAccountResolver`.
 */

export default connection => resolverFactory(connection, config);
