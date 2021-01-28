
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `BankAccountRegionManager`.
 */

describe('BankAccountRegionManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('list', () => {
    it('should call api `/bank-accounts-regions` endpoint with method `get` and return an array of instances of `BankAccountRegions` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/bank-accounts-regions')
        .reply(200, {
          data: [
            {
              assets: ['waldo', 'fred'],
              jsonSchema: {},
              name: 'waldo',
              region: 'fred'
            },
            {
              assets: ['qux'],
              jsonSchema: { foo: 'bar' },
              name: 'foo',
              region: 'bar'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.bankAccountRegion.list();

      expect(total).toEqual(2);
      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          assets: ['waldo', 'fred'],
          jsonSchema: {},
          name: 'waldo',
          region: 'fred'
        },
        {
          _sdk: expect.any(Object),
          assets: ['qux'],
          jsonSchema: { foo: 'bar' },
          name: 'foo',
          region: 'bar'
        }
      ]);
    });
  });
});
