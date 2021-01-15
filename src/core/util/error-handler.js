
/**
 * Module dependencies.
 */

import { get } from 'lodash';
import httpErrorResolver from 'core/resolvers/http-error-resolver';

/**
 * Export `errorHandler`.
 */

export default error => {
  const { statusCode } = error;
  const {
    code: message,
    data,
    errors
  } = get(error, 'response.body', {});

  const HTTPError = httpErrorResolver(statusCode);

  throw new HTTPError(message, { data, errors });
};
