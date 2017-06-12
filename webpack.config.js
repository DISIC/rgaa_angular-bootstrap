var path = require('path');
var fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = {
	entry: [
		'babel-polyfill',
		fullPath('index.js')
	],
	output: {
		path: 'dist',
		filename: 'rgaa_angular-bootstrap.js',
		library: 'rgaa_angular-bootstrap',
		libraryTarget: 'umd'
	},
	externals: [
		'angular',
		'angular-ui-bootstrap'
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: fullPath('src')
			}
		]
	}
};
