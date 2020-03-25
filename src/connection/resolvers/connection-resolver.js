
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'connections',
    method: 'post'
  },
  get: {
    endpoint: 'connections/:id',
    method: 'get'
  },
  list: {
    endpoint: 'connections',
    method: 'get'
  },
  patch: {
    endpoint: 'connections/:id',
    method: 'patch'
  }
};

/**
 * Export `AssetResolver`.
 */

export default connection => resolverFactory(connection, config);
