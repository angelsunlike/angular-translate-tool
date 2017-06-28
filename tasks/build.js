var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence').use(gulp);

gulp.task('app', function() {
    runSequence(
        'wiredepBuild',
        'browserSync'
    );
});

gulp.task('wiredepBuild', function() {
    gulp.src('app/index.html')
        .pipe(wiredep({
            exclude: [
                // TODO inject excluded
            ],
            devDependencies: false
        }))
        .pipe(gulp.dest('app'))
});

gulp.task('browserSync', function() {
    browserSync.init({
        port: 3000,
        server: {
            baseDir: './app',
            livereload: true
        },
        logLevel: "debug"
    });
});
