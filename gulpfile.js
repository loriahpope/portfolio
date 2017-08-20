var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');

gulp.task('sass', function () {
   return gulp.src('app/styles/sass/**/*.sass')
       .pipe(sass())
       .pipe(gulp.dest('app/styles/css'))
       .pipe(browserSync.reload({
           stream: true
       }))
});

gulp.task('browserSync', function() {
   browserSync.init({
       server: {
           baseDir: 'app'
       }
   })
});

gulp.task('useref', function () {
   return gulp.src('app/**/*.html')
       .pipe(useref())
       .pipe(gulpIf('*.js', uglify()))
       // .pipe(gulpIf('*.html', htmlmin({collapseWhitespace:true})))
       .pipe(gulpIf('*.css', cssnano()))
       .pipe(gulp.dest('dist'))
});

gulp.task('htaccess', function () {
    return gulp.src('app/portfolio/.htaccess')
        .pipe(gulp.dest('dist/portfolio'))
});

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('portfolio', function() {
    return gulp.src('app/portfolio/**/*.html')
        .pipe(gulp.dest('dist/portfolio'))
});

gulp.task('fonts', function() {
    return gulp.src('app/scripts/lib/components-font-awesome/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('assets', function() {
    return gulp.src('app/assets/**/*')
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/styles/sass/**/*.sass', ['sass']);
    gulp.watch('app/**/**/*.html', browserSync.reload);
    gulp.watch('app/scripts/**/*.js', browserSync.reload);
});

gulp.task('build', function (callback) {
   runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts', 'assets', 'htaccess'], callback)
});

gulp.task('serve:dist', function (callback) {
    runSequence('build', ['default'], callback)
});

gulp.task('default', function (callback) {
    runSequence(['sass','browserSync', 'watch'],
        callback
    )
});
