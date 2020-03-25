
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'addresses',
    method: 'post'
  },
  get: {
    endpoint: 'addresses/:address',
    method: 'get'
  },
  list: {
    endpoint: 'addresses',
    method: 'get'
  }
};

/**
 * Export `AddressResolver`.
 */

export default connection => resolverFactory(connection, config);
