//references the required packages to make task running work
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// start writing your task

//serve the page with browsersync
gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    })
})

//compile sass
gulp.task('sass', function(){
    //define the gulp-sass task
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputstyle : "compressed"}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

//watch sass files for changes, compile

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
  });