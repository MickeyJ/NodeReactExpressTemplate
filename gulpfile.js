var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    sass   = require('gulp-sass');




// ******************************************
// SCRIPT
// ******************************************
gulp.task('scripts', function(){
  gulp.src(['dev/js/*.js'])
    .pipe(uglify('main.js', {
      outSourceMap: false
    }))
    //.pipe(browserify({
    //  debug: true,
    //  transform: [ 'reactify' ]
    //}))
    .pipe(gulp.dest('./public/js'));
});

// ******************************************
// CSS
// ******************************************
gulp.task('sass', function(){
  gulp.src('dev/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./public/css'));
});


// ******************************************
// WATCH
// ******************************************
gulp.task('watch', function(){
  gulp.watch('dev/**/*.js', ['scripts']);
  gulp.watch('dev/scss/**/*.scss', ['sass']);
});


// ******************************************
// DEFAULT [ALL]
// ******************************************
gulp.task('default', ['scripts', 'sass', 'watch']);