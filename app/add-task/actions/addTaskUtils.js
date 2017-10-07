const createUITask = task => ({ ...task, selected: false });

export const createUITaskList = tasks =>
  tasks.map(createUITask);

export const handleAddEditTaskResponse = (taskListObj, task) => {
  const { pureTasks, uiTasks } = taskListObj;
  const uiTask = createUITask(task);
  const newPureTasks = [...pureTasks];
  const newUiTasks = [...uiTasks];

  newUiTasks.push(uiTask);
  newPureTasks.push(task);

  return { pureTasks: newPureTasks, uiTasks: newUiTasks };
};

export const handleGetTaskResponse = (taskList) => {
  const uiTasks = createUITaskList(taskList);

  return { taskList, uiTasks };
};

const findTask = (tasks, taskId) =>
  tasks.find(({ id }) => taskId === id);

const updateTask = (task, propObj) =>
  ({ ...task, ...propObj });

const getTaskIndex = (tasks, taskId) =>
  tasks.findIndex(({ id }) => id === taskId);

export const findUpdateTask = (tasks, taskId, propObj) => {
  const newTasks = [...tasks];
  const taskToUpdate = findTask(newTasks, taskId);

  Object.assign(taskToUpdate, propObj);

  return newTasks;
};

export const selectTaskChk = (tasks, taskId) => {
  const { selected } = findTask(tasks, taskId);
  const toggleCheck = { selected: !selected };

  return findUpdateTask(tasks, taskId, toggleCheck);
};

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

export const saveNewTask = (inputs, newTaskObj) => {
  const inputsArr = Object.keys(inputs);

  const newTask = inputsArr.reduce((acc, curr) => {
    acc[curr] = inputs[curr];

    return acc;
  }, {});

  return newTask;
};

// export const recieveNewTask = (taskList, newTask) => {
//   const updatedTask
// };
