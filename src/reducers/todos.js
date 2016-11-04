export const LOAD = "retail-status/report-attachments/LOAD";
export const LOAD_SUCCESS = "retail-status/report-attachments/LOAD_SUCCESS";
export const LOAD_FAIL = "retail-status/report-attachments/LOAD_FAIL";

const initialState = {
  incomplete: {
    2: { id: 2, text: "learn about redux" },
    3: { id: 3, text: "learn about sagas" },
  },
  complete: {
    1: { id: 1, text: "learn about JSON" },
  },
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default todos;

export const load = (filter) => ({ type: LOAD, filter })
