
/**
 * Module dependencies.
 */

import resolverFactory from 'core/util/resolver-factory';

/**
 * Configuration.
 */

const config = {
  list: {
    endpoint: 'tasks/:taskId/steps/:stepId/questions',
    method: 'get'
  }
};

/**
 * Export `TaskStepQuestionAnswerResolver`.
 */

export default connection => resolverFactory(connection, config);
