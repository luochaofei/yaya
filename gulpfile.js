//引入gulp
var gulp = require("gulp");
//引入sass
var sass = require("gulp-sass");


//添加copyHtml任务,保存到指定目录
gulp.task("copyHtml",function(){
	gulp.src("*.html").pipe(gulp.dest("D:/phpStudy/WWW/yaya"));

});
//添加copyImg任务，保存到指定目录
gulp.task("copyImg",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:/phpStudy/WWW/yaya/img"));

});
//copyJS任务，保存到指定目录
gulp.task("copyJs",function(){
	gulp.src("js/*.js").pipe(gulp.dest("D:/phpStudy/WWW/yaya/js"));
});
//将转换成的css文件放到指定目录下
gulp.task("moveCss",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:/phpStudy/WWW/yaya/css"));
});


//添加sass转换到css任务
gulp.task("sass",function(){
	gulp.src("css/*.scss").pipe(sass()).pipe(gulp.dest("css"));
});



//添加自动监听任务功能
gulp.task("watch",function(){
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("img/**/*",["copyImg"]);
	gulp.watch("css/*.scss",["sass"]);
	gulp.watch("css/*.css",["moveCss"]);
	gulp.watch("js/*.js",["copyJs"]);
});
