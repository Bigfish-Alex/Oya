// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
//var cleanCSS=require('gulp-clean-css');
var connect=require('gulp-connect');
var sass = require('gulp-sass');

// 检查脚本
gulp.task('lint', function() {
      gulp.src('libs/js/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
      gulp.src('libs/js/*.js')
          .pipe(concat('all.js')) //需要合并的文件
          .pipe(gulp.dest('libs/dist'))
          .pipe(rename('all.min.js'))
          .pipe(uglify()) //压缩
          .pipe(gulp.dest('libs/dist'));
});

//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('watch', function () {
//  gulp.watch(['*.html'], ['html']);
    gulp.watch(['libs/js/*.js'], ['scripts']);
    gulp.watch(['libs/css/*.css'], ['minicss']);
});

// 编译Sass
gulp.task('sass', function() {
      gulp.src('libs/scss/*.scss')
          .pipe(sass())
          .pipe(gulp.dest('libs/css'));
});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('*.html')
      .pipe(connect.reload());
});

gulp.task('minicss',function(){
      return gulp.src('libs/css/*.css')
            .pipe(rename({suffix:'.min'}))
            .pipe(cleanCSS({compatibility:'ie7'}))
            .pipe(gulp.dest('libs/css/min'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run('watch');

    // 监听文件变化
//    gulp.watch('libs/js/*.js', function(){
//        gulp.run('scripts');
//        gulp.run('html');
//    });
//
//    gulp.watch('libs/scss/*.scss', function(){
//        gulp.run('sass');
//        gulp.run('html');
//    })
});
