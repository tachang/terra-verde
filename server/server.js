const { config: dotenv } = require('dotenv');
const { resolve } = require('path');
const express = require('express');

const { getAuthToken, stornApiTest, getTasks } = require('./middleware.js');

// In dev env, get ENV variables from ignored file ".env"
if (process.env.NODE_ENV !== 'production') dotenv();

const app = express();
const { PORT = 8080, USERNAME = '', PASSWORD = '' } = process.env;

// Serve static assets
app.use(express.static(resolve(__dirname, '../app')));

// Auth request to get token
app.use('/auth', getAuthToken(USERNAME, PASSWORD));

app.use('/test', stornApiTest);
app.use('/tasks', getTasks);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${PORT}`);
});
