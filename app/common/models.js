const newTaskObject = {
  name: '',
  is_complete: false,
  priority: null,
  description: ''
};

const initialState = {
  inputs: {
    name: '',
    priority: 1,
    description: ''
  },
  taskList: {
    pureTasks: [],
    uiTasks: []
  },
  newTask: { ...newTaskObject },
  selectedTasksList: []
};