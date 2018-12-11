const path = require('path')

module.exports = {
  entry: {
    lobby: './src/scripts/lobby',
    village: './src/scripts/village'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-intl': 'react-intl',
    'react-redux': 'react-redux',
    'react-select': 'react-select',
    'redux': 'redux'
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
