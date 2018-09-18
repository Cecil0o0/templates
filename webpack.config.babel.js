import path from 'path'

export default {
  mode: 'development',
  entry: {
    bundle: path.resolve('./src/index.js')
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: 'babel-loader'
      }
    ]
  }
}
