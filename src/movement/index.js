
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import MovementManager from 'movement/managers/movement-manager';
import MovementModel from 'movement/models/movement-model';
import MovementResolver from 'movement/resolvers/movement-resolver';

/**
 * Export `movement`.
 */

export default {
  manager: MovementManager,
  model: MovementModel,
  resolver: MovementResolver
};
