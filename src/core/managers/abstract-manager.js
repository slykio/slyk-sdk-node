
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
    this.connection = connection;
    this.model = model;
    this.resolver = resolver(this.connection);
  }

  /**
   * Instantiate.
   */

  instantiate(data) {
    return new this.model(data, { connection: this.connection }); // eslint-disable-line new-cap
  }

}
