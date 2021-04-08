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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = require("lodash");

var _abstractManager = _interopRequireDefault(require("../../core/managers/abstract-manager"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Export `TaskStepManager`.
 */
var TaskStepManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(TaskStepManager, _AbstractManager);

  var _super = _createSuper(TaskStepManager);

  function TaskStepManager() {
    (0, _classCallCheck2.default)(this, TaskStepManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TaskStepManager, [{
    key: "get",
    value:
    /**
     * Get.
     */
    function () {
      var _get = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(taskId, id, options) {
        var _yield$this$resolver$, step;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.get({
                  id,
                  taskId
                }, options);

              case 2:
                _yield$this$resolver$ = _context.sent;
                step = _yield$this$resolver$.data;
                return _context.abrupt("return", this.instantiate(step));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x, _x2, _x3) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * List.
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(taskId, options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.list({
                  taskId
                }, options);

              case 2:
                result = _context2.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (step) {
                  return _this.instantiate(step);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context2.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function list(_x4, _x5) {
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
      var _patch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(taskId, id, data) {
        var _yield$this$resolver$2, step;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.patch((0, _lodash.merge)({}, data, {
                  id,
                  taskId
                }));

              case 2:
                _yield$this$resolver$2 = _context3.sent;
                step = _yield$this$resolver$2.data;
                return _context3.abrupt("return", this.instantiate(step));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function patch(_x6, _x7, _x8) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
  }]);
  return TaskStepManager;
}(_abstractManager.default);

exports.default = TaskStepManager;
module.exports = exports.default;