const axios = require('axios');

const { get: axiosGet, post: axiosPost } = axios;

// Get the auth token @params user, password
exports.getAuthToken = (user, pass) => (req, res) => {
  const authData = { username: user, password: pass };

  axiosPost('https://api.storn.co/api/v1/token/', authData)
    .then(apiRes => res.send(apiRes.data));
};

// Just test the API
exports.stornApiTest = (req, res) => {
  axiosGet('https://api.storn.co')
    .then(apiRes => res.send(apiRes.data));
};

// Gets all tasks from api @param auth
exports.getAllTasks = auth => (req, res) => {
  const headers = { Authorization: auth };

  axiosGet('https://api.storn.co/api/v1/task/', { headers })
    .then(apiRes => res.send(apiRes.data));
};

// Add a task to api @param auth
exports.addTask = auth => (req, res) => {
  const headers = { Authorization: 'Token 3dd8adc849887da3631747c462a5bba4a21eb75f', 'Content-type': 'application/json' };
  const { body: taskData } = req;
  const reqData = { headers, data: taskData };
  // console.log('Auth: ', auth);
  // console.log('Task data from body: ', taskData);
  // console.log('Req data: ', reqData);

  axios({
    method: 'post',
    url: 'https://api.storn.co/api/v1/task/',
    headers,
    data: taskData
  }).then(apiRes => {
      console.log('Task post API res: ', apiRes.data);
      res.send(apiRes.data)
    }).catch(err => console.log('/n', 'Err: ', err.response));
};
