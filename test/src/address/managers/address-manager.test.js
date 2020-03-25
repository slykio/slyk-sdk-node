
/**
 * Module dependencies.
 */

import { NotFoundError } from 'easy-http-errors';
import nock from 'nock';
import sdk from '';

/**
 * Test `AddressManager`.
 */

describe('AddressManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/addresses` endpoint with method `post` and return an instance of `Address` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/addresses', { address: 'foobar', assetCode: 'fred' })
        .reply(200, {
          data: {
            address: 'foobar',
            assetCode: 'fred',
            metadata: {}
          }
        });

      const result = await slyk.address.create({ address: 'foobar', assetCode: 'fred' });

      expect(result).toEqual({
        _sdk: expect.any(Object),
        address: 'foobar',
        assetCode: 'fred',
        metadata: {}
      });
    });
  });

  describe('get', () => {
    it('should throw `NotFoundError` if the given `address` does not exist', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/addresses/foobar')
        .reply(404, { code: 'address_not_found' });

      try {
        await slyk.address.get('foobar');

        fail();
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundError);
        expect(error.message).toEqual('address_not_found');
      }
    });

    it('should call api `/addresses/foobar` endpoint with method `get` and return an instance of `Address` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/addresses/foobar')
        .reply(200, {
          data: {
            address: 'foobar',
            assetCode: 'fred',
            metadata: {}
          }
        });

      const result = await slyk.address.get('foobar');

      expect(result).toEqual({
        _sdk: expect.any(Object),
        address: 'foobar',
        assetCode: 'fred',
        metadata: {}
      });
    });
  });

  describe('list', () => {
    it('should call api `/addresses` endpoint with method `get` and return an array of instances of `Addresses` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/addresses')
        .query({ filter: { walletId: 'waldo' } })
        .reply(200, {
          data: [
            {
              address: 'foobar',
              assetCode: 'fred',
              metadata: {},
              walletId: 'waldo'
            },
            {
              address: 'foobiz',
              assetCode: 'quux',
              metadata: {},
              walletId: 'waldo'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.address.list({ filter: { walletId: 'waldo' } });

      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          address: 'foobar',
          assetCode: 'fred',
          metadata: {},
          walletId: 'waldo'
        },
        {
          _sdk: expect.any(Object),
          address: 'foobiz',
          assetCode: 'quux',
          metadata: {},
          walletId: 'waldo'
        }
      ]);

      expect(total).toEqual(2);
    });
  });
});
