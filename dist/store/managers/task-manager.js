"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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
 * Export `TaskManager`.
 */
var TaskManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(TaskManager, _AbstractManager);

  function TaskManager() {
    (0, _classCallCheck2.default)(this, TaskManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TaskManager).apply(this, arguments));
  }

  (0, _createClass2.default)(TaskManager, [{
    key: "complete",

    /**
     * Complete.
     */
    value: function () {
      var _complete = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(id, data) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.complete((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                return _context.abrupt("return", true);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function complete(_x, _x2) {
        return _complete.apply(this, arguments);
      }

      return complete;
    }()
    /**
     * Create.
     */

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(data) {
        var _ref, task;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resolver.create(data);

              case 2:
                _ref = _context2.sent;
                task = _ref.data;
                return _context2.abrupt("return", this._instantiate(task));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x3) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /**
     * Delete.
     */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(id) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._resolver.delete({
                  id
                });

              case 2:
                return _context3.abrupt("return", true);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /**
     * Get.
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(id, options) {
        var _ref2, task;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resolver.get({
                  id
                }, options);

              case 2:
                _ref2 = _context4.sent;
                task = _ref2.data;
                return _context4.abrupt("return", this._instantiate(task));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function get(_x5, _x6) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * Get statistics.
     */

  }, {
    key: "getStatistics",
    value: function () {
      var _getStatistics = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(userId, options) {
        var _this = this;

        var _ref3, _ref3$data, available, completed, availableTasksData, completedTasksData;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resolver.getStatistics({
                  id: userId
                }, options);

              case 2:
                _ref3 = _context5.sent;
                _ref3$data = _ref3.data;
                available = _ref3$data.available;
                completed = _ref3$data.completed;
                availableTasksData = (0, _lodash.map)((0, _lodash.get)(available, 'data', []), function (task) {
                  return _this._instantiate(task);
                });
                completedTasksData = (0, _lodash.map)((0, _lodash.get)(completed, 'data', []), function (task) {
                  return _this._instantiate(task);
                });
                return _context5.abrupt("return", {
                  available: (0, _objectSpread2.default)({}, available, {
                    data: availableTasksData
                  }),
                  completed: (0, _objectSpread2.default)({}, completed, {
                    data: completedTasksData
                  })
                });

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getStatistics(_x7, _x8) {
        return _getStatistics.apply(this, arguments);
      }

      return getStatistics;
    }()
    /**
     * List.
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(options) {
        var _this2 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._resolver.list({}, options);

              case 2:
                result = _context6.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (task) {
                  return _this2._instantiate(task);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context6.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function list(_x9) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function () {
      var _patch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(id, data) {
        var _ref4, task;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this._resolver.patch((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref4 = _context7.sent;
                task = _ref4.data;
                return _context7.abrupt("return", this._instantiate(task));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function patch(_x10, _x11) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
    /**
     * Reorder.
     */

  }, {
    key: "reorder",
    value: function () {
      var _reorder = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(id, data) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this._resolver.reorder((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                return _context8.abrupt("return", true);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function reorder(_x12, _x13) {
        return _reorder.apply(this, arguments);
      }

      return reorder;
    }()
  }]);
  return TaskManager;
}(_abstractManager.default);

exports.default = TaskManager;
module.exports = exports.default;