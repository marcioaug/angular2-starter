/*global require*/

var gulp = require('gulp'),
    bs = require("browser-sync"),
    historyApiFallback = require('connect-history-api-fallback');

gulp.task('serve', ['typescript', 'typescript:watch', 'sass:watch'], function () {
    'use strict';

    var browserSync = bs.create();

    browserSync.init(
        {
            port: 3000,
            server: {
                baseDir: './src/',
                middleware: [historyApiFallback()],
                routes: {
                    "/node_modules": "node_modules",
                    "/src": "src"
                }
            },
            files: [
                'src/index.html',
                'src/systemjs.conf.js',
                'src/assets/**/*.{js,css,html}',
                'src/app/**/*.{js,css,html}'
            ]
        }
    );

    browserSync.reload();
});

gulp.task('serve-dist', ['build'], function () {
    'use strict';

    var browserSync = bs.create();

    browserSync.init(
        {
            port: 3030,
            server: {
                baseDir: './dist/',
                middleware: [historyApiFallback()]
            }
        }
    );

    browserSync.reload();
});
