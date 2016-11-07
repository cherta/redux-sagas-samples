/* @flow */
import { values } from 'lodash';
import type { Todo, State } from './todos-types';

export const getAsArray = (state:State, filter:string):Array<Todo> => {
  const all = {
    ...state.incomplete,
    ...state.complete,
  };
  return filter === 'complete' ? values(all).filter(i => i.status === 'complete') : values(all);
}
