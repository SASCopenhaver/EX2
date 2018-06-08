var path = require("path");

module.exports = 
{
	entry:"./assets/scripts/app.js",
	output: {
		path: path.resolve(__dirname, "./builds/scripts"),
		filename: "app.js"
	},
	
	module:{
		/*loaders*/ rules:[
			{
				loader: "babel-loader",
				query:{
					presets:["es2015"]
				},
				test: /\.js$/,
				exclude: node_modules/
			}
		]
	}
}
