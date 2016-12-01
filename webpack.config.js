'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js']
	},
	entry: path.resolve(__dirname, 'scripts/index.js'),
	output: {
		path: './dist/',
		filename: 'app.bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
		}]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	watchOptions: {
		aggregateTimeout: 100
	}
}