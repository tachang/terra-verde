import axios from 'axios';

export const getAllTasks = () => axios('/tasks');
export const postNewTask = task => axios.post('/new-task', task);
