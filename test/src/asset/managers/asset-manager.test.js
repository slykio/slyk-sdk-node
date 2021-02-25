
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `AssetManager`.
 */

describe('AssetManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/assets` endpoint with method `post` and return an instance of `Asset` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/assets', { code: 'bar', name: 'foo' })
        .reply(200, {
          data: {
            code: 'bar',
            metadata: {},
            name: 'foo'
          }
        });

      const result = await slyk.asset.create({ code: 'bar', name: 'foo' });

      expect(result).toEqual({
        code: 'bar',
        metadata: {},
        name: 'foo'
      });
    });
  });

  describe('get', () => {
    it('should call api `/assets/waldo` endpoint with method `get` and return an instance of `Asset` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/assets/waldo')
        .reply(200, {
          data: {
            code: 'waldo',
            metadata: {},
            name: 'foobar'
          }
        });

      const result = await slyk.asset.get('waldo');

      expect(result).toEqual({
        code: 'waldo',
        metadata: {},
        name: 'foobar'
      });
    });
  });

  describe('list', () => {
    it('should call api `/assets` endpoint with method `get` and return an array of instances of `Assets` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/assets')
        .query({ filter: { name: 'foo' } })
        .reply(200, {
          data: [
            {
              code: 'waldo',
              metadata: {},
              name: 'foobar'
            },
            {
              code: 'fred',
              metadata: {},
              name: 'foobiz'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.asset.list({ filter: { name: 'foo' } });

      expect(results).toEqual([
        {
          code: 'waldo',
          metadata: {},
          name: 'foobar'
        },
        {
          code: 'fred',
          metadata: {},
          name: 'foobiz'
        }
      ]);

      expect(total).toEqual(2);
    });
  });

  describe('patch', () => {
    it('should call api `/assets/waldo` endpoint with method `patch` and return an instance of `Asset` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/assets/waldo', { name: 'foobar' })
        .reply(200, {
          data: {
            code: 'waldo',
            metadata: {},
            name: 'foobar'
          }
        });

      const result = await slyk.asset.patch('waldo', { name: 'foobar' });

      expect(result).toEqual({
        code: 'waldo',
        metadata: {},
        name: 'foobar'
      });
    });
  });
});
