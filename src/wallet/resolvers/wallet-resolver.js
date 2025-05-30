
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  activity: {
    endpoint: 'wallets/:id/activity',
    method: 'get'
  },
  balance: {
    endpoint: 'wallets/:id/balance',
    method: 'get'
  },
  create: {
    endpoint: 'wallets',
    method: 'post'
  },
  get: {
    endpoint: 'wallets/:id',
    method: 'get'
  },
  globalActivity: {
    endpoint: 'wallets/activity',
    method: 'get'
  },
  globalBalance: {
    endpoint: 'wallets/balance',
    method: 'get'
  },
  list: {
    endpoint: 'wallets',
    method: 'get'
  },
  movements: {
    endpoint: 'wallets/:id/movements',
    method: 'get'
  },
  patch: {
    endpoint: 'wallets/:id',
    method: 'patch'
  },
  storedBalance: {
    endpoint: 'wallets/:id/stored-balance',
    method: 'get'
  },
  storedBalanceViaPost: {
    endpoint: 'wallets/:id/stored-balance/list',
    method: 'post'
  },
  storedGlobalBalance: {
    endpoint: 'wallets/stored-balance',
    method: 'get'
  },
  storedGlobalBalanceViaPost: {
    endpoint: 'wallets/stored-balance/list',
    method: 'post'
  },
  transactions: {
    endpoint: 'wallets/:id/transactions',
    method: 'get'
  }
};

/**
 * Export `WalletResolver`.
 */

export default connection => resolverFactory(connection, config);
