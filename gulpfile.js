var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return gulp.src('./src/styles/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/sass/*.sass', ['sass']);
});
