
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  complete: {
    endpoint: 'tasks/:id/complete',
    method: 'post'
  },
  completeSurvey: {
    endpoint: 'tasks/:id/answers',
    method: 'post'
  },
  create: {
    endpoint: 'tasks',
    method: 'post'
  },
  delete: {
    endpoint: 'tasks/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'tasks/:id',
    method: 'get'
  },
  getStatistics: {
    endpoint: 'users/:id/tasks/statistics',
    method: 'get'
  },
  list: {
    endpoint: 'tasks',
    method: 'get'
  },
  listAnswers: {
    endpoint: 'tasks/:id/answers',
    method: 'get'
  },
  patch: {
    endpoint: 'tasks/:id',
    method: 'patch'
  },
  reorder: {
    endpoint: 'tasks/:id/reorder',
    method: 'post'
  }

};

/**
 * Export `TaskResolver`.
 */

export default connection => resolverFactory(connection, config);
