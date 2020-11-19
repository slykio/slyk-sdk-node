
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'questions',
    method: 'post'
  },
  delete: {
    endpoint: 'questions/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'questions/:id',
    method: 'get'
  },
  list: {
    endpoint: 'questions',
    method: 'get'
  },
  patch: {
    endpoint: 'questions/:id',
    method: 'patch'
  }

};

/**
 * Export `QuestionResolver`.
 */

export default connection => resolverFactory(connection, config);
