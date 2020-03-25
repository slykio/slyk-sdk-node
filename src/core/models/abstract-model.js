
/**
 * Module dependencies.
 */

import { omit } from 'lodash';
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

    this._sdk = sdkFactory(connection); // eslint-disable-line
  }

  /**
   * Get data.
   */

  getData() {
    return omit(this, '_sdk');
  }

}
