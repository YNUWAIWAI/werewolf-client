const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
    'redux': 'Redux'
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          compress: {
            'drop_console': true
          }
        }
      })
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../public/javascripts')
  }
}
