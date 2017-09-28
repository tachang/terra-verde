const initialState = {
  todoFormData: '',
};

export const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT': {
      return { ...state, todoFormData: action.payload };
    }

    default:
      return state;
  }
};

export default addTodoReducer;
