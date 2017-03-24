///
//required

var gulp  =require('gulp'),
uglify =require('gulp-uglify'),
rename = require('gulp-rename'),
sass        = require('gulp-sass'),
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

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});


gulp.task('html',function(){
	gulp.src('App/**/*.html');
})



///		Watch task
gulp.task('watch',function(){
	gulp.watch('App/js/**/*.js',['scripts']);
	gulp.watch('App/**/*.html',['html']).on('change', browserSync.reload);
	gulp.watch("app/scss/*.scss", ['sass']);
})


gulp.task('browser-sync', function(){
	browserSync({
		server:{baseDir:"./App"}
	})
})

/// default task
gulp.task('default',['scripts','watch','browser-sync','sass']); 
