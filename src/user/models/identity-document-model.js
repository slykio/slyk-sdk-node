
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `IdentityDocumentModel`.
 */

export default class IdentityDocumentModel extends AbstractModel {

  /**
   * Delete.
   */

  delete() {
    return IdentityDocumentModel.sdk.identityDocument.delete(this.id, this.identityId);
  }

}
