var  gulp = require("gulp")
	//,watch = require("gulp-watch")
	,postcss = require("gulp-postcss")
	,autoprefixer = require("autoprefixer")
	,cssvars = require("postcss-simple-vars")
	,nested = require("postcss-nested")
	,cssImport = require("postcss-import")
	//,browserSync = require("browser-sync").create()
	,mixins = require("postcss-mixins")
	,hexrgba = require("postcss-hexrgba")
		
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
								mixins,
								cssvars,
								nested,
								hexrgba,
								autoprefixer 
							  ]))
				.on("error", function(errorInfo){
					console.log(errorInfo.toString());
					this.emit("end");
				})
				.pipe( gulp.dest(dest));
				
});
//------------------------------------------------------------------------------
