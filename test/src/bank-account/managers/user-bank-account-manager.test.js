
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `UserBankAccountManager`.
 */

describe('UserBankAccountManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/user-bank-accounts/foobar` endpoint with method `post` and return an instance of `UserBankAccount` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/user-bank-accounts', { name: 'thud', region: 'fred' })
        .reply(200, {
          data: {
            id: 'foobar',
            name: 'thud',
            region: 'fred'
          }
        });

      const result = await slyk.userBankAccount.create({ name: 'thud', region: 'fred' });

      expect(result).toEqual({
        id: 'foobar',
        name: 'thud',
        region: 'fred'
      });
    });
  });

  describe('delete', () => {
    it('should call api `/user-bank-accounts/foobar` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/user-bank-accounts/foobar')
        .reply(200, {
          data: {
            id: 'foobar',
            name: 'waldo',
            region: 'fred'
          }
        });

      const result = await slyk.userBankAccount.delete('foobar');

      expect(result).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/user-bank-accounts/foobar` endpoint with method `get` and return an instance of `UserBankAccount` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/user-bank-accounts/foobar')
        .reply(200, {
          data: {
            id: 'foobar',
            name: 'waldo',
            region: 'fred'
          }
        });

      const result = await slyk.userBankAccount.get('foobar');

      expect(result).toEqual({
        id: 'foobar',
        name: 'waldo',
        region: 'fred'
      });
    });
  });

  describe('list', () => {
    it('should call api `/user-bank-accounts` endpoint with method `get` and return an array of instances of `UserBankAccounts` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/user-bank-accounts')
        .query({ filter: { region: 'fred' } })
        .reply(200, {
          data: [
            {
              id: 'foobar',
              name: 'waldo',
              region: 'fred'
            },
            {
              id: 'foobiz',
              name: 'qux',
              region: 'fred'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.userBankAccount.list({ filter: { region: 'fred' } });

      expect(total).toEqual(2);
      expect(results).toEqual([
        {
          id: 'foobar',
          name: 'waldo',
          region: 'fred'
        },
        {
          id: 'foobiz',
          name: 'qux',
          region: 'fred'
        }
      ]);
    });
  });

  describe('patch', () => {
    it('should call api `/user-bank-accounts/foobar` endpoint with method `patch` and return an instance of `UserBankAccount` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/user-bank-accounts/foobar', { name: 'thud' })
        .reply(200, {
          data: {
            id: 'foobar',
            name: 'thud',
            region: 'fred'
          }
        });

      const result = await slyk.userBankAccount.patch('foobar', { name: 'thud' });

      expect(result).toEqual({
        id: 'foobar',
        name: 'thud',
        region: 'fred'
      });
    });
  });
});
