
/**
 * Module dependencies.
 */

import { InternalServerError } from 'easy-http-errors';
import apiUrlResolver from 'core/resolvers/api-url-resolver';

/**
 * Test `apiUrlResolver`.
 */

describe('apiUrlResolver', () => {
  it('should throw `InternalServerError` if `api` `host` parameter is not given', async () => {
    try {
      await apiUrlResolver({ endpoint: '/foobar' });

      fail();
    } catch (e) {
      expect(e).toBeInstanceOf(InternalServerError);
      expect(e.message).toEqual('API host is not defined');
    }
  });

  it('should throw `InternalServerError` if at least one of the parameters is not a string', async () => {
    try {
      await apiUrlResolver({ data: { qux: 'waldo' }, endpoint: '/foobar/:qux/foobiz/:quux', host: 'fred' });

      fail();
    } catch (e) {
      expect(e).toBeInstanceOf(InternalServerError);
      expect(e.message).toEqual('Missing parameters');
      expect(e.missingParams).toEqual(['quux']);
    }
  });
});
