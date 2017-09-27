const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, './app/index.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
};
