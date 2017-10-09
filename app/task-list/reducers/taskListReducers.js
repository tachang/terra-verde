export const addTodoReducer = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'GET_ALL_TASKS': {
      const { uiTasks, taskList: pureTasks } = action.payload;
      const newTaskList = { pureTasks: [...pureTasks], uiTasks: [...uiTasks] };

      return { ...state, taskList: newTaskList };
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

    default:
      return state;
  }
};

export default addTodoReducer;
