
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'rates',
    method: 'post'
  },
  delete: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'delete'
  },
  get: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'get'
  },
  list: {
    endpoint: 'rates',
    method: 'get'
  },
  patch: {
    endpoint: 'rates/:baseAssetCode/:quoteAssetCode',
    method: 'patch'
  },
  patchMultiple: {
    endpoint: 'rates',
    method: 'patch'
  }
};

/**
 * Export `RateResolver`.
 */

export default connection => resolverFactory(connection, config);
