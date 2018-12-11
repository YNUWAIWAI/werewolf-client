const path = require('path')

module.exports = {
  entry: {
    lobby: './src/scripts/lobby',
    village: './src/scripts/village'
  },
  externals: {
    'prop-types': 'PropTypes',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-intl': 'ReactIntl',
    'react-redux': 'ReactRedux',
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
