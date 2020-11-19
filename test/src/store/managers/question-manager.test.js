
/**
 * Module dependencies.
 */

import nock from 'nock';
import sdk from '';

/**
 * Test `QuestionManager`.
 */

describe('QuestionManager', () => {
  const apikey = 'xyzzy';
  const host = 'http://foobar:3000';
  const slyk = sdk({ apikey, host });

  describe('create', () => {
    it('should call api `/questions` endpoint with method `post` and return an instance of `Question` model with the given `data`', async () => {
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
        .post('/questions', {
          configurations: { values: ['bar'] },
          customData: {},
          description: '',
          productTypeCode: 'digital',
          title: 'foo',
          typeCode: 'multiple'
        })
        .reply(200, { data });

      const question = await slyk.question.create({
        configurations: { values: ['bar'] },
        customData: {},
        description: '',
        productTypeCode: 'digital',
        title: 'foo',
        typeCode: 'multiple'
      });

      expect(question).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('delete', () => {
    it('should call api `/questions/foo` endpoint with method `delete` and return `true`', async () => {
      nock(host, { reqheaders: { apikey } })
        .delete('/questions/foo')
        .reply(204);

      const question = await slyk.question.delete('foo');

      expect(question).toEqual(true);
    });
  });

  describe('get', () => {
    it('should call api `/questions/foo` endpoint with method `get` and return an instance of `Question` model with the given `data`', async () => {
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

      expect(question).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });

  describe('list', () => {
    it('should call api `/questions` endpoint with method `get` and return an array of instances of `Question` model in the `results` attribute and the `total`', async () => {
      const data = [
        {
          configurations: { values: ['bar'] },
          customData: {},
          description: 'waldo',
          id: 'foo',
          productTypeCode: 'digital',
          required: false,
          title: 'foo',
          typeCode: 'multiple'
        },
        {
          configurations: { values: ['quux'] },
          customData: {},
          description: null,
          id: 'bar',
          productTypeCode: 'digital',
          required: false,
          title: 'bar',
          typeCode: 'multiple'
        }
      ];

      nock(host, { reqheaders: { apikey } })
        .get('/questions')
        .query({
          page: { number: 1, size: 2 },
          sort: '-title'
        })
        .reply(200, { data, total: 5 });

      const question = await slyk.question.list({
        page: { number: 1, size: 2 },
        sort: [{ direction: 'desc', name: 'title' }]
      });

      expect(question.total).toEqual(5);
      expect(question.results).toEqual([
        { ...data[0], _sdk: expect.any(Object) },
        { ...data[1], _sdk: expect.any(Object) }
      ]);
    });
  });

  describe('patch', () => {
    it('should call api `/questions/foo` endpoint with method `patch` and return an instance of `Question` model with the given `data`', async () => {
      const data = {
        configurations: { values: ['bar'] },
        customData: {},
        description: 'waldo',
        id: 'foo',
        productTypeCode: 'digital',
        required: false,
        title: 'quux',
        typeCode: 'multiple'
      };

      nock(host, { reqheaders: { apikey } })
        .patch('/questions/foo', { title: 'quux' })
        .reply(200, { data });

      const question = await slyk.question.patch('foo', { title: 'quux' });

      expect(question).toEqual({
        _sdk: expect.any(Object),
        ...data
      });
    });
  });
});
