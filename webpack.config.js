const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    first: path.resolve('./src/index.js')
  },
  output: {
    path: path.resolve('dist-webpack'),
    filename: '[name]-webpack-bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  devServer: {
    contentBase: 'dist-webpack',
    port: 10001,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist-webpack/template.html',
      filename: 'index.html',
      inject: true,
      chunks: ['first']
    })
  ]
}
