
/**
 * Jest mocks.
 */

jest.mock('core/util/sdk-factory');

/**
 * Module dependencies.
 */

import { InternalServerError } from 'easy-http-errors';
import sdk from '';
import sdkFactory from 'core/util/sdk-factory';

/**
 * Test `index`.
 */

describe('index', () => {
  beforeEach(() => {
    sdkFactory.mockClear();
  });

  it('should throw `InternalServerError` if an API key is not given', () => {
    try {
      sdk();
      fail();
    } catch (error) {
      expect(error).toBeInstanceOf(InternalServerError);
      expect(error.message).toEqual('Missing API key');
    }
  });

  it('should call `sdkFactory` with the given `connection` value and the `config` object', () => {
    sdkFactory.mockImplementation(() => 'foobar');

    const slyk = sdk({ apikey: 'foobiz' });

    expect(sdkFactory).toHaveBeenCalledTimes(1);
    expect(sdkFactory).toHaveBeenCalledWith({ apikey: 'foobiz', host: 'api.slyk.io' });
    expect(slyk).toEqual('foobar');
  });
});
