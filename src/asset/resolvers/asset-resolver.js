
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'assets',
    method: 'post'
  },
  get: {
    endpoint: 'assets/:code',
    method: 'get'
  },
  list: {
    endpoint: 'assets',
    method: 'get'
  },
  patch: {
    endpoint: 'assets/:code',
    method: 'patch'
  }
};

/**
 * Export `AssetResolver`.
 */

export default connection => resolverFactory(connection, config);
