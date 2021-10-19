
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

  describe('delete', () => {
    it('should return `true` and delete the `bankAccount`', async () => {
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
        .delete('/bank-accounts/foobar')
        .reply(204);

      const result = await bankAccount.delete();

      expect(result).toEqual(true);
    });
  });

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

  describe('patch', () => {
    it('should return `true` and patch the `bankAccount`', async () => {
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
        .patch('/bank-accounts/foobar')
        .reply(200, {
          data: {
            asset: 'qux',
            details: { waldo: 'fred' },
            id: 'foobar',
            name: 'quux'
          }
        });

      const result = await bankAccount.patch('foobar', {
        details: { waldo: 'fred' },
        name: 'quux'
      });

      expect(result).toEqual({
        asset: 'qux',
        details: { waldo: 'fred' },
        id: 'foobar',
        name: 'quux'
      });
    });
  });
});
