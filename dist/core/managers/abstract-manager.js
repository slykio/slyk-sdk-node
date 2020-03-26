"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Export `AbstractManager`.
 */
var AbstractManager =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   */
  function AbstractManager(_ref) {
    var connection = _ref.connection,
        model = _ref.model,
        resolver = _ref.resolver;
    (0, _classCallCheck2.default)(this, AbstractManager);
    this._connection = connection; // eslint-disable-line id-match

    this._model = model; // eslint-disable-line id-match

    this._resolver = resolver(this._connection); // eslint-disable-line id-match
  }
  /**
   * Instantiate.
   */


  (0, _createClass2.default)(AbstractManager, [{
    key: "_instantiate",
    value: function _instantiate(data) {
      return new this._model(data, {
        connection: this._connection
      });
    }
  }]);
  return AbstractManager;
}();

exports.default = AbstractManager;
module.exports = exports.default;