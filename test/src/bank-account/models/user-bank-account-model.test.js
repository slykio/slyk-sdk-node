
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `UserBankAccountModel`.
 */

describe('UserBankAccountModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('delete', () => {
    it('should return `true` after deleting the `userBankAccount` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/user-bank-accounts/foobar')
        .reply(200, {
          data: {
            asset: 'qux',
            details: {},
            id: 'foobar',
            name: 'fred'
          }
        });

      const userBankAccount = await slyk.userBankAccount.get('foobar');

      nock(host, { reqheaders: { apikey } })
        .delete('/user-bank-accounts/foobar')
        .reply(204);

      const result = await userBankAccount.delete();

      expect(result).toEqual(true);
    });
  });

  describe('getAsset', () => {
    it('should return the `userBankAccount` related `asset`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/user-bank-accounts/foobar')
        .reply(200, {
          data: {
            asset: 'qux',
            details: {},
            id: 'foobar',
            name: 'fred'
          }
        });

      const userBankAccount = await slyk.userBankAccount.get('foobar');

      nock(host, { reqheaders: { apikey } })
        .get('/assets/qux')
        .reply(200, { data: { code: 'qux', metadata: {} } });

      const asset = await userBankAccount.getAsset();

      expect(asset).toEqual({ code: 'qux', metadata: {} });
    });
  });

  describe('patch', () => {
    it('should return the patched `userBankAccount`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/user-bank-accounts/foobar')
        .reply(200, {
          data: {
            asset: 'qux',
            details: {},
            id: 'foobar',
            name: 'fred'
          }
        });

      const userBankAccount = await slyk.userBankAccount.get('foobar');

      nock(host, { reqheaders: { apikey } })
        .patch('/user-bank-accounts/foobar', { name: 'waldo' })
        .reply(200, {
          data: {
            asset: 'qux',
            details: {},
            id: 'foobar',
            name: 'waldo'
          }
        });

      const result = await userBankAccount.patch({ name: 'waldo' });

      expect(result).toEqual({
        asset: 'qux',
        details: {},
        id: 'foobar',
        name: 'waldo'
      });
    });
  });
});
