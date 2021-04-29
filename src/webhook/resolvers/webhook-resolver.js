
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  create: {
    endpoint: 'webhooks',
    method: 'post'
  },
  delete: {
    endpoint: 'webhooks/:id',
    method: 'delete'
  },
  get: {
    endpoint: 'webhooks/:id',
    method: 'get'
  },
  list: {
    endpoint: 'webhooks',
    method: 'get'
  },
  patch: {
    endpoint: 'webhooks/:id',
    method: 'patch'
  }
};

/**
 * Export `WebhookResolver`.
 */

export default connection => resolverFactory(connection, config);
