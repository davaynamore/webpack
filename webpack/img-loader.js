module.exports = () => {
	return {
		module: {
			rules: [
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]?[hash]',
						outputPath: './img/'
					}
				}
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
			]
		}
	}
};