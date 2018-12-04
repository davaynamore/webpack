module.exports = (path) => {
	return {
		devServer: {
			contentBase: path,
			stats: 'errors-only',
			port: 9000
		}
	}
};