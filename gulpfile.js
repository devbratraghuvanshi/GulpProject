///
//required

var gulp  =require('gulp');
uglify =require('gulp-uglify');
rename = require('gulp-rename');

///scripts task
gulp.task('scripts',function(){

	///console.log('it worked dude!');
	gulp.src(['App/js/**/*.js','!App/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('App/js'));


})
///		Watch task
gulp.task('watch',function(){
	gulp.watch('App/js/**/*.js',['scripts'])
})


gulp.task('browser-sync', function(){
	browserSync({
		server:{baseDir:"./App"}
	})
})

/// default task
gulp.task('default',['scripts','watch','browser-sync']); 
