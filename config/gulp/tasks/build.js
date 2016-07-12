/*global require*/

var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
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
        callback
    );
});

gulp.task('clean', function () {
    'use strict';

    return gulp.src(['dist/', 'build/'], { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('typescript', function () {
    'use strict';

    var res, project = typescript.createProject('tsconfig.json');

    res = gulp.src(['src/app/**/!(*.spec)+(.ts)', 'typings/index.d.ts'])
        .pipe(sourcemaps.init())
        .pipe(typescript(project));

    return res.js
        .pipe(sourcemaps.write('.', { includeContent: true }))
        .pipe(gulp.dest(function (file) { return file.base; }));
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
