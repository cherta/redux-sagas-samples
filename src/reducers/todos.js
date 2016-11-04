import { normalize } from './utils';

export const LOAD = 'redux-sagas-sample/todos/LOAD';
export const LOAD_SUCCESS = 'redux-sagas-sample/todos/LOAD_SUCCESS';
export const LOAD_FAIL = 'redux-sagas-sample/todos/LOAD_FAIL';

//Initial State
const initialState = {
  incomplete: {},
  complete: {},
};

//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS: {
      const complete = action.items.filter(i => i.status === 'complete');
      const incomplete = action.items.filter(i => i.status === 'incomplete');
      return {
        ...state,
        complete: {
          ...state.complete,
          ...normalize(complete)
        },
        incomplete: {
          ...state.incomplete,
          ...normalize(incomplete)
        },
      };
    }
    default:
      return state;
  }
}

//Action Creators
export const load = (filter) => ({ type: LOAD, filter })

export default todos;
