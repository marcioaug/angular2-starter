/*global require*/

var gulp = require('gulp'),
    serve = require('./config/gulp/tasks/serve'),
    build = require('./config/gulp/tasks/build');

gulp.task('default', ['serve']);
