import { getAllTasks, postNewTask } from './asyncTaskUtils';

export const updateInput = inputData =>
  ({ type: 'UPDATE_INPUT', payload: inputData });

export const changeTestProp = () =>
  ({ type: 'UPDATE_TEST_PROP', payload: 'Test props changed!!!' });

export const addNewTask = taskTitle => ({ type: 'ADD_NEW_TASK', payload: taskTitle });

export const getTasksAction = () =>
  (dispatch) => {
    getAllTasks()
      .then(taskRes => dispatch({ type: 'GET_ALL_TASKS', payload: taskRes.data.results }));
  };

export const postTaskAction = task =>
  (dispatch) => {
    postNewTask(task)
      // .then(taskRes => dispatch({ type: 'GET_ALL_TASKS', payload: taskRes.data.results }));
      .then(taskRes => console.warn('Post new task res: ', taskRes));
  };
