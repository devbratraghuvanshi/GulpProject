///
//required

var gulp  =require('gulp'),
uglify =require('gulp-uglify'),
rename = require('gulp-rename'),
browserSync = require('browser-sync'),
reload = browserSync.reload;

///scripts task
gulp.task('scripts',function(){
	///console.log('it worked dude!');
	gulp.src(['App/js/**/*.js','!App/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('App/js'));
})

///scripts task
gulp.task('css',function(){
	///console.log('it worked dude!');
	gulp.src(['App/css/**/*.css','!App/css/**/*.min.css'])
})

gulp.task('html',function(){
	gulp.src('App/**/*.html');
})



///		Watch task
gulp.task('watch',function(){
	gulp.watch('App/js/**/*.js',['scripts']);
	gulp.watch('App/**/*.html',['html']);
	gulp.watch('App/**/*.css',['css']);
})


gulp.task('browser-sync', function(){
	browserSync({
		server:{baseDir:"./App"}
	})
})

/// default task
gulp.task('default',['scripts','watch','browser-sync']); 
