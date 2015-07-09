var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

var appCss = compileSass(['assets', 'bower_components'], 'app.scss', 'app.css');

module.exports = merge(['public', 'bower_components', appCss]);
