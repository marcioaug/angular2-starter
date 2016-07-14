/*global require*/

var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('typescript:watch', function() {
    'use strict';

    gulp.watch('src/**/!(*.spec)+(.ts)', function(file) {
        compile([file.path]);
    });
});

gulp.task('typescript', function () {
    'use strict';

    return compile(['src/**/!(*.spec)+(.ts)'])
});

function compile(files) {
    'use strict';

    var source, res, project = typescript.createProject('tsconfig.json');

    source = ['typings/index.d.ts'].concat(files);

    res = gulp.src(source)
        .pipe(sourcemaps.init())
        .pipe(typescript(project));

    return res.js
        .pipe(sourcemaps.write('.', { includeContent: true }))
        .pipe(gulp.dest(function (file) { return file.base; }));
}
