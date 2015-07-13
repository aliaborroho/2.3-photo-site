var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

var includepaths = [
	'assets',
	'bower_components/reset-css',
	'bower_components/fontawesome/scss',
	'bower_components/bourbon/app/assets/stylesheets',
	'bower_components/neat/app/assets/stylesheets'
];

var appCss = compileSass(includepaths, 'app.scss', 'app.css');

module.exports = merge(['public', appCss]);
