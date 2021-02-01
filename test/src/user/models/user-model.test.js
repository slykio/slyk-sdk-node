
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `UserModel`.
 */

describe('UserModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('approve', () => {
    it('should return `true` after approving the `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/approve')
        .reply(204);

      const result = await user.approve();

      expect(result).toEqual(true);
    });
  });

  describe('block', () => {
    it('should return `true` after blocking the `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/block')
        .reply(204);

      const result = await user.block();

      expect(result).toEqual(true);
    });
  });

  describe('changeEmail', () => {
    it('should return the confirmation token after initializing a change email process of the `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/change-email', { email: 'foo@bar.com' })
        .reply(200, { data: { token: '123456' } });

      const result = await user.changeEmail({ email: 'foo@bar.com' });

      expect(result).toEqual({ token: '123456' });
    });
  });

  describe('changePassword', () => {
    it('should return `true` after changing the password of the `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/change-password', { currentPassword: 'corge', password: 'garply' })
        .reply(200, { data: { token: '123456' } });

      const result = await user.changePassword({ currentPassword: 'corge', password: 'garply' });

      expect(result).toEqual({ token: '123456' });
    });
  });

  describe('changePhone', () => {
    it('should return the confirmation token after initializing a change phone process of the `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/change-phone', { countryCode: 'PT', phone: '+123456789' })
        .reply(200, { data: { token: '123456' } });

      const result = await user.changePhone({ countryCode: 'PT', phone: '+123456789' });

      expect(result).toEqual({ token: '123456' });
    });
  });

  describe('delete', () => {
    it('should return `true` after deleting the `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: { email: 'foo@bar.com', id: 'bar' }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .delete('/users/bar')
        .reply(204);

      const result = await user.delete();

      expect(result).toEqual(true);
    });
  });

  describe('getInvites', () => {
    it('should return a list of `invites` that belong to `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/invites')
        .query({ filter: { inviterUserId: 'bar' } })
        .reply(200, {
          data: [
            { code: 'qux', metadata: {} },
            { code: 'quux', metadata: {} }
          ],
          total: 2
        });

      const { results, total } = await user.getInvites();

      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          code: 'qux',
          metadata: {}
        },
        {
          _sdk: expect.any(Object),
          code: 'quux',
          metadata: {}
        }
      ]);

      expect(total).toEqual(2);
    });
  });

  describe('getWallets', () => {
    it('should return a list of `wallets` that belong to `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets')
        .query({ filter: { ownerId: 'bar' } })
        .reply(200, {
          data: [
            { id: 'qux', metadata: {} },
            { id: 'quux', metadata: {} }
          ],
          total: 2
        });

      const { results, total } = await user.getWallets();

      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          id: 'qux',
          metadata: {}
        },
        {
          _sdk: expect.any(Object),
          id: 'quux',
          metadata: {}
        }
      ]);

      expect(total).toEqual(2);
    });
  });

  describe('getPrimaryWallet', () => {
    it('should return the `wallet` related the `user` `primaryWalletId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            id: 'bar',
            metadata: {},
            primaryWalletId: 'foo'
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/wallets/foo')
        .reply(200, { data: { id: 'foo', metadata: {} } });

      const wallet = await user.getPrimaryWallet();

      expect(wallet).toEqual({
        _sdk: expect.any(Object),
        id: 'foo',
        metadata: {}
      });
    });
  });

  describe('getReferralProgram', () => {
    it('should return the `user` instance referral program', async () => {
      const id = 'foo';

      nock(host, { reqheaders: { apikey } })
        .get(`/users/${id}`)
        .reply(200, { data: { id, name: 'foobiz' } });

      const user = await slyk.user.get(id);
      const program = 'bar';
      const referralProgram = {
        data: [
          {
            id: 'qux',
            name: 'quux',
            participated: true,
            referralEarn: [
              { amount: '2.00000000', assetCode: 'btc' },
              { amount: '1.50000000', assetCode: 'eth' }
            ]
          },
          {
            id: 'thud',
            name: 'garply',
            participated: false,
            referralEarn: []
          },
          {
            id: 'waldo',
            name: 'fred',
            participated: true,
            referralEarn: [{ amount: '1.00000000', assetCode: 'eth' }]
          }
        ]
      };

      nock(host, { reqheaders: { apikey } })
        .get(`/users/${id}/referral-programs/${program}`)
        .query({ page: { number: 1, size: 3 } })
        .reply(200, referralProgram);

      const result = await user.getReferralProgram('bar', { page: { number: 1, size: 3 } });

      expect(result).toEqual(referralProgram);
    });
  });

  describe('getReferralUser', () => {
    it('should return `undefined` if the `user` has no related `referralUserId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            id: 'bar',
            metadata: {},
            referralUserId: null
          }
        });

      const user = await slyk.user.get('bar');
      const referralUser = await user.getReferralUser();

      expect(referralUser).toBeUndefined();
    });

    it('should return the `user` related the `user` `referralUserId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            id: 'bar',
            metadata: {},
            referralUserId: 'foo'
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .get('/users/foo')
        .reply(200, { data: { id: 'foo', metadata: {} } });

      const referralUser = await user.getReferralUser();

      expect(referralUser).toEqual({
        _sdk: expect.any(Object),
        id: 'foo',
        metadata: {}
      });
    });
  });

  describe('patch', () => {
    it('should return the patched `user`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, { data: { id: 'bar' } });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .patch('/users/bar', { name: 'foobar' })
        .reply(200, {
          data: {
            id: 'bar',
            metadata: {},
            name: 'foobar'
          }
        });

      const patchedUser = await user.patch({ name: 'foobar' });

      expect(patchedUser).toEqual({
        _sdk: expect.any(Object),
        id: 'bar',
        metadata: {},
        name: 'foobar'
      });
    });
  });

  describe('unblock', () => {
    it('should return `true` after unblocking the `user` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const user = await slyk.user.get('bar');

      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/unblock')
        .reply(204);

      const result = await user.unblock();

      expect(result).toEqual(true);
    });
  });
});
