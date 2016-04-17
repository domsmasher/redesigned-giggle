var path = require('path');


module.exports = {
	context: path.resolve('js'),
	entry: ["./app"],
	output: {
		path: path.resolve('build/'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!autoprefixer-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}