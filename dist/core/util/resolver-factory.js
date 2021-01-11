"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _lodash = require("lodash");

var _apiUrlResolver = _interopRequireDefault(require("../resolvers/api-url-resolver"));

var _cleanRequestData = _interopRequireDefault(require("./clean-request-data"));

var _errorHandler = _interopRequireDefault(require("./error-handler"));

var _got = _interopRequireDefault(require("got"));

var _qs = _interopRequireDefault(require("qs"));

var _sortMiddleware = _interopRequireDefault(require("../middlewares/sort-middleware"));

/**
 * Module dependencies.
 */

/**
 * Create task.
 */
var createTask = function createTask(connection, task) {
  var apikey = (0, _lodash.get)(connection, 'apikey');
  var host = (0, _lodash.get)(connection, 'host');
  var endpoint = task.endpoint,
      method = task.method;
  return (
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var data,
          options,
          cleanedRequestData,
          requestData,
          url,
          _ref2,
          body,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              cleanedRequestData = (0, _cleanRequestData.default)(data, endpoint);
              requestData = (0, _lodash.isEmpty)(cleanedRequestData) ? null : cleanedRequestData;
              url = (0, _apiUrlResolver.default)((0, _sortMiddleware.default)({
                data,
                endpoint,
                host,
                options
              }));
              _context.prev = 5;
              _context.next = 8;
              return (0, _got.default)(url, {
                body: requestData,
                headers: {
                  apikey
                },
                json: true,
                method,
                query: _qs.default.stringify(options)
              });

            case 8:
              _ref2 = _context.sent;
              body = _ref2.body;
              return _context.abrupt("return", body);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              (0, _errorHandler.default)(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 13]]);
    }))
  );
};
/**
 * Export `resolverFactory`.
 */


var _default = function _default(connection, config) {
  return (0, _lodash.mapValues)(config, function (task) {
    return createTask(connection, task);
  });
};

exports.default = _default;
module.exports = exports.default;