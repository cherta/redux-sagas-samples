import { values } from 'lodash';

export const getAsArray = (state, filter) => {
  const all = {
    ...state.incomplete,
    ...state.complete,
  };
  return filter === 'complete' ? values(all).filter(i => i.status === 'complete') : values(all);
}
