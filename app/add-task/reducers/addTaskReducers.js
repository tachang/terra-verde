import { tasks as taskList } from '../../task-list/task-list.json';

const newTaskObject = {
  name: '',
  is_complete: false,
  priority: null,
  description: ''
};

const initialState = {
  todoFormData: '',
  taskList: [],
  newTask: { ...newTaskObject }
};

export const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT': {
      return { ...state, todoFormData: action.payload };
    }

    case 'GET_ALL_TASKS': {
      const updatedTasks = [...state.taskList, ...action.payload];

      return { ...state, taskList: updatedTasks };
    }

    case 'ADD_NEW_TASK': {
      const newState = { ...state };

      newState.newTask.name = action.payload;
      newState.todoFormData = '';

      // eslint-disable-next-line no-console
      console.log('New State: ', newState);
      return newState;
    }

    default:
      return state;
  }
};

export default addTodoReducer;
