
export const LOAD = "retail-status/todos/LOAD";
export const LOAD_SUCCESS = "retail-status/todos/LOAD_SUCCESS";
export const LOAD_FAIL = "retail-status/todos/LOAD_FAIL";

export function normalize(arrayPayload, idKey = "id") {
  return arrayPayload.reduce((acc, obj) => {
    const id = obj[idKey];
    acc[id] = obj;
    return acc;
  }, {});
};

const initialState = {
  incomplete: {},
  complete: {},
};

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

export default todos;

export const load = (filter) => ({ type: LOAD, filter })
