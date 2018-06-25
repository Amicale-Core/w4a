const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, './public/js'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ '@babel/preset-env', '@babel/preset-stage-2', '@babel/preset-react' ]
				}
			},
			{ 
				test: /\.css$/,
				loader: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		]
	}
};
