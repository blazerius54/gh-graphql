import {
  REPOS_LIST_REQUEST,
  REPOS_LIST_SUCCESS,
  REPOS_LIST_ERROR,
} from './consts';

export const initialState = {
  loading: false,
  reposList: [],
  pageInfo: {},
};

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case REPOS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REPOS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        reposList: action.payload.data.search.edges,
      };
    case REPOS_LIST_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default mainPageReducer;
