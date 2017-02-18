'use strict';

const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  devtool: 'eval',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.html']
  },
  entry: path.resolve(__dirname, 'scripts/index.js'),
  output: {
    path: '/dist/',
    filename: 'app.bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /\.html$/, use: ['raw-loader'] }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  watchOptions: {
    aggregateTimeout: 100
  },
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: true,
    chunkModules: false
  }
}

module.exports = webpackConfig;
