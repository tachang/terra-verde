// Creates a new task with UI properties
const createUITask = task => ({ ...task, selected: false });

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

// Finds a task from the collection
const findTask = (tasks, taskId) =>
  tasks.find(({ id }) => taskId === id);

const updateTask = (task, propObj) =>
  ({ ...task, ...propObj });

const getTaskIndex = (tasks, taskId) =>
  tasks.findIndex(({ id }) => id === taskId);

// Finds a task and updates specified properties on it
export const findUpdateTask = (tasks, taskId, propObj) => {
  const newTasks = [...tasks];
  const taskToUpdate = findTask(newTasks, taskId);

  Object.assign(taskToUpdate, propObj);

  return newTasks;
};

// Handles check box selection of a task
export const selectTaskChk = (tasks, taskId) => {
  const { selected } = findTask(tasks, taskId);
  const toggleCheck = { selected: !selected };

  return findUpdateTask(tasks, taskId, toggleCheck);
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
export const saveNewTask = (inputs, newTaskObj) => {
  const inputsArr = Object.keys(inputs);

  const newTask = inputsArr.reduce((acc, curr) => {
    acc[curr] = inputs[curr];

    return acc;
  }, {});

  return newTask;
};
