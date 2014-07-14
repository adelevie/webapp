var gulp = require('gulp');
var browserify = require('gulp-browserify');
var react = require('gulp-react');

var browserifyConfig = {
  insertGlobals : true,
  debug : !gulp.env.production
};

// Basic usage
gulp.task('jsx', function() {
  // Single entry point to browserify
  //gulp.src('src/js/app.js')
  gulp.src('src/*.js')
    .pipe(react())
    .pipe(browserify(browserifyConfig))
    .pipe(gulp.dest('build/'))
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['jsx']);
});

// Default Task
gulp.task('default', ['jsx', 'watch']);
