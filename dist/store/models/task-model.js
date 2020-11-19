"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _abstractModel = _interopRequireDefault(require("../../core/models/abstract-model"));

/**
 * Module dependencies.
 */

/**
 * Export `TaskModel`.
 */
var TaskModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(TaskModel, _AbstractModel);

  function TaskModel() {
    (0, _classCallCheck2.default)(this, TaskModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TaskModel).apply(this, arguments));
  }

  (0, _createClass2.default)(TaskModel, [{
    key: "complete",

    /**
     * Complete.
     */
    value: function complete(data) {
      return this._sdk.task.complete(this.id, data);
    }
    /**
     * Delete.
     */

  }, {
    key: "delete",
    value: function _delete() {
      return this._sdk.task.delete(this.id);
    }
    /**
     * Patch.
     */

  }, {
    key: "patch",
    value: function patch(data) {
      return this._sdk.task.patch(this.id, data);
    }
    /**
     * Reorder.
     */

  }, {
    key: "reorder",
    value: function reorder(data) {
      return this._sdk.task.reorder(this.id, data);
    }
  }]);
  return TaskModel;
}(_abstractModel.default);

exports.default = TaskModel;
module.exports = exports.default;