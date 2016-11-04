import { normalize } from './utils';

export const LOAD = 'redux-sagas-sample/todos/LOAD';
export const LOAD_SUCCESS = 'redux-sagas-sample/todos/LOAD_SUCCESS';
export const LOAD_FAIL = 'redux-sagas-sample/todos/LOAD_FAIL';
export const COMPLETE = 'redux-sagas-sample/todos/COMPLETE';
export const COMPLETE_SUCCESS = 'redux-sagas-sample/todos/COMPLETE_SUCCESS';
export const COMPLETE_FAIL = 'redux-sagas-sample/todos/COMPLETE_FAIL';

//Initial State
const initialState = {
  incomplete: {},
  complete: {},
};

//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE:
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case COMPLETE_SUCCESS: {
      const branch = action.item.status === 'complete' ? 'complete' : 'incomplete';
      const otherBranch = branch === 'complete' ? 'incomplete' : 'complete';
      const newState =  {
        ...state,
        loading: false,
        [branch]: {
          ...state[branch],
          [action.item.id]: action.item,
        }
      };
      delete newState[otherBranch][action.item.id];
      return newState;
    }
    case LOAD_SUCCESS: {
      const complete = action.items.filter(i => i.status === 'complete');
      const incomplete = action.items.filter(i => i.status === 'incomplete');
      return {
        ...state,
        loading: false,
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

export const complete = (id) => ({ type: COMPLETE, id })

export default todos;
