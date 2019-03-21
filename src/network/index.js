import { DIRECTION_FORWARD, DIRECTION_BACKWARD } from '../utils/consts';
import { API_BASE_URL } from '../utils/config';
import { setBodyQuery } from './query';

export const getRepos = (searchText, cursor, direction) => {
  let queryArgs = 'first: 10';

  if (cursor && direction) {
    if (direction === DIRECTION_BACKWARD) {
      queryArgs = `last: 10, before: "${cursor}"`;
    }
    if (direction === DIRECTION_FORWARD) {
      queryArgs = `first: 10, after: "${cursor}"`;
    }
  }

  return fetch(API_BASE_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: setBodyQuery(searchText, queryArgs),
  });
};
