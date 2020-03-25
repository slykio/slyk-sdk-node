
/**
 * Module dependencies.
 */

import { InternalServerError } from 'easy-http-errors';
import sdkFactory from 'core/util/sdk-factory';

/**
 * Export `slykSDK`.
 */

export default ({ apikey, host = 'api.slyk.io' } = {}) => {
  if (!apikey) {
    throw new InternalServerError('Missing API key');
  }

  return sdkFactory({ apikey, host });
};
