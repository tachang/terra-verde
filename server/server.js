if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const { resolve } = require('path');

const { get: axiosGet, post: axiosPost } = require('axios');

const app = express();
const { PORT = 8080, USERNAME, PASSWORD } = process.env;


const authData = { username: USERNAME, password: PASSWORD };

app.use(express.static(resolve(__dirname, '../app')));

app.use('/auth', (req, res) => {
  axiosPost('https://api.storn.co/api/v1/token/', authData)
    .then(apiRes => res.send(apiRes.data));
});

app.use('/test', (req, res) => {
  axiosGet('https://api.storn.co')
    .then(apiRes => res.send(apiRes.data));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});
