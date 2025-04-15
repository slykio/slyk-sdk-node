
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `WalletModel`.
 */

describe('WalletModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('getActivity', () => {
    it('should return the activity related to the `wallet` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar' } });

      const wallet = await slyk.wallet.get('bar');

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

      const { results, total } = await wallet.getActivity({ page: { number: 3, size: 2 } });

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

  describe('getBalance', () => {
    it('should return the balance related to the `wallet` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar' } });

      const wallet = await slyk.wallet.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/balance')
        .query({ filter: { assetCode: 'in:qux,quu' } })
        .reply(200, {
          data: [
            { amount: '1', assetCode: 'qux' },
            { amount: '2', assetCode: 'quux' }
          ]
        });

      const balance = await wallet.getBalance({ filter: { assetCode: 'in:qux,quu' } });

      expect(balance).toEqual([
        { amount: '1', assetCode: 'qux' },
        { amount: '2', assetCode: 'quux' }
      ]);
    });
  });

  describe('getMovements', () => {
    it('should return the movements related to the `wallet` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar' } });

      const wallet = await slyk.wallet.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/movements')
        .query({ sort: 'amount' })
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

      const { results, total } = await wallet.getMovements({ sort: [{ name: 'amount' }] });

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

  describe('getStoredBalance', () => {
    it('should return the balance related to the `wallet` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar' } });

      const wallet = await slyk.wallet.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/stored-balance')
        .query({ filter: { assetCode: 'in:qux,quu' } })
        .reply(200, {
          data: [
            { amount: '1', assetCode: 'qux' },
            { amount: '2', assetCode: 'quux' }
          ],
          total: 2
        });

      const balance = await wallet.getStoredBalance({ filter: { assetCode: 'in:qux,quu' } });

      expect(balance).toEqual({
        data: [
          { amount: '1', assetCode: 'qux' },
          { amount: '2', assetCode: 'quux' }
        ],
        total: 2
      });
    });
  });

  describe('getTransactions', () => {
    it('should return the tranasctions related to the `wallet` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar' } });

      const wallet = await slyk.wallet.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar/transactions')
        .reply(200, {
          data: [{
            amount: '3.5',
            id: 'bar',
            metadata: {}
          },
          {
            amount: '3',
            id: 'biz',
            metadata: {}
          }],
          total: 2
        });

      const { results, total } = await wallet.getTransactions();

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

      expect(total).toEqual(2);
    });
  });

  describe('getOwner', () => {
    it('should return `undefined` if the `wallet` has no related `ownerId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar' } });

      const wallet = await slyk.wallet.get('bar');
      const owner = await wallet.getOwner();

      expect(owner).toBeUndefined();
    });

    it('should return the `user` related the `wallet` `ownerId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar', ownerId: 'foo' } });

      const wallet = await slyk.wallet.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/users/foo')
        .reply(200, { data: { email: 'foo@bar.com', id: 'foo' } });

      const owner = await wallet.getOwner();

      expect(owner).toEqual({ email: 'foo@bar.com', id: 'foo' });
    });
  });

  describe('patch', () => {
    it('should return the patched `wallet`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/wallets/bar')
        .reply(200, { data: { id: 'bar' } });

      const wallet = await slyk.wallet.get('bar');

      nock(host, { reqheaders: { apikey } })
        .patch('/wallets/bar', { ownerId: 'foo' })
        .reply(200, { data: { id: 'bar', ownerId: 'foo' } });

      const patchedUser = await wallet.patch({ ownerId: 'foo' });

      expect(patchedUser).toEqual({ id: 'bar', ownerId: 'foo' });
    });
  });
});
