
/**
 * Module dependencies.
 */

import { reduce, set } from 'lodash';

/**
 * Export `cleanRequestData`.
 */

export default (data, endpoint) => {
  return reduce(data, (result, value, key) => {
    if (endpoint.includes(`:${key}`)) {
      return result;
    }

    return set(result, key, value);
  }, {});
};
