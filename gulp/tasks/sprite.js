/* Section 12 Lecture 33 */
var  gulp = require("gulp")
	,svgSprite = require("gulp-svg-sprite")
	
	,config = {
		mode:{
			css:{
				render:{
					css:{
						template: ''
					}
				}
			}
		}
	}
;

gulp.task("createSprite", function(){
	return gulp.src("./EX2/assets/img/icons_svg/**/*.svg")
				.pipe(svgSprite(config))
			   .pipe( gulp.dest("./EX2/builds/sprite/") );
});