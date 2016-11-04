import { values } from 'lodash';

export const getAsArray = (state) => {
  const all = {
    ...state.incomplete,
    ...state.complete,
  };
  return values(all);
}
