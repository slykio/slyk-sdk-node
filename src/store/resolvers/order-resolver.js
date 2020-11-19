
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  cancel: {
    endpoint: 'orders/:id',
    method: 'post'
  },
  create: {
    endpoint: 'orders',
    method: 'post'
  },
  fulfill: {
    endpoint: 'orders/:id/fulfill',
    method: 'post'
  },
  get: {
    endpoint: 'orders/:id',
    method: 'get'
  },
  list: {
    endpoint: 'orders',
    method: 'get'
  },
  patch: {
    endpoint: 'orders/:id',
    method: 'patch'
  },
  pay: {
    endpoint: 'orders/:id/pay',
    method: 'post'
  },
  refund: {
    endpoint: 'orders/:id/refund',
    method: 'post'
  },
  unfulfill: {
    endpoint: 'orders/:id/unfulfill',
    method: 'post'
  }

};

/**
 * Export `OrderResolver`.
 */

export default connection => resolverFactory(connection, config);
