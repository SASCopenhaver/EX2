var  gulp = require("gulp")
	,watch = require("gulp-watch")
	,browserSync = require("browser-sync").create()
		
	,source = "./assets/styles"
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
});
//------------------------------------------------------------------------------
gulp.task("cssInject", ["styles"], function(){
	
	return gulp.src(source+"/**/*.css")
			   .pipe(browserSync.stream());
});
//------------------------------------------------------------------------------