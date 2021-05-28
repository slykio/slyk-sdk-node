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
 * Export `IdentityManager`.
 */
var IdentityManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(IdentityManager, _AbstractManager);

  var _super = _createSuper(IdentityManager);

  function IdentityManager() {
    (0, _classCallCheck2.default)(this, IdentityManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(IdentityManager, [{
    key: "approve",
    value:
    /**
     * Approve.
     */
    function () {
      var _approve = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(id) {
        var _yield$this$resolver$, identity;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.approve({
                  id
                });

              case 2:
                _yield$this$resolver$ = _context.sent;
                identity = _yield$this$resolver$.data;
                return _context.abrupt("return", this.instantiate(identity));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function approve(_x) {
        return _approve.apply(this, arguments);
      }

      return approve;
    }()
    /**
     * Cancel.
     */

  }, {
    key: "cancel",
    value: function () {
      var _cancel = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id, data) {
        var _yield$this$resolver$2, identity;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.cancel((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$2 = _context2.sent;
                identity = _yield$this$resolver$2.data;
                return _context2.abrupt("return", this.instantiate(identity));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function cancel(_x2, _x3) {
        return _cancel.apply(this, arguments);
      }

      return cancel;
    }()
    /**
     * Create.
     */

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {
        var _yield$this$resolver$3, identity;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.create(data);

              case 2:
                _yield$this$resolver$3 = _context3.sent;
                identity = _yield$this$resolver$3.data;
                return _context3.abrupt("return", this.instantiate(identity));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create(_x4) {
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

      function _delete(_x5) {
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
        var _yield$this$resolver$4, identity;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.resolver.get({
                  id
                }, options);

              case 2:
                _yield$this$resolver$4 = _context5.sent;
                identity = _yield$this$resolver$4.data;
                return _context5.abrupt("return", this.instantiate(identity));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function get(_x6, _x7) {
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
      var _list = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.resolver.list({}, options);

              case 2:
                result = _context6.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (identity) {
                  return _this.instantiate(identity);
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

      function list(_x8) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * Reject.
     */

  }, {
    key: "reject",
    value: function () {
      var _reject = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(id, data) {
        var _yield$this$resolver$5, identity;

        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.resolver.reject((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _yield$this$resolver$5 = _context7.sent;
                identity = _yield$this$resolver$5.data;
                return _context7.abrupt("return", this.instantiate(identity));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function reject(_x9, _x10) {
        return _reject.apply(this, arguments);
      }

      return reject;
    }()
    /**
     * Submit.
     */

  }, {
    key: "submit",
    value: function () {
      var _submit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(id) {
        var _yield$this$resolver$6, identity;

        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.resolver.submit({
                  id
                });

              case 2:
                _yield$this$resolver$6 = _context8.sent;
                identity = _yield$this$resolver$6.data;
                return _context8.abrupt("return", this.instantiate(identity));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function submit(_x11) {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }]);
  return IdentityManager;
}(_abstractManager.default);

exports.default = IdentityManager;
module.exports = exports.default;