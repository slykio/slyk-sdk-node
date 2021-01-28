
/**
 * Module dependencies.
 */

import { NotFoundError } from 'easy-http-errors';
import nock from 'nock';
import sdk from '';

/**
 * Test `BankAccountManager`.
 */

describe('BankAccountManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('get', () => {
    it('should throw `NotFoundError` if the given `BankAccount` does not exist', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/bank-accounts/foobar')
        .reply(404, { code: 'bank_account_not_found' });

      try {
        await slyk.bankAccount.get('foobar');

        fail();
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundError);
        expect(error.message).toEqual('bank_account_not_found');
      }
    });

    it('should call api `/bank-accounts/foobar` endpoint with method `get` and return an instance of `BankAccount` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/bank-accounts/foobar')
        .reply(200, {
          data: {
            id: 'foobar',
            name: 'waldo',
            region: 'fred'
          }
        });

      const result = await slyk.bankAccount.get('foobar');

      expect(result).toEqual({
        _sdk: expect.any(Object),
        id: 'foobar',
        name: 'waldo',
        region: 'fred'
      });
    });
  });

  describe('list', () => {
    it('should call api `/bank-accounts` endpoint with method `get` and return an array of instances of `BankAccounts` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/bank-accounts')
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

      const { results, total } = await slyk.bankAccount.list({ filter: { region: 'fred' } });

      expect(total).toEqual(2);
      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          id: 'foobar',
          name: 'waldo',
          region: 'fred'
        },
        {
          _sdk: expect.any(Object),
          id: 'foobiz',
          name: 'qux',
          region: 'fred'
        }
      ]);
    });
  });
});
