module.exports = {
	entry: "./components/main.jsx",
	output: {
		//path: "./public/build",
		filename: "app.bundle.js",
		publicPath: "/build/"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	}
}
