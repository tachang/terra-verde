const { config: dotenv } = require('dotenv');
const { resolve } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const { json: jsonBodyParser } = require('body-parser');

const {
  getAuthToken, stornApiTest, getAllTasks, addTask
} = require('./middleware.js');

// In dev env, get ENV variables from ignored file ".env"
if (process.env.NODE_ENV !== 'production') dotenv();

const app = express();
const { PORT = 5001, USERNAME, PASSWORD, AUTH_TYPE } = process.env;

// Serve static assets
app.use(express.static(resolve(__dirname, '../dist')));
app.use(cookieParser());

// Auth request to get token
app.use('/auth', getAuthToken(USERNAME, PASSWORD));
app.use('/test', stornApiTest);
app.use('/tasks', getAllTasks(`${AUTH_TYPE}`));
app.post('/new-task', jsonBodyParser(), addTask(`${AUTH_TYPE}`));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});
