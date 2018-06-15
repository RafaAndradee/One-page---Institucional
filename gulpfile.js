var gulp = require('gulp');
var sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

gulp.task('sass', ()=>
  gulp.src('./assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'))
);


gulp.task('imagemin', () =>
	gulp.src('assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img'))
);

gulp.task('watch', function(){
  gulp.watch('assets/scss/style.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);
