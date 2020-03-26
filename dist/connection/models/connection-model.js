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
 * `ConnectionModel`.
 */
var ConnectionModel =
/*#__PURE__*/
function (_AbstractModel) {
  (0, _inherits2.default)(ConnectionModel, _AbstractModel);

  function ConnectionModel() {
    (0, _classCallCheck2.default)(this, ConnectionModel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConnectionModel).apply(this, arguments));
  }

  (0, _createClass2.default)(ConnectionModel, [{
    key: "patch",

    /**
     * Patch.
     */
    value: function patch(data) {
      return this._sdk.connection.patch(this.id, data);
    }
  }]);
  return ConnectionModel;
}(_abstractModel.default);

exports.default = ConnectionModel;
module.exports = exports.default;