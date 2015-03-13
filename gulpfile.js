var gulp = require('gulp');
var del = require('del');
var install = require('gulp-install');

var packageJson = require('./package.json');

gulp.task('deploy', function () {
    del.sync('target');
    gulp.src(['app/**', 'package.json'], {base: '.'})
        .pipe(gulp.dest('target/' + packageJson.name))
        .pipe(install({production: true}));
});

gulp.task('default', function () {

});