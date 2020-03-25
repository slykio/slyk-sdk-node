
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import AssetManager from 'asset/managers/asset-manager';
import AssetModel from 'asset/models/asset-model';
import AssetResolver from 'asset/resolvers/asset-resolver';

/**
 * Export `asset`.
 */

export default {
  manager: AssetManager,
  model: AssetModel,
  resolver: AssetResolver
};
