
/* istanbul ignore file */

/**
 * Module dependencies.
 */

import SettingManager from 'setting/managers/setting-manager';
import SettingModel from 'setting/models/setting-model';
import SettingResolver from 'setting/resolvers/setting-resolver';

/**
 * Export `setting`.
 */

export default {
  manager: SettingManager,
  model: SettingModel,
  resolver: SettingResolver
};
