
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TransactionModel`.
 */

describe('TransactionModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('approve', () => {
    it('should return the approved `transaction` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar', status: 'pending' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/transactions/bar/approve')
        .reply(200, {
          data: {
            id: 'bar',
            metadata: {},
            status: 'processing'
          }
        });

      const approvedTransaction = await transaction.approve();

      expect(approvedTransaction).toEqual({
        id: 'bar',
        metadata: {},
        status: 'processing'
      });
    });
  });

  describe('confirm', () => {
    it('should return the confirmed `transaction` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar', status: 'pending' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/transactions/bar/confirm')
        .reply(200, {
          data: {
            id: 'bar',
            metadata: {},
            status: 'completed'
          }
        });

      const confirmedTransaction = await transaction.confirm();

      expect(confirmedTransaction).toEqual({
        id: 'bar',
        metadata: {},
        status: 'completed'
      });
    });
  });

  describe('fail', () => {
    it('should return the failed `transaction` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar', status: 'pending' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/transactions/bar/fail', { reason: 'waldo' })
        .reply(200, {
          data: {
            id: 'bar',
            metadata: { failReason: 'waldo' },
            status: 'failed'
          }
        });

      const failedTransaction = await transaction.fail({ reason: 'waldo' });

      expect(failedTransaction).toEqual({
        id: 'bar',
        metadata: { failReason: 'waldo' },
        status: 'failed'
      });
    });
  });

  describe('getAsset', () => {
    it('should return the `asset` related the `transaction` `assetCode`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, {
          data: {
            assetCode: 'foo',
            id: 'bar',
            metadata: {}
          }
        });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/assets/foo')
        .reply(200, { data: { code: 'foo', name: 'foobar' } });

      const wallet = await transaction.getAsset();

      expect(wallet).toEqual({ code: 'foo', name: 'foobar' });
    });
  });

  describe('getDestinationAddress', () => {
    it('should return `undefined` if the `transaction` has no related `destinationAddress`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar' } });

      const transaction = await slyk.transaction.get('bar');
      const destinationAddress = await transaction.getDestinationAddress();

      expect(destinationAddress).toBeUndefined();
    });

    it('should return the `address` related the `transaction` `destinationAddress`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { destinationAddress: 'foo', id: 'bar' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/addresses/foo')
        .reply(200, { data: { address: 'foo', assetCode: 'corge' } });

      const address = await transaction.getDestinationAddress();

      expect(address).toEqual({ address: 'foo', assetCode: 'corge' });
    });
  });

  describe('getDestinationWallet', () => {
    it('should return `undefined` if the `transaction` has no related `destinationWalletId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar' } });

      const transaction = await slyk.transaction.get('bar');
      const destinationWallet = await transaction.getDestinationWallet();

      expect(destinationWallet).toBeUndefined();
    });

    it('should return the `wallet` related the `transaction` `destinationWalletId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { destinationWalletId: 'foo', id: 'bar' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/foo')
        .reply(200, { data: { id: 'foo', metadata: {} } });

      const wallet = await transaction.getDestinationWallet();

      expect(wallet).toEqual({ id: 'foo', metadata: {} });
    });
  });

  describe('getOriginAddress', () => {
    it('should return `undefined` if the `transaction` has no related `originAddress`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar' } });

      const transaction = await slyk.transaction.get('bar');
      const originAddress = await transaction.getOriginAddress();

      expect(originAddress).toBeUndefined();
    });

    it('should return the `address` related the `transaction` `originAddress`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar', originAddress: 'foo' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/addresses/foo')
        .reply(200, { data: { address: 'foo', assetCode: 'corge' } });

      const address = await transaction.getOriginAddress();

      expect(address).toEqual({ address: 'foo', assetCode: 'corge' });
    });
  });

  describe('getOriginWallet', () => {
    it('should return `undefined` if the `transaction` has no related `originWalletId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar' } });

      const transaction = await slyk.transaction.get('bar');
      const originWallet = await transaction.getOriginWallet();

      expect(originWallet).toBeUndefined();
    });

    it('should return the `wallet` related the `transaction` `originWalletId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar', originWalletId: 'foo' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/foo')
        .reply(200, { data: { id: 'foo', metadata: {} } });

      const wallet = await transaction.getOriginWallet();

      expect(wallet).toEqual({ id: 'foo', metadata: {} });
    });
  });

  describe('getMovements', () => {
    it('should return a list of `movements` that belong to the `transaction` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/movements')
        .query({ filter: { transactionId: 'bar' } })
        .reply(200, {
          data: [
            { id: 'qux', metadata: {} },
            { id: 'quux', metadata: {} }
          ],
          total: 2
        });

      const { results, total } = await transaction.getMovements();

      expect(results).toEqual([{
        id: 'qux',
        metadata: {}
      },
      {
        id: 'quux',
        metadata: {}
      }]);

      expect(total).toEqual(2);
    });
  });

  describe('reject', () => {
    it('should return the rejected `transaction` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, { data: { id: 'bar', status: 'pending' } });

      const transaction = await slyk.transaction.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/transactions/bar/reject', { reason: 'waldo' })
        .reply(200, {
          data: {
            id: 'bar',
            metadata: { rejectReason: 'waldo' },
            status: 'rejected'
          }
        });

      const rejectedTransaction = await transaction.reject({ reason: 'waldo' });

      expect(rejectedTransaction).toEqual({
        id: 'bar',
        metadata: { rejectReason: 'waldo' },
        status: 'rejected'
      });
    });
  });
});
