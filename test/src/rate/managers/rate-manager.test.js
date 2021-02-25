
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `RateManager`.
 */

describe('RateManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/rates` endpoint with method `post` and return an instance of `Rate` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/rates', {
          baseAssetCode: 'bar',
          quoteAssetCode: 'biz',
          rate: '0.5'
        })
        .reply(200, {
          data: {
            baseAssetCode: 'bar',
            metadata: {},
            quoteAssetCode: 'biz',
            rate: '0.5'
          }
        });

      const result = await slyk.rate.create({
        baseAssetCode: 'bar',
        quoteAssetCode: 'biz',
        rate: '0.5'
      });

      expect(result).toEqual({
        baseAssetCode: 'bar',
        metadata: {},
        quoteAssetCode: 'biz',
        rate: '0.5'
      });
    });
  });

  describe('delete', () => {
    it('should call api `/rates/bar/biz` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/rates/bar/biz')
        .reply(204);

      const result = await slyk.rate.delete('bar', 'biz');

      expect(result).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/rates/bar/biz` endpoint with method `get` and return an instance of `Rate` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/rates/bar/biz')
        .reply(200, {
          data: {
            baseAssetCode: 'bar',
            metadata: {},
            quoteAssetCode: 'biz',
            rate: '0.5'
          }
        });

      const result = await slyk.rate.get('bar', 'biz');

      expect(result).toEqual({
        baseAssetCode: 'bar',
        metadata: {},
        quoteAssetCode: 'biz',
        rate: '0.5'
      });
    });
  });

  describe('list', () => {
    it('should call api `/rates` endpoint with method `get` and return an array of instances of `Rate` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/rates')
        .query({ filter: { assetCode: 'bar' } })
        .reply(200, {
          data: [
            {
              baseAssetCode: 'bar',
              metadata: {},
              quoteAssetCode: 'biz',
              rate: '0.5'
            },
            {
              baseAssetCode: 'biz',
              metadata: {},
              quoteAssetCode: 'bar',
              rate: '2.1'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.rate.list({ filter: { assetCode: 'bar' } });

      expect(results).toEqual([
        {
          baseAssetCode: 'bar',
          metadata: {},
          quoteAssetCode: 'biz',
          rate: '0.5'
        },
        {
          baseAssetCode: 'biz',
          metadata: {},
          quoteAssetCode: 'bar',
          rate: '2.1'
        }
      ]);

      expect(total).toEqual(2);
    });
  });

  describe('patch', () => {
    it('should call api `/rates/bar/biz` endpoint with method `patch` and return an instance of `Rate` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/rates/bar/biz', { rate: '0.4' })
        .reply(200, {
          data: {
            baseAssetCode: 'bar',
            metadata: {},
            quoteAssetCode: 'biz',
            rate: '0.4'
          }
        });

      const result = await slyk.rate.patch('bar', 'biz', { rate: '0.4' });

      expect(result).toEqual({
        baseAssetCode: 'bar',
        metadata: {},
        quoteAssetCode: 'biz',
        rate: '0.4'
      });
    });
  });
});
