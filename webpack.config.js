const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const UglifyJS = require('uglify-es');

const DefaultUglifyJsOptions = UglifyJS.default_options();
const compress = DefaultUglifyJsOptions.compress;
for (let compressOption in compress) {
	compress[compressOption] = false;
}
compress.unused = true;

module.exports = env => {
	return {
		entry: {			
			main: './assets/js/main.js'
		},
		output: {
            path: path.resolve(__dirname, 'assets/jsbundle'),
			filename: 'main.js' // '[name].[chunkhash].js' put this if you want to get hashed files to cache bust
		},
		
		module: {
			rules: [				
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader', 'prettier-loader']
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
						'postcss-loader'
					]
				},
				{ test: /\.hbs$/, 
					use: [{
						loader: "handlebars-loader",
						options: {helperDirs: path.resolve(__dirname, "assets/js/handlebar")} 
					}]				
				}
			]
		},
		plugins: [
			//new CleanWebpackPlugin('public/js/dist', {}),
			new MiniCssExtractPlugin({
				filename: 'batuu.css' // 'style.[contenthash].css' put this if you want to get hashed files to cache bust
            }),
            new webpack.ProvidePlugin({
                _: "lodash"
			}),
			new webpack.LoaderOptionsPlugin({
				options: {
				  handlebarsLoader: {}
				}
			  }),
			
			  new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),
			
			// new HtmlWebpackPlugin({
			// 	inject: false,
			// 	hash: true,
			// 	template: './assets/index.html',
			// 	children: false,
			// 	filename: '../index.html'
			// }),
			//new WebpackMd5Hash()
		],
		optimization: {
			splitChunks: {
				chunks: 'all',
				minSize: 0
			},
			minimize: true,
			minimizer: [
				new UglifyJsPlugin({
                    uglifyOptions: {
                        sourceMap: true,
						compress,
						mangle: false,
						output: {
							beautify: env.NODE_ENV !== 'production' ? true : false
						}
					}
				})
			],
			usedExports: true,
			sideEffects: true
		}
	};
};
