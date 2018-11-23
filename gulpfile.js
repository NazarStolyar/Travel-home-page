var gulp = require('gulp');
var server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.src('')
        .pipe(server({
            livereload: true,
            defaultFile: 'index.html',
            directoryListing: false,
            open: false
        }));
});

gulp.task('prefix', () =>
gulp.src('css/main.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
);
