
/**
 * Module dependencies.
 */

import { mapValues } from 'lodash';
import library from 'core/library';

/**
 * Export `sdkFactory`.
 */

export default connection => {
  return mapValues(library, ({ manager: Manager, model, resolver }) => {
    return new Manager({
      connection,
      model,
      resolver
    });
  });
};
