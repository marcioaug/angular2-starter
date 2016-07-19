/*global require*/

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    'use strict';

    return gulp.src('src/**/*.scss')
        .pipe(
            sass(
                {
                    includePaths: [
                        'node_modules/',
                        'src/assets/stylesheets/'
                    ],
                    outputStyle: 'compressed'
                }
            ).on('error', sass.logError)
        ).pipe(gulp.dest(function (file) { return file.base; }));
});

gulp.task('sass:watch', function () {
    'use strict';

    gulp.watch('src/**/*.scss', ['sass']);
});
