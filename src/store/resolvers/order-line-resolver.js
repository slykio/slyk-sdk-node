
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  fulfill: {
    endpoint: 'orders/:orderId/lines/:id/fulfill',
    method: 'post'
  },
  get: {
    endpoint: 'orders/:orderId/lines/:id',
    method: 'get'
  },
  list: {
    endpoint: 'orders/:orderId/lines',
    method: 'get'
  },
  unfulfill: {
    endpoint: 'orders/:orderId/lines/:id/unfulfill',
    method: 'post'
  }

};

/**
 * Export `OrderLineResolver`.
 */

export default connection => resolverFactory(connection, config);
