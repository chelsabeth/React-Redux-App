import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";


export const fetchFacts = () => dispatch => {
        dispatch({ type: START_FETCHING })
        // do the async action inside here and dispatch an error or success action
        axios.get("http://cat-fact.herokuapp.com/facts")
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
    };

// redux thunk
// const thunk = next => action => store => {
//     if (typeof action === 'object') {
//         next(action); // forward action untouched
//     } else if (typeof action === "function") {
//         action(store.dispatch) // stop the action and call the function
//     }
// }