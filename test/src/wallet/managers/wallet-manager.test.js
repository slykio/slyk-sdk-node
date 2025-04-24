
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `WalletManager`.
 */

describe('WalletManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('activity', () => {
    it('should call api `/wallets/bar/activity` endpoint with method `get` and return an array of instances of `Transaction` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/activity')
        .query({ page: { number: 3, size: 2 } })
        .reply(200, {
          data: [
            {
              amount: '5',
              id: 'bar',
              metadata: {}
            },
            {
              amount: '4',
              id: 'biz',
              metadata: {}
            }
          ],
          total: 6
        });

      const { results, total } = await slyk.wallet.activity('bar', { page: { number: 3, size: 2 } });

      expect(results).toEqual([
        {
          amount: '5',
          id: 'bar',
          metadata: {}
        },
        {
          amount: '4',
          id: 'biz',
          metadata: {}
        }
      ]);

      expect(total).toEqual(6);
    });
  });

  describe('balance', () => {
    it('should call api `/wallets/bar/balance` endpoint with method `get` and return the response `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/balance')
        .reply(200, {
          data: [
            { amount: '1', assetCode: 'qux' },
            { amount: '2', assetCode: 'quux' }
          ]
        });

      const balance = await slyk.wallet.balance('bar');

      expect(balance).toEqual([
        { amount: '1', assetCode: 'qux' },
        { amount: '2', assetCode: 'quux' }
      ]);
    });
  });

  describe('create', () => {
    it('should call api `/wallets` endpoint with method `post` and return an instance of `Wallet` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/wallets')
        .reply(200, { data: { id: 'bar', metadata: {} } });

      const result = await slyk.wallet.create();

      expect(result).toEqual({ id: 'bar', metadata: {} });
    });
  });

  describe('get', () => {
    it('should call api `/wallets/bar` endpoint with method `get` and return an instance of `Wallet` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar', metadata: {} } });

      const result = await slyk.wallet.get('bar');

      expect(result).toEqual({ id: 'bar', metadata: {} });
    });
  });

  describe('globalActivity', () => {
    it('should call api `/wallets/activity` endpoint with method `get` and return an array of instances of `Transaction` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/activity')
        .query({ filter: { assetCode: 'qux' } })
        .reply(200, {
          data: [
            {
              amount: '5',
              assetCode: 'qux',
              id: 'bar',
              metadata: {}
            },
            {
              amount: '4',
              assetCode: 'qux',
              id: 'biz',
              metadata: {}
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.wallet.globalActivity({ filter: { assetCode: 'qux' } });

      expect(results).toEqual([{
        amount: '5',
        assetCode: 'qux',
        id: 'bar',
        metadata: {}
      },
      {
        amount: '4',
        assetCode: 'qux',
        id: 'biz',
        metadata: {}
      }]);

      expect(total).toEqual(2);
    });
  });

  describe('globalBalance', () => {
    it('should call api `/wallets/balance` endpoint with method `get` and return the response `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/balance')
        .reply(200, {
          data: [
            { amount: '1', assetCode: 'qux' },
            { amount: '2', assetCode: 'quux' }
          ]
        });

      const balance = await slyk.wallet.globalBalance();

      expect(balance).toEqual([
        { amount: '1', assetCode: 'qux' },
        { amount: '2', assetCode: 'quux' }
      ]);
    });
  });

  describe('list', () => {
    it('should call api `/wallets` endpoint with method `get` and return an array of instances of `Wallet` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets')
        .query({ page: { number: 3, size: 2 } })
        .reply(200, {
          data: [
            { id: 'bar', metadata: {} },
            { id: 'biz', metadata: {} }
          ],
          total: 6
        });

      const { results, total } = await slyk.wallet.list({ page: { number: 3, size: 2 } });

      expect(results).toEqual([{
        id: 'bar',
        metadata: {}
      },
      {
        id: 'biz',
        metadata: {}
      }]);

      expect(total).toEqual(6);
    });
  });

  describe('listViaPost', () => {
    it('should call api `/wallets/list` endpoint with method `post` and return an array of instances of `Wallet` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/wallets/list', { page: { number: 3, size: 2 } })
        .reply(200, {
          data: [
            { id: 'bar', metadata: {} },
            { id: 'biz', metadata: {} }
          ],
          total: 6
        });

      const { results, total } = await slyk.wallet.listViaPost({ page: { number: 3, size: 2 } });

      expect(results).toEqual([{
        id: 'bar',
        metadata: {}
      },
      {
        id: 'biz',
        metadata: {}
      }]);

      expect(total).toEqual(6);
    });
  });

  describe('movements', () => {
    it('should call api `/wallets/bar/movements` endpoint with method `get` and return an array of instances of `Movement` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/movements')
        .query({
          filter: { amount: 'lt:3' },
          sort: 'amount'
        })
        .reply(200, {
          data: [
            {
              amount: '1',
              id: 'bar',
              metadata: {}
            },
            {
              amount: '2',
              id: 'biz',
              metadata: {}
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.wallet.movements('bar', {
        filter: { amount: 'lt:3' },
        sort: [{ name: 'amount' }]
      });

      expect(results).toEqual([{
        amount: '1',
        id: 'bar',
        metadata: {}
      },
      {
        amount: '2',
        id: 'biz',
        metadata: {}
      }]);

      expect(total).toEqual(2);
    });
  });

  describe('patch', () => {
    it('should call api `/wallets/bar` endpoint with method `patch` and return an instance of `Wallet` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/wallets/bar', { name: 'foobar' })
        .reply(200, {
          data: {
            id: 'bar',
            metadata: {},
            name: 'foobar'
          }
        });

      const result = await slyk.wallet.patch('bar', { name: 'foobar' });

      expect(result).toEqual({
        id: 'bar',
        metadata: {},
        name: 'foobar'
      });
    });
  });

  describe('storedBalance', () => {
    it('should call api `/wallets/bar/stored-balance` endpoint with method `get` and return the response `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/stored-balance?sort=balance')
        .reply(200, {
          data: [
            { assetCode: 'qux', balance: '1' },
            { assetCode: 'quux', balance: '2' }
          ],
          total: 2
        });

      const balance = await slyk.wallet.storedBalance('bar', { sort: 'balance' });

      expect(balance).toEqual({
        data: [
          { assetCode: 'qux', balance: '1' },
          { assetCode: 'quux', balance: '2' }
        ],
        total: 2
      });
    });
  });

  describe('storedBalanceViaPost', () => {
    it('should call api `/wallets/bar/stored-balance/list` endpoint with method `post` and return the response `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/wallets/bar/stored-balance/list', { sort: 'balance' })
        .reply(200, {
          data: [
            { assetCode: 'qux', balance: '1' },
            { assetCode: 'quux', balance: '2' }
          ],
          total: 2
        });

      const balance = await slyk.wallet.storedBalanceViaPost('bar', { sort: 'balance' });

      expect(balance).toEqual({
        data: [
          { assetCode: 'qux', balance: '1' },
          { assetCode: 'quux', balance: '2' }
        ],
        total: 2
      });
    });
  });

  describe('storedGlobalBalance', () => {
    it('should call api `/wallets/stored-balance` endpoint with method `get` and return the response `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/stored-balance?sort=balance')
        .reply(200, {
          data: [
            { assetCode: 'qux', balance: '1', walletId: 'foo' },
            { assetCode: 'quux', balance: '2', walletId: 'bar' }
          ],
          total: 2
        });

      const balance = await slyk.wallet.storedGlobalBalance({ sort: 'balance' });

      expect(balance).toEqual({
        data: [
          { assetCode: 'qux', balance: '1', walletId: 'foo' },
          { assetCode: 'quux', balance: '2', walletId: 'bar' }
        ],
        total: 2
      });
    });
  });

  describe('storedGlobalBalanceViaPost', () => {
    it('should call api `/wallets/stored-balance/list` endpoint with method `post` and return the response `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/wallets/stored-balance/list', { sort: 'balance' })
        .reply(200, {
          data: [
            { assetCode: 'qux', balance: '1', walletId: 'foo' },
            { assetCode: 'quux', balance: '2', walletId: 'bar' }
          ],
          total: 2
        });

      const balance = await slyk.wallet.storedGlobalBalanceViaPost({ sort: 'balance' });

      expect(balance).toEqual({
        data: [
          { assetCode: 'qux', balance: '1', walletId: 'foo' },
          { assetCode: 'quux', balance: '2', walletId: 'bar' }
        ],
        total: 2
      });
    });
  });

  describe('transactions', () => {
    it('should call api `/wallets/bar/transactions` endpoint with method `get` and return an array of instances of `Transction` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/transactions')
        .query({
          filter: { amount: 'gte:3' },
          page: { number: 2, size: 4 },
          sort: '-amount'
        })
        .reply(200, {
          data: [
            {
              amount: '3.5',
              id: 'bar',
              metadata: {}
            },
            {
              amount: '3',
              id: 'biz',
              metadata: {}
            }
          ],
          total: 6
        });

      const { results, total } = await slyk.wallet.transactions('bar', {
        filter: { amount: 'gte:3' },
        page: { number: 2, size: 4 },
        sort: [{ direction: 'desc', name: 'amount' }]
      });

      expect(results).toEqual([{
        amount: '3.5',
        id: 'bar',
        metadata: {}
      },
      {
        amount: '3',
        id: 'biz',
        metadata: {}
      }]);

      expect(total).toEqual(6);
    });
  });
});
