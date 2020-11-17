
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'categories',
    method: 'post'
  },
  delete: {
    endpoint: 'categories/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'categories/:id',
    method: 'get'
  },
  list: {
    endpoint: 'categories',
    method: 'get'
  },
  patch: {
    endpoint: 'categories/:id',
    method: 'patch'
  },
  reorder: {
    endpoint: 'categories/:id/reorder',
    method: 'post'
  }

};

/**
 * Export `ProductCategoryResolver`.
 */

export default connection => resolverFactory(connection, config);
