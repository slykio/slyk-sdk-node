
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `MovementModel`.
 */

describe('MovementModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('getAsset', () => {
    it('should return the `asset` related to the `movement` `assetCode`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/movements/bar')
        .reply(200, {
          data: {
            amount: '1',
            assetCode: 'qux',
            id: 'bar'
          }
        });

      const movement = await slyk.movement.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/assets/qux')
        .reply(200, { data: { code: 'qux', metadata: {} } });

      const asset = await movement.getAsset();

      expect(asset).toEqual({
        _sdk: expect.any(Object),
        code: 'qux',
        metadata: {}
      });
    });
  });

  describe('getWallet', () => {
    it('should return the `wallet` related to the `movement` `walletId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/movements/bar')
        .reply(200, {
          data: {
            amount: '1',
            id: 'bar',
            walletId: 'qux'
          }
        });

      const movement = await slyk.movement.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/qux')
        .reply(200, { data: { id: 'qux', metadata: {} } });

      const wallet = await movement.getWallet();

      expect(wallet).toEqual({
        _sdk: expect.any(Object),
        id: 'qux',
        metadata: {}
      });
    });
  });

  describe('getTransaction', () => {
    it('should return the `transaction` related to the `movement` `transactionId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/movements/bar')
        .reply(200, {
          data: {
            amount: '1',
            id: 'bar',
            transactionId: 'qux'
          }
        });

      const movement = await slyk.movement.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/transactions/qux')
        .reply(200, { data: { id: 'qux', metadata: {} } });

      const transaction = await movement.getTransaction();

      expect(transaction).toEqual({
        _sdk: expect.any(Object),
        id: 'qux',
        metadata: {}
      });
    });
  });
});
