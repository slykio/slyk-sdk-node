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
 * Export `AddressManager`.
 */
var AddressManager = /*#__PURE__*/function (_AbstractManager) {
  (0, _inherits2.default)(AddressManager, _AbstractManager);

  var _super = _createSuper(AddressManager);

  function AddressManager() {
    (0, _classCallCheck2.default)(this, AddressManager);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AddressManager, [{
    key: "create",
    value:
    /**
     * Create.
     */
    function () {
      var _create = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(data) {
        var _yield$this$resolver$, address;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resolver.create(data);

              case 2:
                _yield$this$resolver$ = _context.sent;
                address = _yield$this$resolver$.data;
                return _context.abrupt("return", this.instantiate(address));

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
     * Get.
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(address, options) {
        var _yield$this$resolver$2, data;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.resolver.get({
                  address
                }, options);

              case 2:
                _yield$this$resolver$2 = _context2.sent;
                data = _yield$this$resolver$2.data;
                return _context2.abrupt("return", this.instantiate(data));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function get(_x2, _x3) {
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
      var _list = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.resolver.list({}, options);

              case 2:
                result = _context3.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (address) {
                  return _this.instantiate(address);
                });
                total = (0, _lodash.get)(result, 'total');
                return _context3.abrupt("return", {
                  results,
                  total
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function list(_x4) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }]);
  return AddressManager;
}(_abstractManager.default);

exports.default = AddressManager;
module.exports = exports.default;