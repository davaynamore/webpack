const path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
WebpackNotifierPlugin = require('webpack-notifier'),
merge = require('webpack-merge'),
MiniCssExtractPlugin = require("mini-css-extract-plugin"),
devServer = require('./webpack/devserver'),
sassLoader = require('./webpack/sass-loader'),
imgLoader = require('./webpack/img-loader'),
babelLoader = require('./webpack/babel-loader'),
minimizer = require('./webpack/minimizer');

const devMode = process.env.NODE_ENV !== 'production';

const pathes = {
  dist: './app',
  src: './src'
}

const common = merge([
  {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, pathes.dist),
      filename: 'js/bundle.js'
    },
    plugins: [
      new WebpackNotifierPlugin(),
      new CleanWebpackPlugin([pathes.dist]),
      new HtmlWebpackPlugin({
        chunks: ['common'],
        template: pathes.src + '/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? 'css/style.css' : 'css/style.[hash].css',
        chunkFilename: devMode ? 'css/commom.css' : 'css/common.[hash].css'
      })
    ]
  },
  sassLoader(),
  imgLoader(),
  babelLoader()
]);

const developmentConfig = {
  mode: 'development',
  devtool: 'source-map'
};

module.exports = (env) => {
  if(env === 'production'){
    return merge([
      common,
      minimizer()
    ]);
  }

  if(env === 'development'){
    return merge([
      common,
      devServer(pathes.dist)
    ])
  }
}