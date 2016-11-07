/* @flow */
import { COMPLETE, LOAD, COMPLETE_SUCCESS, LOAD_SUCCESS } from './todos-actions';
import type { State, Action } from './todos-types';
import normalize from '../lib/normalize';

const initialState:State = {
  incomplete: {},
  complete: {},
};

const todos = (state:State = initialState, action:Action) => {
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
      delete newState[otherBranch][action.item.id.toString()];
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

export default todos;
