
/**
 * Module dependencies.
 */

import { reduce } from 'lodash';

/**
 * Export `cleanRequestData`.
 */

export default (data, endpoint) => {
  return reduce(data, (result, value, key) => {
    if (endpoint.includes(`:${key}`)) {
      return result;
    }

    return { ...result, [key]: value };
  }, {});
};
