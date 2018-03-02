const path = require('path')

module.exports = {
  entry: {
    lobby: './src/scripts/lobby',
    village: './src/scripts/village'
  },
  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
  },
  mode: 'production',
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
    filename: '[name].js',
    path: path.resolve(__dirname, '../public/javascripts')
  }
}
