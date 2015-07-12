var merge = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');

 var includepaths = [ 'assets', 'bower_components', 'bower_components/fontawesome' 'bower_components/neat/app/assets/stylesheets' 'bower_components/app/assets/stylesheets' ]

var appCss = compileSass(['assets', 'bower_components'], 'app.scss', 'app.css');

module.exports = merge(['public', 'bower_components', appCss]);
