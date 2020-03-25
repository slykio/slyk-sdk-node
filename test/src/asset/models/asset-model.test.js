
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `AssetModel`.
 */

describe('AssetModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('getConnection', () => {
    it('should return `undefined` if the `asset` has no related `connection`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/assets/foobar')
        .reply(200, { data: { code: 'foobar', connectionId: null } });

      const asset = await slyk.asset.get('foobar');
      const connection = await asset.getConnection();

      expect(connection).toBeUndefined();
    });

    it('should return the `asset` related `connection`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/assets/foobar')
        .reply(200, { data: { code: 'foobar', connectionId: 'foobiz' } });

      const asset = await slyk.asset.get('foobar');

      nock(host, { reqheaders: { apikey } })
        .get('/connections/foobiz')
        .reply(200, { data: { id: 'foobiz' } });

      const connection = await asset.getConnection();

      expect(connection).toEqual({ _sdk: expect.any(Object), id: 'foobiz' });
    });
  });

  describe('patch', () => {
    it('should return the patched `asset`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/assets/foobar')
        .reply(200, { data: { code: 'foobar', connectionId: 'foobiz' } });

      const asset = await slyk.asset.get('foobar');

      nock(host, { reqheaders: { apikey } })
        .patch('/assets/foobar', { name: 'foobiz' })
        .reply(200, { data: { code: 'foobar', name: 'foobiz' } });

      const patchedAsset = await asset.patch({ name: 'foobiz' });

      expect(patchedAsset).toEqual({
        _sdk: expect.any(Object),
        code: 'foobar',
        name: 'foobiz'
      });
    });
  });
});
