var  gulp = require("gulp")
	,watch = require("gulp-watch")
	,postcss = require("gulp-postcss")
	,autoprefixer = require("autoprefixer")
	,cssvars = require("postcss-simple-vars")
	,nested = require("postcss-nested")
	,cssImport = require("postcss-import")
	,browserSync = require("browser-sync").create()
		
	,source = "./assets/styles"
	,dest = "builds/styles/" 
;


//------------------------------------------------------------------------------
gulp.task("styles",function(){
	// return is needed because "src" is an asyncronious function 
	// Sequence in array is !!!IMPORTANT!!!
	return	gulp.src(source+"/styles.css")
				.pipe(postcss([ 
								cssImport,
								cssvars,
								nested,
								autoprefixer 
							  ]))
				.pipe( gulp.dest(dest));
				
});
//------------------------------------------------------------------------------
gulp.task("watch", function(){
	//gulp.watch(source+"/**/*.css", ["styles"]);
	gulp.watch(source+"/**/*.css", ["cssInject"]);
	
	gulp.task("watch", function(){
		browserSync.init({
			//
			//notify:false,
			//
			//http://dnando.github.io/blog/2017/03/20/hot-browser-reloading/
			proxy:"127.0.0.1:8600/EX2"

// 			server:{
//				baseDir:"EX2"//,
//			}//,

		});
	});
	
	//watch("index.cfm", function(){
	// Refreshes when any ".cfm" file is changed
	watch("./**/*.cfm", function(){
		//gulp.start("html");
		browserSync.reload();
	});
	
	
//	watch(source+"/**/*.css", function(){
//		gulp.start("styles");
//	});
});
//------------------------------------------------------------------------------
gulp.task("cssInject", ["styles"], function(){
	
	return gulp.src(source+"/**/*.css")
			   .pipe(browserSync.stream());
});



//==============================================================================
// Initial TEST starts:
//
//gulp.task("default", function(){
//	console.log("Task:	DEFAULT");
//});
//gulp.task("html",function(){
//	console.log("Task: HTML triggered by WATCH");
//});
//
//gulp.task("styles",function(){
//	console.log("Task: STYLES triggered by WATCH");
//});
//------------------------------------------------------------------------------
//gulp.task("watch", function(){
//	watch("index.cfm", function(){
//		gulp.start("html");
//	});
//	//
//	//watch("./assets/styles/**/*.css", function(){
//	watch(source+"/**/*.css", function(){
//		gulp.start("styles");
//	});
//});
//Initial TEST ends.
//==============================================================================


