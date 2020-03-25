
/**
 * Module dependencies.
 */

import { get } from 'lodash';
import easyHttpErrors from 'easy-http-errors';

/**
 * HTTP errors
 */

const httpErrors = {
  400: 'BadRequestError',
  401: 'UnauthorizedError',
  402: 'PaymentRequiredError',
  403: 'ForbiddenError',
  404: 'NotFoundError',
  405: 'MethodNotAllowedError',
  406: 'NotAcceptableError',
  407: 'ProxyAuthenticationRequiredError',
  408: 'RequestTimeoutError',
  409: 'ConflictError',
  410: 'GoneError',
  411: 'LengthRequiredError',
  412: 'PreconditionFailedError',
  413: 'PayloadTooLargeError',
  414: 'URITooLongError',
  415: 'UnsupportedMediaTypeError',
  416: 'RangeNotSatisfiableError',
  417: 'ExpectationFailedError',
  418: 'ImATeapotError',
  421: 'MisdirectedRequestError',
  422: 'UnprocessableEntityError',
  423: 'LockedError',
  424: 'FailedDependencyError',
  425: 'UnorderedCollectionError',
  426: 'UpgradeRequiredError',
  428: 'PreconditionRequiredError',
  429: 'TooManyRequestsError',
  431: 'RequestHeaderFieldsTooLargeError',
  451: 'UnavailableForLegalReasonsError',
  500: 'InternalServerError',
  501: 'NotImplementedError',
  502: 'BadGatewayError',
  503: 'ServiceUnavailableError',
  504: 'GatewayTimeoutError',
  505: 'HTTPVersionNotSupportedError',
  506: 'VariantAlsoNegotiatesError',
  507: 'InsufficientStorageError',
  508: 'LoopDetectedError',
  509: 'BandwidthLimitExceededError',
  510: 'NotExtendedError',
  511: 'NetworkAuthenticationRequiredError'
};

/**
 * Export `httpErrorResolver`.
 */

export default code => {
  const error = get(httpErrors, code, 'InternalServerError');

  return get(easyHttpErrors, error);
};
