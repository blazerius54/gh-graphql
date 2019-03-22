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
      // В заголовке добавьте ваш токен
      // https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line
      // Authorization: `Bearer {token}`,
    },
    method: 'POST',
    body: setBodyQuery(searchText, queryArgs),
  });
};
