const newTaskObject = {
  name: '',
  is_complete: false,
  priority: null,
  description: ''
};

const initialState = {
  inputs: {
    name: '',
    priority: 1,
    description: ''
  },
  taskList: {
    pureTasks: [],
    uiTasks: []
  },
  newTask: { ...newTaskObject },
  selectedTasksList: []
};

export const addTodoReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'UPDATE_INPUT': {
      return { ...state, inputs: action.payload };
    }

    case 'GET_ALL_TASKS': {
      const { uiTasks, taskList: pureTasks } = action.payload;
      const newTaskList = { pureTasks: [...pureTasks], uiTasks: [...uiTasks] };

      return { ...state, taskList: newTaskList };
    }

    case 'ADD_NEW_TASK': {
      newState.newTask.name = action.payload;
      newState.todoFormData = '';

      // eslint-disable-next-line no-console
      return newState;
    }

    case 'UPDATE_TASK': {
      const { taskList: { pureTasks } } = newState;

      return { ...state, taskList: { uiTasks: action.payload, ...pureTasks } };
    }

    case 'TOGGLE_SELECT_TASK': {
      const { taskList: { pureTasks } } = newState;

      return { ...state, taskList: { uiTasks: action.payload, pureTasks } };
    }

    case 'SELECT_TASK_TO_EDIT': {
      return { ...state, selectedTasksList: action.payload };
    }

    case 'SAVE_NEW_TASK': {
      return { ...state, newTask: action.payload };
    }

    case 'NEW_TASK_RECIVED': {
      return { ...state, taskList: action.payload };
    }

    default:
      return state;
  }
};

export default addTodoReducer;
