const { get: axiosGet, post: axiosPost } = require('axios');

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
  const headers = { Authorization: auth };
  const { body: taskData } = req;
  const reqData = { headers, data: taskData };

  axiosPost('https://api.storn.co/api/v1/task/', reqData)
    .then(apiRes => res.send(apiRes.data));
};
