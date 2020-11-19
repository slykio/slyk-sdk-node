
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'products/:productId/images',
    method: 'post'
  },
  delete: {
    endpoint: 'products/:productId/images/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'products/:productId/images/:id',
    method: 'get'
  },
  list: {
    endpoint: 'products/:productId/images',
    method: 'get'
  },
  reorder: {
    endpoint: 'products/:productId/images/:id/reorder',
    method: 'post'
  }

};

/**
 * Export `ProductImageResolver`.
 */

export default connection => resolverFactory(connection, config);
