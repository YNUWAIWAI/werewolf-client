const path = require('path')

module.exports = {
  entry: './entry.js',
  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
  },
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
    filename: 'village.js',
    path: path.resolve(__dirname, '../public/javascripts')
  }
}
