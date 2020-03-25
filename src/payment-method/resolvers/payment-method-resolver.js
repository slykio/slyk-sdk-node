
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  get: {
    endpoint: 'payment-methods/:slug',
    method: 'get'
  },
  list: {
    endpoint: 'payment-methods',
    method: 'get'
  }
};

/**
 * Export `PaymentMethodResolver`.
 */

export default connection => resolverFactory(connection, config);
