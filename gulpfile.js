const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const exec = require('child_process').exec;

let srcPath = {
    'scss': './_dev/devsass',
    'publik': './public',
    'jsbundle': './assets/jsbundle',
    'devjs': './_dev/devjs'
}


gulp.task('default', ['webpack', 'styles', 'jsconcatfiles'], () => {
    gulp.watch('./assets/scss/**/*', ['styles']);
    gulp.watch('./assets/js/**/*', ['webpack']);       
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'!public/js/**/.#*js',
			'!public/css/**/.#*css'
        ]);
    gulp.watch(srcPath.jsbundle + '/*', ['jsconcatfiles']);  
});

gulp.task('jsconcatfiles', function () {
    return gulp.src(
        [  
			srcPath.jsbundle + '/localstorage/localstorage.js',
            srcPath.jsbundle + '/main.js',
            srcPath.jsbundle + '/vendors~main.main.js',
        ]
    )   
        
        .pipe(concat('aj_barnensboktips.3.0.js'))        
        .pipe(gulp.dest(srcPath.publik + '/js/'));
    
});


gulp.task('styles', () => {
	gulp
		.src('assets/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
    )
        .pipe(sourcemaps.write())
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions']
			})
    )
        .pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/css'));
		
});


gulp.task('webpack', ['jsconcatfiles'], cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
    });
   
});

gulp.task('build', ['styles'], cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
    });
    console.log('efter bulid');
});
