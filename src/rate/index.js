
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import RateManager from 'rate/managers/rate-manager';
import RateModel from 'rate/models/rate-model';
import RateResolver from 'rate/resolvers/rate-resolver';

/**
 * Export `rate`.
 */

export default {
  manager: RateManager,
  model: RateModel,
  resolver: RateResolver
};
