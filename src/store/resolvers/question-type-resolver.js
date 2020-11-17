
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  list: {
    endpoint: 'question-types',
    method: 'get'
  }

};

/**
 * Export `QuestionTypeResolver`.
 */

export default connection => resolverFactory(connection, config);
