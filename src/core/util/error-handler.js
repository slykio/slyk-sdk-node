
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
  const { code: message, errors } = get(error, 'body', {});
  const HTTPError = httpErrorResolver(statusCode);

  throw new HTTPError({ errors, message });
};
