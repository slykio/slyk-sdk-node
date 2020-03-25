
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import ConnectionManager from 'connection/managers/connection-manager';
import ConnectionModel from 'connection/models/connection-model';
import ConnectionResolver from 'connection/resolvers/connection-resolver';

/**
 * Export `connection`.
 */

export default {
  manager: ConnectionManager,
  model: ConnectionModel,
  resolver: ConnectionResolver
};
