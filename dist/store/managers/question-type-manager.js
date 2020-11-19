"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _lodash = require("lodash");

var _abstractManager = _interopRequireDefault(require("../../core/managers/abstract-manager"));

/**
 * Module dependencies.
 */

/**
 * Export `QuestionTypeManager`.
 */
var QuestionTypeManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(QuestionTypeManager, _AbstractManager);

  function QuestionTypeManager() {
    (0, _classCallCheck2.default)(this, QuestionTypeManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QuestionTypeManager).apply(this, arguments));
  }

  (0, _createClass2.default)(QuestionTypeManager, [{
    key: "list",

    /**
     * List.
     */
    value: function () {
      var _list = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.list({}, options);

              case 2:
                result = _context.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (questionType) {
                  return _this._instantiate(questionType);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function list(_x) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }]);
  return QuestionTypeManager;
}(_abstractManager.default);

exports.default = QuestionTypeManager;
module.exports = exports.default;