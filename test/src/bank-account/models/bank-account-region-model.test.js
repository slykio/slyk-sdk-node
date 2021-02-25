
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `BankAccountRegionModel`.
 */

describe('BankAccountRegionModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('getAssets', () => {
    it('should return the `bankAccountRegions` related `assets`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/bank-accounts-regions')
        .reply(200, {
          data: [
            { assets: ['qux', 'quux'], name: 'foobar' },
            { assets: ['waldo'], name: 'foobiz' }
          ]
        });

      const { results: [bankAccountRegions] } = await slyk.bankAccountRegion.list();

      nock(host, { reqheaders: { apikey } })
        .get('/assets')
        .query({ filter: { code: 'in:qux,quux' } })
        .reply(200, {
          data: [
            { code: 'qux', metadata: {} },
            { code: 'quux', metadata: {} }
          ],
          total: 2
        });

      const assets = await bankAccountRegions.getAssets();

      expect(assets.total).toEqual(2);
      expect(assets.results).toEqual([
        {
          code: 'qux',
          metadata: {}
        },
        {
          code: 'quux',
          metadata: {}
        }
      ]);
    });
  });
});
