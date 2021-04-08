
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `TaskStepQuestionManager`.
 */

describe('TaskStepQuestionManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('list', () => {
    it('should call api `/tasks/foo/steps/bar/questions` endpoint with method `get` and return an instance of `TaskStepQuestion` model with the given `data`', async () => {
      const data = [
        {
          customData: { foo: 'bar' },
          description: 'foobar',
          id: 'bar',
          optional: false,
          options: null,
          stepId: 'bar',
          type: 'open_text'
        },
        {
          customData: {},
          description: 'foobiz',
          id: 'biz',
          optional: true,
          options: null,
          stepId: 'bar',
          type: 'open_text'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/tasks/foo/steps/bar/questions')
        .query({
          page: { number: 1, size: 2 },
          sort: 'createdAt'
        })
        .reply(200, { data, total: 5 });

      const taskStepQuestions = await slyk.taskStepQuestion.list('foo', 'bar', {
        page: { number: 1, size: 2 },
        sort: [{ direction: 'asc', name: 'createdAt' }]
      });

      expect(taskStepQuestions.total).toEqual(5);
      expect(taskStepQuestions.results).toEqual(data);
    });
  });
});
