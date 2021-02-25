
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `RateModel`.
 */

describe('AssetModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('getBaseAsset', () => {
    it('should return the `asset` related `rate` `baseAssetCode`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/rates/bar/biz')
        .reply(200, {
          data: {
            baseAssetCode: 'bar',
            quoteAssetCode: 'biz',
            rate: '0.5'
          }
        });

      const rate = await slyk.rate.get('bar', 'biz');

      nock(host, { reqheaders: { apikey } })
        .get('/assets/bar')
        .reply(200, { data: { code: 'bar', name: 'foobar' } });

      const asset = await rate.getBaseAsset();

      expect(asset).toEqual({ code: 'bar', name: 'foobar' });
    });
  });

  describe('getQuoteAsset', () => {
    it('should return the `asset` related `rate` `quoteAssetCode`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/rates/bar/biz')
        .reply(200, {
          data: {
            baseAssetCode: 'bar',
            quoteAssetCode: 'biz',
            rate: '0.5'
          }
        });

      const rate = await slyk.rate.get('bar', 'biz');

      nock(host, { reqheaders: { apikey } })
        .get('/assets/biz')
        .reply(200, { data: { code: 'biz', name: 'foobiz' } });

      const asset = await rate.getQuoteAsset();

      expect(asset).toEqual({ code: 'biz', name: 'foobiz' });
    });
  });

  describe('patch', () => {
    it('should return the patched `rate`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/rates/bar/biz')
        .reply(200, {
          data: {
            baseAssetCode: 'bar',
            quoteAssetCode: 'biz',
            rate: '0.5'
          }
        });

      const rate = await slyk.rate.get('bar', 'biz');

      nock(host, { reqheaders: { apikey } })
        .patch('/rates/bar/biz', { rate: '0.4' })
        .reply(200, {
          data: {
            baseAssetCode: 'bar',
            quoteAssetCode: 'biz',
            rate: '0.4'
          }
        });

      const patchedRate = await rate.patch({ rate: '0.4' });

      expect(patchedRate).toEqual({
        baseAssetCode: 'bar',
        quoteAssetCode: 'biz',
        rate: '0.4'
      });
    });
  });
});
