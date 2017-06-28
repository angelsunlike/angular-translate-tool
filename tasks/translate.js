var gulp = require('gulp');
var gettext = require('gulp-angular-gettext');

gulp.task('pot', function () {
    return gulp.src(['app/index.html', 'app/scripts/*.js'])
        .pipe(gettext.extract('template.pot', {}))
        .pipe(gulp.dest('po/'));
});

gulp.task('translations', function () {
    return gulp.src('po/**/*.po')
        .pipe(gettext.compile({
            format: 'json'
        }))
        .pipe(gulp.dest('app/scripts/translations/'));
});
