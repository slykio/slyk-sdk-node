
/**
 * Module dependencies.
 */

import sdkFactory from 'core/util/sdk-factory';

/**
 * Export `AbstractModel`.
 */

export default class AbstractModel {

  /**
   * Constructor.
   */

  constructor(data, { connection }) {
    Object.assign(this, data);

    AbstractModel.sdk = sdkFactory(connection); // eslint-disable-line
  }

}
