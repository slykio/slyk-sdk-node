
/**
 * Module dependencies.
 */

import {
  get,
  isArray,
  isString,
  omit,
  reduce,
  set
} from 'lodash';

/**
 * Export `sortMiddleware`.
 */

export default data => {
  const sort = get(data, 'options.sort');

  if (!isArray(sort) || !sort.length) {
    return omit(data, 'options.sort');
  }

  const reducedSortArray = reduce(sort, (result, sortOption) => {
    const direction = get(sortOption, 'direction', 'ASC');
    const name = get(sortOption, 'name');

    if (!isString(direction) || !isString(name)) {
      return result;
    }

    const sortString = direction.toUpperCase() === 'DESC' ? `-${name}` : name;

    result.push(sortString);

    return result;
  }, []);

  if (!reducedSortArray.length) {
    return omit(data, 'options.sort');
  }

  const reducedSortString = reducedSortArray.toString();

  return set(data, 'options.sort', reducedSortString);
};
