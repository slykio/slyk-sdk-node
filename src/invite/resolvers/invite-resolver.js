
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  cancel: {
    endpoint: 'invites/:code/cancel',
    method: 'post'
  },
  create: {
    endpoint: 'invites',
    method: 'post'
  },
  get: {
    endpoint: 'invites/:code',
    method: 'get'
  },
  list: {
    endpoint: 'invites',
    method: 'get'
  },
  send: {
    endpoint: 'invites/send',
    method: 'post'
  },
  validate: {
    endpoint: 'invites/:code/validate',
    method: 'get'
  }
};

/**
 * Export `InviteResolver`.
 */

export default connection => resolverFactory(connection, config);
