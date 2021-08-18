
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

  describe('create', () => {
    it('should call api `/bank-accounts` endpoint with method `post` and return an instance of `BankAccount` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/bank-accounts')
        .reply(200, {
          data: {
            asset: 'foo',
            details: { foo: 'bar' },
            id: 'foobar',
            name: 'waldo',
            region: 'fred'
          }
        });

      const result = await slyk.bankAccount.create({
        asset: 'foo',
        details: { foo: 'bar' },
        name: 'waldo',
        region: 'fred'
      });

      expect(result).toEqual({
        asset: 'foo',
        details: { foo: 'bar' },
        id: 'foobar',
        name: 'waldo',
        region: 'fred'
      });
    });
  });

  describe('delete', () => {
    it('should call api `/bank-accounts/:id` endpoint with method `delete` and return `true`', async () => {
      const id = 'foobar';

      nock(host, { reqheaders: { apikey } })
        .delete(`/bank-accounts/${id}`)
        .reply(204);

      const result = await slyk.bankAccount.delete(id);

      expect(result).toEqual(true);
    });
  });

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
    it('should call api `/bank-accounts/:id` endpoint with method `patch` and return an instance of `BankAccount` model with the given `data`', async () => {
      const id = 'foobar';

      nock(host, { reqheaders: { apikey } })
        .patch(`/bank-accounts/${id}`)
        .reply(200, {
          data: {
            asset: 'foo',
            details: { foo: 'bar' },
            id: 'foobar',
            name: 'waldo',
            region: 'fred'
          }
        });

      const result = await slyk.bankAccount.patch(id, {
        details: { foo: 'bar' },
        name: 'waldo'
      });

      expect(result).toEqual({
        asset: 'foo',
        details: { foo: 'bar' },
        id: 'foobar',
        name: 'waldo',
        region: 'fred'
      });
    });
  });
});
