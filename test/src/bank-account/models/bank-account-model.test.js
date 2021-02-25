
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `BankAccountModel`.
 */

describe('BankAccountModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('getAsset', () => {
    it('should return the `bankAccount` related `asset`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/bank-accounts/foobar')
        .reply(200, {
          data: {
            asset: 'qux',
            details: {},
            id: 'foobar',
            name: 'fred'
          }
        });

      const bankAccount = await slyk.bankAccount.get('foobar');

      nock(host, { reqheaders: { apikey } })
        .get('/assets/qux')
        .reply(200, { data: { code: 'qux', metadata: {} } });

      const asset = await bankAccount.getAsset();

      expect(asset).toEqual({ code: 'qux', metadata: {} });
    });
  });
});
