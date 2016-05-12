var path = require('path');
var fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = {
	entry: fullPath('index.js'),
	output: {
		path: 'dist',
		filename: 'rgaa_angular-bootstrap.js',
		library: 'rgaa_angular-bootstrap',
		libraryTarget: 'umd'
	},
	externals: [
		'angular',
		'angular-ui-bootstrap'
	]
};
