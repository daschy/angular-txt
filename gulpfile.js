var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var rimraf = require('rimraf');

gulp.task('serve', ['clean'], function () {

  browserSync.init({
    host: '0.0.0.0',
    port: 8081,
    open: false,
    server: {
      baseDir: [
        '.',
        'example/',
      ],
      routes: {
        '/bower_components': 'bower_components',
        '/node_modules': 'bower_components',
      },
    },
  });

  gulp.watch('{src,example}/{,**/}*.{js,html,css}').on('change', browserSync.reload);
});

gulp.task('clean', function () {
  rimraf.sync('dist');
});