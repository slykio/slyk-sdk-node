
/**
 * Module dependencies.
 */

import AbstractModel from 'core/models/abstract-model';

/**
 * Export `IdentityModel`.
 */

export default class IdentityModel extends AbstractModel {

  /**
   * Approve.
   */

  approve() {
    return IdentityModel.sdk.identity.approve(this.id);
  }

  /**
   * Cancel.
   */

  cancel(data) {
    return IdentityModel.sdk.identity.cancel(this.id, data);
  }

  /**
   * Delete.
   */

  delete() {
    return IdentityModel.sdk.identity.delete(this.id);
  }

  /**
   * Get document.
   */

  getDocument(documentId, options) {
    return IdentityModel.sdk.identityDocument.get(documentId, this.id, options);
  }

  /**
   * List documents.
   */

  listDocuments(options) {
    return IdentityModel.sdk.identityDocument.list(this.id, options);
  }

  /**
   * Reject.
   */

  reject(data) {
    return IdentityModel.sdk.identity.reject(this.id, data);
  }

  /**
   * Submit.
   */

  submit() {
    return IdentityModel.sdk.identity.submit(this.id);
  }

}
