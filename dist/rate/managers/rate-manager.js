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
 * Export `RateManager`.
 */
var RateManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(RateManager, _AbstractManager);

  var _super = _createSuper(RateManager);

  function RateManager() {
    (0, _classCallCheck2.default)(this, RateManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(RateManager, [{
    key: "create",
    value:
    /**
     * Create.
     */
    function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(data) {
        var _yield$this$resolver$, rate;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.create(data);

              case 2:
                _yield$this$resolver$ = _context.sent;
                rate = _yield$this$resolver$.data;
                return _context.abrupt("return", this.instantiate(rate));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
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
      var _delete2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(baseAssetCode, quoteAssetCode) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.delete({
                  baseAssetCode,
                  quoteAssetCode
                });

              case 2:
                return _context2.abrupt("return", true);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _delete(_x2, _x3) {
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
      var _get = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(baseAssetCode, quoteAssetCode, options) {
        var _yield$this$resolver$2, rate;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.get({
                  baseAssetCode,
                  quoteAssetCode
                }, options);

              case 2:
                _yield$this$resolver$2 = _context3.sent;
                rate = _yield$this$resolver$2.data;
                return _context3.abrupt("return", this.instantiate(rate));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function get(_x4, _x5, _x6) {
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
      var _list = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.resolver.list({}, options);

              case 2:
                result = _context4.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (rate) {
                  return _this.instantiate(rate);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context4.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function list(_x7) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * Patch multiple.
     */

  }, {
    key: "patchMultiple",
    value: function () {
      var _patchMultiple = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(data) {
        var _this2 = this;

        var result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.resolver.patchMultiple(data);

              case 2:
                result = _context5.sent;
                return _context5.abrupt("return", (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (rate) {
                  return _this2.instantiate(rate);
                }));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function patchMultiple(_x8) {
        return _patchMultiple.apply(this, arguments);
      }

      return patchMultiple;
    }()
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function () {
      var _patch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(baseAssetCode, quoteAssetCode, data) {
        var _yield$this$resolver$3, rate;

        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.resolver.patch((0, _lodash.merge)({}, data, {
                  baseAssetCode,
                  quoteAssetCode
                }));

              case 2:
                _yield$this$resolver$3 = _context6.sent;
                rate = _yield$this$resolver$3.data;
                return _context6.abrupt("return", this.instantiate(rate));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function patch(_x9, _x10, _x11) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
  }]);
  return RateManager;
}(_abstractManager.default);

exports.default = RateManager;
module.exports = exports.default;