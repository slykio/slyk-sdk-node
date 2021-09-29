
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TransactionManager`.
 */

describe('TransactionManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('approve', () => {
    it('should call api `/transactions/bar/approve` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/bar/approve')
        .reply(200, { data: { id: 'bar', status: 'processing' } });

      const transaction = await slyk.transaction.approve('bar');

      expect(transaction).toEqual({ id: 'bar', status: 'processing' });
    });
  });

  describe('confirm', () => {
    it('should call api `/transactions/bar/confirm` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/bar/confirm')
        .reply(200, { data: { id: 'bar', status: 'completed' } });

      const transaction = await slyk.transaction.confirm('bar');

      expect(transaction).toEqual({ id: 'bar', status: 'completed' });
    });
  });

  describe('deposit', () => {
    it('should call api `/transactions/deposit` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/deposit', {
          amount: '10',
          code: 'internal',
          destinationWalletId: 'quux'
        })
        .reply(200, {
          data: {
            amount: '10',
            code: 'internal',
            destinationWalletId: 'quux',
            id: 'bar',
            status: 'pending',
            type: 'deposit'
          }
        });

      const result = await slyk.transaction.deposit({
        amount: '10',
        code: 'internal',
        destinationWalletId: 'quux'
      });

      expect(result).toEqual({
        amount: '10',
        code: 'internal',
        destinationWalletId: 'quux',
        id: 'bar',
        status: 'pending',
        type: 'deposit'
      });
    });
  });

  describe('fail', () => {
    it('should call api `/transactions/bar/fail` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/bar/fail', { reason: 'waldo' })
        .reply(200, {
          data: {
            id: 'bar',
            metadata: { failReason: 'waldo' },
            status: 'failed'
          }
        });

      const transaction = await slyk.transaction.fail('bar', { reason: 'waldo' });

      expect(transaction).toEqual({
        id: 'bar',
        metadata: { failReason: 'waldo' },
        status: 'failed'
      });
    });
  });

  describe('get', () => {
    it('should call api `/transactions/bar` endpoint with method `get` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions/bar')
        .reply(200, {
          data: {
            amount: '5',
            id: 'bar',
            metadata: {}
          }
        });

      const result = await slyk.transaction.get('bar');

      expect(result).toEqual({
        amount: '5',
        id: 'bar',
        metadata: {}
      });
    });
  });

  describe('list', () => {
    it('should call api `/transactions` endpoint with method `get` and return an array of instances of `Transaction` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/transactions')
        .query({
          page: { number: 3, size: 2 },
          sort: '-amount'
        })
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

      const { results, total } = await slyk.transaction.list({
        page: { number: 3, size: 2 },
        sort: [{ direction: 'desc', name: 'amount' }]
      });

      expect(results).toEqual([{
        amount: '5',
        id: 'bar',
        metadata: {}
      },
      {
        amount: '4',
        id: 'biz',
        metadata: {}
      }]);

      expect(total).toEqual(6);
    });
  });

  describe('patch', () => {
    it('should call api `/transactions/bar` endpoint with method `patch` and return an instance of `Transaction` model with the given `data` after being patched', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/transactions/bar', { customData: { foobar: 'foobiz' } })
        .reply(200, { data: { customData: { foobar: 'foobiz' }, id: 'bar' } });

      const transaction = await slyk.transaction.patch('bar', { customData: { foobar: 'foobiz' } });

      expect(transaction).toEqual({ customData: { foobar: 'foobiz' }, id: 'bar' });
    });
  });

  describe('pay', () => {
    it('should call api `/transactions/pay` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/pay', { amount: '10', originWalletId: 'qux' })
        .reply(200, {
          data: {
            amount: '10',
            code: 'internal:pay',
            destinationWalletId: 'quux',
            id: 'bar',
            originWalletId: 'qux',
            status: 'pending',
            type: 'transfer'
          }
        });

      const result = await slyk.transaction.pay({ amount: '10', originWalletId: 'qux' });

      expect(result).toEqual({
        amount: '10',
        code: 'internal:pay',
        destinationWalletId: 'quux',
        id: 'bar',
        originWalletId: 'qux',
        status: 'pending',
        type: 'transfer'
      });
    });
  });

  describe('reject', () => {
    it('should call api `/transactions/bar/reject` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/bar/reject', { reason: 'waldo' })
        .reply(200, {
          data: {
            id: 'bar',
            metadata: { rejectReason: 'waldo' },
            status: 'failed'
          }
        });

      const transaction = await slyk.transaction.reject('bar', { reason: 'waldo' });

      expect(transaction).toEqual({
        id: 'bar',
        metadata: { rejectReason: 'waldo' },
        status: 'failed'
      });
    });
  });

  describe('request', () => {
    it('should call api `/transactions/request` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/request', {
          amount: '2',
          assetCode: 'foo',
          destinationWalletId: 'foobar',
          originWalletId: 'foobiz'
        })
        .reply(200, {
          data: {
            amount: '2',
            code: 'request',
            destinationWalletId: 'foobar',
            id: 'foo',
            originWalletId: 'foobiz',
            status: 'pending',
            type: 'transfer'
          }
        });

      const transaction = await slyk.transaction.request({
        amount: '2',
        assetCode: 'foo',
        destinationWalletId: 'foobar',
        originWalletId: 'foobiz'
      });

      expect(transaction).toEqual({
        amount: '2',
        code: 'request',
        destinationWalletId: 'foobar',
        id: 'foo',
        originWalletId: 'foobiz',
        status: 'pending',
        type: 'transfer'
      });
    });
  });

  describe('send', () => {
    it('should call api `/transactions/send` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/send', {
          amount: '2',
          assetCode: 'foo',
          destinationWalletId: 'foobar',
          originWalletId: 'foobiz'
        })
        .reply(200, {
          data: {
            amount: '2',
            code: 'send',
            destinationWalletId: 'foobar',
            id: 'foo',
            originWalletId: 'foobiz',
            status: 'confirmed',
            type: 'transfer'
          }
        });

      const transaction = await slyk.transaction.send({
        amount: '2',
        assetCode: 'foo',
        destinationWalletId: 'foobar',
        originWalletId: 'foobiz'
      });

      expect(transaction).toEqual({
        amount: '2',
        code: 'send',
        destinationWalletId: 'foobar',
        id: 'foo',
        originWalletId: 'foobiz',
        status: 'confirmed',
        type: 'transfer'
      });
    });
  });

  describe('transfer', () => {
    it('should call api `/transactions/transfer` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/transfer', {
          amount: '10',
          code: 'internal',
          destinationWalletId: 'quux',
          originWalletId: 'qux'
        })
        .reply(200, {
          data: {
            amount: '10',
            code: 'internal',
            destinationWalletId: 'quux',
            id: 'bar',
            originWalletId: 'qux',
            status: 'pending',
            type: 'transfer'
          }
        });

      const result = await slyk.transaction.transfer({
        amount: '10',
        code: 'internal',
        destinationWalletId: 'quux',
        originWalletId: 'qux'
      });

      expect(result).toEqual({
        amount: '10',
        code: 'internal',
        destinationWalletId: 'quux',
        id: 'bar',
        originWalletId: 'qux',
        status: 'pending',
        type: 'transfer'
      });
    });
  });

  describe('withdrawal', () => {
    it('should call api `/transactions/withdrawal` endpoint with method `post` and return an instance of `Transaction` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/transactions/withdrawal', {
          amount: '10',
          code: 'internal',
          originWalletId: 'qux'
        })
        .reply(200, {
          data: {
            amount: '10',
            code: 'internal',
            id: 'bar',
            originWalletId: 'qux',
            status: 'pending',
            type: 'withdrawal'
          }
        });

      const result = await slyk.transaction.withdrawal({
        amount: '10',
        code: 'internal',
        originWalletId: 'qux'
      });

      expect(result).toEqual({
        amount: '10',
        code: 'internal',
        id: 'bar',
        originWalletId: 'qux',
        status: 'pending',
        type: 'withdrawal'
      });
    });
  });
});
