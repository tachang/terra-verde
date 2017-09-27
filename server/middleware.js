const { get: axiosGet, post: axiosPost } = require('axios');

// Get the auth token
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


exports.getTasks = (req, res) => {
  const headers = { Authorization: 'Token 3dd8adc849887da3631747c462a5bba4a21eb75f' };

  axiosGet('https://api.storn.co/api/v1/task/', { headers })
    .then(apiRes => res.send(apiRes.data));
};
