
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `InviteModel`.
 */

describe('InviteModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('cancel', () => {
    it('should return `true` after canceling the `invite` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites')
        .reply(200, { data: { code: 'fred' } });

      const invite = await slyk.invite.create();

      nock(host, { reqheaders: { apikey } })
        .post('/invites/fred/cancel')
        .reply(204);

      const result = await invite.cancel();

      expect(result).toEqual(true);
    });
  });

  describe('getInvitedUser', () => {
    it('should return `undefined` if the `invite` has no related `getInvitedUserId`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites')
        .reply(200, { data: { code: 'fred', invitedUserId: null } });

      const invite = await slyk.invite.create();
      const user = await invite.getInvitedUser();

      expect(user).toBeUndefined();
    });

    it('should return the `user` related to the `invite` `getInvitedUser`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites')
        .reply(200, { data: { code: 'fred', invitedUserId: 'waldo' } });

      const invite = await slyk.invite.create();

      nock(host, { reqheaders: { apikey } })
        .get('/users/waldo')
        .reply(200, { data: { id: 'waldo' } });

      const user = await invite.getInvitedUser();

      expect(user).toEqual({ id: 'waldo' });
    });
  });

  describe('getInviterUser', () => {
    it('should return `undefined` if the `invite` has no related `getInviterUser`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites')
        .reply(200, { data: { code: 'fred', inviterUserId: null } });

      const invite = await slyk.invite.create();
      const user = await invite.getInviterUser();

      expect(user).toBeUndefined();
    });

    it('should return the `user` related to the `invite` `getInviterUser`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites')
        .reply(200, { data: { code: 'fred', inviterUserId: 'waldo' } });

      const invite = await slyk.invite.create();

      nock(host, { reqheaders: { apikey } })
        .get('/users/waldo')
        .reply(200, { data: { id: 'waldo' } });

      const user = await invite.getInviterUser();

      expect(user).toEqual({ id: 'waldo' });
    });
  });

  describe('validate', () => {
    it('should return the response `data` after validating the `invite` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites')
        .reply(200, { data: { code: 'fred' } });

      const invite = await slyk.invite.create();

      nock(host, { reqheaders: { apikey } })
        .get('/invites/fred/validate')
        .reply(200, { data: { referrerName: 'waldo' } });

      const result = await invite.validate();

      expect(result).toEqual({ referrerName: 'waldo' });
    });
  });
});
