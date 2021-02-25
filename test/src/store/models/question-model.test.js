
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `QuestionModel`.
 */

describe('QuestionModel', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('delete', () => {
    it('should return `true` after deleting the `question` instance', async () => {
      nock(host, { reqheaders: { apikey } })
        .get('/questions/foo')
        .reply(200, {
          data: {
            configurations: { values: ['bar'] },
            customData: {},
            description: 'waldo',
            id: 'foo',
            productTypeCode: 'digital',
            required: false,
            title: 'foo',
            typeCode: 'multiple'
          }
        });

      const question = await slyk.question.get('foo');

      nock(host, { reqheaders: { apikey } })
        .delete('/questions/foo')
        .reply(204);

      const response = await question.delete();

      expect(response).toEqual(true);
    });
  });

  describe('patch', () => {
    it('should return the patched `question` instance', async () => {
      const data = {
        configurations: { values: ['bar'] },
        customData: {},
        description: 'waldo',
        id: 'foo',
        productTypeCode: 'digital',
        required: false,
        title: 'foo',
        typeCode: 'multiple'
      };

      nock(host, { reqheaders: { apikey } })
        .get('/questions/foo')
        .reply(200, { data });

      const question = await slyk.question.get('foo');

      nock(host, { reqheaders: { apikey } })
        .patch('/questions/foo', { title: 'quux' })
        .reply(200, { data: { ...data, title: 'quux' } });

      const response = await question.patch({ title: 'quux' });

      expect(response).toEqual({ ...data, title: 'quux' });
    });
  });
});
