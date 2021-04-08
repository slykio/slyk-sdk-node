"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = require("lodash");

var _abstractManager = _interopRequireDefault(require("../../core/managers/abstract-manager"));

var _taskStepQuestionAnswerModel = _interopRequireDefault(require("../models/task-step-question-answer-model"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `TaskManager`.
 */
var TaskManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(TaskManager, _AbstractManager);

  var _super = _createSuper(TaskManager);

  function TaskManager() {
    (0, _classCallCheck2.default)(this, TaskManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TaskManager, [{
    key: "complete",
    value:
    /**
     * Complete.
     */
    function () {
      var _complete = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(id, data) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.complete((0, _lodash.merge)({}, data, {
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
     * Complete survey.
     */

  }, {
    key: "completeSurvey",
    value: function () {
      var _completeSurvey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id, data) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.completeSurvey((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                return _context2.abrupt("return", true);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function completeSurvey(_x3, _x4) {
        return _completeSurvey.apply(this, arguments);
      }

      return completeSurvey;
    }()
    /**
     * Create.
     */

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {
        var _yield$this$resolver$, task;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.create(data);

              case 2:
                _yield$this$resolver$ = _context3.sent;
                task = _yield$this$resolver$.data;
                return _context3.abrupt("return", this.instantiate(task));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create(_x5) {
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
      var _delete2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(id) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.resolver.delete({
                  id
                });

              case 2:
                return _context4.abrupt("return", true);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _delete(_x6) {
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
      var _get = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id, options) {
        var _yield$this$resolver$2, task;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.resolver.get({
                  id
                }, options);

              case 2:
                _yield$this$resolver$2 = _context5.sent;
                task = _yield$this$resolver$2.data;
                return _context5.abrupt("return", this.instantiate(task));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function get(_x7, _x8) {
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
      var _getStatistics = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(userId, options) {
        var _this = this;

        var _yield$this$resolver$3, _yield$this$resolver$4, available, completed, availableTasksData, completedTasksData;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.resolver.getStatistics({
                  id: userId
                }, options);

              case 2:
                _yield$this$resolver$3 = _context6.sent;
                _yield$this$resolver$4 = _yield$this$resolver$3.data;
                available = _yield$this$resolver$4.available;
                completed = _yield$this$resolver$4.completed;
                availableTasksData = (0, _lodash.map)((0, _lodash.get)(available, 'data', []), function (task) {
                  return _this.instantiate(task);
                });
                completedTasksData = (0, _lodash.map)((0, _lodash.get)(completed, 'data', []), function (task) {
                  return _this.instantiate(task);
                });
                return _context6.abrupt("return", {
                  available: _objectSpread(_objectSpread({}, available), {}, {
                    data: availableTasksData
                  }),
                  completed: _objectSpread(_objectSpread({}, completed), {}, {
                    data: completedTasksData
                  })
                });

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getStatistics(_x9, _x10) {
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
      var _list = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(options) {
        var _this2 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.resolver.list({}, options);

              case 2:
                result = _context7.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (task) {
                  return _this2.instantiate(task);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context7.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function list(_x11) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * List answers.
     */

  }, {
    key: "listAnswers",
    value: function () {
      var _listAnswers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(id, options) {
        var _this3 = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.resolver.listAnswers({
                  id
                }, options);

              case 2:
                result = _context8.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (taskAnswer) {
                  return new _taskStepQuestionAnswerModel.default(taskAnswer, {
                    connection: _this3.connection
                  });
                });
                total = (0, _lodash.get)(result, 'total');
                return _context8.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function listAnswers(_x12, _x13) {
        return _listAnswers.apply(this, arguments);
      }

      return listAnswers;
    }()
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function () {
      var _patch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(id, data) {
        var _yield$this$resolver$5, task;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.resolver.patch((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$5 = _context9.sent;
                task = _yield$this$resolver$5.data;
                return _context9.abrupt("return", this.instantiate(task));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function patch(_x14, _x15) {
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
      var _reorder = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(id, data) {
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.resolver.reorder((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                return _context10.abrupt("return", true);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function reorder(_x16, _x17) {
        return _reorder.apply(this, arguments);
      }

      return reorder;
    }()
  }]);
  return TaskManager;
}(_abstractManager.default);

exports.default = TaskManager;
module.exports = exports.default;