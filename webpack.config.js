const { resolve } = require('path');

module.exports = {
  devtool: 'source-map',
  entry: resolve(__dirname, './app/entry.jsx'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
