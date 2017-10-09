// NOTE: Unused local functions
// Updating a task 
// const updateTask = (task, propObj) =>
//   ({ ...task, ...propObj });

// Updata a task
// const getTaskIndex = (tasks, taskId) =>
//   tasks.findIndex(({ id }) => id === taskId);

// Finds a task from the collection
const findTask = (tasks, taskId) =>
  tasks.find(({ id }) => taskId === id);