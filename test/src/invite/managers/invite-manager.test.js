
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `InviteManager`.
 */

describe('InviteManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('cancel', () => {
    it('should call api `/invites/bar/cancel` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites/bar/cancel')
        .reply(204);

      const result = await slyk.invite.cancel('bar');

      expect(result).toEqual(true);
    });
  });

  describe('create', () => {
    it('should call api `/invites` endpoint with method `post` and return an instance of `Invite` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites', { email: 'foo@bar.com' })
        .reply(200, { data: { code: 'bar', invitedEmail: 'foo@bar.com' } });

      const result = await slyk.invite.create({ email: 'foo@bar.com' });

      expect(result).toEqual({
        _sdk: expect.any(Object),
        code: 'bar',
        invitedEmail: 'foo@bar.com'
      });
    });
  });

  describe('get', () => {
    it('should call api `/invites/waldo` endpoint with method `get` and return an instance of `Invite` model with the given `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/invites/waldo')
        .reply(200, { data: { code: 'waldo', invitedEmail: 'foo@bar.com' } });

      const result = await slyk.invite.get('waldo');

      expect(result).toEqual({
        _sdk: expect.any(Object),
        code: 'waldo',
        invitedEmail: 'foo@bar.com'
      });
    });
  });

  describe('list', () => {
    it('should call api `/invites` endpoint with method `get` and return an array of instances of `Invites` model in the `results` attribute and the `total`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/invites')
        .query({ filter: { invitedEmail: 'foo@bar.com' } })
        .reply(200, {
          data: [
            { code: 'waldo', invitedEmail: 'foo@bar.com' },
            { code: 'fred', invitedEmail: 'foo@bar.com' }
          ],
          total: 2
        });

      const { results, total } = await slyk.invite.list({ filter: { invitedEmail: 'foo@bar.com' } });

      expect(results).toEqual([
        {
          _sdk: expect.any(Object),
          code: 'waldo',
          invitedEmail: 'foo@bar.com'
        },
        {
          _sdk: expect.any(Object),
          code: 'fred',
          invitedEmail: 'foo@bar.com'
        }
      ]);

      expect(total).toEqual(2);
    });
  });

  describe('send', () => {
    it('should call api `/invites/send` endpoint with method `post` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .post('/invites/send', { email: ['foo@bar.com', 'foo@biz.com'] })
        .reply(204);

      const result = await slyk.invite.send({ email: ['foo@bar.com', 'foo@biz.com'] });

      expect(result).toEqual(true);
    });
  });

  describe('validate', () => {
    it('should call api `/invites/bar/validate` endpoint with method `get` and return the response `data`', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/invites/bar/validate')
        .reply(200, { data: { referrerName: 'waldo' } });

      const result = await slyk.invite.validate('bar');

      expect(result).toEqual({ referrerName: 'waldo' });
    });
  });
});
