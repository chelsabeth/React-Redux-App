import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions/actions";

const initialState = {
  catFacts: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
      };
    case FETCH_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
