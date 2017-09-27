const { resolve } = require('path');

const srcPath = resolve(__dirname, './app/entry.jsx');
const publicPath = resolve(__dirname, 'dist/');

module.exports = {
  devtool: 'source-map',
  entry: srcPath,
  output: {
    path: publicPath,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devServer: {
  // host: '0.0.0.0',
    port: 5000,
    contentBase: publicPath,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        secure: false
      }
    ]
  },
};
