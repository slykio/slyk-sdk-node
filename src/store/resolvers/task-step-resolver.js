
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  get: {
    endpoint: 'tasks/:taskId/steps/:id',
    method: 'get'
  },
  list: {
    endpoint: 'tasks/:taskId/steps',
    method: 'get'
  },
  patch: {
    endpoint: 'tasks/:taskId/steps/:id',
    method: 'patch'
  }
};

/**
 * Export `TaskStepResolver`.
 */

export default connection => resolverFactory(connection, config);
