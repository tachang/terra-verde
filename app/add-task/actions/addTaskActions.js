import { getAllTasks, postNewTask } from './asyncTaskUtils';

// Handles updates to the input data
export const updateInput = inputData =>
  ({ type: 'UPDATE_INPUT', payload: inputData });

// NOTE: currently unused
export const addNewTask = taskTitle => ({ type: 'ADD_NEW_TASK', payload: taskTitle });

// Get all tasks async action creator
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
