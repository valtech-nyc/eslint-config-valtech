var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', function() {
    return gulp.src('./*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});
