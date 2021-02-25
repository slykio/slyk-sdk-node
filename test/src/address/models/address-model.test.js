
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `AddressModel`.
 */

describe('AddressModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('getAsset', () => {
    it('should return the `address` related `asset`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/addresses/foobar')
        .reply(200, { data: { assetCode: 'fred' } });

      const address = await slyk.address.get('foobar');

      nock(host, { reqheaders: { apikey } })
        .get('/assets/fred')
        .reply(200, { data: { code: 'fred' } });

      const asset = await address.getAsset();

      expect(asset).toEqual({ code: 'fred' });
    });
  });

  describe('getWallet', () => {
    it('should return `undefined` if the `address` has no related `wallet`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/addresses/foobar')
        .reply(200, { data: { walletId: null } });

      const address = await slyk.address.get('foobar');
      const wallet = await address.getWallet();

      expect(wallet).toBeUndefined();
    });

    it('should return the `address` related `wallet`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/addresses/foobar')
        .reply(200, { data: { walletId: 'waldo' } });

      const address = await slyk.address.get('foobar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/waldo')
        .reply(200, { data: { id: 'waldo' } });

      const wallet = await address.getWallet();

      expect(wallet).toEqual({ id: 'waldo' });
    });
  });
});
