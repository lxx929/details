/*
 * @Author: 刘祥祥 
 * @Date: 2019-03-25 08:47:57 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-25 10:04:41
 * function (){ gulp任务操作}
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');

gulp.task('scss', () => { //编译scss
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', () => { //监听scss
    return gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
});

gulp.task('server', () => { //编译scss
    return gulp.src('./src')
        .pipe(webserver({
            prot: 8000,
            open: true,
            livereload: true,
            proxies: [{
                source: 'api/getinfo', //查询数据
                target: 'http://localhost:3000/api/getinfo'
            }, {
                source: 'api/getlist', //
                target: 'http://localhost:3000/api/getlist'
            }]
        }));
});

gulp.task('default', gulp.series('scss', 'server', 'watch'));