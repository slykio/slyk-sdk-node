"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _apiUrlResolver = _interopRequireDefault(require("../resolvers/api-url-resolver"));

var _cleanRequestData = _interopRequireDefault(require("./clean-request-data"));

var _errorHandler = _interopRequireDefault(require("./error-handler"));

var _got = _interopRequireDefault(require("got"));

var _sortMiddleware = _interopRequireDefault(require("../middlewares/sort-middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module dependencies.
 */

/**
 * Create task.
 */
const createTask = (connection, task) => {
  const apikey = (0, _lodash.get)(connection, 'apikey');
  const host = (0, _lodash.get)(connection, 'host');
  const {
    endpoint,
    method
  } = task;
  return async (data = {}, options = {}) => {
    const cleanedRequestData = (0, _cleanRequestData.default)(data, endpoint);
    const requestData = (0, _lodash.isEmpty)(cleanedRequestData) ? null : cleanedRequestData;
    const url = (0, _apiUrlResolver.default)((0, _sortMiddleware.default)({
      data,
      endpoint,
      host,
      options
    }));

    try {
      const {
        body
      } = await (0, _got.default)(url, {
        body: requestData,
        headers: {
          apikey
        },
        json: true,
        method
      });
      return body;
    } catch (error) {
      (0, _errorHandler.default)(error);
    }
  };
};
/**
 * Export `resolverFactory`.
 */


var _default = (connection, config) => (0, _lodash.mapValues)(config, task => createTask(connection, task));

exports.default = _default;