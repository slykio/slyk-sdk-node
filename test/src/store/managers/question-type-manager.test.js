
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `QuestionTypeManager`.
 */

describe('QuestionTypeManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('list', () => {
    it('should call api `/question-types` endpoint with method `get` and return an array of instances of `QuestionType` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
          code: 'waldo',
          dashboardJsonSchema: { foo: 'waldo' },
          jsonSchemaTemplate: {}
        },
        {
          code: 'quux',
          dashboardJsonSchema: { foo: 'quux' },
          jsonSchemaTemplate: {}
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/question-types')
        .query({
          page: { number: 1, size: 2 },
          sort: '-code'
        })
        .reply(200, { data, total: 5 });

      const questionType = await slyk.questionType.list({
        page: { number: 1, size: 2 },
        sort: [{ direction: 'desc', name: 'code' }]
      });

      expect(questionType.total).toEqual(5);
      expect(questionType.results).toEqual([
        { ...data[0], _sdk: expect.any(Object) },
        { ...data[1], _sdk: expect.any(Object) }
      ]);
    });
  });
});
