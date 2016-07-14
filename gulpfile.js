/*global require*/

var gulp = require('gulp'),
    typescript = require('./config/gulp/tasks/typescript'),
    watch = require('./config/gulp/tasks/watch'),
    serve = require('./config/gulp/tasks/serve'),
    build = require('./config/gulp/tasks/build');

gulp.task('default', ['serve']);
