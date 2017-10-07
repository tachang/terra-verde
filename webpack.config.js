const { resolve } = require('path');
const { NamedModulesPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './template.html'
    })
  ],
  devServer: {
  // host: '0.0.0.0',
    port: 5000,
    contentBase: publicPath,
    proxy: [{
      context: ['/'],
      target: 'http://localhost:5001',
      secure: false
    }]
  },
};
