
/**
 * Export `AbstractManager`.
 */

export default class AbstractManager {

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
    return new this._model(data, { connection: this._connection });
  }

}
