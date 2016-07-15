/*global require*/

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    minifyHtml = require('gulp-minify-html'),
    runSequence = require('run-sequence'),
    Builder = require('systemjs-builder');


gulp.task('build', function (callback) {
    'use strict';

    runSequence(
        'clean',
        'build:systemjs',
        'usemin',
        'copy:app',
        callback
    );
});

gulp.task('clean', function () {
    'use strict';

    return gulp.src(['dist/', 'build/'], { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('build:systemjs', function (done) {
    'use strict';
    runSequence('typescript', function () {
        var builder = new Builder();

        builder.loadConfig('src/systemjs.config.js')
            .then(function () {
                return builder.buildStatic('src/app/main.js', 'build/app/bundle.js', {
                    normalize: true,
                    minify: true,
                    mangle: true,
                    runtime: false,
                    globalDefs: { DEBUG: false, ENV: 'production' }
                });
            })
            .then(function () {
                done();
            });
    });
});

gulp.task('usemin', function () {
    'use strict';
    return gulp.src('src/index.html')
        .pipe(usemin(
            {
                html: [minifyHtml({ empty: true })],
                js: [rev()],
                jsApp: [rev()],
                jsLib: [rev()]
            }
        ))
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy:app', function() {
    'use strict';

    return gulp.src('src/app/**/*.{css,html}')
        .pipe(gulp.dest('dist/app'))
});
