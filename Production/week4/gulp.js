//references the required packages to make task running work
var gulp = required('gulp');
var sass = required('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('./ass/**/*.scss')
    .pipe(sass({outputstyle : 'compressed'}).on('error',sass.error))
    .pipe(gulp.dest('./css'));
})