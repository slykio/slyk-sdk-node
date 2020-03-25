
/**
 * Module dependencies.
 */

import { InternalServerError } from 'easy-http-errors';
import { isEmpty, isString, map, reduce, replace } from 'lodash';
import normalize from 'normalize-url';
import qs from 'qs';

/**
 * Export `apiUrlResolver`.
 */

export default ({
  data,
  endpoint,
  host,
  options
}) => {
  if (!host) {
    throw new InternalServerError('API host is not defined');
  }

  const path = reduce(data, (result, value, key) => {
    if (!isString(value)) {
      return result;
    }

    const cleanValue = value.replace(/[&\\/?\\[\]=\\:]/g, '');

    return replace(result, `:${key}`, cleanValue);
  }, endpoint);

  const missingParams = map(path.match(/:[a-zA-Z0-9]+/g), value => value.replace(':', ''));

  if (!isEmpty(missingParams)) {
    throw new InternalServerError('Missing parameters', { missingParams });
  }

  const params = qs.stringify(options);
  const baseUrl = host.replace(/^(?!(?:\w+:)?\/\/)/, 'https://');
  const url = baseUrl.concat(`/${path}`).concat(`?${params}`);

  return normalize(url);
};
