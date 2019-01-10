const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('./config')

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
        loader: 'awesome-typescript-loader',
        test: /\.tsx?$/
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/
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
    path: config.dest
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
