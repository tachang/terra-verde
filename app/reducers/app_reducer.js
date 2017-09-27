const initialState = {
  appTitle: 'TerraVerde',
  testProp: 'todo',
  inputData: '',
  todos: []
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEST_PROP': {
      return Object.assign({}, state, { testProp: action.payload });
    }

    default:
      return state;
  }
};

export default appReducer;
