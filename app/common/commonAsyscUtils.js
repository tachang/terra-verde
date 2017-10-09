import axios from 'axios';

const { post: axiosPost, get: axiosGet } = axios;

export const getAllTasks = () => axiosGet('/tasks');
export const editNewTask = task => axios.post('/new-task', task);
export const deleteSingleTask = taskId => axios.delete(`/delete-task?id=${taskId}`);
