
/**
 * Module dependencies.
 */

import { get, isEmpty, mapValues } from 'lodash';
import apiUrlResolver from 'core/resolvers/api-url-resolver';
import cleanRequestData from 'core/util/clean-request-data';
import errorHandler from 'core/util/error-handler';
import got from 'got';
import qs from 'qs';
import sortMiddleware from 'core/middlewares/sort-middleware';

/**
 * Create task.
 */

const createTask = (connection, task) => {
  const apikey = get(connection, 'apikey');
  const host = get(connection, 'host');
  const { endpoint, method } = task;

  return async (data = {}, options = {}) => {
    const cleanedRequestData = cleanRequestData(data, endpoint);
    const requestData = isEmpty(cleanedRequestData) ? null : cleanedRequestData;
    const url = apiUrlResolver(sortMiddleware({
      data,
      endpoint,
      host,
      options
    }));

    try {
      const { body } = await got(url, {
        body: requestData,
        headers: { apikey },
        json: true,
        method,
        query: qs.stringify(options)
      });

      return body;
    } catch (error) {
      errorHandler(error);
    }
  };
};

/**
 * Export `resolverFactory`.
 */

export default (connection, config) => mapValues(config, task => createTask(connection, task));
