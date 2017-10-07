import { getAllTasks, postNewTask } from './asyncTaskUtils';
import {
  handleGetTaskResponse, findUpdateTask, selectTaskChk, updateTaskInputs 
} from './addTaskUtils';

// Handles updates to the input data
export const updateInput = (inputs, inputData) =>
  ({ type: 'UPDATE_INPUT', payload: updateTaskInputs(inputs, inputData) });

// NOTE: currently unused
export const addNewTask = taskTitle => ({ type: 'ADD_NEW_TASK', payload: taskTitle });

export const updateTask = (taskId, propObj) =>
  (dispatch, getState) => {
    const { addTask: { taskList } } = getState();
    const { uiTasks = [] } = taskList;
    const updatedTasks = findUpdateTask(uiTasks, taskId, propObj);

    dispatch({ type: 'UPDATE_TASK', payload: updatedTasks });
  };

export const selectTask = taskId =>
  (dispatch, getState) => {
    const { addTask: { taskList } } = getState();
    const { uiTasks = [] } = taskList;

    dispatch({ type: 'TOGGLE_SELECT_TASK', payload: selectTaskChk(uiTasks, taskId) });
  };

// Get all tasks async action creator
export const getTasksAction = () =>
  (dispatch) => {
    getAllTasks()
      .then((taskRes) => {
        const tasks = handleGetTaskResponse(taskRes.data.results);

        dispatch({ type: 'GET_ALL_TASKS', payload: tasks });
      });
  };

export const postTaskAction = task =>
  (dispatch) => {
    postNewTask(task)
      // .then(taskRes => dispatch({ type: 'GET_ALL_TASKS', payload: taskRes.data.results }));
      .then(taskRes => console.warn('Post new task res: ', taskRes));
  };
