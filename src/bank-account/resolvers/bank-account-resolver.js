
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  get: {
    endpoint: 'bank-accounts/:id',
    method: 'get'
  },
  list: {
    endpoint: 'bank-accounts',
    method: 'get'
  }
};

/**
 * Export `BankAccountResolver`.
 */

export default connection => resolverFactory(connection, config);
