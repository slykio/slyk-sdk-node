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
 * Export `ProductImageManager`.
 */
var ProductImageManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(ProductImageManager, _AbstractManager);

  function ProductImageManager() {
    (0, _classCallCheck2.default)(this, ProductImageManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProductImageManager).apply(this, arguments));
  }

  (0, _createClass2.default)(ProductImageManager, [{
    key: "create",

    /**
     * Create.
     */
    value: function () {
      var _create = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(productId, data) {
        var _ref, productImage;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.create((0, _lodash.merge)({}, data, {
                  productId
                }));

              case 2:
                _ref = _context.sent;
                productImage = _ref.data;
                return _context.abrupt("return", this._instantiate(productImage));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x, _x2) {
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
      _regenerator.default.mark(function _callee2(id, productId) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resolver.delete({
                  id,
                  productId
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

      function _delete(_x3, _x4) {
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
      _regenerator.default.mark(function _callee3(id, productId, options) {
        var _ref2, productImage;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._resolver.get({
                  id,
                  productId
                }, options);

              case 2:
                _ref2 = _context3.sent;
                productImage = _ref2.data;
                return _context3.abrupt("return", this._instantiate(productImage));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function get(_x5, _x6, _x7) {
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
      var _list = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(productId, options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resolver.list({
                  productId
                }, options);

              case 2:
                result = _context4.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (productImage) {
                  return _this._instantiate(productImage);
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

      function list(_x8, _x9) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * Reorder.
     */

  }, {
    key: "reorder",
    value: function () {
      var _reorder = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(id, productId, data) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resolver.reorder((0, _lodash.merge)({}, data, {
                  id,
                  productId
                }));

              case 2:
                return _context5.abrupt("return", true);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function reorder(_x10, _x11, _x12) {
        return _reorder.apply(this, arguments);
      }

      return reorder;
    }()
  }]);
  return ProductImageManager;
}(_abstractManager.default);

exports.default = ProductImageManager;
module.exports = exports.default;