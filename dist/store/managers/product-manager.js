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
 * Export `ProductManager`.
 */
var ProductManager =
/*#__PURE__*/
function (_AbstractManager) {
  (0, _inherits2.default)(ProductManager, _AbstractManager);

  function ProductManager() {
    (0, _classCallCheck2.default)(this, ProductManager);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProductManager).apply(this, arguments));
  }

  (0, _createClass2.default)(ProductManager, [{
    key: "create",

    /**
     * Create.
     */
    value: function () {
      var _create = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(data) {
        var _ref, product;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._resolver.create(data);

              case 2:
                _ref = _context.sent;
                product = _ref.data;
                return _context.abrupt("return", this._instantiate(product));

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
     * Create question.
     */

  }, {
    key: "createQuestion",
    value: function () {
      var _createQuestion = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(id, data) {
        var _ref2, product;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resolver.createQuestion((0, _lodash.merge)({}, data, {
                  id
                }));

              case 2:
                _ref2 = _context2.sent;
                product = _ref2.data;
                return _context2.abrupt("return", this._instantiate(product));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createQuestion(_x2, _x3) {
        return _createQuestion.apply(this, arguments);
      }

      return createQuestion;
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
     * Delete question.
     */

  }, {
    key: "deleteQuestion",
    value: function () {
      var _deleteQuestion = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(productId, questionId) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resolver.deleteQuestion({
                  productId,
                  questionId
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

      function deleteQuestion(_x5, _x6) {
        return _deleteQuestion.apply(this, arguments);
      }

      return deleteQuestion;
    }()
    /**
     * Get.
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(id, options) {
        var _ref3, product;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resolver.get({
                  id
                }, options);

              case 2:
                _ref3 = _context5.sent;
                product = _ref3.data;
                return _context5.abrupt("return", this._instantiate(product));

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
     * List.
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(options) {
        var _this = this;

        var result, results, total;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._resolver.list({}, options);

              case 2:
                result = _context6.sent;
                results = (0, _lodash.map)((0, _lodash.get)(result, 'data', []), function (product) {
                  return _this._instantiate(product);
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
        var _ref4, product;

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
                product = _ref4.data;
                return _context7.abrupt("return", this._instantiate(product));

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
    /**
     * Reorder question.
     */

  }, {
    key: "reorderQuestion",
    value: function () {
      var _reorderQuestion = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(productId, questionId, data) {
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._resolver.reorderQuestion((0, _lodash.merge)({}, data, {
                  productId,
                  questionId
                }));

              case 2:
                return _context9.abrupt("return", true);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function reorderQuestion(_x14, _x15, _x16) {
        return _reorderQuestion.apply(this, arguments);
      }

      return reorderQuestion;
    }()
  }]);
  return ProductManager;
}(_abstractManager.default);

exports.default = ProductManager;
module.exports = exports.default;