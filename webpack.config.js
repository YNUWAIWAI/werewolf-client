const path = require('path')

module.exports = {
  entry: './entry.js',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/javascripts')
  }
}
