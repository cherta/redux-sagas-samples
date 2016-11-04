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
