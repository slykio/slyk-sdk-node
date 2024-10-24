
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `UserManager`.
 */

describe('UserManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('accept', () => {
    it('should call api `/user/bar/approve` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/approve')
        .reply(204);

      const result = await slyk.user.approve('bar');

      expect(result).toEqual(true);
    });
  });

  describe('block', () => {
    it('should call api `/users/bar/block` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/block')
        .reply(204);

      const result = await slyk.user.block('bar');

      expect(result).toEqual(true);
    });
  });

  describe('changeEmail', () => {
    it('should call api `/users/bar/change-email` endpoint with method `post` and return the confirmation `token`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/change-email', { email: 'foo@bar.com' })
        .reply(200, { data: { token: '123456' } });

      const result = await slyk.user.changeEmail('bar', { email: 'foo@bar.com' });

      expect(result).toEqual({ token: '123456' });
    });
  });

  describe('changePassword', () => {
    it('should call api `/users/bar/change-password` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/change-password', { password: 'corge' })
        .reply(200, { data: { token: '123456' } });

      const result = await slyk.user.changePassword('bar', { password: 'corge' });

      expect(result).toEqual({ token: '123456' });
    });
  });

  describe('changePhone', () => {
    it('should call api `/users/bar/change-phone` endpoint with method `post` and return the confirmation `token`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/change-phone', { countryCode: 'PT', phone: '+123456789' })
        .reply(200, { data: { token: '123456' } });

      const result = await slyk.user.changePhone('bar', { countryCode: 'PT', phone: '+123456789' });

      expect(result).toEqual({ token: '123456' });
    });
  });

  describe('confirmEmail', () => {
    it('should call api `/users/confirm-email` endpoint with method `post` and return `true` if no data is returned', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/confirm-email', { token: '123456' })
        .reply(204);

      const result = await slyk.user.confirmEmail({ token: '123456' });

      expect(result).toEqual(true);
    });

    it('should call api `/users/confirm-email` endpoint with method `post` and return access tokens', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/confirm-email', { token: '123456' })
        .reply(200, { data: { refreshToken: 'foobar', token: 'foobiz' } });

      const result = await slyk.user.confirmEmail({ token: '123456' });

      expect(result).toEqual({ refreshToken: 'foobar', token: 'foobiz' });
    });
  });

  describe('confirmPhone', () => {
    it('should call api `/users/confirm-phone` endpoint with method `post` and return `true` if no data is returned', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/confirm-phone', { code: '123456', phone: '+123456789' })
        .reply(204);

      const result = await slyk.user.confirmPhone({ code: '123456', phone: '+123456789' });

      expect(result).toEqual(true);
    });

    it('should call api `/users/confirm-phone` endpoint with method `post` and return access tokens', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/confirm-phone', { code: '123456', phone: '+123456789' })
        .reply(200, { data: { refreshToken: 'foobar', token: 'foobiz' } });

      const result = await slyk.user.confirmPhone({ code: '123456', phone: '+123456789' });

      expect(result).toEqual({ refreshToken: 'foobar', token: 'foobiz' });
    });
  });

  describe('create', () => {
    it('should call api `/users` endpoint with method `post` and return an instance of `User` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users', { email: 'foo@bar.com', password: 'corge' })
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const result = await slyk.user.create({ email: 'foo@bar.com', password: 'corge' });

      expect(result).toEqual({
        email: 'foo@bar.com',
        id: 'bar',
        metadata: {}
      });
    });
  });

  describe('delete', () => {
    it('should call api `/users/bar` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/users/bar')
        .reply(204);

      const result = await slyk.user.delete('bar');

      expect(result).toEqual(true);
    });
  });

  describe('forgotPassword', () => {
    it('should call api `/users/forgot-password` endpoint with method `post` and return the created reset password token', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/forgot-password', { email: 'foo@bar.com' })
        .reply(200, { data: { token: 'foobar' } });

      const result = await slyk.user.forgotPassword({ email: 'foo@bar.com' });

      expect(result).toEqual({ token: 'foobar' });
    });
  });

  describe('get', () => {
    it('should call api `/users/bar` endpoint with method `get` and return an instance of `User` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users/bar')
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {}
          }
        });

      const result = await slyk.user.get('bar');

      expect(result).toEqual({
        email: 'foo@bar.com',
        id: 'bar',
        metadata: {}
      });
    });
  });

  describe('getReferralProgram', () => {
    it('should call api `/users/foo/referral-programs/bar` endpoint with method `get` and return the referral program with given `program` name for the given user `id`', async () => {
      const id = 'foo';
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

      const result = await slyk.user.getReferralProgram(id, program, { page: { number: 1, size: 3 } });

      expect(result).toEqual(referralProgram);
    });
  });

  describe('list', () => {
    it('should call api `/users` endpoint with method `get` and return an array of instances of `User` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/users')
        .query({ filter: { name: 'foo' } })
        .reply(200, {
          data: [
            {
              email: 'foo@bar.com',
              id: 'bar',
              metadata: {},
              name: 'foobar'
            },
            {
              email: 'foo@biz.com',
              id: 'biz',
              metadata: {},
              name: 'foobiz'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.user.list({ filter: { name: 'foo' } });

      expect(results).toEqual([{
        email: 'foo@bar.com',
        id: 'bar',
        metadata: {},
        name: 'foobar'
      },
      {
        email: 'foo@biz.com',
        id: 'biz',
        metadata: {},
        name: 'foobiz'
      }]);

      expect(total).toEqual(2);
    });
  });

  describe('listViaPost', () => {
    it('should call api `/users/list` endpoint with method `post` and return an array of instances of `User` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/list', { filter: { name: 'foo' } })
        .reply(200, {
          data: [
            {
              email: 'foo@bar.com',
              id: 'bar',
              metadata: {},
              name: 'foobar'
            },
            {
              email: 'foo@biz.com',
              id: 'biz',
              metadata: {},
              name: 'foobiz'
            }
          ],
          total: 2
        });

      const { results, total } = await slyk.user.listViaPost({ filter: { name: 'foo' } });

      expect(results).toEqual([
        {
          email: 'foo@bar.com',
          id: 'bar',
          metadata: {},
          name: 'foobar'
        },
        {
          email: 'foo@biz.com',
          id: 'biz',
          metadata: {},
          name: 'foobiz'
        }]);

      expect(total).toEqual(2);
    });
  });

  describe('patch', () => {
    it('should call api `/users/bar` endpoint with method `patch` and return an instance of `User` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .patch('/users/bar', { name: 'foobar' })
        .reply(200, {
          data: {
            email: 'foo@bar.com',
            id: 'bar',
            metadata: {},
            name: 'foobar'
          }
        });

      const result = await slyk.user.patch('bar', { name: 'foobar' });

      expect(result).toEqual({
        email: 'foo@bar.com',
        id: 'bar',
        metadata: {},
        name: 'foobar'
      });
    });
  });

  describe('resendConfirmation', () => {
    it('should call api `/users/resend-confirmation` endpoint with method `post` and return confirmation token', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/resend-confirmation', { phone: '+123456789' })
        .reply(200, { data: { token: '123456' } });

      const result = await slyk.user.resendConfirmation({ phone: '+123456789' });

      expect(result).toEqual({ token: '123456' });
    });
  });

  describe('resetPassword', () => {
    it('should call api `/users/reset-password` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/reset-password', { password: 'Foobar123', token: '123456' })
        .reply(204);

      const result = await slyk.user.resetPassword({ password: 'Foobar123', token: '123456' });

      expect(result).toEqual(true);
    });
  });

  describe('unblock', () => {
    it('should call api `/users/bar/unblock` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/users/bar/unblock')
        .reply(204);

      const result = await slyk.user.unblock('bar');

      expect(result).toEqual(true);
    });
  });
});
