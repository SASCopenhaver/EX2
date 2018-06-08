var  gulp = require("gulp")
	,watch = require("gulp-watch")
	,browserSync = require("browser-sync").create()
		
	,source = "./assets/styles"
	,sourcejs = "./assets/scripts"
	,dest = "builds/styles/" 
;

//------------------------------------------------------------------------------
gulp.task("watch", function(){
	gulp.watch(source+"/**/*.css", ["cssInject"]);
	
	gulp.task("watch", function(){
		browserSync.init({
			proxy:"127.0.0.1:8600/EX2"
		});
	});
	
// Refreshes when any ".cfm" file is changed
	watch("./**/*.cfm", function(){
		browserSync.reload();
	});
	
	watch(sourcejs+"/**/*.js", function(){
		//gulp.start("scripts");
		gulp.start("scriptsRefresh");
	});
});
//------------------------------------------------------------------------------
gulp.task("cssInject", ["styles"], function(){
	
	return gulp.src(source+"/**/*.css")
			   .pipe(browserSync.stream());
});
//------------------------------------------------------------------------------
gulp.task("scriptsRefresh", ["scripts"], function(){
	browserSync.reload();
});




