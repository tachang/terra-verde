/* Utilities local to this file only */

// Creates a new task with UI properties
const createUITask = task => ({ ...task, selected: false });

// Finds a task from the collection
const findTask = (tasks, taskId) =>
  tasks.find(({ id }) => taskId === id);

// NOTE: Unused local functions
// Updating a task 
// const updateTask = (task, propObj) =>
//   ({ ...task, ...propObj });

// Updata a task
// const getTaskIndex = (tasks, taskId) =>
//   tasks.findIndex(({ id }) => id === taskId);

/* Exported utities */
export const parseTaskId = taskData => taskData.split('-')[1];

// Creates a new list of UI tasks
export const createUITaskList = tasks =>
  tasks.map(createUITask);

// Creates two 'pureTasks' and 'uiTasks', lists on get all tasks response
export const handleAddEditTaskResponse = (taskListObj, task) => {
  const { pureTasks, uiTasks } = taskListObj;
  const uiTask = createUITask(task);
  const newPureTasks = [...pureTasks];
  const newUiTasks = [...uiTasks];

  newUiTasks.push(uiTask);
  newPureTasks.push(task);

  return { pureTasks: newPureTasks, uiTasks: newUiTasks };
};

// // Creates two 'pureTasks' and 'uiTasks', lists on get all tasks response
export const handleGetTaskResponse = (taskList) => {
  const uiTasks = createUITaskList(taskList);

  return { taskList, uiTasks };
};

// Finds a task and updates specified properties on it
export const findUpdateTask = (tasks, taskId, propObj) => {
  const newTasks = [...tasks];
  const taskToUpdate = findTask(newTasks, taskId);

  Object.assign(taskToUpdate, propObj);

  return newTasks;
};

// Handles check box selection of a task
export const selectTaskChk = (tasks, taskId) => {
  const task = findTask(tasks, taskId);
  const { selected } = task;
  const toggleCheck = { selected: !selected };

  return findUpdateTask(tasks, taskId, toggleCheck);
};

// Select task(s) for operation
export const selectTasks = (selectedTasks, taskList, taskId) => {
  const newSelectedTasks = [...selectedTasks];
  const selectedTask = { ...findTask(taskList, taskId) };

  newSelectedTasks.push(selectedTask);

  return newSelectedTasks;
};

// Handles creation of the new task object
export const updateTaskInputs = (inputs, inputObj) => {
  const { inputField = '', inputValue = '' } = inputObj;
  const newInputs = { ...inputs };

  if (inputField === 'priority') {
    newInputs[inputField] = inputValue;

    return newInputs;
  }

  newInputs[inputField] = inputValue;

  return newInputs;
};

// Handles creation of the new task object
export const saveNewTask = (inputs) => {
  const inputsArr = Object.keys(inputs);

  const newTask = inputsArr.reduce((acc, curr) => {
    acc[curr] = inputs[curr];

    return acc;
  }, {});

  return newTask;
};
