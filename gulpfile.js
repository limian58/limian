var gulp=require("gulp"),
    uglify=require("gulp-uglify"),
    concat=require("gulp-concat");

gulp.task("minifyjs",function () {
    gulp.src("*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')) //放到此盘名
        .pipe(concat('order_query.js'))//合并文件
        .pipe(gulp.dest('dist/js'))
})

gulp.task('default', ['minifyjs'])//默认启动gulp.task("minifyjs"于此对应
gulp.watch('js/*js',['minifyjs'])



