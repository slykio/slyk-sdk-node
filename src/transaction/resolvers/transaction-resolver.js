
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  approve: {
    endpoint: 'transactions/:id/approve',
    method: 'post'
  },
  confirm: {
    endpoint: 'transactions/:id/confirm',
    method: 'post'
  },
  deposit: {
    endpoint: 'transactions/deposit',
    method: 'post'
  },
  fail: {
    endpoint: 'transactions/:id/fail',
    method: 'post'
  },
  get: {
    endpoint: 'transactions/:id',
    method: 'get'
  },
  list: {
    endpoint: 'transactions',
    method: 'get'
  },
  pay: {
    endpoint: 'transactions/pay',
    method: 'post'
  },
  reject: {
    endpoint: 'transactions/:id/reject',
    method: 'post'
  },
  request: {
    endpoint: 'transactions/request',
    method: 'post'
  },
  send: {
    endpoint: 'transactions/send',
    method: 'post'
  },
  transfer: {
    endpoint: 'transactions/transfer',
    method: 'post'
  },
  withdrawal: {
    endpoint: 'transactions/withdrawal',
    method: 'post'
  }
};

/**
 * Export `TransactionResolver`.
 */

export default connection => resolverFactory(connection, config);
