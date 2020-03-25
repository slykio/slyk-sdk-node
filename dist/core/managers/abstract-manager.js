"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Export `AbstractManager`.
 */
class AbstractManager {
  /**
   * Constructor.
   */
  constructor({
    connection,
    model,
    resolver
  }) {
    this._connection = connection; // eslint-disable-line id-match

    this._model = model; // eslint-disable-line id-match

    this._resolver = resolver(this._connection); // eslint-disable-line id-match
  }
  /**
   * Instantiate.
   */


  _instantiate(data) {
    return new this._model(data, {
      connection: this._connection
    });
  }

}

exports.default = AbstractManager;