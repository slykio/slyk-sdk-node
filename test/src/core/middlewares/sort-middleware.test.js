
/**
 * Module dependencies.
 */

import sortMiddleware from 'core/middlewares/sort-middleware';

/**
 * Test `sortMiddleware`.
 */

describe('sortMiddleware', () => {
  it('should return the given object without any change if the `options.sort` atribute is not given', () => {
    const data = { foo: 'bar', waldo: 'fred' };
    const result = sortMiddleware(data);

    expect(result).toEqual(data);
  });

  it('should return the given object without any change if the `options` attribute is given but the `sort` atribute is missing', () => {
    const data = { foo: 'bar', options: { qux: 'quux' } };
    const result = sortMiddleware(data);

    expect(result).toEqual(data);
  });

  it('should return the given object without the `options.sort` attribute if `sort` is not an array', () => {
    const data = { foo: 'bar', options: { qux: 'quux', sort: 'quux' } };
    const result = sortMiddleware(data);

    expect(result).toEqual({ foo: 'bar', options: { qux: 'quux' } });
  });

  it('should return the given object without the `options.sort` attribute if `sort` is not an empty array', () => {
    const data = { foo: 'bar', options: { qux: 'quux', sort: [] } };
    const result = sortMiddleware(data);

    expect(result).toEqual({ foo: 'bar', options: { qux: 'quux' } });
  });

  it('should return the given object without the `options.sort` attribute if the only given `sort` entry is not an object', () => {
    const data = { foo: 'bar', options: { qux: 'quux', sort: ['waldo'] } };
    const result = sortMiddleware(data);

    expect(result).toEqual({ foo: 'bar', options: { qux: 'quux' } });
  });

  it('should return the given object without the `options.sort` attribute if the only given `sort` entry does not have a `name` attribute', () => {
    const data = { foo: 'bar', options: { qux: 'quux', sort: [{ direction: 'asc' }] } };
    const result = sortMiddleware(data);

    expect(result).toEqual({ foo: 'bar', options: { qux: 'quux' } });
  });

  it('should return the given object without the `options.sort` attribute if the only given `sort` entry as an invalid `name`', () => {
    const data = { foo: 'bar', options: { qux: 'quux', sort: [{ name: [] }] } };
    const result = sortMiddleware(data);

    expect(result).toEqual({ foo: 'bar', options: { qux: 'quux' } });
  });

  it('should return the given object with the `options.sort` replaced by the expected `sort` in string format', () => {
    const data = {
      foo: 'bar',
      options: {
        qux: 'quux',
        sort: [
          { name: 'fred' },
          { direction: 'ASC', name: 'waldo' },
          { direction: 'aSc', name: 'garply' },
          { direction: 'asc', name: 'plugh' },
          { direction: 'DESC', name: 'baz' },
          { direction: 'DeSc', name: 'corge' },
          { direction: 'desc', name: 'grault' }
        ]
      }
    };

    const result = sortMiddleware(data);

    expect(result).toEqual({
      foo: 'bar',
      options: {
        qux: 'quux',
        sort: 'fred,waldo,garply,plugh,-baz,-corge,-grault'
      }
    });
  });
});
