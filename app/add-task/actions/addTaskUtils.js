export const createUITasks = tasks =>
  tasks.map((taskObj) => {
    const newTask = { ...taskObj };

    newTask.selected = false;

    return newTask;
  });

export const handleGetTaskResponse = (taskList) => {
  const uiTasks = createUITasks(taskList);

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
  console.log('input obj: ', inputObj);
  console.log('input fields: ', inputs);
  const { inputField = '', inputValue = '' } = inputObj;
  const newInputs = { ...inputs };
  const currentValue = newInputs[inputField];

  if (inputField === 'priority') {
    newInputs[inputField] = inputValue;

    return newInputs;
  }
  
  // const newValue = `${currentValue}${inputValue}`;

  newInputs[inputField] = inputValue;

  return newInputs;
};
