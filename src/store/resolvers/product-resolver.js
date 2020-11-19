
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'products',
    method: 'post'
  },
  createQuestion: {
    endpoint: 'products/:id/questions',
    method: 'post'
  },
  delete: {
    endpoint: 'products/:id',
    method: 'delete'
  },
  deleteQuestion: {
    endpoint: 'products/:productId/questions/:questionId',
    method: 'delete'
  },
  get: {
    endpoint: 'products/:id',
    method: 'get'
  },
  list: {
    endpoint: 'products',
    method: 'get'
  },
  patch: {
    endpoint: 'products/:id',
    method: 'patch'
  },
  reorder: {
    endpoint: 'products/:id/reorder',
    method: 'post'
  },
  reorderQuestion: {
    endpoint: 'products/:productId/questions/:questionId/reorder',
    method: 'post'
  }

};

/**
 * Export `ProductResolver`.
 */

export default connection => resolverFactory(connection, config);
