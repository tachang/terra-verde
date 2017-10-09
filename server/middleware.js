const axios = require('axios');

const { get: axiosGet, post: axiosPost, delete: axiosDelete } = axios;


/* eslint no-console: off */
// Get the auth token @params user, password
exports.getAuthToken = (user, pass) => (req, res) => {
  const authData = { username: user, password: pass };

  axiosPost('https://api.storn.co/api/v1/token/', authData)
    .then((apiRes) => {
      res.cookie('authorization', apiRes.data, { path: '/' });
      res.send(apiRes.data);
    });
};

// Just test the API
exports.stornApiTest = (req, res) => {
  axiosGet('https://api.storn.co')
    .then(apiRes => res.send(apiRes.data));
};

// Gets all tasks from api @param auth
exports.getAllTasks = authType => (req, res) => {
  const { cookies: { authorization } } = req;
  const headers = { Authorization: `${authType} ${authorization.token}` };

  axiosGet('https://api.storn.co/api/v1/task/', { headers })
    .then(apiRes => res.send(apiRes.data));
};

// Add a task to api @param auth
exports.addTask = authType => (req, res) => {
  const { cookies: { authorization } } = req;
  const headers = { Authorization: `${authType} ${authorization.token}` };
  const { body: taskData } = req;

  console.log('TaskData: ', taskData);

  axios({
    method: 'post',
    url: 'https://api.storn.co/api/v1/task/',
    headers,
    data: taskData
  }).then(apiRes => res.send(apiRes.data))
    .catch(err => console.log('error: ', err.response.data));
};

// Delete a single task middleware
exports.deleteSingleTask = authType => (req, res) => {
  const { cookies: { authorization } } = req;
  const { query: { id } } = req;
  const headers = {
    Authorization: `${authType} ${authorization.token}`,
    'Content-type': 'text/plain'
  };

  axiosDelete(`https://api.storn.co/api/v1/task/${id}/`, { headers })
    .then(({ status }) => res.send(`Task Deleted! ${status}`))
    .catch(err => console.log('ERROR: ', err.response.data));
};
