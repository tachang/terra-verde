/* eslint no-console: off */
import { getAllTasks, postNewTask, deleteSingleTask } from './asyncTaskUtils';
import {
  handleGetTaskResponse, findUpdateTask, selectTaskChk, updateTaskInputs, saveNewTask,
  handleAddEditTaskResponse, parseTaskId, selectTasks
} from './addTaskUtils';

// Handles updates to the input data
export const updateInputAction = (inputs, inputData) =>
  ({ type: 'UPDATE_INPUT', payload: updateTaskInputs(inputs, inputData) });

// NOTE: currently unused
export const addNewTask = taskTitle => ({ type: 'ADD_NEW_TASK', payload: taskTitle });

// The actions creator for updating a task
export const updateTaskAction = (taskId, propObj) =>
  (dispatch, getState) => {
    const { addTask: { taskList } } = getState();
    const { uiTasks = [] } = taskList;
    const updatedTasks = findUpdateTask(uiTasks, taskId, propObj);

    dispatch({ type: 'UPDATE_TASK', payload: updatedTasks });
  };

const toggleTaskCheck = (uiTasks, taskId) =>
  ({ type: 'TOGGLE_SELECT_TASK', payload: selectTaskChk(uiTasks, taskId) });

const selectTaskListAdd = (selectedTasksList, pureTasks, taskId) =>
  ({ type: 'SELECT_TASK_TO_EDIT', payload: selectTasks(selectedTasksList, pureTasks, taskId) });

// The action creator for selecting a task
export const selectTaskAction = taskId =>
  (dispatch, getState) => {
    const { addTask: { taskList, selectedTasksList } } = getState();
    const { uiTasks, pureTasks } = taskList;

    dispatch(toggleTaskCheck(uiTasks, taskId));
    dispatch(selectTaskListAdd(selectedTasksList, pureTasks, taskId));
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

// The actions creator for saving a task
export const saveTaskAction = (inputs, newTask) =>
  ({ type: 'SAVE_NEW_TASK', payload: saveNewTask(inputs, newTask) });

// The action creator for posting a task
export const postTaskAction = task =>
  (dispatch, getState) => {
    const { addTask: { taskList, inputs } } = getState();

    dispatch(saveTaskAction(inputs, task));

    postNewTask(getState().addTask.newTask)
      .then((taskRes) => {
        const updatedTasks = handleAddEditTaskResponse(taskList, taskRes.data);
        dispatch({ type: 'NEW_TASK_RECIVED', payload: updatedTasks });
      })
      .then(() => dispatch(getTasksAction()))
      .catch(err => console.log(err.response));
  };

// Delete a single task action creator
export const deleteSingleTaskAction = taskId =>
  (dispatch) => {
    deleteSingleTask(parseTaskId(taskId))
      .then(delRes => console.log('Delete response: ', delRes))
      .then(() => dispatch(getTasksAction()))
      .catch(err => console.log(err.response));
  };
