import {
  REPOS_LIST_REQUEST,
  REPOS_LIST_SUCCESS,
  REPOS_LIST_ERROR,
} from './consts';
import { getRepos } from '../../network';

// Sync actions

export const reposListRequest = () => ({
  type: REPOS_LIST_REQUEST,
});

export const reposListSuccess = payload => ({
  type: REPOS_LIST_SUCCESS,
  payload,
});

export const reposListError = error => ({
  type: REPOS_LIST_ERROR,
  error,
});

// Async actions

export function sendCardRequest(searchText, cursor, direction) {
  return dispatch => {
    dispatch(reposListRequest());

    getRepos(searchText, cursor, direction)
      .then(response => response.json())
      .then(response => {
        dispatch(reposListSuccess(response));
      })
      .catch(error => reposListError(error));
  };
}
