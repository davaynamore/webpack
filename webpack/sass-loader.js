const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
autoprefixer = require('autoprefixer');

module.exports = () => {
	return {
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader", options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
							autoprefixer({
								browsers:['ie >= 8', 'last 4 version']
							})
							],
							sourceMap: true
						}
					},
					{
						loader: "sass-loader", options: {
							sourceMap: true
						}
					}
					]
				}
			]
		}
	}
};