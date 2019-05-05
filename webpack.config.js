const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const config = require('./config')

module.exports = {
  entry: {
    landing: './src/scripts/landing',
    lobby: './src/scripts/lobby',
    village: './src/scripts/village'
  },
  externals: {
    'fuse.js': 'Fuse',
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
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            'drop_console': true
          }
        }
      })
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(config.dest, 'javascripts')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
