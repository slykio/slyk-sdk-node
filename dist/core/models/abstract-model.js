"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _lodash = require("lodash");

var _sdkFactory = _interopRequireDefault(require("../util/sdk-factory"));

/**
 * Module dependencies.
 */

/**
 * Export `AbstractModel`.
 */
var AbstractModel =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   */
  function AbstractModel(data, _ref) {
    var connection = _ref.connection;
    (0, _classCallCheck2.default)(this, AbstractModel);
    Object.assign(this, data);
    this._sdk = (0, _sdkFactory.default)(connection); // eslint-disable-line
  }
  /**
   * Get data.
   */


  (0, _createClass2.default)(AbstractModel, [{
    key: "getData",
    value: function getData() {
      return (0, _lodash.omit)(this, '_sdk');
    }
  }]);
  return AbstractModel;
}();

exports.default = AbstractModel;
module.exports = exports.default;