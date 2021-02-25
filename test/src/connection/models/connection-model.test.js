
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `ConnectionModel`.
 */

describe('ConnectionModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('patch', () => {
    it('should return the patched `connection`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/connections/fred')
        .reply(200, { data: { id: 'fred' } });

      const connection = await slyk.connection.get('fred');

      nock(host, { reqheaders: { apikey } })
        .patch('/connections/fred', { uri: 'waldo' })
        .reply(200, { data: { id: 'fred', uri: 'waldo' } });

      const patchedConnection = await connection.patch({ uri: 'waldo' });

      expect(patchedConnection).toEqual({ id: 'fred', uri: 'waldo' });
    });
  });
});
